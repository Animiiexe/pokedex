// alert('hello')

// dom selection
const inputE1 = document.querySelector('input')

//
document.addEventListener('keypress', function(event){
    if(event.key === '/'){
        event.preventDefault();
        inputE1.focus();
    }
   
}
)