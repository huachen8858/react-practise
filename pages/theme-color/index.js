import React, { useState } from "react";
// import styles from "@/styles/theme-color.module.css";
// import useLocalStroage from "@/hooks/use-localStorage";
import Back from "@/components/back";
import { useTheme } from "@/hooks/use-theme";
import ThemeSwitch from "@/components/theme-switch";

export default function LightDarkMode() {
  // const [theme, setTheme] = useLocalStroage("theme", "dark");

  // const handleToggleTheme = () => {
  //   setTheme(theme === "light" ? "dark" : "light");
  // };
  const { color } = useTheme();

  return (
    <>
      <div className={color + "-highlight"}>
        {color ==="light" ? "Light Mode" : "Dark Mode"} <ThemeSwitch />
        <Back />
      </div>
      {/*  <div className={styles["light-dark-mode"]}>
      <div className={styles["container"]}>
        <p>Hello World !</p>
        <button onClick={handleToggleTheme}>Change Theme</button> 
        <Back />
      </div>
    </div>*/}
    </>
  );
}
