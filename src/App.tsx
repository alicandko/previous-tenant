import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { Route, Router, Switch } from 'react-router';
import { createBrowserHistory } from 'history';

import { RentFormPage } from './RentFormPage/RentFormPage';
import { RentTablePage } from './RentTablePage/RentTablePage';

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
      <Route exact path="/rent-table">
        <PageContainer>
          <RentTablePage />
        </PageContainer>
      </Route>
      <Route exact path="/rent-form">
        <PageContainer>
          <RentFormPage />
        </PageContainer>
      </Route>
      <Route>
        <PageContainer>404</PageContainer>
      </Route>
    </Switch>
  </Router>
);
