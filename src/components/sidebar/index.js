import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { Icons } from '../Icons';
import { UserAccountNav } from '../UserAccountNav';
import { buttonVariants } from '../ui/Button';

const Sidebar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className=" h-fit bg-gray-400 border-b border-gray-500 z-[10] py-2 min-h-screen">
      <div className="container h-full mx-auto flex items-center  justify-between  gap-2">
        {/* logo */}
        <Link href="/" className="flex gap-2 items-center">
          <Icons.logo className="h-8 w-8 sm:h-6 sm:w-6" />
          <p className="hidden text-white-200 text-sm font-medium md:block">
            Notetaker
          </p>
        </Link>
        {/* search bar */}
        {/* <SearchBar /> */}

        {/* actions */}
        {session?.user ? (
          <UserAccountNav user={session.user} />
        ) : (
          <Link href="/sign-in" className={buttonVariants()}>
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};
export default Sidebar;
