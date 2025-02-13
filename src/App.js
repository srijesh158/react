// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import Main from "./components/Main";
// import Navbar from "./components/Navbar";
// import Sidebar1 from "./components/Sidebar1";
// import Sidebar2 from "./components/Sidebar2";
// import Footer from "./components/Footer";

// function App(){
//   return( 
//     <div className="app">
//       <Navbar/>
//       <Main/>
//       <Sidebar1/>
//       <Sidebar2/>
//       <Footer/>
//     </div> 
//   )
// }
// export default App;


// import React, { Component } from 'react'
//  import CBCPropEx1 from './propexample/CBCPropEx1';
 
//  export default class App extends Component {
//    render() {
//      return (
//        <div>
//         App
//         <CBCPropEx1
//         username="Srijesh"
//         age={20}
//         hobbies={["studying , sleeping, reeding"]}
//         address={{city:"Hyd" , area:"maisammaguda"}}
//         isMarried={false}
//         sendFun={function(){alert("srijesh")}}
//         />
//        </div>
//      )
//    }
//  }


// import React from 'react'
// import FBCPropex1 from './propexample/FBCPropex1';

// const App = () => {

//   return (
//     <div>
//         <FBCPropex1
//         username = "nithin"
//         IsLoggedIn={true}
//         Profile={["instagram","snapchat","facebook","x"]}
//         />
//       </div>
//   )
// }
// export default App

// import React from 'react'
// import PropsChildrenex from './propexample/propsChildren'
// import SubChildProps from './propexample/SubChildren'

// const App = () => {
//   return (
//     <div>
//       <PropsChildrenex username="srijesh" company="meta">
//         <h1>This data is passing as a props children to child compoent</h1>
//         <SubChildProps/>
//       </PropsChildrenex>
//     </div>
//   )
// }
// export default App



// import CBCStateEx from './stateexamples/CBCStateEx';
// const App=()=> {
  
//     return (
//       <div>
//         <CBCStateEx/>
//       </div>
      
//     )
//   }

// export default App;


//  function App() {
//      return (
//          <div className="App">
//              <h1 class='heading'>Hello this is successfull</h1>
//              <h2 class={StyleSheet.error}>errorrr !!! 404 not found</h2>
//          </div>
//      );
//  }
//  export default App;

// import React from 'react'
// import MyForm from './components/myForm'



// function App() {
//   return (
//     <div className="App">
//      <MyForm></MyForm>
//      </div>
//   );
// }

// export default App;

// import React from 'react'
// import UseEffectEx from './HookExample/RefExample'

// export const App = () => {
//   return (
//     <div>
//       <UseEffectEx />
//     </div>
//   )
// }
// export default App;

// import React from 'react'
// import RefExample from './HookExample/RefExample'

// export const App = () => {
//   return (
//     <div>
//       <RefExample />
//     </div>
//   )
// }
// export default App;

// import React from 'react'
// import Navbar from './Components2/Navbar'

// export const App = () => {
//   return (
//     <div>
//       <Navbar/>
//     </div>
//   )
// }
// export default App

import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Classroom from './pages/Classroom';
import Assessment from './pages/Assessment';
import Store from './pages/Store';
import Calender from './pages/Calender';
import News from './pages/News';
import Blog from './pages/Blog';
import PageNotFound from './pages/PageNotFound';
const App = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/classroom' element={<Classroom/>}/>
            <Route path='/assessment' element={<Assessment/>}/>
            <Route path='/store' element={<Store/>}/>
            <Route path='/calender' element={<Calender/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/profile' element={<Profile/>}/>
                  <Router path='profile/myaccount' element={<MyAccount/>}/>
                  <Router path='profile/mysetting' element={<MySettings/>}/>
                  
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App