import { input } from '@inquirer/prompts';
import qr from 'qr-image';
import fs from 'fs';

const answer = await input({ message: 'Enter the URL: ' });
fs.writeFile('output.txt', answer, { encoding: 'utf8' }, (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log('Url inserted successfully!');
  });
var qrSvg = qr.image(answer, { type: 'png' });
// Write the QR code to a file
const output = fs.createWriteStream('qrcode.png');
qrSvg.pipe(output);

output.on('finish', () => {
    console.log('QR code generated and saved as qrcode.png');
  });