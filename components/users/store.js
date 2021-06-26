//El array se usara como demo en lugar de una DB

const list = [];

let addUser = (user) => {
    list.push(user);
}

let getUsers = () => {
    return list;
}

module.exports = {
    addUser,
    getUsers
}