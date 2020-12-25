<template>
  <div class="todo">
    <div class="todo__status">{{ status }}</div>
    <div class="todo__text">{{ text }}</div>
    <div class="todo__date">{{ displayedDate }}</div>
  </div>
</template>

<script>
export default {
  name: "Todo.vue",
  props: {
    date: Date,
    status: Boolean,
    text: String
  },
  computed: {
    displayedDate: function() {
      if (!this.date) {
        console.warn("No date provided");
      }
      if (!(this.date instanceof Date)) {
        console.warn("Date should be an instance of Date");
        return;
      }
      return this.date?.toLocaleDateString();
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
