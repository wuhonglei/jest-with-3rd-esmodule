import { isIp } from '../src/ip.js';

test('ip 192.168.1.1 is valid', () => {
    expect(isIp('1')).toBe(true);
});