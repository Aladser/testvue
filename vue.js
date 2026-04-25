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
            if(this.counter > 0) {
                this.counter--;
            }
        }
    }
});
app.mount('#app');
//console.log(Vue);