window.addEventListener('load',bindEvents);
function bindEvents(){
   var buttonArr=document.querySelectorAll('button');
    console.log("i am button array",buttonArr);  
    buttonArr.forEach(button=>{
        button.addEventListener('click',()=>{
            console.log("i am this",this.innerText);  
        });
    })
    // function takeValue(){
    //     console.log("i am this",this.innerText);
    // }
}