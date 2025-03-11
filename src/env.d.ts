/// <reference path="../.astro/db-types.d.ts" />
/// <reference path="../.astro/types.d.ts" />
/// <reference types="@astrojs/image/client" />

interface ImportMetaEnv {
  // Define aquí tus variables de entorno
  readonly PUBLIC_MAPBOX_TOKEN: string
  readonly PUBLIC_INMOVILLA_XML: string
  // Añade otras variables de entorno como sea necesario
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare namespace svelteHTML {
  interface HTMLAttributes<T> {
    section?: string
    'meta-index'?: number
    onsubmit?: any
    diapo?: any
    reveal?: any
    'section-id'?: any
    'on:onswiperight'?: (event: any) => any
    'on:onswipeleft'?: (event: any) => any
  }
}

declare namespace astroHTML.JSX {
  interface HTMLAttributes {
    reveal?: any
    revealed?: any
  }
}

declare namespace App {
  interface Locals {
    session: import('lucia').Session | null
    contact: any
    users: any
  }
}
