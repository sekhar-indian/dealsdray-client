
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './employs.css'; // You can still use your custom CSS if needed

const Employ = () => {
  const [data, setData] = useState(null);
  const [editingEmployee, setEditingEmployee] = useState(null); // Track which employee is being edited
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    designation: '',
    gender: '',
    course: '',
    date: '', // Add date field
  });

  useEffect(() => {
    async function fetchData() {
      try {
        let token=localStorage.getItem('JWT')
        const response = await axios.get('http://localhost:8000/',{ headers:{
            'Authorization':`Bearer ${token}`
        }});
        setData(response.data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, []);

  const handleEdit = (employee) => {
    setEditingEmployee(employee); // Set the current employee being edited
    setFormData({
      name: employee.name,
      email: employee.email,
      number: employee.number,
      designation: employee.designation,
      gender: employee.gender,
      course: employee.course,
      date: employee.date || '', // Set date field if available
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
        let token=localStorage.getItem('JWT')
      await axios.put(`http://localhost:8000/${editingEmployee._id}`, formData,{ headers:{
        'Authorization':`Bearer ${token}`
    }});
      
      // Update the local state to reflect changes
      setData((prevData) =>
        prevData.map((employee) =>
          employee._id === editingEmployee._id ? { ...employee, ...formData } : employee
        )
      );
      setEditingEmployee(null); // Close edit mode
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
        let token=localStorage.getItem('JWT')
      await axios.delete(`http://localhost:8000/${id}`,{ headers:{
        'Authorization':`Bearer ${token}`
    }});
      
      // Update the local state to remove the deleted employee
      setData((prevData) => prevData.filter((employee) => employee._id !== id));
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  return (
    <div className="container mt-4">
      <div className="table-responsive">
        {data ? (
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Number</th>
                <th>Designation</th>
                <th>Gender</th>
                <th>Course</th>
                <th>Date of Update</th> {/* New column for date */}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((employee) => (
                <tr key={employee._id}>
                  <td>{employee._id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.number}</td>
                  <td>{employee.designation}</td>
                  <td>{employee.gender}</td>
                  <td>{employee.course}</td>
                  <td>{employee.date}</td> {/* Display date */}
                  <td>
                    <button className="button-table-container" onClick={() => handleEdit(employee)}>Edit</button>
                    <button className="button-table-container" onClick={() => handleDelete(employee._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Loading...</p>
        )}

        {editingEmployee && (
          <div className="mt-4">
            <h2>Edit Employee</h2>
            <form>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Name:</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email:</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Number:</label>
                  <input
                    type="text"
                    name="number"
                    className="form-control"
                    value={formData.number}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Designation:</label>
                  <input
                    type="text"
                    name="designation"
                    className="form-control"
                    value={formData.designation}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Gender:</label>
                  <input
                    type="text"
                    name="gender"
                    className="form-control"
                    value={formData.gender}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Course:</label>
                  <input
                    type="text"
                    name="course"
                    className="form-control"
                    value={formData.course}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            
              <button type="button" className="button-table-container" onClick={handleSave}>
                Save
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Employ;
