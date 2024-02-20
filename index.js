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
  // console.log(isoDateString)
  await Moralis.start({
    apiKey: "VCRkegcv2gqtsdRMoNma3tssY7q7pj5Twjv7J2WtTbPRXGIRiZfCUs7SCgBOF4P7",
  });

  const response = await Moralis.EvmApi.block.getDateToBlock({
    chain: "0x5",
    date: isoDateString,
  });

  return response.raw;
};

const toTimestamp = (strDate) => {
  const dt = new Date(strDate).getTime();
  return dt / 1000;
}

const main = async (stringDateTime) => {
  const timestampSeconds2 = toTimestamp(stringDateTime)
  // console.log(timestampSeconds2)

  const date = new Date(timestampSeconds2 * 1000);
  const isoDateString = date.toISOString();
  // console.log("New one",isoDateString)

  const address = "0x8F0dfab18abE9241507C4d8746479cB9A2C966FA";
  const blockNumber = await getDateToBlock(timestampSeconds);
  // console.log(blockNumber.block)
  const balance = await getBalance(address, blockNumber.block);
  console.log(`Balance of ${address} at block ${blockNumber.block}: ${balance} ETH`);
};



const timestampSeconds = 1708085710;
main('02/16/2024 12:15:10');
