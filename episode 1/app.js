/**
 * 
 * 
 * 
 * <div id="parent> 
 *       <div id="child1>
 *             <h1></h1>
 *             <h1></h1>
 *        <div>
 *       <div id="child1>
 *             <h1></h1>
 *             <h1></h1>
 *        <div>
 * 
 * <div>
 */

const parent= React.createElement(
    "div",
     {id: "parent"},[
     React.createElement(
       "div",
       {id:"child"},[
       React.createElement("h1",{},"I am in h1 tag"),
       React.createElement("h2",{},"I am in h1 tag")
     ]),
     React.createElement(
       "div",
       {id:"child"},[
       React.createElement("h1",{},"I am in h1 tag"),
       React.createElement("h2",{},"I am in h2 tag")])

]) ;  
console.log(parent);// object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);