const box = document.querySelector('#grey');
const cursor = document.querySelector('.cursor');
console.log(cursor);
document.addEventListener('mousemove', (e)=>{
    console.log(e.clientX, e.clientY);
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = e.clientX + 'px';
})

box.addEventListener('mouseenter', (e)=>{
    cursor.style.backgroundColor = "blue";
})
box.addEventListener('mouseleave', (e)=>{
    cursor.style.backgroundColor = "black";
})