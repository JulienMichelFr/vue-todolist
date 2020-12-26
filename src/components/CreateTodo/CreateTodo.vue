<template>
  <form id="form-container" @submit="createTodo">
    <div id="text-input">
      <label for="text">Text</label>
      <input
        type="text"
        id="text"
        v-model="text"
        required
        placeholder="My Todo"
      />
    </div>
    <div id="status-input">
      <label for="status">Status</label>
      <input type="checkbox" id="status" v-model="status" />
    </div>
    <div id="date-input">
      <label for="date">Date</label>
      <input type="date" id="date" v-model="date" />
    </div>
    <button type="submit">Create</button>
  </form>
</template>

<script>
export default {
  name: "CreateTodo",
  data: function() {
    return {
      text: "",
      status: false,
      date: new Date().toISOString().substring(0, 10)
    };
  },
  methods: {
    /**
     *
     * @param event {Event}
     */
    createTodo(event) {
      event.preventDefault();
      this.$emit("create-todo", {
        text: this.text,
        status: this.status,
        date: this.date
      });
    }
  }
};
</script>

<style scoped lang="scss">
#form-container {
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;
}
</style>
