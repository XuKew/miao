var xukew = function () {
    function chunk(array, size) {
        var chunkArray = []
        for (var i = 0; i < array.length; i += size) {
            chunkArray.push(array.slice(i, i + size))
        }
        return chunkArray
    }
    function compact(array) {
        var compactArray = []
        for (var i = 0; i < array.length; i++) {
            if (array[i] === 0 || array[i] === '' || array[i] === false || array[i] === NaN) {
            } else {
                compactArray.push(array[i])
            }
        }
        return compactArray
    }
    function difference(array, values) {
        var differenceArray = []
        var valuesSet = new Set(values)
        for (var i = 0; i < array.length; i++) {
            if (!valuesSet.has(array[i])) {
                differenceArray.push(array[i])
            }
        }
        return differenceArray
    }
    function differenceBy(array, values, iteratee = _.identity) {
        var differenceByArray = []

    }
    function fill(array, value, start = 0, end = array.length) {
        for (var i = start; i < end; i++) {
            array[i] = value
        }
        return array
    }
    function drop(array, n = 1) {
        var dropArray = []
        for (var i = 0; i < array.length; i++) {
            dropArray = array.slice(n)
        }
        return dropArray
    }
    function findIndex(array, predicate = _.identity, fromIndex = 0) {
        for (var i = fromIndex; i < array.length; i++) {
            if (predicate(array[i])) {
                return i
            }
        }
        return -1
    }
    function flatten(array) {
        var flattenArray = []
        for (var i = 0; i < array.length; i++) {
            var result = array[i]
            if (Array.isArray(result)) {
                for (let j = 0; j < result.length; j++) {
                    flattenArray.push(result[i])
                }
            } else {
                flattenArray.push(result)
            }
        }
        return flattenArray
    }
    function flattenDeep(array) {
        var flattenArray = []
        for (var i = 0; i < array.length; i++) {
            var result = array[i]
            if (Array.isArray(result)) {
                for (var res of flattenDeep(result)) {
                    flattenArray.push(res)
                }
            } else {
                flattenArray.push(result)
            }
        }
        return flattenArray
    }
    function fromPairs(pairs) {
        return pairs.reduce((obj, [key, value]) => {
            obj[key] = value
            return obj
        }, {})
    }
    function head(array) {
        return array[0]
    }
    function indexOf(array, value, fromIndex = 0) {
        if (array == null) {
            return -1
        }
        for (i = fromIndex; i < array.length; i++) {
            if (array[i] == value) {
                return i
            }
        }
    }
    function initial(array) {
        var Newarray = []
        for (var i = 0; i < array.length - 1; i++) {
            Newarray.push(array[i])
        }
        return Newarray
    }
    function intersection(array1, array2) {
        var set1 = new Set(array1)
        var set2 = new Set(array2)
        var intersectionSet = new Set(array1.filter(value => set2.has(value)))
        return Array.from(intersectionSet)
    }
    function join(array, separator = ',') {
        var result = ''
        if (separator !== 'string') {
            var separator = separator.toString()
        }
        for (var i = 0; i < array.length; i++) {
            if (i == 0) {
                result += array[i]
            } else {
                result += separator + array[i]
            }
        }
        return result
    }
    function last(array) {
        return array[array.length - 1]
    }
    function lastIndexOf(array, value, fromIndex = array.length - 1) {
        if (array == null) {
            return -1
        }
        for (i = fromIndex; i < array.length; i--) {
            if (array[i] == value) {
                return i
            }
        }
    }
    function reverse(array) {
        var arr = []
        for (var i = array.length - 1; i >= 0; i--) {
            arr.push(array[i])
        }
        return arr
    }
    function sortedIndex(array, value) {
        var left = 0
        var right = array.length - 1
        while (left <= right) {
            var mid = Math.floor((left + right) / 2)
            var midVal = array[mid]
            if (midVal < value) {
                left = mid + 1
            } else if (midVal > value) {
                right = mid - 1
            } else {
                return mid
            }
        }
        return left
    }
    function pull(array, ...values) {
        var arr = []
        for (var i = 0; i < array.length; i++) {
            var val = array[i]
            if (values.indexOf(val) === -1) {
                arr.push(val)
            }
        }
        array = arr
        return array
    }
    function isArray(value) {
        return Object.prototype.toString.call(value) === '[object Array]'
    }
    function every(collection, predicate) {
        if (!Array.isArray(collection)) {
            return false
        }
        for (var i = 0; i < collection.length; i++) {
            if (!predicate(collection[i])) {
                return false
            }
        }
        return true
    }
    function some(collection, predicate) {
        if (!Array.isArray(collection)) {
            return false
        }
        for (var i = 0; i < collection.length; i++) {
            if (!predicate(collection[i])) {
                return true
            }
        }
        return false
    }
    function reduce(collection, iteratee = _.identity, accumulator) {
        if (accumulator === undefined) {
            accumulator = collection[0]
            collection = collection.slice(1)
        }
        for (var i = 0; i < collection.length; i++) {
            accumulator = iteratee(accumulator, collection[i], i, collection)
        }
        return accumulator
    }
    function isEqual(value, other) {
        if (value === other) {
            return true
        }
        if (value && typeof value === 'object') {
            var val = Object.keys(value)
            var oth = Object.keys(other)

            if (val.length !== oth.length) {
                return false
            }
            for (var key in value) {
                if (!isEqual(value[key], other[key])) {
                    return false
                }
            }
            return true
        }
        return false
    }
    function toPairs(object) {
        var arr = []
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                arr.push([key, object[key]])
            }
        }
        return arr
    }
    function identity(value) {
        return value
    }
    function concat(array, ...values) {
        var arr = [array]
        for (var i = 0; i < values.length; i++) {
            if (Array.isArray(values[i])) {
                arr.push(...values[i])
            } else {
                arr.push(values[i])
            }
        }
        return arr
    }
    function isNull(value) {
        return value === null
    }
    function isNil(value) {
        return value === null || value == undefined
    }
    function isUndefined(value) {
        return value === undefined
    }
    function max(array) {
        if (array.length == 0) {
            return undefined
        }
        var maxNum = 0
        for (var i = 0; i < array.length; i++) {
            if (array[i] > maxNum) {
                maxNum = array[i]
            } else {
                continue
            }
        }
        return maxNum
    }
    function maxBy(array, iteratee = _.identity) {
        if (array.length == 0) {
            return undefined
        }
        var maxNum = array[0]
        var maxVal = iteratee(maxNum)
        for (var i = 1; i < array.length; i++) {
            var currentVal = iteratee(array[i])
            if (currentVal > maxVal) {
                maxNum = array[i]
                maxVal = currentVal
            }
        }
        return maxNum
    }
    function min(array) {
        if (array.length == 0) {
            return undefined
        }
        var minNum = Infinity
        for (var i = 0; i < array.length; i++) {
            if (array[i] < maxNum) {
                minNum = array[i]
            } else {
                continue
            }
        }
        return minNum
    }
    function minBy(array, iteratee = _.identity) {
        if (array.length == 0) {
            return undefined
        }

        var minNum = array[0]
        var minVal = iteratee(minNum)
        for (var i = 1; i < array.length; i++) {
            var currentVal = iteratee(array[i])
            if (iteratee(array[i]) < minVal) {
                minNum = array[i]
                minVal = currentVal
            }
        }
        return minNum
    }
    function round(number, precision = 0) {
        var newNumb = Math.pow(10, precision)
        var res = Math.floor(number * newNumb + 0.5) / newNumb
        return parseFloat(res.toFixed(precision >= 0 ? precision : 0))
    }
    function sumBy(array, iteratee = _.identity) {
        var sum = 0
        if (typeof iteratee === 'string') {
            iteratee = function (obj) {
                return obj[iteratee]
            }
        }
        for (var key of array) {
            sum += iteratee(key)
        }
        return sum
    }

    return {
        chunk: chunk,
        compact: compact,
        difference: difference,
        fill: fill,
        drop: drop,
        flatten: flatten,
        flattenDeep: flattenDeep,
        fromPairs: fromPairs,
        head: head,
        indexOf: indexOf,
        initial: initial,
        intersection: intersection,
        join: join,
        last: last,
        lastIndexOf: lastIndexOf,
        reverse: reverse,
        sortedIndex: sortedIndex,
        pull: pull,
        isArray: isArray,
        every: every,
        some: some,
        reduce: reduce,
        isEqual: isEqual,
        toPairs: toPairs,
        identity: identity,
        concat: concat,
        isNull: isNull,
        isNil: isNil,
        isUndefined: isUndefined,
        max: max,
        maxBy: maxBy,
        min: min,
        minBy: minBy,
        round: round,
        sumBy: sumBy

    }
}()
