import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import React from 'react';

const SearchForm = () => {
    return (
        <div className='w-full bg-gray-200 flex items-center gap-x-2 px-4 rounded-md'>
            <MagnifyingGlassIcon className='w-5 h-5' />
            <input type='text' placeholder='جستجو' className='bg-transparent py-2.5' />
        </div>
    );
};

export default SearchForm;