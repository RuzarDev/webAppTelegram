// src/composables/useTelegram.ts
export function useTelegram() {
  const tg = window.Telegram?.WebApp

  function sendData(data: any) {
    tg?.sendData(JSON.stringify(data))
  }

  function close() {
    tg?.close()
  }

  return {
    tg,
    sendData,
    close,
  }
}
