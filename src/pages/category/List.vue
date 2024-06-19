<template>
  <q-page padding>
    <div class="row">
      <q-table
        title="Category"
        :rows="rows"
        :columns="columns"
        row-key="calories"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { QPage, QTable } from 'quasar'

interface Column {
  name: string
  align?: string
  label: string
  field: string
  sortable?: boolean
}

interface Row {
  name: string
  calories: number
  fat: number
  carbs: number
}

const columns: Column[] = [
  { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
  { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
  { name: 'carbs', label: 'Carbs (g)', field: 'carbs' }
]

const rows: Row[] = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24
  }
]

export default defineComponent({
  name: 'PageCategoryList',
  components: {
    QPage,
    QTable
  },
  setup () {
    const rowsRef = ref<Row[]>(rows)
    const columnsRef = ref<Column[]>(columns)
    return {
      rows: rowsRef,
      columns: columnsRef
    }
  }
})
</script>

<style scoped>
.row {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
