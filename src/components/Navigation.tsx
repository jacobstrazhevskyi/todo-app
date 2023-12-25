import React from 'react';

import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
} from '@mui/material';

import { NavLink } from 'react-router-dom';

export const Navigation: React.FC = () => {
  return (
    <AppBar>
      <Container>
        <Toolbar>
          <Box>
            <Button variant="contained">
              <NavLink to="/home">
                HOME
              </NavLink>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
