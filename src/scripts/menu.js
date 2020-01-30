import Vue from 'vue';

new Vue ({
    el: '#welcome',

    data: {
        appearMenu: '',
    },

    methods:{
        hide(newStyle){
            this.appearMenu = newStyle
        },
        appear(newStyle){
            this.appearMenu = newStyle
        }
    }
})
