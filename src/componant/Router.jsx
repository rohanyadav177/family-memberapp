import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndividualPolicy from './IndividualPolicy';
import ViewMemberPage from './ViewMemberPage';
import AddFamilyMemberForm from './FamilyPolicy';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<IndividualPolicy />} /> */}
        {/* <Switch> */}
        {/* <Route path="/view-members" element={<ViewMemberPage />} /> */}
        <Route path="/FamilyPolicy" element={<AddFamilyMemberForm />} />
        {/* </Switch> */}
        
      </Routes>
    </BrowserRouter>
  );
}
