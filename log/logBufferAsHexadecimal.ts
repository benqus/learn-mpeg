export function logBufferAsHexadecimal(buffer: Buffer): void {
  const hexArray: Array<string> = [];
  buffer.forEach(n => hexArray.push(n.toString(16)));
  console.log(...hexArray);
}
