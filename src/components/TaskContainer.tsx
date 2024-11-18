import {useState} from 'react';
import Task from './Task';
import AddTask from './AddTask';
import { INITIAL_TASKS } from '../utility/data/initialTasks';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@mui/material';

const { v4: uuid } = require('uuid');

const useStyles = makeStyles((theme) => ({
    container: {
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    taskList : {
        backgroundColor: 'rgb(0 0 0 / 62%)',
        color: 'white', 
    }
}));

const TaskContainer = () => {
    const classes = useStyles();
    const [tasks, setTasks] = useState(INITIAL_TASKS);
    
    const addTaskToList = (title:string) => {
        const addTask = { title: title, completed: false, id: uuid()};
        setTasks([...tasks, addTask]);
    };

    return (
        <Grid container className={classes.container}> 
            <Grid item xs={12} sm={8}>
                <AddTask addTaskToList={addTaskToList}/>   
            </Grid>
            <Grid item xs={11.8} sm={7.8} className={classes.taskList}>
                {tasks.map( (task) => (
                    <div key={task.id}>
                        <Task title= {task.title} completed={task.completed}/>                  
                    </div>
                ))}
            </Grid>
        </Grid>
    )
}

export default TaskContainer;