import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CustomButtonLinks from "../Links/Index.links";
// ----- Export for Custom tabs -----
export default function CustomTabs(props: any) {
  return (
    <Box sx={{ width: '100%', typography: 'body1', border: 'none' }}>
      <TabContext value={props.value.toString()}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          {/* Render Tab list */}
          <TabList onChange={props.handleChange} >
            {props?.tabsList?.map((tab: {[key: string]: string}, index: number) => {
              return <Tab label={tab.label} value={(index + 1).toString()} key={`tab_${tab.label}`}/>
            })}
          </TabList>
          {/* Custom link component if needed */}
          {props.linkHref && <CustomButtonLinks
            href={props.linkHref}
          >
            {props.linkTitle}
          </CustomButtonLinks>}
        </Box>
        {/* Render Tab content */}
        {props?.tabsList?.map((tab: {[key: string]: string}, index: number) => {
          return <TabPanel value={(index + 1).toString()}  key={`tab_${tab.label}_${index}`}>
            {props.children}
          </TabPanel>
        })}
      </TabContext>
    </Box>
  );
}
