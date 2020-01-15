import React from 'react'
import TextField from "@material-ui/core/TextField";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Grid from "@material-ui/core/Grid";
import DateFnsUtils
    from '@date-io/date-fns';

const AddFormFields = (props) => {
    const [selectedDateStart, setSelectedDateStart] = React.useState();
    const [selectedDateEnd, setSelectedDateEnd] = React.useState();

    const handleDateChangeStart = date => {
        setSelectedDateStart(date);
        props.onChange(date, "startDate")
    };

    const handleDateChangeEnd = date => {
        setSelectedDateEnd(date);
        props.onChange(date, "endDate")
    };

    const handleChange = (event) => {
        props.onChange(event.target.value, event.target.id)
    }

    return (
        <div className="FormAddContract">
            <TextField id="contrAgent1" label="Контр-агент 1" onChange={handleChange} />
            <TextField id="contrAgent2" label="Контр-агент 2"  onChange={handleChange}/>
            <TextField id="type" label="Тип договора"  onChange={handleChange}/>
            <div className="datePickers">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                        <KeyboardDatePicker
                            clearable
                            value={selectedDateStart}
                            label="Дата начала договора"
                            onChange={date => handleDateChangeStart(date)}
                            minDate={new Date()}
                            format="dd/MM/yyyy"
                        />
                    </Grid>
                    <Grid container justify="space-around">
                        <KeyboardDatePicker
                            clearable
                            value={selectedDateEnd}
                            label="Дата окончания договора"
                            onChange={date => handleDateChangeEnd(date)}
                            minDate={new Date()}
                            format="dd/MM/yyyy"
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
            </div>
        </div>
    )
}

export default AddFormFields