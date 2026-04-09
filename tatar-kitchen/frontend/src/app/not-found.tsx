'use client'

import styles from './not-found.module.css'

const NotFoundPage = () => {
  return (
    <div className={styles.page}>
      <main className={styles.hero}>
        <p className={styles.heroNumber}>404</p>
        <h1 className={styles.heroTitle}>Страница не найдена</h1>
        <p className={styles.heroDescription}>
          Похоже, эта страница ушла на кухню. Попробуйте вернуться на главную или проверьте адрес.
        </p>
        <button className={styles.returnButton} type="button" onClick={() => window.location.href = '/'}>
          Вернуться на главную
        </button>
      </main>

      <div className={styles.trailer} />
    </div>
  )
}

export default NotFoundPage
