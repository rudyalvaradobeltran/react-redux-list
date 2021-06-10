export const filter = (items, payload, search) => {
    const regex = new RegExp(`^${payload}`, 'i');
    return items.filter(n => regex.test(n[search]));
}

export const find = (items, id) => {
    return items.find(element => element.id === id);
}