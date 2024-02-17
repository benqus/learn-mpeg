import { IBox } from './types';

export function ftyp(box: IBox) {
  const majorBrand = box.data.subarray(0, 4).toString();
  const minorVersion = box.data.readUint32BE(4);
  const compatibleBrands: Array<string> = [];

  for (let i = 8; i < box.data.length; i += 4) {
    compatibleBrands.push(box.data.subarray(i, i + 4).toString());
  }

  Object.assign(box, {
    majorBrand,
    minorVersion,
    compatibleBrands,
    toJSON() {
      const { type, size } = box;
      return { type, size, majorBrand, minorVersion, compatibleBrands };
    }
  });
}