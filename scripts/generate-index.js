#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Directory containing the generated files
const GENERATED_DIR = path.join(__dirname, '..', 'generated', 'node');

// Output files
const INDEX_JS = path.join(__dirname, '..', 'index.js');
const INDEX_DTS = path.join(__dirname, '..', 'index.d.ts');

// Function to get service name from filename
function getServiceName(filename) {
  // Extract base name without extension (e.g., 'user_pb.js' -> 'user_pb')
  const baseName = path.basename(filename, path.extname(filename));
  // Get the service name (e.g., 'user_pb' -> 'user')
  return baseName.replace('_pb', '');
}

// Get all the JS files in the generated directory
const jsFiles = fs.readdirSync(GENERATED_DIR)
  .filter(file => file.endsWith('_pb.js'))
  .map(file => path.basename(file, '.js'));

// Get unique service names (without the _pb suffix)
const serviceNames = [...new Set(jsFiles.map(file => getServiceName(file)))];

console.log(`Found services: ${serviceNames.join(', ')}`);

// Generate index.js
let jsContent = '// Auto-generated index for gRPC client stubs\n\n';
serviceNames.forEach(service => {
  jsContent += `const ${service} = require('./generated/node/${service}_pb');\n`;
});

jsContent += '\nmodule.exports = {\n';
serviceNames.forEach(service => {
  jsContent += `  ${service},\n`;
});
jsContent += '};\n';

// Generate index.d.ts
let dtsContent = '// Auto-generated TypeScript definitions for gRPC client stubs\n\n';
serviceNames.forEach(service => {
  dtsContent += `import * as ${service} from './generated/node/${service}_pb';\n`;
});

dtsContent += '\nexport {\n';
serviceNames.forEach(service => {
  dtsContent += `  ${service},\n`;
});
dtsContent += '};\n';

// Write the files
fs.writeFileSync(INDEX_JS, jsContent);
fs.writeFileSync(INDEX_DTS, dtsContent);

console.log(`Generated:
  - ${INDEX_JS} 
  - ${INDEX_DTS}`); 