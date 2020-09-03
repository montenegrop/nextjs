import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Card from '../components/Card'

export default function Home() {

  return (
    <div className={styles.container}>
      <Card content='content'/>
    </div>
  )
}