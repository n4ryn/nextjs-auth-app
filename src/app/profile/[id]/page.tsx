import React from "react";

const UserProfile = ({ params }: any) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p className="text-2xl">
        Profile page
        <span className="p-2 ml-2 rounded bg-violet-600 text-white">
          {params.id}
        </span>
      </p>
    </div>
  );
};

export default UserProfile;
