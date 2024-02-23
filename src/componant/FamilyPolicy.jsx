import React, { useState } from 'react';
import './FamilyPolicy.css'
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import ViewMemberPage from './ViewMemberPage';

const AddFamilyMemberForm = ({ onSubmit }) => {
    const [fullName, setFullName] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [relationship, setRelationship] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [occupation, setOccupation] = useState('');


    const naviagte = Navigate();


    const handleButtonClick = () => {
        // Navigate to another page when the button is clicked
        Navigate('/view-members')
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!fullName || !dateOfBirth || !mobileNo || !relationship || !gender || !occupation) {
            alert('Please fill out all required fields.');
            return;
        }

        // Send POST request to create new family member
        try {
            const response = await axios.post('http://localhost:9999/family-members', {
                fullName,
                mobileNo,
                relationship,
                dateOfBirth,
                gender,
                occupation,
            });
            alert('Family member added successfully.');
            // Clear form fields
            setFullName('');
            setMobileNo('');
            setRelationship('');
            setDateOfBirth('');
            setGender('');
            setOccupation('');
        } catch (error) {
            console.error('Error adding family member:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
<div className='form-container'>
    <h2>Add Family Member Details</h2>
    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label>
                Full Name:
                <input type="text" value={fullName} className="form-control" onChange={(e) => setFullName(e.target.value)} />
            </label>
        </div>
        <div className="form-group">
            <label>

                Mobile Number:
                <input type="text" value={mobileNo} className="form-control" onChange={(e) => setMobileNo(e.target.value)} />
            </label>
        </div>
        <div className="form-group">
            <label>
                Relationship:
                <select value={relationship} className="form-control" onChange={(e) => setRelationship(e.target.value)}>
                    <option value="">Select Relationship</option>
                    <option value="Parent">Parent</option>
                    <option value="Child">Child</option>
                    <option value="Sibling">Sibling</option>
                    <option value="Spouse">Spouse</option>
                    <option value="Other">Other</option>
                </select>
            </label>
        </div>
        <div className="form-group">
            <label>
                Date of Birth:
                <input type="date" value={dateOfBirth} className="form-control" onChange={(e) => setDateOfBirth(e.target.value)} />
            </label>
        </div>
        <div className="form-group">
            <label>
                Gender:
                <select value={gender} className="form-control" onChange={(e) => setGender(e.target.value)}>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
            </label>
        </div>
        <div className="form-group">
            <label>
                Occupation:
                <select value={occupation} className="form-control" onChange={(e) => setOccupation(e.target.value)}>
                    <option value="">Select Occupation</option>
                    <option value="Student">Student</option>
                    <option value="Employee">Employee</option>
                    <option value="Other">Other</option>
                </select>
            </label>
        </div>
        <button type="submit" className='btn-primary'>Add Family Member</button>
        <span style={{ marginRight: '198px' }}></span>
        {/* <button type="button" className='btn-primary' onClick={() => window.location.href = '/componant/ViewMemberPage.jsx'}>
    View members
        </button> */}
    <button onClick={handleButtonClick}>Go to Another Page</button>
    </form>
</div>
    );
};

export default AddFamilyMemberForm;

// import React, { useState } from "react";
// import "./FamilyPolicy.css";
// import axios from "axios";

// const AddFamilyMemberForm = ({ navigateToMemberList }) => {
//   const [fullName, setFullName] = useState("");
//   const [mobileNo, setMobileNo] = useState("");
//   const [relationship, setRelationship] = useState("");
//   const [dateOfBirth, setDateOfBirth] = useState("");
//   const [gender, setGender] = useState("");
//   const [occupation, setOccupation] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (
//       !fullName ||
//       !dateOfBirth ||
//       !mobileNo ||
//       !relationship ||
//       !gender ||
//       !occupation
//     ) {
//       alert("Please fill out all required fields.");
//       return;
//     }

//     try {
//       // Send POST request to create new family member
//       const response = await axios.post(
//         "http://localhost:9999/family-members",
//         {
//           fullName,
//           mobileNo,
//           relationship,
//           dateOfBirth,
//           gender,
//           occupation,
//         }
//       );
//       alert("Family member added successfully.");
//       // Clear form fields
//       setFullName("");
//       setMobileNo("");
//       setRelationship("");
//       setDateOfBirth("");
//       setGender("");
//       setOccupation("");
//     } catch (error) {
//       console.error("Error adding family member:", error);
//       alert("An error occurred. Please try again later.");
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2>Add Family Member Details</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Your form fields */}

//         <div className="form-group">
//           <label>
//             Full Name:
//             <input
//               type="text"
//               value={fullName}
//               className="form-control"
//               onChange={(e) => setFullName(e.target.value)}
//             />
//           </label>
//         </div>
//         <div className="form-group">
//           <label>
//             Mobile Number:
//             <input
//               type="text"
//               value={mobileNo}
//               className="form-control"
//               onChange={(e) => setMobileNo(e.target.value)}
//             />
//           </label>
//         </div>
//         <div className="form-group">
//           <label>
//             Relationship:
//             <select
//               value={relationship}
//               className="form-control"
//               onChange={(e) => setRelationship(e.target.value)}
//             >
//               <option value="">Select Relationship</option>
//               <option value="Parent">Parent</option>
//               <option value="Child">Child</option>
//               <option value="Sibling">Sibling</option>
//               <option value="Spouse">Spouse</option>
//               <option value="Other">Other</option>
//             </select>
//           </label>
//         </div>
//         <div className="form-group">
//           <label>
//             Date of Birth:
//             <input
//               type="date"
//               value={dateOfBirth}
//               className="form-control"
//               onChange={(e) => setDateOfBirth(e.target.value)}
//             />
//           </label>
//         </div>
//         <div className="form-group">
//           <label>
//             Gender:
//             <select
//               value={gender}
//               className="form-control"
//               onChange={(e) => setGender(e.target.value)}
//             >
//               <option value="">Select Gender</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//               <option value="Other">Other</option>
//             </select>
//           </label>
//         </div>
//         <div className="form-group">
//           <label>
//             Occupation:
//             <select
//               value={occupation}
//               className="form-control"
//               onChange={(e) => setOccupation(e.target.value)}
//             >
//               <option value="">Select Occupation</option>
//               <option value="Student">Student</option>
//               <option value="Employee">Employee</option>
//               <option value="Other">Other</option>
//             </select>
//           </label>
//         </div>

//         <button type="submit" className="btn-primary">
//           Add Family Member
//         </button>
//         <span style={{ marginRight: "195px" }}></span>
//         <button
//           type="button"
//           onClick={navigateToMemberList}
//           className="btn-primary"
//         >
//           View Member List
//         </button>
//       </form>
//     </div>
//   );
// };

// const MemberList = () => {
//   // Component to display member list
//   return (
//     <div>
//       <h2>Member List</h2>
//       {/* Display member list here */}
//     </div>
//   );
// };

// const ParentComponent = () => {
//   const [currentPage, setCurrentPage] = useState("form");

//   const navigateToMemberList = () => {
//     setCurrentPage("memberList");
//   };

//   return (
//     <div>
//       {currentPage === "form" && (
//         <AddFamilyMemberForm navigateToMemberList={navigateToMemberList} />
//       )}
//       {currentPage === "memberList" && <MemberList />}
//     </div>
//   );
// };

// export default ParentComponent;


