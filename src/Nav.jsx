import React from 'react';

const Nav = () => {
    return (
        <div className='flex justify-between mt-2 mx-[40px]'>
            <div>
                <h1 className='text-[24px] font-bold'>CS — Ticket System</h1>
            </div>

            <div>
                <ul className='flex gap-5'>
                    <li><a href="">Home</a></li>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">Changelog</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Download</a></li>
                    <li><a href="">Contact</a></li>

                </ul>
            </div>
        </div>
    );
};

export default Nav;