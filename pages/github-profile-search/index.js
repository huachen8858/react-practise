import React, { useEffect, useState } from "react";
import styles from "@/styles/github-profile-search.module.css";
import User from "./user";

export default function GithubProfileSearch() {
  const [userName, setUserName] = useState("huachen8858");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchGithubUserData = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const data = await response.json();
      if (data) {
        setUserData(data);
        setLoading(false);
        setUserName("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = () => {
    fetchGithubUserData();
  };

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  return (
    <>
      {loading ? (
        <h1 style={{display: "flex", justifyContent: "center"}}>Loading data ! Please wait</h1>
      ) : (
        <>
          <div className={styles["github-profile-container"]}>
            <div className={styles["input-wrapper"]}>
              <input
                type="text"
                name="search-by-username"
                placeholder="Search GitHub Username..."
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <button onClick={handleSubmit}>Search</button>
            </div>
          </div>
          {userData !== null ? <User user={userData} /> : null}
        </>
      )}
    </>
  );
}
