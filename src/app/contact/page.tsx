'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CustomEase } from "gsap/CustomEase";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
    const xPosition = useRef<number>(0)
    const yPosition = useRef<number>(0)
    const dizzyIsPlaying = useRef(false);
    const dimensions = useRef({ width: 0, height: 0 });

     // Função para calcular a porcentagem da posição
     function percentage(partialValue: number, totalValue: number) {
      return (100 * partialValue) / totalValue;
    }

    function updateWindowSize() {
      dimensions.current = {
        height: window.innerHeight,
        width:window.innerWidth
      }
    }
  
    useEffect(() => {
      gsap.registerPlugin(CustomEase);
      updateWindowSize()

      // Função para atualizar as coordenadas do mouse e detectar movimento rápido
      function updateScreenCoords(event: MouseEvent) {
        if (!dizzyIsPlaying.current) {
          xPosition.current = event.clientX;
          yPosition.current = event.clientY;
        }
        if (!dizzyIsPlaying.current && Math.abs(event.movementX) > 500) {
          dizzyIsPlaying.current = true;
          dizzy.restart();
        }
      }

      // Função que anima a face com base na posição do mouse
      function animateFace() {
        if (!xPosition.current) return;
        const x = percentage(xPosition.current, dimensions.current.width) - 50;
        const y = percentage(yPosition.current, dimensions.current.height) - 50;
        const yHigh = percentage(yPosition.current, dimensions.current.height) - 20;
        const yLow = percentage(yPosition.current, dimensions.current.height) - 80;
    
        gsap.to(".face", { yPercent: yLow / 30, xPercent: x / 30 });
        gsap.to(".eye", { yPercent: yHigh / 3, xPercent: x / 2 });
        gsap.to(".inner-face", { yPercent: y / 6, xPercent: x / 8 });
        gsap.to(".hair-front", { yPercent: yHigh / 15, xPercent: x / 22 });
        gsap.to([".hair-back", ".shadow"], { yPercent: (yLow / 20) * -1, xPercent: (x / 20) * -1 });
        gsap.to(".ear", { yPercent: (y / 1.5) * -1, xPercent: (x / 10) * -1 });
        gsap.to([".eyebrow-left", ".eyebrow-right"], { yPercent: y * 2.5 });
      }

      // Função para adicionar o evento de movimento do mouse
      function addMouseEvent() {
        const safeToAnimate = window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
        if (safeToAnimate) {
          window.addEventListener("mousemove", updateScreenCoords);
          gsap.ticker.add(animateFace);
          blink.play();
        }
      }

      const meTl = gsap.timeline({
        onComplete: addMouseEvent,
        delay: 1
      });
  
      gsap.set('.bg', { transformOrigin: '50% 50%' });
      gsap.set('.ear-right', { transformOrigin: '0% 50%' });
      gsap.set('.ear-left', { transformOrigin: '100% 50%' });
      gsap.set('.me', { opacity: 1 });
     
      meTl
        .from(
          '.me',
          {
            duration: 1,
            yPercent: 100,
            ease: 'elastic.out(0.5, 0.4)'
          },
          0.5
        )
        .from(
          '.head , .hair , .shadow',
          {
            duration: 0.9,
            yPercent: 20,
            ease: 'elastic.out(0.58, 0.25)'
          },
          0.6
        )
        .from(
          '.ear-right',
          {
            duration: 1,
            rotate: 40,
            yPercent: 10,
            ease: 'elastic.out(0.5, 0.2)'
          },
          0.7
        )
        .from(
          '.ear-left',
          {
            duration: 1,
            rotate: -40,
            yPercent: 10,
            ease: 'elastic.out(0.5, 0.2)'
          },
          0.7
        )
        .to(
          '.glasses',
          {
            duration: 1,
            keyframes: [{ yPercent: -10 }, { yPercent: -0 }],
            ease: 'elastic.out(0.5, 0.2)'
          },
          0.75
        ) 
        .from(
          ".eyebrow-right , .eyebrow-left",
          {
            duration: 1,
            yPercent: 300,
            ease: "elastic.out(0.5, 0.2)"
          },
          0.7
        )
        .to(
          ".eye-right , .eye-left",
          {
            duration: 0.01,
            opacity: 1
          },
          0.85
        )
        .to(
          ".eye-right-2 , .eye-left-2",
          {
            duration: 0.01,
            opacity: 0
          },
          0.85
        );
      
        // Função de animação de blink
      const blink = gsap.timeline({
        repeat: -1,
        repeatDelay: 5,
        paused: true
      });

      blink
      .to(".eye-right, .eye-left", { duration: 0.01, opacity: 0 }, 0)
      .to(".eye-right-2, .eye-left-2", { duration: 0.01, opacity: 1 }, 0)
      .to(".eye-right, .eye-left", { duration: 0.01, opacity: 1 }, 0.15)
      .to(".eye-right-2 , .eye-left-2", { duration: 0.01, opacity: 0.15 }, 0.15);
  
       // Definindo a animação de tontura (dizzy)
       const dizzy = gsap.timeline({
        paused: true,
        onComplete: () => {
          dizzyIsPlaying.current = false;
        }
      });
  
      dizzy
      .to('.eyes', { opacity: 0, duration: 0.01 }, 0)
      .to('.dizzy', { opacity: 0.3, duration: 0.01 }, 0)
      .to('.mouth', { opacity: 0, duration: 0.01 }, 0)
      .to('.oh', { opacity: 0.85, duration: 0.01 }, 0)
      .to('.head, .hair-back, .shadow', {
        rotate: 2,
        transformOrigin: '50% 50%',
        ease: 'myWiggle',
        duration: 6
      }, 0)
      .to('.me', {
        rotate: -2,
        transformOrigin: '50% 100%',
        ease: 'myWiggle',
        duration: 6
      }, 0)
      .to('.me', {
        scale: 0.99,
        transformOrigin: '50% 100%',
        ease: 'lessWiggle',
        duration: 4
      }, 0)
      .to('.dizzy-1', {
        rotate: -360,
        repeat: 5,
        transformOrigin: '50% 50%',
        duration: 1,
        ease: 'none'
      }, 0.01)
      .to('.dizzy-2', {
        rotate: 360,
        repeat: 5,
        transformOrigin: '50% 50%',
        duration: 1,
        ease: 'none'
      }, 0.01)
      .to('.eyes', { opacity: 1, duration: 0.01 }, 4)
      .to('.dizzy', { opacity: 0, duration: 0.01 }, 4)
      .to('.oh', { opacity: 0, duration: 0.01 }, 4)
      .to('.mouth', { opacity: 1, duration: 0.01 }, 4);

       updateWindowSize()
       window.addEventListener("resize", updateWindowSize);
  
      return () => {
        window.removeEventListener("resize", updateWindowSize);
      };
    }, [ dizzyIsPlaying, xPosition, yPosition]);

    return (
    <div className="flex flex-col items-center justify-center h-full mx-auto container xl:pt-8">
      <div className="dark:bg-[#232329] bg-[#BA9470] text-primary dark:text-white p-8 rounded-lg flex flex-col md:flex-row items-center w-full">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <h2 className="text-xl font-bold mb-2">I&apos;m always up for a chat.</h2>
          <p className="mb-2">
            <span className="font-bold underline">Pop me an email</span> at hi@aa.com
          </p>
          <p className="mb-4">or give me a shout on social media.</p>
          <div className="flex space-x-4">
            <a href="https://github.com/lizis-bianca" className="dark:text-accent text-[#5e7153] text-2xl">
              <FaGithub />
            </a>
            <a href="#" className="dark:text-accent text-[#5e7153] text-2xl">
              <FaLinkedinIn />
            </a>
            <a href="#" className="dark:text-accent text-[#5e7153] text-2xl">
              <FaInstagram />
            </a>
            <a href="#" className="dark:text-accent text-[#5e7153] text-2xl">
              <MdEmail />
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center items-center overflow-hidden">
          <svg className="me flex-shrink-0 z-50" width="500" height="400" viewBox="0 10 211.73 180" strokeLinecap="round" strokeLinejoin="round">
                <defs>
                  <clipPath id="background-clip">
                    <path d="M39 153.73s31.57 19.71 77.26 15.21 90.18-37.23 90.36-72.33-8.82-80.28-33.59-86.29C136.84-6.57 114.13-5.82 88-2.82S34.73 11.45 16.71 48.24C-1.5 66.64-4.88 125.2 39 153.73z" fill="none" />
                  </clipPath>

                  <linearGradient id="linear-gradient" x1="102.94" y1="154.47" x2="102.94" y2="36.93" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#5a4533" />
                    <stop offset="0.01" stopColor="#5a4533" />
                    <stop offset="0.19" stopColor="#4f3e2e" />
                    <stop offset="0.35" stopColor="#7f6e56" />
                    <stop offset="0.47" stopColor="#5e4e43" />
                    <stop offset="0.54" stopColor="#4f4137" />
                    <stop offset="0.6" stopColor="#4f4137" />
                    <stop offset="1" stopColor="#4f4137" />
                  </linearGradient>
                </defs>
                <path className="bg" d="M39 153.73s31.57 19.71 77.26 15.21 90.18-37.23 90.36-72.33-10.51-57-35.28-63-50.22 17-76.31 20-60.12-15.88-78.32 2.51S-4.88 125.2 39 153.73z" fill="rgb(111, 220, 191)" />
                <g clipPath="url(#background-clip)">
                  <g className="me" opacity="0">
                    <g className="body">
                      <path className="shadow" d="M139.86,51.47s12.76,8.91,16,18.07,13,39.06,17.71,49.82,15.06,32.5,15.91,36.42,3.57,9-2.52,14.2-20.63,16-20.63,16l-15.47,10.8s20.87,15.67,23.68,25.32a91.16,91.16,0,0,1,6.34,22.79l-27.39,8.54L127.2,182.85l-17-15.1L102.31,93.37Z" opacity="0.09" style={{ isolation: 'isolate' }} />
                      <path className="shadow" d="M70.44,74A43.64,43.64,0,0,0,70.91,84.27c-8.39,11.87-8.1,40.52-11.61,51.23S54.76,154.26,55.93,165s6.64,18.27,6.64,18.27a86.65,86.65,0,0,1,22.93,5.88c11,3.89,26.42,10.48,26.42,10.48S79.6,188.53,77.84,198a87.23,87.23,0,0,0-4.34,22.26l26.89,5.9,20.19-42,15.42-16L121.91,95Z" opacity="0.09" style={{ isolation: 'isolate' }} />
                      <path className="hair-back hair" d="M127.63,45.17c7,4.5,18,12,23,33,4,25,5,31.5,6,36.5s3.5,17.5,9,27c3.5,7,4.5,12,8,17s5.5,6.5,8,10c2.5,3.5,4.5,9.5,4,12l-10,10s7-20-2-26c0,0,4.5,18,3.5,21s-10,11-10,11-4.5-8.5-8-17,5,17,3,18-22,12-33,9.5-25.5-7.5-27.5-8c0,0,4-4.5,2-12.5s-4-11-3.5-9.5c0.5,1.5-2,3.5-2,10.5a9.5,9.5,0,0,1-4,8.5s-9.5-6-16-8.5A58,58,0,0,1,52.5,145s-7.5-14-2-28S58.5,106,58.5,91s3.5-35.5,24-47.5S118.5,39.5,127.63,45.17Z" fill="url(#linear-gradient)" />

                      <path className="neck" d="M114.26 143.16v-14a9.22 9.22 0 10-18.43 0v14c-15.27 2.84-24.74 15.08-24.74 27.33H139c0-12.24-9.5-24.49-24.74-27.33z" fill="#ede3d1" />
                      <path className="top" d="M105.61 167c-30.17 0-25.36-40-25.36 15.84h25.35l25-2.14c-.05-55.79 5.17-13.7-24.99-13.7z" fill="#fff" stroke="#404040" strokeWidth=".5" />
                      <path className="shoulder" d="M95.82 142.87c-16 1.84-29.37 19.5-29.37 40h29.37z" fill="#404040" />
                      <path className="shoulder" d="M114.23 142.67c15.76 1.85 29 19.6 29 40.2h-29z" fill="#404040" />
                    </g>
                    <path className="shadow" d="M95.82 122.36h18.41v14.31s-10.5 5.54-18.41 0z" fill="#efceb9" />
                    <g className="head">
                      <g className="ear-left ear">
                        <path d="M63.52 105.14A8.21 8.21 0 0072 113.2a8.36 8.36 0 008.51-8.1A8.21 8.21 0 0072 97a8.36 8.36 0 00-8.48 8.14z" fill="#ede3d1" />
                        <path d="M68.54 104.48a17 17 0 014.14.41c1.07.31 1.94 1 3 1.31a.39.39 0 00.43-.57c-1.15-2.38-5.49-1.86-7.58-1.67a.26.26 0 000 .52z" fill="#b5aa9a" />
                      </g>
                      <g className="ear-right ear">
                        <path d="M144.37 105.24a8.2 8.2 0 01-8.37 8.06 8.35 8.35 0 01-8.51-8.1 8.21 8.21 0 018.42-8.06 8.35 8.35 0 018.46 8.1z" fill="#ede3d1" />
                        <path d="M139.6 104c-2.1-.19-6.43-.72-7.59 1.67a.39.39 0 00.44.57c1.07-.26 1.92-1 3-1.31a17.51 17.51 0 014.15-.41.26.26 0 000-.52z" fill="#b5aa9a" />
                      </g>
                      <g className="face">
                        <rect x="73.99" y="48.26" width="61.54" height="80.49" rx="26.08" transform="rotate(180 104.76 88.5)" fill="#ede3d1" />
                        <g className="inner-face">
                          <path className="eyebrow-right" d="M120.73 79a9 9 0 00-4-1.22 9.8 9.8 0 00-4.19.87" fill="none" stroke="#b5aa9a" strokeWidth="1.04" />
                          <path className="eyebrow-left" d="M97.12 79.41a9.53 9.53 0 00-4-1.11 10.58 10.58 0 00-4.2.76" fill="none" stroke="#b5aa9a" strokeWidth="1.04" />
                          <path className="mouth" d="M97 107.52s7.06 4.62 14 1.59" fill="none" stroke="#b5aa9a" strokeWidth="1.04" />
                          <path className="oh" opacity="0" d="M105.56,117.06c4-.14,5-2.89,4.7-5.64s-1.88-6.7-4.84-6.62-4.73,4.36-4.9,6.72S101.57,117.19,105.56,117.06Z" fill="#262528" />
                          <g className="eyes">
                            <path className="eye-left eye" d="M89.48 87.37c-.07 2.08 1.25 3.8 2.94 3.85s3.1-1.59 3.16-3.67-1.25-3.8-2.94-3.85-3.1 1.59-3.16 3.67z" fill="#2b343b" />
                            <path className="eye-right eye" d="M113.67 87.37c-.07 2.08 1.25 3.8 2.94 3.85s3.1-1.59 3.16-3.67-1.25-3.8-2.94-3.85-3.1 1.59-3.16 3.67z" fill="#2b343b" />
                            <path className="eye-right-2 eye" d="M114.11 88a5.72 5.72 0 002.48.72 6.46 6.46 0 002.59-.45" opacity="0" fill="none" stroke="#282828" strokeWidth="1.04" />
                            <path className="eye-left-2 eye" d="M89.85 88a5.77 5.77 0 002.56.3 6.48 6.48 0 002.49-.87" fill="none" opacity="0" stroke="#282828" strokeWidth="1.04" />
                          </g>
                          <path className="dizzy dizzy-1" opacity="0" d="M113.61,87.6c.54-2.66,2.66-3.84,4.63-3.37A3.3,3.3,0,0,1,117,90.71a2.53,2.53,0,0,1-2-3,2.48,2.48,0,0,1,2.73-1.92A1.71,1.71,0,0,1,119.32,88a1.59,1.59,0,0,1-1.75,1.34c-.79-.1-1.41-.59-1-1.42s1-.72,1.22-.24" fill="none" stroke="#000" strokeWidth="0.75" />
                          <path className="dizzy dizzy-2" opacity="0" d="M96.15,87.27c-.54-2.66-2.66-3.84-4.63-3.37s-2.89,1.9-2.46,4a3.11,3.11,0,0,0,3.68,2.45,2.53,2.53,0,0,0,2-3A2.49,2.49,0,0,0,92,85.49a1.71,1.71,0,0,0-1.57,2.13A1.57,1.57,0,0,0,92.19,89c.79-.11,1.41-.6,1-1.43s-1-.72-1.22-.23" fill="none" stroke="#000" strokeWidth="0.75" />
                          <path className="nose" d="M102.39 98.13s3.09 1.55 5.78 0" fill="none" stroke="#e0d5c1" />
                          <path className="glasses" d="M133.54 81.76c-4.7-1.42-15.29-2.42-19.83-.45-5.82 2.17-3.18 1.57-8.55 1.17-5.36.4-2.74 1-8.55-1.18-7.3-2.55-15.58-.24-22.25.72v2.75c2.46.24 1.26 6.78 3.06 10.32 2.13 7.23 12.69 9.55 18.19 5.49 3.9-2 7.08-10.32 7.21-12.86 0-1.64 4.15-2.57 4.61.24.11 2.53 3.42 10.69 7.28 12.62 5.5 4 16 1.74 18.17-5.49 1.8-3.54 1.69-9.92 2.88-10.32s.74-2.67 0-2.75-1.02-.1-2.22-.26zM97.25 97.49C90.94 104.81 79 101.2 78 92.3c-.7-2.62-1-7.3 1.27-9.12s6.88-1.87 9.23-2c11.14-.26 16.62 5.6 8.75 16.31zm35.12-5.19c-3.71 17.2-27.26 7.42-22.09-7.36 1.87-3.11 9.09-3.84 11.55-3.73 8.07-.04 12.7 1.79 10.54 11.09z" fill="#031112" opacity=".58" />
                          <path className="blush-left eye" d="M89.9 98.17a2.66 2.66 0 01-1.55-.93 3.73 3.73 0 01-.76-3.12 3 3 0 011-1.56 2 2 0 011.4-.42 3 3 0 012.5 2.72.76.76 0 010 .21 3.19 3.19 0 01.11.91 2.1 2.1 0 01-1.77 2.21 2.07 2.07 0 01-.93-.02zM89.34 96v-.05s-.04.05 0 .05z" fill="#efceb9" fillRule="evenodd" />
                          <path className="blush-right eye" d="M118.93 98.19a2.09 2.09 0 01-1.77-2.19 3.58 3.58 0 01.1-.91v-.21a3 3 0 012.51-2.72 2 2 0 011.4.42 3 3 0 011 1.56 3.73 3.73 0 01-.76 3.12 2.66 2.66 0 01-1.55.93 2.08 2.08 0 01-.93 0zm1.53-2.2v.05c0 .05.05-.04 0-.04z" fill="#efceb9" fillRule="evenodd" />
                          
                          <circle cx="85" cy="91" r="0.5" fill="#D2B48C" /> 
                          <circle cx="80" cy="110" r="0.5" fill="#D2B48C" />
                          <circle cx="90" cy="110" r="0.5" fill="#D2B48C" />
      
                        </g>
                        <path className="hair-front" d="M134.1,57.61C129.22,51.79,118,45,115.33,44.84s-13-1.87-20.65,0-16,4.51-18.77,8.26-6.17,18-4.77,24.41c0,0,3-3.09,10.46-5.73h0s.74-6.33,1.45-7.18a32.29,32.29,0,0,0-.1,6.73,59.67,59.67,0,0,1,8.22-2,37,37,0,0,1,.25-8.11,67.11,67.11,0,0,0,.54,8c2-.32,4.18-.59,6.52-.78h0s.18-2.82.61-5.5c0,0,.28,3.33.6,5.42,1.78-.12,3.64-.19,5.62-.21a76.76,76.76,0,0,1,9.11.45c-.05-2.15,0-6.82-.22-7.36s1.07,2.06,1.54,7.52a51.14,51.14,0,0,1,8.84,1.92c.23-2.37.41-5.93-.3-7.88,0,0,2.1,5,1.9,8.42h0c8.36,3,11.06,7.25,11.06,7.25S139,63.43,134.1,57.61Z" fill="#4f4137" />
                      </g>
                    </g>
                  </g>
                </g>
          </svg>
        </div>
      </div>
      <h1 className="dark:text-white text-primary text-4xl font-bold mt-8">Hey there!</h1>
    </div>
    )
}