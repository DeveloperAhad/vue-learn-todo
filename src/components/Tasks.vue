<template>
    <div class="tasks-warp">
        <input type="text" v-model="taskInput">
        <button v-on:click="cleanTaskInput">Add New task</button>
        <div :key="task.id" v-for="task in tasks">
            <Task @delete-task="$emit('delete-task', task.id)" @toggle-complete="$emit('toggle-complete', task.id)" :task="task"/>
        </div>
    </div>
</template>

<script>
import Task from './Task.vue'

export default {    
    name: 'Tasks',

    data() {
        return {
            taskInput: ""
        }
    },
    props: {
        tasks: Array
    },
    components: {
        Task
    },
    methods: {
        cleanTaskInput() {
            this.$emit('addTask', this.taskInput);
            this.taskInput = "";
        }
    },
    emits: ['delete-task','toggle-complete', 'addTask']
}
</script>

<style>
.tasks-warp {
    max-width: 400px;
    margin: 0 auto;
}
input {
    display: inline-block;
    width: calc(100% - 200px);
    height: 36px;
    border: 1px solid #ededed;
}
button {
    display: inline-block;
    height: 40px;
    width: 120px;
    background: green;
    color: #fff;
    border: 1px solid #ededed;
    margin-bottom: 30px;
    cursor: pointer;
}
</style>