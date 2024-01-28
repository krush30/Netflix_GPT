
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import appStore from './utils/appStore';
function App() {
  return (
    <div>
      <Provider store={appStore} >
        <Body></Body>
      </Provider>


    </div>


  );


}

export default App;
