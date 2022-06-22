<template>
  <div class="about">
    <h1>This is an about page</h1>
    <HelloWorld />
  </div>
</template>

<script>
// Components
import HelloWorld from "../components/HelloWorld.vue";
import db from "@/config/firebase.js";
export default defineComponent({
  name: "AboutView",
  components: {
    HelloWorld,
  },
});
</script>
