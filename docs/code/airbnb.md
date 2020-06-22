|序号|说明|解决方法|解决前|解决后|出现次数|
|:---|:---|:---|:---|:---|:---|
|1|`'xxx' (operation symbol) should be placed at the beginning of the line.`|挪至下一行开头|`'This web app is being served cache-first by a service ' +`</br>`'worker. To learn more, visit https://bit.ly/CRA-PWA',`|`'This web app is being served cache-first by a service '`</br>`+ 'worker. To learn more, visit https://bit.ly/CRA-PWA',`|5|
|2|`'xxx' (global variable) is not defined.`|comment global variable in the file||`/* global window */`|3|
|3|`Missing trailing comma.`|add comma at the end|`'No internet connection found. App is running in offline mode.'`|`'No internet connection found. App is running in offline mode.',`|5|
|4|`'xxx' (funtion) was used before it was defined.`|define 'xxx' in the front|||2|
|5|`Expected parentheses around arrow function argument.`|add parentheses|`.catch(error => {`|`.catch((error) => {`|6|
|6|`Assignment to property of function parameter 'xxx' (function).`|use another variable to get a reference to the DOM element and then modify that|`.then((registration) => {`</br>`registration.onupdatefound = () => {|`|`.then((registration) => {`</br>`const reg = registration;`</br>`reg.onupdatefound = () => {`|1|
|7|`More than 1 blank line not allowed.`|delete blank line|||1|
|8|`Parsing error: Unexpected token <`|**tried to install plugins required for airbnb-eslint-config but failed**
|9|`Expected indentation of 0 spaces but found 1.`|delete the space|||1|
|10|`Newline required at end of file but not found.`|add a new line at the end|||1|
|11|`Expected linebreaks to be 'LF' but found 'CRLF'.`|switch CRLF to LF|||1|
|12|`Missing semicolon.`|add semicolon|`}`|`};`|1|
|13|`Strings must use singlequote.`|change from double quote to single quote|`"airbnb-base"`|`'airbnb-base'`|1|
|14|`Unnecessarily quoted property 'xxx' found.`|remove quotations|`"extends"`|`extends`|1|
|15|`Extra space after key 'xxx'.`|delete extra space|`extends :`|`extends:`|1|
|16|`Operator '=' must be spaced.`|add extra space|`module.exports={`|`module.exports = {`|1|
|17|`Parsing error: Unexpected token =`