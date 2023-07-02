"use client";

import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const router = useRouter();
  const [data, setData] = useState("nothing to show");

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");

      toast.success("Logout successfull");

      router.push("/login");
    } catch (error: any) {
      console.log("error: ", error.message);

      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    console.log(res?.data);

    setData(res?.data?.data[0]?._id);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p className="text-2xl">Profile page</p>
      <hr />
      <h2 className="p-2 rounded bg-violet-600 ">
        {data === "nothing" ? (
          "Nothing"
        ) : (
          <Link href={`/profile/${data}`}>{data}</Link>
        )}
      </h2>
      <button
        onClick={getUserDetails}
        className="p-2 mt-4 border border-green-600 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        Get User Details
      </button>
      <button
        onClick={logout}
        className="p-2 mt-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;
