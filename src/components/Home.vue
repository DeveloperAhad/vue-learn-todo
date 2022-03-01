<template>
  <!-- <Header/> -->
  <h4>{{fullName}} {{$store.state.count}}</h4>
  <button @click="decrementBy">-5</button>
  <button @click="decrement">-</button>
  <button @click="increment">+</button>
  <button @click="incrementBy">+5</button>
  <Tasks @delete-task="deleteTask" @addTask="addNewTask" @toggle-complete="taskReminder" :tasks="tasks"/>
</template>

<script>
import Tasks from './Tasks.vue'

export default {
  name: 'Home',
  components: {
    Tasks
  },
  data () {
    return {
      tasks: [],
      firstName: 'Enam',
      lastName: 'Dada'
    }
  },
  methods: {
    deleteTask(id) {
        if(confirm("Are you sure!")) {
            this.tasks = this.tasks.filter(task => task.id !== id);
        }
    },
    taskReminder(id) {
      this.tasks = this.tasks.map(task => task.id === id ? {...task, taskcomplete: !task.taskcomplete} : task)
    },
    addNewTask(text) {
      console.log(text);
      const id  = this.tasks.length + 1;
      const newtask = {
        id,
        name: text,
        datetime: new Date().toDateString(),
        taskcomplete: false
      }
      this.tasks = [newtask,...this.tasks]
    },
    increment() {
      this.$store.commit('increment');
    },
    decrement() {
      this.$store.commit('decrement');
    },
    incrementBy() { 
      this.$store.commit('incrementBy', 5);
    },
    decrementBy() {
      this.$store.commit('decrementBy', 5);
    }
  },
  computed : {
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
  },
  created() {
    // console.log(store.state.count);
    this.tasks = [
      {
        id: 1,
        name: 'This a task 1',
        datetime: 'Tue Dec 07 2021',
        taskcomplete: true
      },
      {
        id: 2,
        name: 'This a task 2',
        datetime: 'Tue Dec 07 2021',
        taskcomplete: false
      },
      {
        id: 3,
        name: 'This a task 3',
        datetime: 'Tue Dec 07 2021',
        taskcomplete: false
      }
    ]
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>