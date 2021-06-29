// Get a reference to form w/ id="info-form"
let informationForm = document.querySelector('#info-form');

//Do something when form is submitted
informationForm.addEventListener('submit', function(event) {
    event.preventDefault();


    var nameValue = document.getElementById("h1").value;
    document.getElementById("heading").innerHTML = nameValue;
    console.log('Form submitted')
    
})


