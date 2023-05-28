import { Card, Divider, Grid } from '@mui/material'
import Loader from 'components/Loader'
import MDBadge from 'components/MDBadge'
import MDBox from 'components/MDBox'
import React, { useState } from 'react'
import TransactionVolumeChart from "components/Chart";
import TransactionVolumeBarChart from 'components/BarChart'
import TransactionVolumeLineBarAreaChart from 'components/LineBarChart'
import TransactionVolumeComposedChart from 'components/LineBarChart'
import TransactionVolumeAreaChart from 'components/AreaChart'

function Analaytics() {
    const [selectedChart,setSelectedChart]=useState("etherBalance")
  return (
    <div>
         <Grid sx={{ borderBottom: "1px solid #e9e9f5", pb: 1.5 }}>
            <MDBox sx={{ pl: 2 }}>
              <MDBadge
                badgeContent="Ether Balance"
                size="md"
                container
                 color={selectedChart === "etherBalance" ? null : "light"}
                sx={{ mr: 1, mt: 1, cursor:"pointer"}}
                onClick={() => setSelectedChart('etherBalance')}
              />
              <MDBadge
                badgeContent="Transactions"
                color={selectedChart === "transaction" ? null : "light"}
                onClick={() => setSelectedChart('transaction')}
                container
                sx={{ mr: 1, mt: 1, cursor:"pointer"}}
              />
              <MDBadge
                badgeContent="TxnFees"
                color={selectedChart === "TxnFees" ? null : "light"}
                container
            
                onClick={() => setSelectedChart('TxnFees')}
                sx={{ mr: 1, mt: 1, cursor:"pointer"}}
              />
              <MDBadge
                badgeContent="Ether Transfer"
                color={selectedChart === "etherTransfer" ? null : "light"}
                container
                onClick={() => setSelectedChart('etherTransfer')}
                sx={{ mr: 1, mt: 1, cursor:"pointer"}}
              />
             
            </MDBox>
            <h3 style={{paddingLeft:"23px"}}>Time Series: {selectedChart}</h3>
            <hr/>
          </Grid>
          <MDBox mb={3}>
            <Card>
            
            {selectedChart === "etherBalance" ? <TransactionVolumeChart/>:null}
            {selectedChart === "transaction" ? <TransactionVolumeBarChart/>:null}
            {selectedChart === "TxnFees" ? <TransactionVolumeComposedChart/>:null}
            {selectedChart === "etherTransfer" ? <TransactionVolumeAreaChart/>:null}
              {/* {loading ? (
                <Loader />
              ) : selectedTable === 'info' ? <MDCard firstBlockHeader="OVERVIEW" firstBlockData="USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.
              ">
              </MDCard> : (
                selectedTable==="analaytics"? <div>
                <h1>Transaction Volume Over Time</h1>
                <TransactionVolumeChart />
              </div>:
                <DataTable table={{ columns: showColumns(), rows: data[selectedTable] ?? [] }} />
              )} */}
             
            </Card>
          </MDBox> 
    </div>
  )
}

export default Analaytics