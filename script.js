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
    

    let bgColordiv = `<div style = "color:${formProps['bg-color']}">${formProps['bg-color']}</div>`;
    document.getElementById("chosenbgcolor").innerHTML = bgColordiv
    console.log(bgColordiv)

    let fontColordiv = `<div style = "color:${formProps['font-color']}">${formProps.heading} </div> 
    <div style = "color:${formProps['font-color']}">${formProps.subheading}  `
    document.getElementById("chosenfont").innerHTML = fontColordiv
    console.log(fontColordiv)
    
    document.getElementById("code").value = `<div class="miniworkspace box2">
    <div> <span  class = "chosenheading"id = "chosenheading"></span> </div>
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

