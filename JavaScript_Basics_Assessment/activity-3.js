

let stuNames = ['jim','bob','bill'];

for(let i=0;i<3;i++){
    anotherName = prompt("add another student: ");
    stuNames.push(anotherName);
}

for(let i=0;i<stuNames.length;i++){
    console.log(stuNames[i]);

}

