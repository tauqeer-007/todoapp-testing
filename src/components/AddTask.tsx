import {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@mui/icons-material/Add';
import { amber } from '@mui/material/colors';

const useStyles = makeStyles((theme) => ({
    addContainer: {
        padding: '0px 10px 10px 10px',
        borderRadius: '20px',
        background: `${amber[200]}`,
        display: 'flex',
    },
    icon: {
        paddingTop: '20px',
        color: 'rgb(0 0 0 / 54%);'
    },

}));

interface AddTaskProps {
    addTaskToList: (text: string) => void;
}

const AddTask = (props: AddTaskProps) => {
    const classes = useStyles();
    const [newTaskText, setNewTaskText] = useState("");
    const {addTaskToList} = props;

    const handleAddingTask = (event: any) => {
        if(event.charCode === 13){ 
            addTaskToList(newTaskText); 
            setNewTaskText("") 
        }
    }

    const handleIconAdd = () => {
        if(newTaskText.length > 0){
            addTaskToList(newTaskText); 
            setNewTaskText("") 
        }
    }

    const updateNewTask = (event: any) => {
        setNewTaskText(event.target.value)
    }

    return (
        <div className={classes.addContainer} role="div-task">   
            <AddIcon data-testid="add-icon" className={classes.icon} onClick={handleIconAdd}/>
            <TextField
                title="enter task"
                data-testid="task-input"
                fullWidth
                onChange={updateNewTask} 
                value={newTaskText} 
                label={"What's on your mind today?"} 
                placeholder="Add Task"
                id="task-field"
                onKeyPress={handleAddingTask} 
            />
        </div>
    )
}

export default AddTask;