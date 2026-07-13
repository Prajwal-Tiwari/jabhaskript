const status = document.querySelector('#status');
const message = document.querySelector('#message');
const countdown = document.querySelector('#countdown');
message.addEventListener('input', (e)=>{
    status.textContent = "typing...";
})

document.querySelector('#encrypt').addEventListener('click', (e)=>{
    e.target.disabled = true;
    let count = 5;
    const timer = setInterval(()=>{
        count--;
        status.textContent = `message destroying in ${count} second`;
        countdown.textContent = count;
        if (count <=0){
            status.textContent="Message Destroyed";
            message.value = "*#*#***#*#*";
            clearInterval(timer);
            setTimeout(()=>{
                window.location.reload();
            }, 1000);
        }
    }, 1000)
    document.querySelector('#cancel').addEventListener('click', (e2)=>{
        e2.target.disabled = true;
        clearInterval(timer);
        status.textContent="Message retrieved.... (Cancels destroyed)";
        e.target.disabled = false;
    })
})
