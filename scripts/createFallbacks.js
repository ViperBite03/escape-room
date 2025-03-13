import { writeFile } from 'node:fs/promises'

const responseFilters = await fetch(`http://localhost:4000/api/filters`)
const filters = await responseFilters.json()
const responseProperties = await fetch(`http://localhost:4000/api/properties`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
})

const properties = await responseProperties.json()

await writeFile('src/fallbacks/properties.ts', `export const properties = ${JSON.stringify(properties)}`)
await writeFile('src/fallbacks/filters.ts', `export const filters = ${JSON.stringify(filters)}`)

console.log('🙄 All fallbacks generated!')
