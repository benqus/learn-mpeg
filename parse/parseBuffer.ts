import { BoxDecorators } from '../box/BoxDecorators';
import { IBox } from '../box/types';
import { parseBox } from './parseBox';

export function parseBuffer(buffer: Buffer) {
  const boxes: Array<IBox> = [];
  while (buffer.length > 0) {
    let box = parseBox(buffer);
    if (BoxDecorators[box.type]) {
      BoxDecorators[box.type](box);
    }
    boxes.push(box);
    buffer = buffer.subarray(box.size);
  }

  return boxes;
}
