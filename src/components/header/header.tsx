import logo from '../../images/udevs-logo.svg';
import { headerDatas } from './datas';
import { Button } from '@nextui-org/react';
import Image from "next/image";
import Link from "next/link";
import NavigationContent from '../navigationContent/navigationContent';

export default function Header() {
    return (
        <div className="w-full h-[70px] border fixed">
            <div className="max-w-[1180px] h-full mx-auto">
                <div className="flex justify-between w-full h-full items-center">
                    <Link href='/'>
                        <div>
                            <Image className="w-24" src={logo} alt="udevs logo" />
                        </div>
                    </Link>
                    <div>
                        <ul className='flex h-[70px] items-center gap-10 relative'>
                            {headerDatas.map((data) => (
                                <div key={data.id} className='header_list h-[70px] items-center relative'>
                                    <Link href=''>
                                        <li className='header_list_item active flex items-center h-full gap-1 font-medium text-[15px]'>{data.title}{data.icon && data.icon()}</li>
                                    </Link>
                                    <p className='border_element'></p>
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
