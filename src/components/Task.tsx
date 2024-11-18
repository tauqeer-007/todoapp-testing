import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingLeft: '20px',
    }  
}));

interface TaskProps {
    title: string;
    completed: boolean;
};

const Task = (props: TaskProps) => {
    const classes = useStyles();
    
    return (
       <div className={classes.container}>     
            <p> {props.title} </p>   
       </div>               
    )
}

export default Task;