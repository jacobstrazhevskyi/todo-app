import React from 'react';

import {
  AppBar,
  Box,
  Button,
  Container,
  MenuItem,
  Select,
  Toolbar,
  styled,
  useTheme,
} from '@mui/material';

import uuid from 'react-uuid';

import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../app/hooks';
import { selectTheme } from '../features/selectedTheme';
import { themes } from '../utils/themes';

const FlexBox = styled(Box)({
  display: 'flex',
  gap: '10px',
});

const RelativePositionAppBar = styled(AppBar)({
  position: 'relative',
  marginBottom: '30px',
});

const NavigationToolbar = styled(Toolbar)({
  display: 'flex',
  gap: 30,
});

const getMenuItemText = (selectedThemeName: string) => {
  const themeNameSplited = selectedThemeName.split(/(?<![A-Z])(?=[A-Z])/);

  themeNameSplited.filter(word => word.toLowerCase() !== 'theme');
  const joinedThemeName = themeNameSplited.join(' ');
  const resultThemeName = joinedThemeName[0]
    .toUpperCase() + joinedThemeName.slice(1);

  return `${resultThemeName} theme`;
};

export const Navigation: React.FC = () => {
  const theme = useTheme();

  const StyledButton = styled(Button)({
    '&.active-link': {
      color: theme.palette.text.secondary,
    },
  });

  const dispatch = useAppDispatch();

  return (
    <RelativePositionAppBar>
      <Container>
        <NavigationToolbar>
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
          <Box>
            <Select
              autoWidth
              defaultValue={
                localStorage.getItem('theme') || localStorage.getItem('OSTheme')
              }
              onChange={(event) => {
                dispatch(selectTheme(event.target.value as string));
              }}
              variant="standard"
            >
              {themes.map((themeFromStorage) => (
                <MenuItem
                  value={themeFromStorage.themeName}
                  key={uuid()}
                >
                  {getMenuItemText(themeFromStorage.themeName)}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </NavigationToolbar>
      </Container>
    </RelativePositionAppBar>
  );
};
