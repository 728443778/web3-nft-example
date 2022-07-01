import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import roboPunksNFT from './RoboPunksNFT.json'
const roboPunksNftAddress = "0x5a6C401fFEd5d713A7431e9E058c754939d82d8b";

const MainMint = ({ accounts, setAccounts }) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);
    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                roboPunksNftAddress,
                roboPunksNFT.abi,
                signer
            );
            try {
                const response = await contract.mint(BigNumber.from(mintAmount));
                console.log('response:', response);


            } catch (err) {
                console.log("error:", err)
            }
        }
    }


    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount -1);
    }

    const handleIncrement = ()=>{
        if (mintAmount >= 3) return;
        setMintAmount(mintAmount + 1)
    }

    return (
        <div>
            <h1>RoboPunks</h1>
            <p>It is 2078, Can thr ROboPunks NFT save humans from destruction rampant NFT speculation? Mint RoboPunks to find out. </p>
            {isConnected ? (
                <div>
                    <div>
                        <button onClick={handleDecrement}>-</button>
                        <input typeof="number" value={mintAmount}></input>
                        <button onClick={handleIncrement}>+</button>

                    </div>
                    <button onClick={handleMint} >Mint Now</button>
                </div>
            ) : (
                <div>
                    <p>You must be connected to Mint</p>
                </div>
            )}
        </div>
    );
}

export default MainMint;