import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { IconButton } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modifyAppTheme } from "src/store/common-reducer/common-actions";
import { selectAppTheme } from "src/store/common-reducer/common-selectors";

const ToggleTheme: React.FC = () => {
  const dispatch = useDispatch();
  const applicationTheme = useSelector(selectAppTheme);

  const onToggleTheme = () => {
    dispatch(modifyAppTheme());
  };
  return (
    <IconButton onClick={onToggleTheme}>
      {applicationTheme === "light" ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
};
export default React.memo(ToggleTheme);
