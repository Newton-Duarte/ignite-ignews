import Head from 'next/head'

import styles from '../styles/products.module.scss';

export default function Products() {
  return (
    <>
      <Head>
        <title>Products | ig.news</title>
      </Head>
      <h1 className={styles.title}>Products</h1>
    </>
  )
}