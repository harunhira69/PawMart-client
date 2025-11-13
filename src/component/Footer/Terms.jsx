import React from "react";

const Terms = () => {
  return (
    <div className="container mx-auto p-6 max-w-3xl">
      <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Terms & Conditions
        </h1>

        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Welcome to our platform. By accessing or using our services, you agree to comply with the following terms and conditions:
        </p>

        <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-3">
          <li>
            <strong>Acceptance of Terms:</strong> By using this site, you agree to be bound by these terms and all applicable laws and regulations.
          </li>
          <li>
            <strong>User Responsibilities:</strong> You must use our services responsibly and not engage in any harmful or illegal activity.
          </li>
          <li>
            <strong>Account Security:</strong> Keep your login credentials safe. You are responsible for all activity under your account.
          </li>
          <li>
            <strong>Privacy:</strong> Your personal information will be handled according to our Privacy Policy.
          </li>
          <li>
            <strong>Intellectual Property:</strong> All content on this platform is protected by copyright and may not be copied or used without permission.
          </li>
          <li>
            <strong>Modification of Terms:</strong> We reserve the right to update these terms at any time. Continued use indicates acceptance of the changes.
          </li>
          <li>
            <strong>Limitation of Liability:</strong> We are not responsible for any damages or losses arising from the use of our services.
          </li>
        </ol>

        <p className="text-gray-700 dark:text-gray-300 mt-6">
          For any questions regarding these terms, please contact us via the Contact page.
        </p>
      </div>
    </div>
  );
};

export default Terms;
