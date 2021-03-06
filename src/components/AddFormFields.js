import React from 'react'
import TextField from "@material-ui/core/TextField";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Grid from "@material-ui/core/Grid";
import DateFnsUtils
    from '@date-io/date-fns';
import { getTomorrow } from "../functions";

const AddFormFields = (props) => {

    const handleDateChange = (name, date) => {
        props.onChange(date, name)
    };

    const handleChange = (event) => {
        props.onChange(event.target.value, event.target.id)
    };

    return (
        <div className="FormAddContract">
            <TextField id="name" label="Название договора" value={props.data.name} error={props.errors ? props.errors.name : false} onChange={handleChange} />
            <TextField id="contrAgent1" label="Контр-агент 1" value={props.data.contrAgent1} error={props.errors ? props.errors.contrAgent1 : false} onChange={handleChange} />
            <TextField id="contrAgent2" label="Контр-агент 2" value={props.data.contrAgent2} error={props.errors ? props.errors.contrAgent2 : false} onChange={handleChange}/>
            <TextField id="type" label="Тип договора" value={props.data.type} error={props.errors ? props.errors.type : false}  onChange={handleChange}/>
            <div className="datePickers">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                        <KeyboardDatePicker
                            clearable
                            value={props.data.startDate}
                            label="Дата начала договора"
                            onChange={date => handleDateChange("startDate", date)}
                            minDate={new Date()}
                            format="dd/MM/yyyy"
                            error={props.errors ? props.errors.startDate : false}
                        />
                    </Grid>
                    <Grid container justify="space-around">
                        <KeyboardDatePicker
                            clearable
                            value={props.data.endDate}
                            label="Дата окончания договора"
                            onChange={date => handleDateChange("endDate", date)}
                            minDate={getTomorrow()}
                            format="dd/MM/yyyy"
                            error={props.errors ? props.errors.endDate : false}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
            </div>
        </div>
    )
}

export default AddFormFields