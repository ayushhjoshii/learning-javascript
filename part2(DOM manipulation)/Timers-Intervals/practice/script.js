// 1. Create a download Progress bar.
/**
 * - So we are creating a downloading progress bar, which
 *   want to be completed in 3 seconds.
 */
let count = 0;
let progress = document.querySelector(".progress-bar");

setInterval(function(){
    if(count <= 99){
        count++;
        progress.style.width = `${count}%`;
        document.querySelector("#percentText").textContent = `${count}%`;
    }else{
        document.querySelector("h2").textContent = "Downloaded";
    }
}, 30);