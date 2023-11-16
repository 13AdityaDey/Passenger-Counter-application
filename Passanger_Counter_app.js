let countEl=document.getElementById("count");
console.log(countEl);
let saveEl=document.getElementById("save-el");
console.log(saveEl);

let count=-1;
function increment(){
    count+=1;
    countEl.textContent= count;        
}
increment(); 
function save(){
    let x=count+"-";
    saveEl.textContent+=x;
    console.log(count);
    countEl.textContent=0;
    count=0;
}
save()


// let name="Aditya Dey";
// let greetings="Hi, my name is ";
// let myGreeting=greetings + name;
// console.log(myGreeting);
