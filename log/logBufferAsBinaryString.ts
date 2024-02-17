export function logBufferAsBinaryString(buffer: Buffer): void {
  const array = buffer.reduce((arr, byte) =>
    arr.concat(byte.toString(2).padStart(8, '0')), [] as Array<String>);
  console.log(array.join(' '));
}
