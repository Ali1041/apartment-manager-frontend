import styled from '@emotion/styled'
import { Checkbox, Paper, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      textAlign: 'center'
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      textAlign: 'center'
    },
  }));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const Rooms = () => {
    const rooms = [
        {
            ID: 1,
            AppartmentId: 1,
            Rent: 10000,
            Description: 'middle room',
            HaveCupboard: true,
            HaveAC: false,
            HaveWashroom: true,
            WashroomType: 'Cammod',
            UserId: 2
        },
        {
            ID: 2,
            AppartmentId: 1,
            Rent: 10000,
            Description: 'middle room',
            HaveCupboard: true,
            HaveAC: false,
            HaveWashroom: true,
            WashroomType: 'Cammod',
            UserId: 2
        }
    ]
  return (
      <TableContainer component={Paper}>
          <Table>
              <TableHead>
                  <TableRow>
                      <StyledTableCell>Room Number</StyledTableCell>
                      <StyledTableCell>Living</StyledTableCell>
                      <StyledTableCell>Have AC</StyledTableCell>
                      <StyledTableCell>Have Washroom</StyledTableCell>
                      <StyledTableCell>Have Cupboard</StyledTableCell>
                      <StyledTableCell>Wasroom Type</StyledTableCell>
                      <StyledTableCell>Description</StyledTableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  {rooms.map((room) => (
                      <StyledTableRow key={room.ID}>
                        <StyledTableCell>{room.ID}</StyledTableCell>
                        <StyledTableCell>{room.UserId}</StyledTableCell>
                        <StyledTableCell><Checkbox disabled checked={room.HaveAC}></Checkbox></StyledTableCell>
                        <StyledTableCell><Checkbox disabled checked={room.HaveWashroom}></Checkbox></StyledTableCell>
                        <StyledTableCell><Checkbox disabled checked={room.HaveCupboard}></Checkbox> </StyledTableCell>
                        <StyledTableCell>{room.WashroomType}</StyledTableCell>
                        <StyledTableCell>{room.Description}</StyledTableCell>
                      </StyledTableRow>
                  ))}
              </TableBody>
          </Table>
      </TableContainer>
  )
}

export default (Rooms);