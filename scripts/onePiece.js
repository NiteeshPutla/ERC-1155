// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
 const [island]=await hre.ethers.getSigners();

  const OnePiece = await hre.ethers.getContractFactory("OnePiece");
  const place = await OnePiece.connect(island).deploy("OnePiece","OP");

  await place.deployed();
  console.log("Success, we have claimed one piece @" ,place.address);

  const nft1=await place.mint(10,"https://ipfs.io/ipfs/QmbB7W4Lv5hKif2LvtrBLsVX575Tp2XqB6YDJwk8H8aBec")
  console.log(nft1);
  const nft2=await place.mint(10,"https://ipfs.io/ipfs/QmRXtoaYjuwKihyanSV6CrmJePx9SZCgjVRNNX1g7KKsvR")
  console.log(nft2);
  const nft3=await place.mint(10,"https://ipfs.io/ipfs/QmZCXWq3H14AWXzXw6dHtkWfufBgsPJAibKSQULcL3R8kt")
  console.log(nft3);
}



// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
