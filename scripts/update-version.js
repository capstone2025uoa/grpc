#!/usr/bin/env node

/**
 * This script updates the version in version.txt and package.json
 * Usage: node scripts/update-version.js [new-version]
 * Example: node scripts/update-version.js 1.1.0
 */

const fs = require('fs');
const path = require('path');

// Get new version from command line argument
const newVersion = process.argv[2];

if (!newVersion) {
  console.error('Error: No version specified');
  console.log('Usage: node scripts/update-version.js [new-version]');
  console.log('Example: node scripts/update-version.js 1.1.0');
  process.exit(1);
}

// Validate version format (semver)
const semverRegex = /^\d+\.\d+\.\d+$/;
if (!semverRegex.test(newVersion)) {
  console.error('Error: Invalid version format. Must be in format x.y.z');
  process.exit(1);
}

// Path to version.txt
const versionFilePath = path.join(__dirname, '..', 'version.txt');

// Update version.txt
fs.writeFileSync(versionFilePath, newVersion);
console.log(`Updated version.txt to ${newVersion}`);

// Path to package.json
const packageJsonPath = path.join(__dirname, '..', 'package.json');

// Update package.json if it exists
if (fs.existsSync(packageJsonPath)) {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  const oldVersion = packageJson.version;
  packageJson.version = newVersion;
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
  console.log(`Updated package.json version from ${oldVersion} to ${newVersion}`);
}

console.log(`
Version updated to ${newVersion}

Next steps:
1. Commit these changes
2. Push to GitHub
3. The CI/CD workflow will automatically use this version for all packages
`); 