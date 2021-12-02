import React, { useState, useEffect } from "react";
import axios from "axios";
import '../App.css';


function BroadbandDeals() {

    const [broadbandDeals, setbroadbandDeals] = useState([])

    async function fetchBroadbandDeals() {

        try {
            const { data } = await axios.get('https://6177b8b59c328300175f5adc.mockapi.io/api/test/deals')
            setbroadbandDeals(data.deals)
            console.log(broadbandDeals)

        } catch (error) {
            console.log(error)
            alert('Error fetching broadband deals')
        }
    }

    useEffect(() => {
        fetchBroadbandDeals()
    }, [])

    return (
        <div className='dealsContainer'>
            {broadbandDeals.map((deals) => (
                <div className='container'>
                    <div className='companyName'>
                        <img src={deals.provider_logo_image_url} alt='logo' style={{ width: '4%' }}></img>
                        <div className='companyInfo'>
                            <div>{deals.provider_name}</div>
                            <div>{deals.deal_name}</div>
                        </div>
                    </div>
                    <div className='price'>
                        <div>£{deals.monthly_price}</div>
                        <div>Monthly Cost</div>
                    </div>
                </div>

            ))}
        </div>
    )
}

export default BroadbandDeals