import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AssetsList from './AssetsList';
import SecurityControl from './SecurityControl';
import SecurityGoals from './SecurityGoals';
import ThreatList from './ThreatList';

const Tabbar = () =>{
return(
    <div>
        <Tabs>
    <TabList>
      <Tab>Assets</Tab>
      <Tab>Threats</Tab>
      <Tab> Security Goals</Tab>
      <Tab> Security Controls </Tab>
    </TabList>

    <TabPanel>
      <AssetsList></AssetsList>
    </TabPanel>
    <TabPanel>
      <ThreatList></ThreatList>
    </TabPanel>
    <TabPanel>
     <SecurityGoals></SecurityGoals>
    </TabPanel>
    <TabPanel>
      <SecurityControl></SecurityControl>
    </TabPanel>
  </Tabs>
    </div>
)


}

export default Tabbar;