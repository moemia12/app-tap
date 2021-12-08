import React, { useState, useEffect } from "react";

import axios from "axios";
import '../App.css';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">

                    <TableBody  >
                        {broadbandDeals.map((deals) => (
                            <TableRow key={deals.deal_id} style={style.tableContainer} >
                                <TableCell component="th" scope="deals" style={style.container}>
                                    <img src={deals.provider_logo_image_url} alt='logo' style={{ width: '15%' }}></img>

                                    <div style={style.title}>
                                        <h3><strong>{deals.provider_name}</strong></h3>
                                        {deals.deal_name}
                                    </div>
                                </TableCell>

                                <TableCell style={style.item}>
                                    <strong>£{deals.monthly_price}</strong>
                                    <br />Monthly Cost
                                </TableCell>
                                <TableCell style={style.item}>
                                    {deals.internet_speed}Mbps
                                    <br />Standard Speed
                                </TableCell>
                                <TableCell style={style.item}>
                                    £{deals.set_up_cost}
                                    <br/>Setup Cost
                                    </TableCell>
                                <TableCell style={style.item}>
                                    <strong>{deals.contract_info}</strong>
                                    <br/>Contract Length
                                    </TableCell>
                                <Button style={{ marginBottom: 90, border: '1px solid #0096FF', marginRight: 10, right: 190 }}>Add to Compare</Button>
                                <Button style={{ marginBottom: 90, backgroundColor: '#0096FF', color: 'white', right: 160 }}>More Info</Button>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}

const style = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 65

    },
    title: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        justifyContent: 'space-evenly'
    },
    item: {
        position: 'relative',
        right: '15rem',
        textAlign: 'center'
    }

}

export default BroadbandDeals