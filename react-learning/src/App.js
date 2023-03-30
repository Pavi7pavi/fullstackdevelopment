
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import ConditionalRendering from './components/ConditionalRendering';
import Events from './components/Events';
import FunctionalComponent from './components/FunctionalComponent';
import ListandKeys from './components/ListandKeys';
import Nav from './components/Nav';
import Props from './components/Props';
import Refexample from './components/Refexample';
import Refs from './components/Refs';
import ResponsiveDrawer from './components/ResponsiveDrawer';



function App() {
  
  return (
  //   <Routes>
  //   <Route path="/" element={<Dashboard />}>
  //     <Route
  //       path="messages"
  //       element={<DashboardMessages />}
  //     />
  //     <Route path="tasks" element={<DashboardTasks />} />
  //   </Route>
  //   <Route path="about" element={<AboutPage />} />
  // </Routes>
  <Routes>

    <Route path="/" element={<ResponsiveDrawer/>}/>
    <Route path="/nav" element={<Nav/>}/>
    <Route path="/event" element={<Events/>}/>
    <Route path="/list" element={<ListandKeys/>}/>
    <Route path="/props" element={<Props/>}/>
  </Routes>
  );
}

export default App;


// function gopal(value){
//   console.log(`${value} is good person`);
// }

// gopal("gopal")
