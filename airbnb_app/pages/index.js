import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/layouts/footers/Footer'
import Cards from '../components/users/home/Cards'
import FilterNav from '../components/users/home/FilterNav'
import MainNav from '../components/layouts/navs/MainNav'
import style from '../styles/home.module.scss'
export default function Home() {
  return (
    <>
    <Head>
    </Head>
    <header className={`fixed-top ${style.homeNavs}`}>
      <MainNav />
      <FilterNav />
    </header>
    <main className={style.homeContent}>
      <Cards />
     </main>
    <Footer />
  </>

    
  )
}
