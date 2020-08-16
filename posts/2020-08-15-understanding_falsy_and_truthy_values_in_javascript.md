---
title: Understanding Falsy and Truthy values in JavaScript
description: >-
  Both concepts are very common and essential for JavaScript Developers. They
  are widely used in Back-end and Front-end Apps.
date: '2020-08-15 11:00:56'
image: /assets/img/fasly-and-truthy.jpg
category: js
background: '#D6BA32'
---
Let´s see in the practice, with some codes the importance of knowing and applying these concepts.

This post was translated into English and adapted, [you can read it in Portuguese on Blog Rocketseat](https://blog.rocketseat.com.br/entendendo-falsy-e-truthy-no-javascript/). All the credits to [them](https://rocketseat.com.br/), it's an amazing IT School.

## Falsy

A value Falsy is something that was evaluated as false in the coercion process (type coercion).

There are seven Falsy values:

```
console.log("List the 7 falsy values")

0 ? console.log("truthy") : console.log("falsy")

0n ? console.log("truthy") : console.log("falsy")

null ? console.log("truthy") : console.log("falsy")

undefined ? console.log("truthy") : console.log("falsy")

false ? console.log("truthy") : console.log("falsy")

NaN ? console.log("truthy") : console.log("falsy")

"" ? console.log("truthy") : console.log("falsy")
```

*0n is BigInt notation.*

When running the code above we'll get falsy for all of them.

## Truthy

It's different from Falsy, Truthy value is something evaluated as true in the coercion process.

All values are truthy, except the values evaluated as a falsy, obviously.

You can see some samples bellow:

```
console.log("Some truthy values") 
true  ? console.log("truthy")  : console.log("falsy")
({})  ? console.log("truthy")  : console.log("falsy") 
([])  ? console.log("truthy")  : console.log("falsy") 
1n  ? console.log("truthy")  : console.log("falsy") 
17  ? console.log("truthy")  : console.log("falsy") 
new  Date()  ? console.log("truthy")  : console.log("falsy") 
3.4  ? console.log("truthy")  : console.log("falsy")  
-99  ? console.log("truthy")  : console.log("falsy")  
Infinity  ? console.log("truthy")  : console.log("falsy") 
-Infinity  ? console.log("truthy")  : console.log("falsy") 
"Rocketseat"  ? console.log("truthy")  : console.log("falsy")  
"🚀 💺"  ? console.log("truthy")  : console.log("falsy")  
" "  ? console.log("truthy")  : console.log("falsy")  // String with white space is truthy (be careful)!
```

Although they are truthy values, it's doesn't mean they are equals.

For instance:

```
console.log({}  ==  []);  // false 
console.log({}  ===  []);  // It's even falser because compare value and type
```

The object `{}` not is an array `[]`.

## Getting a value falsy and truthy

In order to get a falsy and truthy value by typing coercion we can use `!!`.

Example:

```
 console.log(!!" ");  // with white space is truthy
 console.log(!!"");  // empty string is falsy
```

Alert: Be careful! If the user types some white space in the form, it can break the validation.

```
console.log(!!" ".trim());  // now is false!!!
```

## Real-world samples

If the array is empty, then render the `<p>`.

```
{
  todoList.length ===  0  &&  (  <p>Nothing todo! 🏖️ </p>  )
 }
```
The number 0 is falsy.

Another example:

Render the `div` with title, but it only renders the description if the string is truthy:

```
<div>  
   <strong>{message.title}</strong>  
     {!!message.description &&  <p>{message.description}</p>}
</div>

```

Here we can see the coercion of types in the practice.

message.description is a String, with the operator !!message.description I'm getting the falsy or truthy value.

If the String description is false, the condition stops. If it is true, it will continue the operation and show the `<p>{message.description}</p>`.

Let's see another example:

```
if(password && !old_password) {  
   throw  new  Error('You need to inform the password and old password.');
}
```

See, password and `old_passowrd` are strings, if the password is filled (true) and `!old_password` is not, then it passes the condition and it throws an error for the user.

```
""  // falsy  
"1234Passwd"  // truthy
```
Last sample:
```
if(token[1]  && user[1]) { 
  setData({ token: token[1], user:  JSON.parse(user[1])  });
}
```

Check if position 1 from token and user array has values, if yes, it passes the condition and it passes to the function setData as a parameter of the object.
Interesting, if the value is present in these positions, it is false, then the condition is not satisfied.


## 🏁 Conclusion

These concepts, along with programming logic will be used daily for developers in your careers! Knowing falsy/truthy will help to build React Applications or with all technology in the JavaScript ecosystem. 

## 🗽 What means true vs truthy

Do you know the  **difference between**  these two words:  **True**  vs  **Truth**? The word  **TRUE**  is your perspective of something. The word  **TRUTH**  is universal and cannot be changed.


## 🔗 Links

-   [https://developer.mozilla.org/pt-BR/docs/Glossario/Falsy](https://developer.mozilla.org/pt-BR/docs/Glossario/Falsy)
-   [https://developer.mozilla.org/pt-BR/docs/Glossario/Truthy](https://developer.mozilla.org/pt-BR/docs/Glossario/Truthy)
-   [https://medium.com/coding-at-dawn/what-are-falsy-values-in-javascript-ca0faa34feb4](https://medium.com/coding-at-dawn/what-are-falsy-values-in-javascript-ca0faa34feb4)

I hope you like it! Give me a feedback bellow! ♥️

**Always there something to learn!** 

*Boost yourself.* 🚀

Thank you [teacher Lucas Pirani](https://www.instagram.com/teacher_lucas_pirani/) for reviewing my post!
