import logo from './logo.svg';
import './App.css';
import AddFamilyMember from './componant/IndividualPolicy';
import AddFamilyMemberForm from './componant/FamilyPolicy';
import IndividualPolicy from './componant/IndividualPolicy';

import { Router } from 'react-router-dom';
import AppRouter from './componant/Router';



function App() {
  return (
    <>
      {/* <AddFamilyMember></AddFamilyMember> */}
     {/* <AddFamilyMemberForm></AddFamilyMemberForm> */}
      {/* <IndividualPolicy></IndividualPolicy> */}

      <AppRouter></AppRouter>

    </>
  );
}

export default App;
