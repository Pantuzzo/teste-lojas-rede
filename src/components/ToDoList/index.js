export default {
    data() {
      return {
        tasks: [
          { name: 'Estudar Vue.js', completed: false },
          { name: 'Fazer compras', completed: true },
          { name: 'Praticar exercícios', completed: false }
        ],
        newTask: ''
      }
    },
    methods: {
      addTask() {
        if (this.newTask.trim() !== '') {
          this.tasks.push({ name: this.newTask, completed: false });
          this.newTask = '';
        }
      },
      removeTask(index) {
        this.tasks.splice(index, 1);
      }
    }
}