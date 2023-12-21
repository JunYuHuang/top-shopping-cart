import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <div className="w-full bg-gray-300">
        <nav className="max-w-screen-md min-w-[200px] w-full px-4 py-4 mx-auto flex flex-row items-center gap-x-4 justify-between">
          <h1 className="text-3xl uppercase font-bold">
            <Link to={`/`}>Store</Link>
          </h1>
          <ul className="flex flex-row items-center gap-x-4">
            <li className="text-lg">
              <Link to={`/`}>Shop</Link>
            </li>
            <li className="text-lg">
              <Link to={`cart`}>Cart</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="max-w-screen-md min-w-[200px] w-full my-8 px-4">
        <Outlet />
      </div>
    </main>
  );
}
