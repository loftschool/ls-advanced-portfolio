// import Vue from 'vue';

// const skillIcon = {
//     template: "#skill-icon",
//     props: {
//       skillName: String,
//       skillPercent: Number
//     },
//     methods: {
//       drawColoredCircle() {
//         const circle = this.$refs["color-circle"];
//         const dashArray = parseInt(
//           getComputedStyle(circle).getPropertyValue("stroke-dasharray")
//         );
//         const percent = (dashArray / 100) * (100 - this.skillPercent);
  
//         circle.style.strokeDashoffset = percent;
//       }
//     },
//     mounted() {
//       this.drawColoredCircle();
//     }
// };
  
// new Vue({
//     el: "#skills",
//     template: "#skills",
   
//     data() {
//       return {
//           skillIcon:{}
//         }   
//     },
//     created() {
//       // const data = require("../data/skills.json");
//       this.skillIcon = data;
//     }
// });