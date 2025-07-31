import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { FaWallet } from 'react-icons/fa';
import { SiWalletconnect } from 'react-icons/si';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from './logo-landify.png';
import metamask from './metamask.png';

import { WagmiProvider } from 'wagmi';
import { createConfig,  http } from 'wagmi';
import { useConnect} from 'wagmi';
import type { Connector } from 'wagmi';
import { walletConnect } from '@wagmi/connectors';
import { lisk, liskSepolia } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../src/index.css';

declare global {
  interface Window {
    lisk?: any;
  }
}

const config = createConfig({
  connectors: [
    walletConnect({
      projectId: '0dadcf83f205631ed48ff5ea414a15ea',
      showQrModal: true,
    }),
  ],
  chains: [lisk, liskSepolia],
  transports: {
    1135: http(),
    4202: http(),
  },
});

const queryClient = new QueryClient(); // 👉 Pindahkan ke sini (global, bukan di dalam komponen)

function WalletConnectButton() {
  const { connect, connectors } = useConnect();
  const walletConnectConnector = connectors.find(
    (c: Connector) => c.id === 'walletConnect'
  );

  return (
    <button
      className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-200 transition cursor-pointer"
      onClick={() => {
        if (walletConnectConnector) {
          connect({ connector: walletConnectConnector });
        } else {
          toast.error('WalletConnect connector not found');
        }
      }}
    >
      <SiWalletconnect className="text-blue-500 text-2xl" />
    </button>
  );
}

export default function Welcome() {
  const [account, setAccount] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const connectWallet = async () => {
    if (!window.ethereum) {
      toast.error('Metamask not detected. Please install Metamask first.');
      return;
    }

    try {
      setLoading(true);
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send('eth_requestAccounts', []);
      setAccount(accounts[0]);
      window.location.href = '/dashboard';
    } catch (error) {
      console.error('You canceled authorization. Please confirm to sign in', error);
      toast.error('You canceled authorization. Please confirm to sign in');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const checkConnection = async () => {
      if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send('eth_accounts', []);
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          window.location.href = '/dashboard';
        }
      }
    };
    checkConnection();
  }, []);

  return (
    <QueryClientProvider client={queryClient}> {/* ✅ Tambahkan ini */}
      <WagmiProvider config={config}>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full flex flex-col items-center">
            <ToastContainer position="top-center" autoClose={3000} />
            <img src={logo} alt="Logo" className="h-12 mb-4" />
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
              Welcome to LandiFy
            </h2>
            <p className="text-center mb-10">Sign up or Log in your wallet</p>

            {account ? (
              <div className="text-center text-green-600 font-semibold">
                ✅ Connected:
                <p className="break-words text-sm text-gray-600 mt-2">{account}</p>
              </div>
            ) : (
              <button
                onClick={connectWallet}
                disabled={loading}
                className="w-full py-3 flex items-center justify-center gap-2 bg-[#2E4B60] text-white font-semibold rounded-xl hover:bg-[#3b5d74] transition disabled:opacity-50 mb-4 cursor-pointer"
              >
                <FaWallet className="text-lg" />
                {loading ? 'Connecting...' : 'Connect Wallet'}
              </button>
            )}

            {!account && (
              <div className="flex items-center justify-center gap-6 my-4">
                <button
                  className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center hover:bg-orange-200 transition cursor-pointer"
                  onClick={connectWallet}
                >
                  <img src={metamask} alt="Metamask Icon" className="text-orange-500 text-2xl" />
                </button>
                <WalletConnectButton />
              </div>
            )}

            <small className="text-center text-sm text-gray-500 mt-4">
              By connecting your wallet, you agree to our{' '}
              <a href="#" className="text-blue-500 hover:underline">Terms & Conditions</a>{' '}
              and{' '}
              <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>.
            </small>
          </div>
        </div>
      </WagmiProvider>
    </QueryClientProvider>
  );
}
