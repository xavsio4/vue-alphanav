# vue-alphanav
Alphabetical Navigation Bar using flexbox made with Vue.
![vue-alphanav Gif](demo/demo.gif)

This bar can be displayed horizontaly or verticaly. Bind any action to the click event (@selected). It will adapt to the container you'll put it in. 

It seems to me that this is a better navigation, then a default table/pagination, for an address directory, because you will never know on which page is the person you are looking for.

in order to install it in your project
```
npm install vue-alphanav (or npm i vue-alphanav)

```

then import the component where you need it

```
<template>
<div>
  <alphanav 
  :showClear=true 
  clearLinkText="reset"
  direction="horizontal" 
  @clear="clear" 
  @selected="selectedAlpha"></alphanav>

  <alphanav :alphaList="['A-C','D-E','F-H','I-K','L-N','O-Q','R-T','U-W','X-Z']" />

  <>
</div>
</template>

<script>
import Alphanav from "vue-alphanav"

export default {
components: {
  alphanav
},
methods: {
  YourMethod(selectedAlpha) {
    console.log(selectedAlpha.value) //the letter you've clicked on
  }
  clear() {
    //your actions when clear
  }
}
}

</script>
<style scoped>
</style>

```

## Available props

| Prop                  | Type                        | Required | Default   | Description |
|-----------------------|-----------------------------|----------|-----------|-------------|
| direction                | String |     NO     | horizontal      | wether the nav list is displayed vertically or horizontally. Values are: horizontal/vertical|
| showClear                | Bolean |     NO     | false      | Show a clear/reset link at the end of the navigation. |
| clearLinkText                | String |     NO     | 'clr'      | Text of the reset/clear link |
| alphaList                | Array |     NO     | 'A','B','C',....'Z'      | list of alphanav links. It can be anything to be displayed as long as it is in an Array |

Events
------

| Name              | Params                       | Info                                                  |
| ----------------- | ---------------------------- | ----------------------------------------------------- |
| **@selected**         | *item*: (selectedAlpha in our example) item.value         | Triggered on any letter clicked              |
| **@clear**         | none        | Clears the selection in the alphanav              |

This is the demo in the awesome Codesandbox\
[![Edit Alphanav Demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/alphanav-demo-uvgk2?fontsize=14)


## Version History
- 1.2.0 Added alphaList as a property to change the nav links
- 1.1.0 Added clear/reset feature
- 1.0.9 First Working Version. Demo on Codesandbox