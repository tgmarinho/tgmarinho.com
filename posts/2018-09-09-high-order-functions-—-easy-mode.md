---
title: High Order Functions — Easy Mode
description: I intend to explain a little bit about High Order Functions with Javascript.
date: '2018-09-09 03:50:00'
thumbnail: /assets/img/high-order-function.png
category: js
background: '#D6BA32'
---
I intend to explain a little bit about High Order Functions with Javascript.

By the way, A higher order function is a function that takes a function as an argument, or returns a function. This is it, no big deal.

This one allows JS to be more [flexible and pluggable.](https://eloquentjavascript.net/05_higher_order.html)

Look at code bellow, it is easy, I declare three constants which receive a function that displays to the user an alert message that awaits for an answer.

```
const fnName = () => prompt('Tell me your name.') 
```

```
const fnMiddle = () => prompt('Tell me your middle name.') 
```

```
const fnLastName = () => prompt('Tell me your last name.')
```

Then, if you run fnName() in the console, it will appear a small window (modal) like that:

![](/assets/img/image-prompt.png)

When you type your name and click OK, then it finalizes the process.

So, now I have bellow a new function that receives functions, look it:

```
const withNameComplete = (...funcs) => funcs.map(func => func()).join(' ')
```

Thankfully[ ES06++](https://github.com/tc39) I may use this: …funcs (destructuring arguments), receive a lot of arguments inside of Array, then I have an array of functions, though.

In the code above the const withNameComplete receive another function that makes anything for us. But I have a complexity with Map in addition to HOC.

This function can receives a lot of arguments like: withNameComplete(a,b,c,d,e,f), and I have Array(a,b,c,d,e,f) when I use …funcs like my example above.

```
// example declare 3 funcs and I use it passing to withNameComplete

const fnName = () => prompt('Tell me your name')
const fnMiddle = () => prompt('Tell me your middle name')
const fnLastName = () => prompt('Tell me your lastname')

const withNameComplete = (…funcs) => console.log(funcs);

withNameComplete(fnName, fnMiddle, fnLastName)
```

The code above produces that:

![](/assets/img/array-sample.png)

Above I'm consoling an array with three functions as I said.

So, all I need to do is calling each function inside of the array.

Now I have a bunch of alternatives, first I use Map in the second way I use Reduce. Please, If you have a better solution I would love knowing, share your knowledge as well.

**First solution:**

```
const fnName = () => prompt('tell me your name')
const fnMiddle = () => prompt('tell me your middle name')
const fnLastName = () => prompt('tell me your lastname')


// using Map
const withNameComplete = (...funcs) => funcs.map(func => func()).join(' ')

console.log(withNameComplete(fnName, fnMiddle, fnLastName))
```

You can see in line eight I calling the function passing others function, but when I put these arguments I can't call it, only pass. for example, I can't do that, If you will occur an error:

```
const fnName = () => prompt('tell me your name')
const fnMiddle = () => prompt('tell me your middle name')
const fnLastName = () => prompt('tell me your lastname')

// using Map
const withNameComplete = (...funcs) => funcs.map(func => func()).join(' ')

console.log(withNameComplete(fnName(), fnMiddle(), fnLastName()))
```

Using Map from ES06 I may iterate each function inside of Array func and execute, it will return a new array (thanks immutability, it is another post maybe) and then I use the function join(' ') that extract the values of the new array and put in a String.

**Second solution:**

This way I will use Reduce:

```
const fnName = () => prompt('Tell me your name')
const fnMiddle = () => prompt('Tell me your middle name')
const fnLastName = () => prompt('Tell me your lastname')


// using Reduce
const withNameComplete = (...funcs) => funcs.reduce((acc, cv) => \`${acc} ${cv()}\`.trimStart(), '')

console.log(withNameComplete(fnName, fnMiddle, fnLastName))
```

Check it out, only changed map to reduce and I have using template string to concatenate strings and using the function trimStart for removing white space of initial String because accumulator starts with this one value.

With the function reduce the return of method is the value accumulated (acc) plus current value (cv). How I am using template string then it is hard to realize, though.

Finally, HOC, Array.Map and Array.Reduce are subjects hard to understand in begin, but with the theory and practice you gotcha it easily, don't give up, keep studying is the best way.

So, again, if you have a better solution I would love knowing.

**All in one:**

```
// Training HOF => High Order Functions

const fnName = () => prompt('tell me your name')
const fnMiddle = () => prompt('tell me your middle name')
const fnLastName = () => prompt('tell me your lastname')

// Debuging
//const withNameComplete = (...funcs) => console.log(funcs)

// using Map
//const withNameComplete = (...funcs) => funcs.map(func => func()).join(' ')

// using Reduce

const withNameComplete = (...funcs) => funcs.reduce((acc, cv, index, array) => \`${acc} ${cv()}\`.trimStart(), '')

console.log(withNameComplete(fnName, fnMiddle, fnLastName))
```

Last but not least, whether you do you wanna see something cool and advance about HOC and Reduce, take a look this: <https://github.com/acdlite/recompose/blob/master/src/packages/recompose/compose.js>

Thank you for reading!

Also you can read about it: <https://medium.com/javascript-scene/higher-order-functions-composing-software-5365cf2cbe99>

_Ps. This is my first article in English! \o/_
