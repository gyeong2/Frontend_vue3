<template>
    <div class="counter">
        <button type="button" v-on:click="plus">++</button>
    </div>
</template>

<script>
export default {
    name: 'CounterView',
    data() {
      return {
        value: 0
      };
    },
    methods: {
        plus() {
            this.value++;
        }
    }
}
</script>