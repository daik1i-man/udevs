import Image from "next/image";
import { headerDirectionNavigationDatas, headerPortfolioNavigationDatas } from '../../components/header/datas';
import Link from "next/link";

interface NavigationContentProps {
    title: string
}

export default function NavigationContent({ title }: NavigationContentProps) {
    return (
        <>
            {(title === 'Напрaвление') && (
                <div className="absolute w-80 -right-[95px] rounded-[5px] shadow-sm bg-white border top-14">
                    <div>
                        <p className='text-[12px] text-gray-400 p-4'>{title}</p>
                        <div className="my-2">
                            {headerDirectionNavigationDatas.map((navigateData) => (
                                <Link href=''>
                                    <div className="hover:bg-[#1b5bf7] hover:text-gray-50 mb-4">
                                        <div key={navigateData.id} className="flex items-center w-[270px] mx-auto p-2.5 rounded-md gap-4">
                                            <div>
                                                <Image src={navigateData.img} alt={title} width={50} height={50} />
                                            </div>
                                            <span className="text-[14px]">{navigateData.text}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            {((title === 'Портфолио') && (
                <div className="absolute w-80 -right-[95px] rounded-[5px] shadow-sm bg-white border top-14">
                    <div>
                        <p className='text-[12px] text-gray-400 p-4'>{title}</p>
                        <div className="my-2">
                            {headerPortfolioNavigationDatas.map((navigateData) => (
                                <Link href=''>
                                    <div className="hover:bg-[#1b5bf7] hover:text-gray-50 mb-4">
                                        <div key={navigateData.id} className="flex items-center w-[270px] mx-auto p-2.5 rounded-md gap-4">
                                            <div className="w-12 h-12 bg-gray-200 rounded-full font-bold py-3 px-[18px] text-gray-900">
                                                {navigateData.title.substring(0, 1)}
                                            </div>
                                            <span className="text-[14px] font-medium">{navigateData.title}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}