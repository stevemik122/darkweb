var j = true;
function move(){
    if(localStorage.getItem('deposit-amount')) {
        if(!localStorage.getItem('btcz-time')){
            var elemj = document.getElementById('pablos');
            localStorage.setItem('depo-left',900);
            var width = localStorage.getItem('depo-left');
            var id = setInterval(frame, 1000);
            function frame(){
                if(width <= 0){
                    clearInterval(id);
                    i = false;
                    alert("Time's up! Enter another deposit amount and pay for it on time");
                    localStorage.removeItem('deposit-amount');
                    window.location.reload();
                } 
                else if( width <= 300) {
                    elemj.classList.add("bg-danger");
                    localStorage.setItem('depo-left',width--);
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){
                        seconds = '0'+seconds
                    }
                    elemj.style.width = (width/9) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                } 
                else if( width <= 600) {
                    elemj.classList.add("bg-warning");
                    localStorage.setItem('depo-left',width--);
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){
                        seconds = '0'+seconds
                    }
                    elemj.style.width = (width/9) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                } 
                else {
                    localStorage.setItem('depo-left',width--);
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){
                        seconds = '0'+seconds
                    }
                    elemj.style.width = (width/9) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                }
            }
        } else{
            var elemj = document.getElementById('pablos');
            var width = localStorage.getItem('depo-left');
            var id = setInterval(frame, 1000);
            function frame(){
                if(width <= 0){
                    clearInterval(id);
                    i = false;
                    alert("Time's up! Enter another deposit amount and pay for it on time");
                    localStorage.removeItem('deposit-amount');
                    window.location.reload();
                } 
                else if( width <= 300) {
                    elemj.classList.add("bg-danger");
                    localStorage.setItem('depo-left',width--);
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){
                        seconds = '0'+seconds
                    }
                    elemj.style.width = (width/9) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                } 
                else if( width <= 600) {
                    elemj.classList.add("bg-warning");
                    localStorage.setItem('depo-left',width--);
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){
                        seconds = '0'+seconds
                    }
                    elemj.style.width = (width/9) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                } 
                else {
                    localStorage.setItem('depo-left',width--);
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){
                        seconds = '0'+seconds
                    }
                    elemj.style.width = (width/9) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                }
            }
        }
        localStorage.setItem('btcz-time',true)     
    } else {
        console.log('There was nothing on your cart')
    }      
}