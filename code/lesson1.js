export default (str) => {
    return str.split(' ').map(item => {
        return item.split(/\s/g).reverse().join('')
    }).join(' ')
}

