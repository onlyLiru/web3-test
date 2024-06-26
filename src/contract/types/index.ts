export type SolidityType =
  | 'bool'
  | 'address'
  | 'uint256'
  | 'bytes'
  | 'bytes32'
  | 'bytes32[]';

export { SupportedChainId } from './enum';
export type { ChainInfo, Addresses } from './constants';
export type {
  MakerOrder,
  MakerOrderWithEncodedParams,
  MakerOrderWithSignature,
  MakerOrderWithoutNonce,
  MakerOrderWithVRS,
  TakerOrder,
  TakerOrderWithEncodedParams,
} from './orders';

export type ImageSizeEnum = 'list' | 'detail' | 'small';
