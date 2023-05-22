import React from 'react';

const ContactPage = () => {
  return (
    <div className="container">
      <h1>Contact Us</h1>
      <p>
        If you have any questions, feedback, or inquiries, please feel free to reach out to us using the contact information below.
      </p>
      <div className="row">
        <div className="col-md-6">
          <h2>Email</h2>
          <p>
            <a href="mailto:info@pharmaguide.com">info@pharmaguide.com</a>
          </p>
        </div>
        <div className="col-md-6">
          <h2>Phone</h2>
          <p>
            Phone: 123-456-7890
          </p>
        </div>
      </div>
      <div>
        <h2>Address</h2>
        <p>
          PharmaGuide Headquarters
          <br />
          123 Pharma Street
          <br />
          City, State 12345
          <br />
          Country
        </p>
      </div>
    </div>
  );
}

export default ContactPage;
