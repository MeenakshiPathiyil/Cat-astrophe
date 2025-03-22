//detect common typo's and inject passive-aggressive comments

const commonTypos = {
    "teh":"the",
    "adn":"and",
    "recieve":"receive",
    "foe":"for",
    "definately":"definitely",
    "hoe":"how",
    "wich":"which"
}

function shuffleWords(sentence) {
    let words = sentence.split(" ");
    if (words.length > 1) {
        for (let i = words.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [words[i], words[j]] = [words[j], words[i]]; 
        }
    }
    return words.join(" ");
}

function checkTypo(event){
    let typedText = event.target.value; 
    if (!typedText) return;

    Object.keys(commonTypos).forEach(typo=>{
        if(typedText.includes(typo)){
            showCatPopup(`bitch what you high on?You just typed  "${typo}" instead of "${commonTypos[typo]}" 😾`);

            event.target.value = shuffleWords(typedText);
        }
    });
}

//dis the passive aggressive cat popup
function showCatPopup(message){
    let catPopup = document.createElement("div");
    catPopup.innerText = message;
    catPopup.style.position = "fixed";
    catPopup.style.bottom = "20px";
    catPopup.style.right = "20px";
    catPopup.style.padding = "10px";
    catPopup.style.background = "rgba(0,0,0,0.8)";
    catPopup.style.color = "#fff";
    catPopup.style.borderRadius = "8px";
    catPopup.style.zIndex = "1000";
    
    document.body.appendChild(catPopup);
    
    setTimeout(() => {
        catPopup.remove();
    }, 3000);
}

document.addEventListener("input", checkTypo, true);

