<template>
  <div>
    <router-link
      :to="{ name: 'todolist.detail', params: { id: todolist.id } }"
      class="list-group"
      v-for="todolist in todolists"
      :key="todolist.id"
    >
      <TodolistCard class="list-group-item" :todolist="todolist"></TodolistCard>
    </router-link>
  </div>
</template>

<script>
import { TodolistModel } from "@/utils/models/todolist/todolist.model";
import TodolistCard from "@/components/TodolistCard/TodolistCard";

export default {
  name: "Home",
  components: {
    TodolistCard
  },
  computed: {
    todolists() {
      return this.$store.state.todolists.map(t => TodolistModel.fromObject(t));
    }
  },
  methods: {
    addTodo() {
      this.$store.commit(
        "addTodo",
        new TodolistModel("My todolist", []).toObject()
      );
    }
  }
};
</script>
