import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { IconButton } from "@mui/material";
import React from "react";
interface ToggleThemeProps {
  appTheme: "light" | "dark";
  setAppTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}
const ToggleTheme: React.FC<ToggleThemeProps> = ({ appTheme, setAppTheme }) => {
  return (
    <IconButton
      onClick={() =>
        setAppTheme((appTheme: any) =>
          appTheme === "light" ? "dark" : "light"
        )
      }
    >
      {appTheme === "light" ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
};
export default React.memo(ToggleTheme);
