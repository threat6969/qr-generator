# QR Image Generator

This project is a simple Node.js application that generates a QR code image (`PNG` format) from a user-provided URL. It uses the `qr-image` package to create the QR code.

---

## Features
- Accepts user input for the URL.
- Generates a QR code in `PNG` format.
- Saves the generated QR code to the project directory.

---

## Prerequisites
- [Node.js](https://nodejs.org/) installed on your system.

---

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/threat6969/qr-image-generator.git
   cd qr-image-generator
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

---

## Usage

1. Run the application:
   ```bash
   node qr.js
   ```

2. Enter the URL when prompted:
   ```
   Enter the URL to generate QR code: https://example.com
   ```

3. The QR code image (`qrcode.png`) will be saved in the current directory.

---

## Code Explanation
- **`qr-image`**: A package used to generate QR codes.
- **`fs`**: Node.js file system module to save the QR code image.

Here's a snippet of the main functionality:
```javascript
import fs from 'fs';
import qr from 'qr-image';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter the URL to generate QR code: ', (url) => {
  const qrPng = qr.image(url, { type: 'png' });
  const output = fs.createWriteStream('qrcode.png');
  qrPng.pipe(output);

  output.on('finish', () => {
    console.log('QR code has been generated and saved as qrcode.png');
    rl.close();
  });
});
```

---

## Example Output
If you provide the URL `https://example.com`, a `qrcode.png` file will be created in the same directory.

---

## Dependencies
- `qr-image`: QR code generator library.
- `readline`: Built-in Node.js module for user input.

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contributing
Feel free to fork this repository, submit pull requests, or report issues.
