const store = require('./store');

const addUser = (user, password) => {
    return new Promise( (resolve, reject) => {
        if ( !user || !password){
            console.log('[messageController]: No hay usuario o contraseña');
            return reject('Datos incompletos');
        }
        const fullUser = {
            username: user,
            password: password,
            profile: profile,
            correo: correo,
            telefono: telefono,
            fecha_creación: new Date(),
            fecha_actualización: new Date(),
            toke: '',
            token_expiracion: ''
        }
        store.addUser(fullUser);
        resolve(fullUser);
    })
}

const getUsers = () => {
    return new Promise( (resolve, reject) => {
        resolve(store.getUsers());
    })
}

module.exports = {
    addUser,
    getUsers
};