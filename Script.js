const panels = document.querySelectorAll('.panel') // select class,id,element with all select all panel name classes
panels.forEach((panel)=>{ //array method 
    panel.addEventListener('click' , () =>{
        RemoveActive();
        panel.classList.add('active')   // adds class 
    })
})

function RemoveActive(){
    panels.forEach(panel =>{
        panel.classList.remove('active') // remove class 
    })
}