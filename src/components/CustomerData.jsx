import art from '../images/art.jpg'
import cleaning from '../images/cleaning.png'
import homeservice from '../images/homeservice.png'
import khanm from '../images/khanm.jpg'
import nali from '../images/nali.jpg'
import clothes from '../images/clothes.jpg'
import { AiFillStar } from 'react-icons/Ai'


const redStar = <AiFillStar size={30} style={{ color: '#E12424' }} />;
const grayStar = <AiFillStar size={30} style={{ color: '#C2ACAC' }} />;


export const CustomerData=[
    {
      id:1,
        title:'Khanm Hand made',
        address:' Sulaymany, Chwarbax,',
        phone:'+964 770 123 1234',
        redStar: redStar,
        graystar:grayStar,
        imgSrc:khanm,
    },
    {
        id: 2,
        title: 'Nali Restaurant',
        address: ' Sulaymany, Chwarbax,',
        phone: '+964 770 123 1234',
        redStar: redStar,
        graystar: grayStar,
        imgSrc: nali,
    },
    {
        id: 3,
        title: 'Sherwan & Karwan',
        address: ' Sulaymany, Chwarbax,',
        phone: '+964 770 123 1234',
        redStar: redStar,
        graystar: grayStar,
        imgSrc: clothes,
    },
    {
        id: 4,
        title: 'Ruxas Cleaning ',
        address: ' Sulaymany, Chwarbax,',
        phone: '+964 770 123 1234',
        redStar: redStar,
        graystar: grayStar,
        imgSrc: cleaning,
    },
    {
        id: 5,
        title: 'Soze Art',
        address: ' Sulaymany, Chwarbax,',
        phone: '+964 770 123 1234',
        redStar: redStar,
        graystar: grayStar,
        imgSrc: art,
    },
    {
        id: 6,
        title: 'Shkar Services',
        address: ' Sulaymany, Chwarbax,',
        phone: '+964 770 123 1234',
        redStar: redStar,
        graystar: grayStar,
        imgSrc: homeservice,
    }, 
]