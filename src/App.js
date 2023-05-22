import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SpaIcon from '@mui/icons-material/Spa';
import CelebrationIcon from '@mui/icons-material/Celebration';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import './App.css';
import CustomizedDialogs from './Components/pop-up'
import HorizontalLinearStepper from './Components/stepform'
import SignIn from './Components/login'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

// NAVIGATE


// routes
import { BrowserRouter, Routes, Route } from 'react-router-dom'



// let cout = 1;

function inner() {

    // let count = cout++;
    // console.log("test");
    document.getElementById("test").innerHTML = "test";

    // < MultiStepForm />
}


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

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path='/newEvent' element={<newEvent />} />
                    <Route path='*' element={<nopage />} />
                </Route>
            </Routes>
        </BrowserRouter>,

        <Box
            // bgcolor: 'background.paper'
            sx={{ flexGrow: 1, display: 'flex', height: '95vh', bgcolor: '' }
            }
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider', width: '20%', minWidth: '160px', bgcolor: '' }}
            >
                <Tab sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} label="NEW EVENT" icon={<AddIcon />} {...a11yProps(0)} />
                <Tab sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} label="VALIDATIONS" icon={<NotificationsNoneIcon />} {...a11yProps(1)} />
                <Tab sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} label="EVENTS" icon={<SpaIcon />} {...a11yProps(2)} />
                <Tab sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} label="MY EVENTS" icon={<CelebrationIcon />} {...a11yProps(3)} />
                <Tab sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} label="MY STATISTICS" icon={<EqualizerIcon />} {...a11yProps(4)} />
                <Tab sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} label="MY SCORE" icon={<StarOutlineIcon />} {...a11yProps(5)} />
                <Tab sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} label="ALL ROOMS" icon={<ViewInArIcon />} {...a11yProps(6)} />
                <Tab sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} label="ALL DISPOSITIONS" icon={<TableRestaurantIcon />} {...a11yProps(7)} />
            </Tabs>

            <TabPanel value={value} index={0} >

                <h1 className='titleMain'>NEW EVENT</h1>

                <div className='container-0'>


                    {/* <button className='btnNewEvent' onClick={inner}></button> */}

                    {/* <CustomizedDialogs /> */}

                    <CustomizedDialogs />

                    <a href="/newEvent" className='btnNewEvent'>✚</a>

                    <Link to="/newEvent">new </Link>
                </div>

                <div id='test'></div>



            </TabPanel>

            <TabPanel value={value} index={1}>

                <h1 className='titleMain'>VALIDATIONS</h1>
            </TabPanel>

            <TabPanel value={value} index={2}>
                <h1 className='titleMain'>EVENTS</h1>

            </TabPanel>

            <TabPanel value={value} index={3}>
                <h1 className='titleMain'>MY EVENTS</h1>
                {/* <SignIn /> */}
            </TabPanel>

            <TabPanel value={value} index={4}>
                <h1 className='titleMain'>MY STATISTICS</h1>
            </TabPanel>

            <TabPanel value={value} index={5}>
                <h1 className='titleMain'>MY SCORE</h1>
            </TabPanel>

            <TabPanel value={value} index={6}>
                <h1 className='titleMain'>ALL ROOMS</h1>

            </TabPanel>

            <TabPanel value={value} index={7}>
                <h1 className='titleMain'>ALL DISPOSITIONS</h1>
            </TabPanel>

        </Box >
    );

}



