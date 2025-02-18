import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <div className="flex flex-col items-center justify-center  p-6 container mx-auto">
      <h1 className="text-3xl font-semibold  mb-6">
        Welcome, {user?.name || "Guest"}! 🎉
      </h1>

      {user ? (
        <div className="p-6 rounded-2xl shadow-lg bg-white/10 backdrop-blur-md border border-white/20 w-full max-w-sm mx-auto transition-transform transform hover:scale-105">
          <div className="flex flex-col items-center gap-4">
            <Image
              src={user.image || "/default-avatar.png"} 
              alt={user.name || "User Avatar"} 
              className="w-20 h-20 rounded-full border-2 border-white shadow-md"
              width={550}
              height={550}
            />
            <h3 className="text-xl font-semibold">{user.name}</h3>
            <p className="text-sm ">{user.email}</p>
          </div>
        </div>
      ) : (
        <p className="">Please log in to see your profile.</p>
      )}
    </div>
  );
};

export default DashboardPage;
