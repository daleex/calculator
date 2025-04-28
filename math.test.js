const { sum, diff, multiply, divide, pow } = require('./math');

test('adds 1 + 2 equals 3',()=>{
    expect(sum(1,2)).toBe(3);
});

test('adds 0 + 2 equals 2',()=>{
    expect(sum(0,2)).toBe(2);
});

test('adds -1 + 2 equals 1',()=>{
    expect(sum(-1,2)).toBe(1);
});


test('subtracts 5 - 2 equals 3', () => {
    expect(diff(5, 2)).toBe(3);
});

test('subtracts 2 - 5 equals -3', () => {
    expect(diff(2, 5)).toBe(-3);
});

test('subtracts 0 - 0 equals 0', () => {
    expect(diff(0, 0)).toBe(0);
});


test('multiplies 3 * 4 equals 12', () => {
    expect(multiply(3, 4)).toBe(12);
});

test('multiplies 0 * 4 equals 0', () => {
    expect(multiply(0, 4)).toBe(0);
});

test('multiplies -3 * 4 equals -12', () => {
    expect(multiply(-3, 4)).toBe(-12);
});


test('divides 10 / 2 equals 5', () => {
    expect(divide(10, 2)).toBe(5);
});

test('divides 5 / 2 equals 2.5', () => {
    expect(divide(5, 2)).toBe(2.5);
});

test('divides 0 / 5 equals 0', () => {
    expect(divide(0, 5)).toBe(0);
});

test('divides 5 / 0 returns Infinity', () => {
    expect(divide(5, 0)).toBe(Infinity);
});


test('2 raised to 3 equals 8', () => {
    expect(pow(2, 3)).toBe(8);
});

test('2 raised to 0 equals 1', () => {
    expect(pow(2, 0)).toBe(1);
});

test('0 raised to 5 equals 0', () => {
    expect(pow(0, 5)).toBe(0);
});

test('negative base -2 raised to 3 equals -8', () => {
    expect(pow(-2, 3)).toBe(-8);
});