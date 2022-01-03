import React,{useState, useEffect} from 'react'
import { Paper, Stepper,Step,StepLabel,CircularProgress,Divider,Button, Typography } from '@material-ui/core'
import useStyles from "./styles"
import AddressForm from "../AddressForm"
import PaymentForm from "../PaymentForm"
import { useGlobalContext } from '../../../Context'
import { commerce } from '../../../lib/commerce'
import { Link,useHistory } from 'react-router-dom'

const steps=["Shipping Address", "Payment Datails"]

const Checkout = () => {
    const [activeStep, setActiveStep] = useState(0)
    const [checkoutToken, setCheckoutToken] = useState(null)
    const [shippingData, setShippingData]= useState({})
   const classes= useStyles()
   const history = useHistory()
   const {cart,order, errorMessage} = useGlobalContext()

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const prevStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
  

   const next =(data)=>{
       setShippingData(data)
       console.log(shippingData)

       nextStep()
   }

   useEffect(()=>{
    if(cart.id){
        const generateTokenId = async()=>{
           try {
               const token = await commerce.checkout.generateToken(cart.id, {type:"cart"})
               console.log(token);
               setCheckoutToken(token)
           } catch  {
            if (activeStep !== steps.length) history.push('/');
   
           }
        }
        generateTokenId()
    }
   },[cart,activeStep,history])
   
    const Form =()=>(
        activeStep ===0
            ? <AddressForm checkoutToken={checkoutToken} next={next} nextStep={nextStep}/>
            :<PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} prevStep={prevStep} nextStep={nextStep} />
    )

    let Confirmation = () => (order.customer ? (
        <>
          <div>
            <Typography variant="h5">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}!</Typography>
            <Divider className={classes.divider} />
            <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
          </div>
          <br />
          <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
        </>
      ) : (
        <div className={classes.spinner}>
          <CircularProgress />
        </div>
      ));

      if (errorMessage) {
        Confirmation = () => (
          <>
            <Typography variant="h5">Error: {errorMessage}</Typography>
            <br />
            <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
          </>
        );
      }
    return (
        <>
        <div className={classes.toolbar}/>
        <main className={classes.layout}>
            <Paper className={classes.paper}>
                <Typography variant="h4" align="center">Checkout</Typography>
                <Stepper activeStep={activeStep} className={classes.stepper}>
                {steps.map((step,index)=>(
                   <Step key = {index}>
                     <StepLabel>{step}</StepLabel>
                   </Step>
                ))}
                </Stepper>
                {activeStep === steps.length ? <Confirmation/>: checkoutToken && <Form/>}
            </Paper>
        </main>
        </>    
        
    )
}

export default Checkout
 