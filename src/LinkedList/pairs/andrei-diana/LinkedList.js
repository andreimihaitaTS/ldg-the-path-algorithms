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
        if (this.length === 1) {
            this.head = node
        }
        this.tail = node
    }
    pop() {
        let node = this.head
        for (let i = 0; i < this.length - 1; i++) {
            node = node.next
        }
        node.next = null
        this.tail = node
        this.length--
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
