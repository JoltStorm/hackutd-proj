const resourceData = {
    hydrogen: { name: 'Hydrogen', color: 'red' },
    oxygen: { name: 'Oxygen', color: 'teal' },
    water: { name: 'Water', color: 'blue' }
}

const resourceObj = (name, amount) => {
    let data = resourceData[name]
    return { name: data.name, color: data.color, amount: amount }
}

export default resourceObj