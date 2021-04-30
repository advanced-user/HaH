function userProgress(time){
    let start = 0;
    let progressEl = document.getElementById('user_progress');
    let intervalId = setInterval(function (){
        progressEl.value = start;
        if(start >= 100)
        {
            clearInterval(intervalId);
            let progress = document.getElementById('progress');
            progress.style.display = "none";

            let main_reviews = document.getElementById('main_reviews');
            main_reviews.style.display = "block";
        }
        start += 0.5;
    }, time);
}

userProgress(1000/60);