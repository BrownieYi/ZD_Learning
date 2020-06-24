# rules


|level|key|value|
|:---|:---|:---|
|/a|match.url|match.path|
|1|/users|/users|
|2|/users/xmy|/user/:user|

## 1
``` js
<Link to={`${match.url}`}>
<Route path={match.path}>
```
## 2
``` js
<Link to={`${match.url}/components`}>
<Route path={`${match.path}/:topicId`}>
```


## importance of <Router>: keeps UI and url in sync