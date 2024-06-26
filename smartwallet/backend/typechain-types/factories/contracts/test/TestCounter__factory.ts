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
import type { NonPayableOverrides } from "../../../common";
import type {
  TestCounter,
  TestCounterInterface,
} from "../../../contracts/test/TestCounter";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "CalledFrom",
    type: "event",
  },
  {
    inputs: [],
    name: "count",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "countFail",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "counters",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "repeat",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "gasWaster",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "justemit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "offset",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "xxx",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061063b806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063a5e9585f1161005b578063a5e9585f146100b2578063be65ab8c146100e2578063caece69314610112578063d55565441461011c5761007d565b806306661abd14610082578063278ddd3c1461008c578063a1b4689014610096575b600080fd5b61008a61013a565b005b6100946101c9565b005b6100b060048036038101906100ab9190610371565b610202565b005b6100cc60048036038101906100c791906103d1565b61025b565b6040516100d9919061040d565b60405180910390f35b6100fc60048036038101906100f79190610486565b610273565b604051610109919061040d565b60405180910390f35b61011a61028b565b005b6101246102c6565b604051610131919061040d565b60405180910390f35b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461018591906104e2565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550565b7ffb3b4d6258432a9a3d78dd9bffbcb6cfb1bd94f58da35fd530d08da7d1d05832336040516101f89190610525565b60405180910390a1565b6000600190505b838111610255576002600081548092919061022390610540565b91905055508060016000600254815260200190815260200160002081905550808061024d90610540565b915050610209565b50505050565b60016020528060005260406000206000915090505481565b60006020528060005260406000206000915090505481565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102bd906105e5565b60405180910390fd5b60025481565b600080fd5b600080fd5b6000819050919050565b6102e9816102d6565b81146102f457600080fd5b50565b600081359050610306816102e0565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f8401126103315761033061030c565b5b8235905067ffffffffffffffff81111561034e5761034d610311565b5b60208301915083600182028301111561036a57610369610316565b5b9250929050565b60008060006040848603121561038a576103896102cc565b5b6000610398868287016102f7565b935050602084013567ffffffffffffffff8111156103b9576103b86102d1565b5b6103c58682870161031b565b92509250509250925092565b6000602082840312156103e7576103e66102cc565b5b60006103f5848285016102f7565b91505092915050565b610407816102d6565b82525050565b600060208201905061042260008301846103fe565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061045382610428565b9050919050565b61046381610448565b811461046e57600080fd5b50565b6000813590506104808161045a565b92915050565b60006020828403121561049c5761049b6102cc565b5b60006104aa84828501610471565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006104ed826102d6565b91506104f8836102d6565b92508282019050808211156105105761050f6104b3565b5b92915050565b61051f81610448565b82525050565b600060208201905061053a6000830184610516565b92915050565b600061054b826102d6565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361057d5761057c6104b3565b5b600182019050919050565b600082825260208201905092915050565b7f636f756e74206661696c65640000000000000000000000000000000000000000600082015250565b60006105cf600c83610588565b91506105da82610599565b602082019050919050565b600060208201905081810360008301526105fe816105c2565b905091905056fea264697066735822122016bbf2b829bf598964e499bca401979bf7e6f64445b4d5a04cdee8286376dd0a64736f6c63430008180033";

type TestCounterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestCounterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestCounter__factory extends ContractFactory {
  constructor(...args: TestCounterConstructorParams) {
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
      TestCounter & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): TestCounter__factory {
    return super.connect(runner) as TestCounter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestCounterInterface {
    return new Interface(_abi) as TestCounterInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): TestCounter {
    return new Contract(address, _abi, runner) as unknown as TestCounter;
  }
}
