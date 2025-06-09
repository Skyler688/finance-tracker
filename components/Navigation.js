import { IoMdStats } from "react-icons/io";

function Nav() {
  return (
    <header className="container max-w-2xl px-6 py-6 mx-auto">
      <div className="flex items-center justify-between">
        {/* User Info */}
        <div className="flex items-center gap-2">
          {/* img */}
          <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src="https://thispersondoesnotexist.com/"
              alt="Profile image"
            />
          </div>

          {/* name */}
          <small>Hi, billy</small>
        </div>

        {/* Right side of navigation */}
        <nav className="flex items-center gap-2">
          <div>
            <IoMdStats className="text-2xl" />
          </div>
          <div>
            <button className="btn btn-danger">Sign out</button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
