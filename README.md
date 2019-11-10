# vue-alphanav
Alphabetical Navigation Bar using flexbox made with Vue.

This bar can be displayed horizontaly or verticaly. Bind any action to the click event (@selected). It will adapt to the container you'll put it in. 

in order to install it in your project
```
npm install vue-alphanav (or npm i vue-alphanav
```

then import the component where you need it

```
<template>
  <alphanav direction="horizontal" @selected="YourMethod"/>
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

Events
------

| Name              | Params                       | Info                                                  |
| ----------------- | ---------------------------- | ----------------------------------------------------- |
| **@selected**         | *item*: (selectedAlpha in our example) item.value         | Triggered on any letter clicked              |

As it is still under developpement, please be patient for more.
