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
        const lastNode = node.next
        node.next = null
        this.tail = node
        this.length--
        return lastNode.value
    }
    get(index) {
        let node = this.find(index)
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
        return excise.value
    }
    unshift(value) {
        let formerHead = this.head
        let newNode = new Node(value)
        this.head = newNode
        this.head.next = formerHead
        this.length++
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
