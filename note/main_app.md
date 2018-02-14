# Main app

一些問題。

1. 注意 DOM 行為的單位與對應事件：例如要提交一個表單，執行提交的 DOM 是 `<form>` 而不是 `<input type="submit">`。如果在錯誤的 `<input type="submit">` 下指令，那麼 DOM 就沒有辦法執行指定的事件了。請參考 [v-on:submit.prevent not stopping form submission](https://stackoverflow.com/questions/40837936/v-onsubmit-prevent-not-stopping-form-submission)

2. What the hell is "Elements in iteration expect to have 'v-bind:key' directives"? [What?](https://vuejs.org/v2/guide/list.html#v-for-with-a-Component)