<template>
  <div class="todo">
    <button class="todo__status" v-on:click="toggleStatus()">
      {{ status }}
    </button>
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
    /**
     * Return date with locale format
     * @return {string}
     */
    displayedDate: function() {
      if (!(this.date instanceof Date)) {
        return "Invalid Date";
      }
      return this.date?.toLocaleDateString();
    },
    /**
     * Return this.text or placeholder if not provided
     * @return {string}
     */
    displayedText: function() {
      return this.text ?? "Empty todo";
    }
  },
  methods: {
    /**
     * Emit the "toggle-status" event
     */
    toggleStatus() {
      this.$emit("toggle-status");
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
