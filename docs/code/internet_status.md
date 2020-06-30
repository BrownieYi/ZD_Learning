# 服务器返回状态码

## 2xx

> 请求有响应

## 3xx

> 重定向问题

## 4xx

> 客户端请求错误

|状态码|原因|实例|
|:---|:---|:---|
|404|服务器找不到请求的网页||

## 5xx

> 服务端请求错误

# http头信息

## Request URL

`The url of the request.`

## Request Method

`The requestr method. (get, post, etc.)`

## Status Code

`It indicates whether a specific HTTP request has been successfully completed. (参考‘服务器返回状态码’)`

## Remote Address

`The IP address of the client.`

## Referrer Policy

`It controls how much referrer information (sent via the Referer header) should be included with requests.`
<br>Default: no-referrer-when-down-grade

## 请求参数
### param payload

>用于post
### Query String Parameters
>用于get
Content-Length: `It indicates the size of the entity-body, in bytes, sent to the recipient.`

Content-Range: `It indicates where in a full body message a partial message belongs.`

## Content Type
`It is used to indicate the media type of the source.`

## CORS 
`Cross-origin Resource Sharing, gives a web app at one origin the access to a different origin.`

