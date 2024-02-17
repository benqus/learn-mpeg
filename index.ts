import { resolve } from 'node:path';
import { readFile } from 'node:fs/promises';

import { parseBuffer } from './parse';
import { IBox } from './box';

async function main(): Promise<void> {
  const filePath: string = resolve('forbiggerfun.mp4');
  console.log('Reading file: forbiggerfun.mp4');

  const fileBuffer = await readFile(filePath);
  console.log('file size:', fileBuffer.length, 'bytes');
  console.log('file size:', (fileBuffer.length / (1024)).toFixed(2), 'KB');
  console.log('file size:', (fileBuffer.length / (1024 * 1024)).toFixed(2), 'MB');
  console.log();

  const boxes = parseBuffer(fileBuffer);
  boxes.forEach((b: IBox): void => console.log(b.toJSON()));
}

main();
