import { ClerkLoading, useUser } from "@clerk/clerk-react";
import { useState } from "react";
import {
  Mail, Phone, User, IdCard, Calendar, RefreshCcw, Pencil
} from "lucide-react";

const skillColorMap =  {
  "JavaScript": "bg-yellow-200 dark:bg-yellow-700",
  "React": "bg-blue-200 dark:bg-blue-700",
  "PHP": "bg-green-200 dark:bg-green-700",
  "Laravel": "bg-indigo-200 dark:bg-indigo-700",
  "SQL": "bg-red-200 dark:bg-red-700",
};

const Profile1 = () => {
  const { user } = useUser();
  const [isEditing, setIsEditing] = useState(false);

  const firstName = user?.firstName || "John";
  const lastName = user?.lastName || "Doe";
  const fullName = user?.fullName || `${firstName} ${lastName}`;
  const email = user?.emailAddresses?.[0]?.emailAddress || "john.doe@example.com";
  const username = user?.username || "Mohamed LAAGUILI";
  const imageUrl = user?.imageUrl || "https://i.pravatar.cc/300";
  const primaryPhone = user?.phoneNumbers?.[0]?.phoneNumber || "+1 (555) 123-4567";
  const userId = user?.id || "N/A";
  const createdAt = user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : "N/A";
  const updatedAt = user?.updatedAt ? new Date(user.updatedAt).toLocaleDateString() : "N/A";



  return (
    <div className="flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl max-w-4xl w-full p-8 transition-all duration-300 animate-fade-in">
        <div className="flex flex-col sm:flex-row">

           <ClerkLoading>
                  <p className="text-sm text-gray-400">🔄 Loading Clerk auth context...</p>
                </ClerkLoading>

          {/* Profile Image + Info */}
          <div className="sm:w-1/3 text-center mb-8 sm:mb-0">
            <img
              src={imageUrl}
              alt="Profile"
              className="rounded-full w-48 h-48 mx-auto mb-4 border-4 border-black dark:border-gray-700 transition-transform duration-300 hover:scale-105"
            />
            <h1 className="text-2xl font-bold text-black dark:text-white mb-2">
              {fullName}
            </h1>
            <p className="text-gray-600 dark:text-gray-300">Software Developer</p>
            <button
              onClick={() => setIsEditing(true)}
              className="mt-4 flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-300"
            >
              <Pencil className="w-4 h-4" /> Edit Profile
            </button>
          </div>

          {/* Details */}
          <div className="sm:w-2/3 sm:pl-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">About Me</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Passionate software developer with 5 years of experience in web technologies.
              I love creating user-friendly applications and solving complex problems.
            </p>

            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {Object.keys(skillColorMap).map((skill) => (
                <span
                  key={skill}
                  className={`px-3 py-1 rounded-full text-sm text-black dark:text-white ${skillColorMap[skill]}`}
                >
                  {skill}
                </span>
              ))}
            </div>

            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">Contact Information</h2>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>{email}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>{primaryPhone}</span>
              </li>
              <li className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Username: {username}</span>
              </li>
              <li className="flex items-center gap-2">
                <IdCard className="w-4 h-4" />
                <span>User ID: {userId}</span>
              </li>
              <li className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Joined: {createdAt}</span>
              </li>
              <li className="flex items-center gap-2">
                <RefreshCcw className="w-4 h-4" />
                <span>Last Updated: {updatedAt}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Modal for Editing (Basic Example) */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[500]">
          <form
          onSubmit={(e)=> e.preventDefault() }
            className="bg-white dark:bg-gray-800 p-6 rounded-xl w-full max-w-md shadow-lg"
          >
            <h2 className="text-xl font-bold mb-4 text-black dark:text-white">Edit Profile</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                defaultValue={fullName}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Phone Number
              </label>
              <input
                type="text"
                defaultValue={primaryPhone}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 rounded-md border border-gray-400 dark:border-gray-600"
              >
                Cancel
              </button>
              <button
                className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Profile1;
