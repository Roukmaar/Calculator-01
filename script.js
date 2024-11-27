const displayInput = document.querySelector('.display')
function buttonClickEvent(prop){
    //the prop=property what should be added to the display
const existingDisplayValues=displayInput.value
const newDisplayValue=existingDisplayValues+''+prop;
displayInput.value=newDisplayValue;
}
function showAnswer(){
    try{  
const existingDisplayValues=displayInput.value
const answer=eval(existingDisplayValues)
displayInput.value=answer
    }
    catch(err){
        displayInput.value="Calculator Error"
    }
}
function AC(){
    displayInput.value=""
}