# Hello world app

一開始 `vue init` 的東西就是 Hello World。在 `.vue` 裡面，大多數寫法和毫無設定的 Vue 差不多。不過 instance 的形式有點不一樣，要注意……

接著，這個 component 最重要的問題是如何定時更改……問題的訣竅，是利用 `setInterval` 永遠定時的特性，還有 JavaScript 函式的 `this` 是透過呼叫所在地的作用域參照，這兩個特質來完成。

最後有個與前幾天面試相關的簡答：

```<style scope lang="scss">```

* `scope` 的意思是：`style` 的只會在 `.vue` 裡面做動。 <blockquote>Add "scoped" attribute to limit CSS to this component only</blockquote>
* `lang`  可以讓你使用喜歡的預處理器，前提是要安裝該處理器。

之後再說說 Vue Router？