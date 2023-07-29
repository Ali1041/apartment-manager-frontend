import React from 'react'
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import StraightenIcon from '@mui/icons-material/Straighten';
import { Link } from 'react-router-dom';

const ApartmentLV = () => {
    const apartmentList = [
        {
            id: 1,
            title: 'The Central Park North',
            bedrooms: 2,
            bathrooms: 1,
            availability: true,
            capacity: 3,
            amenities: [
                'Carpet',
                'Wifi',
                'Furnished',
                'Air Conditioning',
                'Parking'
            ],
            otherSpaces: [
                'Kitchen',
                'Workspace'
            ],
            rent: 34000,
            pictureUrl: 'src/assets/images/apartImage.jpg'
        },
        {
            id: 2,
            title: 'The Central Park North',
            bedrooms: 2,
            bathrooms: 1,
            availability: true,
            capacity: 3,
            amenities: [
                'Carpet',
                'Wifi',
                'Furnished',
                'Air Conditioning',
                'Parking'
            ],
            otherSpaces: [
                'Kitchen',
                'Workspace'
            ],
            rent: 34000,
            pictureUrl: 'src/assets/images/apartImage.jpg'
        },
        {
            id: 3,
            title: 'The Central Park North',
            bedrooms: 2,
            bathrooms: 1,
            availability: true,
            capacity: 3,
            amenities: [
                'Carpet',
                'Wifi',
                'Furnished',
                'Air Conditioning',
                'Parking'
            ],
            otherSpaces: [
                'Kitchen',
                'Workspace'
            ],
            rent: 34000,
            pictureUrl: 'src/assets/images/apartImage.jpg'
        },
        {
            id: 4,
            title: 'The Central Park North',
            bedrooms: 2,
            bathrooms: 1,
            availability: true,
            capacity: 3,
            amenities: [
                'Carpet',
                'Wifi',
                'Furnished',
                'Air Conditioning',
                'Parking'
            ],
            otherSpaces: [
                'Kitchen',
                'Workspace'
            ],
            rent: 34000,
            pictureUrl: 'src/assets/images/apartImage.jpg'
        },
        {
            id: 5,
            title: 'The Central Park North',
            bedrooms: 2,
            bathrooms: 1,
            availability: true,
            capacity: 3,
            amenities: [
                'Carpet',
                'Wifi',
                'Furnished',
                'Air Conditioning',
                'Parking'
            ],
            otherSpaces: [
                'Kitchen',
                'Workspace'
            ],
            rent: 34000,
            pictureUrl: 'src/assets/images/apartImage.jpg'
        },
        {
            id: 6,
            title: 'The Central Park North',
            bedrooms: 2,
            bathrooms: 1,
            availability: true,
            capacity: 3,
            amenities: [
                'Carpet',
                'Wifi',
                'Furnished',
                'Air Conditioning',
                'Parking'
            ],
            otherSpaces: [
                'Kitchen',
                'Workspace'
            ],
            rent: 34000,
            pictureUrl: 'src/assets/images/apartImage.jpg'
        },
        {
            id: 7,
            title: 'The Central Park North',
            bedrooms: 2,
            bathrooms: 1,
            availability: true,
            capacity: 3,
            amenities: [
                'Carpet',
                'Wifi',
                'Furnished',
                'Air Conditioning',
                'Parking'
            ],
            otherSpaces: [
                'Kitchen',
                'Workspace'
            ],
            rent: 34000,
            pictureUrl: 'src/assets/images/apartImage.jpg'
        },
        {
            id: 8,
            title: 'The Central Park North',
            bedrooms: 2,
            bathrooms: 1,
            availability: true,
            capacity: 3,
            amenities: [
                'Carpet',
                'Wifi',
                'Furnished',
                'Air Conditioning',
                'Parking'
            ],
            otherSpaces: [
                'Kitchen',
                'Workspace'
            ],
            rent: 34000,
            pictureUrl: 'src/assets/images/apartImage.jpg'
        }
    ]
    return (
        <>
            <div className='grid grid-cols-12 gap-4 justify-start'>
                {apartmentList.map((apartment) => (
                    <div key={apartment.id} className='col-span-3 shadow rounded-2xl bg-white h-fit'>
                        <div className='h-40 w-full'>
                            <img className='rounded-2xl h-full w-full object-cover' src={require("../../assets/images/apartImage.jpg")} alt='Apartment' />
                        </div>
                        <Link to={"/apartment/1"}>
                        <div className='p-3'>
                            <strong className='font-extrabold text-lg'>
                                $ 10,000
                            </strong>
                            <p className='text-opacity-75 my-1 text-s'>
                                Address ali jider iftar kray ga
                            </p>
                            <div className='flex gap-4 my-3'>
                                <div className="">
                                    <div className="flex flex-row items-center w-fit bg-slate-100 rounded-md py-1 px-2">
                                        <BedIcon htmlColor='#fb923c' />
                                        <strong className='font-extrabold text-xs ml-2'>2</strong>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="flex flex-row items-center w-fit bg-slate-100 rounded-md py-1 px-2">
                                        <BathtubIcon htmlColor='#22d3ee' />
                                        <strong className='font-extrabold text-xs ml-2'>2</strong>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="flex flex-row items-center w-fit bg-slate-100 rounded-md py-1 px-2">
                                        <StraightenIcon htmlColor='#4ade80' />
                                        <strong className='font-extrabold text-xs ml-2'>60 m<sup>2</sup></strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>
                ))
                }
            </div>
        </>
    )
}


export default ApartmentLV