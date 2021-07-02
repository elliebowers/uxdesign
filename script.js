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
    
    let bgcolor=document.getElementById('bg-color').value;
    document.querySelector('.box2').style.backgroundColor = bgcolor;

    let fontcolor=document.getElementById('font-color').value;
    document.querySelector('.box2').style.color = fontcolor;

    document.getElementById('chosenheading').innerHTML = formProps.heading
    document.getElementById('chosenparagraph1').innerHTML = formProps.para1
    document.getElementById('chosensubheading').innerHTML = formProps.subheading
  
    
    document.getElementById("code").value = `<div class="miniworkspace box2">
    <div> <span class = "chosenheading"id = "chosenheading"></span> </div>
    <div><span class = "chosensubheading" id = "chosensubheading"></span></div>
    Blank Canvas 
    <style>
        .root {
            --bgColor:"${formProps["bg-color"]}; 
            --fontColor:${formProps["font-color"]};
        }
        .miniworkspace {
            background-color: var(--bgColor);
            color: var(--fontColor);
        }
    </style>
    
    

    </div>`;

    console.log('Form submitted');
   
    
})
