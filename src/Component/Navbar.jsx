const Navbar = () => {
  return (
    <div>
      <nav className=" mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-3xl font-bold">CS — Ticket System</h1>

        <ul className="flex gap-4 text-lg items-center">
          <li>
            <a href="#" className="hover:font-bold">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:font-bold">
              Faq
            </a>
          </li>
          <li>
            <a href="#" className="hover:font-bold">
              Changelog
            </a>
          </li>
          <li>
            <a href="#" className="hover:font-bold">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="hover:font-bold">
              Download
            </a>
          </li>
          <li>
            <a href="#" className="hover:font-bold">
              Contact
            </a>
          </li>

          <li>
            <a
              href="#"
              className="bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700"
            >
              + New Ticket
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
