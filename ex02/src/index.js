

let arr=[];
poz =0;
function myCounter(n) 
{
    if(poz == 0){
        arr=[];
    }

    if(n < 0)
    {
        return [];
    } 
    else if(n == 0)
    {
        poz = 0;
        return arr;
        
    }
    else
    {
        arr[poz]=n;
        poz++;
        return myCounter(n-1);
    }    
}

console.log(myCounter(-1));
console.log(myCounter(10));
console.log(myCounter(5));
