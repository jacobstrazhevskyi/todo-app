import React from 'react';

import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  styled,
  useTheme,
} from '@mui/material';

import { NavLink } from 'react-router-dom';

const FlexBox = styled(Box)({
  display: 'flex',
  gap: '10px',
});

const RelativePositionAppBar = styled(AppBar)({
  position: 'relative',
});

export const Navigation: React.FC = () => {
  const theme = useTheme();

  const StyledButton = styled(Button)({
    '&.active-link': {
      color: theme.palette.text.secondary,
    },
  });

  return (
    <RelativePositionAppBar>
      <Container>
        <Toolbar>
          <FlexBox>
            <NavLink to="/home">
              {({ isActive }) => (
                <StyledButton
                  className={isActive ? 'active-link' : ''}
                  variant="contained"
                >
                  HOME
                </StyledButton>
              )}
            </NavLink>
            <NavLink to="/some">
              {({ isActive }) => (
                <StyledButton
                  className={isActive ? 'active-link' : ''}
                  variant="contained"
                >
                  SOME
                </StyledButton>
              )}
            </NavLink>
          </FlexBox>
        </Toolbar>
      </Container>
    </RelativePositionAppBar>
  );
};
