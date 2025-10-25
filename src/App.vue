<script setup lang="ts">
import {onMounted, ref} from "vue"
import {useTelegram} from "@/hooks/useTelegram.ts";
const {tg,sendData,close} = useTelegram()
interface TransportForm {
  carNumber: string
  carWeight: number | null
  trailerNumber: string
  trailerWeight: number | null
  totalWeight: number | null
  from: string
  to: string
  driverPhone: string
}

interface Item {
  itemName: string
  quantity: number | null
  itemWeight: number | null
}
const form = ref<TransportForm>({
  carNumber: "",
  carWeight: null,
  trailerNumber: "",
  trailerWeight: null,
  totalWeight: null,
  from: "",
  to: "",
  driverPhone: "",
})

const arrayOfItems = ref<Item[]>([
  { itemName: "", quantity: null, itemWeight: null },
])

function addItem() {
  arrayOfItems.value.push({ itemName: "", quantity: null, itemWeight: null })
}

function removeItem(index: number) {
  arrayOfItems.value.splice(index, 1)
}
onMounted(() => {
  tg?.ready()
  tg?.expand() // делает окно во весь экран
})
</script>

<template>
  <div class="flex flex-col gap-6 p-6 bg-gray-100 min-h-screen">
    <a-card title="Информация о транспорте">
      <a-form layout="vertical">
        <a-form-item label="Гос номер машины">
          <a-input v-model:value="form.carNumber" placeholder="Например: 171ADX13" />
        </a-form-item>

        <a-form-item label="Вес машины (кг)">
          <a-input-number v-model:value="form.carWeight" class="w-full" />
        </a-form-item>

        <a-form-item label="Гос номер прицепа">
          <a-input v-model:value="form.trailerNumber" placeholder="Например: 17AGN13" />
        </a-form-item>

        <a-form-item label="Вес прицепа (кг)">
          <a-input-number v-model:value="form.trailerWeight" class="w-full" />
        </a-form-item>

        <a-form-item label="Общий вес (машина + прицеп + груз)">
          <a-input-number v-model:value="form.totalWeight" class="w-full" />
        </a-form-item>

        <a-form-item label="Откуда">
          <a-input v-model:value="form.from" placeholder="Город отправления" />
        </a-form-item>

        <a-form-item label="Куда">
          <a-input v-model:value="form.to" placeholder="Город назначения" />
        </a-form-item>

        <a-form-item label="Номер водителя">
          <a-input v-model:value="form.driverPhone" placeholder="8705..." />
        </a-form-item>
      </a-form>
    </a-card>

    <a-card title="Товары">
      <div v-for="(item, index) in arrayOfItems" :key="index" class="mb-4 border-b pb-4">
        <a-form layout="vertical">
          <a-form-item label="Название товара">
            <a-input v-model:value="item.itemName" placeholder="Например: Апельсиновый сок" />
          </a-form-item>

          <a-form-item label="Количество (шт)">
            <a-input-number v-model:value="item.quantity" class="w-full" />
          </a-form-item>

          <a-form-item label="Вес одной единицы (кг)">
            <a-input-number v-model:value="item.itemWeight" class="w-full" />
          </a-form-item>

          <a-button danger type="dashed" @click="removeItem(index)">Удалить</a-button>
        </a-form>
      </div>

      <a-button type="primary" @click="addItem">Добавить товар</a-button>
      <a-button type="primary" class="mt-4 w-full" @click="sendData({ ...form.value, items: arrayOfItems.value })">
        Отправить в Telegram
      </a-button>
    <a-button @click="close">
      Закрыть telegram
    </a-button>
    </a-card>
  </div>

</template>

<style scoped>

</style>
