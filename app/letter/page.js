import React from 'react'
import Cat from '@/public/cat.gif'
import Image from 'next/image'

const LetterPage = () => {
  return (
    <div className='mt-12 max-w-3xl px-4 w-full flex flex-col gap-y-8 items-center mb-20'>
      <Image 
        src={Cat}
        height={150}
        width={150}
        alt='cat'
      />
      <p className='font-beanie text-xl md:text-2xl'>  
        Hi, You must be very busy right now, but thank you for taking the time to read this letter. 
        I just wanted to say that I’m wishing you good luck on your IELTS and exams, hope you get a perfect score. Remember this: all your hard work will pay off.
        God is good; if you truly want something, He will help you achieve it. 
        Semangat ^_^... -Qy
      </p>
      <iframe className="rounded-[12px]" src="https://open.spotify.com/embed/track/5VBjyOQzqlPNgdRPMM6prF?utm_source=generator&theme=0" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
  )
}

export default LetterPage