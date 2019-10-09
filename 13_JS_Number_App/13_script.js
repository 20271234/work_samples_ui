let Number=document.querySelector('#number');
let textNumber=document.querySelector('#text-number');
Number.addEventListener('keyup',function(){
let thestr=wordString(Number.value);
textNumber.textContent=thestr;
});
let array=['zero','one','two','three','four','five','six','seven','eight','nine','ten']
let wordString=(str)=>{
    let TempStr='';
    for(let i=0;i<str.length;i++){
        TempStr+=array[parseInt(str.charAt(i))]+' ';
    }
    return TempStr;
};