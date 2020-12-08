import {useRef} from 'react';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },
    paper: {
        display: "flex",
        flex: 1,
        marginRight: theme.spacing(3)
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1
    },
    button: {
        flex: 0.1
    }
}));

const SearchBar = ({searchHandler = () => {}}) => {
    const inputElement = useRef(null);
    const classess = useStyles();

    const searchClickHandler = () => {
        const {value} = inputElement.current;
        searchHandler(value);
    }

    return (
        <div className={classess.root}>
            <Paper className={classess.paper}>
                <InputBase
                    inputRef={inputElement}
                    className={classess.input}
                    placeholder="Enter valid IP address or url..."
                />
                <IconButton onClick={searchClickHandler}>
                    <SearchIcon />
                </IconButton>
            </Paper >
            <Button className={classess.button} variant="contained" onClick={searchClickHandler}>
                {"Search"}
            </Button>
        </div>
    )
}

export default SearchBar;