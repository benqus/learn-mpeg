import { IBox } from './types';

export function mvhd(box: IBox) {
  const version = box.data[0];
  const flags = [ box.data.readUInt8(1), box.data.readUInt8(2), box.data.readUInt8(3) ];
  const creationTime = box.data.readUInt32BE(4);
  const modificationTime = box.data.readUInt32BE(8);
  const timescale = box.data.readUInt32BE(12);
  const duration = box.data.readUInt32BE(16);
  const rate = box.data.readUInt32BE(20);
  const volume = box.data.readUInt16BE(24);
  const notDecoded = box.data.subarray(26);

  Object.assign(box, {
    version,
    flags,
    creationTime,
    modificationTime,
    timescale,
    duration,
    rate,
    volume,
    notDecoded,
    toJSON() {
      const { type, size } = box;
      return {
        type,
        size,
        version,
        flags,
        creationTime,
        modificationTime,
        timescale,
        duration,
        rate,
        volume,
      };
    }
  });
}