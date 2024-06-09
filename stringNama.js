function gabungNama(a, b) {
    const namaLengkap = a + ' ' + b;
    return namaLengkap;
}

const inputA = "Hamdan";
const inputB = "Al Fattah";
const output = gabungNama(inputA, inputB);

console.log(`Nama lengkap: ${output}`); // Output: "Hamdan Al Fattah"
