<template>
     <div class="box">
      <h1>radio</h1>
      <p>{{ visible }}</p>
      <hr />
      <label>
        <input type="radio" v-bind:value="true" v-model="visible" />true
      </label>
      <label>
        <input type="radio" v-bind:value="false" v-model="visible" />false
      </label>
      <div id="hello" v-if="visible">Hello Vue.js</div>
  </div>
</template>

<script>
    export default{
      data() {
        return {
          visible: false
        };
      }
    };
</script>

<style scoped>
    div.box { margin: 20px auto; padding: 20px; width: 300px;
          border: 1px solid gray; box-shadow: 5px 5px 5px #aaa; }
    p { font-size: 15pt; color: blue; }
    input { width: 30px; height: 30px;  }
    div#hello { margin-top: 20px; padding: 20px;
      background-color: lightGreen; border: 1px solid gray;
      text-align: center; font-size: 20pt; }
  </style>