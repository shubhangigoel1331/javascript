window.addEventListener('load',bindEvents)
function bindEvents(){
    var buttonArray=document.querySelectorAll('button');
console.log("i am button array",buttonArray);
buttonArray.forEach(button=>{
    console.log("i am button",button);
    if(button.id !='equal' && button.id !='clear'){
      button.addEventListener('click',takeValue);
        /*button.addEventListener('click',()=>{
            console.log('i am innertext',this.innerText);
            document.querySelector('#result').value += this.innerText;
        });*/
    }
});
//document.querySelector('#equal').addEventListener('click',compute);
document.querySelector('#equal').addEventListener('click',()=>{
    document.querySelector('#result').value=eval(document.querySelector('#result').value);
})
document.querySelector('#clear').addEventListener('click',()=>{
    document.querySelector('#result').value=' ';
    document.querySelector('#result').focus();
})
function takeValue(){
    console.log("i am in takeValue",this.innerText);
    document.querySelector('#result').value += this.innerText;
}
/*function compute(){
console.log("i am compute");
document.querySelector('#result').value=eval(document.querySelector('#result').value);
}*/
}