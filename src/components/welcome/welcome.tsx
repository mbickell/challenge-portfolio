import { FunctionComponent } from "react";
import Link from "next/link";
import styles from "./welcome.module.scss";

export const Welcome: FunctionComponent = () => {
  return (
    <div className={styles.welcome}>
      <h1>Welcome to the Stockopedia Front-end Challenge</h1>
      <p>
        We expect you to spend a few hours on this project, but don't worry if
        you don't finish everything within that timeframe. Please let us know
        which areas you weren't able to complete and how you plan to finish them
        if given more time.
      </p>

      <Link
        href="/api/portfolio/1"
        className={styles.welcome__apiUrl}
        target="_blank"
      >
        View portfolio mock data
      </Link>

      <p>
        Below you will find the links to the completed pages of the technical
        assessment:
      </p>

      <Link href="/portfolio/1" className={styles.welcome__apiUrl}>
        View completed portfolio page
      </Link>
      <Link href="/portfolio/123" className={styles.welcome__apiUrl}>
        View portfolio not found page
      </Link>
    </div>
  );
};
