import React from 'react';
const Services = () => {
    const servicesData = [
        {
            id:'1',
            name: 'MERN STACK DEVELOPMENT',
            img:'https://i.ibb.co/0fSL3Z2/Mask-group.png'
        },
        {
            id:'2',
            name: 'Front End Development',
            img:'https://i.ibb.co/vYRmy47/Group-552.png'
        },
        {
            id:'3',
            name: 'Web Development',
            img:'https://i.ibb.co/qFyrkGD/web-2.png'
        },
        {
            id:'4',
            name: 'React JS Development',
            img:'https://i.ibb.co/sqFZGTk/wp4923992.png'
        },
        {
            id: '5',
            name: 'UI/UX Design',
            img:'https://i.ibb.co/NsmhBfH/5110594-1.png'
        }
    ]
    return (
        <div className='my-20'>
          <h2 className='font-semibold'>what I serves</h2> 
            <h2 className='text-3xl font-bold'>My Services</h2>  
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mt-6' data-aos="flip-left">
                {
                    servicesData.map(data =>
                        <div key={data.id} className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src={data.img} alt="topics" /></figure>
  <div className="card-body  items-center text-center justify-center">
    <h2 className="card-title">{data.name}</h2>
    
   
  </div>
</div>)
           }
            </div>
        </div>
    );
};

export default Services;