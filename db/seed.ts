import { db, Property } from 'astro:db'
import { properties } from '../src/fallbacks/properties'

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Property).values(properties)
}
