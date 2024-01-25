
// receive msg from content script
chrome.runtime.onMessage.addListener(selected);


// creating a global variable that will hold the value of received selected word
window.word ="";    
   

function selected(request,response,sendResponse){
  console.log(request.text);
  window.word = request.text;               
}


 




































 
// chrome.browserAction.onClicked.addListener(buttonclicked);
// function buttonclicked(tab){
//     let msg = {
//         text:"vishal"
//     }
//    chrome.tabs.sendMessage(tab.id,msg);
// }
