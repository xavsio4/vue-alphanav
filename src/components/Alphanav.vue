<template>
  <div>
    <ul :class="direction + ' alphanav'">
      <li v-for="(item, index) in alphaList" :key="item">
        <a
          @click="alphanavClick(item, index, $event)"
          :class="selectedIndex === index ? 'active' : ''"
          >{{ item }}</a
        >
      </li>
      <li v-if="showClear">
        <a class="alphanav-clear-link" @click="unselect">{{ clearLinkText }}</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      actionUrl: "",
      selectedIndex: null, //null or 0 is A is default
      selectedAlpha: null,
      selectedAlphaMin: null
    };
  },
  props: {
    direction: {
      type: String,
      default: "horizontal"
    }, //horizontal or vertical
    clearLinkText: {
      type: String,
      default: "clr"
    },
    showClear: {
      type: Boolean,
      default: false
    },
    alphaList: {
      type: Array,
      default: () => [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ]
    }
  },
  methods: {
    alphanavClick(item, index) {
      this.selectedIndex = index;
      this.selectedAlpha = item;
      this.selectedAlphaMin = item.toLowerCase().trim();
      this.$emit("selected", { value: item });
    },
    unselect() {
      this.selectedIndex = null;
      this.selectedAlpha = null;
      this.selectedAlphaMin = null;
      this.$emit("clear");
    }
  }
};
</script>

<style scoped>
.vertical {
  flex-flow: nowrap;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column!important;
}
.horizontal {
  flex-flow: nowrap;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
}
.alphanav {
  border-radius: 2px;
  background-color: #fcfcfc;
  margin: 14px 0;
  padding: 4px 0;
  justify-content: space-evenly;
  list-style-type: none;
}
.alphanav li {
  margin: auto;
  padding: 0;
  flex-shrink: 2;
  flex-basis: auto;
}

.alphanav li a {
  margin: auto;
  padding: 2px 4px;
}
/*********** */

.alphanav li a,
.alphanav li a:after,
.alphanav li a:before {
  transition: all 0.5s;
}

.alphanav li a:hover,
.alphanav li a.active {
  color: #fff;
  background-color: #666;
  border-radius: 5px;
  margin-top: -4px;
}

.alphanav li a:hover:after {
  -webkit-animation: circle 1.5s ease-in forwards;
}

.alphanav-clear-link {
  color: #aaa;
}
</style>
