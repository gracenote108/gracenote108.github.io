(this["webpackJsonpgracenote108.github.io"]=this["webpackJsonpgracenote108.github.io"]||[]).push([[0],{13:function(t,e,r){},15:function(t,e,r){},16:function(t,e,r){"use strict";r.r(e);var a=r(1),i=r.n(a),n=r(7),c=r.n(n),o=(r(13),r(2)),s=r(3),u=r(5),l=r(4),h=r(0),p=function(t){Object(u.a)(r,t);var e=Object(l.a)(r);function r(){var t;Object(o.a)(this,r);for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(t=e.call.apply(e,[this].concat(i))).state={},t}return Object(s.a)(r,[{key:"render",value:function(){return Object(h.jsx)("div",{id:"banner",children:Object(h.jsx)("div",{children:"Nirav's Projects"})})}}]),r}(a.Component),d=function(t){Object(u.a)(r,t);var e=Object(l.a)(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return Object(s.a)(r,[{key:"render",value:function(){var t=this.props,e=t.selectedListItem,r=t.groups,a=t.onListSelection;return Object(h.jsx)("ul",{id:"listgroup",children:r.map((function(t){var r=t.id,i=t.groupName;return Object(h.jsx)("li",{className:e===r?"list-item active-item":"list-item",onClick:function(){return a(r)},children:i},r)}))})}}]),r}(a.Component),b=function(t){Object(u.a)(r,t);var e=Object(l.a)(r);function r(){var t;Object(o.a)(this,r);for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(t=e.call.apply(e,[this].concat(i))).state={},t.renderPageLink=function(t){return t.url?Object(h.jsx)("a",{href:t.url,children:"Webpage"}):null},t}return Object(s.a)(r,[{key:"render",value:function(){var t=this.props.data;return Object(h.jsxs)("div",{id:"itemcard",children:[Object(h.jsx)("div",{children:t.projectName}),this.renderPageLink(t),Object(h.jsx)("a",{href:t.git,children:"GitHub"})]})}}]),r}(a.Component),g=function(t){Object(u.a)(r,t);var e=Object(l.a)(r);function r(){var t;Object(o.a)(this,r);for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(t=e.call.apply(e,[this].concat(i))).state={},t}return Object(s.a)(r,[{key:"render",value:function(){var t=this.props.library;return Object(h.jsx)("div",{id:"display",children:t.map((function(t){return Object(h.jsx)(b,{data:t})}))})}}]),r}(a.Component),m=r(8),j=[{uuid:"59a046bf-c921-4409-a421-d638841ead48",library:[{projectName:"Rock Paper Scissors",git:"https://github.com/gracenote108/OdinProject-JavaScript/tree/main/RockPaperScissors",url:"https://gracenote108.github.io/OdinProject-JavaScript/RockPaperScissors/index.html",text:"A basic game of Rock-Paper-Scissors. One of the first projects listed in The Odin Project."},{projectName:"Calculator",git:"https://github.com/gracenote108/OdinProject-JavaScript/tree/main/Calculator",url:"https://gracenote108.github.io/OdinProject-JavaScript/Calculator/index.html",text:"This project implements a calculator. The original project asked for a basic calculator but I went a step further and implemented a Postfix algorithm so a complex equation can be given."},{projectName:"EtchASketch",git:"https://github.com/gracenote108/OdinProject-JavaScript/tree/main/EtchASketch",url:"https://gracenote108.github.io/OdinProject-JavaScript/EtchASketch/page.html",text:'Created an Etch-A-Sketch using basic Javascript.\n    Note: The color starts with black but will change to pink if you click on "Etch."'},{projectName:"Library",git:"https://github.com/gracenote108/OdinProject-JavaScript/tree/main/React-Library",url:"https://gracenote108.github.io/react-library/",text:"A book library created using React.\n    Note: Adding a new book allows a user to upload their own image from their computer. However, there is no backend setup for this so the image will not display properly."},{projectName:"Damodara's Doughnuts (Restaurant)",git:"https://github.com/gracenote108/OdinProject-JavaScript/tree/main/Restaurant",url:"https://gracenote108.github.io/OdinProject-JavaScript/Restaurant/dist/index.html",text:"A book library created using React.\n    Note: Adding a new book allows a user to upload their own image from their computer. However, there is no backend setup for this so the image will not display properly."},{projectName:"Tic Tac Toe",git:"https://github.com/gracenote108/OdinProject-JavaScript/tree/main/TicTacToe",url:"https://gracenote108.github.io/OdinProject-JavaScript/TicTacToe/index.html",text:"Tic Tac Toe game."},{projectName:"Karma (Todo List)",git:"https://github.com/gracenote108/OdinProject-JavaScript/tree/main/TodoList",url:"https://gracenote108.github.io/OdinProject-JavaScript/TodoList/dist/index.html",text:"Application that stores multiple projects and subtasks for each project. \n    Note: Not setup to save data so data will be wiped after each session."},{projectName:"Thunder God's Weather App",git:"https://github.com/gracenote108/OdinProject-JavaScript/tree/main/WeatherApp",url:"https://gracenote108.github.io/OdinProject-JavaScript/WeatherApp/dist/index.html",text:"Application that will retrieve weather information."}]},{uuid:"4742aadd-1bbf-4b01-b653-d01a23cd25e9",library:[{projectName:"Hangman",git:"https://github.com/gracenote108/OdinProject-Ruby/tree/main/Hangman",text:"Hangman game."},{projectName:"MasterMind",git:"https://github.com/gracenote108/OdinProject-Ruby/tree/main/MasterMind",text:"Master Mind game. "},{projectName:"Linked List",git:"https://github.com/gracenote108/OdinProject-Ruby/tree/main/LinkedList",text:"Implementation of the LinkedList algorithm in Ruby"},{projectName:"Merge Sort",git:"https://github.com/gracenote108/OdinProject-Ruby/tree/main/MergeSort",text:"Implementation of the MergeSort algorithm in Ruby"},{projectName:"Bubble Sort",git:"https://github.com/gracenote108/OdinProject-Ruby/tree/main/BubbleSort",text:"Implementation of the BubbleSort algorithm in Ruby"},{projectName:"Binary Tree",git:"https://github.com/gracenote108/OdinProject-Ruby/tree/main/BalancedBinaryTree",text:"Implementation of the BinaryTree algorithm in Ruby"}]}];var O=function(t){Object(u.a)(r,t);var e=Object(l.a)(r);function r(){var t;Object(o.a)(this,r);for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(t=e.call.apply(e,[this].concat(i))).state={listgroups:[{id:"59a046bf-c921-4409-a421-d638841ead48",groupName:"JavaScript"},{id:"4742aadd-1bbf-4b01-b653-d01a23cd25e9",groupName:"Ruby"}],selectedList:""},t.handleListSelection=function(e){t.setState({selectedList:e})},t}return Object(s.a)(r,[{key:"render",value:function(){var t=this.state.selectedList,e=function(t){var e,r=Object(m.a)(j);try{for(r.s();!(e=r.n()).done;){var a=e.value;if(a.uuid===t)return a.library}}catch(i){r.e(i)}finally{r.f()}return[]}(t);return Object(h.jsxs)("div",{id:"mainbody",className:"flex-row",children:[Object(h.jsx)(d,{selectedListItem:t,groups:this.state.listgroups,onListSelection:this.handleListSelection}),Object(h.jsx)(g,{library:e})]})}}]),r}(a.Component),f=(r(15),function(t){Object(u.a)(r,t);var e=Object(l.a)(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return Object(s.a)(r,[{key:"render",value:function(){return Object(h.jsxs)(i.a.Fragment,{children:[Object(h.jsx)(p,{}),Object(h.jsx)(O,{})]})}}]),r}(a.Component)),v=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,17)).then((function(e){var r=e.getCLS,a=e.getFID,i=e.getFCP,n=e.getLCP,c=e.getTTFB;r(t),a(t),i(t),n(t),c(t)}))};c.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root")),v()}},[[16,1,2]]]);
//# sourceMappingURL=main.5471ae77.chunk.js.map