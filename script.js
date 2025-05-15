const responses = {
  "elo": ["siemano!", "elo.mp3"],
  "siema": ["Yo, co tam?", "siema.mp3"],
  "co tam": ["Lecimy z tematem!", "co_tam.mp3"],
  "jak leci": ["Na pełnej!", "jak_leci.mp3"],
  "hej": ["No hejka!", "hej.mp3"],
  "yo": ["Yo ziomek!", "yo.mp3"],
  "siemanko": ["Witam witam", "siemanko.mp3"],
  "witaj": ["Cześć, co robimy?", "witaj.mp3"],
  "co robisz": ["Czekam aż coś napiszesz", "co_robisz.mp3"],
  "co słychać": ["Wszystko spoko", "co_slychac.mp3"],
  "masz insta": ["Pewnie! @mlody.asystent", "insta.mp3"],
  "masz tik toka": ["Tak, wrzucam beki XD", "tiktok.mp3"],
  "lubisz pizzę": ["No ba, kto nie?", "pizza.mp3"],
  "lubisz koty": ["Takie słodziaki", "koty.mp3"],
  "lubisz psy": ["Psy to ziomki", "psy.mp3"],
  "co gramy": ["Może CS albo GTA?", "co_gramy.mp3"],
  "jak masz na imię": ["Jestem Twój ziomek Asystent", "imie.mp3"],
  "ile masz lat": ["Młody jestem, jak ty", "wiek.mp3"],
  "z kim gadasz": ["Z tobą, mordo", "z_kim.mp3"],
  "lubisz szkołę": ["Meh, bywa różnie", "szkola.mp3"],
  "która godzina": ["Pora na chill", "godzina.mp3"],
  "masz dziewczynę": ["Jestem wolny jak ptak", "dziewczyna.mp3"],
  "masz chłopaka": ["Niee, ale szanuję wybór", "chlopak.mp3"],
  "jesteś robotem": ["chujotem", "robot.mp3"],
  "oglądasz anime": ["nie!", "anime.mp3"],
  "co polecasz": ["Netflix i relaks", "polecam.mp3"],
  "co dziś robisz": ["Relaksik, jak zawsze", "co_dzis.mp3"],
  "zrobisz żart": ["Jaki kraj ma najwięcej energii? Prądziemie!", "zart.mp3"],
  "powiedz coś śmiesznego": ["gdyby babcia miala wąsy to by była dziadkiem!", "smieszne.mp3"],
  "nudzisz się": ["Czekam na twoje pytania!", "nudze.mp3"],
  "jesteś ai": ["Ai srai", "ai.mp3"],
  "chuj": ["ty jesteś chuj", "lol.mp3"],
  "lubisz chipsy": ["ostre!", "chipsy.mp3"],
  "co to znaczy xd": ["chuj go wie!", "xd.mp3"],
  "twoja ulubiona gra": ["życie!", "gra.mp3"],
  "oglądasz yt": ["Codziennie!", "yt.mp3"],
  "masz snapchata": ["Tak,nazwa sexamap!", "snap.mp3"],
  "lubisz muzykę": ["Bez niej nie żyję", "muzyka.mp3"],
  "ulubiony raper": ["Avi, wiadomo", "raper.mp3"],
  "jaki masz humor": ["Czarny z nutką sarkazmu", "humor.mp3"],
  "masz memy": ["Mam całą kolekcję XD", "memy.mp3"],
  "lubisz sport": ["Jak nie leżę, to biegam", "sport.mp3"],
  "kto jest prezydentem": ["Tylko Mentzen!", "prezydent.mp3"],
  "w co grasz": ["raczej na czym,na nerwach", "gram.mp3"],
  "grasz w roblox": ["Czasem ", "roblox.mp3"],
  "lubisz wakacje": ["uwielbiam", "wakacje.mp3"],
  "śpisz w nocy": ["śpie", "sen.mp3"],
  "umiesz tańczyć": ["Prawie jak TikTok gwiazda", "taniec.mp3"],
  "masz wrogów": ["Tylko złe WiFi", "wrogowie.mp3"],
  "lubisz się uczyć": ["A kto lubi? 😅", "nauka.mp3"]
};

function respond() {
  const input = document.getElementById("userInput").value.trim().toLowerCase();
  const responseBox = document.getElementById("responseBox");

  if (responses[input]) {
    const [text, audioFile] = responses[input];
    responseBox.innerText = text;
    const audio = new Audio(`audio/${audioFile}`);
    audio.play();
  } else {
    responseBox.innerText = "Nie rozumiem, zapytaj inaczej 😅";
  }
}
