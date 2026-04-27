const app = Vue.createApp({
    data() {
        return {
            header: 'Счетчик',
            counter: 0,
        }
    },
    methods: {
        up() {
            this.counter++;
        },
        down() {
            this.counter--;
        }
    },
    computed: {
        counterClass() {
            if (this.counter > 0) {
                return 'fw-bolder text-info';
            } else if (this.counter < 0) {
                return 'fw-bolder text-danger';
            } else {
                return 'fw-bolder';
            }
        }
    }
});
app.mount('#app');
