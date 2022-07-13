import {
    TableContainer,
    Table,
    TableCell,
    TableBody,
    TableHeader,
    TableFooter,
    TableRow
  } from '@amsterdam/asc-ui'


  export default function DecompositionTable() {
    return (
      <TableContainer>
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell>
                <h1>Decomposition Table</h1>
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <h2>Decomposition Table</h2>
              </TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell>
                <h2>Decomposition Table</h2>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    )
  }
