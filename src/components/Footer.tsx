'use client'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twiiter.svg'
import youtube from '../assets/youtube.svg'


const Footer = () => {
  return (
    <div className='font-Poppins w-full bg-footer-bg bg-no-repeat bg-cover pt-[81px] pb-5'>
        <div className='w-full container max-w-[1440px] mx-auto'>
            <div className='w-full flex flex-col justify-center items-center gap-5'>
                <div className='flex flex-col justify-center items-center gap-[64px]'>
                    <p className='body-font font-Poppins text-[32px] font-[700]'>We have what you’re looking for</p>
                    <p className='text-blue-500 text-[12px] font-[400] w-[596px] text-center font-Poppins body-font'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type a</p>
                </div>
                <div>
                    <button className=' text-[20px] font-[700] w-[237px] h-[60px] text-white rounded-md bg-linear-grad'>Get Started Now</button>
                </div>
                {/* Sub Footer */}
                <div className="mt-[91px] py-2 text-white w-[80%] mx-auto border-t-2 flex justify-between items-center">
                    <div className='py-5'>
                        <p>All Right Reserved @Copyright 2023</p>
                    </div>
                    <div className='flex gap-10'>
                        <div className='flex gap-3'>
                            <p>Terms of Service</p>
                            <p>Privacy Policy</p>
                            <p>Product</p>
                        </div>
                        <div className='flex gap-3'>
                            <img src={facebook} alt="" />
                            <img src={youtube} alt="" />
                            <img src={instagram} alt="" />
                            <img src={twitter} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer