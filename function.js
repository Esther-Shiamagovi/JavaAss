function reversing(names){
    const people= names.sort()
    return people;



}
console.log(reversing(["Esther","John","Diana","Ann"]));
//
function value(nums){
    const w= nums;
    const y= nums%2;
    if(y==0)
    return true;
    else{return false};
}
console.log(value([10]));
function workers(people){
    const work = people;
    const x= [...new Set(work)]
    return(x.sort());
    
}
console.log(workers(["25678899","Mwangi","5800"]));

function values(nums){
    const multiply= nums;
    multiply.forEach(element => {
        console.log(element*2);
    });
}
console.log(values([4,6,8]));

//
function nums(values){
    const k= values;
    
}

