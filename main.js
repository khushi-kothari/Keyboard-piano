/*function check(key_id, text) {
    if(text == "A" || text == "a") {
        let parent = document.getElementById(key_id);
        let audio = document.createElement("AUDIO");
        audio.src="A.mp3"
        audio.play();
        parent.appendChild(audio);
    }
}*/

document.addEventListener("keydown", function(event) {
    if(event.key == "A" || event.key == "a") {
        let parent = document.getElementById("keyA");
        let audio = document.createElement("AUDIO");
        audio.src="A.mp3"
        audio.play();
        parent.appendChild(audio);
        parent.classList.add('white-active');
    }
    else if(event.key == "S" || event.key == "s") {
        let parent = document.getElementById("keyS");
        let audio = document.createElement("AUDIO");
        audio.src="S.mp3"
        audio.play();
        parent.appendChild(audio);
        parent.classList.add('white-active');
    }
    else if(event.key == "D" || event.key == "d") {
        let parent = document.getElementById("keyD");
        let audio = document.createElement("AUDIO");
        audio.src="D.mp3"
        audio.play();
        parent.appendChild(audio);
        parent.classList.add('white-active');
    }
    else if(event.key == "F" || event.key == "f") {
        let parent = document.getElementById("keyF");
        let audio = document.createElement("AUDIO");
        audio.src="F.mp3"
        audio.play();
        parent.appendChild(audio);
        parent.classList.add('white-active');
    }
    else if(event.key == "G" || event.key == "g") {
        let parent = document.getElementById("keyG");
        let audio = document.createElement("AUDIO");
        audio.src="G.mp3"
        audio.play();
        parent.appendChild(audio);
        parent.classList.add = "white-active";
    }
    else if(event.key == "H" || event.key == "h") {
        let parent = document.getElementById("keyH");
        let audio = document.createElement("AUDIO");
        audio.src="H.mp3"
        audio.play();
        parent.appendChild(audio);
        parent.classList.add('white-active');
    }
    else if(event.key == "J" || event.key == "j") {
        let parent = document.getElementById("keyJ");
        let audio = document.createElement("AUDIO");
        audio.src="J.mp3"
        audio.play();
        parent.appendChild(audio);
        parent.classList.add('white-active');
    }
    else if(event.key == "W" || event.key == "w") {
        let parent = document.getElementById("keyW");
        let audio = document.createElement("AUDIO");
        audio.src="W.mp3"
        audio.play();
        parent.appendChild(audio);
        parent.classList.add('black-active');
    }
    else if(event.key == "E" || event.key == "e") {
        let parent = document.getElementById("keyE");
        let audio = document.createElement("AUDIO");
        audio.src="E.mp3"
        audio.play();
        parent.appendChild(audio);
        parent.classList.add('black-active');
    }
    else if(event.key == "T" || event.key == "t") {
        let parent = document.getElementById("keyT");
        let audio = document.createElement("AUDIO");
        audio.src="T.mp3"
        audio.play();
        parent.appendChild(audio);
        parent.classList.add('black-active');
    }
    else if(event.key == "Y" || event.key == "y") {
        let parent = document.getElementById("keyY");
        let audio = document.createElement("AUDIO");
        audio.src="Y.mp3"
        audio.play();
        parent.appendChild(audio);
        parent.classList.add('black-active');
    }
    else if(event.key == "U" || event.key == "u") {
        let parent = document.getElementById("keyU");
        let audio = document.createElement("AUDIO");
        audio.src="U.mp3"
        audio.play();
        parent.appendChild(audio);
        parent.classList.add('black-active');
    }
    else console.log("Enter a valid Key");
});