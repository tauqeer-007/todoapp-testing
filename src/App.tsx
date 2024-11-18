import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@mui/material';
import {useState, useEffect} from 'react';
import Header from './components/Header';
import TaskContainer from './components/TaskContainer';
import background from './images/sunrise.jpeg';

const useStyles = makeStyles(() => ({
  app: {
    // textAlign: 'center',
    background: `url(${background}) no-repeat center`,
    backgroundSize: 'cover',
    position: 'fixed',
    minHeight: '100%',
    minWidth: '100%',
    top: '0',
    left: '0', 
    // placeItems: 'center'
  },
}));

export default function App() {
  const classes = useStyles(); 
  const [userName, setUserName] = useState("Tauqeer"); 
  
  // useEffect(()=> {
  //   const name = prompt("What's your name?"); 
  //   if (name !== null) { 
  //     setUserName(name);
  //   }
  // }, []);

  return (
    <div className={classes.app}>
        <Header userName={userName}/> 
        <TaskContainer/>
    </div>
  );
}