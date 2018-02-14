<template>
    <div class="intro">
        <p> This is an small app. I will do a simple {{ helptext }}, just easy practice anyway...</p>
    </div>
</template>

<script>
export default
{
    name: "intro",
    data () {
        return {
            helptext: "thing",
        }
    },
    methods:{
        //
    },
    mounted () {
        //
    }
}
</script>