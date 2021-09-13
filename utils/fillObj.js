module.exports = object => {
    if(!object.sort) return [];
    const sortBy = object.sort.split(' ').map(value => value === 'priority' ? [value, 'DESC'] : [value, 'ASC']);
    return sortBy;
}