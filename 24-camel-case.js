// String.prototype.camelCase=function(){
//     const words = this.split(' ')
//     const capitalized=[]
//     for(i=0;i<words.length;i++){
//         const word = words[i]
//         const capitalWord = word[0].toUpperCase() + word.slice(1)
//         capitalized.push(capitalWord)
//     }
//     return capitalized.join('')
// }

// String.prototype.camelCase = function() {
//     // Pisahkan kata-kata berdasarkan spasi
//     const words = this.split(' ');

//     // Untuk setiap kata, ubah huruf pertama menjadi huruf kapital
//     const camelCased = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

//     // Gabungkan kata-kata yang telah diubah menjadi satu string dan hapus spasi
//     return camelCased.join('');
// };

String.prototype.camelCase = function() {
    return this.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
};

console.log('test case'.camelCase())



String.prototype.camelCase = function () {
    return this.trim().replace(/(?:^|\s+)(\w)/g, (_, c) => c.toUpperCase())
}