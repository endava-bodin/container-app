import React, { lazy, Suspense, useEffect } from 'react';
import './App.css';
import communicationService from './services/CommunicationService';

const BarChartWidget = lazy(() => import('BarChartWidgetApp/BarChartWidget'));
const TableWidget = lazy(() => import('TableWidget/table-widget'));

function App() {
  const config = {
    communicationService,
  };

  useEffect(() => {
    communicationService.createChannel("bar_chart_selection")
  }, []);

  return (
    <div className="App">
      <div className="container">This is a container app</div>
      <Suspense fallback={<div>Loading BarChartWidget...</div>}>
        <BarChartWidget config={config} />
        <TableWidget config={config} />
      </Suspense>
    </div>
  );
}

export default App;