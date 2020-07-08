function invertHex(hex) {
    return (Number(`0x1${hex}`) ^ 0xffffff).toString(16).substr(1).toUpperCase();
}

console.log(invertHex("5D9FFF"));
console.log(invertHex("B8DCFF"));
console.log(invertHex("6BBBFF"));
