import React, { useEffect, useState } from 'react';

import {
  Checkbox,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from '@mui/material';

export const EnhancedTableHead: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (window.innerWidth <= 450) {
      setWindowWidth(450);
    }
  }, [window.innerWidth]);

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox color="default" />
        </TableCell>
        <TableCell>
          <TableSortLabel active>
            Todo Name
          </TableSortLabel>
        </TableCell>
        <TableCell>
          {windowWidth !== 450 && (
            <TableSortLabel active>
              Date
            </TableSortLabel>
          )}
        </TableCell>
      </TableRow>
    </TableHead>
  );
};
