let adelante = document.querySelector('.siguiente')
let prev = document.querySelector('.anterior')




prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length -1])
})



 adelante.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0,1]);
})
     
    
let siguiente = document.querySelector('.siguiente2')
let atras = document.querySelector('.anterior2')


atras.addEventListener('click', function(){
    let items = document.querySelectorAll('.item2')
    document.querySelector('.slide2').prepend(items[items.length - 1])
})  


siguiente.addEventListener('click', function(){
    let items = document.querySelectorAll('.item2')
    document.querySelector('.slide2').appendChild(items[0,1]);
})
