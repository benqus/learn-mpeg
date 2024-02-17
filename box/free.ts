import { IBox } from './types';

export function free(box: IBox) {
  const info = box.data.toString();

  Object.assign(box, {
    info,
    toJSON() {
      const { type, size } = box;
      return { type, size, info };
    }
  });
}