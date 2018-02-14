<template>
    <div id="app">
        <router-view name="apptitle"></router-view>
        <router-view name="todolist"></router-view>
    </div>
</template>

<script>
export default
{
    name: 'App'
}
</script>

<style lang="scss">
#app
{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    h1
    {   // H1 text
        color:rgb(128, 128, 0);
    }
}
</style>