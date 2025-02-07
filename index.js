const getColorBtn = document.getElementById("get-color")
const selectedColorMode = document.getElementById("color-selection")
const selectedColor = document.getElementById("selected-color")

let inputColor 
let colorMode
let returnedColors = []

getColorBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    
    colorMode = selectedColorMode.value
    inputColor = selectedColor.value.replace("#", "")
    console.log(colorMode, inputColor)
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${inputColor}&mode=${colorMode}&count=5`).then(res => res.json()).then(data => {
        data.colors.forEach((color, index)=>{
            document.getElementById(`color-${index+1}`).style.backgroundColor = color.hex.value
            document.getElementById(`color-${index+1}-text`).innerText = color.hex.value
        })
    })
})



