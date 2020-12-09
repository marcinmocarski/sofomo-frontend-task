import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        height: '100%'
    },
    card: {
        height: '100%',
    },
    title: {
        fontSize: 14,
    },
    text: {
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis"
    }
});

const LocationInfo = ({ info, title }) => {
    const { ip, city, country_name } = info;
    const classess = useStyles();

    return (
        <div className={classess.root}>
            <Card className={classess.card}>
                <CardContent>
                    <Typography className={classess.title} color="textSecondary" gutterBottom>
                        {title}
                    </Typography>
                    <Typography className={classess.text} variant="h5" component="p">
                        {ip}
                    </Typography>
                    <Typography className={classess.text} variant="h5" component="p">
                        {city}
                    </Typography>
                    <Typography className={classess.text} variant="h5" component="p">
                        {country_name}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default LocationInfo;