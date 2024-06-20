// API
const API_ENDPOINT = 'https://yesno.wtf/api';
const btnGetAnswer = document.getElementById("button");
const ballAnswer = document.getElementById("answer");
/*
fetch('https://yesno.wtf/api')
.then(function() {

})
.catch(function() {

});


fetch('https://yesno.wtf/api')
    // Exito
    .then(response => response.json())  // convertir a json
    .then(json => console.log(json))    //imprimir los datos en la consola
    .catch(err => console.log('Solicitud fallida', err)); // Capturar errores
*/

    fetch('https://yesno.wtf/api', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ mail: 'pp@pp.com', password: '123' })
    })
    .then(res => res.json())
    .then(res=> {
          console.log(res);
    });



    btnGetAnswer.addEventListener("click", fetchAnswer);
function fetchAnswer(response){
    response= res
}//function


/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */
