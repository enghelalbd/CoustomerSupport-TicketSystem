const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 mt-7">
      <div className=" mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo & Description */}
        <div className="md:col-span-1">
          <h2 className="text-white text-2xl font-bold mb-4">
            CS — Ticket System
          </h2>
          <p className="text-sm leading-7">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-3">
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Contact Sales</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-3">
            <li>Products & Services</li>
            <li>Customer Stories</li>
            <li>Download Apps</li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Information</h3>
          <ul className="space-y-3">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Join Us</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Social Links
          </h3>
          <ul className="space-y-4">
            <li>𝕏 @CS — Ticket System</li>
            <li>in @CS — Ticket System</li>
            <li>f @CS — Ticket System</li>
            <li>✉ support@cst.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-800 text-center py-6 text-sm">
        © 2026 CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
