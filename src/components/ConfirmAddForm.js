import React from 'react'
import Typography from "@material-ui/core/Typography";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import {formatDate} from '../functions';

const ConfirmAddForm = ({data}) => {
    return (
        <div className="conformationForm">
            <div className="flexData">
                <Typography variant="h6" component="h2">{data.name}</Typography>
                <Typography variant="h6" component="h2">{data.contrAgent1}</Typography>
                <Typography variant="h6" component="h2">{data.contrAgent2}</Typography>
                <Typography variant="h6" component="h2">{data.type}</Typography>
                <Typography variant="h6" component="h2">{formatDate(data.startDate)} - {formatDate(data.endDate)}</Typography>
            </div>
            <div className="flexData">
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            Прикрепленные документы
                        </ListSubheader>
                    }
                >
                    <ListItem button>
                        <ListItemText primary="Документ договора" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Письмо аренды" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Накладная" />
                    </ListItem>
                </List>
            </div>
        </div>
    )
};

export default ConfirmAddForm