// const promiseone = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("Async Task Completed");
//         resolve();
//     },1000);
    
// });

// promiseone.then(()=>{
//     console.log("promise consumed");
// })

// new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("Async 2 completed");
//         resolve();
//     }, 1000);
// }).then(()=>{
//     console.log("resolved");
// });

// const promisetwo = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//        let user = {username: "Prajwal", email: "prajwal@gmail.com"};
//        let error = false;
//        if(error){
//         reject("Something gone wrong....");
//        }
//        else{
//         resolve(user);
//        }
//     },1000);
    
// })
// .then((user)=>{
//     console.log(user);
//     return user.username;
// })
// .then((usrnme)=>{
//     console.log(usrnme);
//     return usrnme*2;
// })
// .then((usr)=>{
//     console.log(usr);
//     return 45;
// })
// .then((hi)=>{
//     console.log(hi);
// })
// .then((wht)=>{
//     console.log(wht);
// })
// .catch((error)=>{
//     console.log(error);
// })
// .finally(()=>{console.log("The promise exists")});


const promiseThree = new Promise((res, rej)=>{
    setTimeout(function(){
        let error = false;
        if(!error){
            res({username: "Prajwal3", password: "123"});
        } else{
            rej("Error: JS went wrong3");
        }
    },1000)
})



async function consumepromiseThree(){
    try{
        const resp = await promiseThree;
        console.log(resp);
    } catch(error){
        console.log(error);
    }
}

consumepromiseThree();


// async function promiseFour(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
        
//     } catch(error){
//         console.log("Error: ", error);
//     }
// }

// promiseFour();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{console.log(error)});