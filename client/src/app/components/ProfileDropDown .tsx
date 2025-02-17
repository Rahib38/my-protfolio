import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
type UserProps = {
  user?: {
    name?: string |null|undefined;
    email?: string| undefined;
    image?: string |null|undefined;
  };
};
const ProfileDropDown = ({ user }: { user: UserProps  }) => {
  return (
    <div>
      <div className="relative">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="relative inline-flex  w-10 items-center justify-center rounded-full text-white">
              <Image
                src={user?.user?.image||"https://img.icons8.com/?size=64&id=Nkym0Ujb8VGI&format=png"}
                alt={"js"}
                title={user?.user?.email}
                height={50}
                width={50}
                className=" rounded-full "
              />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-44">
            <DropdownMenuItem>
              <Link href="/dashboard" className="w-full">
                Dashboard
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem onClick={()=>signOut()}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default ProfileDropDown;
