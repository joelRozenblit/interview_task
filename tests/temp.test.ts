import { getMessage } from '../src/temp.ts';

describe('getMessage', () => {
  it('should return "Hello, World!"', () => {
    const message = getMessage();
    
    expect(message).toBe('Hello, World!');
  });
});