'use client'

import { useTypewriter } from "react-simple-typewriter";

export function typeWriter() {
    const [text] = useTypewriter({
        words: [
            'Разработка мобильных приложений',
            'Разработка и внедрение ERP систем',
            'UI / UX дизайн',
            'Оптимизация инфраструктуры',
            'IT консалтинг'
        ],
        loop: true,
        delaySpeed: 1500
    })

    return text
}