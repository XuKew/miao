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
        console.log(array[0])
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
        intersection: intersection

    }
}()
