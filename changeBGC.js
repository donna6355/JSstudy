document.addEventListener('DOMContentLoaded',function(){
    // // DOM - button, #wrap
    const $btn = document.querySelector('button');
    const $bg = document.getElementById('wrap');
    
    // btn click event + hexcode generator
    $btn.addEventListener('click',function(){
        let colorPicker = "#";
        for(let i = 0; i<6; i++){
            const arr = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
            colorPicker += arr[Math.floor(Math.random()*arr.length)];
        }
        $bg.style.backgroundColor = colorPicker;
    })
})