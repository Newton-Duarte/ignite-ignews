import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating a Single Post on Prismic CMS</strong>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam dolor eaque soluta magni explicabo, alias impedit fugiat consequuntur illum earum nam illo recusandae nemo temporibus.</p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating a Single Post on Prismic CMS</strong>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam dolor eaque soluta magni explicabo, alias impedit fugiat consequuntur illum earum nam illo recusandae nemo temporibus.</p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating a Single Post on Prismic CMS</strong>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam dolor eaque soluta magni explicabo, alias impedit fugiat consequuntur illum earum nam illo recusandae nemo temporibus.</p>
          </a>
        </div>
      </main>
    </>
  );
}