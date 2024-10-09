import styles from '../page.module.css'
import Link from 'next/link';

export default function Animal() {
  return (
    <main className={styles.main}>
        <Link href="/">トップページへ戻る</Link>
    </main>
  )
}