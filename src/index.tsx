import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppShell, MantineProvider, createTheme } from '@mantine/core';

import '@mantine/core/styles.css';
import { Header } from './components/header/header';

const theme = createTheme({
  scale: 1,
  colors: {
    black: [
      "#011826",
      "#000D13",
      "#000019",
      "#000326",
      "#000639",
      "#00094C",
      "#000C5F",
      "#000F72",
      "#001285",
      "#001698"
    ],
    green: [
      "#2BBC9F",
      "#28B695",
      "#25AC8B",
      "#22A281",
      "#1F9977",
      "#1C906D",
      "#198763",
      "#168E59",
      "#13854F",
      "#107C45"
    ],
  },
  primaryColor: "green",
  primaryShade: { dark: 3 },
  fontFamily: "Inclusive Sans",
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MantineProvider
      defaultColorScheme='dark' theme={theme}>
      <Header />
      <App />
    </MantineProvider>
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
