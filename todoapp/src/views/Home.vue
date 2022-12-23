<template>
  <div class="content">
    <div class="custom">
      <form @submit.prevent="addTodo">
        <div class="field">
          <label class="label">Todo List</label>
          <div class="control">
            <input
              v-model="todo"
              class="input"
              type="text"
              placeholder="Todo Ekle"
            />
          </div>
        </div>
        <button type="submit" class="button is-warning">Ekle</button>
      </form>
    </div>
    <router-link class="custom" to="/rapor"> Durum Raporu :D </router-link>
    <div v-for="(todo, index) in todos" :key="index" class="card my-5 mx-5">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <span @click="remove(index)" class="sil">Sil</span>
          </div>
          <div class="media-content">
            <p
              :class="{ done: todo.done }"
              @click="done(todo)"
              class="title is-4 cursor"
            >
              {{ todo.content }}
            </p>
            <p class="subtitle is-6">Done: {{ todo.done }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const todo = ref("");
    const todos = ref([]);
    function addTodo() {
      todos.value.push({
        done: false,
        content: todo.value,
        id: Date.now(),
      });
      todo.value = "";
    }
    function done(todo) {
      todo.done = !todo.done;
    }
    function remove(index) {
      this.todos.splice(index, 1);
    }
    return {
      todo,
      todos,
      addTodo,
      done,
      remove,
    };
  },
};
</script>

<style lang="scss">
.done {
  text-decoration: line-through;
}

.cursor {
  cursor: pointer;
}

.custom {
  display: flex;
  justify-content: center;
  color: red;
  text-align: center;
  margin-top: 20px;
}

.sil {
  padding: 8px;
  background: red;
  color: white;
  border-radius: 15px;
  cursor: pointer;
}
</style>
>
