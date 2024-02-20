import { ethers } from "ethers";
import Moralis from "moralis";

const apiKey = "8dmg9lLBV6mSOYhRsPPm3bZGPehbVN1D";

const getBalance = async (address, blockNumber) => {
  const provider = new ethers.JsonRpcProvider(
    "https://rpc.ankr.com/eth_goerli"
  );
  const balance = await provider.getBalance(address, blockNumber);
  return ethers.formatEther(balance)
};

const getDateToBlock = async (timestampSeconds) => {
  const date = new Date(timestampSeconds * 1000);
  const isoDateString = date.toISOString();

  await Moralis.start({
    apiKey: "VCRkegcv2gqtsdRMoNma3tssY7q7pj5Twjv7J2WtTbPRXGIRiZfCUs7SCgBOF4P7",
  });

  const response = await Moralis.EvmApi.block.getDateToBlock({
    chain: "0x5",
    date: isoDateString,
  });

  return response.raw;
};

const main = async (timestampSeconds) => {
  const address = "0x8F0dfab18abE9241507C4d8746479cB9A2C966FA";
  const blockNumber = 10546677;

  const balance = await getBalance(address, blockNumber);
  console.log(`Balance of ${address} at block ${blockNumber}: ${balance} ETH`);

  const blockData = await getDateToBlock(timestampSeconds);
  // console.log(`Block data for timestamp ${timestampSeconds}:`, blockData);
};

const timestampSeconds = 1708085710;
main(timestampSeconds);
