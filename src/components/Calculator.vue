<template>
  <form class="text-left" @submit.prevent="handleSubmit">
    <div class="mb-5">
      <label class="w-20 inline-block">
        A
      </label>
      <input v-model.number="firstParam" type="number" class="p-3 border border-black border-solid rounded" />
    </div>
    <div class="mb-10">
      <label class="w-20 inline-block">
        B
      </label>
      <input v-model.number="secondParam" type="number" class="p-3 border border-black border-solid rounded" />
    </div>
    <div class="mb-10">
      <label class="w-20 inline-block">SUM</label>
      <input disabled v-model="sum" type="number" class="p-3 border border-black border-solid rounded disabled:opacity-50 " />
    </div>
    <div class="pl-20">
      <button
        type="submit"
        class="border py-3 px-5 border-blue-600 border-solid rounded bg-blue-600 text-white hover:bg-blue-800 focus:bg-blue-800 focus:outline-none font-semibold">
        Submit
        </button>
    </div>
  </form>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    const store = useStore()
    const firstParam = ref(0)
    const secondParam = ref(0)
    const handleSubmit = () => {
      store.commit('setSum', firstParam.value + secondParam.value)
    }
    const sum = computed(() => store.state.sum)
    return {
      firstParam,
      secondParam,
      sum,
      handleSubmit
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
