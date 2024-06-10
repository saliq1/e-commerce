import { Grid } from "@mui/material"

const End = ()=>{
return(
  <>
  <Grid style={{padding:"20px"}} container gap={2}>
  <Grid item xs={12} md={3}>
    <h5>About</h5>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic odit impedit et sit quos eum. Modi dolorum molestias maiores ratione.</p>
  </Grid>
  <Grid item xs={12} md={4}>
  <h5>contact</h5>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic odit impedit et sit quos eum. Modi dolorum molestias 233-825-765.</p>
  </Grid>
  <Grid item xs={12} md={3}>
  <h5>Digital sign</h5>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic odit impedit et sit quos eum. Modi dolorum molestias maiores ratione.</p>
  </Grid>
  <Grid sx={{textAlign:"center"}} item xs={12}>
    copywright &#169; E-Commerce since 2023.
  </Grid>
  </Grid>
  </>
)
}
export default End