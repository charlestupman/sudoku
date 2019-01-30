import { findNumber, generator } from './generator'

console.log(generator())


const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const expectedNotFound = [1, 2, 3, 4, 5, 6, 7, 8]


describe('find number', () => {
	it('should check to see if a number is already in a given array and return it if not', () => {
  	expect(findNumber(9, expectedNotFound)).toEqual(9)
	})
	it('give a different that is not there', () => {
		expect(findNumber(4, expectedNotFound)).toEqual(9)
	})
})

describe('number generator', () => {
	let generated
	let smallGrid
	beforeEach(() => {
		generated = generator()
	  smallGrid = generated[0]
	})
	it('should produce an array', () => {
		expect(generated instanceof Array).toBe(true)
	})
	it('array contains 9 smaller arrays', () => {
		expect(generated.length).toBe(9)
		expect(smallGrid instanceof Array).toBe(true)
	})
	describe('small array', () => {
	  it('each smaller array should contain numbers from 0 - 9', () => {
		  expect(smallGrid).toEqual(expect.arrayContaining(expected))
	  })
	  it('numbers should be randomly ordered', () => {
			expect(generated[0]).not.toEqual(generator()[0])
		})
		it('numbers in the same row should not be the same', () => {
			for (let index = 0; index < 1; index++) {
				const newGenerated = generator()
				expect(newGenerated[0][0]).not.toEqual(newGenerated[1][0])
			}
		})
	})
})
