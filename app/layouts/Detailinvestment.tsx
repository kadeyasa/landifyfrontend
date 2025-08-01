import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { FaChartLine, FaMoneyBillWave, FaPercentage, FaMapMarkerAlt } from 'react-icons/fa';
import { IoIosImages } from 'react-icons/io';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from '../components/Header';
import Navigation from '../components/Nav';
import Footer from '../components/Footer';
import logo from '/spiner.png?url';

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

export default function DetailInvestment() {
  const { id } = useParams();
  const [data, setData] = useState<any>(null);

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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
