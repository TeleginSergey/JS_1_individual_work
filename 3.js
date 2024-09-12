const user = {
    'name': 'Sofia',
    'age': 20,
    'email': 'sofia.yakovleva@gmail.com',
}

function displayUserInfo(user){
    return `Имя: ${user['name']}, Возраст: ${user['age']}, Email: ${user['email']}`
}
user['greet'] = function(name){
    return `Привет, ${name}!`;
}

console.log(displayUserInfo(user))
console.log(user['greet']('sofia'))