import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from 'Components/AppLayout';
import FlightInquiryPage from 'Pages/FlightInquiryPage';
import FlightList from 'Pages/FlightList';
import CabinSelection from 'Pages/CabinSelection';
import NotFound from 'Pages/NotFound';

import 'Styles/index.scss';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<FlightInquiryPage />} />
          <Route path="/list" element={<FlightList />} />
          <Route path="/cabin" element={<CabinSelection />} />
        </Route>

        { /* CATCH ALL */}
        <Route path="*" element={<NotFound />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
