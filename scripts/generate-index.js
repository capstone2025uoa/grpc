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
  if (baseName.endsWith('_pb')) {
    return baseName.replace('_pb', '');
  }
  if (baseName.endsWith('_grpc_pb')) {
    return baseName.replace('_grpc_pb', '');
  }
  return baseName;
}

// Get all the message files in the generated directory
const messageFiles = fs.readdirSync(GENERATED_DIR)
  .filter(file => file.endsWith('_pb.js') && !file.includes('_grpc_'))
  .map(file => path.basename(file, '.js'));

// Get the service files
const serviceFiles = fs.readdirSync(GENERATED_DIR)
  .filter(file => file.includes('_grpc_pb.js'))
  .map(file => path.basename(file, '.js'));

// Get unique service names (without the _pb or _grpc_pb suffix)
const messageNames = [...new Set(messageFiles.map(file => getServiceName(file)))];

// Generate index.js
let jsContent = '// Auto-generated index for gRPC client stubs\n\n';

// Import message classes
messageNames.forEach(service => {
  jsContent += `const ${service} = require('./generated/node/${service}_pb');\n`;
});

// Import service definitions if they exist
messageNames.forEach(service => {
  if (fs.existsSync(path.join(GENERATED_DIR, `${service}_grpc_pb.js`))) {
    jsContent += `const ${service}Service = require('./generated/node/${service}_grpc_pb');\n`;
  }
});

jsContent += '\nmodule.exports = {\n';

// Export message classes
messageNames.forEach(service => {
  jsContent += `  ${service},\n`;
});

// Export service definitions if they exist
messageNames.forEach(service => {
  if (fs.existsSync(path.join(GENERATED_DIR, `${service}_grpc_pb.js`))) {
    jsContent += `  ${service}Service,\n`;
  }
});

jsContent += '};\n';

// Generate index.d.ts
let dtsContent = '// Auto-generated TypeScript definitions for gRPC client stubs\n\n';

// Import message types
messageNames.forEach(service => {
  dtsContent += `import * as ${service} from './generated/node/${service}_pb';\n`;
});

// Import service types if they exist
messageNames.forEach(service => {
  if (fs.existsSync(path.join(GENERATED_DIR, `${service}_grpc_pb.d.ts`))) {
    dtsContent += `import * as ${service}Service from './generated/node/${service}_grpc_pb';\n`;
  }
});

dtsContent += '\nexport {\n';

// Export message types
messageNames.forEach(service => {
  dtsContent += `  ${service},\n`;
});

// Export service types if they exist
messageNames.forEach(service => {
  if (fs.existsSync(path.join(GENERATED_DIR, `${service}_grpc_pb.d.ts`))) {
    dtsContent += `  ${service}Service,\n`;
  }
});

dtsContent += '};\n';

// Write the files
fs.writeFileSync(INDEX_JS, jsContent);
fs.writeFileSync(INDEX_DTS, dtsContent);

console.log(`Generated:
  - ${INDEX_JS} 
  - ${INDEX_DTS}`);

// Check if service files exist
if (serviceFiles.length === 0) {
  console.warn('\nWARNING: No gRPC service definition files found (files ending with _grpc_pb.js).');
  console.warn('Make sure to add "--grpc_out=grpc_js:./generated/node" and "--plugin=protoc-gen-grpc" to your protoc command.');
} else {
  console.log(`\nFound ${serviceFiles.length} service definition files.`);
} 