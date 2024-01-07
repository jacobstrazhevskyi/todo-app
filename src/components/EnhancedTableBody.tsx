import React from 'react';

import {
  Checkbox,
  TableBody,
  TableCell,
  TableRow,
} from '@mui/material';

export const EnhancedTableBody: React.FC = () => {
  return (
    <TableBody>
      <TableRow role="checkbox">
        <TableCell padding="checkbox">
          <Checkbox color="default" />
        </TableCell>
        <TableCell>
          chototam chotatam takoe proporcionalnoe
        </TableCell>
        <TableCell>
          chototam
        </TableCell>
      </TableRow>
    </TableBody>
  );
};
