import { USDCNodeConfig } from '@stargatefinance/stg-devtools-v2'

import { OmniGraphHardhat } from '@layerzerolabs/devtools-evm-hardhat'
import { EndpointId } from '@layerzerolabs/lz-definitions'

import { getUSDCProxyDeployName } from '../../../../ops/util'
import { getSafeAddress } from '../../utils'
import { onFlare, onGravity, onIota, onKlaytn, onLightlink, onRarible, onTaiko, onXchain } from '../utils'

const proxyContract = { contractName: getUSDCProxyDeployName() }

export default async (): Promise<OmniGraphHardhat<USDCNodeConfig, unknown>> => {
    // Get the corresponding underlying USDC contract
    const flareUSDC = onFlare(proxyContract)
    const gravityUSDC = onGravity(proxyContract)
    const iotaUSDC = onIota(proxyContract)
    const klaytnUSDC = onKlaytn(proxyContract)
    const lightlinkUSDC = onLightlink(proxyContract)
    const raribleUSDC = onRarible(proxyContract)
    const taikoUSDC = onTaiko(proxyContract)
    const xchainUSDC = onXchain(proxyContract)

    const flareStargateMultisig = getSafeAddress(EndpointId.FLARE_V2_MAINNET)
    const gravityStargateMultisig = getSafeAddress(EndpointId.GRAVITY_V2_MAINNET)
    const iotaStargateMultisig = getSafeAddress(EndpointId.IOTA_V2_MAINNET)
    const klaytnStargateMultisig = getSafeAddress(EndpointId.KLAYTN_V2_MAINNET)
    const lightlinkStargateMultisig = getSafeAddress(EndpointId.LIGHTLINK_V2_MAINNET)
    const raribleStargateMultisig = getSafeAddress(EndpointId.RARIBLE_V2_MAINNET)
    const taikoStargateMultisig = getSafeAddress(EndpointId.TAIKO_V2_MAINNET)
    const xchainStargateMultisig = getSafeAddress(EndpointId.XCHAIN_V2_MAINNET)

    return {
        contracts: [
            {
                contract: flareUSDC,
                config: {
                    admin: flareStargateMultisig,
                },
            },
            {
                contract: gravityUSDC,
                config: {
                    admin: gravityStargateMultisig,
                },
            },
            {
                contract: iotaUSDC,
                config: {
                    admin: iotaStargateMultisig,
                },
            },
            {
                contract: klaytnUSDC,
                config: {
                    admin: klaytnStargateMultisig,
                },
            },
            {
                contract: lightlinkUSDC,
                config: {
                    admin: lightlinkStargateMultisig,
                },
            },
            {
                contract: raribleUSDC,
                config: {
                    admin: raribleStargateMultisig,
                },
            },
            {
                contract: taikoUSDC,
                config: {
                    admin: taikoStargateMultisig,
                },
            },
            {
                contract: xchainUSDC,
                config: {
                    admin: xchainStargateMultisig,
                },
            },
        ],
        connections: [],
    }
}
