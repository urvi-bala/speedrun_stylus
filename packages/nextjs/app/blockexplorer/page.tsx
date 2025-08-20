"use client";

import { useEffect, useState } from "react";
import { PaginationButton, SearchBar, TransactionsTable } from "./_components";
import type { NextPage } from "next";
import { createPublicClient, http } from "viem";
import { useFetchBlocks } from "~~/hooks/scaffold-eth";

// Create a custom chain configuration for local Arbitrum Nitro
const localNitro = {
  id: 412346,
<<<<<<< HEAD
  name: "Local Nitro",
  network: "nitro-local",
  nativeCurrency: {
    decimals: 18,
    name: "Ethereum",
    symbol: "ETH",
  },
  rpcUrls: {
    default: { http: ["process.env.NEXT_PUBLIC_RPC_URL"] },
    public: { http: ["process.env.NEXT_PUBLIC_RPC_URL"] },
=======
  name: 'Local Nitro',
  network: 'nitro-local',
  nativeCurrency: {
    decimals: 18,
    name: 'Ethereum',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: { http: ['http://localhost:8547'] },
    public: { http: ['http://localhost:8547'] },
>>>>>>> e96684ef48fb7565ff6645acb0771ee4bd9889f4
  },
} as const;

const publicClient = createPublicClient({
  chain: localNitro,
<<<<<<< HEAD
  transport: http(),
=======
  transport: http()
>>>>>>> e96684ef48fb7565ff6645acb0771ee4bd9889f4
});

const BlockExplorer: NextPage = () => {
  const { blocks, transactionReceipts, currentPage, totalBlocks, setCurrentPage } = useFetchBlocks();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const checkConnection = async () => {
      try {
        await publicClient.getBlockNumber();
      } catch (error) {
        setHasError(true);
        console.error("Failed to connect to Nitro node:", error);
      }
    };
<<<<<<< HEAD

=======
    
>>>>>>> e96684ef48fb7565ff6645acb0771ee4bd9889f4
    checkConnection();
  }, []);

  if (hasError) {
    return (
      <div className="container mx-auto my-10 p-4">
        <div className="alert alert-error">
          <p className="font-bold">Cannot connect to local Arbitrum Nitro node</p>
<<<<<<< HEAD
          <p>Make sure your Nitro node is running at process.env.NEXT_PUBLIC_RPC_URL</p>
=======
          <p>Make sure your Nitro node is running at http://localhost:8547</p>
>>>>>>> e96684ef48fb7565ff6645acb0771ee4bd9889f4
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-10">
      <div className="mb-6 text-center">
        <h1 className="text-4xl font-bold mb-2">Local Arbitrum Nitro Explorer</h1>
        <p className="text-lg opacity-80">Explore transactions on your local Arbitrum Nitro node</p>
      </div>
      <SearchBar />
      <TransactionsTable blocks={blocks} transactionReceipts={transactionReceipts} />
      <PaginationButton currentPage={currentPage} totalItems={Number(totalBlocks)} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default BlockExplorer;
