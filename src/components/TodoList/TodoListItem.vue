<template>
  <tr class="todo">
      <td :class="taskClass">{{todo.task}}</td>
      <td class="level" :style="difficultStyle">{{todo.difficult}}</td>
      <td class="short"><button class="check" :class="{'done-task':todo.isDone}" @click="doneUndone(todo.id)"></button></td>
      <td class="short"><button @click="deleteItem(todo.id)">X</button></td>
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
                'background-color': "rgb(116, 228, 121)"
            }
        }

    }

}
</script>

<style scoped>
    .todo {
        display: flex;
        margin: auto;
        border-bottom: 1px solid thistle;
    }

    td {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 350px;
        height: 30px;
        background-color: rgb(248, 248, 248);
    }
    .short {
        width: 30px;
    }
    .level {
        width: 100px;
    }

    .check {
        background-color: rgb(160, 160, 160);
        border-radius: 50%;
        border: none;
        width: 20px;
        height: 20px;
    }

    .done-task {
        background-color: rgb(105, 105, 173);
    }

</style>