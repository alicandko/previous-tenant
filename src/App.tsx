import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { Route, Router, Switch } from 'react-router';
import { createBrowserHistory } from 'history';

import { TenantDetailsPage } from './TenantDetailsPage/TenantDetailsPage';

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

const history = createBrowserHistory();

export const App: React.FC = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/rent-list">
        <PageContainer>aaaa</PageContainer>
      </Route>
      <Route exact path="/rent-form">
        <PageContainer>
          <TenantDetailsPage />
        </PageContainer>
      </Route>
    </Switch>
  </Router>
);
