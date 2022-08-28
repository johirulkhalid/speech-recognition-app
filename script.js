const texts = document.querySelector(".texts");

window.SpeechRecognition = 
window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.innerText = text;
  if (e.results[0].isFinal) {
    if (text.includes("how are you")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "I am fine";
      texts.appendChild(p);
    }
    if (
      text.includes("what's your name") ||
      text.includes("what is your name")
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "My Name is Johirul Islam";
      texts.appendChild(p);
    };
    if (
      text.includes("what is my Facebook password") ||
      text.includes("what's my Facebook password")
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "**********@!201631";
      texts.appendChild(p);
    }
    if (text.includes("open my YouTube")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening youtube channel";
      texts.appendChild(p);
      console.log("opening youtube");
      window.open("https://www.youtube.com/");
    }
    if (text.includes("open my Facebook")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening facebook";
      texts.appendChild(p);
      console.log("opening facebook");
      window.open("https://www.facebook.com/");
    }
    if(
      text.includes('please play a song for me') ||
      text.includes('play a music')
    ){
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'playing music';
      texts.appendChild(p);
      console.log("playing music");
      window.open("https://youtu.be/S7OaxFmUWXE");
    }
    if (
      text.includes("show my bike") ||
      text.includes("bike")
    ){
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "showing your bike";
      texts.appendChild(p);
      console.log("showing your bike");
      window.open("https://www.google.com/search?q=fzs+v2+photo&rlz=1C1PDZP_enBD948BD949&sxsrf=ALiCzsbHSyS4gE4bxaLhpJJdhhLnHmQDaA:1656519835856&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiUr4SjidP4AhXy9DgGHcJCCh8Q_AUoAXoECAEQAw&biw=1366&bih=667&dpr=1#imgrc=gzel7bsaPyGj4M");
    }
    p = document.createElement("p");
  }
  recognition.addEventListener("end", () => {
    recognition.start();
  });
});

recognition.start();