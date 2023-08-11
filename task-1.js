const ADMIN_PASSWORD = 'jqueryismyjam'; 
let message;
const login = prompt("Введіть пароль:")

if(login !== ADMIN_PASSWORD){
    message = "Операцію скасовано!"
    console.log(message);
}else if(login === ADMIN_PASSWORD){
    message = "Ласкаво просимо!"
    console.log(message)}
else {message = "Доступ заборонено, невірний пароль!"
        console.log(message)}
alert(message)