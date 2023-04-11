export function getRandomNum(range, take = 1, apart = []) {
    let source = Array.from(Array(range).keys())
    source = source.filter(el => !apart.includes(el))
    
    let result = []
    while (result.length < take && source.length > 0) {
        const index = Math.floor(Math.random() * source.length)
        result.push(source[index])
        source.splice(index, 1)
    }
    return result
}
