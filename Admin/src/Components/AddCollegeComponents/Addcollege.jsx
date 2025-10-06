import React, { useState } from 'react';
import './AddCollege.css'; 

const INITIAL_COLLEGE_DATA = [
    { 
      name: "Anna University", 
      district: "Chennai", 
      state: "Tamil Nadu", 
      country: "India", 
      imageUrl: "https://www.annauniv.edu/images/ceg_campus.jpeg" 
    },
    { 
      name: "PSG College", 
      district: "Coimbatore", 
      state: "Tamil Nadu", 
      country: "India", 
      imageUrl: "https://www.psgtech.edu/images/eduWorld.jpg" 
    },
];

function AddCollege() {
    // A single state object to hold all form data
    const [formData, setFormData] = useState({
        name: '',
        district: '',
        state: '',
        country: '',
        imageUrl: '',
    });
    
    const [collegeList, setCollegeList] = useState(INITIAL_COLLEGE_DATA);
    const [popup, setPopup] = useState({ visible: false, message: '', type: '' });

    const showPopupMessage = (message, type) => {
        setPopup({ visible: true, message, type });
        setTimeout(() => setPopup({ visible: false, message: '', type: '' }), 3000); 
    };

    // A single handler for all form inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleAddCollege = (e) => {
        e.preventDefault();
        // Check if any field is empty
        if (Object.values(formData).some(value => value.trim() === '')) {
            showPopupMessage('Please fill in all fields.', 'error');
            return;
        }
        // Check for duplicates by name
        if (collegeList.some(college => college.name.toLowerCase() === formData.name.trim().toLowerCase())) {
            showPopupMessage('This college already exists.', 'error');
            return;
        }

        setCollegeList(prevList => [...prevList, formData]);
        
        // Reset the form
        setFormData({ name: '', district: '', state: '', country: '', imageUrl: '' });
        showPopupMessage('New college added successfully.', 'success');
    };

    return (
        <div className="page-container">
            {popup.visible && (
                <div className={`popup-message ${popup.type === 'success' ? 'popup-success' : 'popup-error'}`}>
                    {popup.message}
                </div>
            )}

            <div className="form-section">
                <form onSubmit={handleAddCollege} className="add-college-form">
                    <h2>Add College Details</h2>
                    <input name="name" type="text" placeholder="College Name" value={formData.name} onChange={handleInputChange} />
                    <div className="inline-inputs">
                        <input name="district" type="text" placeholder="College District" value={formData.district} onChange={handleInputChange} />
                        <input name="state" type="text" placeholder="State" value={formData.state} onChange={handleInputChange} />
                    </div>
                    <input name="country" type="text" placeholder="Country" value={formData.country} onChange={handleInputChange} />
                    <input name="imageUrl" type="url" placeholder="URL Image of College" value={formData.imageUrl} onChange={handleInputChange} />
                    <button type="submit">add college button</button>
                </form>
            </div>

            <div className="grid-section">
                {collegeList.map((college) => (
                    <div key={college.name} className="college-card">
                        <img src={college.imageUrl} alt={college.name} className="card-image" />
                        <div className="card-overlay">
                            <h3 className="card-name">{college.name}</h3>
                            <div className="card-details">
                                <p>{college.district}, {college.state}</p>
                                <p>{college.country}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AddCollege;