import React,{useState, useEffect} from 'react'
import {InputLabel, Select, MenuItem,Button, Grid,Typography} from "@material-ui/core"
import {useForm, FormProvider} from "react-hook-form"
import FormInput from './CustomTextField'
import { commerce } from '../../lib/commerce'
import { Link } from 'react-router-dom'
 
const AddressForm = ({checkoutToken,next}) => {
    const [shippingCountries, setShippingCountries] = useState([])
    const [shippingCountry, setShippingCountry] = useState("")
    const [shippingSubdivisions, setShippingSubdivisions] = useState([])
    const [shippingSubdivision, setShippingSubdivision] = useState("")
    const [shippingOptions, setShippingOptions] = useState([])
    const [shippingOption, setShippingOption] = useState("")
    const methods = useForm()
    
    const fetchShippingCountries = async (checkoutTokenId)=>{
     const {countries} = await commerce.services.localeListShippingCountries(checkoutTokenId)
        console.log(countries)

        setShippingCountries(countries)
        setShippingCountry(Object.keys(countries)[0])
    }

    const fetchShippingSubdivisions = async(countryCode)=>{
        const {subdivisions}= await commerce.services.localeListSubdivisions(countryCode)
        setShippingSubdivisions(subdivisions)
        setShippingSubdivision(Object.keys(subdivisions)[0])

    }
    const fetchShippingOptions = async (checkoutTokenId, country, stateProvince = null) => {
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region: stateProvince });
    
        setShippingOptions(options);
        setShippingOption(options[0].id);
      };

    useEffect(()=>{
      if(checkoutToken ) fetchShippingCountries(checkoutToken.id) 
    },[])
    useEffect(()=>{
      if(shippingCountry ) fetchShippingSubdivisions(shippingCountry) 
    },[shippingCountry])

    useEffect(() => {
        if (shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
      }, [shippingSubdivision]);
    return (
        <>
            <Typography variant ="h6" gutterBottom>Address Form</Typography>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit((data)=>next({...data,shippingCountry, shippingSubdivision, shippingOption}))}>

            <Grid container spacing={3}>
                <FormInput name= "first name" label="First name" required fullWidth/>
                <FormInput name= "last name" label="Last name" required/>
                <FormInput name= "address" label="Address" required/>
                <FormInput name= " email" label="Email" required/>
                <FormInput name= " city" label="City" required/>
                <FormInput name= " zip" label="Zip / Postal code" required/>
                <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                {Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Subdivision</InputLabel>
              <Select value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
                {Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Option</InputLabel>
              <Select value={shippingOption} fullWidth onChange={(e) => setShippingOption(e.target.value)}>
                {shippingOptions.map((sO) => ({ id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})` })).map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>  
            </Grid>
            <br/>
            <div style={{display:"flex", justifyContent:"space-between"}}>
              <Button variant="outlined" component={Link} to ="/cart">Back to cart</Button>
              <Button type="submit" variant="contained" color="primary">Next</Button>

            </div>
         </form>
    </FormProvider>
        </>
    )
}

export default AddressForm
