import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { FaChartLine, FaMoneyBillWave, FaPercentage, FaMapMarkerAlt, FaInfoCircle } from 'react-icons/fa';
import { IoIosImages } from 'react-icons/io';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from '../components/Header';
import Navigation from '../components/Nav';
import Footer from '../components/Footer';
import logo from '/spiner.png?url';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const priceData = [
  { time: 'Jan', price: 20 },
  { time: 'Feb', price: 21 },
  { time: 'Mar', price: 22 },
  { time: 'Apr', price: 23 },
  { time: 'May', price: 24 },
  { time: 'Jun', price: 24.5 },
  { time: 'Jul', price: 25 },
];

const mockData = {
  id: '1',
  totalRaised: 100000,
  requiredFund: 250000,
  roi: '12%',
  apr: '6%',
  distribution: 'Q4 2026',
  images: [
    'https://cdn.marketingvillas.com/images/otas/villas/P00545/01%20Pala%20Ubud%20-%20Villa%20Agung%20-%20Palatial%20tropical%20holiday%20villa.jpg?_ga=2.223243676.648028325.1754024441-1571607033.1754024441#_gl=1*k4zydq*_gcl_au*MTMxODQ1Nzc3NS4xNzU0MDI0NDQx',
    'https://cdn.marketingvillas.com/images/otas/villas/P00545/02%20Pala%20Ubud%20-%20Villa%20Agung%20-%20Grand%20entry%20way.jpg?_ga=2.237969799.648028325.1754024441-1571607033.1754024441#_gl=1*1p3kh3*_gcl_au*MTMxODQ1Nzc3NS4xNzU0MDI0NDQx',
    'https://cdn.marketingvillas.com/images/otas/villas/P00545/03%20Pala%20Ubud%20-%20Villa%20Agung%20-%20Restful%20master%20bedroom.jpg?_ga=2.159457722.648028325.1754024441-1571607033.1754024441#_gl=1*12q901x*_gcl_au*MTMxODQ1Nzc3NS4xNzU0MDI0NDQx',
  ],
  title: 'Luxury Villa in Bali',
  location: 'Ubud, Bali',
};

const stages = [
  {
    id: 1,
    title: 'Initial funding',
    status: 'Funded',
    color: 'bg-gray-200',
    tokenRange: '$23.45–24.03',
    duration: '6 months',
    requiredFunds: '$100,000',
    tokens: 4000,
  },
  {
    id: 2,
    title: 'Construction funding',
    status: 'Ongoing',
    color: 'bg-orange-500',
    tokenRange: '$25.24–26.17',
    duration: '10 months',
    requiredFunds: '$159,713',
    tokens: 6415,
  },
  {
    id: 3,
    title: 'Investment strategy',
    status: '',
    color: 'bg-blue-400',
    tokenRange: '',
    duration: '1–3 months',
    expectedValue: '$280,000',
  },
];

