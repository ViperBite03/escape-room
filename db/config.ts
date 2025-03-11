import { defineDb } from 'astro:db'
import { tables } from '../src/sync/db/tables'

// https://astro.build/db/config
export default defineDb({
  tables,
})
