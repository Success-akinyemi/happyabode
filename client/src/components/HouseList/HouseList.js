import React, { useEffect, useState } from 'react'
import './HouseList.css'
import { ViewHomesData } from '../../data/ViewHomesData'
import { Link } from 'react-router-dom'
import { request } from '../../axios'

function HouseList({cat, filter}) {
    const [houses, setHouses] = useState([]);
    const [filterHouses, setFilterHouses] = useState([]);

    useEffect(() => {
       const getHouses = async ()=> {
        try {
            const res = await request.get(cat ? `/v1/house?location=${cat}` : '/v1/house')
            setHouses(res.data)
        } catch (error) {
         console.log(error)   
        }
       };
       getHouses()
    }, [cat])

    console.log('house>', houses)
    console.log('cat>>', cat)

    useEffect(() => {
        const filteredHouses = houses.filter((item) => {
          return Object.entries(filter).every(([key, value]) => {
            if (key === 'location') {
              return item.location.includes(value);
            }
            if (key === 'price') {
              if (value === '5') {
                return item.price <= 5000000;
              }else if (value === '7'){
                return item.price <= 7000000;
              }else if (value === '10'){
                return item.price <= 10000000;
              }else if (value === '15'){
                return item.price <= 15000000;
              }else if (value === '1'){
                return item.price > 15000000;
              }else {
                return item.price <= parseInt(value, 10);
              }
            }
            return true;
          });
        });
        setFilterHouses(filteredHouses);
      }, [houses, filter]);
    console.log('filter house', filterHouses)

    return (
        <div className="houseList">
          {filterHouses.length > 0 ? (
            filterHouses.map((item) => (
              <div className="card" key={item._id}>
                <img src={item.img} alt={`house ${item._id}`} />
                <div className="content">
                  <h2>{item.title}</h2>
                  <h3>
                    Price (NGN): <span>{item.price}</span>
                  </h3>
                  <p>{item.desc}</p>
                  <h3>Address: {item.address}</h3>
                  <h3>Location: {item.location}</h3>
                  <Link to={`/house/${item._id}`} className="btn">
                    SEE MORE
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div>No houses match the selected filter options.</div>
          )}
        </div>
      );
}

export default HouseList