import React from 'react';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    searchControls: {
        display: 'flex',
        flexDirection: 'row',
        margin: '0 0 30px 30px',
        width: '50%',
        justifyContent: 'space-around',
        alignItems: 'flex-end'
    },
    formControl: {
        minWidth: 200
    }
}));

const Search = () => {
    const classes = useStyles();

    return (
        <div className={classes.searchControls}>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Критерий поиска</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                >
                    <MenuItem value={10}>Дата подписания</MenuItem>
                    <MenuItem value={20}>Контрагент 1</MenuItem>
                    <MenuItem value={30}>Контрагент 2</MenuItem>
                    <MenuItem value={40}>Срок окончания</MenuItem>
                    <MenuItem value={50}>Тип договора</MenuItem>
                </Select>
            </FormControl>
            <TextField id="standard-basic" label="Что искать?" />
            <Button variant="outlined" color="primary" href="#outlined-buttons">
                Поиск
            </Button>
        </div>
    )
}

export default Search