import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Nav';
import Footer from '../components/Footer';
import logo from '/spiner.png?url';

type Property = {
  id: number;
  name: string;
  image: string;
  country: string;
  city: string;
  investors: number;
  type: 'Construction' | 'Rental';
  transactionDate: string; // format: YYYY-MM-DD
  price:number;
  tokenprice:number;
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
    price:100000,
    tokenprice:24,
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
    price:240000,
    tokenprice:20,
  },
  {
    id: 3,
    name: 'Apartment Senopati',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MihadUIznPsCCd1ylWKqAEjXvvak8LE-qVl9ANpcUb6qaq-XnItF2YK3VuSvR-Ud3nY&usqp=CAU',
    country: 'Indonesia',
    city: 'Jakarta',
    investors: 80,
    type: 'Rental',
    transactionDate: '2025-07-01',
    price:240000,
    tokenprice:20,
  },
  {
    id: 4,
    name: 'Apartment Senopati',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MihadUIznPsCCd1ylWKqAEjXvvak8LE-qVl9ANpcUb6qaq-XnItF2YK3VuSvR-Ud3nY&usqp=CAU',
    country: 'Indonesia',
    city: 'Jakarta',
    investors: 80,
    type: 'Rental',
    transactionDate: '2025-07-01',
    price:240000,
    tokenprice:20,
  },
  {
    id: 5,
    name: 'Apartment Senopati',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MihadUIznPsCCd1ylWKqAEjXvvak8LE-qVl9ANpcUb6qaq-XnItF2YK3VuSvR-Ud3nY&usqp=CAU',
    country: 'Indonesia',
    city: 'Jakarta',
    investors: 80,
    type: 'Rental',
    transactionDate: '2025-07-01',
    price:240000,
    tokenprice:20,
  },
  {
    id: 6,
    name: 'Apartment Senopati',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MihadUIznPsCCd1ylWKqAEjXvvak8LE-qVl9ANpcUb6qaq-XnItF2YK3VuSvR-Ud3nY&usqp=CAU',
    country: 'Indonesia',
    city: 'Jakarta',
    investors: 80,
    type: 'Rental',
    transactionDate: '2025-07-01',
    price:240000,
    tokenprice:20,
  },
  // Tambahkan lebih banyak data jika diperlukan
];

export default function Ppmarket() {
    return (
        <>
            <Header />
            <Navigation />
            <div className="bg-[#F0F0F0] min-h-screen">
                <div className="max-w-6xl mx-auto px-4 py-6">
                    <h2 className="text-2xl font-semibold text-[#2E4B60] mb-6">Secondary Market</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {/* Total Trading */}
                    <div className="bg-white p-6 rounded-xl shadow flex items-center space-x-4">
                        <div className="p-4 bg-blue-100 rounded-full">
                        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2"
                            viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M12 8c1.104 0 2-.896 2-2s-.896-2-2-2s-2 .896-2 2s.896 2 2 2zm0 2c-1.657 0-5 0.837-5 2.5V16h10v-3.5c0-1.663-3.343-2.5-5-2.5z"/>
                        </svg>
                        </div>
                        <div>
                        <p className="text-sm text-gray-500">Total Trading</p>
                        <p className="text-lg font-semibold text-gray-800">$1,250,000</p>
                        </div>
                    </div>

                    {/* Total Trader */}
                    <div className="bg-white p-6 rounded-xl shadow flex items-center space-x-4">
                        <div className="p-4 bg-green-100 rounded-full">
                        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" strokeWidth="2"
                            viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m3 0a4 4 0 100-8 4 4 0 000 8zm6 0a4 4 0 100-8 4 4 0 000 8z"/>
                        </svg>
                        </div>
                        <div>
                        <p className="text-sm text-gray-500">Total Trader</p>
                        <p className="text-lg font-semibold text-gray-800">1,482</p>
                        </div>
                    </div>

                    {/* Rata-rata Harga Jual */}
                    <div className="bg-white p-6 rounded-xl shadow flex items-center space-x-4">
                        <div className="p-4 bg-purple-100 rounded-full">
                        <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2"
                            viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M3 10h11M9 21V3m0 18a4 4 0 100-8 4 4 0 000 8zm7-5h5M18 21v-8"/>
                        </svg>
                        </div>
                        <div>
                        <p className="text-sm text-gray-500">Avg. Selling Price</p>
                        <p className="text-lg font-semibold text-gray-800">$12,500</p>
                        </div>
                    </div>
                    </div>

                    {/* Add more content like market listings, buy/sell actions etc. here */}
                </div>
                {/* Property Listing */}
                <div className="max-w-6xl mx-auto px-4 pb-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Example Card */}
                    {properties.map((property) => (
                    <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
                    <img
                        src={property.image}
                        alt="Property"
                        className="w-full h-48 object-cover"
                    />

                    <div className="p-5 space-y-3">
                        <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">{property.name}</h3>
                            <p className="text-sm text-gray-500">{property.country}, {property.city}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-xs text-gray-500">Property price</p>
                            <p className="text-lg font-semibold text-[#00B6C1]">$ {property.price.toLocaleString()}</p>
                        </div>
                        </div>

                        <div className="flex justify-between items-center">
                        <div>
                            <p className="text-xs text-gray-500">Token price</p>
                            <p className="text-base font-semibold text-[#00B6C1]">
                            ${property.tokenprice.toLocaleString()} <span className="line-through text-sm text-gray-400 ml-1">$ {(property.tokenprice+50).toLocaleString()}</span>
                            </p>
                        </div>
                        <div className="text-right">
                            <p className="text-xs text-gray-500">APR</p>
                            <p className="text-base font-semibold text-gray-600">--</p>
                        </div>
                        </div>

                        <p className="text-sm text-gray-500">
                        Available to buy: <span className="font-semibold text-gray-800">71 Tokens</span>
                        </p>

                        <div className="flex gap-3 pt-2">
                        <button className="w-full bg-[#00B6C1] text-white py-2 px-4 rounded-xl font-semibold hover:bg-[#00a5b0] transition">
                            Buy
                        </button>
                        <button className="w-full bg-gray-200 text-gray-600 py-2 px-4 rounded-xl font-semibold hover:bg-gray-300 transition">
                            Sell
                        </button>
                        </div>
                    </div>
                    </div>
                    ))}
                    {/* Tambahkan card lainnya dengan data berbeda */}
                </div>
                </div>

                </div>

            <Footer />
        </>
    );
}