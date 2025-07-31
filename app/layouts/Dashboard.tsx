import { useState } from 'react';
import Navigation from '../components/Nav'; 
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaFlag,FaGlobe } from 'react-icons/fa';

type RealEstate = {
  id: number;
  name: string;
  price: number;
  location: string;
  image: string;
  apr: number;
  totalReturn: number;
  status: string;
  country: string;
  city: string;
  investors: number;
  profitDistribution: string;
  sold:boolean;
};

const initialData: RealEstate[] = [
  {
    id: 1,
    name: 'Villa Canggu',
    price: 200000,
    location: 'Bali',
    image: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/524711253.jpg?k=e15b48ef2361cc6c31c6ec2396be39da4cb833861314e2e6b3752adbe214b3f1&o=', // ganti sesuai path gambar kamu
    apr: 20.5,
    totalReturn: 10.79,
    status: 'Construction',
    country: 'Indonesia',
    city: 'Canggu',
    sold: true,
    investors: 100,
    profitDistribution: 'Q4 2025',
  },
  {
    id: 2,
    name: 'Villa Pererenan',
    price: 300000,
    location: 'Bali',
    image: 'https://bali-home-immo.com/images/properties/thumb/brand-new-2-bedroom-villa-for-monthly-rental-in-pererenan-tumbak-bayuh-bali-rf37693EX5cYiitPvormYHRfaq1716199029.jpg', // ganti sesuai path gambar kamu
    apr: 20.5,
    totalReturn: 10.79,
    status: 'Construction',
    country: 'Indonesia',
    city: 'Canggu',
    investors: 100,
    profitDistribution: 'Q4 2025',
    sold: true,
  },
  {
    id: 3,
    name: 'Villa Ubud',
    price: 200000,
    location: 'Bali',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM8pz34ytEAmy2nrTkGIpmn756cVSHOOqARA&s', // ganti sesuai path gambar kamu
    apr: 20.5,
    totalReturn: 10.79,
    status: 'Construction',
    country: 'Indonesia',
    city: 'Ubud',
    investors: 100,
    profitDistribution: 'Q4 2025',
    sold: false,
  },
  {
    id: 4,
    name: 'Villa Canggu',
    price: 200000,
    location: 'Bali',
    image: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/524711253.jpg?k=e15b48ef2361cc6c31c6ec2396be39da4cb833861314e2e6b3752adbe214b3f1&o=', // ganti sesuai path gambar kamu
    apr: 20.5,
    totalReturn: 10.79,
    status: 'Construction',
    country: 'Indonesia',
    city: 'Canggu',
    investors: 100,
    profitDistribution: 'Q4 2025',
    sold: false,
  },
  {
    id: 5,
    name: 'Apartemen Lebak Bulus',
    price: 300000,
    location: 'Jakarta',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MihadUIznPsCCd1ylWKqAEjXvvak8LE-qVl9ANpcUb6qaq-XnItF2YK3VuSvR-Ud3nY&usqp=CAU', // ganti sesuai path gambar kamu
    apr: 18,
    totalReturn: 10.79,
    status: 'Construction',
    country: 'Indonesia',
    city: 'Jakarta',
    investors: 100,
    profitDistribution: 'Q2 2026',
    sold: false,
  },
  {
    id: 6,
    name: 'Villa Ubud',
    price: 200000,
    location: 'Bali',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM8pz34ytEAmy2nrTkGIpmn756cVSHOOqARA&s', // ganti sesuai path gambar kamu
    apr: 20.5,
    totalReturn: 10.79,
    status: 'Construction',
    country: 'Indonesia',
    city: 'Ubud',
    investors: 100,
    profitDistribution: 'Q4 2025',
    sold: false,
  },
  {
    id: 7,
    name: 'Apartemen Lebak Bulus',
    price: 300000,
    location: 'Jakarta',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MihadUIznPsCCd1ylWKqAEjXvvak8LE-qVl9ANpcUb6qaq-XnItF2YK3VuSvR-Ud3nY&usqp=CAU', // ganti sesuai path gambar kamu
    apr: 18,
    totalReturn: 10.79,
    status: 'Construction',
    country: 'Indonesia',
    city: 'Jakarta',
    investors: 100,
    profitDistribution: 'Q2 2026',
    sold: false,
  },
  {
    id: 8,
    name: 'Villa Ubud',
    price: 200000,
    location: 'Bali',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM8pz34ytEAmy2nrTkGIpmn756cVSHOOqARA&s', // ganti sesuai path gambar kamu
    apr: 20.5,
    totalReturn: 10.79,
    status: 'Construction',
    country: 'Indonesia',
    city: 'Ubud',
    investors: 100,
    profitDistribution: 'Q4 2025',
    sold: false,
  },
  {
    id: 9,
    name: 'Apartemen Lebak Bulus',
    price: 300000,
    location: 'Jakarta',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MihadUIznPsCCd1ylWKqAEjXvvak8LE-qVl9ANpcUb6qaq-XnItF2YK3VuSvR-Ud3nY&usqp=CAU', // ganti sesuai path gambar kamu
    apr: 18,
    totalReturn: 10.79,
    status: 'Construction',
    country: 'Indonesia',
    city: 'Jakarta',
    investors: 100,
    profitDistribution: 'Q2 2026',
    sold: false,
  },
  {
    id: 10,
    name: 'Villa Ubud',
    price: 200000,
    location: 'Bali',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM8pz34ytEAmy2nrTkGIpmn756cVSHOOqARA&s', // ganti sesuai path gambar kamu
    apr: 20.5,
    totalReturn: 10.79,
    status: 'Construction',
    country: 'Indonesia',
    city: 'Ubud',
    investors: 100,
    profitDistribution: 'Q4 2025',
    sold: false,
  },
  {
    id: 11,
    name: 'Villa Ubud',
    price: 200000,
    location: 'Bali',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM8pz34ytEAmy2nrTkGIpmn756cVSHOOqARA&s', // ganti sesuai path gambar kamu
    apr: 20.5,
    totalReturn: 10.79,
    status: 'Construction',
    country: 'Indonesia',
    city: 'Ubud',
    investors: 100,
    profitDistribution: 'Q4 2025',
    sold: false,
  },
];


