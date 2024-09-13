//initialize blank 2d array
var b=[];

for(let i=0;i<3;i++){
  b[i]=[]
  
}
console.log(b)

  ///Reverse imagae and then invert image
  let a = [[0,0,0],[1,1,0],[0,1,1]]
let b=[];
for(let i=0;i<3;i++){
  b[i]=[]
  
}


for( let i=0;i<a.length;i++){
  
  for(let j=a[i].length-1;j>=0;j--){
    b[i].push(a[i][j])
  }
}
console.log(b)

for( let i=0;i<b.length;i++){
  
  for(let j=0;j<b[i].length;j++){
    if(b[i][j]==1){
      b[i][j]=0
    }else{
      b[i][j]=1;
    }
  }}
console.log(b)
