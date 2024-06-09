function subtract(a, b) {
    // Pastikan input adalah angka
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Input harus bertipe number');
    }

    // Lakukan operasi pengurangan
    return a - b;
}

// Contoh penggunaan
let a = 5;
let b = 2;
let hasil = subtract(a, b);
console.log('Hasil pengurangan:', hasil); // Output: 3
