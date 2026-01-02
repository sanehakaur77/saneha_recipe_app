import React from "react";

const Profile = ({ show }) => {
  return (
    <div className="flex items-center justify-end h-20 px-6 bg-white shadow-md">
      {show && (
        <div>
          <select className="px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black">
            <option value="">Change Name</option>
            <option value="">Change Password</option>
            <option value="">Dashboard</option>
            <option value="">See more...</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default Profile;
