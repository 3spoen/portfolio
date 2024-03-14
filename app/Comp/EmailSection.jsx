"use client";

import React ,{useState, useEffect} from 'react'
import GithubIcon from "../../public/images/github-icon.svg"
import LinkedinIcon from "../../public/images/linkedin-icon.svg"
import Link from 'next/link'
import Image from 'next/image'

export const EmailSection = () => {

    const [emailSubmitted, setEmailToSubmitted]= useState(false);
    const [showConfirmationImage, setShowConfirmationImage] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setTimeout(() => {
            setEmailToSubmitted(true); // Show email sent text
            setTimeout(() => {
                setShowConfirmationImage(false); // Hide confirmation image after a delay
            }, 5000); // Adjust timing as needed
        }, 2000); // Simulate network request delay

        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";
    
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        };
    
        try {
            const response = await fetch(endpoint, options);
            if (!response.ok) {
                console.error("HTTP Error:", response.statusText);
                // Optionally, handle different status codes specifically
                return;
            }
            const resData = await response.json();
            console.log(resData);
            if (response.status === 200) {
                console.log("Send success.");
                setEmailToSubmitted(true);
                setShowConfirmationImage(true); 
            }
        } catch (error) {
            console.error("Fetch error:", error.message);
        }
    };

    useEffect(() => {
        // Define the CSS as a string
        const animationStyles = `
            @keyframes fadeInOut {
                0% { opacity: 0; }
                10% { opacity: 1; }
                30% { opacity: 1; }
                50% { opacity: 1; }
                90% { opacity: 1; }
                100% { opacity: 0; }
            }

            .confirmationImage {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                animation: fadeInOut 5s ease-in-out forwards;
            }
        `;

        // Create a style element and append it to the head
        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = animationStyles;
        document.head.appendChild(styleSheet);

        return () => {
            // Cleanup the style element when the component unmounts
            document.head.removeChild(styleSheet);
        };
    }, []);
    
    return (
        <section id='Contact' className=' grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
             <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      
            <div className="z-10">
                <h5 className=' text-xl font-bold text-white my-2 '>
                    Let's Connect
                </h5>
                <p className=' text-slate-200 mb-4 max-w-md'>
                    {" "}
                    Are you on the lookout for fresh talent with a passion for learning and growth? I'm at the beginning of my professional journey and eager to dive into new challenges and opportunities. Although my experience in the field is just starting, my dedication, quick learning ability, and commitment to contributing positively to any team are steadfast.
                </p>
                <p className=' text-white  mb-4 max-w-md'>
                    Please use the form below to reach out to me with any opportunities, advice, or if you simply wish to connect and share insights. Your guidance and suggestions would be greatly appreciated as I navigate the start of my career.
                    </p>
                <div className=' socials flex flex-row gap-2'>

                    <a href="https://www.github.com/3spoen" target="_blank" rel="noopener noreferrer">
                        <Image src={GithubIcon} alt='Github Icon' />
                    </a>


                    <a href="https://www.linkedin.com/in/omar-alali-3spoen" target="_blank" rel="noopener noreferrer">
                         <Image src={LinkedinIcon} alt='LinkedIn Icon' />
                    </a>
                </div>
                
            </div>
            <div className="z-10 ">

                    <form className=" flex flex-col " onSubmit={handleSubmit}>
                    <div className='mb-6'>
                        <label htmlFor="email"  
                        className=' text-white block mb-2 text-sm font-medium'>
                            Your email
                        </label>
                        <input 
                        name="email" 
                        type="email" 
                        id="email" 
                        required 
                        placeholder='alan-turing@yhoo.org' 
                        className=' bg-slate-900 border border-slate-600 placeholder-slate-600 text-gray-200 text-sm rounded-lg block w-full p-2' 
                        />
                    </div>
                    <div className='mb-6'>
                        <label 
                        htmlFor="subject"  
                        className=' text-white block mb-2 text-sm font-medium'>
                            Subject
                        </label>
                        <input 
                        name = "subject" 
                        type="text" 
                        id="subject" 
                        required 
                        placeholder='"Bist du das, Mutti? Bitte benutz WhatsApp, ja? Hab dich lieb!"' 
                        className=' bg-slate-900 border border-slate-600 placeholder-slate-600 text-gray-200 text-sm rounded-lg block w-full p-2' />
                    </div>
                    <div className='mb-6'>
                        <label 
                        htmlFor="message" 
                        className=' text-white block text-sm mb-2 font-medium'>
                            Message
                        </label>
                        <textarea 
                        name="message" 
                        id="message" 
                        placeholder="
                        الحبٌ طفلٌ متى تحكمْ عليهِ يَقُلْ ظلمتَنِي ومتى حكَّمْتَه ظلما
                        إن لم تُطِعْهُ بكى وإن أطعتَ بغى فلا يُريحُكَ محكوماً ولا حَكما
                        مُذ قلتُ دعْ ليَ روحي ظلَّ يطلُبُها فقلتُ هاكَ اسْتَلِمْ روحي، فما اسْتلما
                        وإنَّ بي وجَعاً شبهتُهُ بصدىً إنْ رنَّ رانَ ، وعشبٍ حينَ نمَّ نما
                        
                        Love is a child; when you judge him, he says, 'You have wronged me,' and when you empower him, he becomes unjust.
                        If you don't obey him, he cries, and if you do, he transgresses, so he neither comforts you as a subject nor as a ruler.
                        Since I said, ;Leave my soul to me,' he kept seeking it, so I said, 'Here, take my soul,' but he did not accept it.
                        And indeed, there is a pain in me, I likened it to an echo: if it sounded, it lingered, and to grass: when it grew, it flourished.
                        "
                         
                        className=' bg-slate-900 border border-slate-600 placeholder-slate-500 text-gray-200 text-sm rounded-lg block w-full p-2' />
                    </div>
                    <div>
                        <button type='submit' className=' hover:bg-cyan-900 bg-cyan-700 text-white font-medium py-2.5 px-5 rounded-lg w-full'>
                            Send
                        </button>
                        {
                            emailSubmitted &&(
                               
                                <p className=' text-violet-400 text-sm mt-2'>
                                    Email sent successfully Habibi!
                                </p>
                               
                            )
                        }
                    </div>
                    </form>
                </div>
                {
                   showConfirmationImage && (

                    <div className='z-20 confirmationImage'>
                         <Image src="/images/message_send_face.png" alt="Confirmation" width={300} height={300} />
                    </div> 
                    )
                }
        </section>
    )
}
