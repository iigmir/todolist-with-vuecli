<template>
    <div class="todolist">
        <p> This is an small app. I will do a simple {{ helptext }}, just easy practice anyway...</p>
        <div class="app">
            <form
            v-on:submit.prevent="sent_text" >
                <label>
                    <input v-model="panding_text"
                    name="panding_text" type="text"
                    placeholder="Just type something" >
                </label>
                <input type="submit" value="Sent">
            </form>
            <ul>
                <li
                v-for="(la_item, la_index) in list_array"
                v-bind:key="la_item.id" >
                    <label
                    v-bind:class="{ pand_del : bind_label_class(la_index)}">
                        <input
                        type="checkbox"
                        v-model="panding_delete_index"
                        v-bind:value="la_index" >
                        <span> {{ la_item }} </span>
                    </label>
                </li>
            </ul>
            <button
            v-on:click="refresh_array()">
                Clear selected item
            </button>
        </div>
    </div>
</template>

<script>
export default
{
    name: "intro",
    data () {
        return {
            helptext: "thing",
            panding_text: "Example Text",
            list_array:["foobar"],
            panding_delete_index:[]
        }
    },
    methods: {
        sent_text()
        {
            this.list_array.push( this.panding_text );
        },
        bind_label_class( blc_input )
        {
            return this.panding_delete_index.includes( blc_input );
        },
        refresh_array()
        {
            let new_array = [];
            this.list_array.forEach( ( elem ,indx) => {
                if( !this.panding_delete_index.includes(indx) )
                {
                    new_array.push( elem );
                }
            });
            this.list_array = new_array;
            this.panding_delete_index = [];
        }
    }
}
</script>

<style lang="scss" scope>
.todolist
{
    .app
    {
        ul
        {
            max-width: 480px;
            margin: 1rem auto;
            padding: 0;
            text-align: left;
            li
            {
                list-style: none;
                padding:0.5rem;
                label
                {
                    display: block;
                    width: 100%;
                }
                .pand_del { text-decoration-line: line-through; }
            }
        }
    }
}
</style>