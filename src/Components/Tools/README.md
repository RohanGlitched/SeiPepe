<h1 align = "center"> This is Readme for our tools </h1>

<h3> For our tools we use <a href = "https://suiet.app/docs/add-suiet-to-your-project"> Suiet </a> and <a href = "https://docs.sui.io/sui-jsonrpc"> Sui </a> packages

<h2> Faucet Sui </h2>

This is a basic function that is performed by the Sui provider. And in order for the funds to come to the user's wallet, we use the wallet.address method

```
import { useWallet } from "@suiet/wallet-kit";
import { JsonRpcProvider, Network } from '@mysten/sui.js';


const wallet = useWallet();
const provider = new JsonRpcProvider(Network.DEVNET);

async function faucetSui() {
        if (!wallet.connected) {
            if (!wallet.connected) {
                notifyError("Please, Connect Wallet")
                return;
            }
            return
        }
        try {
            provider.requestSuiFromFaucet(wallet.address);
            notifySucces("Faucet is done");
        } catch (e) {
            notifyError("Something wenr wrong")
        }
    }
```

<h2> Mint Nft </h2>

<p>This feature allows you to minify NFT on devNet. In order to call it, you need to define the name of the NFT, description, and pass a link to the image.

```
import { useWallet } from "@suiet/wallet-kit";
const wallet = useWallet();
async function handleExecuteMintNft() {
        try {
            const data = {
                packageObjectId: '0x2',
                module: 'devnet_nft',
                function: 'mint',
                typeArguments: [],
                arguments: [
                    "name",
                    'Description',
                    link_to_image,
                ],
                gasBudget: 100000,
            };
            const resData = await wallet.signAndExecuteTransaction({
                transaction: {
                    kind: 'moveCall',
                    data
                }
            });
            return (
                notifySucces("You mint your NFT")
            )
        } catch (e) {
            console.log(e);
            return (
                notifyError("Something went wrong")
            )
        }
}
```
</p>

<h2> Sui Objects </h2>

Here we would like to show you how to work with objects in the SUI blockchain. Every item in your wallet is an object on the blockchain and each has its own Object ID. To view all objects belonging to a wallet you can use the following function (We use Sui Provider Function).

```
import { JsonRpcProvider, Network } from '@mysten/sui.js';
function getObjectsOwnedByAddress(value) {
    const provider = new JsonRpcProvider(Network.DEVNET);
    if (address.length != 42) {
        return alert("Incorrect Address")
    } else {
        try {
            const temp = provider.getObjectsOwnedByAddress(address);
            return temp;
        } catch (e) {
            return alert("Something went wrong");
        }
    }
    return objects;
}

export default getObjectsOwnedByAddress;

```
Let's walk through what we're doing here step by step.

<ol>
  <li>Importing the required objects</li>
  <li>If you want, you can declare the type of response that you want to process from the blockchain response. You can see what the full response to the request will look like <a href = "https://docs.sui.io/sui-jsonrpc#sui_getObjectsOwnedByAddress">here</a></li>
  <li>Call function, and, to avoid basic errors, we check that the address that we pass to the function is of the required length</li>
</ol>
<h3> Transfer Object </h3>

Since for this action we will have to sign a transaction, we will use the Suitet methods to call it.

```
import { useWallet } from "@suiet/wallet-kit";
const wallet = useWallet();
async function transferTxn() {
        if (objectId.length != 42 || address.length != 42) {
            notifyWarning("Incorrect Address or Object Id")
            return;
        }
        try {
            const data = {
                objectId: objectId,
                recipient: address,
                gasBudget: 10000,
            };
            const transferT = await wallet.signAndExecuteTransaction({
                transaction: {
                    kind: 'transferObject',
                    data,
                }
            })
            notifySucces("Transfered")
        } catch (e) {
            console.log(e);
            notifyError("Something Went Wrong")
        }
    };
}
```

It is very important that the object really belongs to the wallet from which the transaction is performed. I think this is the most common reason why you can get catch(e)

<h2> Pay Sui </h2>

<h4>This feature allows you to distribute funds to multiple wallets in a single transaction.</h4>

This is the most difficult function. To implement it, we had to collect the coins allocated for transactions. An array of Addresses to which the mailing will take place.
And an array of quantities.
It is very important that the length of the array of addresses and the array of quantities be the same

```
async function GetCoinsByAddress() {
        const wallet = useWallet();
        const provider = new JsonRpcProvider(Network.DEVNET);
        const [coinsArray, setObj] = React.useState([]);
        const { balance } = useAccountBalance();
        try {
            const temp = provider.getObjectsOwnedByAddress(wallet.address);
            var ct = [];
            temp.then(spis => {
                spis.forEach((x) => {
                    if (x.type === "0x2::coin::Coin<0x2::sui::SUI>") {
                        ct.push(x.objectId)
                    }
                })
            })
            setObj(ct)
        } catch (e) {
            console.log(e);
        }
    }

async function handleExecutePaySui() {
        if (sum() >= balance) {
            notifyError("Insufficient funds");
            return;
        }
        try {
            GetCoinsByAddress();
            const data = {
                inputCoins: coinsArray,
                recipients: addressArray,
                amounts: numbersArray,
                gasBudget: 20000,
            };
            const resData = await wallet.signAndExecuteTransaction({
                transaction: {
                    kind: 'paySui',
                    data
                }
            });
            notifySucces("Distributed");
            console.log('executeMoveCall success', resData);
        } catch (e) {
            console.error('executeMoveCall failed', e);
            notifyError('Transaction failed');
        }
    }
```

That's all, we will update this Readme as soon as new features are added to the site.
