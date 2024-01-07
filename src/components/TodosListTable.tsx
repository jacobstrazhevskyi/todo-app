import React from 'react';

import { Table } from '@mui/material';
import { EnhancedTableHead } from './EnhancedTableHead';
import { EnhancedTableBody } from './EnhancedTableBody';

export const TodosListTable: React.FC = () => {
  return (
    <Table>
      <EnhancedTableHead />
      <EnhancedTableBody />
    </Table>
  );
};
