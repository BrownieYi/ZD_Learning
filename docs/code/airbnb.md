|序号|说明|解决方法|解决前|解决后|出现次数|
|:---|:---|:---|:---|:---|:---|
|1|`'xxx' (operator) should be placed at the beginning of the line.`|挪至下一行开头|`'This web app is being served cache-first by a service ' +`</br>`'worker. To learn more, visit https://bit.ly/CRA-PWA',`|`'This web app is being served cache-first by a service '`</br>`+ 'worker. To learn more, visit https://bit.ly/CRA-PWA',`|5|
|2|`'xxx' (global variable) is not defined.`|comment global variable in the file||`/* global window */`|7|
|3|`Missing trailing comma.`|add comma at the end|`'No internet connection found. App is running in offline mode.'`|`'No internet connection found. App is running in offline mode.',`|6|
|4|`'xxx' (funtion) was used before it was defined.`|define 'xxx' in the front|||2|
|5|`Expected parentheses around arrow function argument.`|add parentheses|`.catch(error => {`|`.catch((error) => {`|6|
|6|`Assignment to property of function parameter 'xxx' (function).`|use another variable to get a reference to the DOM element and then modify that|`.then((registration) => {`</br>`registration.onupdatefound = () => {`|`.then((registration) => {`</br>`const reg = registration;`</br>`reg.onupdatefound = () => {`|1|
|7|`More than 1 blank line not allowed.`|delete blank line|||2|
|8|`Parsing error: Unexpected token <`|在`.eslintrc.js`中在`extends`上方加入一行`"parser": "babel-eslint",`|
|9|`Expected indentation of x spaces but found x.`|delete the space|||28|
|10|`Newline required at end of file but not found.`|add a new line at the end|||4|
|11|`Expected linebreaks to be 'LF' but found 'CRLF'.`|switch CRLF to LF|||3|
|12|`Missing semicolon.`|add semicolon|`}`|`};`|8|
|13|`Strings must use singlequote.`|change from double quote to single quote|`"airbnb-base"`|`'airbnb-base'`|12|
|14|`Unnecessarily quoted property 'xxx' found.`|remove quotations|`"extends"`|`extends`|1|
|15|`Extra space after key 'xxx'.`|delete extra space|`extends :`|`extends:`|1|
|16|`Operator '=' must be spaced.`|add extra space|`module.exports={`|`module.exports = {`|1|
|17|`'React' is defined but never used.`|Added plugin using the tutorial https://medium.com/@RossWhitehouse/setting-up-eslint-in-react-c20015ef35f7|
|18|`Useless path segments for "xxx"`|change path segments|`import lol from '../../src/image/league.jpg';`|`import lol from '../image/league.jpg';`|3|
|19|`Missing space before opening brace.`|add space|`  componentDidMount(){`|`  componentDidMount() {`|5|
|20|`Unexpected var, use let or const instead.`|change var to const or let|`var scrollComponent = this;`|`const scrollComponent = this;`|3|
|21|`Missing space before function parentheses.`|add space|`function(e)`|`function (e)`|1|
|22|`'x' is declared but its value is never read.`|remove x|`function (e)`|`function ()`|1|
|23|`Unexpected function expression.`|use arrow callback|`function ()`|`() =>`|1|
|24|`Expected blank line between class members.`|add new line|||3|
|25|`Expected space(s) before/after "xxx".`|add spaces|||2|
|26|`Expected 'this' to be used by class method 'xxx' (function).`|bind xxx to this|`scrollFunction() {`|`scrollFunction = () => {`|2|
|27|`Trailing spaces not allowed.`|delete trailing space|||3|
|28|`Operator 'x' must be spaced.`|space x|`document.documentElement.scrollTop=0;`|`document.documentElement.scrollTop = 0;`|1|
|29|`Unexpected tab character.`|in file .eslintrc.js, in rules set 'no-tabs' to 0|||1|
|30|`Unknown property 'class' found, use 'className' instead`|change class to className|`<div class="games">`|`<div className="games">`|3|
|31|`This line has a length of 168. Maximum allowed is 100.`|disable it|||1|
