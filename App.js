/*
*
*HMR:- HOT MODULE REPLACEMENT
*   
* HMR is done by File watcher algorithm which is in C++
*Bundling
* Minifying
*Cleaning our code
*SUper fast Building ALgorithm
*Image optimization
*Dev and production build
*Caching while development in .parcel-cache folder
*
*We should put .parcel-cache in gitignore
* basically anything that can be autognerated or can be generated on server should be put in gitignore.
*
*Consistent Hashing Algorithm
*Port Nummber
*Zero Config

*TRANSITIVE DEPENDENCIES :- when every library or package has dependency on other packages and they have on other than a depency tree is creted and this is called transitive dependencies.

* Tree Shaking :- removing or ignooring unwanted piece of code.
*/



import React from "react";
import ReactDOM from "react-dom/client"; // in earlier time reactDOm can be imported by using react-dom only but in latest updates we will have to use react-dom/clients to import

            // <h1 id="title">Heading 1</h1> it is as same as the above waala

    // React.createElement => object => HTML(DOM)

    const heading2 = React.createElement("h2",
    {
        id : "title",
        key : "h2",
    },
    "heading 3");

//     <div class="header">
//     <h1>Namaste React</h1>
//     <ul>
//         <li>Home</li>
//         <li>About Us</li>
//         <li>COntact</li>
//     </ul>
// </div>

    // const container = React.createElement("div",
    // {
    //     id : "container"
    // },
    // [React.createElement("h1",
    // {
    //     id : "title",
    //     key : "h1",
    // },
    // "heading 3"), React.createElement("ul",{},"heading 3",
    
    // [
    //     React.createElement("li",{},"Home"),
    //     React.createElement("li",{},"About Us"),
    //     React.createElement("li",{},"Contact"),
    //     ]),

    //  ]);              // in React when we have to pass multiple children then we pass it in array.
    
        //JSX => React.createElement => Object => HTMLDom
     
    const Title =()=> ( 
    <h1 id="title" key="h1"> 
                                 {/* //JSX expression */}
        Namsate React
    </h1>
    );

    const HeaderComponent = () =>{
        return(
        <div>
                       {/* {Title /} */}
            <Title/>
            <h1>This is h1</h1>
            <h2>This is h2</h2>
        </div>
        )
    };
    
    const root = ReactDOM.createRoot(document.getElementById("root"));
    // root.render(heading);

    // when i havde to render our functional component than i will wrap it up in angular brackets.
 
     root.render(<HeaderComponent />);  