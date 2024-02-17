import { parseBuffer } from '../parse';
import { IBox } from './types';

export function meta(box: IBox) {
  const version = box.data.readUInt8(0);
  const flags = [
    box.data.readUInt8(1),
    box.data.readUInt8(2),
    box.data.readUInt8(3),
  ];
  const children = parseBuffer(box.data.subarray(4));

  Object.assign(box, {
    version,
    flags,
    children,
    toJSON() {
      const { type, size } = box;
      return {
        type,
        size,
        version,
        flags,
        children: children.map(c => c.toJSON()),
      };
    }
  });
}