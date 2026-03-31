alert("belajar javascript");

function kirim(){
let nama = document.getElementById("nama").value;
console.log("Nama: "+ nama);
let saran = document.getElementById("saran").value;

//document.getElementById('list-pesan').innerHTML = nama;
//document.getElementById('list-pesan').innerHTML += "<li>" + nama + "<li>";
document.getElementById('list-pesan').innerHTML += `<li>${nama}: ${saran}</li>`;
}

