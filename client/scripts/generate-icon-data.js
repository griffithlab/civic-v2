#!/usr/bin/env node
const directoryTree = require('directory-tree')
const path = require('path')
const fs = require('fs')

const iconsDirectory = path.join(__dirname, '..', 'src', 'assets', 'icons')
const validSubdirectories = ['attribute', 'outline', 'twotone', 'fullcolor']

// Utility to remove redundant parent directory name from the filename
function removeRedundantName(type, filename) {
  const pattern =
    type === 'attribute' ? /-outline$/ : new RegExp(`-${type}$`, 'i')
  return filename.replace(pattern, '')
}

function generateIconObject(tree) {
  if (!tree || !tree.children) return []

  return tree.children
    .filter((child) => validSubdirectories.includes(child.name))
    .flatMap((subdir) => {
      return subdir.children.map((file) => {
        const cleanName = removeRedundantName(
          subdir.name,
          path.basename(file.name, '.svg')
        )
        return {
          type: subdir.name,
          name: cleanName,
          alias: `${subdir.name}-${cleanName}`,
        }
      })
    })
}

const tree = directoryTree(iconsDirectory, { extensions: /\.svg$/ })

if (!tree) {
  console.error(
    `Error: The directory ${iconsDirectory} does not exist or could not be accessed.`
  )
  process.exit(1)
}

const icons = generateIconObject(tree)
const output = {
  icons: icons,
}

// Define the path to the output file
const outputPath = path.join(
  __dirname,
  '..',
  'src',
  'app',
  'generated',
  'civic.icons.data.json'
)

// Write the JSON data to the file
fs.writeFileSync(outputPath, JSON.stringify(output, null, 2))

console.log(`Data written to ${outputPath}`)
