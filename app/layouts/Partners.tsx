import { useState } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Nav';
import Footer from '../components/Footer';

const dummyPartners = [
    {
        id: 1,
        name: 'CryptoLink',
        logo: 'https://via.placeholder.com/100x100.png?text=CryptoLink',
        description: 'Leading blockchain integrations.',
    },
    {
        id: 2,
        name: 'BlockTradeX',
        logo: 'https://via.placeholder.com/100x100.png?text=BlockTradeX',
        description: 'Secure crypto trading partner.',
    },
    {
        id: 3,
        name: 'MetaAssets',
        logo: 'https://via.placeholder.com/100x100.png?text=MetaAssets',
        description: 'NFT asset management.',
    },
    {
        id: 4,
        name: 'FinTechZone',
        logo: 'https://via.placeholder.com/100x100.png?text=FinTechZone',
        description: 'Innovative finance tools.',
    },
    {
        id: 5,
        name: 'ChainSecure',
        logo: 'https://via.placeholder.com/100x100.png?text=ChainSecure',
        description: 'Security solutions for Web3.',
    },
];

export default function Partners() {
    const [partners] = useState(dummyPartners);

    return (
        <>
            <Header />
            <Navigation />
            <div className="bg-[#F0F0F0] min-h-screen">
                <div className="max-w-6xl mx-auto px-4 py-6">
                    <h2 className='text-2xl font-semibold text-[#2E4B60] mb-6'>Partners</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {partners.map((partner) => (
                            <div key={partner.id} className="bg-white shadow rounded-lg p-4 flex flex-col items-center">
                                <img src={partner.logo} alt={partner.name} className="w-24 h-24 object-cover rounded-full mb-4" />
                                <h3 className="text-lg font-semibold text-gray-800 mb-1">{partner.name}</h3>
                                <p className="text-sm text-gray-500 text-center mb-4">{partner.description}</p>
                                <button
                                    onClick={() => alert(`Viewing detail for: ${partner.name}`)}
                                    className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition"
                                >
                                    View Detail
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
