import FooterComponent from "./layout/footer.component";
import NavbarComponent from "./layout/navbar.component";
import SidebarComponent from "./layout/sidebar.component";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <SidebarComponent />
      <div className="content flex-1  dark:bg-abrandc-dark-blackish bg-white">
        <NavbarComponent/>
        {children}
        <FooterComponent />
      </div>
    </div>
  );
};

export default Layout;
