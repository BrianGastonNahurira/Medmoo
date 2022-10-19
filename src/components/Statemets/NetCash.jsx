import React from 'react'
import { 
    TableContainer,
    Table, 
    TableHead,
    TableBody, 
    TableRow, 
    TableCell, 
    Paper  
} from '@mui/material'

export const NetCash = () => {
  return (
       <TableContainer component={Paper} >
        <Table aria-aria-label='simple table' stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell 
                        style={{
                            color:"blue",
                            fontWeight:'bolder',
                            fontSize:'1.2rem'
                        }}
                        >Details
                    </TableCell>
                    <TableCell 
                        style={{
                            color:"blue",
                            fontWeight:'bolder',
                            fontSize:'1.2rem'  
                        }}
                        align='center'
                        >Amount(Ugshs)
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
               <TableCell>TOTAL BORROWED</TableCell>
               <TableCell  align='center'>50000</TableCell>
            </TableBody>
            <TableBody>
               <TableCell>TOTAL REPAID</TableCell>
               <TableCell  align='center'>60000</TableCell>
            </TableBody>
            <TableBody>
               <TableCell>NET CASH FLOW</TableCell>
               <TableCell  align='center'>10000</TableCell>
            </TableBody>
        </Table>
    </TableContainer>

    
  )
}

const tableData = [
  {Borrowed: "50000",
  Repaid: "60000",
  NetCashFlow :"10000",
  },

]