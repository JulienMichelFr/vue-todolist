<template>
  <div class="todo">
    <div class="todo__status">{{ status }}</div>
    <div class="todo__text">{{ displayedText }}</div>
    <div class="todo__date">{{ displayedDate }}</div>
  </div>
</template>

<script>
export default {
  name: "Todo.vue",
  props: {
    date: Date,
    status: {
      type: Boolean,
      default: false
    },
    text: String
  },
  computed: {
    displayedDate: function() {
      if (!(this.date instanceof Date)) {
        return "Invalid Date";
      }
      return this.date?.toLocaleDateString();
    },
    displayedText: function() {
      return this.text ?? "Empty todo";
    }
  }
};
</script>

<style lang="scss" scoped>
.todo {
  border-radius: 5px;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;

  &__text {
    flex: 1 1 auto;
  }
}
</style>
