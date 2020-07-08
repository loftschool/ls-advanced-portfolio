import Vue from "vue";
import axios from "axios";

const baseUrl = process.env.BASE_URL;

axios.defaults.baseURL = baseUrl;

const btns = {
  template: "#slider-btns",
  methods: {
    slide(direction) {
      switch (direction) {
        case "next":
          break;
        case "prev":
          break;
      }
    }
  }
};

const thumbs = {
  template: "#slider-thumbs",
  props: {
    works: Array,
    currentWork: Object
  }
};

const tags = {
  template: "#slider-tags",
  props: {
    tags: Array
  }
};

const info = {
  template: "#slider-info",
  components: { tags },
  props: {
    currentWork: Object
  },
  computed: {
    tagsArray() {
      return this.currentWork.techs.split(",");
    }
  }
};

const display = {
  components: { btns, thumbs },
  props: {
    works: Array,
    currentWork: Object,
    currentIndex: Number
  },
  computed: {
    reversedWorks() {
      const works = [...this.works];
      return works.reverse();
    }
  },
  template: "#slider-display"
};

new Vue({
  el: "#works-slider-component",
  data() {
    return {
      works: [],
      currentIndex: 0
    };
  },
  components: {
    display,
    info
  },
  computed: {
    currentWork() {
      return this.works[this.currentIndex];
    }
  },
  methods: {
    handleSlide(direction) {
      switch (direction) {
        case "next":
          this.currentIndex++;
          break;
        case "prev":
          this.currentIndex--;
          break;
      }
    },
    slideDirectly(workToShow) {
      this.works.forEach((item, index) => {
        if (workToShow.id === item.id) {
          this.currentIndex = index;
        }
      });
    },
    makeInfititeLoopForCurIndex(value) {
      const worksAmount = this.works.length - 1;

      if (value > worksAmount) this.currentIndex = 0;
      if (value < 0) this.currentIndex = worksAmount;
    },
    async fetchWorks() {
      const { data: works } = await axios.get("/works/1");
      this.works = works;
    }
  },
  watch: {
    currentIndex(value) {
      this.makeInfititeLoopForCurIndex(value);
    }
  },
  async mounted() {
    await this.fetchWorks();
  },
  template: "#slider-container"
});
