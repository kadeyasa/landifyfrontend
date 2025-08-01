import { useState } from 'react';
import Navigation from '../components/Nav';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  FaUsers,
  FaBuilding,
  FaMoneyBillWave,
  FaWallet,
  FaCoins,
  FaArrowRight,
  FaHandHoldingUsd,
} from 'react-icons/fa';

type Property = {
  id: number;
  name: string;
  image: string;
  country: string;
  city: string;
  investors: number;
  type: 'Construction' | 'Rental';
  transactionDate: string; // format: YYYY-MM-DD
};

const properties: Property[] = [
  {
    id: 1,
    name: 'Villa Canggu',
    image:
      'https://q-xx.bstatic.com/xdata/images/hotel/max500/524711253.jpg?k=e15b48ef2361cc6c31c6ec2396be39da4cb833861314e2e6b3752adbe214b3f1&o=',
    country: 'Indonesia',
    city: 'Canggu',
    investors: 100,
    type: 'Construction',
    transactionDate: '2025-07-20',
  },
  {
    id: 2,
    name: 'Apartment Senopati',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MihadUIznPsCCd1ylWKqAEjXvvak8LE-qVl9ANpcUb6qaq-XnItF2YK3VuSvR-Ud3nY&usqp=CAU',
    country: 'Indonesia',
    city: 'Jakarta',
    investors: 80,
    type: 'Rental',
    transactionDate: '2025-07-01',
  },
  // tambahkan properti lain sesuai kebutuhan
];

export default function Portfolio() {
  const [filter, setFilter] = useState<'All' | 'Construction' | 'Rental'>('All');
  const [location, setLocation] = useState<'All' | 'Jakarta' | 'Canggu'>('All');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const filteredProperties = properties.filter((p) => {
    const statusMatch = filter === 'All' || p.type === filter;
    const locationMatch = location === 'All' || p.city === location;
    const dateMatch =
      (!fromDate || new Date(p.transactionDate) >= new Date(fromDate)) &&
      (!toDate || new Date(p.transactionDate) <= new Date(toDate));
    return statusMatch && locationMatch && dateMatch;
  });

  return (
    <>
      <Header />
      <Navigation />

      <div className="bg-[#F5F5F5] py-8 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-[20%_80%] gap-6">
          {/* Left Panel */}
          <div className="bg-white p-4 rounded-xl shadow-md space-y-4">
            <h3 className="text-lg font-semibold text-[#2E4B60]">Portfolio Summary</h3>

            <div className="flex items-center gap-3 text-sm text-gray-700 bg-[#F0F4F7] rounded-lg p-3">
              <FaWallet className="text-[#2E4B60] text-xl" />
              <div className="flex-1">
                <p className="font-medium">Balance</p>
                <p className="font-bold text-lg text-[#2E4B60]">$100</p>
              </div>
              <button className="flex items-center gap-1 bg-[#2E4B60] text-white text-sm px-3 py-1 rounded-md hover:opacity-90">
                <FaHandHoldingUsd /> Claim
              </button>
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-700">
              <FaBuilding className="text-[#2E4B60]" />
              <div>
                <p className="font-medium">Total Assets</p>
                <p>{filteredProperties.length} Properties</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-700">
              <FaMoneyBillWave className="text-[#2E4B60]" />
              <div>
                <p className="font-medium">Estimated Value</p>
                <p>$400.000</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-700">
              <FaCoins className="text-[#2E4B60]" />
              <div>
                <p className="font-medium">Total Revenue</p>
                <p>$400</p>
              </div>
            </div>

            <button className="flex items-center justify-center gap-2 mt-4 w-full bg-[#2E4B60] text-white py-2 rounded-lg hover:opacity-90 transition">
              <FaArrowRight /> View Details
            </button>
          </div>

          {/* Right Panel */}
          <div>
            {/* Filters */}
            <h3 className='text-gray-600 font-semibold mb-6'>Your Properties</h3>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
              <input
                type="date"
                className="border px-3 py-2 rounded text-sm w-full sm:w-auto bg-gray-400"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                placeholder="From"
              />
              <input
                type="date"
                className="border px-3 py-2 rounded text-sm w-full sm:w-auto bg-gray-400"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                placeholder="To"
              />
              <select
                className="border px-3 py-2 rounded text-sm w-full sm:w-auto bg-gray-400"
                onChange={(e) => setLocation(e.target.value as any)}
              >
                <option value="All">All Locations</option>
                <option value="Jakarta">Jakarta</option>
                <option value="Canggu">Canggu</option>
              </select>
              <select
                className="border px-3 py-2 rounded text-sm w-full sm:w-auto bg-gray-400"
                onChange={(e) => setFilter(e.target.value as any)}
              >
                <option value="All">All</option>
                <option value="Construction">Construction</option>
                <option value="Rental">Rental</option>
              </select>
            </div>
            {/* Property Cards */}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {filteredProperties.length === 0 ? (
                <div className="rounded-2xl overflow-hidden shadow-lg bg-white col-span-full text-center text-gray-500 font-semibold py-10 px-4">
                Property Not Found
                </div>
            ) : (
                filteredProperties.map((prop) => (
                <div
                    key={prop.id}
                    className="rounded-2xl overflow-hidden shadow-lg bg-white"
                >
                    <div className="relative h-60">
                    <img
                        src={prop.image}
                        alt={prop.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2E4B60] via-[#2E4B60aa] to-transparent" />
                    <div className="absolute top-3 left-3 bg-[#2E4B60] text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                        <FaUsers size={12} /> {prop.investors}
                    </div>
                    </div>

                    <div className="bg-[#2E4B60] text-white text-center py-4">
                    <h3 className="text-lg font-semibold">{prop.name}</h3>
                    <p className="text-sm bg-white text-[#2E4B60] inline-block px-3 py-1 rounded-full mt-2">
                        🇮🇩 {prop.country}, {prop.city}
                    </p>
                    </div>

                    <div className="p-4">
                    <button className="w-full bg-white border text-[#2E4B60] font-bold py-2 rounded-xl hover:bg-gray-100 transition">
                        Sell
                    </button>
                    </div>
                </div>
                ))
            )}
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
