# React + Vite

# React HOOK
- To use useState import React, {useState} form React.

- It is a special function that allows functional components to use react features, without using class components (useState, useEffect, usecontext, useReducer, useCallback, and more)

- useState = It is a react hook that allows creation of stateful variable and a setter function to update its value in virtual DOM. like: [name, setName]


# Counter.jsx is my code 🤣

# numbCount.jsx is learned code

- using 1 useState --> [count, setCount] we applied 3 things increment, decrement, reset functions.

# Updater function

- It is a function passed as an argument to setState()
- It allows for safe updates based on the previous state
- It is used with multiple state updates and asynchronous functions

- It is good practise to use updater function

- ⭐ The c inside the increment function in the Updatefunct.jsx file is the first letter of the count variable name so we can use it in that way.

- why are we returning three times one single statement --> setCount(c => c+1);  || First of all its a updater function(=>), it is updating the value 3 times using a queue eg. 1+1 ->2 then again previous ans -> 2 + upcoming value 1 then prints it printing it.

- SO basically we can also use setCount(c+1) 3 times right ?? Yaa but it wont return the output thats the reason we are using => updater function