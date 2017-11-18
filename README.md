Problem Statement: On pressing multiple keys simultaneously input should be visible

Boilerplate: create-react-app to easily start with project

Css: pure css no design library

How to start: just go root where package.json is There  
              run: npm install
              start: npm start
              build: npm build

Dependency : keydown      

Data : data.json local file

Concept:
I have used comonent life cycle componentWillReceiveProps to detect keys on
whole window.
Whenever keys is detected i check value of keys if they are in a row ctrl+space+a
then i put in array .
if pattern distured by pressing any key i will empty my array.
so when it is detected I will set inout visible.


Search algo:
whenever i input a char and compare it with title in my data
if my input matches to first few chars too then it will show data.
like 'To'
so if it is there in any title as first 2 characters then all will be shown.

I have a seperate array for display elements
