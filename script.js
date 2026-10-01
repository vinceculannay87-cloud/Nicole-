const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const proposal = document.getElementById("proposal");
const ring = document.getElementById("ring");
const textEl = document.getElementById("text");
const music = document.getElementById("music");

/* 💌 OPEN ENVELOPE */
function openEnvelope() {
  
  envelope.classList.add("open");
  
  setTimeout(() => {
    letter.classList.add("show");
    typeLetter();
  }, 800);
  
}

/* 📜 TYPE LETTER */
const message = `
Happy 7th Monthsary babyy ko!💐

Always take care of yourself, because you're more important than you could imagine. ILoveYou lablab
`;

let i = 0;

function typeLetter() {
  let t = setInterval(() => {
    textEl.innerHTML += message[i];
    i++;
    
    if (i >= message.length) {
      clearInterval(t);
      setTimeout(showProposal, 800);
    }
  }, 40);
}

/* 💍 SHOW PROPOSAL */
function showProposal() {
  letter.classList.remove("show");
  proposal.classList.add("show");
  
  music.play();
  
  /* ring animation */
  setTimeout(() => {
    ring.classList.add("show");
  }, 600);
}

/* 💍 TAKE RING */
function takeRing() {
  
  ring.style.transform = "scale(1.3)";
  ring.style.filter = "drop-shadow(0 0 40px gold)";
  
  setTimeout(() => {
    alert("Forever yours ❤️ kasal na tayo!😝 ble");
  }, 1000);
  
}