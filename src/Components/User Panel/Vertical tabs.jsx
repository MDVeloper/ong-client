import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTransactions } from '../../Store/Actions/actionDonations';
import { useEffect } from 'react';
import style from "./UserPanel.module.css";

const theme = createTheme({
  MuiTabs: {

  }
})

function TabPanel(props) {
  const { children, value, index, ...other } = props;


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch()

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const allTransactions = useSelector((state) => state.donations.allTransactions);

  useEffect(() => {
    dispatch(getAllTransactions());
  }, [dispatch]);

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: '#F3F3F3', display: 'flex', height: 500 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Donaciones" {...a11yProps(0)} />
        <Tab label="Proyectos" {...a11yProps(1)} />
        <Tab label="Votaciones" {...a11yProps(2)} />
        <Tab label="Cursos" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        Información de las donaciones
        {allTransactions && allTransactions.map(t => {
          return (
            <div className={style.transactionDiv}>
              <h6>{t.id}</h6>
              <h6>{t.email}</h6>
              <h6>${t.amount}</h6>
              <h6>{t.date.slice(0, 10)}</h6>
              <h6>{t.paymentMethod}</h6>
              <h6>{t.status}</h6>
            </div>
          )
        })}
      </TabPanel>
      <TabPanel value={value} index={1}>
        Toda la información respectiva de los proyectos etc
      </TabPanel>
      <TabPanel value={value} index={2}>
        Toda la información respectiva de las votaciones
      </TabPanel>
      <TabPanel value={value} index={3}>
        Toda la informacion de los cursos tomados
      </TabPanel>
    </Box>
  );
}