const ele = document.querySelectorAll(".key");
const inputElement = document.getElementById("display");

for(let i=0;i<ele.length;i++){
    if(ele[i].classList.contains("num")){
    ele[i].addEventListener("click",(event)=>{
        let a = event.target.innerHTML;
        inputElement.value += a;
        
    });
}
    else if(ele[i].classList.contains("oper")){
    ele[i].addEventListener("click",(event)=>{
        let b = event.target.textContent;
        inputElement.value +=b;
    });
    }

    else if(ele[i].classList.contains("ac")){
        ele[i].addEventListener("click",(event)=>{
            inputElement.value = '';
        });
        
    }

    else if(ele[i].classList.contains("ans")){
        ele[i].addEventListener("click",solve);
        
    }

   }

   function solve(){
        let equation = inputElement.value;
        let parts = equation.split(/(\+|\-|\*|\/)/);
        let first = parts[0];
        let math = parts[1];
        let second = parts[2];
        console.log(first);
        console.log(math);
        console.log(second);
        let output;

       switch(math){
        case '+':
            output = Number(first) + Number(second);
            inputElement.value = output;
            break;

        case '-':
            output = Number(first) - Number(second);
            inputElement.value = output;
            break;
        
        case '*':
            output = Number(first) * Number(second);
            inputElement.value = output;
            break;
        
        case '/':
            output = Number(first) / Number(second);
            inputElement.value = output;
            break;

        default: 
            equation = ' Enter valid expression:';
            break;
       }
   }
