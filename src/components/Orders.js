import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Search from "./Search";

// Generate Order Data
function createData(id, date, agent1, agent2, exDate, type) {
    return { id, date, agent1, agent2, exDate, type };
}

const rows = [
    createData(0, '12 Мар, 2019', 'Аптека Славутич', 'Поставщик Боярышника', '14 Мар, 2020', 312.44),
    createData(1, '16 Апр, 2019', 'Аптека Славутич', 'ООО Доктор Леа', '15 Апр, 2020', 866.99),
    createData(2, '02 Мая, 2019', 'Аптека Славутич', 'Наркопритон', '30 Мар, 2020', 100.81),
    createData(3, '21 Сен, 2019', 'Аптека Славутич', 'Завод гашиша', '25 Мар, 2021', 654.39),
    createData(4, '12 Мар, 2019', 'Аптека Славутич', 'Поставщик Боярышника', '14 Мар, 2020', 312.44),
    createData(5, '16 Апр, 2019', 'Аптека Славутич', 'ООО Доктор Леа', '15 Апр, 2020', 866.99),
    createData(6, '02 Мая, 2019', 'Аптека Славутич', 'Наркопритон', '30 Мар, 2020', 100.81),
    createData(7, '21 Сен, 2019', 'Аптека Славутич', 'Завод гашиша', '25 Мар, 2021', 654.39),
    createData(8, '12 Мар, 2019', 'Аптека Славутич', 'Поставщик Боярышника', '14 Мар, 2020', 312.44),
    createData(9, '16 Апр, 2019', 'Аптека Славутич', 'ООО Доктор Леа', '15 Апр, 2020', 866.99),
    createData(11, '02 Мая, 2019', 'Аптека Славутич', 'Наркопритон', '30 Мар, 2020', 100.81),
    createData(12, '21 Сен, 2019', 'Аптека Славутич', 'Завод гашиша', '25 Мар, 2021', 654.39),
    createData(13, '12 Мар, 2019', 'Аптека Славутич', 'Поставщик Боярышника', '14 Мар, 2020', 312.44),
    createData(14, '16 Апр, 2019', 'Аптека Славутич', 'ООО Доктор Леа', '15 Апр, 2020', 866.99),
    createData(15, '02 Мая, 2019', 'Аптека Славутич', 'Наркопритон', '30 Мар, 2020', 100.81),
    createData(16, '21 Сен, 2019', 'Аптека Славутич', 'Завод гашиша', '25 Мар, 2021', 654.39),
    createData(17, '15 Окт, 2019', 'Аптека Славутич', 'Национальный банк Украины', '02 Сен 2020', 212.79),
];

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles(theme => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
    lineSelect: {
        cursor: 'pointer',
        transition: 'all .3s ease',
        '&:hover': {
            background: 'rgb(204, 204, 204, .3);'
        },
    }
}));

function Orders(props) {
    const classes = useStyles();

    const handleClick = (id) => {
        props.history.push(`/contract/${id}`)
    }

    return (
        <React.Fragment>
            <Search/>
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
                        <TableRow className={classes.lineSelect} key={row.id} onClick={handleClick.bind(this, row.id)}>
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

export default Orders