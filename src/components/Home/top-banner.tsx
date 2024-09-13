"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Input } from "@/components/ui/input"


import { Button } from '../ui/button'
import { carBrands } from '../../lib/car-brands'
import { DatePicker, Space } from 'antd'
import dayjs from 'dayjs';
const dateFormat = 'YYYY/MM/DD';
import { Select } from 'antd';

const onChange = (value: string) => {
    console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
    console.log('search:', value);
};

const TopBanner = () => {
    return (
        <div className='relative'>
            <Link href={'/'}>
                <Image
                    src={"/assets/banners/banner-car.jpg"}
                    alt="logo/"
                    height={3000}
                    width={3000}
                    quality={100}

                    priority={true}
                    className="object-fill h-[600px] w-full "
                />
            </Link>

            <div className='absolute inset-14 flex flex-col gap-16 items-center justify-center'>
                <h2 className="header text-center text-secondaryColor w-[70%] shadow-md top-10"> Explore our wide selection of top-quality, budget-friendly vehicles</h2>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-2 items-center justify-center'>


                    <Input type="text" placeholder="Enter Location" className='w-64' />

                    <Select
                        showSearch
                        placeholder="Select Car Brand"
                        optionFilterProp="label"
                        onChange={onChange}
                        onSearch={onSearch}
                        className='w-64  h-9'
                        options={
                            carBrands.map((brand) => ({ label: brand, value: brand }))
                        }
                    />
                    <Space direction="vertical" size={12}>
                        <DatePicker
                            defaultValue={dayjs('2015/01/01', dateFormat)}
                            format={dateFormat}
                            onChange={(date, dateString) => console.log(date, dateString)}
                            className="flex h-9 w-64 rounded-md border border-transparent bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        />
                    </Space>

                    <Button className='text-white font-semibold' variant={'primary'}>
                        Search
                    </Button>
                </div>

            </div>
        </div >
    )
}

export default TopBanner

