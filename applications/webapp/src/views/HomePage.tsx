import React from "react";
import styles from "./HomePage.module.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <main className={styles.homepage}>
      <Navbar />
      <section>
        <h1>
          ትራፊክ ማኔጅመት ሲስተም
          <br />
          Traffic Management System
        </h1>
        <h2>
          የማሽን እና የመኪና አገልግሎት መተግበሪ ተጠቃሚ ሆኖ የመንገድ መከተልና የቀመር አገልግሎት ለተያይዞ የቀረበ
          እና አንድነት እንዲቀይሩ፣ የሰላም ዝርዝር እና እርከን መንገድ ይከተላል።
        </h2>
        <Link to="app" className="cta">
          Go to App
        </Link>
      </section>
    </main>
  );
}
