import { twoSum } from './app.component';

describe('twoSum function', () => {
  it('should return the indices of two elements that add up to the target', () => {
    expect(twoSum([1, 2, 3, 4, 5], 5)).toEqual([0, 3]);
    expect(twoSum([1, 3, 5, 7, 8], 9)).toEqual([0, 4]);
  });
  it('should return an empty array when the target is not in nums', () => {
    expect(twoSum([1, 2, 3, 4, 5], 10)).toEqual([]);
  });
});
