import React from 'react';
import './App.scss';
import {AppDataProvider} from "./contexts/App.context";
import RenderRoutes from "./core/routes";

function App() {
  return (
    <AppDataProvider>
      <RenderRoutes />
    </AppDataProvider>
  );
}

export default App;
