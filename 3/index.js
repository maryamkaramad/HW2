alert("تعداد ارقام یک عدد");
let n= prompt("عدد را وارد کنید");
let r = 0;
while ( n > 1 ) {
   
    n=n/10;
    r=r+1;
   
}
alert(r);