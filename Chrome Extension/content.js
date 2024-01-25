
window.addEventListener('mouseup',wordselected);


function wordselected(){
    let selectedword = window.getSelection().toString().trim();
        //checking if the selected word is greater the 1
    if(selectedword.length > 1){
        let msg = {
            text:selectedword
        } 
        chrome.runtime.sendMessage(msg);
    }
}


