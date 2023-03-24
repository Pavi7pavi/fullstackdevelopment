
import './App.css';
import ConditionalRendering from './components/ConditionalRendering';
import Events from './components/Events';
import FunctionalComponent from './components/FunctionalComponent';
import ListandKeys from './components/ListandKeys';
import Props from './components/Props';



function App() {
  
  return (
    <div>
 {/* <FunctionalComponent/> */}
 {/* <Props name="gopal" age="20"/>
 <Props name="pavi" age="21"/>
 <Props name="mohan" age="22"/> */}
 {/* <ConditionalRendering/> */}
 {/* <ListandKeys/> */}
 <Events/>
    </div>
  );
}

export default App;


// function gopal(value){
//   console.log(`${value} is good person`);
// }

// gopal("gopal")
