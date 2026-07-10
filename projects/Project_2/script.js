const form = document.querySelector("#registerform");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const user = {
        username: username.value,
        email: email.value,
        password: password.value
    };
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    console.log(user);
    console.log(users);
})