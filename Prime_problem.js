let n=11;
let factor_count=0;
for(j=1; j<=n; j++)
    if(n%j==0){
        factor_count++;
      
    }
if(factor_count==2){
    console.log(n,"is prime");
}else{
    console.log(n,"is not prime");
}
