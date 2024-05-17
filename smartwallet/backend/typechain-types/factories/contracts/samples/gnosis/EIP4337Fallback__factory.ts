/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  EIP4337Fallback,
  EIP4337FallbackInterface,
} from "../../../../contracts/samples/gnosis/EIP4337Fallback";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_eip4337manager",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "NAME",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "VERSION",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "eip4337manager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "enum Enum.Operation",
        name: "",
        type: "uint8",
      },
    ],
    name: "executeAndRevert",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "isValidSignature",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
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
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
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
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "tokensReceived",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "callGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "verificationGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct UserOperation",
        name: "",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "validateUserOp",
    outputs: [
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040523480156200001157600080fd5b50604051620018a3380380620018a38339818101604052810190620000379190620000dc565b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1681525050506200010e565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000a48262000077565b9050919050565b620000b68162000097565b8114620000c257600080fd5b50565b600081519050620000d681620000ab565b92915050565b600060208284031215620000f557620000f462000072565b5b60006200010584828501620000c5565b91505092915050565b60805161177262000131600039600081816104b2015261065a01526117726000f3fe608060405234801561001057600080fd5b50600436106100b35760003560e01c8063940d3c6011610071578063940d3c60146101b2578063a3f4df7e146101ce578063bc197c81146101ec578063d087d2881461021c578063f23a6e611461023a578063ffa1ad741461026a576100b3565b806223de29146100b857806301ffc9a7146100d4578063150b7a02146101045780631626ba7e146101345780632bcadc24146101645780633a871cdd14610182575b600080fd5b6100d260048036038101906100cd9190610aa7565b610288565b005b6100ee60048036038101906100e99190610bce565b610292565b6040516100fb9190610c16565b60405180910390f35b61011e60048036038101906101199190610c31565b6103cc565b60405161012b9190610cc8565b60405180910390f35b61014e60048036038101906101499190610e5a565b6103e1565b60405161015b9190610cc8565b60405180910390f35b61016c6104b0565b6040516101799190610ec5565b60405180910390f35b61019c60048036038101906101979190610f05565b6104d4565b6040516101a99190610f83565b60405180910390f35b6101cc60048036038101906101c79190610fc3565b6104ff565b005b6101d661050e565b6040516101e391906110c5565b60405180910390f35b6102066004803603810190610201919061113d565b610547565b6040516102139190610cc8565b60405180910390f35b61022461055f565b6040516102319190610f83565b60405180910390f35b610254600480360381019061024f9190611219565b610586565b6040516102619190610cc8565b60405180910390f35b61027261059c565b60405161027f91906110c5565b60405180910390f35b5050505050505050565b60007f4e2312e0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061035d57507f150b7a02000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806103c557507f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9050919050565b600063150b7a0260e01b905095945050505050565b6000806103ed846105d5565b90506000610404848361060b90919063ffffffff16565b905060003390508073ffffffffffffffffffffffffffffffffffffffff16632f54bf6e836040518263ffffffff1660e01b81526004016104449190610ec5565b602060405180830381865afa158015610461573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061048591906112df565b1561049c57631626ba7e60e01b93505050506104aa565b63ffffffff60e01b93505050505b92915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000806104df610632565b9050808060200190518101906104f59190611321565b9150509392505050565b610507610632565b5050505050565b6040518060400160405280601881526020017f44656661756c742043616c6c6261636b2048616e646c6572000000000000000081525081565b600063bc197c8160e01b905098975050505050505050565b60008061056a610632565b9050808060200190518101906105809190611321565b91505090565b600063f23a6e6160e01b90509695505050505050565b6040518060400160405280600581526020017f312e302e3000000000000000000000000000000000000000000000000000000081525081565b60007f19457468657265756d205369676e6564204d6573736167653a0a33320000000060005281601c52603c6000209050919050565b600080600061061a8585610701565b9150915061062781610752565b819250505092915050565b606060003390506000808273ffffffffffffffffffffffffffffffffffffffff16635229073f7f00000000000000000000000000000000000000000000000000000000000000006000803660016040518663ffffffff1660e01b815260040161069f959493929190611448565b6000604051808303816000875af11580156106be573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906106e79190611506565b91509150816106f857805160208201fd5b80935050505090565b60008060418351036107425760008060006020860151925060408601519150606086015160001a9050610736878285856108b8565b9450945050505061074b565b60006002915091505b9250929050565b60006004811115610766576107656113d1565b5b816004811115610779576107786113d1565b5b03156108b55760016004811115610793576107926113d1565b5b8160048111156107a6576107a56113d1565b5b036107e6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107dd906115ae565b60405180910390fd5b600260048111156107fa576107f96113d1565b5b81600481111561080d5761080c6113d1565b5b0361084d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108449061161a565b60405180910390fd5b60036004811115610861576108606113d1565b5b816004811115610874576108736113d1565b5b036108b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ab906116ac565b60405180910390fd5b5b50565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c11156108f3576000600391509150610991565b60006001878787876040516000815260200160405260405161091894939291906116f7565b6020604051602081039080840390855afa15801561093a573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361098857600060019250925050610991565b80600092509250505b94509492505050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006109d9826109ae565b9050919050565b6109e9816109ce565b81146109f457600080fd5b50565b600081359050610a06816109e0565b92915050565b6000819050919050565b610a1f81610a0c565b8114610a2a57600080fd5b50565b600081359050610a3c81610a16565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f840112610a6757610a66610a42565b5b8235905067ffffffffffffffff811115610a8457610a83610a47565b5b602083019150836001820283011115610aa057610a9f610a4c565b5b9250929050565b60008060008060008060008060c0898b031215610ac757610ac66109a4565b5b6000610ad58b828c016109f7565b9850506020610ae68b828c016109f7565b9750506040610af78b828c016109f7565b9650506060610b088b828c01610a2d565b955050608089013567ffffffffffffffff811115610b2957610b286109a9565b5b610b358b828c01610a51565b945094505060a089013567ffffffffffffffff811115610b5857610b576109a9565b5b610b648b828c01610a51565b92509250509295985092959890939650565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b610bab81610b76565b8114610bb657600080fd5b50565b600081359050610bc881610ba2565b92915050565b600060208284031215610be457610be36109a4565b5b6000610bf284828501610bb9565b91505092915050565b60008115159050919050565b610c1081610bfb565b82525050565b6000602082019050610c2b6000830184610c07565b92915050565b600080600080600060808688031215610c4d57610c4c6109a4565b5b6000610c5b888289016109f7565b9550506020610c6c888289016109f7565b9450506040610c7d88828901610a2d565b935050606086013567ffffffffffffffff811115610c9e57610c9d6109a9565b5b610caa88828901610a51565b92509250509295509295909350565b610cc281610b76565b82525050565b6000602082019050610cdd6000830184610cb9565b92915050565b6000819050919050565b610cf681610ce3565b8114610d0157600080fd5b50565b600081359050610d1381610ced565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610d6782610d1e565b810181811067ffffffffffffffff82111715610d8657610d85610d2f565b5b80604052505050565b6000610d9961099a565b9050610da58282610d5e565b919050565b600067ffffffffffffffff821115610dc557610dc4610d2f565b5b610dce82610d1e565b9050602081019050919050565b82818337600083830152505050565b6000610dfd610df884610daa565b610d8f565b905082815260208101848484011115610e1957610e18610d19565b5b610e24848285610ddb565b509392505050565b600082601f830112610e4157610e40610a42565b5b8135610e51848260208601610dea565b91505092915050565b60008060408385031215610e7157610e706109a4565b5b6000610e7f85828601610d04565b925050602083013567ffffffffffffffff811115610ea057610e9f6109a9565b5b610eac85828601610e2c565b9150509250929050565b610ebf816109ce565b82525050565b6000602082019050610eda6000830184610eb6565b92915050565b600080fd5b60006101608284031215610efc57610efb610ee0565b5b81905092915050565b600080600060608486031215610f1e57610f1d6109a4565b5b600084013567ffffffffffffffff811115610f3c57610f3b6109a9565b5b610f4886828701610ee5565b9350506020610f5986828701610d04565b9250506040610f6a86828701610a2d565b9150509250925092565b610f7d81610a0c565b82525050565b6000602082019050610f986000830184610f74565b92915050565b60028110610fab57600080fd5b50565b600081359050610fbd81610f9e565b92915050565b60008060008060808587031215610fdd57610fdc6109a4565b5b6000610feb878288016109f7565b9450506020610ffc87828801610a2d565b935050604085013567ffffffffffffffff81111561101d5761101c6109a9565b5b61102987828801610e2c565b925050606061103a87828801610fae565b91505092959194509250565b600081519050919050565b600082825260208201905092915050565b60005b83811015611080578082015181840152602081019050611065565b60008484015250505050565b600061109782611046565b6110a18185611051565b93506110b1818560208601611062565b6110ba81610d1e565b840191505092915050565b600060208201905081810360008301526110df818461108c565b905092915050565b60008083601f8401126110fd576110fc610a42565b5b8235905067ffffffffffffffff81111561111a57611119610a47565b5b60208301915083602082028301111561113657611135610a4c565b5b9250929050565b60008060008060008060008060a0898b03121561115d5761115c6109a4565b5b600061116b8b828c016109f7565b985050602061117c8b828c016109f7565b975050604089013567ffffffffffffffff81111561119d5761119c6109a9565b5b6111a98b828c016110e7565b9650965050606089013567ffffffffffffffff8111156111cc576111cb6109a9565b5b6111d88b828c016110e7565b9450945050608089013567ffffffffffffffff8111156111fb576111fa6109a9565b5b6112078b828c01610a51565b92509250509295985092959890939650565b60008060008060008060a08789031215611236576112356109a4565b5b600061124489828a016109f7565b965050602061125589828a016109f7565b955050604061126689828a01610a2d565b945050606061127789828a01610a2d565b935050608087013567ffffffffffffffff811115611298576112976109a9565b5b6112a489828a01610a51565b92509250509295509295509295565b6112bc81610bfb565b81146112c757600080fd5b50565b6000815190506112d9816112b3565b92915050565b6000602082840312156112f5576112f46109a4565b5b6000611303848285016112ca565b91505092915050565b60008151905061131b81610a16565b92915050565b600060208284031215611337576113366109a4565b5b60006113458482850161130c565b91505092915050565b6000819050919050565b6000819050919050565b600061137d6113786113738461134e565b611358565b610a0c565b9050919050565b61138d81611362565b82525050565b600082825260208201905092915050565b60006113b08385611393565b93506113bd838584610ddb565b6113c683610d1e565b840190509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60028110611411576114106113d1565b5b50565b600081905061142282611400565b919050565b600061143282611414565b9050919050565b61144281611427565b82525050565b600060808201905061145d6000830188610eb6565b61146a6020830187611384565b818103604083015261147d8185876113a4565b905061148c6060830184611439565b9695505050505050565b60006114a96114a484610daa565b610d8f565b9050828152602081018484840111156114c5576114c4610d19565b5b6114d0848285611062565b509392505050565b600082601f8301126114ed576114ec610a42565b5b81516114fd848260208601611496565b91505092915050565b6000806040838503121561151d5761151c6109a4565b5b600061152b858286016112ca565b925050602083015167ffffffffffffffff81111561154c5761154b6109a9565b5b611558858286016114d8565b9150509250929050565b7f45434453413a20696e76616c6964207369676e61747572650000000000000000600082015250565b6000611598601883611051565b91506115a382611562565b602082019050919050565b600060208201905081810360008301526115c78161158b565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265206c656e67746800600082015250565b6000611604601f83611051565b915061160f826115ce565b602082019050919050565b60006020820190508181036000830152611633816115f7565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202773272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b6000611696602283611051565b91506116a18261163a565b604082019050919050565b600060208201905081810360008301526116c581611689565b9050919050565b6116d581610ce3565b82525050565b600060ff82169050919050565b6116f1816116db565b82525050565b600060808201905061170c60008301876116cc565b61171960208301866116e8565b61172660408301856116cc565b61173360608301846116cc565b9594505050505056fea2646970667358221220599fe418823707445f439e6394076c71e3f0589076483b6ce4058110ae6cd9b764736f6c63430008180033";

type EIP4337FallbackConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EIP4337FallbackConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EIP4337Fallback__factory extends ContractFactory {
  constructor(...args: EIP4337FallbackConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _eip4337manager: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_eip4337manager, overrides || {});
  }
  override deploy(
    _eip4337manager: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_eip4337manager, overrides || {}) as Promise<
      EIP4337Fallback & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): EIP4337Fallback__factory {
    return super.connect(runner) as EIP4337Fallback__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EIP4337FallbackInterface {
    return new Interface(_abi) as EIP4337FallbackInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): EIP4337Fallback {
    return new Contract(address, _abi, runner) as unknown as EIP4337Fallback;
  }
}