import { useState } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import { Switch, Grid } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import bgImage from "assets/images/login.jpg";
import { useFormik } from "formik";
import { signInvalidationSchema } from "validator";
import { useMutation } from "react-query";
import { login } from "services/Authentication.Services";
import { notifyError, notifySuccess } from "components/Messages";


function Login() {
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState("idle");
  const [redirectOnLogin, setRedirectOnLogin] = useState(
    false
  );
  const navigate = useHistory();

  const initState = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: initState,
    validationSchema: signInvalidationSchema,
    onSubmit: (values) => {
      console.log(values, "login");
      setLoading("pending")
      mutate(values);
    },
  });

  const { mutate } = useMutation(login, {
    onSuccess: (res) => {
      console.log("res",res)
      notifySuccess("Logged In Successfully")
      // setUser(res?.data?.data)
      
      let token = res.data.accessToken;
      let userDetail = JSON.stringify({
      
        id: res.data.user.id,
      });
      localStorage.setItem("user", userDetail);
      localStorage.setItem("token", token);
      setTimeout(() => {
        setRedirectOnLogin(true)
        setLoading("success");
      }, 700)
    },
    onError: (error) => {
      setLoading("error");
      notifyError(
        `${error?.response?.data?.error?.message
          ? error.response.data.error.message
          : "Something went wrong"
        }`
      );
    },
  });

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <>
    {redirectOnLogin && <Redirect to="/" />}
     <MDBox
      width="100vw"
      height="100%"
      minHeight="100vh"
      bgColor="white"
      sx={{ overflow: "hidden" }}
    >
      <Grid container>
        <Grid item xs={12} lg={6}>
          <MDBox
            display={{ xs: "none", lg: "flex" }}
            width="calc(100% - 2rem)"
            height="calc(100vh - 2rem)"
            borderRadius="lg"
            ml={2}
            mt={2}
            sx={{ backgroundImage: `url(${bgImage})` }}
          />
        </Grid>
        <Grid item xs={11} sm={8} md={6} lg={4} xl={3} sx={{ mx: "auto" }}>
          <MDBox
            display="flex"
            flexDirection="column"
            justifyContent="center"
            height="100vh"
          >
            <MDBox py={3} px={3} textAlign="center">
              <>
                <MDBox mb={1} textAlign="center">
                  <MDTypography variant="h4" fontWeight="bold">
                    Sign In
                  </MDTypography>
                </MDBox>
                <MDTypography variant="body2" color="text">
                  Enter your email and password to sign in
                </MDTypography>
              </>
            </MDBox>
            <MDBox p={3}>
              <MDBox
                component="form"
                role="form"
                onSubmit={formik.handleSubmit}
              >
                <MDBox mb={2}>
                  <MDInput
                    type="email"
                    label="Email"
                    variant="standard"
                    value={formik.values.email}
                    id="email"
                    autoComplete="email"
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    fullWidth
                  />
                </MDBox>
                <MDBox mb={2}>
                  <MDInput
                    type="password"
                    label="Password"
                    variant="standard"
                    value={formik.values.password}
                    id="password"
                    autoComplete="password"
                    onChange={formik.handleChange}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                    fullWidth
                  />
                </MDBox>
                <MDBox display="flex" alignItems="center" ml={-1}>
                  <Switch checked={rememberMe} onChange={handleSetRememberMe} />
                  <MDTypography
                    variant="button"
                    fontWeight="regular"
                    color="text"
                    onClick={handleSetRememberMe}
                    sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                  >
                    &nbsp;&nbsp;Remember me
                  </MDTypography>
                </MDBox>
                <MDBox mt={4} mb={1}>
                  <MDButton
                    type="submit"
                    variant="gradient"
                    color="info"
                    size="large"
                    fullWidth
                    isLoading={loading}
                  >
                    sign in
                  </MDButton>
                </MDBox>
                <MDBox mt={3} textAlign="center">
                  <MDTypography variant="button" color="text">
                    Don&apos;t have an account?{" "}
                    <MDTypography
                      component={Link}
                      to="/signup"
                      variant="button"
                      color="info"
                      fontWeight="medium"
                      textGradient
                    >
                      Sign up
                    </MDTypography>
                  </MDTypography>
                </MDBox>
              </MDBox>
            </MDBox>
          </MDBox>
        </Grid>
      </Grid>
    </MDBox>
    </>
   
  );
}

export default Login;


