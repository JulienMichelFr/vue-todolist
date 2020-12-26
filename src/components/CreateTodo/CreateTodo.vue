<template>
  <form id="form-container" @submit="createTodo">
    <div id="text-input" class="form-group">
      <label for="text">Text</label>
      <input
        class="form-control"
        type="text"
        id="text"
        v-model="text"
        required
        placeholder="My Todo"
      />
    </div>
    <div id="status-input" class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        id="status"
        v-model="status"
      />
      <label class="form-check-label" for="status">Status</label>
    </div>
    <div id="date-input" class="form-group">
      <label for="date">Date</label>
      <input type="date" id="date" v-model="date" class="form-control" />
    </div>
    <button class="btn btn-success" type="submit">Create</button>
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
  align-items: flex-end;
}
</style>
