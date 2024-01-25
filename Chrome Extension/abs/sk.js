

document.addEventListener('DOMContentLoaded',async=>{

    var definition = document.getElementById("definition"); 
    var selectedword = document.getElementById("selectedword");
    let page = chrome.extension.getBackgroundPage();        
    let word = page.word;        
    
    var char  = ' ';
    //checking if the user has selected multiple words
    for(let i = 0;i<word.length;i++){
        if(word.charAt(i) == char){   
            definition.innerHTML = "You have selected multiple words please select one word"
            break;
            
        }
    }

    let url = "https://api.dictionaryapi.dev/api/v2/entries/en_US/" + word;
    
    fetch(url)
    .then(response=>response.json())
    .then(data =>{
        definition.innerHTML = data[0]["meanings"][0]["definitions"][0]["definition"]})
        selectedword.innerHTML = word;



});


