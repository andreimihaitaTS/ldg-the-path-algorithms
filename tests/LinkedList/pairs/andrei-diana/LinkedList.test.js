const LinkedList = require('../../../../src/LinkedList/pairs/andrei-diana/LinkedList')

describe('LinkedList', () => {
    test('can create a new list', () => {
        const list = new LinkedList()

        expect(list).toBeDefined()
    })
    test('push', () => {
        const list = new LinkedList()
        for (let i = 0; i <= 3; i++) list.push('text')
        expect(list.length).toEqual(4)
    })
    test('pop', () => {
        const list = new LinkedList()
        for (let i = 0; i <= 3; i++) {
            list.push('text')
        }
        list.pop()
        expect(list.length).toEqual(3)
    })
    test('get element by index', () => {
        const list = new LinkedList()
        for (let i = 0; i <= 20; i++) {
            list.push((i + 1) * 2)
        }
        expect(list.get(6)).toEqual(12)
    })
    test('delete', () => {
        const list = new LinkedList()
        for (let i = 0; i <= 20; i++) {
            list.push((i + 1) * 2)
        }
        const length = list.length
        list.delete(2)
        expect(list.get(2)).toEqual(6)
        list.delete(4)
        expect(list.get(4)).toEqual(12)
        expect(list.length == length - 1)
    })
})
