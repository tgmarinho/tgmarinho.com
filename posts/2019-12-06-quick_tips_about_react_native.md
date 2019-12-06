---
title: Quick Tips about React Native
description: Some quick tips for React Native beginners and I recommend a nice podcast
date: '2019-12-06 11:13:16'
image: /assets/img/mobile_dev.png
category: mobile
background: '#03A9F4'
---
First of all, if you want to read this in Portuguese: [check it out](https://tgmarinho.netlify.com/dicas_rapidas_sobre_react_native/). So, let's go! 

[React Native](https://facebook.github.io/react-native/) is for creating user interface apps mobile.

Ok, the App can integrate with GPS (Geolocalization), show the map in the screen, use some mobile sensors, integrate itself with Redux for manage global states, retrieve data from extern API, to do some things cool and complex, but it is all about UI (User Interface).

Who is developing with **React Native** is creating Interfaces though.

Therefore, the first **rule** is:

## Interface 

It is very important to have a beautiful interface to keep users on app.

If you aren't good at Design, you can use [React Native Paper](https://github.com/callstack/react-native-paper) (it uses Material Design), step away from [Native Base](https://nativebase.io/), because it is verbose a lot, and try [React Native Elements](https://react-native-elements.github.io/react-native-elements/) because it is nicer than others mentioned. The best way to handle with Design is following a prototype of a designer, I did it in this app: [https://github.com/tgmarinho/BmiCalculator](https://github.com/tgmarinho/BmiCalculatorRN)[RN ](https://github.com/tgmarinho/BmiCalculatorRN)I followed a design from [dribbble](https://dribbble.com/shots/4585382-Simple-BMI-Calculator).



## Expo x CLI

[Expo](https://expo.io/) is nice to [start](https://blog.rocketseat.com.br/expo-react-native/), it works with map, camera, GPS, sensors, it doesn't work with Bluetooth (who uses it?).

It is good to use EXPO for small projects properly scoped, and for MVP. For example the App Rocketseat Experience which is a CRUD was a good example for making it with Expo, otherwise, Skylab wasn't possible to build with EXPO, and was necessary to use [CLI RN](https://facebook.github.io/react-native/docs/getting-started). The build settings of icons and splash screens are faster with EXPO. But I heard history which app of suce$$ still using EXPO until now.



## How to test the APP?

How it is about Interface, then we can use [Storybook](https://storybook.js.org/) for seeing how the UI is being, we can test in various mobiles, and also if we can't to build the app because we are programming in Windows or Linux OS, we can use the [Appcenter](https://appcenter.ms/apps) for build our app after install it on our iPhone or a friend of yours.



## Specialization

Would you like specializing in RN? Study how to build user interfaces (UI) and accessibility. Good knowledge in HTML, CSS, help a lot, if you are using libraries like [styled-components](https://www.styled-components.com/) that work with React Native, it is an earn of productivity, because you will reuse a bunch your knowledge of the web.

For make the same component with differ characteristics  in relation environment iOS and Android is very easy, you can change the name for index.android.js for Android and index.ios.js for iOS, e the app will know in the build time what is for Android and iOS. See a example: <https://github.com/tgmarinho/gobarberRN/tree/master/src/components/DateInput>. Look the DatePicker no iOS: <https://youtu.be/mGDstIZzmQs?t=17>



## Environment setup

It is painful to set up the environment to React Native in Linux and Windows OS. In the Macbook is boring but faster, because the architecture of macOS helps us a lot. The Rocketseat create a very good doc in Portuguese and they put some experiences to fix beginning issues. Check it out: [https://docs.rocketseat.dev/ ](https://docs.rocketseat.dev/)(I didn't see similar in English).



## Read the DOC of React Native

Are you beginning? Read the **DOC**umentation, it is the official source of technology, I agree that is third-person create better content than the owner of the tool, but in the documentation could be nice things that could help a lot. If you are creating a basic project in React native or even intermediate across a course or tutorial, try read by your self the DOC and to learn with it, you will feel better itself and will be growing (being senior).



## Homework

* [Read the React Doc](https://pt-br.reactjs.org/docs/getting-started.html)
* [Read the React Native Doc](https://facebook.github.io/react-native/)
* [Share this post =)](http://twitter.com/share?text=Curti%20esse%20post%20do%20@tgmarinho%20sobre%20React%20Native&url=https://www.tgmarinho.com/dicas_rapidas_sobre_react_native/&hashtags=reactnative,%20soudev,%20mobile)



Would you like to get the nicest insights? Listen to the podcast in Portuguese [\#Faladev ](https://www.youtube.com/watch?v=fO9RetLv8gs)(Speak Dev) from Rocketseat. 

Rocketseat is the best company/community that creates content paid and free about **React Native**. Worth to follow.



**\#RNFACIL #RNEASY**



[Image's credit.](https://miro.medium.com/max/1000/1*MzlHsDKB_w3bljP6AS07Vg.jpeg)
