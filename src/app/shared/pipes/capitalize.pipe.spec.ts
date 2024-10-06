import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  let pipe: CapitalizePipe;

  beforeEach(() => {
    pipe = new CapitalizePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform "Vladislav" to "VLADISLAV"', () => {
    const result = pipe.transform('Vladislav');
    expect(result).toBe('VLADISLAV');
  });
});
