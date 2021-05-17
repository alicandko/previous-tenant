import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import '@fontsource/roboto';

const GlobalStyle = createGlobalStyle`
	html {
		scroll-behavior : smooth;
	}
	
	html, body {
		font-family: "Roboto";
		font-size: 15px;
		background-color: #e7e7ec;
		width: 100%;
		min-height: 100%;
		overflow-x: hidden;
		margin: 0;
	}
	
	#root {
		min-height: 100%;
	}
`;

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
