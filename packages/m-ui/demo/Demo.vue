<script setup>
import { ref, reactive, defineProps, defineEmits } from 'vue';

const props = defineProps(['msg'])
const emit = defineEmits(['click'])
</script>

<template>
  <div @click="emit('click')">{{ props.msg }}</div>
</template>

<style lang="less">

</style>