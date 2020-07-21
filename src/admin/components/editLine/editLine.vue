<template>
  <div class="edit-line-container" :class="{'blocked' : blocked}">
    <div class="skills-card-title" v-if="editmode === false">
      <div class="skills-card-title__text">{{value}}</div>
      <div class="skills-card-title__icon">
        <icon symbol="pencil" grayscale @click="editmode = true"></icon>
      </div>
    </div>
    <div v-else class="skills-card-title">
      <div class="skills-card-title__input">
        <app-input
          placeholder="Название новой группы"
          :value="value"
          :errorText="errorText"
          @input="$emit('input', $event)"
          @keydown.native.enter="onApprove"
          autofocus="autofocus"
          no-side-paddings="no-side-paddings"
        ></app-input>
      </div>
      <div class="skills-card-title__buttons">
        <div class="skills-card-title__btn">
          <icon symbol="tick" @click="onApprove"></icon>
        </div>
        <div class="skills-card-title__btn">
          <icon symbol="cross" @click="$emit('remove')"></icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    },
    errorText: {
      type: String,
      default: ""
    },
    blocked: Boolean
  },
  data() {
    return {
      editmode: false,
      title: this.value
    };
  },
  methods: {
    onApprove() {
      if (this.title.trim() == this.value.trim()) {
        this.editmode = false;
      } else {
        this.$emit("approve", this.value);
      }
    }
  },
  components: {
    icon: () => import("components/icon"),
    appInput: () => import("components/input")
  }
};
</script>

<style lang="postcss" scoped src="./editLine.pcss"></style>