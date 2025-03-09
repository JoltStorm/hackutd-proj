const resourceData = {
    hydrogen: { name: 'Hydrogen', color: 'red', solid: false },
    oxygen: { name: 'Oxygen', color: 'teal', solid: false },
    water: { name: 'Water', color: 'blue', solid: false },
    iron: { name: 'Iron', color: 'gray', solid: true }
}

const resourceObj = (name, amount) => {
    let data = resourceData[name]
    return { name: data.name, color: data.color, amount: amount, solid: data.solid }
}

export default resourceObj