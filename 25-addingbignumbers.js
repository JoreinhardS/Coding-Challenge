function add(a, b) {
    let result = ''; // Inisialisasi string hasil penjumlahan
    let carry = 0; // Inisialisasi carry
    // Perulangan dari belakang ke depan untuk menambahkan angka per digit
    for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0 || carry > 0; i--, j--) {
      const numA = i >= 0 ? parseInt(a[i]) : 0; // Ambil digit dari a, atau 0 jika sudah habis
      const numB = j >= 0 ? parseInt(b[j]) : 0; // Ambil digit dari b, atau 0 jika sudah habis
      const sum = numA + numB + carry; // Jumlahkan digit dari a, b, dan carry sebelumnya
      result = (sum % 10) + result; // Ambil digit hasil penjumlahan dan letakkan di depan string hasil
      carry = Math.floor(sum / 10); // Hitung carry untuk digit selanjutnya
    }
    return result; // Kembalikan hasil penjumlahan
}

  // Contoh penggunaan
const result = add('91002328220491911630239667930', '33');
console.log(result); // Output: '91002328220491911630239667963'

console.log(add("1", "1"))