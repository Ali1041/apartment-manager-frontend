import { HomeOutlined, ApartmentRounded, HouseRounded, ListAltRounded, LogoutRounded, } from "@mui/icons-material";

export const menuList = [
    {
        name: 'Home',
        path: '/',
        icon: <HomeOutlined />
    },
    {
        name: 'Apartment',
        path: '/apartment',
        icon: <ApartmentRounded />
    },
    {
        name: 'My Apartment',
        path: '/apartment/:id',
        icon: <HouseRounded />
    },
    {
        name: 'Grocery',
        path: '/grocery',
        icon: <ListAltRounded />
    },
    {
        name: 'Logout',
        path: '/logout',
        icon: <LogoutRounded />
    }
]