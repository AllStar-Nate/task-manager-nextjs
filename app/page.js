"use client";
import Image from "next/image";
import Head from "next/head";
import Script from 'next/script';
import "./styles/TaskStyles.css";

import { useEffect } from 'react';
export default function Home() {
  return (
    <>
              <Head>
              <meta charSet="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>Task Manager</title>
              <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Impact&display=swap" />
              </Head>
            
            <div className="slider-container" id="slider-container">
                <div className="slide" id="complete-calendar-slide">
                <div className="arrow-container" id="arrow-container">
                    <span id="left">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="171.4913" height="182.78572" viewBox="0,0,171.4913,182.78572">
                        <g transform="translate(-154.25435,-88.60714)">
                        <g data-paper-data="{&quot;isPaintingLayer&quot;:true}" fill="currentColor" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10}   strokeDashoffset={0} style={{mixBlendMode: 'normal'}}>
                            <path d="M290.42659,121.03762h35.31906l-48.01092,58.96025l48.01092,58.96025h-35.31906l-48.01092,-58.96025z" data-paper-data="{&quot;index&quot;:null}" />
                            <path d="M228.67574,88.60714h54.74667l-74.42139,91.39073l74.42139,91.39499h-54.74667l-74.42139,-91.39499z" data-paper-data="{&quot;index&quot;:null}" />
                        </g>
                        </g>
                    </svg>
                    </span>
                    <span className="title">Completed Tasks</span>
                    <span id="right">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="171.4913" height="182.78572" viewBox="0,0,171.4913,182.78572">
                        <g transform="translate(-154.25435,-88.60714)">
                        <g data-paper-data="{&quot;isPaintingLayer&quot;:true}" fill="currentColor" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10}   strokeDashoffset={0} style={{mixBlendMode: 'normal'}}>
                            <path d="M237.58433,179.99787l-48.01092,58.96025h-35.31906l48.01092,-58.96025l-48.01092,-58.96025h35.31906z" />
                            <path d="M325.74565,179.99787l-74.42139,91.39499h-54.74667l74.42139,-91.39499l-74.42139,-91.39073h54.74667z" />
                        </g>
                        </g>
                    </svg>
                    </span>
                </div>
                <div className="calendar-container" id="complete-calendar-container">
                    <div className="calendar" id="complete-calendar" />
                </div>
                </div>
                <div className="slide" id="calendar-slide">
                <div className="arrow-container" id="arrow-container">
                    <span id="left">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="171.4913" height="182.78572" viewBox="0,0,171.4913,182.78572">
                        <g transform="translate(-154.25435,-88.60714)">
                        <g data-paper-data="{&quot;isPaintingLayer&quot;:true}" fill="currentColor" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10}   strokeDashoffset={0} style={{mixBlendMode: 'normal'}}>
                            <path d="M290.42659,121.03762h35.31906l-48.01092,58.96025l48.01092,58.96025h-35.31906l-48.01092,-58.96025z" data-paper-data="{&quot;index&quot;:null}" />
                            <path d="M228.67574,88.60714h54.74667l-74.42139,91.39073l74.42139,91.39499h-54.74667l-74.42139,-91.39499z" data-paper-data="{&quot;index&quot;:null}" />
                        </g>
                        </g>
                    </svg>
                    </span>
                    <span className="title">Calendar</span>
                    <span id="right">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="171.4913" height="182.78572" viewBox="0,0,171.4913,182.78572">
                        <g transform="translate(-154.25435,-88.60714)">
                        <g data-paper-data="{&quot;isPaintingLayer&quot;:true}" fill="currentColor" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10}   strokeDashoffset={0} style={{mixBlendMode: 'normal'}}>
                            <path d="M237.58433,179.99787l-48.01092,58.96025h-35.31906l48.01092,-58.96025l-48.01092,-58.96025h35.31906z" />
                            <path d="M325.74565,179.99787l-74.42139,91.39499h-54.74667l74.42139,-91.39499l-74.42139,-91.39073h54.74667z" />
                        </g>
                        </g>
                    </svg>
                    </span>
                </div>
                <div className="calendar-container" id="calendar-container">
                    <div className="calendar" id="calendar" />
                </div>
                </div>
                <div className="slide" id="priority-calendar-slide">
                <div className="arrow-container" id="arrow-container">
                    <span id="left">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="171.4913" height="182.78572" viewBox="0,0,171.4913,182.78572">
                        <g transform="translate(-154.25435,-88.60714)">
                        <g data-paper-data="{&quot;isPaintingLayer&quot;:true}" fill="currentColor" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10}   strokeDashoffset={0} style={{mixBlendMode: 'normal'}}>
                            <path d="M290.42659,121.03762h35.31906l-48.01092,58.96025l48.01092,58.96025h-35.31906l-48.01092,-58.96025z" data-paper-data="{&quot;index&quot;:null}" />
                            <path d="M228.67574,88.60714h54.74667l-74.42139,91.39073l74.42139,91.39499h-54.74667l-74.42139,-91.39499z" data-paper-data="{&quot;index&quot;:null}" />
                        </g>
                        </g>
                    </svg>
                    </span>
                    <span className="title">High Priority Tasks</span>
                    <span id="right">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="171.4913" height="182.78572" viewBox="0,0,171.4913,182.78572">
                        <g transform="translate(-154.25435,-88.60714)">
                        <g data-paper-data="{&quot;isPaintingLayer&quot;:true}" fill="currentColor" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10}   strokeDashoffset={0} style={{mixBlendMode: 'normal'}}>
                            <path d="M237.58433,179.99787l-48.01092,58.96025h-35.31906l48.01092,-58.96025l-48.01092,-58.96025h35.31906z" />
                            <path d="M325.74565,179.99787l-74.42139,91.39499h-54.74667l74.42139,-91.39499l-74.42139,-91.39073h54.74667z" />
                        </g>
                        </g>
                    </svg>
                    </span>
                </div>
                <div className="calendar-container" id="priority-calendar-container">
                    <div className="calendar" id="priority-calendar" />
                </div>
                </div>
            </div>     
            <Script src="/Scripts/Task-Manager.js" strategy="lazyOnload" />
            <Script src="/Scripts/Sliding.js" strategy="lazyOnload" />
            <Script src="/Scripts/DragDropTouch.js" strategy="lazyOnload" />   
        </>
  );
}
