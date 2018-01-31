<template>
    <div class="intro">
        <p> This is an small app. {{ helptext }} </p>
    </div>
</template>


<script>
export default
{
    name: "intro",
    data ()
    {
        return {
            helptext: "I will do a simple todolist, just easy practice anyway...",
        }
    },
}
</script>