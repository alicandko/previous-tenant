import React, { ReactElement, ReactNode } from 'react';
import { TenantDetailsPage } from './TenantDetailsPage/TenantDetailsPage';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

interface PageContainerProps {
  className?: string;
  children?: ReactNode;
}
const PageContainer = styled((props: PageContainerProps) => (
  <Grid container className={props.className}>
    {props.children}
  </Grid>
))`
  margin-top: 30px;
  margin-bottom: 150px;
`;

export const App: React.FC = () => (
  <PageContainer>
    <TenantDetailsPage />
  </PageContainer>
);
