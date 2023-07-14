import React from "react";

function DarkModeSwitch({ theme, setTheme }) {
    const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    };
  

    const Sun = () => (
      <svg width="3vh" height="3vh" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 1V3.5M8 12.5V15M1 8H3.5M12.5 8H15M4.24 4.24L5.66 5.66M10.34 10.34L11.76 11.76M4.24 11.76L5.66 10.34M10.34 5.66L11.76 4.24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="8" cy="8" r="3.5" stroke="currentColor" stroke-width="1.5"/>
      </svg>
    );

    const Moon = () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
        />
      </svg>
    );

    return (
          <div>
                <a href="tel:0547723219" className="font-bold text-2xl color-gray absolute bottom-[9vh] left-10 py-2">✆ Call Us!</a>
                <br />
                <button
                  className={`sm:w-[12vh] px-4 py-2 rounded-[4vh] bottom-10 absolute left-10 items-start flex justify-center ${
                    theme === 'dark' ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'}`}
                  onClick={toggleTheme}
                >
                  {theme === 'light' ? <Moon /> : <Sun/>}
                </button>
          </div>
    );
  }
  
  export default DarkModeSwitch;
