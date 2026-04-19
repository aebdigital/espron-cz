import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import FloatingQuoteButton from "@/components/site/FloatingQuoteButton";
import ServiceRealizationGallery from "@/components/site/ServiceRealizationGallery";
import QuoteScrollButton from "@/components/site/QuoteScrollButton";
import ServiceIntroSection from "@/components/site/ServiceIntroSection";
import BuilderContactForm, { type BuilderContactField } from "@/components/site/BuilderContactForm";
import { CONTACT_INFO, PAGE_OVERRIDES } from "@/lib/site-navigation";
import type { LegacyGalleryItem } from "@/lib/legacy-gallery-data";

export const metadata: Metadata = {
  title: "Základové desky | ESPRON",
  description:
    "Kvalitní základová deska na klíč s garancí kvality. Odborné realizace v Praze a jižních Čechách pod dohledem certifikovaného stavbyvedoucího. Cena od 500 000 Kč.",
};

const PROBLEMS = [
  {
    label: "Statické poruchy",
    desc: "Nekvalitní podloží nebo betonáž způsobují praskání nosných zdí a poklesy stavby.",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10" />
      </svg>
    ),
  },
  {
    label: "Vlhkost a plísně",
    desc: "Špatná hydroizolace vede k vzlínání zemní vlhkosti a vzniku zdraví škodlivých plísní.",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0a2 2 0 01-2 2H6a2 2 0 01-2-2m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5" />
      </svg>
    ),
  },
  {
    label: "Geometrické nepřesnosti",
    desc: "Nerovná deska prodražuje pokládku podlah a komplikuje montáž hrubé stavby.",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    label: "Snížená životnost",
    desc: "Nekvalitní materiály vedou k degradaci betonu a korozi armatury v základech.",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const WHY = [
  {
    title: "Odbornost",
    desc: "Práce prováděné pod dohledem autorizovaného stavbyvedoucího v Česku i na Slovensku.",
  },
  {
    title: "Specialisté na interiér i exteriér",
    desc: "Nabízíme komplexní stavební služby — od základové desky přes hrubou stavbu až po dokončovací práce.",
  },
  {
    title: "Působíme v okolí Prahy a na jihu Čech",
    desc: "Realizujeme v Praze, Českých Budějovicích a okolních krajích.",
  },
];

const INCLUDED = [
  {
    label: "Vytyčení polohy",
    icon: (
      <svg className="h-8 w-8" viewBox="20 20 160 160" xmlns="http://www.w3.org/2000/svg">
        <path d="m52.368 128.92-21.986-22.031 75.947-75.54a1.83 1.83 0 0 1 2.584.005 1.822 1.822 0 0 1-.006 2.58L35.55 106.899l16.827 16.862 73.359-72.966a1.83 1.83 0 0 1 2.584.005 1.822 1.822 0 0 1-.006 2.58l-75.946 75.54z" fill="#04723D" />
        <path d="M39.059 139.241h-.014a7.06 7.06 0 0 1-5.018-2.088l-11.959-11.984c-2.764-2.768-2.755-7.267.017-10.028l10.886-10.827 21.986 22.031-10.887 10.828a7.062 7.062 0 0 1-5.011 2.068zm-6.097-29.768-8.298 8.252a3.444 3.444 0 0 0-.007 4.868l11.959 11.985a3.427 3.427 0 0 0 2.435 1.014h.007c.918 0 1.781-.357 2.432-1.004l8.298-8.253-16.826-16.862z" fill="#04723D" />
        <path d="m128.223 54.337-2.04-.595c-9.834-2.855-17.624-10.756-20.327-20.62l-.454-1.657L139.219 20l-10.996 34.337zM109.89 33.798c2.587 7.429 8.513 13.384 15.949 16.004l7.693-24.019-23.642 8.015z" fill="#04723D" />
        <path d="M97.499 63.639a1.822 1.822 0 0 1-1.299-3.107l10.827-10.925a1.83 1.83 0 0 1 2.584-.014c.718.709.724 1.864.014 2.58L98.798 63.098a1.82 1.82 0 0 1-1.299.541z" fill="#04723D" />
        <path d="M180 180H21.598L180 21.857V180zm-149.581-3.648h145.926V30.664L30.419 176.352zm121.911-23.977H88.399l63.931-63.826v63.826zm-55.109-3.648h51.455V97.356l-51.455 51.371z" fill="#04723D" />
        <path d="M171.377 60.682h-4.341c-1.009 0-1.827-.817-1.827-1.824s.818-1.824 1.827-1.824h4.341c1.009 0 1.827.817 1.827 1.824s-.818 1.824-1.827 1.824z" fill="#04723D" />
        <path d="M171.377 73.317h-8.098c-1.009 0-1.827-.817-1.827-1.824s.818-1.824 1.827-1.824h8.098c1.009 0 1.827.817 1.827 1.824s-.818 1.824-1.827 1.824z" fill="#04723D" />
        <path d="M171.377 85.953h-4.341c-1.009 0-1.827-.817-1.827-1.824s.818-1.824 1.827-1.824h4.341c1.009 0 1.827.817 1.827 1.824s-.818 1.824-1.827 1.824z" fill="#04723D" />
        <path d="M171.377 98.587h-8.098c-1.009 0-1.827-.817-1.827-1.824s.818-1.824 1.827-1.824h8.098c1.009 0 1.827.817 1.827 1.824s-.818 1.824-1.827 1.824z" fill="#04723D" />
        <path d="M171.377 111.223h-4.341a1.825 1.825 0 1 1 0-3.648h4.341c1.009 0 1.827.817 1.827 1.824a1.826 1.826 0 0 1-1.827 1.824z" fill="#04723D" />
        <path d="M171.377 123.858h-8.098c-1.009 0-1.827-.817-1.827-1.824s.818-1.824 1.827-1.824h8.098c1.009 0 1.827.817 1.827 1.824s-.818 1.824-1.827 1.824z" fill="#04723D" />
        <path d="M171.377 136.493h-4.341a1.825 1.825 0 1 1 0-3.648h4.341a1.825 1.825 0 1 1 0 3.648z" fill="#04723D" />
        <path d="M171.377 149.128h-8.098a1.825 1.825 0 1 1 0-3.648h8.098c1.009 0 1.827.817 1.827 1.824a1.826 1.826 0 0 1-1.827 1.824z" fill="#04723D" />
        <path d="M171.377 161.763h-4.341a1.825 1.825 0 1 1 0-3.648h4.341a1.825 1.825 0 1 1 0 3.648z" fill="#04723D" />
      </svg>
    ),
  },
  {
    label: "Shrnutí ornice",
    icon: (
      <svg className="h-8 w-8" viewBox="53.296 25 93.406 150.001" xmlns="http://www.w3.org/2000/svg">
        <path d="M102.699 26.16c-1.367-1.546-4.032-1.546-5.399 0-1.797 2.036-44.004 50.164-44.004 75.043 0 13.46 5.812 26.27 15.945 35.147 7.602 6.658 17.136 10.62 27.159 11.394v23.658a3.599 3.599 0 1 0 7.198 0v-23.636a46.255 46.255 0 0 0 24.032-8.905c11.942-8.778 19.072-22.854 19.072-37.658.001-24.879-42.206-73.007-44.003-75.043zm-6.298 52.447L79.111 61.34c5.879-8.567 12.146-16.684 17.29-22.966v40.233zm7.198-40.234c5.165 6.308 11.464 14.465 17.364 23.072l-17.364 17.206V38.373zm-29.616 92.561a39.535 39.535 0 0 1-13.488-29.731c0-8.46 6.447-21.184 14.547-33.756l21.359 21.328v26.768L78.754 97.896c-1.406-1.406-3.683-1.406-5.089 0s-1.406 3.683 0 5.089l22.736 22.736v14.822a39.455 39.455 0 0 1-22.418-9.609zm49.385 2.126a39.114 39.114 0 0 1-19.769 7.473v-14.811l22.739-22.736c1.406-1.406 1.406-3.683 0-5.089s-3.683-1.406-5.089 0L103.6 115.544V88.785l21.426-21.232c8.067 12.538 14.48 25.214 14.48 33.65-.001 12.52-6.032 24.431-16.138 31.857z" fill="#22495A" />
      </svg>
    ),
  },
  {
    label: "Výkopové práce",
    icon: (
      <svg className="h-8 w-8" viewBox="36.498 36.497 127.006 127.005" xmlns="http://www.w3.org/2000/svg">
        <path d="M143.356 37.152a2.234 2.234 0 0 0-3.524.478l-11.063 19.493a2.235 2.235 0 0 0 .364 2.683l.871.871-54.764 54.769-9.93-9.931c-.838-.838-2.322-.838-3.161 0l-18.952 18.953a22.719 22.719 0 0 0-6.699 16.172 22.72 22.72 0 0 0 6.699 16.174c4.459 4.459 10.315 6.688 16.171 6.688 5.857 0 11.713-2.23 16.172-6.688l18.952-18.953a2.235 2.235 0 0 0 0-3.161l-9.93-9.931L139.327 70l.87.87a2.231 2.231 0 0 0 2.683.364l19.492-11.064a2.235 2.235 0 0 0 .478-3.524l-19.494-19.494zM72.378 153.653c-7.174 7.173-18.848 7.174-26.021 0-7.174-7.175-7.174-18.85 0-26.025l17.371-17.373 16.09 16.092.001.002.002.001 9.928 9.929-17.371 17.374zm9.022-32.045l-3.002-3.002 54.764-54.769 3.002 3.002L81.4 121.608zm60.752-55.102l-1.247-1.247-6.158-6.159-.003-.004-.004-.003-1.244-1.244 8.774-15.461 15.341 15.343-15.459 8.775z" fill="#1F6D23" />
      </svg>
    ),
  },
  {
    label: "Zásyp a zhutnění",
    icon: (
      <svg className="h-8 w-8" viewBox="27.8 27.775 144.4 144.525" xmlns="http://www.w3.org/2000/svg">
        <path d="M27.8 151.9c0 11.2 9.1 20.4 20.4 20.4H137c11.2 0 20.4-9.1 20.4-20.4s-9.1-20.4-20.4-20.4h-5.6v-3.9c0-6-4.9-10.9-10.9-10.9h-7.9l-.1-.7 56-69.9v41h-13c-.7 0-1.3.4-1.7 1l-10.6 21.2H137c-1 0-1.9.8-1.9 1.9 0 1 .8 1.9 1.9 1.9h33.3c1 0 1.9-.8 1.9-1.9V40.7c0-.2 0-.4-.1-.6V40c-.1-.2-.2-.4-.3-.5v-.1l-11.1-11.1c-.7-.7-1.9-.7-2.6 0l-51.2 51.2-4.2-26.5c-.5-3.8-3.9-6.7-7.7-6.7H54.1c-4.3 0-7.8 3.5-7.8 7.8v77.5c-10.4.9-18.5 9.7-18.5 20.3zm81.1-35.2H50V54.1c0-2.3 1.8-4.1 4.1-4.1h40.8c2 0 3.8 1.5 4 3.5l10 63.2zm59.6-26v18.5h-21.1l9.3-18.5h11.8zM111.8 111l-4.4-27.7c.5 0 1-.2 1.3-.5l50.6-50.6 8.6 8.6-56.1 70.2zm16 20.5H50v-11.1h70.6c4 0 7.2 3.2 7.2 7.2v3.9zm-96.3 20.4c0-9.2 7.5-16.7 16.7-16.7H137c9.2 0 16.7 7.5 16.7 16.7s-7.5 16.7-16.7 16.7H48.1c-9.2-.1-16.6-7.5-16.6-16.7zm64.3-54.3c.4-.4.6-1 .5-1.6l-5.2-34.3c-.3-2.5-2.5-4.3-5-4.3H62.5c-2.8 0-5.1 2.3-5.1 5.1v30.1c0 .9.7 1.7 1.7 1.8l35.2 3.7h.2c.4 0 .9-.2 1.3-.5zm-3.5-3.4-31.2-3.3V62.5c0-.8.6-1.4 1.4-1.4h23.6c.7 0 1.3.5 1.4 1.2l4.8 31.9zm-31.2 11.4h11.1c1 0 1.9.8 1.9 1.9s-.8 1.9-1.9 1.9H61.1c-1 0-1.9-.8-1.9-1.9s.9-1.9 1.9-1.9zm63 44.4h7.4c1 0 1.9.8 1.9 1.9s-.8 1.9-1.9 1.9h-7.4c-1 0-1.9-.8-1.9-1.9s.9-1.9 1.9-1.9zM87 150h7.4c1 0 1.9.8 1.9 1.9s-.8 1.9-1.9 1.9H87c-1 0-1.9-.8-1.9-1.9S86 150 87 150zm-37 0h7.4c1 0 1.9.8 1.9 1.9s-.8 1.9-1.9 1.9H50c-1 0-1.9-.8-1.9-1.9S49 150 50 150z" fill="#FD5521" />
      </svg>
    ),
  },
  {
    label: "Hromosvod",
    icon: (
      <svg className="h-8 w-8" viewBox="54.5 20 90.999 160" xmlns="http://www.w3.org/2000/svg">
        <path d="M111.359 21.536 55.275 106.37c-1.856 2.864-.195 6.617 3.029 7.209l28.921 5.037c3.127.494 4.983 3.753 3.908 6.716l-17.001 50.071c-1.27 3.654 3.517 6.321 5.96 3.259l64.389-81.378c2.345-2.963.391-7.308-3.322-7.604l-34.295-2.271c-3.224-.198-5.374-3.358-4.592-6.419l15.242-56.49c1.075-3.852-4.005-6.223-6.155-2.964z" fill="#191919" />
      </svg>
    ),
  },
  {
    label: "Zalití základových pásů",
    icon: (
      <svg className="h-8 w-8" viewBox="31 19.001 137.999 161.999" xmlns="http://www.w3.org/2000/svg">
        <path fill="#191919" d="M164.715 63.848L124.303 23.3c-3.99-4.004-10.002-5.355-15.314-3.443l-20.128 7.247-.82-.822a6.728 6.728 0 0 0-9.526 0c-1.272 1.277-1.973 2.974-1.973 4.779s.701 3.503 1.973 4.779l.057.057-41.241 41.38c-8.441 8.469-8.441 22.25 0 30.72l42.972 43.117c.814.816 1.522 1.254 2.272 1.718a42 42 0 0 1 .574.361v16.983H48.747c-2.974 0-5.394 2.428-5.394 5.412S45.773 181 48.747 181h96.264c2.974 0 5.394-2.428 5.394-5.412s-2.42-5.412-5.394-5.412H96.112v-12.712c5.595-.123 10.825-2.354 14.807-6.35l41.241-41.38.057.058a6.705 6.705 0 0 0 4.763 1.976c1.725 0 3.45-.659 4.763-1.976 1.272-1.277 1.973-2.974 1.973-4.779s-.701-3.503-1.973-4.779l-.819-.822 7.222-20.197c1.906-5.332.559-11.363-3.431-15.367zM145.011 171.91c2.021 0 3.665 1.65 3.665 3.678s-1.645 3.678-3.665 3.678H48.747c-2.021 0-3.665-1.65-3.665-3.678s1.645-3.678 3.665-3.678h36.13V82.312c0-2.63 2.132-4.77 4.753-4.77s4.753 2.14 4.753 4.77v74.127c-.01.05-.032.096-.033.149-.001.064.021.12.033.18v15.142h50.628zm-35.315-22.024c-3.654 3.667-8.454 5.719-13.584 5.845V82.312c0-3.586-2.908-6.504-6.482-6.504s-6.482 2.918-6.482 6.504v68.833c-.567-.356-1.062-.695-1.623-1.259l-42.972-43.117c-7.767-7.793-7.767-20.472 0-28.265l41.241-41.38 71.142 71.382-41.24 41.38zm50.912-48.514c.969.972 1.503 2.265 1.503 3.64s-.534 2.668-1.503 3.64a5.122 5.122 0 0 1-7.254 0L79.651 34.7c-2-2.007-2-5.273 0-7.28 1-1.003 2.313-1.505 3.627-1.505s2.628.502 3.628 1.505l73.702 73.952zm6.027-22.703l-6.966 19.481-69.553-69.787 19.415-6.99c4.731-1.702 10.082-.498 13.635 3.066l40.412 40.548c3.555 3.565 4.754 8.936 3.057 13.682z" />
      </svg>
    ),
  },
  {
    label: "Zaměření geodetem",
    icon: (
      <svg className="h-8 w-8" viewBox="34.5 64 131 72" xmlns="http://www.w3.org/2000/svg">
        <path d="M65.325 78.472c-9.094 0-16.492 7.47-16.492 16.653s7.398 16.653 16.492 16.653c9.094 0 16.492-7.47 16.492-16.653 0-9.184-7.397-16.653-16.492-16.653zm0 28.838c-6.655 0-12.068-5.466-12.068-12.186s5.413-12.186 12.068-12.186c6.655 0 12.068 5.466 12.068 12.186S71.98 107.31 65.325 107.31z" fill="#1F6D23" />
        <path d="M163.288 121.783h-51.142V95.124C112.146 77.963 98.318 64 81.321 64H65.325C48.328 64 34.5 77.963 34.5 95.124v18.975c0 6.701 5.398 12.151 12.033 12.151h100.778v7.516c0 1.233.991 2.234 2.212 2.234h13.765c1.221 0 2.212-1 2.212-2.234v-9.75a2.223 2.223 0 0 0-2.212-2.233zM81.321 68.467c14.558 0 26.401 11.959 26.401 26.657v26.659H96.149V95.124a31.198 31.198 0 0 0-14.931-26.657h.103zm-42.397 45.632V95.124c0-14.698 11.843-26.657 26.401-26.657 14.556 0 26.4 11.959 26.4 26.657v26.659H46.533c-4.196 0-7.609-3.446-7.609-7.684zm122.152 17.434h-9.341v-5.283h9.341v5.283z" fill="#1F6D23" />
      </svg>
    ),
  },
  {
    label: "DT tvárnice",
    icon: (
      <svg className="h-8 w-8" viewBox="16.5 63 167 74" xmlns="http://www.w3.org/2000/svg">
        <path fill="#191919" d="M183.5 88.762V63H72.294v24.185H44.427v24.054H16.5V137h166.559v-25.761h-26.997V88.762H183.5zm-1.681-24.078v22.394h-52.921V64.684h52.921zm-107.845 0h52.921v22.394H73.974V64.684zM46.107 88.869H99.35v22.37H46.107v-22.37zm-27.926 46.447v-22.393h26.246v.024h26.997v22.369H18.181zm54.923 0v-22.369h53.242v22.369H73.104zm108.274-22.393v22.393h-53.243v-22.369h27.927v-.024h25.316zm-53.35-1.684h-26.889v-22.37h53.243v22.37h-26.354z" />
      </svg>
    ),
  },
  {
    label: "Kari sítě",
    icon: (
      <svg className="h-8 w-8" viewBox="47.5 50 105.001 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M94.596 84.059l-8.322-19.984a2.227 2.227 0 0 0-1.768-1.353l-21.41-2.761a2.203 2.203 0 0 0-2.052.86L47.955 78.045a2.237 2.237 0 0 0-.283 2.213l8.322 19.983c.306.736.98 1.251 1.768 1.353l21.41 2.761a2.222 2.222 0 0 0 2.052-.86l13.088-17.223a2.24 2.24 0 0 0 .284-2.213zm-16.13 15.706l-18.863-2.432-7.333-17.606 11.531-15.175 18.863 2.432 7.333 17.606-11.531 15.175z" fill="#1F6D23" />
        <path d="M72.633 70.443c-6.433-.826-12.349 3.751-13.177 10.211-.827 6.46 3.738 12.39 10.177 13.22.507.065 1.01.097 1.508.097 5.829 0 10.907-4.357 11.669-10.307v-.001c.827-6.459-3.738-12.389-10.177-13.22zm5.766 12.652c-.515 4.018-4.193 6.87-8.199 6.353-4.007-.516-6.847-4.207-6.332-8.226.474-3.703 3.634-6.414 7.26-6.414.31 0 .623.02.938.06 4.007.517 6.848 4.208 6.333 8.227z" fill="#1F6D23" />
        <path d="M89.326 139.758c.104.79.619 1.466 1.353 1.771l19.938 8.301a2.223 2.223 0 0 0 2.205-.289l17.134-13.174a2.23 2.23 0 0 0 .852-2.06l-2.804-21.474a2.232 2.232 0 0 0-1.353-1.771l-19.937-8.301a2.217 2.217 0 0 0-2.205.29l-17.133 13.173a2.23 2.23 0 0 0-.852 2.06l2.802 21.474zm16.868-32.383l17.565 7.314 2.471 18.919-15.096 11.607-17.565-7.314-2.471-18.92 15.096-11.606z" fill="#1F6D23" />
        <path d="M108.657 138.107c.507 0 1.021-.033 1.537-.101a11.687 11.687 0 0 0 7.806-4.515 11.76 11.76 0 0 0 2.337-8.731 11.743 11.743 0 0 0-4.5-7.832 11.665 11.665 0 0 0-8.702-2.345c-6.436.846-10.986 6.788-10.144 13.246.777 5.939 5.849 10.278 11.666 10.278zm-.944-19.099a7.255 7.255 0 0 1 5.414 1.459 7.308 7.308 0 0 1 2.8 4.873 7.323 7.323 0 0 1-1.454 5.433 7.274 7.274 0 0 1-4.857 2.809c-4.012.524-7.689-2.315-8.214-6.332-.525-4.019 2.306-7.716 6.311-8.242z" fill="#1F6D23" />
        <path d="M148.623 87.935l3.842-21.312a2.237 2.237 0 0 0-.751-2.1l-16.475-13.995a2.217 2.217 0 0 0-2.188-.397l-20.316 7.318a2.227 2.227 0 0 0-1.437 1.702l-3.842 21.312a2.237 2.237 0 0 0 .751 2.1l16.475 13.994a2.22 2.22 0 0 0 2.188.397l20.317-7.317a2.226 2.226 0 0 0 1.436-1.702zm-22.048 4.385L112.06 79.99l3.385-18.777 17.9-6.447 14.514 12.33-3.384 18.777-17.9 6.447z" fill="#1F6D23" />
        <path d="M132.055 61.92c-6.389-1.155-12.524 3.113-13.68 9.521a11.76 11.76 0 0 0 1.912 8.834 11.686 11.686 0 0 0 7.577 4.891 11.66 11.66 0 0 0 8.805-1.918 11.74 11.74 0 0 0 4.875-7.603 11.763 11.763 0 0 0-1.911-8.834 11.686 11.686 0 0 0-7.578-4.891zm5.113 12.932a7.302 7.302 0 0 1-3.033 4.73 7.248 7.248 0 0 1-5.478 1.193 7.274 7.274 0 0 1-4.715-3.043 7.322 7.322 0 0 1-1.189-5.497 7.345 7.345 0 0 1 7.205-6.042c.431 0 .868.038 1.307.118a7.271 7.271 0 0 1 4.715 3.043 7.328 7.328 0 0 1 1.188 5.498z" fill="#1F6D23" />
      </svg>
    ),
  },
  {
    label: "Vylití desky",
    icon: (
      <svg className="h-8 w-8" viewBox="33.893 21.478 132.144 157.122" xmlns="http://www.w3.org/2000/svg">
        <path d="M123.1 69.8h.2c1.9 0 3.7-.7 5.1-2l35.7-32.2c1.5-1.4 2.1-3.5 1.9-5.9-.3-2.1-1.2-4.1-2.4-5.4s-3.3-2.4-5.3-2.7c-2.4-.4-4.5.2-6.1 1.6l-33.9 33.9c-2.7 2.6-3 6.8-.8 9.8-4.2 6.5-3 18.5-2.9 19.8l.6 4.5c.7 4.7 1.4 9.2 0 13.2l-6-3.9c-.8-.5-1.6-1.2-2.6-1.8-5.3-3.8-13.3-9.5-20-2.5l-49.8 59.3c-2 2.1-3 4.8-2.9 7.7.1 2.9 1.2 5.6 3.4 7.6.1.1.2.2.4.3 1.1.6 2.1 1.5 3.2 2.5 2.6 2.2 5.5 4.7 9.3 5h.8c3.9 0 7.8-2.4 10.8-4.4.5-.4 1.1-.7 1.6-1 2.7-1.6 5.4-3.2 7.9-4.7l4.5-2.7 57.4-34c.2-.1.4-.3.4-.4 2-2.1 3-4.8 2.9-7.8-.1-2.9-1.2-5.6-3.4-7.6l-.3-.3-14.1-9.2c.1-.3.3-.5.4-.8 1.9-5.1 1.1-10.3.3-15.4-.2-1.4-.4-2.9-.6-4.3-.6-5.7-.2-12.9 2.1-16.8.7.4 1.4.6 2.2.6zM50.4 174.1c-2.4-.2-4.6-2.1-6.9-4-1.2-1-2.3-1.9-3.4-2.7-1.2-1.2-1.9-2.8-2-4.5 0-1.8.6-3.4 1.8-4.6L89.8 99c1.3-1.3 2.7-2 4.2-2 2.9 0 6.2 2.1 10.3 5 .9.6 1.8 1.2 2.7 1.9 2.1 1.3 4.1 2.7 6.2 4.1-1.3 1.8-3.3 3.6-5.9 5.5-1.1.8-2.1 1.5-3.2 2.3-2.6 1.9-5.4 3.7-7.9 6-.9.8-1 2.1-.3 3 .7.9 2.1 1 3 .3 2.4-2.1 4.9-3.8 7.6-5.7 1.1-.8 2.2-1.5 3.3-2.3 2-1.4 4.7-3.7 7-6.6l13.7 8.9c1.2 1.2 1.9 2.8 1.9 4.5 0 1.6-.5 3.2-1.6 4.5l-57.1 33.8c-1.5.9-2.9 1.8-4.5 2.7-2.6 1.5-5.4 3.1-7.9 4.7-.5.3-1.1.6-1.7 1.1-3.1 1.6-6.4 3.6-9.2 3.4zM157.5 25.8c1.1.2 2.2.7 2.9 1.4s1.2 1.9 1.2 2.9c.1 1-.1 1.9-.5 2.3l-35.7 32.2c-.6.5-1.3.9-2.2.9-.8 0-1.6-.4-2.1-1-1.2-1.2-1.1-3.2.2-4.5l33.9-33.9c.4-.4.9-.5 1.6-.5.1.1.4.1.7.2z" fill="#192E71" />
      </svg>
    ),
  },
];

const LEGACY_REALIZATIONS: LegacyGalleryItem[] = [
  {
    title: "Praha",
    alt: "Základová deska — realizace v Praze",
    image: "https://static.wixstatic.com/media/11062b_52669a954ee44f869d54e8018d13f653~mv2.jpg",
  },
  {
    title: "České Budějovice",
    alt: "Základová deska — realizace v Českých Budějovicích",
    image: "https://static.wixstatic.com/media/11062b_f9d5b18192af4498ba7ea4c24b39794c~mv2.jpg",
  },
  {
    title: "Praha — okolí",
    alt: "Základová deska — realizace v okolí Prahy",
    image: "https://static.wixstatic.com/media/11062b_3713205551c14d93815f24f31dacae2c~mv2.jpg",
  },
  {
    title: "Jižní Čechy",
    alt: "Základová deska — realizace v jižních Čechách",
    image: "https://static.wixstatic.com/media/b96c1ff1d8f44a62b3a46f48b230d29f.jpg",
  },
  {
    title: "Příprava terénu",
    alt: "Příprava terénu pro základovou desku",
    image: "https://static.wixstatic.com/media/11062b_7c13d53ba87a43c5b3ff8e73ee261a61~mv2.jpg",
  },
  {
    title: "Výkop a štěrk",
    alt: "Výkopové práce a shrnutí štěrku pod deskou",
    image: "https://static.wixstatic.com/media/1bdf38229a3e48f5aa5bf33a7c65ca92.jpg",
  },
  {
    title: "Zaměření geodetem",
    alt: "Zaměření základové desky geodetem",
    image: "https://static.wixstatic.com/media/11062b_09cea57d90d74a888d605bd9afdd6da7~mv2.jpg",
  },
  {
    title: "Vyztužení a betonáž",
    alt: "Vyztužení kari sítěmi a betonáž desky",
    image: "https://static.wixstatic.com/media/11062b_ba1ebba084cc42269d63cbad8cc9a929~mv2.jpg",
  },
];

const FORM_FIELDS: BuilderContactField[] = [
  { id: "name", name: "name", label: "Jméno a příjmení", type: "text", required: true, width: "half" },
  { id: "email", name: "email", label: "E-mail", type: "email", required: true, width: "half" },
  { id: "phone", name: "phone", label: "Telefon", type: "tel", required: true, width: "half" },
  { id: "size", name: "size", label: "Velikost základové desky (m²)", type: "text", width: "half" },
  { id: "terrain", name: "terrain", label: "Terén pozemku (rovina / kopec)", type: "text", width: "half" },
  { id: "access", name: "access", label: "Přístup na pozemek", type: "text", width: "half" },
  { id: "location", name: "location", label: "Lokalita (město a oblast)", type: "text", width: "full" },
  { id: "message", name: "message", label: "Zpráva / Upřesnění", type: "textarea", width: "full" },
];

const CATEGORY = PAGE_OVERRIDES["/zakladove-dosky"].eyebrow;

export default function ZakladoveDoskyPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-primary-dark pb-18 pt-28 text-white md:pb-24 md:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_34%),linear-gradient(120deg,rgba(255,255,255,0.06),transparent_26%)]" />
        <div className="relative mx-auto w-[92%]">
          <p className="animate-fade-up text-[11px] font-semibold uppercase tracking-[0.3em] text-white/55">
            {CATEGORY}
          </p>
          <h1 className="animate-fade-up-delay-1 mt-5 text-4xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl">
            Základová deska na klíč s garancí kvality
          </h1>
          <p className="animate-fade-up-delay-2 mt-6 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
            Kvalitní základovou deskou zajistíte stabilitu a bezpečnost vašeho domu,
            předejdete nežádoucím pohybům stavby a zvýšíte životnost vaší nemovitosti.
          </p>
          <div className="animate-fade-up-delay-3 mt-8 flex flex-wrap gap-3">
            <QuoteScrollButton className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-primary transition-colors hover:bg-white/90">
              Kontaktovat nás
            </QuoteScrollButton>
            <Link
              href={`mailto:${CONTACT_INFO.email}`}
              className="rounded-full border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white transition-colors hover:bg-white/10"
            >
              Napsat e-mail
            </Link>
          </div>
        </div>
      </section>

      <ServiceIntroSection
        eyebrow={CATEGORY}
        title="Základová deska na klíč"
        subtitle="Pevný základ pro váš dům"
        description="Kvalitně provedená základová deska je předpokladem dlouhé životnosti stavby. Zajistíme všechny potřebné kroky — od vytyčení polohy až po vylití desky."
        imageSrc="https://static.wixstatic.com/media/11062b_52669a954ee44f869d54e8018d13f653~mv2.jpg"
        imageAlt="Realizace základové desky"
        titleSize="large"
      />

      {/* ── PROBLEMS ─────────────────────────────────────────────────── */}
      <section className="bg-light py-20 md:py-28">
        <div className="mx-auto w-[92%]">
          <AnimateOnScroll className="mb-14 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Problémy způsobené nekvalitní základovou deskou
            </h2>
            <p className="mt-3 text-sm text-foreground/55">Proč investovat do kvalitního základu?</p>
          </AnimateOnScroll>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROBLEMS.map((p, index) => (
              <AnimateOnScroll key={p.label} delay={index * 100}>
                <div className="group rounded-[2rem] border border-border bg-white p-8 transition-all hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_20px_50px_rgba(15,29,74,0.06)]">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    {p.icon}
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-foreground">{p.label}</h3>
                  <p className="text-sm leading-7 text-foreground/60">{p.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid w-[92%] gap-12 lg:grid-cols-2 lg:items-center">
          <AnimateOnScroll>
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Kdo se o vás postará?
            </h2>
            <p className="mt-2 text-lg font-medium text-foreground/60">
              Jsme ESPRON — stavební společnost s lidským přístupem
            </p>
            <p className="mt-6 text-sm leading-7 text-foreground/70">
              Rozumíme, že stavební projekty jsou finančně náročné a že za každým z nich stojí lidé se svými sny a očekáváními. Není to jen o odbornosti, ale také o lidském porozumění. Naší prioritou je transparentnost a otevřená komunikace s klienty.
            </p>
            <p className="mt-4 text-sm leading-7 text-foreground/70">
              Jsme firma ze Spišské Nové Vsi působící po celém Slovensku a Česku. Poskytujeme kvalitní a odborné stavební služby pod dohledem certifikovaného stavbyvedoucího v obou zemích.
            </p>
            <Link
              href="/o-nas"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-primary/90"
            >
              Více o nás a našich hodnotách
            </Link>
          </AnimateOnScroll>
          <AnimateOnScroll delay={120} className="relative hidden aspect-[3/4] max-h-[480px] overflow-hidden rounded-3xl lg:block">
            <Image
              src="https://static.wixstatic.com/media/b0408c_635a001688e544d9951b9c8c4d5f91c2~mv2.jpg"
              alt="Mgr. Tomáš Richnavský"
              fill
              sizes="45vw"
              className="object-cover object-top"
            />
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── WHY ──────────────────────────────────────────────────────── */}
      <section className="bg-light py-20 md:py-28">
        <div className="mx-auto w-[92%]">
          <AnimateOnScroll>
            <h2 className="mb-14 text-center text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Proč na základové desky s námi?
            </h2>
          </AnimateOnScroll>
          <div className="grid gap-8 md:grid-cols-3">
            {WHY.map((item, index) => (
              <AnimateOnScroll key={item.title} delay={index * 80}>
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <svg className="h-7 w-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-6 text-foreground/65">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto w-[92%] max-w-3xl">
          <AnimateOnScroll>
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Cena za základovou desku
            </h2>
            <p className="mb-8 text-sm leading-7 text-foreground/70">
              Cena za základovou desku závisí na několika faktorech. Mezi hlavní patří
              velikost a složitost projektu, tloušťka betonu, geologické podmínky na pozemku
              a potřebné práce při přípravě a úpravě terénu.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={80}>
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center shadow-[0_8px_24px_rgba(15,29,74,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/70">
                Cena začíná od
              </p>
              <p className="mt-3 text-3xl font-extrabold text-foreground md:text-4xl">
                500 000 Kč
              </p>
              <p className="mt-3 text-sm text-foreground/60">
                Cena zahrnuje všechny potřebné činnosti pro realizaci.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── INCLUDED ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto w-[92%]">
          <AnimateOnScroll className="mb-14 text-center">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.26em] text-primary/55">
              Základové desky
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Všechny potřebné úkony v ceně
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
            {INCLUDED.map((item, index) => (
              <AnimateOnScroll key={item.label} delay={index * 80}>
                <div className="flex flex-col items-center gap-5 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border bg-white text-primary shadow-sm transition-transform hover:scale-110">
                    {item.icon}
                  </div>
                  <p className="text-sm font-bold text-foreground/80 leading-tight">{item.label}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────── */}
      <section
        id="cenova-ponuka"
        className="scroll-mt-32 bg-light py-20 md:scroll-mt-40 md:py-28"
      >
        <div className="mx-auto w-[92%] max-w-4xl">
          <AnimateOnScroll className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Jak nás kontaktovat?
            </h2>
            <p className="mx-auto max-w-2xl text-base text-foreground/60">
              Pokud máte vypracovaný projekt pro základovou desku, prosím, pošlete nám jej e-mailem na{" "}
              <a href={`mailto:${CONTACT_INFO.email}`} className="font-bold text-primary underline">
                {CONTACT_INFO.email}
              </a>.
            </p>
          </AnimateOnScroll>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <AnimateOnScroll delay={100}>
              <div className="rounded-3xl border border-border bg-white p-8 md:p-10">
                <h3 className="mb-6 text-xl font-bold text-foreground">Poptávkový formulář</h3>
                <p className="mb-8 text-sm leading-7 text-foreground/60">
                  Pokud nemáte projekt, vyplňte prosím tento formulář. Po obdržení informací vám pošleme cenovou nabídku maximálně do 5 dnů (obvykle do 1–2 dnů).
                </p>
                <BuilderContactForm
                  fields={FORM_FIELDS}
                  subject="Poptávka: Základová deska (CZ)"
                  buttonText="Odeslat poptávku"
                />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200} className="space-y-8">
              <div>
                <h3 className="mb-4 text-xl font-bold text-foreground">Další kroky</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">1</div>
                    <div>
                      <h4 className="font-bold text-foreground">Cenová nabídka</h4>
                      <p className="mt-1 text-sm text-foreground/60">Obsahuje odhadované náklady na výkopové práce a zhotovení základové desky včetně materiálu a práce.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">2</div>
                    <div>
                      <h4 className="font-bold text-foreground">Termín realizace</h4>
                      <p className="mt-1 text-sm text-foreground/60">Po akceptování cenové nabídky si stanovíme závazný termín realizace.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">3</div>
                    <div>
                      <h4 className="font-bold text-foreground">Záloha za materiál</h4>
                      <p className="mt-1 text-sm text-foreground/60">Před nástupem našich pracovníků na stavbu se zaplatí záloha za materiál.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-primary/5 p-8">
                <h4 className="mb-4 font-bold text-foreground">Přímý kontakt</h4>
                <div className="grid gap-4 sm:grid-cols-2">
                  <a href={`tel:+420720045365`} className="flex flex-col rounded-2xl border border-border bg-white p-5 transition-colors hover:border-primary/30">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary/50">Telefon (CZ)</span>
                    <span className="mt-1 font-bold text-foreground">+420 720 045 365</span>
                  </a>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="flex flex-col rounded-2xl border border-border bg-white p-5 transition-colors hover:border-primary/30">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary/50">Email</span>
                    <span className="mt-1 font-bold text-foreground">{CONTACT_INFO.email}</span>
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <ServiceRealizationGallery
        serviceSlug="zakladove-dosky"
        site="cz"
        title="Realizace základových desek"
        description="Vybrané realizace v Praze a jižních Čechách."
        legacyItems={LEGACY_REALIZATIONS}
        columns={4}
      />
      <FloatingQuoteButton />
    </>
  );
}
