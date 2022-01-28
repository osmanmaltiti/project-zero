let arr = [
    {id: 1, name: "Osman"},
    {id: 1, name: "Osman"},
    {id: 1, name: "Osman"},
    {id: 2, name: "Maltiti"},
    {id: 3, name: "Sulemana"},
    {id: 4, name: "Man"},
]
const filter = (array, key) => {
    return [...new Map(array.map(item => [item[key], item])).values()]
}

const output = filter(arr, 'id');
console.log(output)

