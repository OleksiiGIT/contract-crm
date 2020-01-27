import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {NavLink} from 'react-router-dom'
import ListIcon from '@material-ui/icons/List';
import Divider from '@material-ui/core/Divider';
import SpeakerNotesOutlinedIcon from '@material-ui/icons/SpeakerNotesOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    simpleLink: {
        color: '#000',
        textDecoration: 'none'
    }

}));

export default function MainListItems(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            component="nav"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader"/>
            }
            className={classes.root}
        >
            <Divider/>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <HomeOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Договора" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <NavLink
                        to={'/'}
                        className={classes.simpleLink}
                    >
                        <ListItem button className={props.nested ? classes.nested : null}>
                            <ListItemIcon>
                                <ListIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Каталог" />
                        </ListItem>
                    </NavLink>
                    <NavLink
                        to={'/add'}
                        className={classes.simpleLink}
                    >
                        <ListItem button className={props.nested ? classes.nested : null}>
                            <ListItemIcon>
                                <AddCircleOutlineIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Создать новый" />
                        </ListItem>
                    </NavLink>
                </List>
            </Collapse>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <SpeakerNotesOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Уведомления" />
            </ListItem>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Архив" />
            </ListItem>
        </List>
    );
}