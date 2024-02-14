import React from "react";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <>
      <header className="myTitle">
        <p>- 2024 -</p>
        <h1>Hua&prime;s React Practise</h1>
      </header>
      <main className="container">
        <ul className="myProjects">
          <li>
            <span className="num">1</span>
            <Link href="/accordian">Accordian</Link>
          </li>
          <li>
            <span className="num">2</span>
            <Link href="/random-color">Random Color</Link>
          </li>
          <li>
            <span className="num">3</span>
            <Link href="/star-rating">Star Rating</Link>
          </li>
          <li>
            <span className="num">4</span>
            <Link href="/image-slider">Image Slider</Link>
          </li>
          <li>
            <span className="num">5</span>
            <Link href="/">Nested Tree View</Link>
          </li>
          <li>
            <span className="num">6</span>
            <Link href="/">QR code Generator</Link>
          </li>
          <li>
            <span className="num">7</span>
            <Link href="/">Theme Color</Link>
          </li>
          <li>
            <span className="num">8</span>
            <Link href="/">GitHub Profile Search</Link>
          </li>
          <li>
            <span className="num">9</span>
            <Link href="/">Tic Tac Toe</Link>
          </li>
          <li>
            <span className="num">10</span>
            <Link href="/">Load More Data</Link>
          </li>
        </ul>
      </main>
    </>
  );
}
