<template>
  <div class="avatar" :style="measures">
    <img 
      class="avatar__pic" 
      v-bind="$attrs"
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