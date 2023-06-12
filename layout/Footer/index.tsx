import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-primary-900 text-white flex justify-around p-4 items-start'>
            <div>
                <h4 className='font-bold text-lg mb-2'>دسترسی آسان</h4>
                <ul className='flex flex-col gap-y-1 font-medium text-gray-200'>
                    <li>ایفون</li>
                    <li>مک بوک</li>
                    <li>اپل واچ</li>
                    <li>ایرپاد</li>
                </ul>
            </div>
            <div>
                <h4 className='font-bold text-lg mb-2'>فروشگاه اپل توپیا</h4>
                <ul className='flex flex-col gap-y-1 font-medium text-gray-200'>
                    <li>درباره ما</li>
                    <li>تماس باما</li>
                    <li>قوانین</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;