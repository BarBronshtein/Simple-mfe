<template>
  <div v-if="!toEdit" @click="toEdit = !toEdit" class="p-5 bg-green-400 opacity-75 text-xl `">
    {{ txt }}
  </div>
  <input v-else type="text" v-model="txt" @blur="toEdit = !toEdit">
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'VueHeader',
  data() {
    return {
      txt: 'My Vue 3 Component',
      toEdit: false
    }
  },
})
</script>

<style lang="scss" scoped>

</style>