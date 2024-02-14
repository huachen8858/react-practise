import React, { useState } from "react";
import styles from "@/styles/theme-color.module.css";
import useLocalStroage from "@/hooks/use-localStorage";

export default function LightDarkMode() {
  const [theme, setTheme] = useLocalStroage("theme", "dark");

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={styles["light-dark-mode"]} data-theme={theme}>
      <div className={styles["container"]}>
        <p>Hello World !</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
}
