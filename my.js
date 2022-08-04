const fs = require('fs');
// fs.readFile('./data.json','utf-8', (err, jsonString) => {
//     // console.log(jsonString);
//     if(err) {
//         console.log(err);
//     } else {
//         try {
//             const data = JSON.parse(jsonString);
//             console.log(data);
//         } catch(err) {
//             console.log('error parsing JSON', err)
//         }
//     }
// });



let customer = ""
try {
    const jsonString = fs.readFileSync('./data.json', 'utf-8');
    customer = JSON.parse(jsonString)
    console.log(customer)
} catch(err) {
     console.log(err)
}

// customer.name = "Jatin"
// console.log(customer.name)

const newObject = {
     name: 'Jatin',
     age: 22
}
// const jsonString = JSON.stringify(newObject)
// console.log(jsonString)

fs.writeFile('./data.json',JSON.stringify(newObject,null,2), err => {
    if(err) {
        console.log(err)
    } else {
        console.log('file successfully written!')
    }
})





// // console.log("hello")
// let mydata = []
// fetch('./data.json')
//     .then(mydata = response  => response.json())
//     .then(console.log)
//     // .then(mydata  = response)
//     // .then(userData = userData.forEach(function(response) {
//     //     mydata = userData
//     // }))


// function check() {
//         console.log(response)
// }


// $.getJSON('data.json', function(data) {
//     console.log(data);
// });