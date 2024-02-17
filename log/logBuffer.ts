import { logBufferAsBinaryString } from './logBufferAsBinaryString';
import { logBufferAsHexadecimal } from './logBufferAsHexadecimal';
import { logBufferAsNumber } from './logBufferAsNumber';

export function logBuffer(buffer: Buffer, encoding: BufferEncoding = 'utf8'): void {
  console.log(buffer.toString(encoding));
  logBufferAsNumber(buffer);
  logBufferAsHexadecimal(buffer);
  console.log(buffer);
  logBufferAsBinaryString(buffer);
  console.log('\n');
}
