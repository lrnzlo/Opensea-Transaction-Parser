import { Interface } from '@ethersproject/abi';

export interface OpenseaTransactionInfo {
  Seller: string;
  Buyer: string;

  NftId: string;
  NftCollection: { Address: string; Name?: string };

  Price: string;
  Royalty: { val: string; collector: string };
}

export interface ILogs {
  address: string
  topics: string[]
  data: string
  index: number
  abi: string
  iface: Interface
}