// src/composables/useTelegram.ts
export function useTelegram() {
  const tg = window.Telegram?.WebApp

  function sendMockData() {
    tg?.sendData('ping')
    const mockData = {
      carNumber: "171ADX13",
      carWeight: 9000,
      trailerNumber: "17AGN13",
      trailerWeight: 4500,
      totalWeight: 21781,
      from: "Москва",
      to: "Краснодар",
      driverPhone: "87056431971",
      items: [
        { itemName: "Апельсиновый сок", quantity: 2925, itemWeight: 7.44 },
        { itemName: "Растительное молоко", quantity: 1200, itemWeight: 8.2 },
      ],
    }

    const json = JSON.stringify(mockData)
    console.log("📤 Отправка в Telegram:", json)

    tg?.sendData(json)
  }

  function close() {
    console.log("🧩 Закрытие WebApp через tg.close()")
    tg?.close()
  }

  return { tg, sendMockData, close }
}
