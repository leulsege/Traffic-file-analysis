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
          በቀላሉ የመስሪያ ቤቶን አሽከርካሪ ተሽከርካሪ መቆጣጠሪያ ፣ ጥፋት (አደጋ) መመዝገቢያ ፣ በድርጅቱ ውስጥ
          የሚገኙ ሰልጣኝ አሽከርካሪዎችን መከታተያ፡ እና ሌሎችም ብዙ ጥቅም ያለው ሲስተም ነው በ2024GC በ
          "Internship" ተማሪዎች የተሰራ
        </h2>
        <Link to="/drivers" className="cta">
          Go to App
        </Link>
      </section>
    </main>
  );
}
