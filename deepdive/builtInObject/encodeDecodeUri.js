const uri = 'http://example.com?name=이동현&job=programmer';

const enc = encodeURI(uri);

console.log(enc);

const dec = decodeURI(enc);

console.log(dec);