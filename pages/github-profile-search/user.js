import React from "react";
import styles from "@/styles/github-profile-search.module.css";
import Link from "next/link";

export default function User({ user }) {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
  } = user;
  const createdDate = new Date(created_at);

  console.log(user);

  return (
    <div className={styles["user"]}>
      <div>
        <img src={avatar_url} className={styles["avatar"]} alt="User" />
      </div>
      <div className={styles["name-container"]}>
        <Link href={`https://github.com/${login}`}>{name || login}</Link>
        <p>
          User joined on{" "}
          {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
            month: "short",
          })} ${createdDate.getFullYear()}`}
        </p>
      </div>
      <div className={styles["profile-info"]}>
        <div>
          <p>Public Repos</p>
          <p>{public_repos}</p>
        </div>
        <div>
          <p>Followers</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Following</p>
          <p>{following}</p>
        </div>
      </div>
    </div>
  );
}
