const newYearChaos=(q)=>{
    let chaotic=false;
    var bribes=0;
    for (let i = 0; i < q.length; i++) {
     if(q[i]-(i+1)>2){
        chaotic=true;
    }
       
    for (let j = 0; j < i; j++) {
        if(q[j]>q[i]){
            bribes++;
      }
    
}
}
if(chaotic===true){
    console.log('too chaotic')

}
else{
    console.log(bribes)
}

}

newYearChaos([2,1,5,3,4])