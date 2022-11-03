let n=11;
let count=0;
for(j=1; j<=n; j++)
    if(n%j==0){
        count++;
      
    }
if(count==2){
    console.log(n,"is prime");
}else{
    console.log(n,"is not prime");
}
