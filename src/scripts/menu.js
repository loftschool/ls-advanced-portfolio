import Vue from 'vue';

new Vue ({
    el: '#welcome',
    data: {
        appearMenu: '',
    },
    methods:{
        hide(){
           this.appearMenu = false;
        },
        appear(){
            this.appearMenu = true;
        }
    }
});
