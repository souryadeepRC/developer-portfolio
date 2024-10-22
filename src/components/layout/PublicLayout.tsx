import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Navigation from "src/components/navigation/Navigation";
import { selectAppTheme } from "src/store/common-reducer/common-selectors";

const PublicLayout: React.FC = () => {
  const applicationTheme = useSelector(selectAppTheme);
  return (
    <section data-theme={applicationTheme}>
      <Navigation />
      <Outlet />
    </section>
  );
};
export default PublicLayout;
