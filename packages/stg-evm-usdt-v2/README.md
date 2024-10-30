# Tether Contracts deployed by LayerZero

This package reflects the code within the tether-contracts-evm repository found [here](https://github.com/tetherto/tether-contracts-evm).

## Introduction to Tether repository
The tether-contracts-evm repository is a repository of all of the currently deployed Tether contracts using an upgradeable proxy. Due to historical versioning, there are several streams deployed using different versions of solidity.

### Live versions

Ethereum
- EURT 
- MXNT
- XAUT

Avalanche


Polygon

## Role of this package
To support USDT on Stargate for chains that do not yet have USDT, we must deploy it ourselves using this package. 

### Deployment instructions
1. Run `pnpm clean`
2. Run `pnpm install`
3. Run `pnpm compile`
4. Run `pnpm build`
5. Ensure the `hardhat.config.ts` is updated with the network details you would like to deploy to. See other networks listed for reference.
6. Rename `.env.example` to `.env` and update the `MNEMONIC` with your actual mnemonic
7. Run `pnpm hardhat deploy --network <network name in hardhat.config.js> --tags Token`. For example, `pnpm hardhat deploy --network sepolia-testnet --tags Token`

You will find the deployments under the `deployments` directory.



