/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
type Props = {
heading: string,
description: string,
price:string,
bg:string,
key:number,
points:{
point:string,
}[]
}

const Card1 = ({heading,description,price,bg,points}: Props) => {
    console.log(bg)
  return (
   <div  className={`w-[303px] h-[357px] ${bg}  border-2 border-purple-100 rounded-md`}>
   <div className="p-4 w-full h-full flex flex-col gap-5">
    <p className={bg==="bg-purple-900"?"text-[16px] font-[700] text-white":""}>{heading}</p>
    <p className={bg==="bg-purple-900"?"text-[12px] font-[400] text-white":""}>{description}</p>
    <p className={bg==="bg-purple-900"?"text-[12px]  text-white":""}><span className={bg==="bg-purple-900"?"text-[18px] font-[700] text-white":""}
>$ {price}</span> /month</p>
    <div>
    {
        points.map((ele)=>{
            return(
                <p  className={bg==="bg-purple-900"?"text-[16px] font-[700] text-white":""}
                >
                    {ele.point}
                </p>
            )
        })
    }
    </div>
    <button className="bg-white border-2 border-purple-200 text-purple-500 font-[300] rounded-md w-[106px] h-[38px]">Start free trail</button>
   </div>
   </div>
  )
}

export default Card1