const generatePayload = require('promptpay-qr') 
const qrcode = require('qrcode') 
const fs = require('fs') 

const mobileNumber = '092-272-2852' 
const IDCardNumber = '0-0000-00000-00-0'
const amount = 10
const payload = generatePayload(mobileNumber, { amount }) //First parameter : mobileNumber || IDCardNumber
console.log(payload)

// Convert to SVG QR Code
const options = { type: 'svg', color: { dark: '#000', light: '#fff' } }
qrcode.toString(payload, options, (err, svg) => {
    if (err) return console.log(err)
    fs.writeFileSync('./qr.svg', svg)
    console.log(svg)
})