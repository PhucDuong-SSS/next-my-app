'use client'

import styles from '../page.module.css'
import { usePathname} from 'next/navigation'


export default function DashboardPage() {
const path = usePathname()
console.log(path);

  return (
    <main className={styles.main}>
      <div className={styles.title}>
          Dashboard page
          <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus fuga inventore velit ea sapiente aperiam! Tenetur, doloribus. Eum ipsum id possimus, incidunt, modi iure quae, quidem debitis quia odio molestiae!</p>
          <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus fuga inventore velit ea sapiente aperiam! Tenetur, doloribus. Eum ipsum id possimus, incidunt, modi iure quae, quidem debitis quia odio molestiae!</p>
      </div>
    </main>
  )
}
