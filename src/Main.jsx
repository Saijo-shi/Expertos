import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import AddNewCheck from './AddNewCheck';

const Main = () => {
  return (
    <Box>
      <AddNewCheck />
      <TableContainer>
        <Table variant="striped" colorScheme="blue" borderColor="blue">
          <TableCaption>Ранее проведенные проверки</TableCaption>
          <Thead>
            <Tr>
              <Th>ФИО</Th>
              <Th>Дата рождения</Th>
              <Th isNumeric>ИНН</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Иванов Иван Иванович</Td>
              <Td>12.01.1977</Td>
              <Td isNumeric>757784674810</Td>
            </Tr>
            <Tr>
              <Td>Иванов Иван Иванович</Td>
              <Td>12.01.1977</Td>
              <Td isNumeric>757784674810</Td>
            </Tr>
            <Tr>
              <Td>Иванов Иван Иванович</Td>
              <Td>12.01.1977</Td>
              <Td isNumeric>757784674810</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Main;
