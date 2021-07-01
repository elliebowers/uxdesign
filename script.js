// Get a reference to form w/ id="info-form"
let informationForm = document.querySelector('#info-form');

//Do something when form is submitted
informationForm.addEventListener('submit', function(event) {
    event.preventDefault();


    //var nameValue = document.getElementById("h1").value;
  console.log(event.target)
    const formData = new FormData(event.target);
    console.log(formData)
    const formProps = Object.fromEntries(formData);
    console.log(formProps);
 
    document.getElementById("chosenheading").innerHTML = formProps.heading;
    document.getElementById("chosensubheading").innerHTML = formProps.subheading;
    document.getElementById("box2").style.backgroundColor = "bg-color";
    document.getElementById("box2").style.backgroundColor = "font-color";
    

    console.log('Form submitted');
    
})

