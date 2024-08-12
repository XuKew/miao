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
            if (array[i] === 0 || array[i] === '' || array[i] === false) {
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



    return {
        chunk: chunk,
        compact: compact,
        difference: difference,
        fill: fill,
        drop: drop,

    }
}()
