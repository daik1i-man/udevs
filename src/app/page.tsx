'use client'

import { ChangeEvent, useState } from "react";
import Header from "@/components/header/header";
import { Button } from "@nextui-org/react";
import { Textarea } from "@/components/ui/textarea"
import { Cursor } from 'react-simple-typewriter'
import { typeWriter } from "../functions/typeWriter";
import { CountUpFunction } from "../functions/countUp";
import developMobileApps from '../images/develop-mobile-apps.png'
import Delever from '../images/delever.png'
import SMS from '../images/sms.png'
import Goodzone from '../images/goodzone.png'
import Iman from '../images/iman.png'
import { toolComponentDatas } from "../data/toolComponentDatas";
import ERP from '../images/ERP.png'
import UI from '../images/UI.png'
import Image from "next/image";
import { FirstSlider, SecondSlider } from "@/functions/slider";
import { FaTelegramPlane, FaInstagram, FaYoutube, FaFacebookSquare, FaTwitter } from "react-icons/fa";
import {
  servicesDatas,
  ERPSystemDatas,
  UIDesignDatas,
  TechnologiesDatas,
  optimizationSystemDatas,
  consultingDatas,
  toolTypeDatas,
  firstSliderDatas,
  secondSliderDatas,
  deleverDatas,
  smsDatas,
  hrefs
} from '../data/datas';
import Link from "next/link";
import Footer from "@/components/footer/footer";


