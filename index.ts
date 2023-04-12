const num1Element=document.getElementById('num1') as HTMLInputElement
const num2Element=document.getElementById("num2") as HTMLInputElement
const buttonElement=document.querySelector('button')!;

const numResult:Array<number>=[];  //generic
const stringResult:string[]=[];

// function add(num1:any,num2:any){
// return num1+num2
// }

type numOrString=number|string  //example of type alias

interface ResObj{                 //example of interface
    val:number;
    timestamp:Date 
}

function add(num1:numOrString,num2:numOrString){
    if(typeof num1==="number"&&typeof num2==="number"){
        return num1+num2;
    }else if(typeof num1==="string"&&typeof num2==="string"){
        return num1+" "+num2;
    }
}

function printResult(resultObj:ResObj){
    console.log(resultObj.val)
}


buttonElement.addEventListener('click',()=>{
    const num1=num1Element.value;
    const num2=num2Element.value;
    const result=add(+num1,+num2)
    const toStringres=add(num1,num2);
    numResult.push(result as number);
    stringResult.push(toStringres as string);
    document.getElementById('print')!.innerHTML =`<p >number add: ${result.toString()} , and string add: ${toStringres}</p>` 
    console.log(result)
    printResult({val:result as number,timestamp:new Date})
    console.log(numResult,stringResult)
})
 
const myPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('it worked');
    },1000)
});

myPromise.then((result)=>{
    console.log(result);
})
