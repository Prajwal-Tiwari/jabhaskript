const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");
console.log('Hi');
const para = document.querySelectorAll(".test");
document.addEventListener('mousemove', (e) => {
    const testing = document.querySelector(".test");
    testing.innerHTML = `the co-ordinates of the mouse movement are: ${e.clientX}, ${e.clientY}`;
})

buttons.forEach(function(btn) {
    console.log(btn);
    btn.addEventListener('mouseenter', function(e) {
        console.log(e);
        console.log(e.target);
        if(e.target.id === "grey"){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "blue"){
            body.style.backgroundColor = e.target.id;
            e.syle.backgroundColor = "white";
        }
        if(e.target.id === "purple"){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "yellow"){
            body.style.backgroundColor = e.target.id;
        }
    })

})