export default function Home() {
  const text = typeWriter()
  const counter = CountUpFunction()
  const [selectedId, setSelectedId] = useState<string | number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const clickHandler = (id: number, title: string) => {
    setSelectedId(selectedId === id ? null : id)
    setSelectedCategory(selectedCategory === title ? null : title)
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    // setSelectedId(e.target.value)
  }


  return (
    <div>
      <Header {...hrefs} />
      <div className="max-w-[1150px] py-44 mx-auto flex gap-8 items-center justify-between">
        <div className="w-1/2">
          <img className="rounded-none my-4" width={267} height={89} src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTY4IiBoZWlnaHQ9IjU2IiB2aWV3Qm94PSIwIDAgMTY4IDU2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2MS40MzIgNDIuNjE5MkMxNjUuNTg0IDQxLjIwMzQgMTY4IDM4LjE4OCAxNjggMzMuNzU2N0MxNjggMzEuNTczNCAxNjcuMjQzIDI5LjU3NzEgMTY1Ljc5IDI3Ljg5MzZDMTYzLjY0MiAyNS4zOTc0IDE2MC4wNDEgMjMuODM2NCAxNTUuMjQzIDIzLjMzNjZDMTUzLjYwNCAyMy4xMzM0IDE0OS40OTQgMjIuNjEwOSAxNDkuNDk0IDIwLjM0MDVDMTQ5LjQ5NCAxNy44MjQ5IDE1Ny42NDkgMTcuMTYwNiAxNTkuNzkgMjAuMDMwOUMxNjAuMzQ4IDIwLjc4ODggMTYwLjM1OCAyMS43MDE1IDE2MC4zNTggMjIuNTg4M0gxNjhDMTY4IDIwLjE5MjEgMTY3LjU4OSAxNy45NzAxIDE2Ni4yMzEgMTUuOTEyNUMxNjQuNjUxIDEzLjQ3NzUgMTYxLjM2NyAxMC42MDcyIDE1NC43OTkgMTAuNjA3MkMxNDkuODExIDEwLjYwNzIgMTQ2LjE0OCAxMS45MTY2IDE0My44NzMgMTQuNDc3M0MxNDIuNzk5IDE1LjY2MDkgMTQxLjYwMSAxNy43MjE3IDE0MS42MDEgMjAuNzE0NkMxNDEuNjAxIDIyLjk2MjUgMTQyLjM1OCAyNC44OTc1IDE0My44NzMgMjYuNTgxQzE0NC45NDcgMjcuNzAzMyAxNDYuMzM4IDI4LjY0MTggMTQ4LjA0MiAyOS4zMjU1QzE0OS43NDYgMzAuMDc2OSAxNTEuODk0IDMwLjU3MzYgMTU0LjM1OCAzMC44MjUyQzE1Ni41MDYgMzEuMDczNSAxNjAuMTY5IDMxLjc2MDQgMTYwLjE2OSAzMy43NTY3QzE2MC4xNjkgMzQuMTMwOCAxNjAuMDQxIDM0Ljc1NjUgMTU5LjAyOSAzNS4yNTMyQzE1Ni45NjYgMzYuMzQzMiAxNTEuMzI2IDM2LjQxNzQgMTQ5LjkzNSAzNC4xMzA4QzE0OS4zNzMgMzMuMjQzOSAxNDkuMjQzIDMyLjEwNTUgMTQ5LjI0MyAzMS4wNzM1TDE0MS42MDEgMzAuOTUwOUMxNDEuNjAxIDM2LjM0IDE0My41NSA0MC42MjI5IDE0OC45MjYgNDIuNTU0N0MxNTIuNDcxIDQzLjk4MzQgMTU3Ljg0MSA0My43OTk2IDE2MS40MzIgNDIuNjE5MlpNODQuNzI2MiAxMS45MzZDNzYuMDM5NyAxNC4xNDg0IDcwLjc3NDMgMjIuOTE0MSA3My4wMTY5IDMxLjQ5MjdDNzUuMjU2MyA0MC4wNzE0IDg0LjEyNTUgNDUuMjczNCA5Mi44MTIgNDMuMDYxQzk5LjY1NzMgNDEuMzAzNCAxMDIuNDI5IDM3LjU5NDYgMTA0LjQ2MiAzMS43NTA3TDk1Ljg3MDcgMzEuMjQxMkM5NC42NDY2IDMzLjI1NjkgOTMuMDc2NCAzNC41NjMgOTAuNzU1NSAzNS4yMDhDODcuNjU0MyAzNS45NzU2IDg0LjAwNDggMzQuNzg1NSA4Mi4yMjI0IDMyLjEwODdMMTA1LjI3MiAyNi40NjgxQzEwNC4yNDcgMTYuNzE4NyA5NC40ODY2IDkuNDQ2MjEgODQuNzI2MiAxMS45MzZaTTkyLjg2NDIgMjAuNjYzQzkzLjc5NzggMjEuMjY5MyA5NC42MjM3IDIxLjk2NTkgOTUuMjM3NCAyMi44NDMxTDgwLjg0MTYgMjYuNDAzNkM4MC45NjI0IDI1LjM0NTggODEuMzYwNiAyNC4zNDYgODEuODUwMyAyMy40NTI3Qzg0LjEwNiAxOS43MzQyIDg5LjA3NDMgMTguNTI0OCA5Mi44NjQyIDIwLjY2M1pNMTMwLjQ4MyAxMS40MTk5TDEyMi4yNzMgMjkuMzlMMTEzLjQzIDExLjQxOTlIMTAzLjEzN0wxMTguOTI3IDQzLjU1NDVIMTI1LjYyMkwxNDAuNzE2IDExLjQxOTlIMTMwLjQ4M1pNNjkuOTE1OCA0My41NTQ1TDY5Ljg1MDUgMEg2MS4wMTA3VjE1LjA5OTdDNTguMTY3NCAxMi43OTA2IDU0LjU2NjggMTEuNDE5OSA1MC41ODc2IDExLjQxOTlDNDEuNjIwNCAxMS40ODEyIDM0LjM1NzIgMTguNzE4MyAzNC40MTkyIDI3LjU4MDdDMzQuNDg0NSAzNi40NCA0MS44MDk3IDQzLjYxNTggNTAuNzc2OSA0My41NTQ1QzU0LjY5NDEgNDMuNTU0NSA1OC4yOTQ3IDQyLjExOTMgNjEuMDcyNyAzOS44NzE1VjQzLjU1NDVINjkuOTE1OFpNNTYuMzk4MSAzMy4wNjk4QzU0Ljg4MzUgMzQuNTY5NSA1Mi44NjI4IDM1LjM3ODkgNTAuNzE0OSAzNS40NDM0QzQ4LjU2NjkgMzUuNDQzNCA0Ni41NDYzIDM0LjYzMDcgNDUuMDMxNiAzMy4xMzQzQzQzLjUxMzcgMzEuNjM0NiA0Mi42OTQ0IDI5LjYzODMgNDIuNjk0NCAyNy41MTYyQzQyLjYzMjMgMjUuMzk3NCA0My41MTM3IDIzLjQ2MjMgNDQuOTY2MyAyMS45MDE0QzQ2LjQ4NDMgMjAuNDA1IDQ4LjUwNDkgMTkuNTkyMyA1MC42NTI5IDE5LjU5MjNDNTIuODAwOCAxOS41OTIzIDU0LjgyMTQgMjAuNDA1IDU2LjMzNjEgMjEuODQwMUM1Ny44NTA4IDIzLjMzNjYgNTguNjczNCAyNS4zMzI5IDU4LjczNTQgMjcuNDU1QzU4LjczNTQgMjkuNTc3MSA1Ny45MTYgMzEuNTczNCA1Ni4zOTgxIDMzLjA2OThaIiBmaWxsPSIjMUQxQTJGIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMS4zNjQ1IDU2VjQ3Ljg3MjlIMjkuODMyOVY1NkgxLjM2NDVaTTAgMjguMTQxOUMwIDQ4LjY3OTEgMzEuMjAwNyA0OC42NzkxIDMxLjIwMDcgMjguMTQxOUMzMS4yMDA3IDIzLjAyMzcgMzEuMjAwNyAxMS4yOTQyIDMxLjIwMDcgMTEuMjk0MkgyMi45ODc2QzIyLjk4NzYgMTYuNzAyNiAyMi45ODc2IDIyLjExMTEgMjIuOTg3NiAyNy41MTYzQzIyLjk4NzYgMzcuOTg0OCA4LjIwOTg1IDM3Ljk4NDggOC4yMDk4NSAyNy41MTYzQzguMjA5ODUgMjIuMTExMSA4LjIwOTg1IDE2LjcwMjYgOC4yMDk4NSAxMS4yOTQySDBDMCAxMS4yOTQyIDAgMjMuMDIzNyAwIDI4LjE0MTlaIiBmaWxsPSIjMUI1QkY3Ii8+Cjwvc3ZnPgo=' alt="udevs logo" />
          <h1 className="text-[40px] font-bold my-7 leading-10 text-[#464359]">IT-Аутсорсинг Компания</h1>
          <div className="my-6 text-2xl">
            <span className="text-[#1b5bf7] text-[40px] leading-10 font-[700]">{text}</span><Cursor cursorColor="#1b5bf7" />
          </div>
          <Button className="bg-[#1b5bf7] my-8 text-gray-50 leading-10 rounded-[8px] scale-100 hover:scale-105 font-medium text-[20px] px-20 py-[30px]">Связаться</Button>
        </div>
        <div className="w-1/2">
          <img width={547} height={414} src='https://udevs.io/static/hero-304cdf863047286a47c1e063154824d8.svg' alt="services img" />
        </div>
      </div>

      <div id="services" className="w-full h-full">
        <div className="max-w-[1150px] mx-auto">
          <h1 className="text-5xl font-bold text-[#1b5bf7]">Наши услуги</h1>

          <div className="grid grid-cols-3 mt-20 gap-4">
            {servicesDatas.map((data) => (
              <div key={data.id} className="rounded-[8px] p-2 bg-[#f4f7ff] w-[359px] h-[209px]">
                <div>
                  <img className="w-[35px] h-[35px] m-5" src={data.url} alt={data.title} />
                </div>
                <h2 className="text-xl font-medium mx-5 my-11">{data.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="comand" className="w-full py-28 my-20 h-full justify-center bg-[#f4f7ff]">
        <div className="max-w-[1150px] mx-auto">
          <h1 className="text-[64px] font-semibold text-[#1b4bf7]">Выделенная команда</h1>
          <div className="flex items-center justify-between">
            <div className="w-[45%]">
              <p className="text-[22px] leading-[1.9] tracking-wide font-medium text-[#464359]">Для каждого проекта мы формируем команду, в которую входят проект менеджер, бизнес-аналитик, UI/UX дизайнер, DevOps, QA-инженер, бэкенд и фронтенд разработчики</p>
              <div className="flex items-center">
                {counter}
                <span className="text-[100px] font-semibold text-[#1b4bf7]">+</span>
              </div>
              <p className="text-[35px] font-bold text-[#464359]">Сотрудников</p>
            </div>
            <div>
              <img className="w-[500px] h-[419px] " src='https://udevs.io/static/teamIcon-7e3107c853b8ec1d129a87af0e68945a.svg' alt="command section img" />
            </div>
          </div>
        </div>
      </div>

      <div id="mobile-dev" className="w-full my-8 h-full justify-center relative">
        <div className="max-w-[1150px] mx-auto">
          <h1 className="text-[64px] my-16 font-semibold text-[#1b4bf7]">Мобильная разработка</h1>
          <div className="flex items-center justify-between">
            <div className="w-1/2">
              <p className="text-[22px] leading-[1.9] tracking-wide font-medium text-[#464359]">В сотрудничестве со стартапами мы научились создавать творческий и функциональный пользовательский интерфейс для мобильных приложений.</p>
              <div className="flex items-center gap-4 my-12 max-w-full mx-auto">
                <div className="w-36 h-32 rounded-[8px] px-4 py-4 bg-[#f4f7ff]">
                  <img className="w-12 h-12" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBmaWxsPSIjQzRDNEM0IiBmaWxsLW9wYWNpdHk9IjAuMDEiLz4KPHBhdGggZD0iTTIxLjAwMDMgMTYuMzMzNEMxNC4wMDAzIDE2LjMzMzQgMTEuNjY3IDIzLjMzMzQgMTEuNjY3IDI5LjE2NjdDMTEuNjY3IDM2LjE2NjcgMTYuMzMzNyA0Ni42NjY3IDIxLjAwMDMgNDYuNjY2N0MyMy41MzkgNDYuNTU5NCAyNC45MTggNDUuNSAyOC4wMDAzIDQ1LjVDMzEuMDYxNyA0NS41IDMxLjUwMDMgNDYuNjY2NyAzNS4wMDAzIDQ2LjY2NjdDMzguNTAwMyA0Ni42NjY3IDQ0LjMzMzcgMzkuNjY2NyA0NC4zMzM3IDM1QzQ0LjI2ODMgMzQuOTc2NyAzOC41NjU3IDM0LjA1OTcgMzguNTAwMyAyOEMzOC40NTYgMjIuOTM2NyA0NC4xMzc3IDIxLjEwNzQgNDQuMzMzNyAyMUM0MS45NDY3IDE3LjUxODcgMzcuNDQ4IDE2LjQxOTcgMzYuMTY3IDE2LjMzMzRDMzIuODIzMyAxNi4wNzQ0IDI5LjU2MzcgMTguNjY2NyAyOC4wMDAzIDE4LjY2NjdDMjYuNDEzNyAxOC42NjY3IDIzLjU2NyAxNi4zMzM0IDIxLjAwMDMgMTYuMzMzNFoiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMjggOS4zMzM0MUMyOS4yMzc3IDkuMzMzNDEgMzAuNDI0NyA4Ljg0MTc1IDMxLjI5OTggNy45NjY1OEMzMi4xNzUgNy4wOTE0MSAzMi42NjY3IDUuOTA0NDMgMzIuNjY2NyA0LjY2Njc1QzMxLjQyOSA0LjY2Njc1IDMwLjI0MiA1LjE1ODQxIDI5LjM2NjggNi4wMzM1OEMyOC40OTE3IDYuOTA4NzUgMjggOC4wOTU3NCAyOCA5LjMzMzQxIiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==" alt="apple" />
                  <h3 className="text-xl mt-4 font-semibold">iOS</h3>
                </div>
                <div className="w-36 h-32 rounded-[8px] px-4 py-4 bg-[#f4f7ff]">
                  <img className="w-12 h-12" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBmaWxsPSIjQzRDNEM0IiBmaWxsLW9wYWNpdHk9IjAuMDEiLz4KPHBhdGggZD0iTTkuMzMzMDEgMjMuMzMzM1YzNy4zMzMzIiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTQ2LjY2NyAyMy4zMzMzVjM3LjMzMzMiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTYuMzMzIDIwLjk5OTlIMzkuNjY2M1YzOS42NjY2QzM5LjY2NjMgNDAuMjg1NCAzOS40MjA1IDQwLjg3ODkgMzguOTgyOSA0MS4zMTY1QzM4LjU0NTMgNDEuNzU0MSAzNy45NTE4IDQxLjk5OTkgMzcuMzMzIDQxLjk5OTlIMTguNjY2M0MxOC4wNDc1IDQxLjk5OTkgMTcuNDU0IDQxLjc1NDEgMTcuMDE2NCA0MS4zMTY1QzE2LjU3ODggNDAuODc4OSAxNi4zMzMgNDAuMjg1NCAxNi4zMzMgMzkuNjY2NlYyMC45OTk5Wk0xNi4zMzMgMjAuOTk5OUMxNi4zMzMgMTcuOTA1NyAxNy41NjIyIDE0LjkzODMgMTkuNzUwMSAxMi43NTAzQzIxLjkzOCAxMC41NjI0IDI0LjkwNTUgOS4zMzMyNSAyNy45OTk3IDkuMzMzMjVDMzEuMDkzOSA5LjMzMzI1IDM0LjA2MTMgMTAuNTYyNCAzNi4yNDkzIDEyLjc1MDNDMzguNDM3MiAxNC45MzgzIDM5LjY2NjMgMTcuOTA1NyAzOS42NjYzIDIwLjk5OTkiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTguNjY3IDdMMjEuMDAwMyAxMS42NjY3IiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTM3LjMzMzMgN0wzNSAxMS42NjY3IiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTIxIDQyVjQ5IiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTM1IDQyVjQ5IiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==" alt="android" />
                  <h3 className="text-xl mt-4 font-semibold">Android</h3>
                </div>
                <div className="w-44 h-32 rounded-[8px] px-4 py-4 bg-[#f4f7ff]">
                  <img className="w-12 h-12" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTkiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1OSA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjU5IiBoZWlnaHQ9IjU2IiBmaWxsPSIjQzRDNEM0IiBmaWxsLW9wYWNpdHk9IjAuMDEiLz4KPHBhdGggb3BhY2l0eT0iMC4zIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQzLjA2MTMgNy43MjcyNEgyMy40MTc4VjQwLjM0OTNINDMuMDYxM1Y3LjcyNzI0Wk0yMy40MTc4IDVDMjEuODA3OSA1IDIwLjUwMjkgNi4yMjEwNiAyMC41MDI5IDcuNzI3MjRWNDAuMzQ5M0MyMC41MDI5IDQxLjg1NTUgMjEuODA3OSA0My4wNzY2IDIzLjQxNzggNDMuMDc2Nkg0My4wNjEzQzQ0LjY3MTEgNDMuMDc2NiA0NS45NzYxIDQxLjg1NTUgNDUuOTc2MSA0MC4zNDkzVjcuNzI3MjRDNDUuOTc2MSA2LjIyMTA2IDQ0LjY3MTEgNSA0My4wNjEzIDVIMjMuNDE3OFoiIGZpbGw9IiMxQjVCRjciLz4KPHBhdGggZD0iTTYuMzIwMzEgMTcuMzc4MUM2LjMyMDMxIDE0LjM2NTYgOC45MzAzNCAxMS45MjM2IDEyLjE1IDExLjkyMzZIMjYuMzg3OEMyOS42MDc0IDExLjkyMzYgMzIuMjE3NSAxNC4zNjU2IDMyLjIxNzUgMTcuMzc4MVY0NC41NDU3QzMyLjIxNzUgNDcuNTU4IDI5LjYwNzQgNTAuMDAwMSAyNi4zODc4IDUwLjAwMDFIMTIuMTVDOC45MzAzNCA1MC4wMDAxIDYuMzIwMzEgNDcuNTU4IDYuMzIwMzEgNDQuNTQ1N1YxNy4zNzgxWiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4wMSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI2LjM4NzggMTQuNjUwOEgxMi4xNUMxMC41NDAyIDE0LjY1MDggOS4yMzUxNCAxNS44NzE5IDkuMjM1MTQgMTcuMzc4MVY0NC41NDU3QzkuMjM1MTQgNDYuMDUxOCAxMC41NDAyIDQ3LjI3MjkgMTIuMTUgNDcuMjcyOUgyNi4zODc4QzI3Ljk5NzYgNDcuMjcyOSAyOS4zMDI3IDQ2LjA1MTggMjkuMzAyNyA0NC41NDU3VjE3LjM3ODFDMjkuMzAyNyAxNS44NzE5IDI3Ljk5NzYgMTQuNjUwOCAyNi4zODc4IDE0LjY1MDhaTTEyLjE1IDExLjkyMzZDOC45MzAzNCAxMS45MjM2IDYuMzIwMzEgMTQuMzY1NiA2LjMyMDMxIDE3LjM3ODFWNDQuNTQ1N0M2LjMyMDMxIDQ3LjU1OCA4LjkzMDM0IDUwLjAwMDEgMTIuMTUgNTAuMDAwMUgyNi4zODc4QzI5LjYwNzQgNTAuMDAwMSAzMi4yMTc1IDQ3LjU1OCAzMi4yMTc1IDQ0LjU0NTdWMTcuMzc4MUMzMi4yMTc1IDE0LjM2NTYgMjkuNjA3NCAxMS45MjM2IDI2LjM4NzggMTEuOTIzNkgxMi4xNVoiIGZpbGw9IiMxQjVCRjciLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNC4yMDIxIDQ1LjM4NDdIMTQuOTUzMVY0Mi42NTc1SDI0LjIwMjFWNDUuMzg0N1oiIGZpbGw9IiMxQjVCRjciLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNi41NDA0IDI3LjEzNDJDMjUuMjcwMSAyOC44ODc4IDIzLjUwMTYgMzEuMzI4NyAxOS45OTkgMzEuMzI4N1YyOC42MDE1QzIxLjg0MDEgMjguNjAxNSAyMi43OTU1IDI3LjQzOCAyNC4yNDAyIDI1LjQ0ODhDMjQuMjc2NyAyNS4zOTg1IDI0LjMxMzYgMjUuMzQ3NyAyNC4zNTA5IDI1LjI5NjFDMjUuNjIxMiAyMy41NDI2IDI3LjM4OTYgMjEuMTAxNiAzMC44OTIzIDIxLjEwMTZDMzQuMzk0OSAyMS4xMDE2IDM2LjE2MzMgMjMuNTQyNiAzNy40MzM2IDI1LjI5NjFDMzcuNDcxIDI1LjM0NzcgMzcuNTA3OCAyNS4zOTg1IDM3LjU0NDMgMjUuNDQ4OEMzOC45ODkgMjcuNDM4IDM5Ljk0NDQgMjguNjAxNSA0MS43ODU1IDI4LjYwMTVDNDMuNjI2NiAyOC42MDE1IDQ0LjU4MjEgMjcuNDM4IDQ2LjAyNjYgMjUuNDQ4OEM0Ni4wNjMyIDI1LjM5ODUgNDYuMSAyNS4zNDc3IDQ2LjEzNzMgMjUuMjk2MUM0Ny40MDc3IDIzLjU0MjYgNDkuMTc2MSAyMS4xMDE2IDUyLjY3ODcgMjEuMTAxNlYyMy44Mjg4QzUwLjgzNzYgMjMuODI4OCA0OS44ODIyIDI0Ljk5MjMgNDguNDM3NiAyNi45ODE2QzQ4LjQwMTEgMjcuMDMxOCA0OC4zNjQzIDI3LjA4MjcgNDguMzI3IDI3LjEzNDJDNDcuMDU2NSAyOC44ODc4IDQ1LjI4ODIgMzEuMzI4NyA0MS43ODU1IDMxLjMyODdDMzguMjgyOSAzMS4zMjg3IDM2LjUxNDUgMjguODg3OCAzNS4yNDQxIDI3LjEzNDJDMzUuMjA2OCAyNy4wODI3IDM1LjE2OTkgMjcuMDMxOCAzNS4xMzM0IDI2Ljk4MTZDMzMuNjg4OCAyNC45OTIzIDMyLjczMzQgMjMuODI4OCAzMC44OTIzIDIzLjgyODhDMjkuMDUxMSAyMy44Mjg4IDI4LjA5NTcgMjQuOTkyMyAyNi42NTExIDI2Ljk4MTZDMjYuNjE0NiAyNy4wMzE4IDI2LjU3NzcgMjcuMDgyNyAyNi41NDA0IDI3LjEzNDJaIiBmaWxsPSIjMUI1QkY3Ii8+Cjwvc3ZnPgo=" alt="Crossplatform" />
                  <h3 className="text-xl mt-4 font-semibold">Crossplatform</h3>
                </div>
              </div>

              <h1 className="text-[34px] my-4 font-semibold text-[#464359]">Технологии</h1>
              <div className="flex items-center gap-16">
                <div>
                  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBmaWxsPSIjQzRDNEM0IiBmaWxsLW9wYWNpdHk9IjAuMDEiLz4KPHBhdGggZD0iTTQ3LjI3ODMgMTguMzE5M0M0Ny4yNzggMTcuNDkwNCA0Ny4xOTQ2IDE2LjY2MzcgNDcuMDI5MyAxNS44NTE2QzQ2Ljg2MzkgMTUuMDIwMSA0Ni41ODI4IDE0LjIxNiA0Ni4xOTQxIDEzLjQ2MjdDNDUuNzg4IDEyLjczMyA0NS4yODMyIDEyLjA2MjcgNDQuNjk0IDExLjQ3MDhDNDQuMDg2MyAxMC44NzYzIDQzLjM4MDUgMTAuMzkxMSA0Mi42MDc2IDEwLjAzNjlDNDEuODQ0OSA5LjY1MjI5IDQxLjAyOTEgOS4zODM1NSA0MC4xODcyIDkuMjM5NTJDMzkuMzUyIDkuMDc4NzkgMzguNDM0OSA5LjA3ODc5IDM3LjU5OTcgOUgxNi45OTc4QzE2LjM1NTEgOS4wMTA0NiAxNS43MTM5IDkuMDY0MTYgMTUuMDc4NSA5LjE2MDczQzE0LjQ0NzkgOS4yMzQ5NyAxMy44MzA2IDkuMzk2MTggMTMuMjQ0MiA5LjYzOTc3QzEzLjA3NzIgOS43MTg1NiAxMi44MjgyIDkuODAwNSAxMi42NjEyIDkuODc5MjlDMTIuMTA2NCAxMC4xNzY3IDExLjU3OTEgMTAuNTIyNiAxMS4wODU0IDEwLjkxM0MxMC45MTg0IDExLjA3MzcgMTAuNzUxMyAxMS4xNTI1IDEwLjU4NDMgMTEuMzEwMUM5Ljk3MDA4IDExLjg3OTggOS40NjIxMSAxMi41NTQzIDkuMDg0MTUgMTMuMzAxOUM4LjY3MTM5IDE0LjA0NDcgOC4zODg5MiAxNC44NTI3IDguMjQ4OTggMTUuNjkwOEM4LjEyNDc4IDE2LjUwODcgOC4wNDE2OCAxNy4zMzIzIDggMTguMTU4NVYzNy4xOTFDOC4wMDAyNiAzOC4wMTk4IDguMDgzNjcgMzguODQ2NSA4LjI0ODk4IDM5LjY1ODdDOC40MTQzNiA0MC40OTAxIDguNjk1NDkgNDEuMjk0MiA5LjA4NDE1IDQyLjA0NzZDOS40OTAzMiA0Mi43NzczIDkuOTk1MTIgNDMuNDQ3NSAxMC41ODQzIDQ0LjAzOTRDMTEuMTkyIDQ0LjYzNCAxMS44OTc4IDQ1LjExOTEgMTIuNjcwNyA0NS40NzM0QzEzLjQzMzQgNDUuODU4IDE0LjI0OTEgNDYuMTI2NyAxNS4wOTExIDQ2LjI3MDdDMTUuOTI2MyA0Ni40MzE0IDE2Ljg0MzQgNDYuNDMxNCAxNy42Nzg1IDQ2LjUxMDJIMzcuNjAyOUMzOC40NzA5IDQ2LjUwOTYgMzkuMzM3IDQ2LjQyOTQgNDAuMTkwNCA0Ni4yNzA3QzQxLjAzMjMgNDYuMTI2NyA0MS44NDgxIDQ1Ljg1OCA0Mi42MTA4IDQ1LjQ3MzRDNDMuMzY3MSA0NS4wOTA2IDQ0LjA2ODggNDQuNjA4NCA0NC42OTcxIDQ0LjAzOTRDNDUuMzExNCA0My40Njk3IDQ1LjgxOTMgNDIuNzk1MiA0Ni4xOTczIDQyLjA0NzZDNDYuNjEgNDEuMzA0OCA0Ni44OTI1IDQwLjQ5NjggNDcuMDMyNSAzOS42NTg3QzQ3LjE1NjcgMzguODQwOCA0Ny4yMzk4IDM4LjAxNzIgNDcuMjgxNCAzNy4xOTFWMTguMzE5M0g0Ny4yNzgzWiIgZmlsbD0iI0YwNTEzOCIvPgo8cGF0aCBkPSJNMzQuMjUyOSAzNy45OTc5QzMwLjc1MTUgMzkuOTI5OCAyNS45MzkgNDAuMTI4NCAyMS4wOTUgMzguMTQ2QzE3LjMxODIgMzYuNjEzNiAxNC4wODkgMzMuOTgxNyAxMS44MjYyIDMwLjU5MTZDMTIuODc3OCAzMS4zOTY2IDE0LjAyNjcgMzIuMDY1OCAxNS4yNDU2IDMyLjU4MzVDMjAuMjQ3MiAzNC44MjExIDI1LjI0NTYgMzQuNjY2NyAyOC43NjYgMzIuNTgzNUMyMy43NTQ5IDI4LjkwODcgMTkuNTAwMyAyNC4xMzA5IDE2LjMyOTggMjAuMjI5MkMxNS43MDQxIDE5LjU2OTggMTUuMTQ1NyAxOC44NDk4IDE0LjY2MjYgMTguMDc5OEMxOC40OTQ5IDIxLjQyMzcgMjQuNTkwMSAyNS42NDM2IDI2Ljc1ODQgMjYuODM4MUMyMy42NjI1IDIzLjY2NiAyMC44MTc1IDIwLjI1ODMgMTguMjQ5MSAxNi42NDU5QzIyLjUxODYgMjAuNzk0OSAyNy4yMTY3IDI0LjQ3ODcgMzIuMjY0MiAyNy42MzU1QzMyLjQ4OCAyNy43NTUyIDMyLjY2MTMgMjcuODU2MSAzMi44IDI3Ljk1MDZDMzIuOTQ4IDI3LjU4OTQgMzMuMDc1MyAyNy4yMjAxIDMzLjE4MTQgMjYuODQ0NEMzNC4zNTA2IDIyLjc4MiAzMy4wMTQzIDE4LjE2NDkgMzAuMDk1OSAxNC4zNDJDMzYuODUzIDE4LjI0MDYgNDAuODcxMiAyNS41NjQ5IDM5LjE4ODMgMzEuNjk3OUMzOS4xNDQyIDMxLjg2NDkgMzkuMDk2OSAzMi4wMTMgMzkuMDQ2NSAzMi4xODYzTDM5LjEwNjMgMzIuMjU1N0M0Mi40NDM5IDM2LjIzNjEgNDEuNTI2OCA0MC40NDk4IDQxLjEwNzYgMzkuNjYxOUMzOS4yOTU0IDM2LjI2NDUgMzUuOTQ1MyAzNy4zMTQgMzQuMjUyOSAzNy45OTc5WiIgZmlsbD0iI0ZFRkVGRSIvPgo8L3N2Zz4K" alt="Swift" />
                  <h2 className="text-xl font-semibold">Swift</h2>
                </div>
                <div>
                  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBmaWxsPSIjQzRDNEM0IiBmaWxsLW9wYWNpdHk9IjAuMDEiLz4KPHBhdGggZD0iTTMwLjA3NDYgMTBMMTIgMjkuMDA3N1Y0NkwzMC4wNDg3IDI3LjkxOTZMNDggMTBIMzAuMDc0NloiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KPHBhdGggZD0iTTEyIDQ1Ljk5OTdMMzAuMDQ4NyAyNy45MTk3TDQ4IDQ1Ljk5OTdIMTJaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXIpIi8+CjxwYXRoIGQ9Ik0xMiAxMEgzMC4wNzQ2TDEyIDI5LjAwNzdWMTBaIiBmaWxsPSJ1cmwoI3BhaW50Ml9saW5lYXIpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSI1LjkzOTA0IiB5MT0iNDMuMDk4NCIgeDI9IjM5LjQzODkiIHkyPSI5LjU5ODI0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIG9mZnNldD0iMC4xMDgiIHN0b3AtY29sb3I9IiNDNzU3QkMiLz4KPHN0b3Agb2Zmc2V0PSIwLjE3MyIgc3RvcC1jb2xvcj0iI0NENUNBOSIvPgo8c3RvcCBvZmZzZXQ9IjAuNDkyIiBzdG9wLWNvbG9yPSIjRTg3NDRGIi8+CjxzdG9wIG9mZnNldD0iMC43MTYiIHN0b3AtY29sb3I9IiNGODgzMTYiLz4KPHN0b3Agb2Zmc2V0PSIwLjgyMyIgc3RvcC1jb2xvcj0iI0ZGODkwMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXIiIHgxPSIyMy40ODkyIiB5MT0iNTIuNDk0NyIgeDI9IjM5LjgxNzYiIHkyPSIzNi4xNjYzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIG9mZnNldD0iMC4yOTYiIHN0b3AtY29sb3I9IiMwMEFGRkYiLz4KPHN0b3Agb2Zmc2V0PSIwLjY5NCIgc3RvcC1jb2xvcj0iIzUyODJGRiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM5NDVERkYiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDJfbGluZWFyIiB4MT0iLTE1LjEzIiB5MT0iNjY1Ljc4NSIgeDI9IjczOS45MDgiIHkyPSItNTIuMjA0NyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBvZmZzZXQ9IjAuMjk2IiBzdG9wLWNvbG9yPSIjMDBBRkZGIi8+CjxzdG9wIG9mZnNldD0iMC42OTQiIHN0b3AtY29sb3I9IiM1MjgyRkYiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOTQ1REZGIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==" alt="Swift" />
                  <h2 className="text-xl font-semibold">Kotlin</h2>
                </div>
                <div>
                  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMxLjg2MDUgMTBMMTQgMjcuOTA1MkwxOS41MjgyIDMzLjQ0NzJMNDIuOTE3IDEwSDMxLjg2MDVaIiBmaWxsPSIjNDdDNUZCIi8+CjxwYXRoIGQ9Ik0zMS43MzU5IDI2LjUxMTJMMjIuMTcyOSAzNi4wOTgyTDI3LjcyMTggNDEuNzQ0MUwzMy4yMzk4IDM2LjIxMjRMNDIuOTE2OCAyNi41MTEySDMxLjczNTlaIiBmaWxsPSIjNDdDNUZCIi8+CjxwYXRoIGQ9Ik0yNy43MjE3IDQxLjc0MzdMMzEuOTIyMyA0NS45NTQ4SDQyLjkxNjZMMzMuMjM5NSAzNi4yMTE5TDI3LjcyMTcgNDEuNzQzN1oiIGZpbGw9IiMwMDU2OUUiLz4KPHBhdGggZD0iTTIyLjExMDQgMzYuMTYwNUwyNy42Mzg3IDMwLjYxODRMMzMuMjM5NCAzNi4yMTI0TDI3LjcyMTUgNDEuNzQ0MkwyMi4xMTA0IDM2LjE2MDVaIiBmaWxsPSIjMDBCNUY4Ii8+CjxwYXRoIGQ9Ik0yNy43MjE3IDQxLjc0NEwzMi4zMTY0IDQwLjIxNTVMMzIuNzcyOCAzNi42ODAyTDI3LjcyMTcgNDEuNzQ0WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIgZmlsbC1vcGFjaXR5PSIwLjgiLz4KPHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBmaWxsPSIjQzRDNEM0IiBmaWxsLW9wYWNpdHk9IjAuMDEiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjI3LjkyMTMiIHkxPSIzOC4wNDcxIiB4Mj0iMzEuNTU3NCIgeTI9IjM5LjM1NDEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3AvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3Atb3BhY2l0eT0iMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=" alt="Swift" />
                  <h2 className="text-xl font-semibold">Flutter</h2>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image className="w-[500px] h-[563px]" src={developMobileApps} alt="developMobileApps" />
            </div>
          </div>
        </div>
      </div>

      <div id="ERP-system" className="w-full py-16 my-20 h-full justify-center bg-[#f4f7ff]">
        <div className="max-w-[1150px] mx-auto">
          <h1 className="text-[64px] font-semibold text-[#1b4bf7]">ERP cистемы</h1>
          <div className="flex my-12 items-center justify-between">
            <div>
              <Image className="w-[500px] h-[419px] " src={ERP} alt="ERP system" />
            </div>
            <div className="w-[45%]">
              <p className="text-[22px] leading-[1.9] tracking-wide font-medium text-[#464359]">IT Системы любого уровня сложности в удобные для вас сроки.</p>
              <div className="grid grid-cols-3 my-14 gap-4">
                {ERPSystemDatas.map((data) => (
                  <div key={data.id} className="rounded-[8px] py-[10px] px-[15px] bg-[#e0e8ff] w-[150px] h-[118px]">
                    <div>
                      <img className="w-[56px] h-[56px]" src={data.url} alt={data.title} />
                    </div>
                    <h2 className="text-[17.5px] font-medium  my-5">{data.title}</h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="UI-design" className="w-full my-8 h-full justify-center relative">
        <div className="max-w-[1150px] mx-auto">
          <h1 className="text-[64px] font-semibold text-[#1b4bf7]">UI / UX Дизайн</h1>
          <div className="flex items-center justify-between">
            <div className="w-1/2">
              <p className="text-[22px] leading-[1.9] tracking-wide font-medium w-[470px] text-[#464359]">Наша компания придерживается подхода к дизайну, ориентированного на человека..</p>
              <div className="grid grid-cols-3 items-center gap-4 my-12 max-w-full mx-auto">
                {UIDesignDatas.map((data) => (
                  <div key={data.id} className="w-[150px] h-[118px] rounded-[8px] px-4 py-4 bg-[#f4f7ff]">
                    <img className="w-12 h-12" src={data.url} alt="apple" />
                    <h3 className="text-[16px] mt-4 font-semibold">{data.title}</h3>
                  </div>
                ))}
              </div>

              <h1 className="text-[34px] my-4 font-semibold text-[#464359]">Технологии</h1>
              <div className="grid grid-cols-4 items-center">
                {TechnologiesDatas.map((data) => (
                  <div key={data.id}>
                    <img className="w-[40px] h-[56px]" src={data.url} alt={data.title} />
                    <h2 className="text-xl font-semibold">{data.title}</h2>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image className="w-[500px] h-[656px]" src={UI} alt="developMobileApps" />
            </div>
          </div>
        </div>
      </div>

      <div id="optimization" className="w-full py-16 my-20 h-full justify-center bg-[#f4f7ff]">
        <div className="max-w-[1150px] mx-auto">
          <h1 className="text-[64px] w-[800px] leading-[1] font-semibold text-[#1b4bf7]">Оптимизация инфраструктуры</h1>
          <div className="flex my-12 items-center justify-between">
            <div>
              <Image className="w-[500px] h-[419px] " src={ERP} alt="ERP system" />
            </div>
            <div className="w-[45%]">
              <p className="text-[22px] leading-[1.9] tracking-wide font-medium text-[#464359]">Наши опытные специалисты помогут оптимизировать вашу инфраструктуру.</p>
              <div className="grid grid-cols-3 my-14 gap-4">
                {optimizationSystemDatas.map((data) => (
                  <div key={data.id} className="rounded-[8px] py-[10px] px-[15px] bg-[#e0e8ff] w-[150px] h-[118px]">
                    <div>
                      <img className="w-[56px] h-[56px]" src={data.url} alt={data.title} />
                    </div>
                    <h2 className="text-[17.5px] font-medium  my-5">{data.title}</h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="consulting" className="w-full py-8 h-full justify-center">
        <div className="max-w-[1150px] mx-auto">
          <h1 className="text-[64px] my-5 font-semibold text-[#1b4bf7]">IT консалтинг</h1>
          <div className="flex items-center justify-between">
            <div className="w-[45%]">
              <p className="text-[22px] leading-[1.9] tracking-wide font-medium text-[#464359]">Мы можем повысить квалификацию ваших сотрудников тем самым увеличить эффективность вашей компании.</p>
              <div className="grid grid-cols-3 my-14 gap-4">
                {consultingDatas.map((data) => (
                  <div key={data.id} className="rounded-[8px] py-[10px] px-[15px] bg-[#e0e8ff] w-[150px] h-[118px]">
                    <div>
                      <img className="w-[56px] h-[56px]" src={data.url} alt={data.title} />
                    </div>
                    <h2 className="text-[17.5px] font-medium  my-5">{data.title}</h2>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img className="w-[500px] h-[419px] " src='https://udevs.io/static/consulting-41b53d1dd307a65f09f8017660a0304c.svg' alt="command section img" />
            </div>
          </div>
        </div>
      </div>

      <div id="tools" className="w-full py-12 h-full justify-center bg-[#f4f7ff]">
        <div className="max-w-[1150px] mx-auto">
          <h1 className="text-[64px] font-semibold text-[#1b4bf7]">Инструменты</h1>

          <div className="grid grid-cols-7 gap-4 items-center my-12">
            {toolTypeDatas.map((data) => (
              <div key={data.id}>
                <label htmlFor={`horizontal-list-${data.id}`} className="flex items-center w-full px-3 py-2 cursor-pointer">
                  <div className="grid mr-3 place-items-center">
                    <div className="inline-flex items-center">
                      <label className="relative flex items-center p-0 rounded-full cursor-pointer" htmlFor={`horizontal-list-${data.id}`}>
                        <input
                          name="horizontal-list"
                          id={`horizontal-list-${data.id}`}
                          type="radio"
                          className="peer relative h-5 w-5 cursor-pointer rounded-full border-2 border-indigo-500 text-gray-900"
                          checked={selectedId === data.id}
                          onChange={(e) => onChange(e)}
                          onClick={() => clickHandler(data.id, data.title)}
                        />
                        <span className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 bg-indigo-500 rounded-full" viewBox="0 0 16 16" fill="none">
                            <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                          </svg>
                        </span>
                      </label>
                    </div>
                  </div>
                  <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-400">
                    {data.title}
                  </p>
                </label>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-12 gap-4 items-center">
            {toolComponentDatas.map((data) => (
              <div key={data.id} className={`w-[87px] h-[90px] py-4 text-center justify-center opacity-100 bg-[#dbe5ff] rounded-[8px] ${(selectedCategory === data.categoryName || selectedId === null) ? 'bg-[#a8bfff] opacity-100' : 'opacity-40 bg-gray-50'}`}>
                <img className="w-6 h-6 mx-auto" src={data.url} alt={data.title} />
                <p className="my-6 text-[10px]">{data.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="clients" className="w-full py-12 h-full justify-center">
        <div className="max-w-[1150px] mx-auto">
          <h1 className="text-[64px] font-semibold text-[#1b4bf7]">Наши клиенты</h1>
        </div>
        <div className="py-12">
          <FirstSlider>
            {firstSliderDatas.map((data) => (
              <div key={data.id} className="flex-shrink-0 whitespace-nowrap w-[calc(100% / 4)] bg-none duration-700 scale-100 hover:scale-110 transition-all ease-in-out my-[10px] mx-[20px]">
                <img className="shadow-md rounded-[13px] w-[213px] h-[126px]" src={data.url} alt={data.alt} />
              </div>
            ))}
          </FirstSlider>
          <SecondSlider>
            {secondSliderDatas.map((data) => (
              <div key={data.id} className="flex-shrink-0 whitespace-nowrap w-[calc(100% / 4)] bg-none duration-700 scale-100 hover:scale-110 transition-all ease-in-out my-[10px] mx-[20px]">
                <img className="shadow-md rounded-[15px] w-[213px] h-[126px]" src={data.url} alt={data.alt} />
              </div>
            ))}
          </SecondSlider>
        </div>
      </div>

      <div id="delever" className="w-full py-16 my-20 h-full justify-center">
        <div className="max-w-[1000px] mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <Image className="w-[500px] h-[419px] " src={Delever} alt="Delever" />
            </div>
            <div className="w-[45%]">
              <img className="my-8" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUyIiBoZWlnaHQ9IjQ5IiB2aWV3Qm94PSIwIDAgMjUyIDQ5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTguNDQgMi44OEMyMy4xNzYgMi44OCAyNy4zMTQ3IDMuODQgMzAuODU2IDUuNzZDMzQuNDQgNy42MzczMyAzNy4xOTIgMTAuMjgyNyAzOS4xMTIgMTMuNjk2QzQxLjAzMiAxNy4xMDkzIDQxLjk5MiAyMS4wMTMzIDQxLjk5MiAyNS40MDhDNDEuOTkyIDI5Ljc2IDQxLjAxMDcgMzMuNjQyNyAzOS4wNDggMzcuMDU2QzM3LjEyOCA0MC40NjkzIDM0LjM3NiA0My4xNTczIDMwLjc5MiA0NS4xMkMyNy4yNTA3IDQ3LjA0IDIzLjEzMzMgNDggMTguNDQgNDhIMC41ODRWMi44OEgxOC40NFpNMTcuNDggMzYuOTI4QzIxLjE0OTMgMzYuOTI4IDI0LjAyOTMgMzUuOTI1MyAyNi4xMiAzMy45MkMyOC4yMTA3IDMxLjkxNDcgMjkuMjU2IDI5LjA3NzMgMjkuMjU2IDI1LjQwOEMyOS4yNTYgMjEuNjk2IDI4LjIxMDcgMTguODM3MyAyNi4xMiAxNi44MzJDMjQuMDI5MyAxNC43ODQgMjEuMTQ5MyAxMy43NiAxNy40OCAxMy43NkgxMy4xMjhWMzYuOTI4SDE3LjQ4Wk04MS45NTA1IDI5LjYzMkM4MS45NTA1IDMwLjYxMzMgODEuODg2NSAzMS41OTQ3IDgxLjc1ODUgMzIuNTc2SDU4LjAxNDVDNTguMTQyNSAzNC41Mzg3IDU4LjY3NTggMzYuMDEwNyA1OS42MTQ1IDM2Ljk5MkM2MC41OTU4IDM3LjkzMDcgNjEuODMzMiAzOC40IDYzLjMyNjUgMzguNEM2NS40MTcyIDM4LjQgNjYuOTEwNSAzNy40NjEzIDY3LjgwNjUgMzUuNTg0SDgxLjE4MjVDODAuNjI3OCAzOC4wNTg3IDc5LjUzOTggNDAuMjc3MyA3Ny45MTg1IDQyLjI0Qzc2LjMzOTggNDQuMTYgNzQuMzM0NSA0NS42NzQ3IDcxLjkwMjUgNDYuNzg0QzY5LjQ3MDUgNDcuODkzMyA2Ni43ODI1IDQ4LjQ0OCA2My44Mzg1IDQ4LjQ0OEM2MC4yOTcyIDQ4LjQ0OCA1Ny4xMzk4IDQ3LjcwMTMgNTQuMzY2NSA0Ni4yMDhDNTEuNjM1OCA0NC43MTQ3IDQ5LjQ4MTIgNDIuNTgxMyA0Ny45MDI1IDM5LjgwOEM0Ni4zNjY1IDM3LjAzNDcgNDUuNTk4NSAzMy43NzA3IDQ1LjU5ODUgMzAuMDE2QzQ1LjU5ODUgMjYuMjYxMyA0Ni4zNjY1IDIzLjAxODcgNDcuOTAyNSAyMC4yODhDNDkuNDM4NSAxNy41MTQ3IDUxLjU3MTggMTUuMzgxMyA1NC4zMDI1IDEzLjg4OEM1Ny4wNzU4IDEyLjM5NDcgNjAuMjU0NSAxMS42NDggNjMuODM4NSAxMS42NDhDNjcuMzc5OCAxMS42NDggNzAuNTE1OCAxMi4zNzMzIDczLjI0NjUgMTMuODI0Qzc1Ljk3NzIgMTUuMjc0NyA3OC4xMTA1IDE3LjM2NTMgNzkuNjQ2NSAyMC4wOTZDODEuMTgyNSAyMi43ODQgODEuOTUwNSAyNS45NjI3IDgxLjk1MDUgMjkuNjMyWk02OS4xNTA1IDI2LjQ5NkM2OS4xNTA1IDI0Ljk2IDY4LjYzODUgMjMuNzY1MyA2Ny42MTQ1IDIyLjkxMkM2Ni41OTA1IDIyLjAxNiA2NS4zMTA1IDIxLjU2OCA2My43NzQ1IDIxLjU2OEM2Mi4yMzg1IDIxLjU2OCA2MC45Nzk4IDIxLjk5NDcgNTkuOTk4NSAyMi44NDhDNTkuMDE3MiAyMy42NTg3IDU4LjM3NzIgMjQuODc0NyA1OC4wNzg1IDI2LjQ5Nkg2OS4xNTA1Wk05OS42MjggMC42Mzk5OTlWNDhIODcuMDg0VjAuNjM5OTk5SDk5LjYyOFpNMTQxLjA3NiAyOS42MzJDMTQxLjA3NiAzMC42MTMzIDE0MS4wMTIgMzEuNTk0NyAxNDAuODg0IDMyLjU3NkgxMTcuMTRDMTE3LjI2OCAzNC41Mzg3IDExNy44MDEgMzYuMDEwNyAxMTguNzQgMzYuOTkyQzExOS43MjEgMzcuOTMwNyAxMjAuOTU4IDM4LjQgMTIyLjQ1MiAzOC40QzEyNC41NDIgMzguNCAxMjYuMDM2IDM3LjQ2MTMgMTI2LjkzMiAzNS41ODRIMTQwLjMwOEMxMzkuNzUzIDM4LjA1ODcgMTM4LjY2NSA0MC4yNzczIDEzNy4wNDQgNDIuMjRDMTM1LjQ2NSA0NC4xNiAxMzMuNDYgNDUuNjc0NyAxMzEuMDI4IDQ2Ljc4NEMxMjguNTk2IDQ3Ljg5MzMgMTI1LjkwOCA0OC40NDggMTIyLjk2NCA0OC40NDhDMTE5LjQyMiA0OC40NDggMTE2LjI2NSA0Ny43MDEzIDExMy40OTIgNDYuMjA4QzExMC43NjEgNDQuNzE0NyAxMDguNjA2IDQyLjU4MTMgMTA3LjAyOCAzOS44MDhDMTA1LjQ5MiAzNy4wMzQ3IDEwNC43MjQgMzMuNzcwNyAxMDQuNzI0IDMwLjAxNkMxMDQuNzI0IDI2LjI2MTMgMTA1LjQ5MiAyMy4wMTg3IDEwNy4wMjggMjAuMjg4QzEwOC41NjQgMTcuNTE0NyAxMTAuNjk3IDE1LjM4MTMgMTEzLjQyOCAxMy44ODhDMTE2LjIwMSAxMi4zOTQ3IDExOS4zOCAxMS42NDggMTIyLjk2NCAxMS42NDhDMTI2LjUwNSAxMS42NDggMTI5LjY0MSAxMi4zNzMzIDEzMi4zNzIgMTMuODI0QzEzNS4xMDIgMTUuMjc0NyAxMzcuMjM2IDE3LjM2NTMgMTM4Ljc3MiAyMC4wOTZDMTQwLjMwOCAyMi43ODQgMTQxLjA3NiAyNS45NjI3IDE0MS4wNzYgMjkuNjMyWk0xMjguMjc2IDI2LjQ5NkMxMjguMjc2IDI0Ljk2IDEyNy43NjQgMjMuNzY1MyAxMjYuNzQgMjIuOTEyQzEyNS43MTYgMjIuMDE2IDEyNC40MzYgMjEuNTY4IDEyMi45IDIxLjU2OEMxMjEuMzY0IDIxLjU2OCAxMjAuMTA1IDIxLjk5NDcgMTE5LjEyNCAyMi44NDhDMTE4LjE0MiAyMy42NTg3IDExNy41MDIgMjQuODc0NyAxMTcuMjA0IDI2LjQ5NkgxMjguMjc2Wk0xNjMuNDI1IDM2LjE2TDE3MC4xNDUgMTIuMDk2SDE4My41MjFMMTcxLjE2OSA0OEgxNTUuNTUzTDE0My4yMDEgMTIuMDk2SDE1Ni41NzdMMTYzLjQyNSAzNi4xNlpNMjIyLjA3NiAyOS42MzJDMjIyLjA3NiAzMC42MTMzIDIyMi4wMTIgMzEuNTk0NyAyMjEuODg0IDMyLjU3NkgxOTguMTRDMTk4LjI2OCAzNC41Mzg3IDE5OC44MDEgMzYuMDEwNyAxOTkuNzQgMzYuOTkyQzIwMC43MjEgMzcuOTMwNyAyMDEuOTU4IDM4LjQgMjAzLjQ1MiAzOC40QzIwNS41NDIgMzguNCAyMDcuMDM2IDM3LjQ2MTMgMjA3LjkzMiAzNS41ODRIMjIxLjMwOEMyMjAuNzUzIDM4LjA1ODcgMjE5LjY2NSA0MC4yNzczIDIxOC4wNDQgNDIuMjRDMjE2LjQ2NSA0NC4xNiAyMTQuNDYgNDUuNjc0NyAyMTIuMDI4IDQ2Ljc4NEMyMDkuNTk2IDQ3Ljg5MzMgMjA2LjkwOCA0OC40NDggMjAzLjk2NCA0OC40NDhDMjAwLjQyMiA0OC40NDggMTk3LjI2NSA0Ny43MDEzIDE5NC40OTIgNDYuMjA4QzE5MS43NjEgNDQuNzE0NyAxODkuNjA2IDQyLjU4MTMgMTg4LjAyOCAzOS44MDhDMTg2LjQ5MiAzNy4wMzQ3IDE4NS43MjQgMzMuNzcwNyAxODUuNzI0IDMwLjAxNkMxODUuNzI0IDI2LjI2MTMgMTg2LjQ5MiAyMy4wMTg3IDE4OC4wMjggMjAuMjg4QzE4OS41NjQgMTcuNTE0NyAxOTEuNjk3IDE1LjM4MTMgMTk0LjQyOCAxMy44ODhDMTk3LjIwMSAxMi4zOTQ3IDIwMC4zOCAxMS42NDggMjAzLjk2NCAxMS42NDhDMjA3LjUwNSAxMS42NDggMjEwLjY0MSAxMi4zNzMzIDIxMy4zNzIgMTMuODI0QzIxNi4xMDIgMTUuMjc0NyAyMTguMjM2IDE3LjM2NTMgMjE5Ljc3MiAyMC4wOTZDMjIxLjMwOCAyMi43ODQgMjIyLjA3NiAyNS45NjI3IDIyMi4wNzYgMjkuNjMyWk0yMDkuMjc2IDI2LjQ5NkMyMDkuMjc2IDI0Ljk2IDIwOC43NjQgMjMuNzY1MyAyMDcuNzQgMjIuOTEyQzIwNi43MTYgMjIuMDE2IDIwNS40MzYgMjEuNTY4IDIwMy45IDIxLjU2OEMyMDIuMzY0IDIxLjU2OCAyMDEuMTA1IDIxLjk5NDcgMjAwLjEyNCAyMi44NDhDMTk5LjE0MiAyMy42NTg3IDE5OC41MDIgMjQuODc0NyAxOTguMjA0IDI2LjQ5NkgyMDkuMjc2Wk0yMzkuNzUzIDE4LjQzMkMyNDEuMTYxIDE2LjM4NCAyNDIuODY4IDE0Ljc2MjcgMjQ0Ljg3MyAxMy41NjhDMjQ2Ljg3OCAxMi4zNzMzIDI0OS4wMzMgMTEuNzc2IDI1MS4zMzcgMTEuNzc2VjI1LjE1MkgyNDcuODE3QzI0NS4wODYgMjUuMTUyIDI0My4wNiAyNS42ODUzIDI0MS43MzcgMjYuNzUyQzI0MC40MTQgMjcuODE4NyAyMzkuNzUzIDI5LjY3NDcgMjM5Ljc1MyAzMi4zMlY0OEgyMjcuMjA5VjEyLjA5NkgyMzkuNzUzVjE4LjQzMloiIGZpbGw9IiNGRjU3MjIiLz4KPC9zdmc+Cg==" alt="Delever" />
              <div className="flex items-center gap-3 w-[117px] h-[36px] rounded-full px-[10px] bg-[#FF572233] mb-10">
                <img className="w-[25px] h-[25px]" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuMjkxMzQgMTkuNzkxN0M4LjQ0MTkzIDE5Ljc5MTcgOS4zNzQ2NyAxOC44NTg5IDkuMzc0NjcgMTcuNzA4M0M5LjM3NDY3IDE2LjU1NzcgOC40NDE5MyAxNS42MjUgNy4yOTEzNCAxNS42MjVDNi4xNDA3NSAxNS42MjUgNS4yMDgwMSAxNi41NTc3IDUuMjA4MDEgMTcuNzA4M0M1LjIwODAxIDE4Ljg1ODkgNi4xNDA3NSAxOS43OTE3IDcuMjkxMzQgMTkuNzkxN1oiIHN0cm9rZT0iI0ZGNTcyMiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE3LjcwODMgMTkuNzkxN0MxOC44NTg5IDE5Ljc5MTcgMTkuNzkxNyAxOC44NTg5IDE5Ljc5MTcgMTcuNzA4M0MxOS43OTE3IDE2LjU1NzcgMTguODU4OSAxNS42MjUgMTcuNzA4MyAxNS42MjVDMTYuNTU3NyAxNS42MjUgMTUuNjI1IDE2LjU1NzcgMTUuNjI1IDE3LjcwODNDMTUuNjI1IDE4Ljg1ODkgMTYuNTU3NyAxOS43OTE3IDE3LjcwODMgMTkuNzkxN1oiIHN0cm9rZT0iI0ZGNTcyMiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTUuMjA4MDEgMTcuNzA4NUgzLjEyNDY3VjEzLjU0MThNMi4wODMwMSA1LjIwODVIMTMuNTQxM1YxNy43MDg1TTkuMzc0NjggMTcuNzA4NUgxNS42MjQ3TTE5Ljc5MTMgMTcuNzA4NUgyMS44NzQ3VjExLjQ1ODVNMjEuODc0NyAxMS40NTg1SDEzLjU0MTNNMjEuODc0NyAxMS40NTg1TDE4Ljc0OTcgNi4yNTAxNkgxMy41NDEzIiBzdHJva2U9IiNGRjU3MjIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0zLjEyNSA5LjM3NUg3LjI5MTY3IiBzdHJva2U9IiNGRjU3MjIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=" alt="delever icon" />
                <p className="text-[#ff5722]">Delivery</p>
              </div>
              <p className="text-[22px] leading-[1.9] tracking-wide font-medium text-[#464359] w-[547px]">Delever — Автоматизация службы доставки ориентированая как на потребителей так и на рестораны.</p>
              <p className="text-[30px] my-8 font-semibold text-[#464359]">Мы разрабатывали:</p>
              <div className="grid grid-cols-3 gap-x-10 gap-y-4">
                {deleverDatas.map((data) => (
                  <div key={data.id} className="rounded-[8px] py-[10px] px-[15px] bg-[#f4f7ff] w-[150px] h-[118px]">
                    <div>
                      <img className="w-[56px] h-[56px]" src={data.url} alt={data.title} />
                    </div>
                    <h2 className="text-[17.5px] font-medium  my-5">{data.title}</h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="smsuz" className="w-full py-16 my-20 h-full justify-center">
        <div className="max-w-[1150px] mx-auto">
          <div className="flex items-center justify-between">
            <div className="w-[50%]">
              <img className="my-8" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEzIiBoZWlnaHQ9IjQ3IiB2aWV3Qm94PSIwIDAgMzEzIDQ3IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTguNjA4IDQ2LjQ0OEMxMy4zNiA0Ni40NDggOS4wNTA2NyA0NS4yMTA3IDUuNjggNDIuNzM2QzIuMzA5MzMgNDAuMjE4NyAwLjQ5NiAzNi42MzQ3IDAuMjQgMzEuOTg0SDEzLjYxNkMxMy43NDQgMzMuNTYyNyAxNC4yMTMzIDM0LjcxNDcgMTUuMDI0IDM1LjQ0QzE1LjgzNDcgMzYuMTY1MyAxNi44OCAzNi41MjggMTguMTYgMzYuNTI4QzE5LjMxMiAzNi41MjggMjAuMjUwNyAzNi4yNTA3IDIwLjk3NiAzNS42OTZDMjEuNzQ0IDM1LjA5ODcgMjIuMTI4IDM0LjI4OCAyMi4xMjggMzMuMjY0QzIyLjEyOCAzMS45NDEzIDIxLjUwOTMgMzAuOTE3MyAyMC4yNzIgMzAuMTkyQzE5LjAzNDcgMjkuNDY2NyAxNy4wMjkzIDI4LjY1NiAxNC4yNTYgMjcuNzZDMTEuMzEyIDI2Ljc3ODcgOC45MjI2NyAyNS44NCA3LjA4OCAyNC45NDRDNS4yOTYgMjQuMDA1MyAzLjcxNzMzIDIyLjY2MTMgMi4zNTIgMjAuOTEyQzEuMDI5MzMgMTkuMTIgMC4zNjggMTYuNzk0NyAwLjM2OCAxMy45MzZDMC4zNjggMTEuMDM0NyAxLjA5MzMzIDguNTYgMi41NDQgNi41MTJDMy45OTQ2NyA0LjQyMTMzIDYgMi44NDI2NyA4LjU2IDEuNzc2QzExLjEyIDAuNzA5MzMyIDE0LjAyMTMgMC4xNzU5OTkgMTcuMjY0IDAuMTc1OTk5QzIyLjUxMiAwLjE3NTk5OSAyNi42OTMzIDEuNDEzMzMgMjkuODA4IDMuODg4QzMyLjk2NTMgNi4zMiAzNC42NTA3IDkuNzU0NjcgMzQuODY0IDE0LjE5MkgyMS4yMzJDMjEuMTg5MyAxMi44MjY3IDIwLjc2MjcgMTEuODAyNyAxOS45NTIgMTEuMTJDMTkuMTg0IDEwLjQzNzMgMTguMTgxMyAxMC4wOTYgMTYuOTQ0IDEwLjA5NkMxNi4wMDUzIDEwLjA5NiAxNS4yMzczIDEwLjM3MzMgMTQuNjQgMTAuOTI4QzE0LjA0MjcgMTEuNDgyNyAxMy43NDQgMTIuMjcyIDEzLjc0NCAxMy4yOTZDMTMuNzQ0IDE0LjE0OTMgMTQuMDY0IDE0Ljg5NiAxNC43MDQgMTUuNTM2QzE1LjM4NjcgMTYuMTMzMyAxNi4yMTg3IDE2LjY2NjcgMTcuMiAxNy4xMzZDMTguMTgxMyAxNy41NjI3IDE5LjYzMiAxOC4xMTczIDIxLjU1MiAxOC44QzI0LjQxMDcgMTkuNzgxMyAyNi43NTczIDIwLjc2MjcgMjguNTkyIDIxLjc0NEMzMC40NjkzIDIyLjY4MjcgMzIuMDY5MyAyNC4wMjY3IDMzLjM5MiAyNS43NzZDMzQuNzU3MyAyNy40ODI3IDM1LjQ0IDI5LjY1ODcgMzUuNDQgMzIuMzA0QzM1LjQ0IDM0Ljk5MiAzNC43NTczIDM3LjQwMjcgMzMuMzkyIDM5LjUzNkMzMi4wNjkzIDQxLjY2OTMgMzAuMTI4IDQzLjM1NDcgMjcuNTY4IDQ0LjU5MkMyNS4wNTA3IDQ1LjgyOTMgMjIuMDY0IDQ2LjQ0OCAxOC42MDggNDYuNDQ4Wk04OC4xODM1IDkuNzc2QzkyLjcwNjIgOS43NzYgOTYuMjQ3NSAxMS4xNDEzIDk4LjgwNzUgMTMuODcyQzEwMS40MSAxNi42MDI3IDEwMi43MTIgMjAuMzM2IDEwMi43MTIgMjUuMDcyVjQ2SDkwLjE2NzVWMjYuNzM2QzkwLjE2NzUgMjQuODE2IDg5LjYzNDIgMjMuMzIyNyA4OC41Njc1IDIyLjI1NkM4Ny41MDA4IDIxLjE4OTMgODYuMDUwMiAyMC42NTYgODQuMjE1NSAyMC42NTZDODIuMzgwOCAyMC42NTYgODAuOTMwMiAyMS4xODkzIDc5Ljg2MzUgMjIuMjU2Qzc4Ljc5NjggMjMuMzIyNyA3OC4yNjM1IDI0LjgxNiA3OC4yNjM1IDI2LjczNlY0Nkg2NS43MTk1VjI2LjczNkM2NS43MTk1IDI0LjgxNiA2NS4xODYyIDIzLjMyMjcgNjQuMTE5NSAyMi4yNTZDNjMuMDk1NSAyMS4xODkzIDYxLjY2NjIgMjAuNjU2IDU5LjgzMTUgMjAuNjU2QzU3Ljk1NDIgMjAuNjU2IDU2LjQ4MjIgMjEuMTg5MyA1NS40MTU1IDIyLjI1NkM1NC4zNDg4IDIzLjMyMjcgNTMuODE1NSAyNC44MTYgNTMuODE1NSAyNi43MzZWNDZINDEuMjcxNVYxMC4wOTZINTMuODE1NVYxNC44MzJDNTQuOTI0OCAxMy4yOTYgNTYuMzU0MiAxMi4wOCA1OC4xMDM1IDExLjE4NEM1OS44OTU1IDEwLjI0NTMgNjEuOTQzNSA5Ljc3NiA2NC4yNDc1IDkuNzc2QzY2Ljg5MjggOS43NzYgNjkuMjM5NSAxMC4zNTIgNzEuMjg3NSAxMS41MDRDNzMuMzc4MiAxMi42NTYgNzUuMDIwOCAxNC4yNzczIDc2LjIxNTUgMTYuMzY4Qzc3LjQ5NTUgMTQuNDA1MyA3OS4xODA4IDEyLjgyNjcgODEuMjcxNSAxMS42MzJDODMuMzYyMiAxMC4zOTQ3IDg1LjY2NjIgOS43NzYgODguMTgzNSA5Ljc3NlpNMTI0Ljg4IDQ2LjQ0OEMxMjEuNjM3IDQ2LjQ0OCAxMTguNzM2IDQ1LjkxNDcgMTE2LjE3NiA0NC44NDhDMTEzLjY1OSA0My43Mzg3IDExMS42NTMgNDIuMjQ1MyAxMTAuMTYgNDAuMzY4QzEwOC43MDkgMzguNDQ4IDEwNy44OTkgMzYuMjkzMyAxMDcuNzI4IDMzLjkwNEgxMTkuODg4QzEyMC4wNTkgMzUuMDU2IDEyMC41OTIgMzUuOTUyIDEyMS40ODggMzYuNTkyQzEyMi4zODQgMzcuMjMyIDEyMy40OTMgMzcuNTUyIDEyNC44MTYgMzcuNTUyQzEyNS44NCAzNy41NTIgMTI2LjY1MSAzNy4zMzg3IDEyNy4yNDggMzYuOTEyQzEyNy44NDUgMzYuNDg1MyAxMjguMTQ0IDM1LjkzMDcgMTI4LjE0NCAzNS4yNDhDMTI4LjE0NCAzNC4zNTIgMTI3LjY1MyAzMy42OTA3IDEyNi42NzIgMzMuMjY0QzEyNS42OTEgMzIuODM3MyAxMjQuMDY5IDMyLjM2OCAxMjEuODA4IDMxLjg1NkMxMTkuMjQ4IDMxLjM0NCAxMTcuMTE1IDMwLjc2OCAxMTUuNDA4IDMwLjEyOEMxMTMuNzAxIDI5LjQ4OCAxMTIuMjA4IDI4LjQ0MjcgMTEwLjkyOCAyNi45OTJDMTA5LjY5MSAyNS41NDEzIDEwOS4wNzIgMjMuNTc4NyAxMDkuMDcyIDIxLjEwNEMxMDkuMDcyIDE4Ljk3MDcgMTA5LjY0OCAxNy4wNTA3IDExMC44IDE1LjM0NEMxMTEuOTUyIDEzLjU5NDcgMTEzLjYzNyAxMi4yMDggMTE1Ljg1NiAxMS4xODRDMTE4LjExNyAxMC4xNiAxMjAuODI3IDkuNjQ4IDEyMy45ODQgOS42NDhDMTI4LjY3NyA5LjY0OCAxMzIuMzY4IDEwLjggMTM1LjA1NiAxMy4xMDRDMTM3Ljc0NCAxNS40MDggMTM5LjMwMSAxOC40MzczIDEzOS43MjggMjIuMTkySDEyOC40QzEyOC4xODcgMjEuMDQgMTI3LjY3NSAyMC4xNjUzIDEyNi44NjQgMTkuNTY4QzEyNi4wOTYgMTguOTI4IDEyNS4wNTEgMTguNjA4IDEyMy43MjggMTguNjA4QzEyMi43MDQgMTguNjA4IDEyMS45MTUgMTguOCAxMjEuMzYgMTkuMTg0QzEyMC44NDggMTkuNTY4IDEyMC41OTIgMjAuMTAxMyAxMjAuNTkyIDIwLjc4NEMxMjAuNTkyIDIxLjYzNzMgMTIxLjA4MyAyMi4yOTg3IDEyMi4wNjQgMjIuNzY4QzEyMy4wNDUgMjMuMTk0NyAxMjQuNjI0IDIzLjY0MjcgMTI2LjggMjQuMTEyQzEyOS40MDMgMjQuNjY2NyAxMzEuNTU3IDI1LjI4NTMgMTMzLjI2NCAyNS45NjhDMTM1LjAxMyAyNi42NTA3IDEzNi41MjggMjcuNzYgMTM3LjgwOCAyOS4yOTZDMTM5LjEzMSAzMC43ODkzIDEzOS43OTIgMzIuODM3MyAxMzkuNzkyIDM1LjQ0QzEzOS43OTIgMzcuNTMwNyAxMzkuMTczIDM5LjQwOCAxMzcuOTM2IDQxLjA3MkMxMzYuNzQxIDQyLjczNiAxMzUuMDEzIDQ0LjA1ODcgMTMyLjc1MiA0NS4wNEMxMzAuNTMzIDQ1Ljk3ODcgMTI3LjkwOSA0Ni40NDggMTI0Ljg4IDQ2LjQ0OFpNMTgyLjY5NSAxMC4wOTZWNDZIMTcwLjA4N1Y0MC44OEMxNjkuMDIgNDIuNTAxMyAxNjcuNTQ4IDQzLjgyNCAxNjUuNjcxIDQ0Ljg0OEMxNjMuNzk0IDQ1LjgyOTMgMTYxLjYzOSA0Ni4zMiAxNTkuMjA3IDQ2LjMyQzE1NS4wMjYgNDYuMzIgMTUxLjcxOSA0NC45NTQ3IDE0OS4yODcgNDIuMjI0QzE0Ni44OTggMzkuNDUwNyAxNDUuNzAzIDM1LjY5NiAxNDUuNzAzIDMwLjk2VjEwLjA5NkgxNTguMTgzVjI5LjM2QzE1OC4xODMgMzEuNDA4IDE1OC43MTYgMzMuMDI5MyAxNTkuNzgzIDM0LjIyNEMxNjAuODkyIDM1LjM3NiAxNjIuMzQzIDM1Ljk1MiAxNjQuMTM1IDM1Ljk1MkMxNjUuOTcgMzUuOTUyIDE2Ny40MiAzNS4zNzYgMTY4LjQ4NyAzNC4yMjRDMTY5LjU1NCAzMy4wMjkzIDE3MC4wODcgMzEuNDA4IDE3MC4wODcgMjkuMzZWMTAuMDk2SDE4Mi42OTVaTTIwMS43MzggMzUuNTY4SDIxNy4wMzRWNDZIMTg3LjkxNFYzNi4wOEwyMDIuMTg2IDIwLjUyOEgxODguMDQyVjEwLjA5NkgyMTYuNTIyVjIwLjAxNkwyMDEuNzM4IDM1LjU2OFpNMjI4LjM1MiA0Ni41MTJDMjI2LjEzMyA0Ni41MTIgMjI0LjM0MSA0NS45MTQ3IDIyMi45NzYgNDQuNzJDMjIxLjY1MyA0My40ODI3IDIyMC45OTIgNDEuOTI1MyAyMjAuOTkyIDQwLjA0OEMyMjAuOTkyIDM4LjE3MDcgMjIxLjY1MyAzNi42MTMzIDIyMi45NzYgMzUuMzc2QzIyNC4zNDEgMzQuMTM4NyAyMjYuMTMzIDMzLjUyIDIyOC4zNTIgMzMuNTJDMjMwLjUyOCAzMy41MiAyMzIuMjc3IDM0LjEzODcgMjMzLjYgMzUuMzc2QzIzNC45NjUgMzYuNjEzMyAyMzUuNjQ4IDM4LjE3MDcgMjM1LjY0OCA0MC4wNDhDMjM1LjY0OCA0MS44ODI3IDIzNC45NjUgNDMuNDE4NyAyMzMuNiA0NC42NTZDMjMyLjI3NyA0NS44OTMzIDIzMC41MjggNDYuNTEyIDIyOC4zNTIgNDYuNTEyWk0yNzguMjU4IDEwLjA5NlY0NkgyNjUuNjVWNDAuODhDMjY0LjU4MyA0Mi41MDEzIDI2My4xMTEgNDMuODI0IDI2MS4yMzQgNDQuODQ4QzI1OS4zNTYgNDUuODI5MyAyNTcuMjAyIDQ2LjMyIDI1NC43NyA0Ni4zMkMyNTAuNTg4IDQ2LjMyIDI0Ny4yODIgNDQuOTU0NyAyNDQuODUgNDIuMjI0QzI0Mi40NiAzOS40NTA3IDI0MS4yNjYgMzUuNjk2IDI0MS4yNjYgMzAuOTZWMTAuMDk2SDI1My43NDZWMjkuMzZDMjUzLjc0NiAzMS40MDggMjU0LjI3OSAzMy4wMjkzIDI1NS4zNDYgMzQuMjI0QzI1Ni40NTUgMzUuMzc2IDI1Ny45MDYgMzUuOTUyIDI1OS42OTggMzUuOTUyQzI2MS41MzIgMzUuOTUyIDI2Mi45ODMgMzUuMzc2IDI2NC4wNSAzNC4yMjRDMjY1LjExNiAzMy4wMjkzIDI2NS42NSAzMS40MDggMjY1LjY1IDI5LjM2VjEwLjA5NkgyNzguMjU4Wk0yOTcuMzAxIDM1LjU2OEgzMTIuNTk3VjQ2SDI4My40NzdWMzYuMDhMMjk3Ljc0OSAyMC41MjhIMjgzLjYwNVYxMC4wOTZIMzEyLjA4NVYyMC4wMTZMMjk3LjMwMSAzNS41NjhaIiBmaWxsPSIjMUI1QkY3Ii8+Cjwvc3ZnPgo=" alt="SMS" />
              <div className="flex items-center gap-3 w-[142px] h-[36px] rounded-full px-[10px] bg-[#4473e533] mb-10">
                <img className="w-[25px] h-[25px]" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5IDVINUMzLjg5NTQzIDUgMyA1Ljg5NTQzIDMgN1YxN0MzIDE4LjEwNDYgMy44OTU0MyAxOSA1IDE5SDE5QzIwLjEwNDYgMTkgMjEgMTguMTA0NiAyMSAxN1Y3QzIxIDUuODk1NDMgMjAuMTA0NiA1IDE5IDVaIiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0zIDdMMTIgMTNMMjEgNyIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K" alt="smsuz icon" />
                <p className="text-[#4473e5]">Notification</p>
              </div>
              <p className="text-[22px] leading-[1.9] tracking-wide font-medium text-[#464359]">Smsuz.uz — Это платформа для массовых смс рассылок.</p>
              <p className="text-[30px] my-8 font-semibold text-[#464359]">Мы разрабатывали:</p>
              <div className="grid grid-cols-3 gap-x-10 gap-y-4">
                {smsDatas.map((data) => (
                  <div key={data.id} className="rounded-[8px] py-[10px] px-[15px] bg-[#f4f7ff] w-[150px] h-[118px]">
                    <div>
                      <img className="w-[56px] h-[56px]" src={data.url} alt={data.title} />
                    </div>
                    <h2 className="text-[17.5px] font-medium  my-5">{data.title}</h2>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Image className="w-[547px] h-[393px] " src={SMS} alt="Delever" />
            </div>
          </div>
        </div>
      </div>

      <div id="goodzone" className="w-full py-16 my-20 h-full justify-center">
        <div className="max-w-[1150px] mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <Image className="w-[547px] h-[390px] " src={Goodzone} alt="Delever" />
            </div>
            <div className="w-[48%]">
              <img className="my-8" src="data:image/png;base64,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" alt="Goodzone" />
              <div className="flex items-center gap-2 w-[150px] h-[36px] rounded-full px-[10px] bg-[#F5000033] mb-10">
                <img className="w-[25px] h-[25px]" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuMjkxOTkgMTAuNDE3TDEyLjUwMDMgNC4xNjY5OUwxNy43MDg3IDEwLjQxNyIgc3Ryb2tlPSIjRjUwMDAwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMjEuODc1IDEwLjQxN0wxOS43OTE3IDE4Ljc1MDNDMTkuNjk0MyAxOS4zNDc0IDE5LjQzMjQgMTkuODgyOSAxOS4wNTE4IDIwLjI2MzVDMTguNjcxMSAyMC42NDQyIDE4LjE5NTcgMjAuODQ1OSAxNy43MDgzIDIwLjgzMzdINy4yOTE2N0M2LjgwNDI4IDIwLjg0NTkgNi4zMjg4OCAyMC42NDQyIDUuOTQ4MjEgMjAuMjYzNUM1LjU2NzU1IDE5Ljg4MjkgNS4zMDU3MyAxOS4zNDc0IDUuMjA4MzMgMTguNzUwM0wzLjEyNSAxMC40MTdIMjEuODc1WiIgc3Ryb2tlPSIjRjUwMDAwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTIuNTAwMyAxNy43MDg3QzEzLjY1MDkgMTcuNzA4NyAxNC41ODM3IDE2Ljc3NTkgMTQuNTgzNyAxNS42MjUzQzE0LjU4MzcgMTQuNDc0NyAxMy42NTA5IDEzLjU0MiAxMi41MDAzIDEzLjU0MkMxMS4zNDk3IDEzLjU0MiAxMC40MTcgMTQuNDc0NyAxMC40MTcgMTUuNjI1M0MxMC40MTcgMTYuNzc1OSAxMS4zNDk3IDE3LjcwODcgMTIuNTAwMyAxNy43MDg3WiIgc3Ryb2tlPSIjRjUwMDAwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K" alt="goodzone icon" />
                <p className="text-[#f50000]">E-Commerce</p>
              </div>
              <p className="text-[22px] leading-[1.9] tracking-wide font-medium text-[#464359] w-[547px]">Goodzone — Интернет магазин бытовой техники в Узбекистане.</p>
              <p className="text-[30px] my-8 font-semibold text-[#464359]">Мы разрабатывали:</p>
              <div className="grid grid-cols-3 gap-x-10 gap-y-4">
                {deleverDatas.map((data) => (
                  <div key={data.id} className="rounded-[8px] py-[10px] px-[15px] bg-[#f4f7ff] w-[150px] h-[118px]">
                    <div>
                      <img className="w-[56px] h-[56px]" src={data.url} alt={data.title} />
                    </div>
                    <h2 className="text-[17.5px] font-medium  my-5">{data.title}</h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="iman" className="w-full py-16 my-20 h-full justify-center">
        <div className="max-w-[1150px] mx-auto">
          <div className="flex items-center justify-between">
            <div className="w-[50%]">
              <img className="my-8" src="https://udevs.io/static/iman-8d343bfc270029c181003633c9652299.svg" alt="IMAN" />
              <div className="flex items-center gap-3 w-[142px] h-[36px] rounded-full px-[10px] bg-[#01CAB033] mb-10">
                <img className="w-[25px] h-[25px]" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMgMjFIMjEiIHN0cm9rZT0iIzAxQ0FCMCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMyAxMEgyMSIgc3Ryb2tlPSIjMDFDQUIwIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik01IDZMMTIgM0wxOSA2IiBzdHJva2U9IiMwMUNBQjAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTQgMTBWMjEiIHN0cm9rZT0iIzAxQ0FCMCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMjAgMTBWMjEiIHN0cm9rZT0iIzAxQ0FCMCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNOCAxNFYxNyIgc3Ryb2tlPSIjMDFDQUIwIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMiAxNFYxNyIgc3Ryb2tlPSIjMDFDQUIwIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNiAxNFYxNyIgc3Ryb2tlPSIjMDFDQUIwIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=" alt="iman icon" />
                <p className="text-[#01CAB0]">Finance</p>
              </div>
              <p className="text-[22px] leading-[1.9] tracking-wide font-medium text-[#464359]">Iman — это платформа взаимного финансирования, основанная на принципах «Исламских финансов». Здесь встречаются покупатели, продавцы и инвесторы.</p>
              <p className="text-[30px] my-8 font-semibold text-[#464359]">Мы разрабатывали:</p>
              <div className="grid grid-cols-3 gap-x-10 gap-y-4">
                {smsDatas.map((data) => (
                  <div key={data.id} className="rounded-[8px] py-[10px] px-[15px] bg-[#f4f7ff] w-[150px] h-[118px]">
                    <div>
                      <img className="w-[56px] h-[56px]" src={data.url} alt={data.title} />
                    </div>
                    <h2 className="text-[17.5px] font-medium  my-5">{data.title}</h2>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Image className="w-[527px] h-[415px] " src={Iman} alt="Delever" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1300px] py-16 relative mx-auto">
        <h1 className="text-[64px] ml-16 font-semibold text-[#1b4bf7]">Как мы работаем!</h1>
        <img className="w-[1000px] absolute top-[265px] -z-50 left-0 right-0 bottom-0 mx-auto" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEzMiIgaGVpZ2h0PSIzIiB2aWV3Qm94PSIwIDAgMTEzMiAzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8bGluZSBvcGFjaXR5PSIwLjQiIHgxPSIxLjUiIHkxPSIxLjUiIHgyPSIxMTMwLjUiIHkyPSIxLjUiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1kYXNoYXJyYXk9IjAuMiAxMCIvPgo8L3N2Zz4K" alt="line" />
        <div className="my-16 mx-auto flex items-center justify-between">
          <div className="w-[274px] px-7 h-40 text-center">
            <img className="mx-auto" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODEiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MSA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB3aWR0aD0iODAiIGhlaWdodD0iODAiIHJ4PSI0MCIgZmlsbD0iI0Y0RjdGRiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQwLjM1NzggNDMuNTcxMkw0NC4wMzEyIDM5Ljg5NzhDNDUuMDQ1NyAzOC44ODMzIDQ1LjI5NzMgMzcuMzMzNCA0NC42NTU2IDM2LjA1MDFMNDQuNDQ3NSAzNS42MzM4QzQzLjgwNTggMzQuMzUwNSA0NC4wNTczIDMyLjgwMDYgNDUuMDcxOSAzMS43ODYxTDQ5LjYyNjYgMjcuMjMxNEM0OS45NTIgMjYuOTA1OSA1MC40Nzk2IDI2LjkwNTkgNTAuODA1MSAyNy4yMzE0QzUwLjg2ODQgMjcuMjk0NyA1MC45MjExIDI3LjM2NzggNTAuOTYxMiAyNy40NDhMNTIuODAxMSAzMS4xMjc5QzU0LjIwODcgMzMuOTQzMSA1My42NTcgMzcuMzQzMSA1MS40MzE0IDM5LjU2ODdMNDEuNDMzMyA0OS41NjY3QzM5LjAxMDggNTEuOTg5MyAzNS40Mjc0IDUyLjgzNTIgMzIuMTc3MiA1MS43NTE4TDI4LjE1MyA1MC40MTA0QzI3LjcxNjQgNTAuMjY0OSAyNy40ODA1IDQ5Ljc5MyAyNy42MjYgNDkuMzU2NEMyNy42NjY5IDQ5LjIzMzYgMjcuNzM1OCA0OS4xMjIxIDI3LjgyNzMgNDkuMDMwNkwzMi4yNDYxIDQ0LjYxMThDMzMuMjYwNiA0My41OTczIDM0LjgxMDUgNDMuMzQ1OCAzNi4wOTM4IDQzLjk4NzRMMzYuNTEwMSA0NC4xOTU2QzM3Ljc5MzQgNDQuODM3MiAzOS4zNDMzIDQ0LjU4NTcgNDAuMzU3OCA0My41NzEyWiIgZmlsbD0iIzFCNUJGNyIvPgo8L3N2Zz4K" alt="first step" />
            <div>
              <h1 className="font-semibold text-[18px]">Cвязь</h1>
              <p className="text-center text-[14px]">
                Отправьте нам свой запрос на проект или идею проекта.
              </p>
            </div>
          </div>
          <div className="w-[274px] px-7 h-40 text-center">
            <img className="mx-auto" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODEiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MSA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB3aWR0aD0iODAiIGhlaWdodD0iODAiIHJ4PSI0MCIgZmlsbD0iI0Y0RjdGRiIvPgo8cGF0aCBkPSJNMjguODMzMyA1MS42NjY3SDUzLjgzMzNDNTQuNzUzOCA1MS42NjY3IDU1LjUgNTIuNDEyOSA1NS41IDUzLjMzMzNDNTUuNSA1NC4yNTM4IDU0Ljc1MzggNTUgNTMuODMzMyA1NUgyNy4xNjY3QzI2LjI0NjIgNTUgMjUuNSA1NC4yNTM4IDI1LjUgNTMuMzMzM1YyNi42NjY3QzI1LjUgMjUuNzQ2MiAyNi4yNDYyIDI1IDI3LjE2NjcgMjVDMjguMDg3MSAyNSAyOC44MzMzIDI1Ljc0NjIgMjguODMzMyAyNi42NjY3VjUxLjY2NjdaIiBmaWxsPSIjMUI1QkY3Ii8+CjxwYXRoIG9wYWNpdHk9IjAuMyIgZD0iTTM1LjA0OTYgNDQuNDczQzM0LjQyIDQ1LjE0NDUgMzMuMzY1MyA0NS4xNzg1IDMyLjY5MzggNDQuNTQ5QzMyLjAyMjIgNDMuOTE5NCAzMS45ODgyIDQyLjg2NDcgMzIuNjE3OCA0Mi4xOTMyTDM4Ljg2NzggMzUuNTI2NUMzOS40NzY2IDM0Ljg3NzEgNDAuNDg4NCAzNC44MjA3IDQxLjE2NTUgMzUuMzk4Nkw0Ni4wOTg0IDM5LjYwOEw1Mi41MjU1IDMxLjQ2N0M1My4wOTU5IDMwLjc0NDUgNTQuMTQzOSAzMC42MjEyIDU0Ljg2NjQgMzEuMTkxNkM1NS41ODg5IDMxLjc2MiA1NS43MTIyIDMyLjgxIDU1LjE0MTggMzMuNTMyNUw0Ny42NDE4IDQzLjAzMjVDNDcuMDU2IDQzLjc3NDUgNDUuOTcwOSA0My44ODEyIDQ1LjI1MTggNDMuMjY3Nkw0MC4yMTE3IDM4Ljk2NjdMMzUuMDQ5NiA0NC40NzNaIiBmaWxsPSIjMUI1QkY3Ii8+Cjwvc3ZnPgo=" alt="second step" />
            <div>
              <h1 className="font-semibold text-[18px]">Анализ</h1>
              <p className="text-center text-[14px]">
                Мы свяжемся с вами, чтобы уточнить ваши требования к проекту.
              </p>
            </div>
          </div>
          <div className="w-[274px] px-7 h-40 text-center">
            <img className="mx-auto" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODEiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MSA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB3aWR0aD0iODAiIGhlaWdodD0iODAiIHJ4PSI0MCIgZmlsbD0iI0Y0RjdGRiIvPgo8cGF0aCBvcGFjaXR5PSIwLjMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjMuODMzIDUzLjUwMDNDMjMuODMzIDU0LjMyODggMjQuNTA0NiA1NS4wMDAzIDI1LjMzMyA1NS4wMDAzSDU1LjY2NjNDNTYuNDk0OCA1NS4wMDAzIDU3LjE2NjMgNTQuMzI4OCA1Ny4xNjYzIDUzLjUwMDNWMzMuMTY3QzU3LjE2NjMgMzIuMzM4NiA1Ni40OTQ4IDMxLjY2NyA1NS42NjYzIDMxLjY2N0gzNy4xNjYzTDMyLjYwNTcgMjcuMTA2M0MzMi4zMjQ0IDI2LjgyNSAzMS45NDI4IDI2LjY2NyAzMS41NDUgMjYuNjY3SDI1LjMzM0MyNC41MDQ2IDI2LjY2NyAyMy44MzMgMjcuMzM4NiAyMy44MzMgMjguMTY3VjUzLjUwMDNaIiBmaWxsPSIjMUI1QkY3Ii8+CjxwYXRoIG9wYWNpdHk9IjAuMyIgZD0iTTQ0LjQxNiAzNy41QzQzLjA3NDggMzcuNSA0MS41MDYyIDM5LjAyMDUgNDAuNjY2IDQwQzM5LjgyNTggMzkuMDIwNSAzOC4yNTczIDM3LjUgMzYuOTE2IDM3LjVDMzQuNTQxOCAzNy41IDMzLjE2NiAzOS4zNTE4IDMzLjE2NiA0MS43MDg3QzMzLjE2NiA0NS42MjUgNDAuNjY2IDUwIDQwLjY2NiA1MEM0MC42NjYgNTAgNDguMTY2IDQ1LjYyNSA0OC4xNjYgNDEuODc1QzQ4LjE2NiAzOS41MTgxIDQ2Ljc5MDIgMzcuNSA0NC40MTYgMzcuNVoiIGZpbGw9IiMxQjVCRjciLz4KPC9zdmc+Cg==" alt="third step" />
            <div>
              <h1 className="font-semibold text-[18px]">Предложение</h1>
              <p className="text-center text-[14px]">
                Мы предоставим вам нашу бесплатную, не имеющую обязательной силы заявку.
              </p>
            </div>
          </div>
          <div className="w-[274px] px-7 h-40 text-center">
            <img className="mx-auto" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODEiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MSA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB3aWR0aD0iODAiIGhlaWdodD0iODAiIHJ4PSI0MCIgZmlsbD0iI0Y0RjdGRiIvPgo8cGF0aCBvcGFjaXR5PSIwLjMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjguODMzIDMxLjY2NjdDMjguODMzIDM1LjM0ODYgMzEuODE3OCAzOC4zMzMzIDM1LjQ5OTcgMzguMzMzM0MzOS4xODE2IDM4LjMzMzMgNDIuMTY2MyAzNS4zNDg2IDQyLjE2NjMgMzEuNjY2N0M0Mi4xNjYzIDI3Ljk4NDggMzkuMTgxNiAyNSAzNS40OTk3IDI1QzMxLjgxNzggMjUgMjguODMzIDI3Ljk4NDggMjguODMzIDMxLjY2NjdaTTQ1LjQ5OTcgMzguMzMzM0M0NS40OTk3IDQxLjA5NDggNDcuNzM4MyA0My4zMzMzIDUwLjQ5OTcgNDMuMzMzM0M1My4yNjExIDQzLjMzMzMgNTUuNDk5NyA0MS4wOTQ4IDU1LjQ5OTcgMzguMzMzM0M1NS40OTk3IDM1LjU3MTkgNTMuMjYxMSAzMy4zMzMzIDUwLjQ5OTcgMzMuMzMzM0M0Ny43MzgzIDMzLjMzMzMgNDUuNDk5NyAzNS41NzE5IDQ1LjQ5OTcgMzguMzMzM1oiIGZpbGw9IiMxQjVCRjciLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zNS40NzIyIDQxLjY2N0MyNy42MDMyIDQxLjY2NyAyMS4xNDcxIDQ1LjcxMTIgMjAuNTAxMSA1My42NjU3QzIwLjQ2NTkgNTQuMDk5IDIxLjI5NDUgNTUuMDAwMyAyMS43MTI1IDU1LjAwMDNINDkuMjQ0NUM1MC40OTY1IDU1LjAwMDMgNTAuNTE2IDUzLjk5MjggNTAuNDk2NSA1My42NjdDNTAuMDA4MSA0NS40ODkgNDMuNDUyIDQxLjY2NyAzNS40NzIyIDQxLjY2N1pNNTkuNTkzMyA1NS4wMDAzTDUzLjE2NzEgNTUuMDAwM0M1My4xNjcxIDUxLjI0ODggNTEuOTI3NiA0Ny43ODY3IDQ5LjgzNTcgNDUuMDAxNEM1NS41MTMxIDQ1LjA2MzUgNjAuMTQ4NiA0Ny45MzQgNjAuNDk3NSA1NC4wMDAzQzYwLjUxMTUgNTQuMjQ0NyA2MC40OTc1IDU1LjAwMDMgNTkuNTkzMyA1NS4wMDAzWiIgZmlsbD0iIzFCNUJGNyIvPgo8L3N2Zz4K" alt="fourth step" />
            <div>
              <h1 className="font-semibold text-[18px]">Команда</h1>
              <p className="text-center text-[14px]">
                Мы выделяем команду под ваши требования.
              </p>
            </div>
          </div>
          <div className="w-[274px] px-7 h-40 text-center">
            <img className="mx-auto" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODEiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MSA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB3aWR0aD0iODAiIGhlaWdodD0iODAiIHJ4PSI0MCIgZmlsbD0iI0Y0RjdGRiIvPgo8cGF0aCBkPSJNMzIuNzA1NCAyOC44MzY5QzMzLjQ3NTUgMjguMzMyNyAzNC41MDg1IDI4LjU0ODMgMzUuMDEyNyAyOS4zMTg0QzM1LjUxNjkgMzAuMDg4NSAzNS4zMDEzIDMxLjEyMTUgMzQuNTMxMiAzMS42MjU3QzMxLjcyNDggMzMuNDYzMSAzMC4wMDAzIDM2LjU4MyAzMC4wMDAzIDM5Ljk5OTJDMzAuMDAwMyA0NS41MjIxIDM0LjQ3NzUgNDkuOTk5MiA0MC4wMDAzIDQ5Ljk5OTJDNDUuNTIzMiA0OS45OTkyIDUwLjAwMDMgNDUuNTIyMSA1MC4wMDAzIDM5Ljk5OTJDNTAuMDAwMyAzNi42NTg0IDQ4LjM1MTcgMzMuNTk4NyA0NS42NDYzIDMxLjc0NDJDNDQuODg3IDMxLjIyMzcgNDQuNjkzNSAzMC4xODY0IDQ1LjIxMzkgMjkuNDI3MkM0NS43MzQzIDI4LjY2NzkgNDYuNzcxNyAyOC40NzQzIDQ3LjUzMDkgMjguOTk0OEM1MS4xMzM3IDMxLjQ2NDQgNTMuMzMzNyAzNS41NDczIDUzLjMzMzcgMzkuOTk5MkM1My4zMzM3IDQ3LjM2MyA0Ny4zNjQxIDUzLjMzMjUgNDAuMDAwMyA1My4zMzI1QzMyLjYzNjUgNTMuMzMyNSAyNi42NjcgNDcuMzYzIDI2LjY2NyAzOS45OTkyQzI2LjY2NyAzNS40NDY3IDI4Ljk2NzkgMzEuMjgzOCAzMi43MDU0IDI4LjgzNjlaIiBmaWxsPSIjMUI1QkY3Ii8+CjxyZWN0IG9wYWNpdHk9IjAuMyIgeD0iMzguMzMzIiB5PSIyNSIgd2lkdGg9IjMuMzMzMzMiIGhlaWdodD0iMTYuNjY2NyIgcng9IjEiIGZpbGw9IiMxQjVCRjciLz4KPC9zdmc+Cg==" alt="fifth step" />
            <div>
              <h1 className="font-semibold text-[18px]">Старт</h1>
              <p className="text-center text-[14px]">
                Вы познакомитесь с командой, и мы начнем.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1371px] my-24 relative mx-auto">
        <h1 className="text-[64px] ml-16 font-semibold text-[#1b4bf7]">Свяжитесь с нами</h1>

        <div className="w-[1280px] h-[672px] p-10 shadow-2xl rounded-md my-24 mx-auto">
          <div className="flex w-[944px] h-[494px] mx-auto items-start justify-between">
            <form method="POST" className="space-y-6 w-1/2">
              <h1 className="font-semibold text-2xl">Оставьте нам сообщение</h1>
              <div>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Имя"
                    required
                    autoComplete="name"
                    className="block w-full border-0 p-3.5 rounded-[5px] text-gray-900 shadow-sm ring-1 focus:ring-gray-400 outline-gray-400 ring-gray-300 placeholder:text-gray-400"
                  />
                </div>
              </div>
              <div>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Ваша почта"
                    required
                    autoComplete="email"
                    className="block w-full rounded-[5px] border-0 p-3.5 text-gray-900 shadow-sm ring-1 focus:ring-gray-400 outline-gray-400 ring-gray-300 placeholder:text-gray-400"
                  />
                </div>
              </div>
              <div>
                <div className="mt-2">
                  <textarea
                    required
                    className="h-full min-h-[150px] w-full rounded-[5px] resize-none border outline-none border-gray-300 focus:border-gray-400 px-3 py-2.5 font-normal transition-all"
                    placeholder="Кратко опишите свой проект">
                  </textarea>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-[50%] rounded-[8px] justify-center bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white scale-100 transition-all duration-1000 shadow-sm hover:bg-indigo-500 hover:scale-110"
                >
                  Отправить
                </button>
              </div>
            </form>
            <div className="w-[424px]">
              <ul className="space-y-5 my-12">
                <Link href='https://yandex.com/map-widget/v1/?um=constructor%3A3d9eefa927bd54bcc9e8fa398a73c8cafb60622737263c96ad9341c32c21fa69&source=constructor' className="flex items-center gap-4">
                  <img className="w-6 h-6" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDE0QzEzLjY1NjkgMTQgMTUgMTIuNjU2OSAxNSAxMUMxNSA5LjM0MzE1IDEzLjY1NjkgOCAxMiA4QzEwLjM0MzEgOCA5IDkuMzQzMTUgOSAxMUM5IDEyLjY1NjkgMTAuMzQzMSAxNCAxMiAxNFoiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTcuNjU3IDE2LjY1NjdMMTMuNDE0IDIwLjg5OTdDMTMuMDM5IDIxLjI3NDMgMTIuNTMwNiAyMS40ODQ4IDEyLjAwMDUgMjEuNDg0OEMxMS40NzA0IDIxLjQ4NDggMTAuOTYyIDIxLjI3NDMgMTAuNTg3IDIwLjg5OTdMNi4zNDMgMTYuNjU2N0M1LjIyNDIyIDE1LjUzNzkgNC40NjIzNCAxNC4xMTI0IDQuMTUzNjkgMTIuNTYwNkMzLjg0NTA0IDExLjAwODcgNC4wMDM0OSA5LjQwMDIyIDQuNjA5MDEgNy45Mzg0NEM1LjIxNDUyIDYuNDc2NjUgNi4yMzk5IDUuMjI3MjUgNy41NTU0OCA0LjM0ODIxQzguODcxMDcgMy40NjkxOCAxMC40MTc4IDMgMTIgM0MxMy41ODIyIDMgMTUuMTI4OSAzLjQ2OTE4IDE2LjQ0NDUgNC4zNDgyMUMxNy43NjAxIDUuMjI3MjUgMTguNzg1NSA2LjQ3NjY1IDE5LjM5MSA3LjkzODQ0QzE5Ljk5NjUgOS40MDAyMiAyMC4xNTUgMTEuMDA4NyAxOS44NDYzIDEyLjU2MDZDMTkuNTM3NyAxNC4xMTI0IDE4Ljc3NTggMTUuNTM3OSAxNy42NTcgMTYuNjU2N1YxNi42NTY3WiIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=" alt="adress" />
                  <li>Ташкент, Юнусабадский район, проспект Амира Темура, 129Б</li>
                </Link>
                <Link href='tel:+998336600999' className="flex items-center gap-4">
                  <img className="w-6 h-6" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNiA0SDEwTDEyIDlMOS41IDEwLjVDMTAuNTcxIDEyLjY3MTUgMTIuMzI4NSAxNC40MjkgMTQuNSAxNS41TDE2IDEzTDIxIDE1VjE5QzIxIDE5LjUzMDQgMjAuNzg5MyAyMC4wMzkxIDIwLjQxNDIgMjAuNDE0MkMyMC4wMzkxIDIwLjc4OTMgMTkuNTMwNCAyMSAxOSAyMUMxNS4wOTkzIDIwLjc2MyAxMS40MjAyIDE5LjEwNjUgOC42NTY4MyAxNi4zNDMyQzUuODkzNSAxMy41Nzk4IDQuMjM3MDUgOS45MDA3NCA0IDZDNCA1LjQ2OTU3IDQuMjEwNzEgNC45NjA4NiA0LjU4NTc5IDQuNTg1NzlDNC45NjA4NiA0LjIxMDcxIDUuNDY5NTcgNCA2IDQiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K" alt="phone" />
                  <li>+998 33 66 00 999</li>
                </Link>
                <Link href='mailto:azizbek.b@udevs.io' className="flex items-center gap-4">
                  <img className="w-6 h-6" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5IDVINUMzLjg5NTQzIDUgMyA1Ljg5NTQzIDMgN1YxN0MzIDE4LjEwNDYgMy44OTU0MyAxOSA1IDE5SDE5QzIwLjEwNDYgMTkgMjEgMTguMTA0NiAyMSAxN1Y3QzIxIDUuODk1NDMgMjAuMTA0NiA1IDE5IDVaIiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTMgN0wxMiAxM0wyMSA3IiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==" alt="email" />
                  <li>azizbek.b@udevs.io</li>
                </Link>
                <Link href='https://t.me/azizbekbakhodirov' className="flex items-center gap-4">
                  <FaTelegramPlane className="text-[#1b4bf7] w-6 h-6" />
                  <li className="text-[#1b4bf7] font-semibold">t.me/azizbekbakhodirov</li>
                </Link>
              </ul>
              <div className="flex items-center gap-4">
                <FaYoutube className="text-[#1b4bf7] w-6 h-6 cursor-pointer hover:text-red-600" />
                <FaInstagram className="text-[#1b4bf7] w-6 h-6 cursor-pointer hover:text-red-600" />
                <FaFacebookSquare className="text-[#1b4bf7] w-6 h-6 cursor-pointer hover:text-indigo-400" />
                <FaTwitter className="text-[#1b4bf7] w-6 h-6 cursor-pointer hover:text-indigo-400" />
              </div>
              <div className="my-8">
                <iframe src="https://yandex.com/map-widget/v1/?um=constructor%3Ad160d5d7454ae1d3118e495657f32588322844a344e9c9f4f6aa52d598f72d3c&amp;source=constructor" width="400" height="200" frameBorder="0"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
