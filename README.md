# manage-system
 后台管理，页面主要为表单和表格

```
npm create umi

? Select the boilerplate type (Use arrow keys)
  ant-design-pro  - Create project with a layout-only ant-design-pro boilerplate, use together with umi block.
> app             - Create project with a simple boilerplate, support typescript.
  block           - Create a umi block.
  library         - Create a library with umi.
  plugin          - Create a umi plugin.

? Select the boilerplate type app
? Do you want to use typescript? No
? What functionality do you want to enable? dva
   create package.json
   create src\assets\yay.jpg
   create .gitignore
   create .editorconfig
   create .env
   create .eslintrc
   create .prettierignore
   create .prettierrc
   create .umirc.js
   create mock\.gitkeep
   create src\app.js
   create src\global.css
   create src\layouts\__tests__\index.test.js
   create src\layouts\index.css
   create src\layouts\index.js
   create src\models\.gitkeep
   create src\pages\__tests__\index.test.js
   create src\pages\index.css
   create src\pages\index.js
   create webpack.config.js
✨ File Generate Done
```

# h1

## h2

### h3

#### h4

##### h5

###### h6

> code层级1
>> code层级2
>>> code层级3

<div>
    <div>111</div>
    <div>222</div>
    <div>333</div>
</div>


// javascript代码
```javascript
var num = 0;
for (var i = 0; i < 5; i++) {
    num+=i;
}
console.log(num);
```

[百度123](http://www.baidu.com/" 百度一下"){:target="_blank"}   

![](./01.png '描述')
![name][01]
[01]: ./01.png '描述'

[![](./01.png '百度')](http://www.baidu.com){:target="_blank"}        // 内链式

[![](./01.png '百度')][5]{:target="_blank"}                       // 引用式
[5]: http://www.baidu.com 

1. one
2. two
3. three

* one
* two
* three

1. one
   1. one-1
    1. two-2
2. two 
    * two-1
    * two-2

- [x] 选项一
- [ ] 选项二

*斜体* _斜体_ **加粗** ***加粗+斜体*** **_加粗+斜体_** ~~删除线~~

<i>斜体</i> <b>加粗</b> <em>强调</em> Z<sup>a</sup> Z<sub>a</sub> <kbd>Ctrl键</kbd> <xxx@outlook.com>

<pre>
    hello world 
        hi
    hello world 
</pre>

***
---
* * *

***

Markdown[^1]

[公式标题锚点](#1)