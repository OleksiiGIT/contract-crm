import React from 'react';
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import {ExpandLess, ExpandMore} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

class Contract extends React.Component {

    state = {
        open: false
    }

    handleClick() {
        console.log(this)
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        const {id} = this.props.match.params;

        return (
            <div>
                <Typography align="center" variant="h3" component="h3">
                    Договор № 123{id} <br /> Аптека Славутич - Завод Шевченко
                </Typography>
                <Typography align="center" variant="h6" component="h6">
                    Тип договора - двусторонний
                </Typography>
                <Divider className="dividerMargin"/>
                {/*<h3>Срок действия договора 1 год (осталось 43 дня)</h3>*/}
                {/*<p>12 Мар, 2019 - 14 Мар, 2020</p>*/}
                {/*<h5>Тип договора - двусторонний</h5>*/}
                <Typography align="center" variant="h5" component="h5">
                    Срок действия договора 1 год (осталось 43 дня)
                </Typography>
                <Typography align="center" variant="h6" component="h6">
                    12 Мар, 2019 - 14 Мар, 2020
                </Typography>
                <Divider className="dividerMargin" />
                <div className="documentsIncluded">
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
                    <List
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader">
                                Акты выполненных работ
                            </ListSubheader>
                        }
                    >
                        <ListItem button onClick={this.handleClick.bind(this)}>
                            <ListItemText primary="2020" />
                            {this.state.open ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem button>
                                    <ListItemText primary="Январь" />
                                </ListItem>
                            </List>
                        </Collapse>
                        <ListItem button onClick={this.handleClick.bind(this)}>
                        <ListItemText primary="2019" />
                            {this.state.open ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem button>
                                    <ListItemText primary="Январь" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Февраль" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Март" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Апрель" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Май" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Июнь" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Июль" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Август" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Сентябрь" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Октябрь" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Ноябрь" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Декабрь" />
                                </ListItem>

                            </List>
                        </Collapse>
                    </List>
                </div>
            </div>
        )
    }
}

export default Contract;