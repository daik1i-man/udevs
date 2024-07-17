import developMobileApps from '../images/develop-mobile-apps.svg'
import erpSystem from '../images/erp-system.svg'
import design from '../images/UX-UI-design.svg'
import consulting from '../images/IT-consulting.svg'
import optimization from '../images/optimization.svg'
import { ReactNode } from 'react';
import { icon } from '../components/header/icon';

export interface headerDatasProps {
    id: number,
    title: string,
    href: string,
    icon: (() => ReactNode) | null
}

export interface headerHrefsProps {
    services: string,
    comand: string,
    direction: string,
    tools: string,
    clients: string,
    portfolio: string,
    [key: string]: string;
}



export const headerDatas: headerDatasProps[] = [
    {
        id: 1,
        title: "Услуги",
        href: "#services",
        icon: null
    },
    {
        id: 2,
        href: "#comand",
        title: "Команда",
        icon: null
    },
    {
        id: 3,
        href: "#direction",
        title: "Напрaвление",
        icon: icon
    },
    {
        id: 4,
        href: "#tools",
        title: "Инструменты",
        icon: null
    },
    {
        id: 5,
        href: "#client",
        title: "Клиенты",
        icon: null
    },
    {
        id: 6,
        href: "#portfolio",
        title: "Портфолио",
        icon: icon
    }
]


export interface navigationContentProps {
    title: string,
    direction: {
        title: string,
        id: number,
        img: HTMLImageElement,
        text: string
    },
    portfolio: {
        id: number,
        title: string
    }
}

export type DirectionType = navigationContentProps['direction']
export type PortfolioType = navigationContentProps['portfolio']

export const headerDirectionNavigationDatas: DirectionType[] = [
    {
        title: "Напрaвление",
        id: 1,
        img: developMobileApps,
        text: "Разработка мобильных приложений",
    },
    {
        title: "Напрaвление",
        id: 2,
        img: erpSystem,
        text: "Разработка и внедрение ERP систем",
    },
    {
        title: "Напрaвление",
        id: 3,
        img: design,
        text: "UI / UX дизайн",
    },
    {
        title: "Напрaвление",
        id: 4,
        img: consulting,
        text: "IT консалтинг",
    },
    {
        title: "Напрaвление",
        id: 5,
        img: optimization,
        text: "Оптимизация инфраструктуры",
    }
]

export const headerPortfolioNavigationDatas: PortfolioType[] = [
    {
        id: 1,
        title: "Delever"
    },
    {
        id: 2,
        title: "Sms.uz"
    },
    {
        id: 3,
        title: "Goodzone"
    },
    {
        id: 4,
        title: "Iman"
    }
]