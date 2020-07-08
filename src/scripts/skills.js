import Vue from "vue";
import axios from "axios";

const baseUrl = process.env.BASE_URL;

axios.defaults.baseURL = baseUrl;

const skill = {
  template: "#skill",
  props: {
    skillName: String,
    skillPercents: Number
  },
  methods: {
    drawCircle() {
      const circle = this.$refs["color-circle"];
      const dashOffset = parseInt(
        getComputedStyle(circle).getPropertyValue("stroke-dasharray")
      );
      const percent = (dashOffset / 100) * (100 - this.skillPercents);

      circle.style.strokeDashoffset = percent;
    }
  },
  mounted() {
    this.drawCircle();
  }
};

const skillsRow = {
  template: "#skills-row",
  components: {
    skill
  },
  props: {
    skills: Array,
    category: Object
  },
  computed: {
    categorySkills() {
      const matchSkillAndCatId = skill => skill.category === this.category.id;
      return this.skills.filter(matchSkillAndCatId);
    }
  }
};

new Vue({
  el: "#skills-component",
  components: {
    skillsRow
  },
  data: {
    skills: [],
    categories: []
  },
  methods: {
    async fetchCategories() {
      const { data: categories } = await axios.get("/categories/1");
      this.categories = categories;
    },
    async fetchSkills() {
      const { data: skills } = await axios.get("/skills/1");
      this.skills = skills;
    }
  },
  async created() {
    await this.fetchCategories();
    await this.fetchSkills();
  },
  template: "#skills-list"
});
