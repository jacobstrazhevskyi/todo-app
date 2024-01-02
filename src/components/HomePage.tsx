import {
  Container,
  Paper,
  Typography,
  styled,
  useTheme,
} from '@mui/material';
import React from 'react';

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
        <Typography>
          HOME PAGE PAGE HOME HOME HOME PAGE HOME PAGE HOME
        </Typography>
      </BoxStyledPaper>
    </Container>
  );
};
