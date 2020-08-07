<template>
  <div class="avatar-component" :style="measures">
    <img 
      class="image"
      v-bind="$attrs"
      alt="user picture"
    />
  </div>
</template>
<script>
export default {
  props: {
    size: {
      type: String,
      default: "3"
    }
  },
  computed: {
    measures() {
      const size = Number(this.size);
      return {
        width: `${size}rem`,
        height: `${size}rem`,
      }
    }
  }
}
</script>
<style lang="postcss" scoped src="./avatar.pcss"></style>