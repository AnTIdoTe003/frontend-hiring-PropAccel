'use client'

import Card1 from "./Card1"

const Component1 = () => {
  const cardData = [
    {
      heading:"Basic Plan",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting",
      price:"54",
      points:[
        {
          point:"Free access to video class"
        },
        {
          point:"Free access to video class"
        },
        {
          point:"Free access to video class"
        }
      ],
      bg:"white"
    },{
      heading:"Premium  Plan",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting",
      price:"54",
      points:[
        {
          point:"Free access to video class"
        },
        {
          point:"Free access to video class"
        },
        {
          point:"Free access to video class"
        }
      ],
      bg:"bg-purple-900"
    },{
      heading:"Basic Plan",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting",
      price:"54",
      points:[
        {
          point:"Free access to video class"
        },
        {
          point:"Free access to video class"
        },
        {
          point:"Free access to video class"
        }
      ],
      bg:"white"
    }
  ]
  return (
    <div className="bg-components-bg w-full h-full mb-[95px]">
      <div className="container w-full h-full max-w-[1440px] mx-auto">
        <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="flex flex-col gap-[1rem] pb-5">
        <p className="text-center text-[32px] font-[700]">Choose your plan</p>
        <p className="text-center text-[14px] font-[400] w-[455px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
      </div>
      <div className="bg-white shadow-md mb-8 p-2 px-2 rounded-lg flex gap-2">
        <button className="bg-violet-200 w-[88px] h-[35px] pb-2 pt-1 font-[600] rounded-lg">monthly</button>
        <button>yearly</button>
      </div>
      <div className="flex flex-wrap gap-8">
        {
          cardData.map((ele,i)=>{
            return(
              <Card1 key={i} heading={ele.heading} bg={ele.bg} description={ele.description} price={ele.price} points={ele.points} />
            )
          })
        }
      </div>
        </div>
      </div>
    </div>
  )
}

export default Component1