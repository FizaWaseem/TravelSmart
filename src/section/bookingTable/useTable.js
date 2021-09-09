import React, { useState } from 'react'
import { Table, TableHead, TableRow, TableCell, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    table: {
        marginTop: theme.spacing(3),
        '& thead th': {
            fontWeight: '600',
            fontSize:"14px",
            color: "black",
            background:"#faebd7"
        },
        '& tbody td': {
            fontWeight: '300',
        },
        '& tbody tr:hover': {
            backgroundColor: '#fffbf2',
            cursor: 'pointer',
        },
    },
}))

export default function useTable(records, headCells,filterFn) {

    const classes = useStyles();

    const TblContainer = props => (
        <Table className={classes.table}>
            {props.children}
        </Table>
    )

    const TblHead = props => {

        return (<TableHead>
            <TableRow>
                {
                    headCells.map(headCell => (
                        <TableCell style={{borderRightColor:"red",minWidth:"50px"}}>
                                    {headCell.label}
                        </TableCell>))
                }
            </TableRow>
        </TableHead>)
    }


    return {
        TblContainer,
        TblHead,
       
    }
}