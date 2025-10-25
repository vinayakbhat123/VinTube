import {Provider} from "react-redux";
import store from "./utils/store";
import './App.css';
import Head from './components/Head';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Provider store={store} >
    <div className="App">
      <Head />
      <Outlet/>
    </div>
    </Provider>
  );
}

export default App;
