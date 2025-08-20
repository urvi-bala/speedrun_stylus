import { useEffect, useState } from "react";
<<<<<<< HEAD
import { JsonRpcProvider, Wallet } from "ethers";
import { formatEther } from "viem";
=======
import { formatEther } from "viem";
import { JsonRpcProvider, Wallet } from "ethers";
>>>>>>> e96684ef48fb7565ff6645acb0771ee4bd9889f4

export const useDevAccount = () => {
  const [balance, setBalance] = useState<string>("0");
  const [address, setAddress] = useState<string>("");
<<<<<<< HEAD

  useEffect(() => {
    const initDevAccount = async () => {
      const provider = new JsonRpcProvider(process.env.NEXT_PUBLIC_RPC_URL || "");
      const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY || "";
      const wallet = new Wallet(privateKey, provider);

      setAddress(wallet.address);

=======
  
  useEffect(() => {
    const initDevAccount = async () => {
      const provider = new JsonRpcProvider("http://localhost:8547");
      const privateKey = "0xb6b15c8cb491557369f3c7d2c287b053eb229daa9c22138887752191c9520659";
      const wallet = new Wallet(privateKey, provider);
      
      setAddress(wallet.address);
      
>>>>>>> e96684ef48fb7565ff6645acb0771ee4bd9889f4
      const accountBalance = await provider.getBalance(wallet.address);
      setBalance(formatEther(BigInt(accountBalance)));
    };

    initDevAccount();
  }, []);

  return { balance, address };
<<<<<<< HEAD
};
=======
};
>>>>>>> e96684ef48fb7565ff6645acb0771ee4bd9889f4
