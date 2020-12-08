import { useSelector, useDispatch } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        height: "100%"
    },
    header: {
        padding: theme.spacing(1),
        paddingBottom: 0
    }
}));


const SearchList = () => {
    const classess = useStyles();
    const dispatch = useDispatch();
    const searchList = useSelector(state => state.searchList);
    const listItemClickHandler = searchListItem => {
        dispatch({
            type: 'currentLocationInfo/set',
            payload: searchListItem
        })
    };
    const listItems = searchList.map((item, index) => (
        <div key={index}>
            <Divider />
            <ListItem button onClick={() => { listItemClickHandler(item) }}>
                <ListItemIcon>
                    <MyLocationIcon />
                </ListItemIcon>
                <ListItemText primary={item.ip} />
            </ListItem>
        </div>
    ));

    return (
        <div className={classess.root}>
            <Typography className={classess.header} variant="h5" component="h2" color="textSecondary">
                Recent searches
            </Typography>
            <List component="nav">
                {listItems}
            </List>
        </div>
    );
}

export default SearchList;