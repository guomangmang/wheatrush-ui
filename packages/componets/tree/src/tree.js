
export const treeProps = {
    data: {
        type: Array,
        default: () => [],
    },
    labelField: {
        type: String,
        default: "label",
    },
    keyFiels: {
        type: String,
        default: "key",
    },
    childrenField: {
        type: String,
        default: "children",
    },
    defaultCheckKeys: {
        type: Array
    },
}
