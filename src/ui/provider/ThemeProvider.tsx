'use client';
import { Normalize, theme } from '@ui/theme';
import { type PropsWithChildren } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';

function ThemeProvider(props: PropsWithChildren): JSX.Element {
  return (
    <StyledProvider theme={theme}>
      <Normalize />
      {props.children}
    </StyledProvider>
  );
}

export default ThemeProvider;
