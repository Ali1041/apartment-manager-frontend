import React from 'react'
import { HOC } from '../../components/HOC';


const ApartmentDetail = () => {
    const imageList = [

    ]
    return (
        <HOC>
            <div className='grid grid-cols-12 gap-5 justify-evenly'>
                <div className='col-span-5 rounded-lg'>
                    <div>
                        <img className='w-100 h-3/4 rounded-lg' src={require("../../assets/images/apartImage.jpg")} alt='Apartment' />
                    </div>
                    <div className='flex flex-row overflow-x-scroll my-2'>
                        <div>
                            <img className='w-1/4 h-full rounded' src={require("../../assets/images/apartImage.jpg")} alt='Apartment' />
                        </div>
                        <div>
                            <img className='w-1/4 h-full rounded' src={require("../../assets/images/apartImage.jpg")} alt='Apartment' />
                        </div>
                        <div>
                            <img className='w-1/4 h-full rounded' src={require("../../assets/images/apartImage.jpg")} alt='Apartment' />
                        </div>
                        <div>
                            <img className='w-1/4 h-full rounded' src={require("../../assets/images/apartImage.jpg")} alt='Apartment' />
                        </div>
                        <div>
                            <img className='w-1/4 h-full rounded' src={require("../../assets/images/apartImage.jpg")} alt='Apartment' />
                        </div>
                    </div>
                </div>
                <div className='col-span-7 rounded-lg bg-slate-200'>
                    Information
                </div>
            </div>
        </HOC>

    )
}
export default ApartmentDetail