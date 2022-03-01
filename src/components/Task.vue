<template>
    <div class="task-item" @dblclick="$emit('toggle-complete', task.id)" :class="[task.taskcomplete ? 'active': '']">
        <h3>{{task.name}}</h3>
        <p>{{task.datetime}}</p>
        <div @click="$emit('delete-task', task.id)" class="delete">+</div>
    </div>
</template>

<script>
export default {
    name: 'Task',
    props: {
        task: Object
    },
    
}
</script>

<style>
.task-item {
    border: 1px solid #ddd;
    margin-bottom: 10px;
    cursor: pointer;
    position: relative;
}
.task-item.active {
    border-left: 5px solid green;
}
.delete {
    position: absolute;
    right: -15px;
    top: calc(50% - 15px);
    width: 30px;
    height: 30px;
    border-radius: 40px;
    color: #fff;
    font-weight: 600;
    background: red;
    line-height: 1.9;
    transform: rotate(45deg);
}
</style>