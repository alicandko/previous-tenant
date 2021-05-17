import React from 'react';
import { DataGrid, GridColDef, GridRowsProp } from '@material-ui/data-grid';

import text from '../de.json';
import styled from 'styled-components';
import { Grid, TextField } from '@material-ui/core';

const DataGridSC = styled(DataGrid)`
  width: 100%;
`;

const SearchField = styled(TextField)`
  margin-bottom: 10px;
`;

const rows: GridRowsProp = [
  {
    id: 1,
    streetAndHouseNumber: 'Hello Str. 12',
    city: 'Berlin',
    postalCode: '55555',
    commencementOfContract: '12.12.1992',
    coldRent: 5,
    warmRent: 100,
    flatRent: 0,
    email: 'hjhjh@asksak.com',
    phoneNumber: '1525262762',
  },
  {
    id: 2,
    streetAndHouseNumber: 'Something Str. 18',
    city: 'Berlin',
    postalCode: '55555',
    commencementOfContract: '12.12.1992',
    coldRent: 8,
    warmRent: 100,
    flatRent: 0,
    email: 'hjhjh@asksak.com',
    phoneNumber: '1525262762',
  },
  {
    id: 3,
    streetAndHouseNumber: 'Yo Str. 56',
    city: 'Berlin',
    postalCode: '55555',
    commencementOfContract: '12.12.1992',
    coldRent: 22,
    warmRent: 100,
    flatRent: 0,
    email: 'hjhjh@asksak.com',
    phoneNumber: '1525262762',
  },
];

const columns: GridColDef[] = [
  { field: 'streetAndHouseNumber', headerName: `${text.streetAndHouseNumber}`, width: 250 },
  { field: 'city', headerName: `${text.city}`, width: 150 },
  { field: 'postalCode', headerName: `${text.postalCode}`, width: 150 },
  { field: 'commencementOfContract', headerName: `${text.commencementOfContract}`, width: 150 },
  { field: 'coldRent', headerName: `${text.coldRent}`, width: 150 },
  { field: 'warmRent', headerName: `${text.warmRent}`, width: 150 },
  { field: 'flatRent', headerName: `${text.flatRent}`, width: 150 },
  { field: 'email', headerName: `${text.email}`, width: 150 },
  { field: 'phoneNumber', headerName: `${text.phoneNumber}`, width: 200 },
];

export const Table: React.FC = () => (
  <>
    <SearchField label="Search" variant="outlined" />
    <DataGridSC autoHeight rows={rows} columns={columns} />
  </>
);
