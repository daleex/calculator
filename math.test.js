const sum = require('./math').sum;

test('adds 1 + 2 equals 3',()=>{
    expect(sum(1,2)).toBe(3);
});

test('adds 0 + 2 equals 2',()=>{
    expect(sum(0,2)).toBe(2);
});

test('adds -1 + 2 equals 1',()=>{
    expect(sum(-1,2)).toBe(1);
});