<template>
  <div></div>
</template>

<script setup>
import { tableProps } from "./table";
import { createNamespace } from "@wheatrush/utils/create";
const props = defineProps(tableProps);
const bem = createNamespace("table");
</script>
