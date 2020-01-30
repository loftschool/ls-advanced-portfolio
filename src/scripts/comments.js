import Vue from 'vue';
import Flickity from 'vue-flickity';

new Vue({
    el:'.contacts',
    components:{
        Flickity
    },

    data(){
        return{
            flikityOptions:{
                initialIndex: 0,
                prevNextButtons: false,
                pageDots: false,
                wrapAround: false,
                groupCells: true,
                freeScroll: false,
                contain: true
            },
            contacts:[]
        }
    },

    methods:{
        next(){
            this.$refs.flickity.next();
            this.CheckArrows
        },
        back(){
            this.$refs.flickity.back();
            this.CheckArrows
        },
        CheckArrows(){
            let backButton = this.$el.querySelector('.back');
            let nextButton = this.$el.querySelector('next');
            if(this.$refs.flickity.selectedIndex() == 0){
                backButton.disabled = true;
            } else if(this.$refs.flickity.selectedIndex() == this.$refs.flickity.slides() ) {
                nextButton.disabled = true;
            } else {
                backButton.disabled = false;
                nextButton.disabled = false;
            }
        },
        makeArrayWithRequiredImages(data){
            return data.map(item =>{
                const requirePic = require(`../images/content/${item.photo}`);

                item.pohot = requirePic;

                return item;
            });
        }
    },
    created(){
        const data = require('../data/contacts.json');
        this.contacts = this.makeArrayWithRequiredImages(data);
    }
});