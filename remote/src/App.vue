<template>
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: remote</div>
    <div>Framework: vue3</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
    <VueHeader />
    <RemoteReactBtn color="#0000ff" text="MFE are cool" :onClick="onClick" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VueHeader from './components/VueHeader.vue';
import RemoteReactBtn from './components/RemoteReactBtn.vue';
export default defineComponent({
  components: {
    VueHeader,
    RemoteReactBtn
  },
  methods: {
    onClick() {
      console.log('Passing props to remote cmp')
    }
  }
});
</script>
