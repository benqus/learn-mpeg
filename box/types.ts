import { Buffer } from 'node:buffer';

export type Maybe<T> = T | null;

export interface IBox {
  type: string;
  size: number;
  data: Buffer;
  children?: Array<IBox>;
  toJSON(): {
    type: string;
    size: number;
  };
}
