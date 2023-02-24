
console.log('loading started...');
const promise = new Promise((resolve, reject )=>{
 setTimeout(()=>{
    const booling = false
    if(!booling){
        const jsonData = {
            userName: "Kutman",
            userage : 23,
            place:{
                city: "Osh",
                street: "Kygystan"
            }
        }
            const jsonstringify = JSON.stringify(jsonData)
            console.log(jsonstringify);
            resolve(jsonstringify)
    }else{
        reject('something has gone wrong')
    }
    },2000)

});
promise
.then((jsonData)=>{
    setTimeout(()=>{
        const parse = JSON.parse(jsonData)
          console.log(parse);
    }, 2000)
})
.catch((booling)=>{
    console.log('Oops sorry try again',booling);
})
.finally(()=>{
    console.log('loading anded');
})