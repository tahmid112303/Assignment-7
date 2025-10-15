import { Plus } from 'lucide-react';
import React from 'react';

const Nav = () => {
    return (
        <div className='flex justify-between py-2 px-[40px] bg-[white] max-sm:flex-col max-sm:items-start'>
            <div>
                <h1 className='text-[24px] font-bold '>CS — Ticket System</h1>
            </div>

            <div className='flex gap-5 items-center max-sm:flex-col'>
                <ul className='flex gap-5 justify-center items-center max-sm:flex-col '>
                    <li><a href="">Home</a></li>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">Changelog</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Download</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                <button className="btn text-white w-[140px] h-[40px] flex bg-linear-to-r from-[#632EE3] to-[#9F62F2] rounded-[4px]"><Plus></Plus> New Ticket</button>
            </div>
        </div>
    );
};

export default Nav;