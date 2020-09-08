# AJAX
Asynchronous Javascript And XML（异步 JavaScript 和 XML）通过在后台与服务器进行少量的数据交换，使网页实现异步更新。可以在不用刷新整个页面的情况下更新部分页面
# XMLHttpRequest
XMLHttpRequest是AJAX的基础，用于在后台与服务武器交换数据，以达到不用重新加载整个页面的情况下，对部分页面进行更新


<br />Get还是post？（摘自菜鸟教程）：
<br />与 POST 相比，GET 更简单也更快，并且在大部分情况下都能用。
<br />然而，在以下情况中，请使用 POST 请求：
1. 无法使用缓存文件（更新服务器上的文件或数据库）
2. 向服务器发送大量数据（POST 没有数据量限制）
3. 发送包含未知字符的用户输入时，POST 比 GET 更稳定也更可靠

# CORS
Cross-origin resource sharing（跨域资源共享）允许浏览器向其他跨源服务器发出XMLHttpRequest请求，克服了AJAX只能同源使用的限制


**简单请求：**
1. 请求方法是`get/post/head`
2. HTTP的头信息不超出以下几种字段：`Accept/Accept-Language/Content-Language/Last-Event-ID/Content-Type`

浏览器直接发出简单请求，增加一个Origin字段，用于说明本次请求来自哪个源。如果Origin指定的源在服务器的许可范围内，服务器会返回一个http回应，其中包含头信息`Access-Control-Allow-Origin`。如果Origin指定的源不在服务器许可范围内，则服务器返回的http回应不会包含头信息的`Access-Control-Allow-Origin`。


**非简单请求：**
1. 对服务器有特殊要求的请求，例如`put/delete`

非简单请求在与服务器正式通信前，会增加一次http查询请求，称为预检请求（preflight）。

浏览器先询问服务器，当前网页所在的域名是否在服务器的许可名单之中，以及可以使用哪些HTTP动词和头信息字段。只有得到肯定答复，浏览器才会发出正式的XMLHttpRequest请求，否则就报错。

预检请求除了需要加入Origin字段，还需加入：
1. `Access-Control-Request-Method`：列出浏览器的CORS请求会用到哪些HTTP方法
2. `Access-Control-Request-Headers`： 一个逗号分隔的字符串，指定浏览器CORS请求会额外发送的头信息字段

当服务器收到预检请求后，会检查这三个字段，如果允许跨源请求，就会返回包含头信息`Access-Control-Allow-Origin`的http回应。

如果服务器否定了预检请求，则会返回没有任何CORS相关的头信息字段的http回应，表示服务器不同意预检请求。

一旦服务器通过了预检请求，则在预检请求的有效期内，以后每次浏览器正常的CORS请求，就都跟简单请求一样。