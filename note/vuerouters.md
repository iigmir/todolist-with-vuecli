# Mutiple Vue routers

有時候，我們不會只有一個組件（或著說，不會只有一個 `.vue` 檔要用），屆時要怎麼做呢？答案是[命名視圖](https://router.vuejs.org/zh-cn/essentials/named-views.html)。

1. 在 App.vue 裡面引入多個 `<router-view name="apptitle"></router-view>` 組件：`<router-view />` 只會載入一個！
2. 去 `src/router/index.js` 修改 `component` 為 `components`。
3. `components` 裡面引入需要的組件。請注意要把組件本身引進去。