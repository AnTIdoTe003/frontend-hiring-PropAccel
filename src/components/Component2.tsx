import TestimonialCard from "./TestimonialCard";
import lolla from "../assets/lolla.png";
import gray from "../assets/gray.svg";
import arrow from '../assets/arrow.png';
import purple from "../assets/purple.svg";
const Component2 = () => {
  const testiData = [
    {
      name: "Lolla Smith",
      company: "Microsoft",
      rating: 5,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ",
      selected: true,
      image: lolla,
    },
    {
      name: "Lolla Smith",
      company: "Microsoft",
      rating: 5,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ",
      selected: false,
      image: lolla,
    },
    {
      name: "Lolla Smith",
      company: "Microsoft",
      rating: 5,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ",
      selected: false,
      image: lolla,
    },
  ];
  return (
    <div className="font-Poppins  w-full mb-10">
      <div className=" w-full max-w-[1440px] mx-auto">
        <div className="w-full flex flex-col gap-4 pl-[145px]">
          <div className="flex flex-col justify-center items-left">
            <p className="text-[40px] font-[700]">Review from customers</p>
            <p className="w-[399px] text-[12px] font-[400]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry
            </p>
          </div>
          <div className="mb-2 flex gap-8 overflow-hidden pb-2 rounded-md">
            <img className="absolute left-[64.5%] translate-y-[50px]" src={arrow} alt="" />
            {testiData.map((ele) => {
              return (
                <TestimonialCard
                  name={ele.name}
                  company={ele.company}
                  description={ele.description}
                  rating={ele.rating}
                  selected={ele.selected}
                  image={ele.image}
                />
              );
            })}
          </div>
          <div className="flex justify-center items-center gap-2">
            <img src={purple} alt="" />
            <img src={gray} alt="" />
            <img src={gray} alt="" />
            <img src={gray} alt="" />
            <img src={gray} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component2;
