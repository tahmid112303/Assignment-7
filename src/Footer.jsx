import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';
import React from 'react';

const Footer = () => {
    return (
        <>
            <div className='mt-[1600px] bg-black h-[460px] w-full flex text-white gap-4 px-6 pt-8 max-sm:flex-col max-sm:h-auto'>
            <div className='w-[250px] h-[350px] mr-16'>
                <h1 className='text-[24px] font-bold'>CS — Ticket System</h1> <br />
                <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>


            <div className='w-[250px] h-[350px]'>
                <h1 className='text-2xl'>Company</h1><br />
                <p>About Us</p><br />
                <p>Our Mission</p><br />
                <p>Contact Saled</p><br />
            </div>


            <div className='w-[250px] h-[350px]'>
            <h1 className='text-2xl'>Services</h1><br />
                <p>Products & Services</p><br />
                <p>Customer Stories</p><br />
                <p>Download Apps</p><br />
            </div>


            <div className='w-[250px] h-[350px]'>
            <h1 className='text-2xl'>Informtion</h1><br />
                <p>Privacy Policy</p><br />
                <p>Terms & Conditions</p><br />
                <p>Join Us</p><br />
            </div>


            <div className='w-[250px] h-[350px]'>
            <h1 className='text-2xl'>Social Links</h1><br />
                <p className='flex gap-2'><Instagram className='cursor-pointer'></Instagram><span>@CS — Ticket System</span></p><br />
                <p className='flex gap-2'><Linkedin className='cursor-pointer'></Linkedin><span>@CS — Ticket System</span></p><br />
                <p className='flex gap-2'><Facebook className='cursor-pointer'></Facebook><span>@CS — Ticket System</span></p><br />
                <p className='flex gap-2'><Mail className='cursor-pointer'></Mail><span>support@cst.com</span></p><br />
            </div>
        </div>

        
        <div className='bg-black text-white text-center pb-4 max-sm:text-left max-sm:pl-2'>
            <p>© 2025 CS — Ticket System. All rights reserved.</p>
        </div>
        </>
    );
};

export default Footer;