/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../common";
import type {
  FallbackManager,
  FallbackManagerInterface,
} from "../../../../../@gnosis.pm/safe-contracts/contracts/base/FallbackManager";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "handler",
        type: "address",
      },
    ],
    name: "ChangedFallbackHandler",
    type: "event",
  },
  {
    stateMutability: "nonpayable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "handler",
        type: "address",
      },
    ],
    name: "setFallbackHandler",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610303806100206000396000f3fe608060405234801561001057600080fd5b506004361061002f5760003560e01c8063f08a03231461009057610030565b5b60007f6c9a6c4a39284e37ed1cf53d337577d14212a4870fb976a4366c693b939918d560001b905080548061006457600080f35b36600080373360601b365260008060143601600080855af13d6000803e8061008b573d6000fd5b3d6000f35b6100aa60048036038101906100a591906101f9565b6100ac565b005b6100b46100f7565b6100bd81610167565b7f5ac6c46c93c8d0e53714ba3b53db3e7c046da994313d7ed0d192028bc7c228b0816040516100ec9190610235565b60405180910390a150565b3073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610165576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015c906102ad565b60405180910390fd5b565b60007f6c9a6c4a39284e37ed1cf53d337577d14212a4870fb976a4366c693b939918d560001b90508181555050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006101c68261019b565b9050919050565b6101d6816101bb565b81146101e157600080fd5b50565b6000813590506101f3816101cd565b92915050565b60006020828403121561020f5761020e610196565b5b600061021d848285016101e4565b91505092915050565b61022f816101bb565b82525050565b600060208201905061024a6000830184610226565b92915050565b600082825260208201905092915050565b7f4753303331000000000000000000000000000000000000000000000000000000600082015250565b6000610297600583610250565b91506102a282610261565b602082019050919050565b600060208201905081810360008301526102c68161028a565b905091905056fea26469706673582212209cb944f39b3bf52a01b7b9538a47e6b31b3106e41b6644e79b73f3b09eb2bff864736f6c63430008180033";

type FallbackManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FallbackManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FallbackManager__factory extends ContractFactory {
  constructor(...args: FallbackManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      FallbackManager & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): FallbackManager__factory {
    return super.connect(runner) as FallbackManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FallbackManagerInterface {
    return new Interface(_abi) as FallbackManagerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): FallbackManager {
    return new Contract(address, _abi, runner) as unknown as FallbackManager;
  }
}
