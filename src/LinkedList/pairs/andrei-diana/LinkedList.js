module.exports = class LinkedList {
    constructor() {
        this.length = 0
        this.head = null
        this.tail = null
    }
    push(value) {
        const node = new Node(value)
        this.length++
        if (this.length == 0) {
            this.head = node
        } else if (this.tail) {
            this.tail.next = node
        }
        this.tail = node
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
