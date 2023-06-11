import React from "react";

function Navbar() {
  return (
    <nav class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex-shrink-0 text-2xl font-bold ">
            <span className="text-tema_morado">WEALTH</span><span className="text-white">RISE</span>
          </div>
    
          <div class="flex sm:hidden">
            <button type="button" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
    
          <div class="hidden sm:flex w-1/2 justify-around">
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Inicio</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Acerca de</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Servicios</a>
            <a href="#" class="text-gray-300 bg-tema_morado hover:bg-tema_morado_hover hover:text-white px-3 py-2 rounded-md text-sm font-medium">Empieza</a>
          </div>
        </div>
      </div>
    </nav>
    
  );
}

export default Navbar;
