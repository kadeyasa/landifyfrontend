import Header from '../components/Header';
import Navigation from '../components/Nav';
import Footer from '../components/Footer';
import { Link } from 'react-router';

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
  progress:number;
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
    progress: 100,
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
    progress: 100,
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
    sold: true,
    progress: 100,
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
    sold: true,
    progress: 100,
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
    sold: true,
    progress: 100,
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
    sold: true,
    progress: 100,
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
    sold: true,
    progress: 100,
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
    sold: true,
    progress: 100,
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
    sold: true,
    progress: 100,
  }
];

export default function Rentals() {
    const sortedData = initialData
    .sort((a, b) => Number(a.sold) - Number(b.sold));
    return (
        <>
            <Header />
            <Navigation />
            <div className="bg-[#F0F0F0] min-h-screen">
                <div className="max-w-6xl mx-auto px-4 py-6 ">
                    <h2 className="text-2xl font-semibold text-[#2E4B60] mb-6">Marketplace</h2>

                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                All the properties are sold, but...
                            </h2>
                            <p className="text-gray-600 text-base">
                                While we prepare new properties — you can buy already rent-generating properties on the <span className="font-semibold">Secondary Market</span>.
                            </p>
                        </div>

                        <Link
                            to="/secondary-market"
                            className="bg-gradient-to-r from-red-500 to-orange-400 text-white font-semibold px-6 py-3 rounded-lg shadow hover:opacity-90 transition duration-200"
                        >
                            Go to Secondary Market
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                    {sortedData.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg group relative"
                        >
                            {/* Gambar dan overlay */}
                            <div className="relative">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/70 to-transparent" />
                            {item.sold && (
                                <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded-md shadow">
                                SOLD OUT
                                </div>
                            )}
                            </div>

                            {/* Konten */}
                            <div className="p-4">
                            {/* Header nama dan APR */}
                            <div className="flex justify-between items-start mb-1">
                                <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                                <div className="px-2 py-4 text-white font-bold rounded-md bg-gradient-to-r from-[#2E4B60] to-[#4A6E8C] text-sm">
                                APR: {item.apr}%
                                </div>
                            </div>

                            {/* Lokasi & harga */}
                            <p className="text-sm text-gray-500">{item.location}, {item.city}</p>
                            <p className="text-base font-semibold text-gray-700 mt-1 mb-3">${item.price.toLocaleString()}</p>

                            {/* ROI dan Profit Distribution */}
                            <div className="flex justify-between items-center mb-3">
                                <div className="text-xs text-gray-500">Profit Distribution:<br /><span className="font-medium">{item.profitDistribution}</span></div>
                                <div className="text-right">
                                <p className="text-sm text-gray-500">ROI</p>
                                <p className="text-xl font-bold text-[#2E4B60]">{item.totalReturn}%</p>
                                </div>
                            </div>

                            {/* Detail investor */}
                            <p className="text-xs text-gray-500 mb-3">Investors: {item.investors}</p>

                            {/* Progress */}
                            <div className="mb-3">
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                    className="bg-[#2E4B60] h-2 rounded-full transition-all duration-300 ease-in-out"
                                    style={{ width: `${item.progress}%` }}
                                />
                                </div>
                                <p className="text-xs text-gray-500 mt-1">Progress: {item.progress}%</p>
                            </div>

                            
                            </div>
                        </div>
                        ))}

                </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
