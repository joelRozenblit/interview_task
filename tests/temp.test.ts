import { getMessage } from '../src/temp.ts';

describe('getMessage', () => {
  it('should return "Hello, NiCE!"', () => {
    const message = getMessage();
    
    expect(message).toBe('Hello, NiCE!');
  });
});