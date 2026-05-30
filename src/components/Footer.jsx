export default function Footer() {
  return (
    <footer className="text-black bg-white px-6 py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">

        {/* Logo Section */}
        <div>
          <img
    src="/Gemini_Generated_Image_wsadu1wsadu1wsad.png"
    alt="Logo"
    className="h-10 w-auto mb-4"
  />

          <p className="text-gray-600 text-sm leading-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Error non dolores consequuntur suscipit quibusdam, quidem
            dignissimos eveniet? Ullam soluta labore nobis sunt dolorum,
            natus unde alias quod dolore, odit magnam.
          </p>
        </div>

        {/* Column 1 */}
        <div>
          <h3 className="font-semibold mb-4">Heading</h3>

          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="hover:text-black cursor-pointer transition">
              Link Here
            </li>
            <li className="hover:text-black cursor-pointer transition">
              Link Here
            </li>
            <li className="hover:text-black cursor-pointer transition">
              Link Here
            </li>
            <li className="hover:text-black cursor-pointer transition">
              Link Here
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold mb-4">Heading</h3>

          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="hover:text-black cursor-pointer transition">
              Link Here
            </li>
            <li className="hover:text-black cursor-pointer transition">
              Link Here
            </li>
            <li className="hover:text-black cursor-pointer transition">
              Link Here
            </li>
            <li className="hover:text-black cursor-pointer transition">
              Link Here
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold mb-4">Heading</h3>

          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="hover:text-black cursor-pointer transition">
              Link Here
            </li>
            <li className="hover:text-black cursor-pointer transition">
              Link Here
            </li>
            <li className="hover:text-black cursor-pointer transition">
              Link Here
            </li>
            <li className="hover:text-black cursor-pointer transition">
              Link Here
            </li>
          </ul>
        </div>

        {/* Connect Section */}
        <div>
          <h3 className="font-semibold mb-4">
            Connect With Us
          </h3>

          <div className="flex gap-3">
            <div className="w-9 h-9 rounded-full bg-gray-400 hover:bg-gray-600 transition cursor-pointer"></div>

            <div className="w-9 h-9 rounded-full bg-gray-400 hover:bg-gray-600 transition cursor-pointer"></div>

            <div className="w-9 h-9 rounded-full bg-gray-400 hover:bg-gray-600 transition cursor-pointer"></div>

            <div className="w-9 h-9 rounded-full bg-gray-400 hover:bg-gray-600 transition cursor-pointer"></div>
          </div>

          <p className="text-gray-500 text-xs mt-4">
            All social media available
          </p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 mt-10 pt-6 text-center text-gray-500 text-sm">
        © 2026 Your Company. All rights reserved.
      </div>
    </footer>
  );
}