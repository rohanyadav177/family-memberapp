import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ViewMemberPage from './ViewMemberPage';
import AddFamilyMemberForm from './FamilyPolicy';
import Payment from './Payment';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ViewMemberPage" element={<ViewMemberPage />} />
        <Route path="/" element={<AddFamilyMemberForm/>} />
        <Route path="/Payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
