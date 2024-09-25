import './body.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Body(){
    return(
        <>
        <div className="body-container">
        (
    <div className="container mt-5">
      
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Manage Users</h5>
              <p className="card-text">
                View, add, edit, and delete users from the system. Monitor user activity and manage permissions.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Manage Content</h5>
              <p className="card-text">
                Create and manage content on the platform. Review and approve user-submitted content.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Settings</h5>
              <p className="card-text">
                Configure application settings, manage integrations, and update platform preferences.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">View Reports</h5>
              <p className="card-text">
                Generate and view various reports, including user activity, content performance, and more.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Analytics</h5>
              <p className="card-text">
                Access detailed analytics to monitor user engagement, site traffic, and content reach.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">System Logs</h5>
              <p className="card-text">
                Review system logs to ensure everything is running smoothly and track any potential issues.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>)
        </div>
        <Footer/>
        </>)
}
function Footer() {
    return (
        <footer className="footer-container">
            <div className="contact-info">
                <h2>Contact Us</h2>
                <p>Email: munisekharudabalapati1@gmail.com</p>
                <p>Phone: +91 9010406195</p>
                <p>Address: Mopuru, dakkili</p>
            </div>
        </footer>
    );
}
export default Body 