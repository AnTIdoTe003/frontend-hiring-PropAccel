'use client'
import star from '../assets/star.svg'

type Props = {
name:string,
description:string,
rating?:number,
company:string,
selected:boolean,
image:string | undefined
}

const TestimonialCard = ({name, description,company,selected,image}: Props) => {
  return (
    <div className={selected?'font-Poppins shadow-2xl rounded-md min-w-[409px] bg-white px-[48px] border-2 pt-[36px] pb-[0px]':'rounded-md min-w-[409px] bg-white px-[48px] py-[36px]'}>
        <div className='w-full h-full flex flex-col gap-3'>
            <div className='flex gap-[1rem]'>
                <div>
                    <img  src={image} alt="" />
                </div>
                <div className='flex flex-col'>
                    <p>{name}</p>
                    <p>{company}</p>
                    <div className='flex'>
                   <img src={star} alt="" />
                   <img src={star} alt="" />
                   <img src={star} alt="" />
                   <img src={star} alt="" />
                   <img src={star} alt="" />
                    </div>
                </div>
            </div>
            <div>
                <p className='text-[12px] font-[400] w-[350px]'>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard