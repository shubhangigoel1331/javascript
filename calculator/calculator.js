window.addEventListener('load',bindEvents);
function bindEvents(){
    var buttonArr=document.querySelectorAll('button');
    console.log(buttonArr);
    document.querySelector('#clear').addEventListener('click',()=>{
    document.querySelector('#result').value='';
    document.querySelector('#result').focus();
    });

    document.querySelector('#equal').addEventListener('click',compute);
    buttonArr.forEach(button=>{
        if(button.id!='clear'&& button.id!='equal'){
            button.addEventListener('click',takeValue)
        }
    });
}
function takeValue(){
document.querySelector('#result').value+= this.innerText;
}
function compute(){
    document.querySelector('#result').value=eval(document.querySelector('#result').value);
}