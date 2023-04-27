import logo from "@/assets/edc-logo.svg";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import profile from "@/assets/profile.svg";

export function Header() {
  return (
    <header className="wrapper">
      <Link href="/" aria-label="EDC">
        <div className={styles.logoContainer}>
            <Image
              className={styles.logo}
              src={logo.src}
              width={64}
              height={64}
              alt="EDC"
              priority

            />
            <Image
            className={styles.profile}
            src={profile.src}
            width={32}
            height={32}
            alt="Icon"
            />
            
         </div>
      </Link>
    </header>
  );
  
}
          
      
