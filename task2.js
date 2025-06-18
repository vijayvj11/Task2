const fields=document.querySelectorAll(".form-input input");
const counter=document.querySelector(".Counter");
const submit=document.querySelector(".submit");
const form=document.querySelector(".form");


function updateCounter(){
    let count=0;
    fields.forEach( feild => { 
        if( feild.value.trim() !== "")
            count++;
});
counter.textContent="Counter: "+count+"/5" ;
}

fields.forEach( feild=>
{
    feild.addEventListener('input',updateCounter);
});

submit.addEventListener('click',()=>{
    form.reset();
    updateCounter();

})