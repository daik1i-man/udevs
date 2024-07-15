import logo from '../../images/udevs-logo.png';
import { headerDatas, headerHrefsProps, headerDatasProps } from './datas';
import { Button } from '@nextui-org/react';
import Image from "next/image";
import Link from "next/link";
import NavigationContent from '../navigationContent/navigationContent';

export default function Header({ services, comand, direction, tools, clients, portfolio }: headerHrefsProps) {

    const hrefs: Record<string, string> = {
        services,
        comand,
        direction,
        tools,
        clients,
        portfolio
    };

    return (
        <div className="w-full h-[70px] z-50 border fixed bg-white">
            <div className="max-w-[1180px] h-full mx-auto">
                <div className="flex justify-between w-full h-full items-center">
                    <Link href='/'>
                        <div>
                            <Image className="w-24" src={logo} alt="udevs logo" />
                        </div>
                    </Link>
                    <div>
                        <ul className='flex h-[70px] items-center gap-10 relative'>
                            {headerDatas.map((data: headerDatasProps) => (
                                <div key={data.id} className='header_list h-[70px] items-center relative'>
                                    {typeof data.href === 'string' ? (
                                        <Link href={data.href}>
                                            <li className={`header_list_item flex items-center h-full gap-1 font-medium text-[15px]`}>
                                                {data.title}
                                                {data.icon && data.icon()}
                                            </li>
                                        </Link>
                                    ) : (
                                        <span className="header_list_item flex items-center h-full gap-1 font-medium text-[15px]">
                                            {data.title}
                                            {data.icon && data.icon()}
                                        </span>
                                    )}
                                    <p className={`border_element ${hrefs[data.title.toLowerCase()] === data.href && 'active'}`}></p>
                                    {(data.title !== "Направление") && (
                                        <div className='navigation_content hidden'>
                                            <NavigationContent title={data.title} />
                                        </div>
                                    )}
                                </div>
                            ))}
                            <Button className='bg-[#1b5bf7] text-gray-50 font-medium scale-100 hover:scale-105'>
                                Связаться
                            </Button>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
