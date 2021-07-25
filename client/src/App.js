import Navabar from './components/navabar/Navabar';
import Sidebar from './components/sidebar/Sidebar';
import Body from './components/body/Body';
import './App.css';
import {getTodos} from './actions/todos'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
function App() {
   const dispatch = useDispatch();
   useEffect(() => {
    dispatch(getTodos());
   }, [dispatch])
  return (
    <div className="app">

   <Navabar/>
   <div className="app__main">
     <div className="app__main__sidebar">
     <Sidebar/>
     </div>
     <div className="app__main__body">
     <Body/>
     </div>
     
   </div>
    </div>
  );
}

export default App;
