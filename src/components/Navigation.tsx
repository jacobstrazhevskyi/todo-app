/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';

import {
  Box,
  Tabs,
  Tab,
} from '@mui/material';

import { styled } from 'styled-components';

const FullWidthTabs = styled(Tabs)`
  display: flex;
  justify-content: center;
`;

const CenteredTab = styled(Tab)`
  flex-grow: 1;
`;

export const Navigation: React.FC = () => {
  const [value, setValue] = useState(0);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const changeHandler = (_event: any, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <FullWidthTabs value={value} onChange={changeHandler}>
        <CenteredTab label="Item 1" />
        <CenteredTab label="Item 2" />
        <CenteredTab label="Item 3" />
        <CenteredTab label="Item 4" />
      </FullWidthTabs>
    </Box>
  );
};
