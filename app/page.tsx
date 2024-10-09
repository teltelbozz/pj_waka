import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';

export default function Animal() {
  return (
    <main className={styles.main}>
        <Link href="/animal">アニマルページ</Link>
    </main>
  )
}