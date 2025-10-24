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

  interface TelegramWindow extends Window {
    Telegram: {
      WebApp: TelegramWebApp
    }
  }

  const window: TelegramWindow
}
