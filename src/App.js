
import './App.css';

import { Route,Routes } from 'react-router-dom';
import StencilsProperties from './components/StencilsProperties';
import { Amplify, Auth } from 'aws-amplify';
import Report from './components/Report';
import Drawing from './components/Drawing';
import AssetsList from './components/AssetsList';
import ThreatList from './components/ThreatList';
//import awsconfig from './aws-exports';
//Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={ <Drawing />}/>
      <Route path="report" element={<Report />}></Route>
      <Route path="assets" element={ <AssetsList />} />
      <Route path="threats" element= {<ThreatList />} />

      </Routes>
      
    </div>
  );
}

export default App;
