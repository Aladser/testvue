const app = Vue.createApp({
    data() {
        return {
            header: 'Счетчик',
            counter: 0,
        }
    },
    methods: {
        inc() {
            this.counter++;
        },
        incdown() {
            if(this.counter > 0) {
                this.counter--;
            }
        }
    },
    computed: {
        counterClass() {
            if (this.counter > 0) {
                return 'text-center text-info';
            } else if (this.counter < 0) {
                return 'text-center text-danger';
            } else {
                return 'text-center';
            }
        }
    }
});
app.mount('#app');
