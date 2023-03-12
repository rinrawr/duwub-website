// duwub

const letters = "abcdefghijklmnopqrstuvwxyz";


document.getElementById("duwub").onmouseover = event => {
    let iterations = 0;

    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("") 
            .map((letter, index) => {

                if(index < iterations) {
                    return event.target.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 26)]
            })
            .join(""); 

            if (iterations >= event.target.dataset.value.length) {
                clearInterval(interval);
            }

            iterations += 1 / 4;
    }, 50);
    
}

//description

const letters2 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";


document.getElementById("description").onmouseover = event => {
    let iterations = 0;

    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("") 
            .map((letter, index) => {

                if(index < iterations) {
                    return event.target.dataset.value[index];
                }

                return letters2[Math.floor(Math.random() * 52)]
            })
            .join(""); 

            if (iterations >= event.target.dataset.value.length) {
                clearInterval(interval);
            }

            iterations += 1;
    }, 40);
    
}