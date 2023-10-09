// Contoh penggunaan if, else, dan nested if
let hewan = "Kucing";
let mamalia = true;
let berbulu = true;

// Penggunaan if-else untuk mengidentifikasi jenis hewan
if (mamalia) {
  if (berbulu) {
    console.log(hewan + " adalah mamalia berbulu.");
  } else {
    console.log(hewan + " adalah mamalia tetapi tidak berbulu.");
  }
} else {
  console.log(hewan + " bukan mamalia.");
}

// Contoh pengguanaan Switch Case
let Hewan = "burung";

switch (Hewan) {
  case "kucing":
    console.log("Ini adalah kucing.");
    break;
  case "anjing":
    console.log("Ini adalah anjing.");
    break;
  case "burung":
    console.log("Ini adalah burung.");
    break;
  default:
    console.log("Jenis hewan tidak dikenal.");
    break;
}


// for statement (loop)

const mapel = ["html", "javascript", "css", "laravel"];
let i = 2; //mengambil mapel dari nilai 2 yaitu css
let len = mapel.length;
let matkul = "";
for (; i < len; ) {
  matkul += mapel[i + ""] + "<br>";
  i++; // i akan start dari 2 dan akhir dari mapel
}
document.getElementById("demo4").innerHTML = matkul; //result dari statement


// Contih Statemen While & Do While

// Contoh While
let HewaN = "Singa";
let count = 0;

while (count < 3) {
  console.log(HewaN);
  count++;
}

// Contoh Do While
let bunga = "Mawar";
let many = 2;

do {
  console.log(bunga);
  many++;
} while (many < 3);


// Contoh Function

// Variabel pemain
let playerX = 1; // Posisi awal
let playerSpeed = 5; // Kecepatan pergerakan

// Fungsi untuk menggerakkan pemain ke kiri
function moveLeft() {
  playerX -= playerSpeed;
  console.log("Pemain bergerak ke kiri. Posisi sekarang: " + playerX);
}

// Fungsi untuk menggerakkan pemain ke kanan
function moveRight() {
  playerX += playerSpeed;
  console.log("Pemain bergerak ke kanan. Posisi sekarang: " + playerX);
}

// Menggunakan fungsi untuk menggerakkan pemain dalam game
moveRight(); // Menggerakkan pemain ke kanan
moveLeft(); // Menggerakkan pemain ke kiri
moveRight(); // Menggerakkan pemain ke kanan lagi
