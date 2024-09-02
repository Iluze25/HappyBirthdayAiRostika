const judulUcapan = document.querySelector(".birthdayName");
const judulText = ["Ai Rostika", "6 July 2004", "Extrovert", "Addews"];
let judulTextIndex = 0;
let judulTextIndexChar = 0;

function judulFirst() {
  judulUcapan.innerHTML = `${judulText[judulTextIndex].slice(
    0,
    judulTextIndexChar
  )}`;

  if (judulTextIndexChar === judulText[judulTextIndex].length) {
    setTimeout(judulChar, 1000); // Jeda sebelum mulai menghapus karakter
  } else {
    judulTextIndexChar++;
    setTimeout(judulFirst, 250); // Jeda antar karakter saat mengetik
  }
}

function judulChar() {
  judulUcapan.innerHTML = `${judulText[judulTextIndex].slice(
    0,
    judulTextIndexChar
  )}`;

  if (judulTextIndexChar === 0) {
    judulTextIndex++;
    if (judulTextIndex === judulText.length) {
      judulTextIndex = 0;
    }
    setTimeout(judulFirst, 500); // Jeda sebelum mulai mengetik teks berikutnya
  } else {
    judulTextIndexChar--;
    setTimeout(judulChar, 100); // Jeda antar karakter saat menghapus
  }
}

judulFirst();
