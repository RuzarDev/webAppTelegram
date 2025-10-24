// src/env.d.ts
export {}

declare global {
  interface TelegramWebApp {
    initData: string
    initDataUnsafe: any
    close: () => void
    expand: () => void
    ready: () => void
    sendData: (data: string) => void
    MainButton?: {
      show: () => void
      hide: () => void
      setText: (text: string) => void
    }
  }

  interface Window {
    Telegram?: {
      WebApp: TelegramWebApp
    }
  }
  interface ImportMetaEnv {
    readonly BASE_URL: string
    readonly MODE: string
    readonly DEV: boolean
    readonly PROD: boolean
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv
  }

}
