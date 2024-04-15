# 1. To download a binary for the latest release, run:

```sh
curl -sSfL https://raw.githubusercontent.com/ava-labs/avalanche-cli/main/scripts/install.sh | sh -s
```

##  2. Create a new subnet: 
Once you have the Avalanche CLI installed, you can create a new subnet by running the command 

```sh
avalanche subnet create mySubnet
```
 in your terminal. This will create a new subnet with the name "mySubnet" on your local machine.


## 3. Select the EVM Subnet option and configure:
 When creating a new subnet, you will be prompted to select a subnet type. Choose the SubnetEVM option to create an EVM Subnet on your local machine and follow the steps in the image below:

```javascript 
avalanche subnet create mySubnet
Attempted to check if a new version is available, but couldn't find the currently running version information
Make sure to follow official instructions, or automatic updates won't be available for you
✔ Subnet-EVM
creating subnet mySubnet
Enter your subnet's ChainId. It can be any positive integer.
ChainId: 12345567
Select a symbol for your subnet's native token
Token symbol: MYSUBNET
✔ Use latest version
✔ Low disk use    / Low Throughput    1.5 mil gas/s (C-Chain's setting)
✔ Airdrop 1 million tokens to the default address (do not use in production)
✔ No
```
## 4. Deploy the subnet: 
After selecting the EVM Subnet option, you can deploy the subnet by running the command 
```sh
avalanche subnet deploy mySubnet
```
 and selecting to deploy your subnet on your local network. This will deploy your new EVM Subnet on your local machine.

## 5. Connect to Metamask
After deploying your subnet, you will be able to see the browser extension connection details at the bottom of the console. These details can be used to connect your subnet to a wallet such as Metamask. It also includes a private key to access funds and interact with your blockchain.

Here are the connection details that you need to connect your subnet to Metamask:
```sh
Browser Extension connection details (any node URL from above works):
RPC URL:          http://127.0.0.1:9650/ext/bc/SPqou41AALqxDquEycNYuTJmRvZYbfoV9DYApDJVXKXuwVFPz/rpc
Funded address:   0x8db97C7cEcE249c2b98bDC0226Cc4C2A57BF52FC with 1000000 (10^18) - private key: 56289e99c94b6912bfc12adc093c9b51124f0dc54ac7a766b2bc5ccf558d8027
Network name:     mySubnet
Chain ID:         54325
Currency Symbol:  TUTORIAL
```

Deploy the ERC20 Token and the Vault contract on The Subnet using Remix and connecting the The Injected Provider.