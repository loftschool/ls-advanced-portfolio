import Vue from 'vue';
import Flickity from 'vue-flickity';

new Vue({
    el:'.comments-slider',
    template: "#comments",
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
            this.checkArrows
        },
        back(){
            this.$refs.flickity.back();
            this.checkArrows
        },
        checkArrows(){
            let backButton = this.$el.querySelector('.back');
            let nextButton = this.$el.querySelector('next');
            if(this.$refs.flickity.selectedIndex() == 0){
                backButton.disabled = true;
            } else if(this.$refs.flickity.selectedIndex() == this.$refs.flickity.slides().length) {
                nextButton.disabled = true;
            } else {
                backButton.disabled = false;
                nextButton.disabled = false;
            }
        },
        makeArrayWithRequiredImages(data){
            console.log(data)
            return data.map(item =>{
                console.log(item)
                const requirePic = require(`../images/content/${item.icon}.png`);

                item.pohot = requirePic;

                return item;
            });
        }
    },
    created(){
        const data = require('../data/comments.json');
        this.contacts = this.makeArrayWithRequiredImages(data);
    }
});