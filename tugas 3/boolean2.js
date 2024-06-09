// function hasilPerbandingan(a, b) {
//     // Menggunakan operator perbandingan (==) untuk memeriksa kesamaan nilai
//     const hasilSama = a == b;

//     // Menggunakan operator perbandingan (===) untuk memeriksa kesamaan nilai dan tipe data
//     const hasilSamaTipe = a === b;

//     // Mengembalikan hasil operasi perbandingan
//     return hasilSamaTipe;
// }

// // Contoh penggunaan
// const inputA = 5;
// const inputB = "5";
// const output = hasilPerbandingan(inputA, inputB);

// console.log(`Hasil perbandingan: ${output}`); // Output: true

function hasilPerbandingan(a, b) {
    return a == b;
}


let a = 5;
let b = "5";
let result = hasilPerbandingan(a, b);
console.log(result); // Output: true
