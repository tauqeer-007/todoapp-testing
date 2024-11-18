import { makeStyles } from '@material-ui/core/styles';
import { amber } from '@mui/material/colors';

const useStyles = makeStyles(() => ({
    greeting: {
        color: `${amber[200]}`,
        fontFamily: 'Roboto',
        fontSize: '64px',
        fontStyle: 'normal',
        letterSpacing: '0em',
        textAlign: 'center',
        marginTop: '201px'
    },
}));

interface HeaderProps {
    userName: string;
}

export default function Header(props: HeaderProps) {
    const classes = useStyles(); 

    return (
        <div className={classes.greeting}>
           <div><img src="../logo.png" alt="logo" height="80px" className="todo_logo" /></div>  
            Hey, {props.userName}
        </div>
    )
}