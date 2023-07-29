import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { visuallyHidden } from '@mui/utils';


function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
    console.log(comparator);
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}



const DEFAULT_ORDER = 'asc';
const DEFAULT_ORDER_BY = 'Name';
const DEFAULT_ROWS_PER_PAGE = 5;

function EnhancedTableHead(props) {
    const { order, orderBy, onRequestSort, columnHeaders } =
        props;
    const createSortHandler = (newOrderBy) => (event) => {
        onRequestSort(event, newOrderBy);
    };

    return (
        <TableHead>
            <TableRow>
                {columnHeaders.map((header) => (
                    <TableCell
                        key={header}
                        align={'left'}
                        padding={'normal'}
                        sortDirection={orderBy === header ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === header}
                            direction={orderBy === header ? order : 'asc'}
                            onClick={createSortHandler(header)}
                        >
                            {header}
                            {orderBy === header ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    columnHeaders: PropTypes.array.isRequired
};


export default function EnhancedTable({ model }) {
    const [order, setOrder] = React.useState(DEFAULT_ORDER);
    const [orderBy, setOrderBy] = React.useState(DEFAULT_ORDER_BY);
    const [visibleRows, setVisibleRows] = React.useState(null);

    React.useEffect(() => {
        let rowsOnMount = stableSort(
            model,
            getComparator(DEFAULT_ORDER, DEFAULT_ORDER_BY),
        );

        rowsOnMount = rowsOnMount.slice(
            0 * DEFAULT_ROWS_PER_PAGE,
            0 * DEFAULT_ROWS_PER_PAGE + DEFAULT_ROWS_PER_PAGE,
        );
        setVisibleRows(rowsOnMount);
    }, [model]);

    const handleRequestSort = React.useCallback(
        (event, newOrderBy) => {
            const isAsc = orderBy === newOrderBy && order === 'asc';
            const toggledOrder = isAsc ? 'desc' : 'asc';
            setOrder(toggledOrder);
            setOrderBy(newOrderBy);

            const sortedRows = stableSort(model, getComparator(toggledOrder, newOrderBy));
            setVisibleRows(sortedRows);
        },
        [order, orderBy, model],
    );


    return (
        <TableContainer>
            <Table
                sx={{ minWidth: 750 }}
                aria-labelledby="tableTitle"
            >
                <EnhancedTableHead
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                    rowCount={model.length}
                    columnHeaders={Object.keys(model[0])}
                />
                <TableBody>
                    {
                        visibleRows?.map((row) => {
                            return (
                                <TableRow
                                    hover
                                    role="checkbox"
                                    tabIndex={-1}
                                    key={row.name}
                                    sx={{ cursor: 'pointer' }}>
                                    {Object.keys(row).map(column => {
                                        return (
                                            <TableCell align="left">{row[column]}</TableCell>
                                        )
                                    })
                                    }
                                </TableRow>
                            )
                        })
                    }
                    <TableRow>
                        <TableCell colSpan={6} />
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

EnhancedTable.propTypes = {
    model: PropTypes.array.isRequired
}