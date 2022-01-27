const arr = [
    {id: 1, name: 'Maltiti'},
    {id: 1, name: 'Maltiti'},
    {id: 2, name: 'Osman'},
    {id: 1, name: 'Maltiti'},
    {id: 3, name: 'Sule'},
    {id: 4, name: 'Overhaul'}
]

const filter = (array, key) => {
    return [
        ...new Map(
            array.map(item => [item[key], item])
        )
    ]
}

console.log(filter(arr, 'id'))