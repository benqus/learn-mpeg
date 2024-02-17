import { parseBuffer } from '../parse';
import { IBox } from './types';

export function udta(box: IBox) {
  const children = parseBuffer(box.data);

  Object.assign(box, {
    children,
    toJSON() {
      const { type, size } = box;
      return {
        type,
        size,
        chidren: children.map(c => c.toJSON()),
      };
    }
  });
}