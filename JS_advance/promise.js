let promiseOne = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log('Legend')
        resolve();
    },2000)
    
});

promiseOne.then(() => {
    console.log(`Promise resolved`);
});

console.log(35);

function apiReq(flag) {
  return new Promise((resolve,reject) => {
    console.log(`Api req initiated...`)
        setTimeout(() => {
            if(flag) {
                
                resolve(`Data receieved`);
            } else {
               
                reject(`Something went wrong`);
            }
        },1500)
        })
}

function generateFlag() {
    return Math.floor(Math.random() * 2);
}

apiReq(generateFlag())
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log(`api request finished`);
    })


    async function printMyName(name) {
       const resolveName = await  new Promise((resolve,reject) => {
            setTimeout(() => {
              resolve(name);
            },5000);

        })

        console.log(`before name`)

        return resolveName;
    }

    printMyName('Rudra')
                .then((response) => {
                    console.log(response);
                })

console.log(`I will be printed immediately`);

    