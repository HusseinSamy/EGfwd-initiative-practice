import myFunc from '../testing_practice'

it('expect myFunc(5) to equal 25', () => {
  expect(myFunc(5)).toEqual(25);
});

it('expects(10) to equal 100', () => {
    expect(myFunc(10)).toEqual(10*10)
})