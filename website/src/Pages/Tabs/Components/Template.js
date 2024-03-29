import React from 'react';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Calen from '../../../Components/Calendar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import user_data from '../../../data/Users/index.json';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTab() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // handleVerify = (newUser) =>{
    
  // }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Geral"  {...a11yProps(0)} />
          <Tab label={user_data.User[0].Content.Subjects[0].Title}  {...a11yProps(0)} />
          <Tab label={user_data.User[0].Content.Subjects[1].Title}  {...a11yProps(1)} />
          <Tab label={user_data.User[0].Content.Subjects[2].Title}  {...a11yProps(2)} />
          <Tab label={user_data.User[0].Content.Subjects[3].Title}  {...a11yProps(3)} />
          <Tab label={user_data.User[0].Content.Subjects[4].Title}  {...a11yProps(4)} />
          <Tab label={user_data.User[0].Content.Subjects[5].Title}  {...a11yProps(5)} />
          <Tab label={user_data.User[0].Content.Subjects[6].Title}  {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Calen/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Calen/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Calen/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Calen/>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <Calen/>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <Calen/>
      </TabPanel>
    </div>
  );
}