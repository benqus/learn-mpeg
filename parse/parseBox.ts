import { Buffer } from 'node:buffer';
import { IBox } from '../box/types';

export function parseBox(buffer: Buffer): IBox {
  
  // first 4 bytes of a buffer define the size of the box/atom
  const size = buffer.readUInt32BE(0);

  // bytes 4 to 8 of a buffer define the type of the box/atom
  const type = buffer.subarray(4, 8).toString();

  // bytes 8 to [size] is the contents (data, children) box/atom
  const data = buffer.subarray(8, size);

  function toJSON() {
    return { type, size };
  }

  return { size, type, data, toJSON };
}
