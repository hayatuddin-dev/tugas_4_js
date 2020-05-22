
var a=165;
var b=150;
var c=180;
var tinggibadan=[a,b,c];

if (a>b && a>c){
   console.log("a adalah yang paling tinggi dengan tinggi badan:",tinggibadan[0])
}else if(b>a && b>c){
   console.log("b adalah yang paling tinggi dengan tinggi badan:",tinggibadan[1])
}else{
  console.log(" c adalah yang paling tinggi dengan tinggi badan:",tinggibadan[2])
}

console.log("Urutan tinggi badan dari yang tertinggi sampai yang terpendek =",tinggibadan.reverse())
