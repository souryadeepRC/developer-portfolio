import { Outlet } from "react-router-dom";
import Navigation from "src/components/navigation/Navigation";

const PublicLayout: React.FC = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};
export default PublicLayout;
