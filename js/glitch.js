// duwub

const letters = "uwurawrdb";


document.getElementById("duwub").onmousedown = event => {
    let iterations = 0;

    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("") 
            .map((letter, index) => {

                if(index < iterations) {
                    return event.target.dataset.value[index];
                }

                const lettersToUse = letter === " " ? [" "] : (letter === letter.toUpperCase() ? uppercaseLetters : letters);
                return lettersToUse[Math.floor(Math.random() * lettersToUse.length)];
            })
            .join(""); 

            if (iterations >= event.target.dataset.value.length) {
                clearInterval(interval);
            }

            iterations += 1 / 6;
    }, 50);
    
}

//description

const uppercaseLetters = "UWU";

document.getElementById("description").onmousedown = event => {
    let iterations = 0;

    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
            .map((letter, index) => {

                if(index < iterations) {
                    return event.target.dataset.value[index];
                }

                const lettersToUse = letter === " " ? [" "] : (letter === letter.toUpperCase() ? uppercaseLetters : letters);
                return lettersToUse[Math.floor(Math.random() * lettersToUse.length)];
              })
              .join("");

            if (iterations >= event.target.dataset.value.length) {
                clearInterval(interval);
            }

            iterations += 1;
    }, 40);

}
