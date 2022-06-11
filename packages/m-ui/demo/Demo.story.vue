<script setup>
import Demo from './Demo.vue'

const hh = () => {
  alert(111)
}
</script>

<template>
  <Story group="comp" title="button">
    <Variant title="demo1">
      <Demo msg="hello world"></Demo>
    </Variant>
    <Variant title="demo2">
      <Demo msg="hello vue" @click="hh"></Demo>
    </Variant>
    <Variant title="demo3">
      <Demo msg="hello vite"></Demo>
    </Variant>
  </Story>
</template>

<style lang="less">

</style>