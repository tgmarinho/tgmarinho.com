---
title: Understanding Falsy and Truthy values in JavaScript
description: >-
  Both concepts are very common and essential for JavaScript Developers. They
  are very used in Back-end and Front-end Apps.
date: '2020-08-15 11:00:56'
image: /assets/img/fasly-and-truthy.jpg
category: js
background: '#D6BA32'
---

Let´s see in the practice with some codes the importance to know and apply these concepts.

This post was translated for English and adapted, [you can read in Portuguese at Blog Rocketseat](https://blog.rocketseat.com.br/entendendo-falsy-e-truthy-no-javascript/).  All the credits for [them](https://rocketseat.com.br/), it's an amazing IT School.

### Falsy

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

* 0n is BigInt notation.

Running the code above we'll get falsy for all of them.

### Truthy

Different from Falsy, Truthy values are something evaluated as true in the coercion process.

All values are truthy, except the values evaluated as a falsy, obviously.

You can see bellow some samples:

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
" "  ? console.log("truthy")  : console.log("falsy")  // String with whitespae is truthy (becareful)!
```

Although they are truthy values, it's doesn't mean they are equals.

For instance:

```
console.log({}  ==  []);  // false 
console.log({}  ===  []);  // even bigger false because compare value and type
```

The object `{}` not is an array `[]`.

### Getting a value falsy and truthy

For getting a falsy and truthy value by type coersion we can use `!!`.

Example:

```
 console.log(!!" ");  // withwhite space is truthy
 console.log(!!"");  // empty string is falsy
```

Alert: Be careful! If the user type some whitespace in the form, it can break the validation.

```
console.log(!!" ".trim());  // now is false!!!
```

### Real world samples

If the array is empty, then render the `<p>`.

```
{
  todoList.length ===  0  &&  (  <p>Nada para fazer! 🏖️ </p>  )
 }
```
The number 0 is falsy.

Another example:

Render the `div` with title, but only render the description if the string is truthy:

```
<div>  
   <strong>{message.title}</strong>  
     {!!message.description &&  <p>{message.description}</p>}
</div>

```

Here we can see the coercion of types in the practice.

message.description is a String, with the operator !!message.description I'm getting the falsy or truthy value.

If the String description is false, the condition stop. If is true, continue the operation and show the `<p>{message.description}</p>`.

Let's see the other example:

```
if(password && !old_password) {  
   throw  new  Error('Precisa informar a senha antiga para para criar uma nova.');
}
```

See, password and old_passowrd are String, if the password is filled (true) and !old_password is not, then, pass in the condition and throw an error for the user.

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

Check if position 1 from token and user array has values, if yes, pass in the condition and pass to the function setData as a parameter of the object.
Interesting, if the value is present in theses position are falsy, then the condition is no satisfied.


 ### 🏁 Conclusion

These concepts together the programming logic will be used daily for developers in your careers! To Know falsy/truthy will helping to build React Applications or with all technology in the JavaScript ecosystem. 

### 🗽 What means true vs truthy

Do you know the  **difference between**  these two words:  **True**  vs  **Truth**? The word  **TRUE**  is your perspective of something. The word  **TRUTH**  is universal and cannot be changed.


### 🔗 Links

-   [https://developer.mozilla.org/pt-BR/docs/Glossario/Falsy](https://developer.mozilla.org/pt-BR/docs/Glossario/Falsy)
-   [https://developer.mozilla.org/pt-BR/docs/Glossario/Truthy](https://developer.mozilla.org/pt-BR/docs/Glossario/Truthy)
-   [https://medium.com/coding-at-dawn/what-are-falsy-values-in-javascript-ca0faa34feb4](https://medium.com/coding-at-dawn/what-are-falsy-values-in-javascript-ca0faa34feb4)

I hope you like it! Give me a feedback bellow! ♥️

** Always there something to learn! ** 

*Boost yourself.* 🚀

