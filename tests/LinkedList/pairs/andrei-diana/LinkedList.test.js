const LinkedList = require('../../../../src/LinkedList/pairs/andrei-diana/LinkedList')

describe('test', () => {
    beforeEach(() => {
        list = new LinkedList()
        for (let i = 1; i <= 20; i++) {
            list.push(i * 2)
        }
    })
    test('can create a new list', () => {
        expect(list).toBeDefined()
    })
    test('push', () => {
        expect(list.length).toEqual(20)
    })
    test('pop', () => {
        list.pop()
        expect(list.length).toEqual(19)
    })
    test('get element by index', () => {
        expect(list.get(6)).toEqual(12)
        expect(list.get(8)).toEqual(16)
    })
    test('delete', () => {
        const length = list.length
        list.delete(2)
        expect(list.length).toEqual(length - 1)
        expect(list.get(2)).toEqual(6)
        list.delete(4)
        expect(list.length).toEqual(length - 2)
        expect(list.get(4)).toEqual(12)
    })
    test('unshift', () => {
        const length = list.length
        list.unshift(678)
        expect(list.get(1)).toEqual(678)
        expect(list.length).toEqual(length + 1)
    })
})
