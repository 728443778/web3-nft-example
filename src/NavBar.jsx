import React from "react";
const NavBar ({accounts, setAccounts}) => {
    const isConnected = Boolean(accounts[0])
    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts"
            });
            setAccounts(accounts);
        }
    }

    return (
        <div>
            <div>FaceBook</div>
            <div>Twiter</div>
            <div>Email</div>



            <div>abount</div>
            <div>Mint</div>
            <div>Team</div>

            {isConnected ? (
                <p>Connected</p>
            ): (<button onClick={connectAccount}>Connect</button>)}
        </div>
    )
}

export default NavBar;