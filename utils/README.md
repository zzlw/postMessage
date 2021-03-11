```js
// 在浏览器中屏蔽敏感字
document.documentElement.innerHTML = document.documentElement.innerHTML.replace(/要屏蔽的关键字/g, '')
```