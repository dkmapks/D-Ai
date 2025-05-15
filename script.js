const responses = {
  "elo": ["Siemano!", "siemano.m4a"],
  "siema": ["No siema, wariacie", "siema.m4a"],
  "co tam": ["Lecim z tematem!", "cotam.mp3"],
  "co robisz": ["A tak się obijam", "corobisz.mp3"],
  "jesteś tam": ["No jestem, gdzie mam być?", "jestestam.mp3"],
  "jak tam": ["U mnie git, a u ciebie?", "jaktam.mp3"],
  "hej": ["Hejka naklejka... tfu, żartuję", "hej.mp3"],
  "yo": ["Yo, co gramy?", "yo.mp3"],
  "xd": ["XD no beka", "xd.mp3"],
  "dawaj coś": ["Dawaj Ty pierwszy, nie wstydź się", "dawajcos.mp3"],
  "chuj": ["To se bądź chuj, nie mój problem", "chuj.mp3"],
  "kurwa": ["Spokojnie z tymi kurwami, ziomek", "kurwa.mp3"],
  "jebac": ["Weź, nie spinaj się", "jebac.mp3"],
  "pierdol": ["Nie pierdol, tylko rób!", "pierdol.mp3"],
  "debilu": ["Sam jesteś debil, hehe", "debilu.mp3"],
  "git": ["No to gitówa", "git.mp3"],
  "masno": ["Masno jak zawsze", "masno.mp3"],
  "co jest": ["Co ma być, klasyk!", "cojest.mp3"],
  "lol": ["LOL, no nie wierzę", "lol.mp3"],
  "nara": ["Narka, do następnego", "nara.mp3"]
  // Dodaj więcej tu...
};

function respond() {
  const input = document.getElementById("userInput").value.toLowerCase().trim();
  const responseBox = document.getElementById("responseBox");

  if (responses[input]) {
    const [text, audioFile] = responses[input];
    responseBox.innerText = text;

    const audio = new Audio(`audio/${audioFile}`);
    audio.play().catch(() => {
      console.log("Autoplay zablokowany – kliknij ekran.");
    });
  } else {
    responseBox.innerText = "Nie kumam ziomek...";
  }

  document.getElementById("userInput").value = "";
}
