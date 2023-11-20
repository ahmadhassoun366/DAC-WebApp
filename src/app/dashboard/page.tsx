import SideBar from "./components/sidebar.component";
import MainContect from "./main-content/page";
export default function Dashboard() {
  return (
    <div className="flex">
      <SideBar />
      <MainContect />
    </div>
  );
}
