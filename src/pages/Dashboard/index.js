import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import LogoImage from "assets/images/marie.jpg";
import SalesByCountry from "./components/SalesByCountry/";
import Navbar from "components/Navbar";
import Avatar from "@mui/material/Avatar";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import GridViewIcon from "@mui/icons-material/GridView";
import { Autocomplete } from "@mui/material";
import MDCard from "components/MDCard";
import MDInput from "components/MDInput";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import MDButton from "components/MDButton";
import AddIcon from "@mui/icons-material/Add";
import MDBadge from "components/MDBadge";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import TagIcon from "@mui/icons-material/Tag";
import Card from "@mui/material/Card";
import DataTable from "components/DataTable";
import dataTableData from "./data/dataTableData";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import { contract } from "services/Authentication.Services";
import Loader from "components/Loader";
import { notifySuccess } from "components/Messages";
import { notifyError } from "components/Messages";


const cardData = [
  {
    title: "Overview",
    firstBlockHeader: "ETH BALANCE",
    firstBlockData: (
      <MDBox display="flex" alignItems="center">
        <GridViewIcon />
        <MDTypography variant="button" color={"text"} ml={0.7}>
          0.00
        </MDTypography>
      </MDBox>
    ),
    secondBlockHeader: "ETH VALUE",
    secondBlockData: "$0.00",
    thirdBlockHeader: "TOKEN HOLIDINGS",
    thirdBlockData: (
      <MDBox
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          gap: 1,
          mt: 1,
        }}
      >
        <MDBox sx={{ width: "90%" }}>
          <Autocomplete
            disableClearable
            options={["$280,910.96 (42 Token)", 1131313, 313131, 1313131]}
            size="small"
            sx={{ width: " 100%" }}
            fullWidth
            renderInput={(params) => <MDInput {...params} fullWidth />}
          />
        </MDBox>
        <MDBox
          sx={{
            backgroundColor: "#e2e2e2",
            width: "40px",
            height: "33px",
            borderRadius: "2px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BrandingWatermarkIcon />
        </MDBox>
      </MDBox>
    ),
  },
  {
    title: "Overview",
    firstBlockHeader: "PRIVATE NAME TAGS",
    firstBlockData: (
      <MDButton
        sx={{
          border: "1px dashed black",
          borderRadius: "40px",
          height: "15px",
        }}
      >
        <AddIcon /> Add
      </MDButton>
    ),
    secondBlockHeader: "CONTRACT CREATORS",
    secondBlockData: (
      <span style={{ color: "#0d7ee2" }}>
        Apecoin Deployer at txn 0*2732774g
      </span>
    ),
    thirdBlockHeader: "TOKEN TRACKER",
    thirdBlockData: (
      <MDBox display="flex">
        <Avatar
          alt="Shiv"
          src={LogoImage}
          sx={{ width: 24, height: 24, mr: 0.5 }}
        />
        <span style={{ color: "#0d7ee2", marginTop: "3px" }}>
          ApeCoin (APE){" "}
        </span>
        <span style={{ color: "grey", marginTop: "3px" }}>(@$4.13) </span>
      </MDBox>
    ),
  },
  {
    title: "Overview",
    firstBlockHeader: "PRIVATE NAME TAGS",
    firstBlockData: (
      <MDButton
        sx={{
          border: "1px dashed black",
          borderRadius: "40px",
          height: "15px",
        }}
      >
        <AddIcon /> Add
      </MDButton>
    ),
    secondBlockHeader: "CONTRACT CREATORS",
    secondBlockData: (
      <span style={{ color: "#0d7ee2" }}>
        Apecoin Deployer at txn 0*2732774g
      </span>
    ),
    thirdBlockHeader: "TOKEN TRACKER",
    thirdBlockData: (
      <MDBox display="flex">
        <Avatar
          alt="Shiv"
          src={LogoImage}
          sx={{ width: 24, height: 24, mr: 0.5 }}
        />
        <span style={{ color: "#0d7ee2", marginTop: "3px" }}>
          ApeCoin (APE){" "}
        </span>
        <span style={{ color: "grey", marginTop: "3px" }}>(@$4.13) </span>
      </MDBox>
    ),
  },
];
function Dashboard() {
  const [address, setAddress] = useState("");
  const [jsonItems, setJsonItems] = useState({});
  const [loading, setLoading] = useState(false);
  // handleSubmit = async (e) => {
  //   try {
  //     const response = await axios.post(AuthUrls.CONTRACT, {
  //       method: "POST",
  //       hex_address,
  //       csrfmiddlewaretoken,
  //     });



  const fetchContract = async () => {
    try {
      setLoading(true)
      const response = await contract({hex_address:address});
      const jsonBCData = response.data;
      setLoading(false)
      setJsonItems(jsonBCData);
      notifySuccess('Data Loaded Successfully')

    } catch(err){
      setLoading(false)
      notifyError('Something went wrong')
      console.log(err)
    }

  }

  console.log(jsonItems, 'jsonItems');

  return (
    <React.Fragment>
      <Navbar />
      {!Object.keys(jsonItems).length > 0 && <Grid sx={{ backgroundColor: "#eaeaea" }}>
        <Grid>
          <MDTypography
            variant="h3"
            lineHeight={1}
            sx={{ cursor: "pointer", py: 2, pl: 2 }}
          >
            Ethereum Blockchain Explorer
          </MDTypography>
        </Grid>
        <Grid>
          <MDBox width="35rem">
            <MDInput
              sx={{ cursor: "pointer", py: 2, pl: 2 }}
              value={address}
              onChange={({currentTarget}) => setAddress(currentTarget.value)}
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={fetchContract}
                      edge="end"
                    >
                      <Search />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {loading ? <Loader /> : null}
          </MDBox>
        </Grid>
      </Grid>}
      {true && (
        <>
          {" "}
          <Grid sx={{ backgroundColor: "#eaeaea" }}>
            <MDTypography
              variant="body1"
              lineHeight={1}
              sx={{ cursor: "pointer", py: 2, pl: 2 }}
            >
              UserId
            </MDTypography>
          </Grid>
          <Grid sx={{ borderBottom: "1px solid #e9e9f5", pb: 1.5 }}>
            <MDBox sx={{ display: "flex", mt: 1, pl: 2 }}>
              <MDBox display="flex">
                <Avatar
                  alt="Shiv"
                  src={LogoImage}
                  sx={{ width: 24, height: 24 }}
                />
                <MDTypography variant="h5" sx={{ ml: 1, mr: 1 }}>
                  Contract
                </MDTypography>
              </MDBox>
              <span style={{ marginTop: "6px", marginRight: "11px" }}>
                {address}
              </span>
              <ContentCopyIcon sx={{ mt: 1 }} />
              <GridViewIcon sx={{ mt: 1, ml: 1 }} />
            </MDBox>
          </Grid>
          <Grid sx={{ pb: 1.5 }}>
            <MDBox sx={{ display: "flex", mt: 1, pl: 2 }}>
              <MDBox display="flex">
                <span style={{ marginTop: "10px", marginRight: "1px" }}>
                  SALES! Get 15% off(one-time) for any new API Pro Subscription.
                </span>
                <MDTypography
                  variant="h6"
                  sx={{ ml: 0.5, mr: 1, mt: 0.8, color: "#0d7ee2" }}
                >
                  Code:ESFP15Q223
                </MDTypography>
              </MDBox>
            </MDBox>
          </Grid>
        </>
      )}
      <Grid sx={{ pb: 1.5 }}>
        <MDBox sx={{ pl: 2 }}>
          <MDButton
            color="light"
            sx={{ borderRadius: 10, border: "1px solid #abadb1", mt: 1, mr: 1 }}
          >
            <LocalOfferIcon sx={{ mr: 1 }} /> Apecoin: APE Token{" "}
            <ContentCopyIcon sx={{ ml: 1 }} />
          </MDButton>
          <MDButton
            color="success"
            sx={{
              borderRadius: 10,
              border: "1px solid #abadb1",
              width: "150px",
              mt: 1,
              mr: 1,
            }}
          >
            Source Code
          </MDButton>
          <MDButton
            color="light"
            sx={{
              borderRadius: 10,
              border: "1px solid #abadb1",
              width: "200px",
              mt: 1,
              mr: 1,
            }}
          >
            <TagIcon sx={{ mr: 1 }} /> Token Contracts
          </MDButton>
        </MDBox>
      </Grid>

      {/* <Grid sx={{ borderBottom: "1px solid #e9e9f5", pb: 1.5 }}>
      <MDBox>
      </MDBox>
      <MDBox>
      </MDBox>
      </Grid> */}

      {/* Card Part here */}

      <MDBox mb={3}>
        <Grid container spacing={3}>
          {cardData?.map((item, index) => {
            return (
              <Grid item xs={12} lg={4} key={index}>
                <MDCard
                  title={item?.title}
                  firstBlockHeader={item?.firstBlockHeader}
                  firstBlockData={item?.firstBlockData}
                  secondBlockHeader={item?.secondBlockHeader}
                  secondBlockData={item?.secondBlockData}
                  thirdBlockHeader={item?.thirdBlockHeader}
                  thirdBlockData={item?.thirdBlockData}
                />
              </Grid>
            );
          })}
        </Grid>
      </MDBox>

      {true && (
        <>
          {" "}
          <Grid sx={{ borderBottom: "1px solid #e9e9f5", pb: 1.5 }}>
            <MDBox sx={{ pl: 2 }}>
              <MDBadge
                badgeContent="Transactions"
                size="md"
                container
                sx={{ mr: 1, mt: 1 }}
              />
              <MDBadge
                badgeContent="Internal Transactions"
                color="light"
                container
                sx={{ mr: 1, mt: 1 }}
              />
              <MDBadge
                badgeContent="Token Transfer (ERC:20)"
                color="light"
                container
                sx={{ mr: 1, mt: 1 }}
              />
              <MDBadge
                badgeContent="NFT Transfer"
                color="light"
                container
                sx={{ mr: 1, mt: 1 }}
              />
              <MDBadge
                badgeContent="Contract"
                color="light"
                container
                sx={{ mr: 1, mt: 1 }}
              />
              <MDBadge
                badgeContent="Events"
                color="light"
                container
                sx={{ mr: 1, mt: 1 }}
              />
              <MDBadge
                badgeContent="Analaytics"
                color="light"
                container
                sx={{ mr: 1, mt: 1 }}
              />
              <MDBadge
                badgeContent="Info"
                color="light"
                container
                sx={{ mr: 1, mt: 1 }}
              />
              <MDBadge
                badgeContent="Comments"
                color="light"
                container
                sx={{ mr: 1, mt: 1 }}
              />
            </MDBox>
          </Grid>
          <MDBox mb={3}>
            <Card>
              <MDBox p={3} lineHeight={1}>
                <MDTypography variant="button" color="text">
                  <ArrowDownwardIcon /> Latest 25 drom a total of
                  <span style={{ color: "#0d7ee2" }}>1,,013,060</span>{" "}
                  transcations
                </MDTypography>
                <MDBox>
                  <MDTypography variant="button" color="text">
                    (More than{" "}
                    <span style={{ color: "#0d7ee2" }}>25 Pending Txns</span>)
                  </MDTypography>
                </MDBox>
              </MDBox>
              <DataTable table={dataTableData} />
            </Card>
          </MDBox>
        </>
      )}

      {/* <Grid container>
        <SalesByCountry />
      </Grid> */}

      <MDBox mt={1.5}></MDBox>
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default Dashboard;
