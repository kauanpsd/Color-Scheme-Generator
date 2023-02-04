document.getElementById("get-color-scheme").addEventListener('click', function(){

    console.log(document.getElementById("color-picker").value)
})



fetch("https://www.thecolorapi.com/scheme", {
    method:"GET"
})
    .then(res => res.json())
    .then(data => console.log(data))