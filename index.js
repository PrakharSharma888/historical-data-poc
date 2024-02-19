// run `node index.js` in the terminal
import { ethers } from "ethers";
import Moralis from "moralis";

//0x8F0dfab18abE9241507C4d8746479cB9A2C966FA
console.log(`Hello Node.js v${process.versions.node}!`);
// block number for 5 transfer of klay - 146405238
const main = async () => {
  const apiKey = "8dmg9lLBV6mSOYhRsPPm3bZGPehbVN1D";
  const settings = {
    apiKey: apiKey,
  };
//   const alchemy = new Alchemy(settings);
//   let balance = await alchemy.core.getBalance("0x8F0dfab18abE9241507C4d8746479cB9A2C966FA", "10546677");
//   balance = Utils.formatEther(balance);
//   console.log(`Balance of ${address}: ${balance} ETH`);


  const provider = new ethers.JsonRpcProvider(
    "https://rpc.ankr.com/eth_goerli"
  );
  const timestampSeconds = 1708085710;
  const timestampMilliseconds = timestampSeconds * 1000;
  const date = new Date(timestampMilliseconds);
  console.log(date);
  const isoDateString = date.toISOString();

  await Moralis.start({
    apiKey: "VCRkegcv2gqtsdRMoNma3tssY7q7pj5Twjv7J2WtTbPRXGIRiZfCUs7SCgBOF4P7",
  });
  const response = await Moralis.EvmApi.block.getDateToBlock({
    chain: "0x5",
    date: isoDateString,
  });

  console.log(response.raw);
  const oh = await provider.getBalance(
    "0x8F0dfab18abE9241507C4d8746479cB9A2C966FA",
    10546677
  );
  provider._getBlockTag();
  console.log(ethers.formatEther(oh));
};

main();