export default function Dashboard() {
  const [sortByLocation, setSortByLocation] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  // Ambil daftar lokasi unik
  const locations = Array.from(new Set(initialData.map((item) => item.location)));
  const availableProperties = initialData.filter((item) => !item.sold);
  const soldOutProperties = initialData.filter((item) => item.sold);
  // Filter dan sort data
  const filteredData = selectedLocation
    ? availableProperties.filter((item) => item.location === selectedLocation)
    : availableProperties;

  const sortedData = sortByLocation
    ? [...filteredData].sort((a, b) => a.location.localeCompare(b.location))
    : filteredData;

  return (
    <>
      <Header />
      <Navigation />
      <div className="bg-[#F0F0F0] min-h-screen">
        <div className="max-w-6xl mx-auto px-4 py-6">
          {/* Filter lokasi */}
          <div className="flex flex-wrap gap-2 mb-6">
            <button
            onClick={() => setSelectedLocation(null)}
            className={`flex items-center gap-2 px-4 py-1 rounded border ${
                selectedLocation === null
                ? 'bg-[#2E4B60] text-white'
                : 'bg-white text-[#2E4B60]'
            }`}
            >
            <FaGlobe />
            All
            </button>
            {locations.map((loc) => (
            <button
                key={loc}
                onClick={() => setSelectedLocation(loc)}
                className={`flex items-center gap-2 px-4 py-1 rounded border ${
                selectedLocation === loc
                    ? 'bg-[#2E4B60] text-white'
                    : 'bg-white text-[#2E4B60]'
                }`}
            >
                <FaFlag />
                {loc}
            </button>
            ))}
        </div>

          {/* List properti */}
          <h4 className="font-semibold text-gray-600 mb-6">Construction Properties </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sortedData.map((item) => (
                <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md"
                >
                {/* Top Image Section */}
                <div className="relative">
                    <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                    🔥
                    </div>
                    <div className="absolute top-2 right-2 bg-white text-gray-700 text-xs px-2 py-1 rounded shadow">
                    👥 {item.investors}
                    </div>
                    <div className="absolute top-2 left-10 bg-blue-600 text-white text-xs px-3 py-1 rounded-md">
                    Construction Funding
                    </div>
                    <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
                    Profit distribution {item.profitDistribution}
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-4">
                    <div className="text-xs text-gray-600 mb-1 flex items-center gap-2">
                    🏗️ {item.status} | 🌍 {item.country}, {item.city}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-600">{item.name}</h3>
                        <p className="text-sm text-gray-700">${item.price.toLocaleString()}</p>

                        {/* Returns */}
                        <div className="mt-2 flex justify-between items-center text-sm">
                        <div>
                            <div className="text-gray-500">Total Return</div>
                            <div className="font-bold">{item.totalReturn}%</div>
                        </div>
                        <div className="text-right">
                            <div className="text-gray-500">APR</div>
                            <div className="font-bold text-teal-700 text-lg">
                            {item.apr}%
                            </div>
                        </div>
                        </div>

                        {/* Progress bar */}
                        <div className="mt-4 h-2 rounded-full bg-gray-200 overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-teal-400 via-green-400 to-gray-500"
                            style={{ width: '70%' }}
                        ></div>
                        </div>
                    </div>
                    </div>
                ))}
          </div>
            <p className='mb-6'></p>
            <h4 className="font-semibold text-gray-600 mb-6">Rental Properties</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {soldOutProperties.map((item) => (
                    <div
                    key={item.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-md"
                    >
                    {/* Top Image Section */}
                    <div className="relative">
                        <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                        🔥
                        </div>
                        <div className="absolute top-2 right-2 bg-white text-gray-700 text-xs px-2 py-1 rounded shadow">
                        👥 {item.investors}
                        </div>
                        <div className="absolute top-2 left-10 bg-blue-600 text-white text-xs px-3 py-1 rounded-md">
                        Sold Out
                        </div>
                        <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
                        Profit distribution {item.profitDistribution}
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-4">
                        <div className="text-xs text-gray-600 mb-1 flex items-center gap-2">
                        🏗️ {item.status} | 🌍 {item.country}, {item.city}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-600">{item.name}</h3>
                            <p className="text-sm text-gray-700">${item.price.toLocaleString()}</p>

                            {/* Returns */}
                            <div className="mt-2 flex justify-between items-center text-sm">
                            <div>
                                <div className="text-gray-500">Total Return</div>
                                <div className="font-bold">{item.totalReturn}%</div>
                            </div>
                            <div className="text-right">
                                <div className="text-gray-500">APR</div>
                                <div className="font-bold text-teal-700 text-lg">
                                {item.apr}%
                                </div>
                            </div>
                            </div>

                            {/* Progress bar */}
                            <div className="mt-4 h-2 rounded-full bg-gray-200 overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-teal-400 via-green-400 to-gray-500"
                                style={{ width: '100%' }}
                            ></div>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
