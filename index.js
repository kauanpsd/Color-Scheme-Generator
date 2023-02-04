document.getElementById("get-color-scheme").addEventListener('click', function(){
    const getColor = document.getElementById("color-picker").value.replace('#','')
    const paletteChoice = document.getElementById("palette-choice").value.toLowerCase()
    sendColor(getColor , paletteChoice)

    console.log(paletteChoice)
})


function sendColor(color , palette){

    let colorApi = `https://www.thecolorapi.com/scheme?hex=${color}&mode=${palette}&count=5`

    fetch(`${colorApi}`,{
    method:"GET"
})
    .then(res => res.json())
    .then(data => {
        for(let i = 0; i<5; i++ ){
            document.getElementById(`color-${i}`).style.backgroundColor=data.colors[i].hex.value
            document.getElementById(`color-code${i}`).innerHTML =`<p id="color-code${i}">${data.colors[i].hex.value}</p>`
        }   
    })
    

}
