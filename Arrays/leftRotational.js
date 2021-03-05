function leftRotational(arr,noOfRotation){
    
    for(var i=0;i<noOfRotation;i++){
        const rmv=arr.shift();
        arr.push(rmv);
    }

    return arr
}

console.log(leftRotational([1,2,3,4,5,6],3))