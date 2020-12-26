<template>
  <div class="todo">
    <div class="form-check">
      <input
        id="status"
        type="checkbox"
        v-bind:checked="status"
        class="form-check-input"
        @click="toggleStatus"
      />
      <label class="form-check-label visually-hidden" for="status">
        Completed
      </label>
    </div>
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
    },
    /**
     * @return {boolean}
     */
    displayedStatus: function() {
      return this.status;
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
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 10px;

  &__text {
    flex: 1 1 auto;
  }
}
</style>
