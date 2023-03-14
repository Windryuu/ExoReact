import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import Sidebar from './components/Sidebar';
import { forwardRef, useImperativeHandle, useRef } from 'react';

// function ConsoleLogger() {
//   console.log("console log from the parrent compo")
// }

const SuperConsoleLogger = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    DubConsoleLogger(){
      console.log("Je ne sais pas pourquoi j'ai eu besoin d'écrire tout ça");
    },
  }))
  // return <div></div>
})

function MegaConsoleLogger() {
  console.log("bleeep");
}

function App() {
  const superConsoleLoggerRef = useRef(null);
  return (

    <div className="App">
      <Header />
      <Sidebar sclr={superConsoleLoggerRef} parentfunction={MegaConsoleLogger}/>
      <SuperConsoleLogger ref={superConsoleLoggerRef}/>
      
      <Body />
      <Footer />
    </div>
  );
}

export default App;
// export {ConsoleLogger};