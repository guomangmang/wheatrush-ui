<template>
  <div>tree</div>
</template>

<script setup>
import { treeProps } from "./tree";
import { watch, ref } from "vue";
defineOptions({
  name: "gl-tree",
});
const tree = ref([]);
const props = defineProps(treeProps);

const createOptions = (key, label, children) => {
  return {
    getKey: (node) => node[key],
    getLabel: (node) => node[label],
    getChildren: (node) => node[children],
  };
};

const treeOptions = createOptions(
  props.keyFiels,
  props.labelField,
  props.childrenField
);
const createTree = (data) => {
  function traverse(data, parent = null) {
    return data.map((node) => {
      const children = treeOptions.getChildren(node) || [];
      const treeNode = {
        key: treeOptions.getKey(node),
        label: treeOptions.getLabel(node),
        children: [],
        rawNode: node,
        leval: parent ? parent.level + 1 : 0,
        idLeaf: node.isLeaf ?? children.length == 0,
      };
      if (children.length > 0) {
        treeNode.children = traverse(children, treeNode);
      }
      return treeNode;
    });
  }
  const result = traverse(data);

  return result;
};
watch(
  () => props.data,
  (data) => {
    tree.value = createTree(data);
    console.log(tree.value);
  },
  {
    immediate: true,
  }
);
</script>

<style scoped></style>
