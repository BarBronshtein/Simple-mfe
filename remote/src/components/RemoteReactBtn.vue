<template>
  <div ref="btn" text="remote btn"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import mount from 'host/ReactBtn'
export default defineComponent({
  name: 'RemoteReactBtn',
  props: ['text', 'color'],
  data() {
    return {}
  },
  computed: {},
  mounted() {
    mount(this.$refs.btn, { text: this.text, color: this.color });
  }
})
</script>

<style lang="scss" scoped>

</style>