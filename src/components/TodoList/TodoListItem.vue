<template>
  <tr class="todo">
      <td :class="taskClass">{{todo.task}}</td>
      <td :style="difficultStyle">{{todo.difficult}}</td>
      <td><button class="check" :class="{'done-task':todo.isDone}" @click="doneUndone(todo.id)"></button></td>
      <td><button @click="deleteItem(todo.id)">Delete</button></td>
  </tr>
</template>

<script>
import Todo from '../../models/Todo'
export default {
    props: {
        todo: Todo,
        doneUndone: Function,
        deleteItem: Function
    },
    computed: {
        taskClass() {
            if (this.todo.isDone) {
                return "done-task";
            } else {
                return "";
            }
        },
        difficultStyle() {
            return {
                color: "blue",
                'background-color': "yellow"
            }
        }

    }

}
</script>

<style scoped>
    .todo {
        display: flex;
        justify-content: space-between;
        margin: auto;
        border-bottom: 1px solid thistle;
    }
    td {
        width: 100px;
        background-color: whitesmoke;
    }

    .check {
        background-color: red;
        border-radius: 50%;
        border: none;
        width: 20px;
        height: 20px;
    }

    .done-task {
        background-color: green;
    }
</style>