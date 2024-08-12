<script setup lang="ts">
import { computed, defineOptions } from "vue"
import { iconProps } from "./icon"

defineOptions({ name: "AIcon" })

const props = defineProps(iconProps)

const style = computed(() => {
	if (!props.size && !props.color) {
		return {}
	}

	return {
		...(props.color ? { color: props.color } : {}),
		...(props.size ? { size: props.size + "px" } : {}),
	}
})
</script>

<template>
	<i :style="style">
		<slot />
	</i>
</template>

<style scoped></style>
