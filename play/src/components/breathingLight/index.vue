<template>
  <div :class="['dot', type == 'success' ? 'dot_success' : 'dot_error']">
    <div
      :class="[
        'breathing-background',
        type == 'success'
          ? 'breathing-background_success'
          : 'breathing-background_error',
      ]"
    ></div>
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "success",
  },
});
</script>
<style>
.dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  background-color: red;
  border-radius: 50%;
  position: relative;
  z-index: 1;
}
.dot_success {
  background-color: green;
}
.dot_error {
  background-color: red;
}
.breathing-background {
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  opacity: 0.2;
  animation: breathing 2s cubic-bezier(0, 0, 0.25, 1) infinite;
}

.breathing-background_success {
  background-color: green;
}
.breathing-background_error {
  background-color: red;
}
@keyframes breathing {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(5);
    opacity: 0.2;
  }
  100% {
    transform: scale(5);
    opacity: 0;
  }
}
</style>
