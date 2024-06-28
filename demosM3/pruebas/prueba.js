const credentials = [];
const users = [];

let idCredential = 1;
let idUser = 1;

const createCredential = async (nameUser, password) => {
    const newCredential = { id: idCredential, nameUser, password };
    credentials.push(newCredential);
    idCredential++;
    return newCredential.id;
}

const createUsert = async (name, birthdate, nit, password) => {
    const credentialId = await createCredential(name, password);
    const newUser = { id: idUser, name, birthdate, nit, password, credentials: credentialId };
    users.push(newUser);
    idUser++;
    return newUser;
}

// Ejemplo de uso:
createUsert('John Doe', ('1990-01-01'), '123456789', 'securePassword')
    .then(user => console.log('Usuario creado:', user))
    .catch(error => console.error('Error al crear el usuario:', error));
createUsert('jeison Doe', new Date('1990-05-02'), '123456789', 'securePassword')
    .then(user => console.log('Usuario creado:', user))
    .catch(error => console.error('Error al crear el usuario:', error));
