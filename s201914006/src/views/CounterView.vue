<template>
    <div id="CounterView">
        <h3>{{ value }}</h3>
        <CounterComponent />
    </div>
</template>

<script>
import CounterComponent from '../components/CounterComponent.vue';
export default {
    name: 'CounterView',
    components: {
        CounterComponent
    }
}
</script>