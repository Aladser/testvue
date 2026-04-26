let counter_dom = document.querySelector('#counter');

const app = Vue.createApp({
    data() {
        return {
            header: 'Привет, мир!',
            counter: 0,
        }
    },
    methods: {
        inc() {
            this.counter++;
        },
        incdown() {
            console.log(counter_dom);
            if(this.counter > 0) {
                this.counter--;
            }
        }
    },
    computed: {
        counterClass() {
            if (this.counter > 0) {
                return 'text-info';
            } else if (this.counter < 0) {
                return 'text-danger';
            } else {
                return '';
            }
        }
    }
});
app.mount('#app');
//console.log(Vue);