const studentform=document.getElementById('studentform');
const exampleInputEmail1 =document.getElementById('exampleInputEmail1');
const exampleInputPassword1 =document.getElementById('exampleInputPassword1');
const submit=document.getElementById('myform');

submit.addEventListener('submit', function (event) {
    event.preventDefault(); 

    fetch('https://655c2ff2ab37729791aa015f.mockapi.io/university/swp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
     name:exampleInputEmail1.value,
     email:exampleInputPassword1.value,
     
        }),
    })
    .then((response) => response.json()) 
    .then(data =>{
        console.log(
            data
        );
    })
})