alert("مقسوم علیه های مشترک دو عدد");
let x = prompt("عدد اول");
let y=prompt("عدد دوم");
let m= x<y ? x: y;
    for(let i =0; i<=m;i++){
        if(x%i==0 && y%i==0)
        alert(i);
    }

