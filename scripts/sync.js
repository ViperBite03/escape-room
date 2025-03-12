import { cpSync } from 'node:fs'
import path from 'path'

const currentPath = path.resolve()
const projectsPath = currentPath.replace(/\/[^/]*$/, '')

const source = `${currentPath}/src/sync`
const dest = `${projectsPath}/escape-room/src/sync`

await cpSync(source, dest, { recursive: true })

console.log('Copy done!')