export default function DetailInvestment() {
  const { id } = useParams();
  const [data, setData] = useState<any>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [activeTab, setActiveTab] = useState('DAO');
  const [active, setActive] = useState(1);
  const renderContent = () => {
    switch (activeTab) {
      case 'DAO':
        return <p className="mt-4">This section contains DAO-related documents.</p>;
      case 'Property':
        return <p className="mt-4">Here are documents related to the property.</p>;
      case 'Due Diligence':
        return <p className="mt-4">Due diligence reports and verifications are listed here.</p>;
      default:
        return null;
    }
  };
    const steps = [
        "Register your account to get started.",
        "Browse available investment properties.",
        "Choose the best offer that suits your needs.",
        "Track your investments in real time.",
    ];
  useEffect(() => {
    // Simulate fetch with timeout
    setTimeout(() => setData(mockData), 1000);
  }, [id]);

  if (!data)
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="relative w-20 h-20">
        <img
          src={logo}
          alt="Loading..."
          className="absolute top-0 left-0 w-full h-full animate-spin drop-shadow-xl "
        />
        <div className="absolute top-0 left-0 w-full h-full rounded-full  border-blue-300 animate-spin-slow" />
      </div>
    </div>
  );

  const progressPercent = Math.min(
    (data.totalRaised / data.requiredFund) * 100,
    100
  ).toFixed(1);

  return (
    <>
      <Header />
      <Navigation />
      <div className="bg-[#F0F0F0] min-h-screen">
        <div className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row gap-6">
          {/* Left: Investment Info */}
          <div className="w-full md:w-[40%] bg-white rounded-xl shadow p-6 self-start">
            <div className="mb-4">
              <div className="text-sm text-gray-600 mb-1 font-bold">Funding Progress</div>
              <span className="text-lg font-bold text-gray-600">
                ${data.totalRaised.toLocaleString()} &nbsp;
              </span>
              /
              <span className="text-lg font-bold text-gray-300">&nbsp;${data.requiredFund.toLocaleString()}</span>
            </div>
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between mb-1 text-sm">
                <span>Progress</span>
                <span>{progressPercent}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-blue-500 h-3 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* ROI, APR, Distribution */}
            <div className="grid grid-cols-3 gap-4 text-center text-sm font-medium text-gray-700">
              <div>
                <FaPercentage className="mx-auto text-blue-600" />
                <div>ROI</div>
                <div className="text-lg font-bold">{data.roi}</div>
              </div>
              <div>
                <FaChartLine className="mx-auto text-green-600" />
                <div>APR</div>
                <div className="text-lg font-bold">{data.apr}</div>
              </div>
              <div>
                <FaMoneyBillWave className="mx-auto text-yellow-600" />
                <div>Distribution</div>
                <div className="text-lg font-bold">{data.distribution}</div>
              </div>
            </div>
          </div>

          {/* Right: Slideshow */}
          <div className="w-full md:w-[60%] bg-white rounded-xl shadow p-6">
            {/* Title and Location */}
            <div className="mb-4">
              <h2 className="text-2xl font-bold flex items-center gap-2 text-gray-800">
                {data.title}
              </h2>
              <p className="text-gray-500 flex items-center gap-2 mt-1">
                <FaMapMarkerAlt className="text-red-500" />
                {data.location}
              </p>
            </div>

            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <IoIosImages className="text-gray-500" />
              Galleries
            </h2>

            <Slider dots={true} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1}>
              {data.images.map((img: string, idx: number) => (
                <div key={idx}>
                  <img
                    src={img}
                    alt={`Property ${idx}`}
                    className="w-full h-64 object-cover rounded-lg cursor-pointer"
                    onClick={() => window.open(img, '_blank')}
                  />
                </div>
              ))}
            </Slider>
            {/* Second Row: How It Works */}
            <div className="max-w-7xl mx-auto mt-[40px]">
                <div className="w-full bg-gradient-to-r from-[#2E4B60] to-[#3a5a72] text-white rounded-xl shadow-xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-center">How It Works</h2>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
                {/* Step Content */}
                    <div className="w-full md:w-1/2 space-y-4">
                        <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-white text-[#2E4B60] font-bold rounded-full flex items-center justify-center">
                            {currentStep + 1}
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">Step {currentStep + 1}</h3>
                            <p className="text-sm text-white/90">{steps[currentStep]}</p>
                        </div>
                        </div>
                        <button
                        onClick={() => setCurrentStep((prev) => (prev + 1) % steps.length)}
                        className="mt-4 inline-block bg-white text-[#2E4B60] font-semibold px-6 py-2 rounded-md hover:bg-gray-100 transition"
                        >
                        Next Step
                        </button>
                    </div>

                    {/* Video Section */}
                    <div className="w-full md:w-1/2">
                        <video
                        controls
                        className="rounded-xl w-full shadow-lg"
                        src="https://www.w3schools.com/html/mov_bbb.mp4"
                        >
                        Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-[40px]">
                <div className="w-full bg-white text-gray-800 rounded-xl shadow-xl p-8">
                    {/* Title */}
                    <h2 className="text-2xl font-bold mb-4">Token Price Overview</h2>

                    {/* Description */}
                    <p className="mb-6 text-gray-600">
                        Token price at the end of construction<span className="font-semibold text-green-600">$25</span>.
                    </p>

                    {/* Last Price */}
                    <div className="flex items-center justify-between mb-6">
                    <div>
                        <p className="text-sm text-gray-500">Last Price</p>
                        <p className="text-3xl font-bold text-green-600">$25.00</p>
                    </div>
                    </div>

                    {/* Chart */}
                    <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={priceData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" />
                        <YAxis domain={[19, 26]} />
                        <Tooltip />
                        <Line type="monotone" dataKey="price" stroke="#10B981" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                    </div>
                    <div className="mt-[40px] bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded-md flex items-start gap-3 mb-6">
                    <svg
                        className="w-6 h-6 mt-1 text-blue-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                        fillRule="evenodd"
                        d="M18 10c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 
                            8-8 8 3.582 8 8zM9 9V7h2v2H9zm0 2h2v4H9v-4z"
                        clipRule="evenodd"
                        />
                    </svg>
                    <div >
                        <h3 className="font-semibold text-lg">Investment Info</h3>
                        <p className="text-sm">
                        Token prices increase based on the investment phase. Early investors
                        receive the best price, starting from <strong>$20</strong>. The current
                        price is <strong>$25</strong> and may rise in the next phase.
                        </p>
                    </div>
                    </div>

                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-[40px]">
                <div className="w-full bg-white text-gray-800 rounded-xl shadow-xl p-8">
                    <h2 className="text-2xl font-bold mb-4">Documents</h2>
                    {/* Tabs */}
                    <div className="flex space-x-4 border-b border-gray-200">
                    {['DAO', 'Property', 'Due Diligence'].map((tab) => (
                        <button
                        key={tab}
                        className={`cursor-pointer py-2 px-4 border-b-2 font-medium ${
                            activeTab === tab
                            ? 'border-blue-600 text-blue-600'
                            : 'border-transparent text-gray-600 hover:text-blue-600 hover:border-blue-300'
                        }`}
                        onClick={() => setActiveTab(tab)}
                        >
                        {tab}
                        </button>
                    ))}
                    </div>

                    {/* Content */}
                    <div className="pt-4">{renderContent()}</div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-[40px]">
                    <div className="w-full bg-gradient-to-br from-[#364C66] to-[#415A75] text-white rounded-xl shadow-xl p-8">
                        <h2 className="text-2xl font-bold mb-2">Fundraising stages and token prices</h2>
                        <p className="text-sm mb-6">
                        Token price depends on the fundraising stage and the remaining amount of tokens
                        </p>

                        {/* Progress steps */}
                        <div className="flex justify-between items-center mb-8 px-4 relative">
                        {stages.map((s, idx) => (
                            <div key={idx} className="flex flex-col items-center text-xs text-white w-1/3 relative">
                            <div className="flex items-center gap-1 mb-1">
                                <span>Stage {idx + 1}</span>
                                <FaInfoCircle className="text-white text-xs" />
                            </div>
                            <div
                                className={`w-4 h-4 rounded-full border-2 ${
                                active >= s.id ? 'bg-white border-white' : 'border-white'
                                }`}
                            />
                            <span className={`mt-2 ${active === s.id ? 'text-white font-semibold' : 'text-gray-300'}`}>
                                {s.title}
                            </span>
                            </div>
                        ))}

                        {/* Dashed line */}
                        <div className="absolute top-5 left-0 right-0 h-0.5 border-t border-dashed border-white z-0" />
                        </div>

                        {/* Cards */}
                        <div className="overflow-x-auto pb-2">
                        <div className="flex gap-6 min-w-[1000px]">
                            {stages.map((stage, idx) => (
                            <div
                                key={idx}
                                className={`min-w-[320px] md:min-w-[360px] rounded-2xl shadow-md transition border ${
                                active === stage.id
                                    ? 'border-orange-500 bg-white text-gray-800'
                                    : 'border-gray-200 bg-gray-50 text-gray-600'
                                } p-6`}
                            >
                                {/* Gradient Header */}
                                <div
                                className={`rounded-t-xl -mx-6 -mt-6 mb-4 px-6 py-3 text-white font-bold text-base ${
                                    stage.id === 1
                                    ? 'bg-gradient-to-r from-blue-500 to-blue-700'
                                    : stage.id === 2
                                    ? 'bg-gradient-to-r from-orange-500 to-yellow-500'
                                    : 'bg-gradient-to-r from-purple-500 to-pink-500'
                                }`}
                                >
                                {stage.title}
                                </div>

                                <div className="flex items-center justify-between mb-4">
                                <div className="text-sm text-gray-500 font-semibold uppercase tracking-wide">
                                    Stage {stage.id}
                                </div>
                                {stage.status && (
                                    <div
                                    className={`text-xs px-2 py-1 rounded-full font-medium ${
                                        stage.status === 'Ongoing'
                                        ? 'bg-green-100 text-green-600'
                                        : 'bg-gray-200 text-gray-500'
                                    }`}
                                    >
                                    {stage.status}
                                    </div>
                                )}
                                </div>

                                <div className="space-y-3 text-sm">
                                {stage.requiredFunds && (
                                    <div className="flex justify-between">
                                    <span className="text-gray-700 font-semibold">Required funds:</span>
                                    <span className="font-bold text-gray-900">{stage.requiredFunds}</span>
                                    </div>
                                )}
                                {stage.tokenRange && (
                                    <div className="flex justify-between">
                                    <span className="text-gray-700 font-semibold">Token price range:</span>
                                    <span className="font-bold text-orange-500">{stage.tokenRange}</span>
                                    </div>
                                )}
                                {stage.tokens && (
                                    <div className="flex justify-between">
                                    <span className="text-gray-700 font-semibold">Tokens for sale:</span>
                                    <span className="font-bold text-gray-900">{stage.tokens}</span>
                                    </div>
                                )}
                                {stage.expectedValue && (
                                    <div className="flex justify-between">
                                    <span className="text-gray-700 font-semibold">Exp. property value:</span>
                                    <span className="font-bold text-gray-900">{stage.expectedValue}</span>
                                    </div>
                                )}
                                <div className="flex justify-between">
                                    <span className="text-gray-700 font-semibold">Duration:</span>
                                    <span className="font-bold text-gray-900">{stage.duration}</span>
                                </div>
                                </div>
                            </div>
                            ))}
                        </div>
                        </div>

                        {/* Navigation and CTA */}
                        <div className="flex justify-between items-center mt-8">
                        <div className="space-x-4">
                            <button
                            onClick={() => setActive((prev) => (prev > 1 ? prev - 1 : prev))}
                            className="w-8 h-8 rounded-full bg-white text-gray-800 font-bold"
                            >
                            &lt;
                            </button>
                            <button
                            onClick={() => setActive((prev) => (prev < stages.length ? prev + 1 : prev))}
                            className="w-8 h-8 rounded-full bg-white text-gray-800 font-bold"
                            >
                            &gt;
                            </button>
                        </div>
                        <button className="px-6 py-2 bg-gradient-to-r from-teal-400 to-blue-400 text-white rounded-full shadow-lg hover:opacity-90 transition">
                            Calculate returns
                        </button>
                        </div>
                    </div>
                    </div>

            </div>
          </div>
        </div>
        
      </div>
      <Footer />
    </>
  );
}
