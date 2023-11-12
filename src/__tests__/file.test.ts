import { expect, it } from 'vitest';
import add from '../assets/file';

it('add', (): void => {
  expect(add()).toBe(0);
  expect(add(1)).toBe(1);
  expect(add(1, 2, 3)).toBe(6);
});
