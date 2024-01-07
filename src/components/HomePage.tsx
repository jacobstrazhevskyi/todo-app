import React from 'react';

import {
  Container,
  Paper,
  styled,
  useTheme,
} from '@mui/material';

import { TodosListTable } from './TodosListTable';

export const HomePage: React.FC = () => {
  const theme = useTheme();

  const BoxStyledPaper = styled(Paper)({
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.primary.main,
    padding: 10,
  });

  return (
    <Container>
      <BoxStyledPaper elevation={5}>
        <TodosListTable />
      </BoxStyledPaper>
    </Container>
  );
};
