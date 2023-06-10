<template>
    <div>
        <input type="text" v-model="value" />
        <input type="button" @click="$emit('text', value)"> </button> 
    </div>
</template>

<script>
export default{
    name: "MyText",
    data: function() {
        return { value: '' };
    }
}
</script>

<style scoped>
  div { border: 1px solid gray; padding: 0 20px 20px 20px; margin-top: 10px; }
  input { padding: 5px; margin-right: 5px; }
  button { padding: 0.4em 1em; margin-right: 5px; }
</style>
