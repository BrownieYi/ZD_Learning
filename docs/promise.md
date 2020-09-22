# Promise
Promise的三种状态：pending，resolve，reject。

由pending变成resolve或者reject，只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。且一旦状态改变，就不会再变，任何时候都可以得到这个结果。

```js
const p1 = new Promise(function (resolve, reject) {
  // ...
});

const p2 = new Promise(function (resolve, reject) {
  // ...
  resolve(p1);
})
```
在上面的代码中，p2的resolve方法将p1作为参数，所以p1的状态将决定p2的状态。

## then
当Promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数（rejected的回调函数是optional）。
```js
promise.then(function(value) {
  // success
}, function(error) {
  // failure
});
```
then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行。

then方法返回的是一个新的Promise实例。因此可以采用链式写法，即then方法后面再调用另一个then方法。

## catch
`Promise.catch()`方法是`.then(null, rejection)`或`.then(undefined, rejection)`的别名，用于指定发生错误时的回调函数。

## finally
finally()方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。该方法是 ES2018 引入标准的。
```js
promise
.then(result => {···})
.catch(error => {···})
.finally(() => {···});
```
上述代码在无论什么情况下都会执行finally方法指定的回调函数。

## all
```js
const p = Promise.all([p1, p2, p3]);
```
`p`的状态由`p1`，`p2`，`p3`决定，分两种情况：
1. `p1`，`p2`，`p3`都是fulfilled状态，则`p`也为fulfilled状态。
2. `p1`，`p2`，`p3`只要有一个是rejected状态，则`p`为rejected状态。

## race
```js
const p = Promise.race([p1, p2, p3]);
```
`p1`，`p2`，`p3`中有一个实例最先返回状态的话，p的状态就跟着改变。

## allSettled
Promise.allSettled()方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例。只有等到所有这些参数实例都返回结果，不管是fulfilled还是rejected，包装实例才会结束。
返回的新的promise实例结束后状态永远是fulfilled，收到的参数会是一个包括了每个成员状态的数组。

## any
只有有一个参数实例变成了fulfilled，那整个包装实例就会变成fulfilled。

## resolve
将现有对象转为promise对象
```js
Promise.resolve('foo')
// 等价于
new Promise(resolve => resolve('foo'))
```
`promise.resolve()`分几种情况:

1. 若参数为promise实例，则`promise.resolve()`不会对其做出改变
2. 若参数为thenable对象，则会将其变成promise对象，然后立即执行它的then方法
3. 若参数不是具有then()方法的对象，或根本就不是对象，则会返还一个新的promise对象，状态为resolved。
4. 若不带有任何参数，则返回一个状态为resolved的promise对象

## reject
Promise.reject(reason)方法也会返回一个新的 Promise 实例，该实例的状态为rejected。

参数会变成reject的理由

```js
//1
doSomething()
  .then(function () {
    return doSomethingElse();
  })
  .then(finalHandler);
//结构
doSomething
|----------|
           doSomethingElse(undefined)
           |----------|
                      finalHandler(resultOfDoSomethingElse)
                      |----------|
//2
doSomething()
  .then(function () {
    doSomethingElse();
  })
  .then(finalHandler);
//结构
doSomething
|----------|
           doSomethingElse(undefined)
           |----------|
           finalHandler(undefined)
           |----------|
//3
doSomething()
  .then(doSomethingElse())
  .then(finalHandler);
//结构
doSomething
|----------|
doSomethingElse(undefined)
|-----------------------------|
           finalHandler(resultOfDoSomethingElse)
           |---------------------|
//4
doSomething()
  .then(doSomethingElse)
  .then(finalHandler);
//结构
doSomething
|----------|
           doSomethingElse(resultOfDoSomething)
           |----------|
                      finalHandler(resultOfDoSomethingElse)
                      |----------|
```
