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
    <div class="todo__text" v-if="!editMode" @click="editText()">
      {{ displayedText }}
    </div>
    <form
      class="todo__text form-group d-flex"
      v-else
      novalidate
      @submit.prevent="updateText"
    >
      <label for="updatedText" class="visually-hidden">Text</label>
      <input
        id="updatedText"
        type="text"
        class="form-control"
        required
        v-model="updatedText"
      />
      <button type="button" class="btn btn-warning" @click="cancelEditText()">
        Cancel
      </button>
      <button type="submit" class="btn btn-success">Save</button>
    </form>
    <div class="todo__date">{{ displayedDate }}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Todo.vue",
  data: function() {
    return {
      editMode: false,
      updatedText: this.text
    };
  },
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
     * Switch to editMode
     */
    editText() {
      this.updatedText = this.text;
      this.editMode = true;
    },
    /**
     * Cancel editMode
     */
    cancelEditText() {
      this.editMode = false;
    },
    /**
     * Emit the "toggle-status" event
     */
    toggleStatus() {
      this.$emit("toggle-status");
    },
    /**
     * Emit this "updated-text" event with updated value
     */
    updateText() {
      this.$emit("update-text", this.updatedText);
      this.editMode = false;
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
