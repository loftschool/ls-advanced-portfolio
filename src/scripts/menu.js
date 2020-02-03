import Vue from 'vue';

new Vue ({
    el: '#welcome',
    data: {
        appearMenu: '',
    },
    methods:{
        hide(){
           this.appearMenu = 'none';
        },
        appear(){
            this.appearMenu = 'flex';
            
        }
    }
})
