export default function NavbarComponent() {
  return (
    <div className="flex items-center justify-between h-16 bg-white dark:bg-abrandc-dark-blackish shadow-sm">
      <div className="flex items-center">
        <button
          className="text-gray-
                500 dark:text-white
                focus:outline-none
                lg:hidden"
        >
          <span className="fas fa-bars"></span>
        </button>
        <h1 className="text-2xl font-bold dark:text-white lg:text-3xl">DAC</h1>
      </div>
      <div className="flex items-center">
        <button className="theme_btn text-agrey-500 dark:text-white ">
          <div className="select-none">
            <i className="fa-lf fas fa-moon" />
          </div>
        </button>
      </div>
    </div>
  );
}
