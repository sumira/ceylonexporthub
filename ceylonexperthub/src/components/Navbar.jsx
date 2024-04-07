import logo from '../assets/ph_tidal-logo-bold.png';


const Navbar = () => {
  return (
    <div>
      <nav class="w-full flex justify-between relative h-16 items-center bg-white dark:border-gray-700 shadow-lg px-3 md:px-10 lg:px-20 ">
        <div class="flex items-center gap-2">
          <img
            src={logo}
            alt="Logo"
            class="h-10 w-auto object-contain"
          />
          <p class="__className_cc5883 text-[#432010] dark:text-[#010679] font-bold text-lg">
            CeylonExportHub
          </p>
        </div>
        <ul class="hidden font-semibold text-[#432010] dark:text-[#010679] lg:absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 lg:flex items-center justify-center gap-5">
          <li class="hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1.5 rounded-md">
            <a href="#">Home</a>
          </li>
          <li class="hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1.5 rounded-md">
            <a href="#">Ceylon Product</a>
          </li>
          <li class="hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1.5 rounded-md">
            <a href="#">Help</a>
          </li>
        </ul>
        <div class="hidden lg:flex items-center justify-center gap-5 text-[#432010] dark:text-[#010679]  text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-shopping-cart"
          >
            <circle cx="8" cy="21" r="1"></circle>
            <circle cx="19" cy="21" r="1"></circle>
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
          </svg>

          <button class="border-gray-900 border rounded-full text-white font-semibold bg-[#fffff] dark:text-[#010679] px-8 py-2 hover:opacity-80">
            Sign Up
          </button>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide-icon AlignJustify 24 block lg:hidden hover:opacity-80 transition "
          role="button"
        >
          <line x1="3" x2="21" y1="6" y2="6"></line>
          <line x1="3" x2="21" y1="12" y2="12"></line>
          <line x1="3" x2="21" y1="18" y2="18"></line>
        </svg>
      </nav>
    </div>
  );
};

export default Navbar;
