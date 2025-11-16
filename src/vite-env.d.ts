/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WHATSAPP_NUMBER?: string
  readonly VITE_WHATSAPP_DEFAULT_MESSAGE?: string
  readonly VITE_CONTACT_MESSAGE_PREFIX?: string
  readonly VITE_HERO_BG_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
