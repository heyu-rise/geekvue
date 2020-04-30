<template>
  <div id="app">
    <todo-list>
      <todo-item
        :key="item.title"
        @delete="handleDelete"
        v-for="item in list"
        :title="item.title"
        :del="item.del"
      >
        <template v-slot:pre-icon="{value}">
          <span>前置插槽 + {{value}}</span>
        </template>
        <template v-slot:after-icon="{value}">
          <span class="red">后置插槽 + {{value}}</span>
        </template>
      </todo-item>
    </todo-list>
  </div>
</template>

<script>
import TodoItem from "./components/TodoItem.vue";
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  components: {
    TodoItem,
    TodoList
  },
  data() {
    return {
      message: "hello world",
      list: [
        {
          title: "课程1",
          del: false
        },
        {
          title: "课程2",
          del: true
        }
      ],
      item: {
        title: "课程1",
        del: true
      }
    };
  },
  methods: {
    handleDelete(val) {
      console.log("handleDelete", val);
    }
  }
};
</script>

<style scoped>
.red {
  color: red;
}
</style>