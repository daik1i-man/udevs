'use client'

import Header from "@/components/header/header";
import { Image, Button } from "@nextui-org/react";
import { Cursor } from 'react-simple-typewriter'
import { typeWriter } from "./functions/typeWriter";
import { CountUpFunction } from "./functions/countUp";
import { servicesDatas, commandImageUrl } from './datas';
import { hrefs } from "./datas";

export default function Home() {
  const text = typeWriter()
  const counter = CountUpFunction()
  return (
    <div>
      <Header {...hrefs} />
      <div className="max-w-[1150px] py-44 mx-auto flex gap-8 items-center justify-between">
        <div className="w-1/2">
          <Image className="rounded-none my-4" width={267} height={89} src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTY4IiBoZWlnaHQ9IjU2IiB2aWV3Qm94PSIwIDAgMTY4IDU2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2MS40MzIgNDIuNjE5MkMxNjUuNTg0IDQxLjIwMzQgMTY4IDM4LjE4OCAxNjggMzMuNzU2N0MxNjggMzEuNTczNCAxNjcuMjQzIDI5LjU3NzEgMTY1Ljc5IDI3Ljg5MzZDMTYzLjY0MiAyNS4zOTc0IDE2MC4wNDEgMjMuODM2NCAxNTUuMjQzIDIzLjMzNjZDMTUzLjYwNCAyMy4xMzM0IDE0OS40OTQgMjIuNjEwOSAxNDkuNDk0IDIwLjM0MDVDMTQ5LjQ5NCAxNy44MjQ5IDE1Ny42NDkgMTcuMTYwNiAxNTkuNzkgMjAuMDMwOUMxNjAuMzQ4IDIwLjc4ODggMTYwLjM1OCAyMS43MDE1IDE2MC4zNTggMjIuNTg4M0gxNjhDMTY4IDIwLjE5MjEgMTY3LjU4OSAxNy45NzAxIDE2Ni4yMzEgMTUuOTEyNUMxNjQuNjUxIDEzLjQ3NzUgMTYxLjM2NyAxMC42MDcyIDE1NC43OTkgMTAuNjA3MkMxNDkuODExIDEwLjYwNzIgMTQ2LjE0OCAxMS45MTY2IDE0My44NzMgMTQuNDc3M0MxNDIuNzk5IDE1LjY2MDkgMTQxLjYwMSAxNy43MjE3IDE0MS42MDEgMjAuNzE0NkMxNDEuNjAxIDIyLjk2MjUgMTQyLjM1OCAyNC44OTc1IDE0My44NzMgMjYuNTgxQzE0NC45NDcgMjcuNzAzMyAxNDYuMzM4IDI4LjY0MTggMTQ4LjA0MiAyOS4zMjU1QzE0OS43NDYgMzAuMDc2OSAxNTEuODk0IDMwLjU3MzYgMTU0LjM1OCAzMC44MjUyQzE1Ni41MDYgMzEuMDczNSAxNjAuMTY5IDMxLjc2MDQgMTYwLjE2OSAzMy43NTY3QzE2MC4xNjkgMzQuMTMwOCAxNjAuMDQxIDM0Ljc1NjUgMTU5LjAyOSAzNS4yNTMyQzE1Ni45NjYgMzYuMzQzMiAxNTEuMzI2IDM2LjQxNzQgMTQ5LjkzNSAzNC4xMzA4QzE0OS4zNzMgMzMuMjQzOSAxNDkuMjQzIDMyLjEwNTUgMTQ5LjI0MyAzMS4wNzM1TDE0MS42MDEgMzAuOTUwOUMxNDEuNjAxIDM2LjM0IDE0My41NSA0MC42MjI5IDE0OC45MjYgNDIuNTU0N0MxNTIuNDcxIDQzLjk4MzQgMTU3Ljg0MSA0My43OTk2IDE2MS40MzIgNDIuNjE5MlpNODQuNzI2MiAxMS45MzZDNzYuMDM5NyAxNC4xNDg0IDcwLjc3NDMgMjIuOTE0MSA3My4wMTY5IDMxLjQ5MjdDNzUuMjU2MyA0MC4wNzE0IDg0LjEyNTUgNDUuMjczNCA5Mi44MTIgNDMuMDYxQzk5LjY1NzMgNDEuMzAzNCAxMDIuNDI5IDM3LjU5NDYgMTA0LjQ2MiAzMS43NTA3TDk1Ljg3MDcgMzEuMjQxMkM5NC42NDY2IDMzLjI1NjkgOTMuMDc2NCAzNC41NjMgOTAuNzU1NSAzNS4yMDhDODcuNjU0MyAzNS45NzU2IDg0LjAwNDggMzQuNzg1NSA4Mi4yMjI0IDMyLjEwODdMMTA1LjI3MiAyNi40NjgxQzEwNC4yNDcgMTYuNzE4NyA5NC40ODY2IDkuNDQ2MjEgODQuNzI2MiAxMS45MzZaTTkyLjg2NDIgMjAuNjYzQzkzLjc5NzggMjEuMjY5MyA5NC42MjM3IDIxLjk2NTkgOTUuMjM3NCAyMi44NDMxTDgwLjg0MTYgMjYuNDAzNkM4MC45NjI0IDI1LjM0NTggODEuMzYwNiAyNC4zNDYgODEuODUwMyAyMy40NTI3Qzg0LjEwNiAxOS43MzQyIDg5LjA3NDMgMTguNTI0OCA5Mi44NjQyIDIwLjY2M1pNMTMwLjQ4MyAxMS40MTk5TDEyMi4yNzMgMjkuMzlMMTEzLjQzIDExLjQxOTlIMTAzLjEzN0wxMTguOTI3IDQzLjU1NDVIMTI1LjYyMkwxNDAuNzE2IDExLjQxOTlIMTMwLjQ4M1pNNjkuOTE1OCA0My41NTQ1TDY5Ljg1MDUgMEg2MS4wMTA3VjE1LjA5OTdDNTguMTY3NCAxMi43OTA2IDU0LjU2NjggMTEuNDE5OSA1MC41ODc2IDExLjQxOTlDNDEuNjIwNCAxMS40ODEyIDM0LjM1NzIgMTguNzE4MyAzNC40MTkyIDI3LjU4MDdDMzQuNDg0NSAzNi40NCA0MS44MDk3IDQzLjYxNTggNTAuNzc2OSA0My41NTQ1QzU0LjY5NDEgNDMuNTU0NSA1OC4yOTQ3IDQyLjExOTMgNjEuMDcyNyAzOS44NzE1VjQzLjU1NDVINjkuOTE1OFpNNTYuMzk4MSAzMy4wNjk4QzU0Ljg4MzUgMzQuNTY5NSA1Mi44NjI4IDM1LjM3ODkgNTAuNzE0OSAzNS40NDM0QzQ4LjU2NjkgMzUuNDQzNCA0Ni41NDYzIDM0LjYzMDcgNDUuMDMxNiAzMy4xMzQzQzQzLjUxMzcgMzEuNjM0NiA0Mi42OTQ0IDI5LjYzODMgNDIuNjk0NCAyNy41MTYyQzQyLjYzMjMgMjUuMzk3NCA0My41MTM3IDIzLjQ2MjMgNDQuOTY2MyAyMS45MDE0QzQ2LjQ4NDMgMjAuNDA1IDQ4LjUwNDkgMTkuNTkyMyA1MC42NTI5IDE5LjU5MjNDNTIuODAwOCAxOS41OTIzIDU0LjgyMTQgMjAuNDA1IDU2LjMzNjEgMjEuODQwMUM1Ny44NTA4IDIzLjMzNjYgNTguNjczNCAyNS4zMzI5IDU4LjczNTQgMjcuNDU1QzU4LjczNTQgMjkuNTc3MSA1Ny45MTYgMzEuNTczNCA1Ni4zOTgxIDMzLjA2OThaIiBmaWxsPSIjMUQxQTJGIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMS4zNjQ1IDU2VjQ3Ljg3MjlIMjkuODMyOVY1NkgxLjM2NDVaTTAgMjguMTQxOUMwIDQ4LjY3OTEgMzEuMjAwNyA0OC42NzkxIDMxLjIwMDcgMjguMTQxOUMzMS4yMDA3IDIzLjAyMzcgMzEuMjAwNyAxMS4yOTQyIDMxLjIwMDcgMTEuMjk0MkgyMi45ODc2QzIyLjk4NzYgMTYuNzAyNiAyMi45ODc2IDIyLjExMTEgMjIuOTg3NiAyNy41MTYzQzIyLjk4NzYgMzcuOTg0OCA4LjIwOTg1IDM3Ljk4NDggOC4yMDk4NSAyNy41MTYzQzguMjA5ODUgMjIuMTExMSA4LjIwOTg1IDE2LjcwMjYgOC4yMDk4NSAxMS4yOTQySDBDMCAxMS4yOTQyIDAgMjMuMDIzNyAwIDI4LjE0MTlaIiBmaWxsPSIjMUI1QkY3Ii8+Cjwvc3ZnPgo=' alt="udevs logo" />
          <h1 className="text-[40px] font-bold my-7 leading-10 text-[#464359]">IT-Аутсорсинг Компания</h1>
          <div className="my-6 text-2xl">
            <span className="text-[#1b5bf7] text-[40px] leading-10 font-[700]">{text}</span><Cursor cursorColor="#1b5bf7" />
          </div>
          <Button className="bg-[#1b5bf7] my-8 text-gray-50 leading-10 rounded-[8px] scale-100 hover:scale-105 font-medium text-[20px] px-20 py-[30px]">Связаться</Button>
        </div>
        <div className="w-1/2">
          <Image width={547} height={414} src='https://udevs.io/static/hero-304cdf863047286a47c1e063154824d8.svg' alt="services img" />
        </div>
      </div>

      <div id="services" className="w-full h-full">
        <div className="max-w-[1150px] mx-auto">
          <h1 className="text-5xl font-bold text-[#1b5bf7]">Наши услуги</h1>

          <div className="grid grid-cols-3 mt-20 gap-4">
            {servicesDatas.map((data) => (
              <div key={data.id} className="rounded-[8px] p-2 bg-[#f4f7ff] w-[359px] h-[209px]">
                <div>
                  <Image className="w-[35px] h-[35px] m-5" src={data.url} alt={data.title} />
                </div>
                <h2 className="text-xl font-medium mx-5 my-11">{data.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="comand" className="w-full pt-28 my-20 h-screen justify-center bg-[#f4f7ff]">
        <div className="max-w-[1150px] mx-auto">
          <h1 className="text-[64px] font-semibold text-[#1b4bf7]">Выделенная команда</h1>
          <div className="flex items-center justify-between">
            <div className="w-1/2">
              <p className="text-[22px] leading-[1.9] tracking-wide font-medium text-[#464359]">Для каждого проекта мы формируем команду, в которую входят проект менеджер, бизнес-аналитик, UI/UX дизайнер, DevOps, QA-инженер, бэкенд и фронтенд разработчики</p>
              <div className="flex items-center">
                {counter}
                <span className="text-[100px] font-semibold text-[#1b4bf7]">+</span>
              </div>
              <p className="text-[35px] font-bold text-[#464359]">Сотрудников</p>
            </div>
            <div>
              <Image className="w-[500px] h-[419px] " src='https://udevs.io/static/teamIcon-7e3107c853b8ec1d129a87af0e68945a.svg' alt="command section img" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full my-8 h-screen justify-center relative">
        <div className="max-w-[1150px] mx-auto">
          <h1 className="text-[64px] my-16 font-semibold text-[#1b4bf7]">Мобильная разработка</h1>
          <div className="flex items-center justify-between">
            <div className="w-1/2">
              <p className="text-[22px] leading-[1.9] tracking-wide font-medium text-[#464359]">В сотрудничестве со стартапами мы научились создавать творческий и функциональный пользовательский интерфейс для мобильных приложений.</p>


              <div className="flex items-center gap-4 my-12 max-w-full mx-auto">
                <div className="w-36 h-32 rounded-[8px] px-4 py-4 bg-[#f4f7ff]">
                  <Image className="w-12 h-12" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBmaWxsPSIjQzRDNEM0IiBmaWxsLW9wYWNpdHk9IjAuMDEiLz4KPHBhdGggZD0iTTIxLjAwMDMgMTYuMzMzNEMxNC4wMDAzIDE2LjMzMzQgMTEuNjY3IDIzLjMzMzQgMTEuNjY3IDI5LjE2NjdDMTEuNjY3IDM2LjE2NjcgMTYuMzMzNyA0Ni42NjY3IDIxLjAwMDMgNDYuNjY2N0MyMy41MzkgNDYuNTU5NCAyNC45MTggNDUuNSAyOC4wMDAzIDQ1LjVDMzEuMDYxNyA0NS41IDMxLjUwMDMgNDYuNjY2NyAzNS4wMDAzIDQ2LjY2NjdDMzguNTAwMyA0Ni42NjY3IDQ0LjMzMzcgMzkuNjY2NyA0NC4zMzM3IDM1QzQ0LjI2ODMgMzQuOTc2NyAzOC41NjU3IDM0LjA1OTcgMzguNTAwMyAyOEMzOC40NTYgMjIuOTM2NyA0NC4xMzc3IDIxLjEwNzQgNDQuMzMzNyAyMUM0MS45NDY3IDE3LjUxODcgMzcuNDQ4IDE2LjQxOTcgMzYuMTY3IDE2LjMzMzRDMzIuODIzMyAxNi4wNzQ0IDI5LjU2MzcgMTguNjY2NyAyOC4wMDAzIDE4LjY2NjdDMjYuNDEzNyAxOC42NjY3IDIzLjU2NyAxNi4zMzM0IDIxLjAwMDMgMTYuMzMzNFoiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMjggOS4zMzM0MUMyOS4yMzc3IDkuMzMzNDEgMzAuNDI0NyA4Ljg0MTc1IDMxLjI5OTggNy45NjY1OEMzMi4xNzUgNy4wOTE0MSAzMi42NjY3IDUuOTA0NDMgMzIuNjY2NyA0LjY2Njc1QzMxLjQyOSA0LjY2Njc1IDMwLjI0MiA1LjE1ODQxIDI5LjM2NjggNi4wMzM1OEMyOC40OTE3IDYuOTA4NzUgMjggOC4wOTU3NCAyOCA5LjMzMzQxIiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==" alt="apple" />
                  <h3 className="text-xl mt-4 font-semibold">iOS</h3>
                </div>
                <div className="w-36 h-32 rounded-[8px] px-4 py-4 bg-[#f4f7ff]">
                  <Image className="w-12 h-12" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBmaWxsPSIjQzRDNEM0IiBmaWxsLW9wYWNpdHk9IjAuMDEiLz4KPHBhdGggZD0iTTkuMzMzMDEgMjMuMzMzM1YzNy4zMzMzIiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTQ2LjY2NyAyMy4zMzMzVjM3LjMzMzMiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTYuMzMzIDIwLjk5OTlIMzkuNjY2M1YzOS42NjY2QzM5LjY2NjMgNDAuMjg1NCAzOS40MjA1IDQwLjg3ODkgMzguOTgyOSA0MS4zMTY1QzM4LjU0NTMgNDEuNzU0MSAzNy45NTE4IDQxLjk5OTkgMzcuMzMzIDQxLjk5OTlIMTguNjY2M0MxOC4wNDc1IDQxLjk5OTkgMTcuNDU0IDQxLjc1NDEgMTcuMDE2NCA0MS4zMTY1QzE2LjU3ODggNDAuODc4OSAxNi4zMzMgNDAuMjg1NCAxNi4zMzMgMzkuNjY2NlYyMC45OTk5Wk0xNi4zMzMgMjAuOTk5OUMxNi4zMzMgMTcuOTA1NyAxNy41NjIyIDE0LjkzODMgMTkuNzUwMSAxMi43NTAzQzIxLjkzOCAxMC41NjI0IDI0LjkwNTUgOS4zMzMyNSAyNy45OTk3IDkuMzMzMjVDMzEuMDkzOSA5LjMzMzI1IDM0LjA2MTMgMTAuNTYyNCAzNi4yNDkzIDEyLjc1MDNDMzguNDM3MiAxNC45MzgzIDM5LjY2NjMgMTcuOTA1NyAzOS42NjYzIDIwLjk5OTkiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTguNjY3IDdMMjEuMDAwMyAxMS42NjY3IiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTM3LjMzMzMgN0wzNSAxMS42NjY3IiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTIxIDQyVjQ5IiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTM1IDQyVjQ5IiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==" alt="android" />
                  <h3 className="text-xl mt-4 font-semibold">Android</h3>
                </div>
                <div className="w-44 h-32 rounded-[8px] px-4 py-4 bg-[#f4f7ff]">
                  <Image className="w-12 h-12" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTkiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1OSA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjU5IiBoZWlnaHQ9IjU2IiBmaWxsPSIjQzRDNEM0IiBmaWxsLW9wYWNpdHk9IjAuMDEiLz4KPHBhdGggb3BhY2l0eT0iMC4zIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQzLjA2MTMgNy43MjcyNEgyMy40MTc4VjQwLjM0OTNINDMuMDYxM1Y3LjcyNzI0Wk0yMy40MTc4IDVDMjEuODA3OSA1IDIwLjUwMjkgNi4yMjEwNiAyMC41MDI5IDcuNzI3MjRWNDAuMzQ5M0MyMC41MDI5IDQxLjg1NTUgMjEuODA3OSA0My4wNzY2IDIzLjQxNzggNDMuMDc2Nkg0My4wNjEzQzQ0LjY3MTEgNDMuMDc2NiA0NS45NzYxIDQxLjg1NTUgNDUuOTc2MSA0MC4zNDkzVjcuNzI3MjRDNDUuOTc2MSA2LjIyMTA2IDQ0LjY3MTEgNSA0My4wNjEzIDVIMjMuNDE3OFoiIGZpbGw9IiMxQjVCRjciLz4KPHBhdGggZD0iTTYuMzIwMzEgMTcuMzc4MUM2LjMyMDMxIDE0LjM2NTYgOC45MzAzNCAxMS45MjM2IDEyLjE1IDExLjkyMzZIMjYuMzg3OEMyOS42MDc0IDExLjkyMzYgMzIuMjE3NSAxNC4zNjU2IDMyLjIxNzUgMTcuMzc4MVY0NC41NDU3QzMyLjIxNzUgNDcuNTU4IDI5LjYwNzQgNTAuMDAwMSAyNi4zODc4IDUwLjAwMDFIMTIuMTVDOC45MzAzNCA1MC4wMDAxIDYuMzIwMzEgNDcuNTU4IDYuMzIwMzEgNDQuNTQ1N1YxNy4zNzgxWiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4wMSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI2LjM4NzggMTQuNjUwOEgxMi4xNUMxMC41NDAyIDE0LjY1MDggOS4yMzUxNCAxNS44NzE5IDkuMjM1MTQgMTcuMzc4MVY0NC41NDU3QzkuMjM1MTQgNDYuMDUxOCAxMC41NDAyIDQ3LjI3MjkgMTIuMTUgNDcuMjcyOUgyNi4zODc4QzI3Ljk5NzYgNDcuMjcyOSAyOS4zMDI3IDQ2LjA1MTggMjkuMzAyNyA0NC41NDU3VjE3LjM3ODFDMjkuMzAyNyAxNS44NzE5IDI3Ljk5NzYgMTQuNjUwOCAyNi4zODc4IDE0LjY1MDhaTTEyLjE1IDExLjkyMzZDOC45MzAzNCAxMS45MjM2IDYuMzIwMzEgMTQuMzY1NiA2LjMyMDMxIDE3LjM3ODFWNDQuNTQ1N0M2LjMyMDMxIDQ3LjU1OCA4LjkzMDM0IDUwLjAwMDEgMTIuMTUgNTAuMDAwMUgyNi4zODc4QzI5LjYwNzQgNTAuMDAwMSAzMi4yMTc1IDQ3LjU1OCAzMi4yMTc1IDQ0LjU0NTdWMTcuMzc4MUMzMi4yMTc1IDE0LjM2NTYgMjkuNjA3NCAxMS45MjM2IDI2LjM4NzggMTEuOTIzNkgxMi4xNVoiIGZpbGw9IiMxQjVCRjciLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNC4yMDIxIDQ1LjM4NDdIMTQuOTUzMVY0Mi42NTc1SDI0LjIwMjFWNDUuMzg0N1oiIGZpbGw9IiMxQjVCRjciLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNi41NDA0IDI3LjEzNDJDMjUuMjcwMSAyOC44ODc4IDIzLjUwMTYgMzEuMzI4NyAxOS45OTkgMzEuMzI4N1YyOC42MDE1QzIxLjg0MDEgMjguNjAxNSAyMi43OTU1IDI3LjQzOCAyNC4yNDAyIDI1LjQ0ODhDMjQuMjc2NyAyNS4zOTg1IDI0LjMxMzYgMjUuMzQ3NyAyNC4zNTA5IDI1LjI5NjFDMjUuNjIxMiAyMy41NDI2IDI3LjM4OTYgMjEuMTAxNiAzMC44OTIzIDIxLjEwMTZDMzQuMzk0OSAyMS4xMDE2IDM2LjE2MzMgMjMuNTQyNiAzNy40MzM2IDI1LjI5NjFDMzcuNDcxIDI1LjM0NzcgMzcuNTA3OCAyNS4zOTg1IDM3LjU0NDMgMjUuNDQ4OEMzOC45ODkgMjcuNDM4IDM5Ljk0NDQgMjguNjAxNSA0MS43ODU1IDI4LjYwMTVDNDMuNjI2NiAyOC42MDE1IDQ0LjU4MjEgMjcuNDM4IDQ2LjAyNjYgMjUuNDQ4OEM0Ni4wNjMyIDI1LjM5ODUgNDYuMSAyNS4zNDc3IDQ2LjEzNzMgMjUuMjk2MUM0Ny40MDc3IDIzLjU0MjYgNDkuMTc2MSAyMS4xMDE2IDUyLjY3ODcgMjEuMTAxNlYyMy44Mjg4QzUwLjgzNzYgMjMuODI4OCA0OS44ODIyIDI0Ljk5MjMgNDguNDM3NiAyNi45ODE2QzQ4LjQwMTEgMjcuMDMxOCA0OC4zNjQzIDI3LjA4MjcgNDguMzI3IDI3LjEzNDJDNDcuMDU2NSAyOC44ODc4IDQ1LjI4ODIgMzEuMzI4NyA0MS43ODU1IDMxLjMyODdDMzguMjgyOSAzMS4zMjg3IDM2LjUxNDUgMjguODg3OCAzNS4yNDQxIDI3LjEzNDJDMzUuMjA2OCAyNy4wODI3IDM1LjE2OTkgMjcuMDMxOCAzNS4xMzM0IDI2Ljk4MTZDMzMuNjg4OCAyNC45OTIzIDMyLjczMzQgMjMuODI4OCAzMC44OTIzIDIzLjgyODhDMjkuMDUxMSAyMy44Mjg4IDI4LjA5NTcgMjQuOTkyMyAyNi42NTExIDI2Ljk4MTZDMjYuNjE0NiAyNy4wMzE4IDI2LjU3NzcgMjcuMDgyNyAyNi41NDA0IDI3LjEzNDJaIiBmaWxsPSIjMUI1QkY3Ii8+Cjwvc3ZnPgo=" alt="Crossplatform" />
                  <h3 className="text-xl mt-4 font-semibold">Crossplatform</h3>
                </div>
              </div>

              <h1 className="text-[34px] my-4 font-semibold text-[#464359]">Технологии</h1>
              <div className="flex items-center gap-16">
                <div>
                  <Image src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBmaWxsPSIjQzRDNEM0IiBmaWxsLW9wYWNpdHk9IjAuMDEiLz4KPHBhdGggZD0iTTQ3LjI3ODMgMTguMzE5M0M0Ny4yNzggMTcuNDkwNCA0Ny4xOTQ2IDE2LjY2MzcgNDcuMDI5MyAxNS44NTE2QzQ2Ljg2MzkgMTUuMDIwMSA0Ni41ODI4IDE0LjIxNiA0Ni4xOTQxIDEzLjQ2MjdDNDUuNzg4IDEyLjczMyA0NS4yODMyIDEyLjA2MjcgNDQuNjk0IDExLjQ3MDhDNDQuMDg2MyAxMC44NzYzIDQzLjM4MDUgMTAuMzkxMSA0Mi42MDc2IDEwLjAzNjlDNDEuODQ0OSA5LjY1MjI5IDQxLjAyOTEgOS4zODM1NSA0MC4xODcyIDkuMjM5NTJDMzkuMzUyIDkuMDc4NzkgMzguNDM0OSA5LjA3ODc5IDM3LjU5OTcgOUgxNi45OTc4QzE2LjM1NTEgOS4wMTA0NiAxNS43MTM5IDkuMDY0MTYgMTUuMDc4NSA5LjE2MDczQzE0LjQ0NzkgOS4yMzQ5NyAxMy44MzA2IDkuMzk2MTggMTMuMjQ0MiA5LjYzOTc3QzEzLjA3NzIgOS43MTg1NiAxMi44MjgyIDkuODAwNSAxMi42NjEyIDkuODc5MjlDMTIuMTA2NCAxMC4xNzY3IDExLjU3OTEgMTAuNTIyNiAxMS4wODU0IDEwLjkxM0MxMC45MTg0IDExLjA3MzcgMTAuNzUxMyAxMS4xNTI1IDEwLjU4NDMgMTEuMzEwMUM5Ljk3MDA4IDExLjg3OTggOS40NjIxMSAxMi41NTQzIDkuMDg0MTUgMTMuMzAxOUM4LjY3MTM5IDE0LjA0NDcgOC4zODg5MiAxNC44NTI3IDguMjQ4OTggMTUuNjkwOEM4LjEyNDc4IDE2LjUwODcgOC4wNDE2OCAxNy4zMzIzIDggMTguMTU4NVYzNy4xOTFDOC4wMDAyNiAzOC4wMTk4IDguMDgzNjcgMzguODQ2NSA4LjI0ODk4IDM5LjY1ODdDOC40MTQzNiA0MC40OTAxIDguNjk1NDkgNDEuMjk0MiA5LjA4NDE1IDQyLjA0NzZDOS40OTAzMiA0Mi43NzczIDkuOTk1MTIgNDMuNDQ3NSAxMC41ODQzIDQ0LjAzOTRDMTEuMTkyIDQ0LjYzNCAxMS44OTc4IDQ1LjExOTEgMTIuNjcwNyA0NS40NzM0QzEzLjQzMzQgNDUuODU4IDE0LjI0OTEgNDYuMTI2NyAxNS4wOTExIDQ2LjI3MDdDMTUuOTI2MyA0Ni40MzE0IDE2Ljg0MzQgNDYuNDMxNCAxNy42Nzg1IDQ2LjUxMDJIMzcuNjAyOUMzOC40NzA5IDQ2LjUwOTYgMzkuMzM3IDQ2LjQyOTQgNDAuMTkwNCA0Ni4yNzA3QzQxLjAzMjMgNDYuMTI2NyA0MS44NDgxIDQ1Ljg1OCA0Mi42MTA4IDQ1LjQ3MzRDNDMuMzY3MSA0NS4wOTA2IDQ0LjA2ODggNDQuNjA4NCA0NC42OTcxIDQ0LjAzOTRDNDUuMzExNCA0My40Njk3IDQ1LjgxOTMgNDIuNzk1MiA0Ni4xOTczIDQyLjA0NzZDNDYuNjEgNDEuMzA0OCA0Ni44OTI1IDQwLjQ5NjggNDcuMDMyNSAzOS42NTg3QzQ3LjE1NjcgMzguODQwOCA0Ny4yMzk4IDM4LjAxNzIgNDcuMjgxNCAzNy4xOTFWMTguMzE5M0g0Ny4yNzgzWiIgZmlsbD0iI0YwNTEzOCIvPgo8cGF0aCBkPSJNMzQuMjUyOSAzNy45OTc5QzMwLjc1MTUgMzkuOTI5OCAyNS45MzkgNDAuMTI4NCAyMS4wOTUgMzguMTQ2QzE3LjMxODIgMzYuNjEzNiAxNC4wODkgMzMuOTgxNyAxMS44MjYyIDMwLjU5MTZDMTIuODc3OCAzMS4zOTY2IDE0LjAyNjcgMzIuMDY1OCAxNS4yNDU2IDMyLjU4MzVDMjAuMjQ3MiAzNC44MjExIDI1LjI0NTYgMzQuNjY2NyAyOC43NjYgMzIuNTgzNUMyMy43NTQ5IDI4LjkwODcgMTkuNTAwMyAyNC4xMzA5IDE2LjMyOTggMjAuMjI5MkMxNS43MDQxIDE5LjU2OTggMTUuMTQ1NyAxOC44NDk4IDE0LjY2MjYgMTguMDc5OEMxOC40OTQ5IDIxLjQyMzcgMjQuNTkwMSAyNS42NDM2IDI2Ljc1ODQgMjYuODM4MUMyMy42NjI1IDIzLjY2NiAyMC44MTc1IDIwLjI1ODMgMTguMjQ5MSAxNi42NDU5QzIyLjUxODYgMjAuNzk0OSAyNy4yMTY3IDI0LjQ3ODcgMzIuMjY0MiAyNy42MzU1QzMyLjQ4OCAyNy43NTUyIDMyLjY2MTMgMjcuODU2MSAzMi44IDI3Ljk1MDZDMzIuOTQ4IDI3LjU4OTQgMzMuMDc1MyAyNy4yMjAxIDMzLjE4MTQgMjYuODQ0NEMzNC4zNTA2IDIyLjc4MiAzMy4wMTQzIDE4LjE2NDkgMzAuMDk1OSAxNC4zNDJDMzYuODUzIDE4LjI0MDYgNDAuODcxMiAyNS41NjQ5IDM5LjE4ODMgMzEuNjk3OUMzOS4xNDQyIDMxLjg2NDkgMzkuMDk2OSAzMi4wMTMgMzkuMDQ2NSAzMi4xODYzTDM5LjEwNjMgMzIuMjU1N0M0Mi40NDM5IDM2LjIzNjEgNDEuNTI2OCA0MC40NDk4IDQxLjEwNzYgMzkuNjYxOUMzOS4yOTU0IDM2LjI2NDUgMzUuOTQ1MyAzNy4zMTQgMzQuMjUyOSAzNy45OTc5WiIgZmlsbD0iI0ZFRkVGRSIvPgo8L3N2Zz4K" alt="Swift" />
                  <h2 className="text-xl font-semibold">Swift</h2>
                </div>
                <div>
                  <Image src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBmaWxsPSIjQzRDNEM0IiBmaWxsLW9wYWNpdHk9IjAuMDEiLz4KPHBhdGggZD0iTTMwLjA3NDYgMTBMMTIgMjkuMDA3N1Y0NkwzMC4wNDg3IDI3LjkxOTZMNDggMTBIMzAuMDc0NloiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KPHBhdGggZD0iTTEyIDQ1Ljk5OTdMMzAuMDQ4NyAyNy45MTk3TDQ4IDQ1Ljk5OTdIMTJaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXIpIi8+CjxwYXRoIGQ9Ik0xMiAxMEgzMC4wNzQ2TDEyIDI5LjAwNzdWMTBaIiBmaWxsPSJ1cmwoI3BhaW50Ml9saW5lYXIpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSI1LjkzOTA0IiB5MT0iNDMuMDk4NCIgeDI9IjM5LjQzODkiIHkyPSI5LjU5ODI0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIG9mZnNldD0iMC4xMDgiIHN0b3AtY29sb3I9IiNDNzU3QkMiLz4KPHN0b3Agb2Zmc2V0PSIwLjE3MyIgc3RvcC1jb2xvcj0iI0NENUNBOSIvPgo8c3RvcCBvZmZzZXQ9IjAuNDkyIiBzdG9wLWNvbG9yPSIjRTg3NDRGIi8+CjxzdG9wIG9mZnNldD0iMC43MTYiIHN0b3AtY29sb3I9IiNGODgzMTYiLz4KPHN0b3Agb2Zmc2V0PSIwLjgyMyIgc3RvcC1jb2xvcj0iI0ZGODkwMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXIiIHgxPSIyMy40ODkyIiB5MT0iNTIuNDk0NyIgeDI9IjM5LjgxNzYiIHkyPSIzNi4xNjYzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIG9mZnNldD0iMC4yOTYiIHN0b3AtY29sb3I9IiMwMEFGRkYiLz4KPHN0b3Agb2Zmc2V0PSIwLjY5NCIgc3RvcC1jb2xvcj0iIzUyODJGRiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM5NDVERkYiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDJfbGluZWFyIiB4MT0iLTE1LjEzIiB5MT0iNjY1Ljc4NSIgeDI9IjczOS45MDgiIHkyPSItNTIuMjA0NyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBvZmZzZXQ9IjAuMjk2IiBzdG9wLWNvbG9yPSIjMDBBRkZGIi8+CjxzdG9wIG9mZnNldD0iMC42OTQiIHN0b3AtY29sb3I9IiM1MjgyRkYiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOTQ1REZGIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==" alt="Swift" />
                  <h2 className="text-xl font-semibold">Kotlin</h2>
                </div>
                <div>
                  <Image src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMxLjg2MDUgMTBMMTQgMjcuOTA1MkwxOS41MjgyIDMzLjQ0NzJMNDIuOTE3IDEwSDMxLjg2MDVaIiBmaWxsPSIjNDdDNUZCIi8+CjxwYXRoIGQ9Ik0zMS43MzU5IDI2LjUxMTJMMjIuMTcyOSAzNi4wOTgyTDI3LjcyMTggNDEuNzQ0MUwzMy4yMzk4IDM2LjIxMjRMNDIuOTE2OCAyNi41MTEySDMxLjczNTlaIiBmaWxsPSIjNDdDNUZCIi8+CjxwYXRoIGQ9Ik0yNy43MjE3IDQxLjc0MzdMMzEuOTIyMyA0NS45NTQ4SDQyLjkxNjZMMzMuMjM5NSAzNi4yMTE5TDI3LjcyMTcgNDEuNzQzN1oiIGZpbGw9IiMwMDU2OUUiLz4KPHBhdGggZD0iTTIyLjExMDQgMzYuMTYwNUwyNy42Mzg3IDMwLjYxODRMMzMuMjM5NCAzNi4yMTI0TDI3LjcyMTUgNDEuNzQ0MkwyMi4xMTA0IDM2LjE2MDVaIiBmaWxsPSIjMDBCNUY4Ii8+CjxwYXRoIGQ9Ik0yNy43MjE3IDQxLjc0NEwzMi4zMTY0IDQwLjIxNTVMMzIuNzcyOCAzNi42ODAyTDI3LjcyMTcgNDEuNzQ0WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIgZmlsbC1vcGFjaXR5PSIwLjgiLz4KPHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBmaWxsPSIjQzRDNEM0IiBmaWxsLW9wYWNpdHk9IjAuMDEiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjI3LjkyMTMiIHkxPSIzOC4wNDcxIiB4Mj0iMzEuNTU3NCIgeTI9IjM5LjM1NDEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3AvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3Atb3BhY2l0eT0iMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=" alt="Swift" />
                  <h2 className="text-xl font-semibold">Flutter</h2>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image className="absolute top-0 right-0 left-0 bottom-0 w-[500px] h-[473px] " src='https://udevs.io/static/mobile_dev-6180df87085fd146c501a19e6156fbd2.png' alt="command section img" />
              <Image className="object-cover w-full h-full" src="https://udevs.io/static/bg_pattern-bfa00f19a06604ab492274cd3d9ea5cf.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
