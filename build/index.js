const { lstatSync, readdirSync, writeFileSync } = require('fs')
const { join, resolve } = require('path')

const isDirectory = source => lstatSync(source).isDirectory()
const getDirectories = source => readdirSync(source).filter(name => isDirectory(join(source, name)))


const names = getDirectories(resolve(__dirname, '../typings'))

writeFileSync(resolve(__dirname, '../typings/index.d.ts'), names.map(name => {
  if (name !== 'common') return `export { ${name} } from './${name}'`
  else return `import * as ${name}  from './${name}' \n export { ${name} }`
}).join('\n'))