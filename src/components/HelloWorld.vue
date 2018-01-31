<template>
    <div class="hello">
        <h1>
            A {{ current_message }}  with VueJS!
        </h1>
        <p> {{ helptext }} </p>
    </div>
</template>

<script>
export default
{
    name: "HelloWorld",
    data ()
    {
        return {
            msg: ["todo list","Hello World","basic MVC","componment","webpack"],
            current_message: "app",
            current_msg_num: 0,
            helptext: "I will do a simple called todolist, just easy practice anyway...",
        }
    },
    methods: {
        item_change()
        {
            this.current_message = this.msg[ this.current_msg_num % this.msg.length ];
            this.current_msg_num += 1;
        }
    },
    mounted ()
    {
        let self = this;
        setInterval(function()
        {
            self.item_change();
        }, 3000);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a
{
    /*color: #2c3e50;*/
    color:pink;
}
</style>