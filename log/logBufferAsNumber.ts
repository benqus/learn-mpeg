export function logBufferAsNumber(buffer: Buffer): void {
  const { data } = buffer.toJSON();
  console.log(...data);
}
