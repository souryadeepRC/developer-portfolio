import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "src/components/navigation/Navigation";

const PublicLayout: React.FC = () => {
  const [appTheme, setAppTheme] = React.useState("light");
  return (
    <section data-theme={appTheme}>
      <Navigation appTheme={appTheme} setAppTheme={setAppTheme} />
      <Outlet />
    </section>
  );
};
export default PublicLayout;
