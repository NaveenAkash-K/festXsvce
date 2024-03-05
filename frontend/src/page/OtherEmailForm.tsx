// OtherEmailForm.tsx
import React from "react";

interface OtherEmailFormProps {
  formData: {
    name: string;
    idNumber: string;
    collegeMail: string;
    phoneNumber: string;
  };
}

const OtherEmailForm: React.FC<OtherEmailFormProps> = ({ formData }) => {
  // Add specific logic for handling the form submission for email addresses other than svce.ac.in

  return (
    <div>
      {/* Add the form elements and logic specific to other email addresses */}
      <p>This is the OtherEmailForm component.</p>
    </div>
  );
};

export default OtherEmailForm;
