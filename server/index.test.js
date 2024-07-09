const add=require('./index');

test('add 1+2 to 3',()=>{
    expect(add(1,2)).toBe(3)
})
test('add -2+-2 to -4',()=>{
    expect(add(-2,-2)).toBe(-4)
})