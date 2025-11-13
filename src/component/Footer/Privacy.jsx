import React from "react";

const Privacy = () => {
  return (
    <div className="container mx-auto p-6 max-w-3xl">
      <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Privacy Policy
        </h1>

        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our platform.
        </p>

        <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-3">
          <li>
            <strong>Information We Collect:</strong> We may collect your name, email, phone number, and any other information you provide when using our services.
          </li>
          <li>
            <strong>Use of Information:</strong> Your data is used to provide and improve our services, communicate with you, and process transactions.
          </li>
          <li>
            <strong>Data Protection:</strong> We implement security measures to protect your personal information from unauthorized access, disclosure, or misuse.
          </li>
          <li>
            <strong>Sharing of Information:</strong> We do not sell or share your personal information with third parties, except when required by law or to provide our services.
          </li>
          <li>
            <strong>Cookies:</strong> Our website may use cookies to enhance user experience. You can disable cookies in your browser settings.
          </li>
          <li>
            <strong>Third-Party Links:</strong> Our platform may contain links to external websites. We are not responsible for the privacy practices of those websites.
          </li>
          <li>
            <strong>Changes to Privacy Policy:</strong> We may update this policy periodically. Continued use of our platform constitutes acceptance of the changes.
          </li>
        </ol>

        <p className="text-gray-700 dark:text-gray-300 mt-6">
          For any questions regarding our privacy practices, please contact us through the Contact page.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
