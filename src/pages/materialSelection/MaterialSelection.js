import { useEffect, useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import "../../assets/scss/material-selection/material-selection.scss"
import NewChangedItems from "./NewChangedItems";
import AwaitingSignOff from "./AwaitingSignOff";
import Approved from "./Approved";
import { materialDataSelector} from "../../redux/materialSelection/materialSelection.selectors";
import { materialListAwaitingData } from '../../redux/materialSelection/materialSelection.selectors';
import { useAppDispatch, useAppSelector } from "../../redux/store/store";

const items = [
  {
    key: '1',
    label: `New/ Changed Items`,
    children: <NewChangedItems />,
  },
  {
    key: '2',
    label: `Awaiting Sign off`,
    children: <AwaitingSignOff />,
  },
  {
    key: '3',
    label: `Approved`,
    children: <Approved />,
  },
];

const MaterialSelection = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [listCount, setListCount] = useState(0);
  const materialListData = useAppSelector(materialDataSelector);
  const materialListAwaitingOffData = useAppSelector(materialListAwaitingData);
  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  useEffect(() => {
    if(tabIndex === 0){
     setListCount(materialListData?.pagination?.totalRecords)
    }else if(tabIndex === 1){
    
    setListCount(materialListAwaitingOffData?.pagination?.totalRecords)
    }else {
      // setListCount("")
    }
  }, [materialListData,materialListAwaitingOffData, tabIndex])
  
  return <div className='mainContent' >
    <div className='mainContainer' >
      {/* Tabs Header */}
      <Box>
        <Tabs value={tabIndex} onChange={handleTabChange}>
          {items.map((item,index) => {
            return <Tab label={
              
              `${item.label} ${tabIndex === index ? `(${listCount})` : ""}`
            } />
          })}
        </Tabs>
      </Box>
      {/* Tabs Content */}
      <Box sx={{ padding: 2 }}>
        {items.map((item, index) => {
          if(tabIndex === index){
            return item.children
          }else {
            return false;
          }
          
        })}
      </Box>

      
    </div>
  </div>
}

export default MaterialSelection;