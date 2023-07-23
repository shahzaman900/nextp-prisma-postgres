import { PrismaClient } from "@prisma/client";
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const prisma = new PrismaClient();
const allUsers = await prisma.post.findMany();

const inter = Inter({ subsets: ['latin'] })
export default function Home({ allUsers }) {

  console.log(allUsers);

  return (
    <main className={styles.main}>
      <h1>shah</h1>
      <h2>{allUsers}</h2>
    </main>
  )
}

// console.log(allUsers);
