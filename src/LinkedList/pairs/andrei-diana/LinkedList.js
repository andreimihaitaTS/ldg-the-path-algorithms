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
        let node = this.find(this.length - 1)
        node.next = null
        this.tail = node
        this.length--
    }
    get(index) {
        let node = this.head
        for (let i = 0; i < index - 1; i++) {
            node = node.next
        }
        return node.value
    }
    delete(index) {
        if (index === 0) {
            const head = this.head
            if (head) {
                this.head = head.next
            } else {
                this.head = null
            }
            this.length--
            return head.value
        }
        const node = this.find(index - 1)
        const excise = node.next
        if (!excise) return null
        node.next = excise.next
        if (!node.next.next) this.tail = node.next
        this.length--
        console.log(this.head)
        return excise.value
    }
    find(index) {
        let node = this.head
        for (let i = 0; i < index - 1; i++) {
            node = node.next
        }
        return node
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
