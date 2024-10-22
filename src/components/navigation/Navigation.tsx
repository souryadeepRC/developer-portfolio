import React from "react";
import { NavLink } from "react-router-dom";
import userImage from "src/assets/user_profile_image.jpg";
import styles from "src/components/navigation/Navigation.module.scss";
import ToggleTheme from "src/components/toggle-theme/ToggleTheme";
interface NavigationType {
  path: string;
  displayName: string;
}
const NavigationPaths: NavigationType[] = [
  {
    path: "home",
    displayName: "HOME",
  },
  {
    path: "test",
    displayName: "TEST",
  },
];
const Navigation: React.FC<any> = ({ appTheme, setAppTheme }) => {
  return (
    <section className={styles.navigation__container}>
      <section className={styles["display-image__container"]}>
        <img src={userImage} alt="Souryadeep Roy Chowdhury" loading="lazy" />
        <span>Souryadeep</span>
        <ToggleTheme appTheme={appTheme} setAppTheme={setAppTheme} />
      </section>
      <nav className={styles.navigation__list}>
        <ul>
          {NavigationPaths.map(({ path, displayName }: NavigationType) => {
            return (
              <li key={path}>
                <NavLink to={path}>{displayName}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
};
export default Navigation;
