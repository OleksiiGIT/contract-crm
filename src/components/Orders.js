import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// Generate Order Data
function createData(id, date, agent1, agent2, exDate, type) {
    return { id, date, agent1, agent2, exDate, type };
}

const rows = [
    createData(0, '12 Мар, 2019', 'Аптека Славутич', 'Поставщик Боярышника', '14 Мар, 2020', 312.44),
    createData(1, '16 Апр, 2019', 'Аптека Славутич', 'ООО Доктор Леа', '15 Апр, 2020', 866.99),
    createData(2, '02 Мая, 2019', 'Аптека Славутич', 'Наркопритон', '30 Мар, 2020', 100.81),
    createData(3, '21 Сен, 2019', 'Аптека Славутич', 'Завод гашиша', '25 Мар, 2021', 654.39),
    createData(0, '12 Мар, 2019', 'Аптека Славутич', 'Поставщик Боярышника', '14 Мар, 2020', 312.44),
    createData(1, '16 Апр, 2019', 'Аптека Славутич', 'ООО Доктор Леа', '15 Апр, 2020', 866.99),
    createData(2, '02 Мая, 2019', 'Аптека Славутич', 'Наркопритон', '30 Мар, 2020', 100.81),
    createData(3, '21 Сен, 2019', 'Аптека Славутич', 'Завод гашиша', '25 Мар, 2021', 654.39),
    createData(0, '12 Мар, 2019', 'Аптека Славутич', 'Поставщик Боярышника', '14 Мар, 2020', 312.44),
    createData(1, '16 Апр, 2019', 'Аптека Славутич', 'ООО Доктор Леа', '15 Апр, 2020', 866.99),
    createData(2, '02 Мая, 2019', 'Аптека Славутич', 'Наркопритон', '30 Мар, 2020', 100.81),
    createData(3, '21 Сен, 2019', 'Аптека Славутич', 'Завод гашиша', '25 Мар, 2021', 654.39),
    createData(0, '12 Мар, 2019', 'Аптека Славутич', 'Поставщик Боярышника', '14 Мар, 2020', 312.44),
    createData(1, '16 Апр, 2019', 'Аптека Славутич', 'ООО Доктор Леа', '15 Апр, 2020', 866.99),
    createData(2, '02 Мая, 2019', 'Аптека Славутич', 'Наркопритон', '30 Мар, 2020', 100.81),
    createData(3, '21 Сен, 2019', 'Аптека Славутич', 'Завод гашиша', '25 Мар, 2021', 654.39),
    createData(4, '15 Окт, 2019', 'Аптека Славутич', 'Национальный банк Украины', '02 Сен 2020', 212.79),
];

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles(theme => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
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

export default function Orders() {
    const classes = useStyles();

    return (
        <React.Fragment>
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
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Дата подписания</TableCell>
                        <TableCell>Контрагент №1</TableCell>
                        <TableCell>Контрагент №2</TableCell>
                        <TableCell>Срок окончания</TableCell>
                        <TableCell align="right">Тип договора</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.id}>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.agent1}</TableCell>
                            <TableCell>{row.agent2}</TableCell>
                            <TableCell>{row.exDate}</TableCell>
                            <TableCell align="right">{row.type}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className={classes.seeMore}>
                <Link color="primary" href="#" onClick={preventDefault}>
                    See more orders
                </Link>
            </div>
        </React.Fragment>
    );
}