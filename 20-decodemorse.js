const decodeMorse = morseCode => morseCode.trim().split('   ').map((word) => word.split(' ').map(char => MORSE_CODE[char]).join('')).join(' ')

console.log(decodeMorse('   .... . -.--   '))