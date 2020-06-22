|序号|遇到问题|解决方法|
|:---|:---|:---|
|1|eslint版本不兼容|手动卸载`eslint`然后下载`eslint6.8.0`|
|2|eslint无法识别JSX等|在`.eslintrc.js`中在`extends`上方加入一行`"parser": "babel-eslint",`
|3|babel是什么|Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.|