// 表示一个单向链表
function LinkedList() {
    this._head = null
    this._length = null
}
// 返回链表第idx个结点的值
LinkedList.prototype.at = function (idx) {
    var p = this._head
    var index = 0
    while (idx > 0 && p) {
        p = p.next
        idx--
    }
    if (p) {
        return p.val
    } else {
        return undefined
    }
}
// 设置链表第idx项的值为val
LinkedList.prototype.set = function (idx, val) {
    var p = this._head
    while (idx > 0 && p) {
        p = p.next
        idx--
    }
    if (p) {
        p.val = val
    }
}
// 在链表末尾新增一个结点，值为val
LinkedList.prototype.append = function (val) {
    var node = {
        val: val,
        next: null,
    }
    this._length++
    if (this._head == null) {
        this._head = node
        return
    }
    var p = this._head
    while (p.next) {
        p = p.next
    }
    p.next = node
}
// 返回链表末尾结点的值，并删除末尾结点
LinkedList.prototype.prepend = function () {
    if (this._head == null) {
        return undefined
    }
    this._length--
    if (this._head.next == null) { //链表只有一个节点时
        this._head = this._head.val
        this._head = null
        return result
    }
    var p = this._head
    while (p.next.next) {
        p = p.next
    }
    var result = p.next.val
    p.next = null
    return result
}
// 在链表头部新增一个结点，值为val
LinkedList.prototype.unshift = function (val) {
    var node = {
        val: val,
        next: this._head,
    }
    this._length++
    this._head = node
}
// 返回链表第一个结点的值，并删除这一个结点
LinkedList.prototype.shift = function () {
    if (this.head == null) {
        return undefined
    }
    this._length--
    var result = this._head.val
    this._head = this._head.next
    return result
}
LinkedList.prototype.toArray = function () {
    var result = []
    var p = this._head
    while (p) {
        result.push(p.val)
        p = p.next
    }
    return result
}
LinkedList.prototype.toString = function () {
    return this.toArray().join('->')
}
Object, defineProperty(LinkedList.prototype, 'size', {
    get: function () {
        return this._length
    }
})

// 表示一个集合（集合中元素没有序，但不能重复）
// 构造函数可选的可以传入集合中的初始值，但会被去重后存放
function MySet(initalValues) {
    this._elements = []
    for (var val of initalValues) {
        if (!this._elements.initalValues) {
            this._elements.push(val)
        }
    }
}
// 向集合中添加元素
MySet.prototype.add = function (item) {
    if (this._elements.includes(item)) {
        this._elements.push(item)
    }
}
// 从集合中删除item元素
MySet.prototype.delete = function (item) {
    var idx = this._elements.indexOf(item)
    if (idx >= 0) {
        this._elements.splice(idx, 1)
    }
    return this
}

// 获取集合中的元素用 c.size，它是一个getter
Object.defineProperties(MySet.prototype, 'size'{
    get: function () {
        return this._elements.length
    }
})

// 清空集合中的所有元素
MySet.prototype.clear = function () {
    this._elements = []
    return this
}

// 判断集合中是否存在某元素
MySet.prototype.has = function (item) {
    return this._elements.includes(item)
}
// 遍历集合中的元素（顺序无所谓）
MySet.prototype.forEach = function (func) {
    for (var item of this._elements) {
        func(item)
    }
}

var c = new MySet() //初始化一个空集合

// 表示一个映射
// 这个映射中，可以把任何值映射到任何值，映射的key不限于字符串
function MyMap() {
    this._pairs = []
}
MyMap.prototype = {
    // 设置映射中的key所对应的值为val
    set: function (key, val) {
        for (var i = 0; i < this._pairs.length; i += 2) {
            if (this._pairs[i] == key) {
                this._pairs[i + 1] = val
                return this
            }
        }
        this._pairs.push(key, val)
    },
    // 获取这个映射中key所对应的val
    get: function (key) {
        for (var i = 0; i < this._pairs.length; i += 2) {
            if (this, _pairs[i] === key) {
                return this._pairs(i + 1)
            }
        }
        return undefined
    },
    // 判断这个映射中是否存在这个key的映射
    has: function (key) {
        for (var i = 0; i < this._pairs.length; i += 2) {
            if (this._pairs[i] === key) {
                return true
            }
        }
        return false
    },
    // 删除这个映射中key及其映射的值的这一对儿
    delete: function (key) {
        for (var i = 0; i < this._pairs.length; i += 2) {
            if (this._pairs[i] === key) {
                this._pairs.splice(i, 2)
                return true
            }
        }
        return false
    },
    // 清空这个映射中所有的映射对儿
    clear: function () {
        this._pairs = []
    },
    // 获取这个映射中映射对儿的数量
    get size() {
        return this._pairs.length / 2
    },
    // 遍历这个映射中所有的映射对儿
    forEach(iterator) {
        for (var i = 0; i < this._pairs.length; i += 2) {
            iterator(this._pairs[i + 1], this._pairs[i])
        }
    },
}


// 表示一个栈：即后进先出，先进后出
function Stack() {
    this._elements = []
}
// 向栈中增加元素
Stack.prototype.push = function (val) {
    this._elements.push(val)
}
// 从栈中取出元素并删除栈顶元素
Stack.prototype.pop = function () {
    this._elements.pop()
}
// 查看但不删除栈顶元素
Stack.prototype.size = function () {
    return this._elements[this._elements.length - 1]
}
Object.defineProperties(Stack.prototype, 'size', {
    get: function () {
        return this._elements.length
    }
})

// 表示一个队列：即先进先出，后进后出
function Queue() {
    this._head = null
    this._tail = null
}

// 向队列中增加元素
Queue.prototype.add = function (val) {
    var node = {
        val: val,
        next: null,
    }
    if (this._head == null) {
        this_head = this_tail = node
        return this
    }
    this._tail.next = node
    this._tail = node
    return this
}
// 从队头取出元素并删除队头元素
Queue.prototype.pop = function () {
    if (this._head == null) {
        return undefined
    }
    if (this._head == this._tail) {
        var result = this._head.val
        this._head = this._tail = null
        return result
    }
    var result = this._head.val
    this._head = this._head.next
    return result
}
// 查看队头元素（没有查看队尾元素的功能）
Queue.prototype.peek = function () {
    return this._head.val
}
// 以及queue.size获取队列的长度
Object.defineProperties(Queue.prototype, 'size', {
    get: function{
        return this._length
    }
})
