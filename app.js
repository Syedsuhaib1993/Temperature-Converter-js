const celvalue = document.getElementById("Celsius")
const fervalue = document.getElementById("Fehrenhiet")
const kelvalue = document.getElementById("Kelvin")


function getvalue(event){
    const value = +event.target.value
    // console.log(value);
    switch(event.target.name){
        case "Celsius":
            fervalue.value= (value * 1.8 + 32).toFixed(2)
            kelvalue.value= (value + 273).toFixed(2)
        break;

        case "Fehrenhiet":
            celvalue.value= ((value-32)/1.8).toFixed(2)
            kelvalue.value= ((value-32)/1.8 + 273).toFixed(2)
        break;
        
        case "Kelvin":
            celvalue.value= (value - 273).toFixed(2)
            fervalue.value= ((value - 273)*1.8/32).toFixed(2)

        break;

        default:

        break;
    }
    
}
