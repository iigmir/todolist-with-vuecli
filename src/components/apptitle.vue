<template>
    <div class="hello">
        <h1>
            A VueJS app with <span class="ani">{{ current_message }}</span>!
        </h1>
    </div>
</template>

<script>
export default
{
    name: "apptitle",
    data () {
        return {
            msg: ["todo list","Hello World","MVVM","componment","webpack"],
            current_message: "app",
            current_msg_num: 0,
            helptext: "I will do a simple called todolist, just easy practice anyway...",
        }
    },
    methods: {
        item_change()
        {
            let curr_msg_pos =  this.current_msg_num % this.msg.length;
            this.current_message = this.msg[ curr_msg_pos ];
            this.current_msg_num += 1;
        }
    },
    mounted ()
    {
        let self = this;
        setInterval( () => self.item_change() , 1500);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.ani
{
    color:#FF6421;
}
</style>