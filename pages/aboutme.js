import Head from "next/head"
import { MdOutlineMail } from "react-icons/md";
import { FaGithub,FaTwitter,FaInstagram,FaHtml5,FaCss3Alt,FaReact,FaNodeJs } from "react-icons/fa";
import { SiTailwindcss,} from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { Nunito } from "next/font/google"
import Image from "next/image";
import Link from "next/link";

const nunitoBold = Nunito({
    subsets:['latin'],
    weight:'900'
})

const nunito = Nunito({
    subsets:['latin'],
    weight:'300'
})


export default function Aboutme() {
    return (
        <>
        <Head>
            <title>About me | agro Trade</title>
        </Head>
     <main className=" flex flex-col w-screen md:flex md:flex-row w-screen  bg-black py-10 px-10">

     <div>
                        <Image
                        width={400}
                        height={400}
                        src="/john.jpg" alt="picture"
                        className="rounded-md w-[1000px] md:hidden"
                        />
                    </div> 


                <div>
                    <div className="flex">
                            <div>
                                <h2 className={`${nunito.className} text-2xl text-white`}>Hello it's me </h2>
                                <h1 className={`${nunitoBold.className} text-4xl text-white`}>John Chukwuegbo<span className={`${nunito.className} text-4xl text-blue-300`}>.</span></h1>
                                <p className={`${nunito.className} text-2xl text-white`}>i am a software developer i have great passion for coding/programming, i love to build web/mobile<br/> application and open to learning and adapting to new technology. I also have the ability to work in a team and collaborate with a good communication skill.</p>
                            </div>

                    </div>

                    <blockquote className="gap-4">
                        <p className="text-white pb-6">My skills are as follows :</p>

                        <ul className=" flex gap-3 flex-col  md:flex md:flex-row gap-3">
                            <li className={`${nunito.className} flex flex-row  text-white `}>
                                <FaHtml5 className={`${nunito.className} text-3xl`}/>
                                <span>HTML</span></li>
                            <li className={`${nunito.className} flex flex-row  text-white `}> 
                            <FaCss3Alt className={`${nunito.className} text-3xl`}/>
                            <span>CSS</span></li>
                            <li className={`${nunito.className} flex flex-row text-white`}> 
                            <FaReact className={`${nunito.className} text-3xl`}/>
                            <span>REACT</span></li>
                            <li className={`${nunito.className} flex flex-row text-white`}> 
                            <SiTailwindcss className={`${nunito.className} text-3xl`}/>
                            <span>SiTailwind CSS</span></li>
                            <li className={`${nunito.className} flex flex-row text-white`}> 
                            <FaNodeJs className={`${nunito.className} text-3xl`}/>
                            <span>NodeJs</span></li>
                            <li className={`${nunito.className} flex flex-row text-white`}><TbBrandJavascript className={`${nunito.className} text-3xl`}/><span>Javascript</span></li>
                        </ul>

                    </blockquote>
                    

                    
                    <div>
                        <h3 className={`${nunito.className} text-white text-2xl pt-7 pb-7`}>Connect with me through:</h3>
                        <Link href='https://instagram.com/chibuikemjohn1?igshid=M2RkZGJiMzhjOQ==' className={`${nunito.className} flex flex-row text-blue-200 gap-1`}><FaInstagram className={`${nunito.className} text-3xl`}/><span>Contact me</span></Link>
                        <Link href='https://x.com/Maxwell121xyz?t=pNMZXxcxdTGP_DSpin3Efg&s=09' className={`${nunito.className} flex flex-row text-blue-200 gap-1`}><FaTwitter className={`${nunito.className} text-3xl`}/><span>Contact me</span></Link>
                        <Link href='https://github.com/chukwu2' className={`${nunito.className} flex flex-row text-blue-200 gap-1`}><FaGithub className={`${nunito.className} text-3xl`}/><span>Connect with me on Github</span></Link>
                        
                    </div>

                </div>


                    <div>
                        <Image
                        width={400}
                        height={400}
                        src="/john.jpg" alt="picture"
                        className="rounded-md w-[1000px] hidden md:block"
                        />
                    </div> 


    </main>
        
        
        </>

    )


}