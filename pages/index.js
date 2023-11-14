import Head from "next/head"
import { JobOpening } from "@/components/JobOpening"
import { InfoBox } from "@/components/InfoBox"

export default function Index () {
 return (
  <>
  <Head>
    <title>agrotrade</title>
  </Head>
  <main>
    <InfoBox>
        <ul>
        <li>watermelon</li>
        <li>orange</li>
        <li>Guava</li>
        </ul>
    </InfoBox><br/>
    <JobOpening title='Next js Hybrid work'
    location='Nairobi'/>
    <JobOpening title='React Developer'
    location='Enugu'/>
  </main>
  
  </>
 ) 
}