let btn= document.querySelector("#btn");
let change= document.querySelector("body");
let currnmode= "light";

btn.addEventListener("mouseover",() =>{
  if(currnmode==="light"){
    currnmode="dark";
    change.classList.add("dark");
    change.classList.remove("light");
  }
  else{
    currnmode="light";
    change.classList.add("light");
    change.classList.remove("dark");
   
  
  }
  console.log(currnmode);
  
});