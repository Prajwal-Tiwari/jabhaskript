const loginform = document.querySelector('#LoginForm');

loginform.addEventListener('submit', (e)=>{
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users'));
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    if(!users){
        alert('No users in local storage');
        return;
    }
    users.forEach((user)=>{
        console.log(user);
        if(user.username === username.value && user.password === password.value){
            alert("username found and password match");
            return;
        }
    })
})