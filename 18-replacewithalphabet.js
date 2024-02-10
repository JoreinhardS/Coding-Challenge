function alphabetPosition(text) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const newobj = {};
    for (let i = 0; i < alphabet.length; i++) {
        newobj[alphabet[i]] = i + 1; // Menggunakan i + 1 karena indeks dimulai dari 0
    }
    const mappedObj = text.toLowerCase().split('').map(char => newobj[char] || ' ').join(' ').replace(/ +/g, ' ').trim(); // Menggunakan ' ' jika karakter tidak ada di alphabet
    return mappedObj; // Mengembalikan nilai mappedObj
}

console.log(alphabetPosition("The narwhal bacons at midnight."));