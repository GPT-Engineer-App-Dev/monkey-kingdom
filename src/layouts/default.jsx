import { Outlet, NavLink } from "react-router-dom";
import { Package2 } from "lucide-react";
import { cn } from "@/lib/utils";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <NavLink to="/" className="flex items-center gap-2 text-lg font-semibold">
          <Package2 className="h-6 w-6" />
          <span>Monkey World</span>
        </NavLink>
        <nav className="flex gap-4">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/species">Species</NavItem>
          <NavItem to="/gallery">Gallery</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </nav>
      </header>
      <main className="flex-grow p-4">
        <Outlet />
      </main>
      <footer className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <div>Contact us at: info@monkeyworld.com</div>
      </footer>
    </div>
  );
};

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "transition-colors",
        isActive ? "text-yellow-400" : "text-white hover:text-yellow-400"
      )
    }
  >
    {children}
  </NavLink>
);

export default Layout;