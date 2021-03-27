import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

import * as settings from '../settings';

const axios = require("axios");
const cards = [1];

export default class Analysis extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            file: null,
            uploadedImageId: null,
            resultData: null
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onFormSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('myImage', this.state.file);
        console.log(this.state.file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post(`${settings.API_SERVER}/api/upload/`, formData, config)
            .then((response) => {
                console.log(response)
                alert("The file is successfully uploaded");
                this.setState({uploadedImageId: response.data})
            }).catch((error) => {
        });
    }
    onChange(e) {
        this.setState({file:e.target.files[0]});
    }

    analyseImage() {
        axios.post(`${settings.API_SERVER}/api/predict/`, {
            "imageId": this.state.uploadedImageId,
            "analysisResult": this.state.resultData
            
        }).then((response) => {
                console.log("Result: ", response)
                this.setState({resultData: response.data})
                console.log("Analysis Result: ", response.data)
            }).catch((error) => {
        });
    }

    render() {
        return ( 
            <React.Fragment>
                <div style={{paddingTop: '50px', paddingBottom: '30px', alignItems: "center",}}>
                    <Container maxWidth="md" style={{paddingBottom: '10px',}}>
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Analyze Your Skin Lesion
                        </Typography>
                        <Typography variant="h4" align="center" color="textSecondary" paragraph>
                            Have a skin lesion you're worried about? 
                        </Typography>
                        <Typography variant="h6" align="center" color="textSecondary" paragraph>
                            Disclamer: This site is not a replacement for a professional diagnois and the skin lesion analysis service on this site is for academic and experimental purposes only. 
                            The algorithm is not 100% accurate. 
                        </Typography>
                    </Container >
                </div>

                <div style={{width: "100%", display: "flex", marginLeft: "5%", paddingLeft: '80px'}}>
                    <div style={{display: "inline-block", width: "45%", float: "left"}}>
                        <Container maxWidth="md" style={{   paddingBottom: '30px'}}>
                            <h2 style={{textAlign: 'center', margin: 'auto', color: 'gray', paddingBottom: '20px'}}>
                            <hr></hr>
                            Follow the steps below to complete your skin analysis
                            <hr></hr>
                            </h2>
                            
                            <h2 style={{textAlign: 'center', margin: 'auto', color: 'gray', paddingBottom: '20px'}}>
                            
                                1. Upload a microsopic image of a skin lesion (jpg files only)
                            </h2>
                            <form onSubmit={this.onFormSubmit} style={{textAlign: 'center',}}>
                                <input type="file" name="myImage" onChange= {this.onChange} />
                                <button type="submit">Upload</button>
                            </form>
                        </Container> 
                        <hr></hr>
                        <Container  maxWidth="md" style={{alignItems: "center", margin: 'auto', color: 'gray', maxWidth: '100%', paddingBottom: '20px', paddingTop: '20px'}}> 
                            <h2 style={{ textAlign: 'center', display: 'block', margin: 'auto', paddingBottom: '20px'}}>
                                2. Hit analyze to receive your result (allow 20 seconds to load)
                            </h2>
                            <Button style={{textAlign: 'right', display: 'block', margin: 'auto'}} variant="contained" color="secondary" onClick={this.analyseImage.bind(this)}>
                                    Analyze
                            </Button> 
                            <h2 style={{ textAlign: 'center', display: 'block', margin: 'auto', paddingTop: '30px'}}>
                                Your result is: 
                            </h2> 
                            <h1 style={{ textAlign: 'center', color: 'red'}}>
                                {this.state.resultData}
                            </h1>
                            <hr></hr>
                            <h2 style={{ textAlign: 'center', display: 'block', margin: 'auto', paddingBottom: '20px', paddingTop: '30px'}}>
                                3. Scroll down to read about your analysis result
                            </h2> 
                            <hr></hr>
                        </Container> 
                          
                    </div> 

                    <div style={{display: "inline-block", width: "30%", float: "right", marginLeft: "5%", paddingTop: "20px"}}>
                        <img 
                            style={{width: "100%", height: "auto"}}
                            src="https://www.skin-ni.co.uk/wp-content/uploads/2019/12/dermaplane-facial-600x600.jpg"
                            alt="Skin">
                        </img>
                    </div>
                </div>
                <br></br>
                <div style={{marginTop: '50px', marginBottom: '50px'}}>
                    <div>
                        <Container maxWidth="sm">
                            <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
                                What does your result mean?
                            </Typography> <br></br>
                            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                                Read about each possible classification result and wheather it's dangerous (cancerous) or not.
                            </Typography> <br></br>
                        </Container>
                    </div>
                    <Container maxWidth="lg">
                        {/* End hero unit */}
                        <Grid container spacing={2}>
                            {cards.map((card) => (
                            <Grid item key={card} xs={4}>
                                <Card>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2" align="center">
                                        Actinic Keratoses <b>(akiec)</b>
                                    </Typography>
                                    <Typography>
                                    <p style={{color: '#ff9707', textAlign: 'center'}}> WARNING: Not dangerous yet but needs to be treated. </p>
                                    <p style={{textAlign: 'justify'}}>
                                        This category also includes Intraepithelial Carcinoma and Bowen's Disease.
                                        An actinic keratosis is a rough, scaly patch on the skin that develops from years of sun exposure. 
                                        Often found on the face, lips, ears, forearms, scalp, neck or back of the hands.
                                        If treated early, actinic keratosis can be cleared up or removed. 
                                        If left untreated, some of these spots might progress to squamous cell carcinoma — a type of cancer that usually isn't life-threatening if detected and treated early.
                                    </p>
                                    </Typography>
                                </CardContent>
                                </Card>
                            </Grid>
                            ))}
                            {cards.map((card) => (
                            <Grid item key={card} xs={4}>
                                <Card>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2" align="center">
                                        Basal Cell Carcinoma <b>(bcc)</b>
                                    </Typography>
                                    <Typography>
                                    <p style={{color: 'red', textAlign: 'center'}}> DANGEROUS: should be addressed as soon as possible. </p>
                                    <p style={{textAlign: 'justify'}}>
                                    Basal cell carcinoma (BCC) is the most common form of skin cancer and the most frequently occurring form of all cancers.                                     
                                    Because BCCs grow slowly, most are curable and cause minimal damage when caught and treated early. 
                                    While BCCs rarely spread beyond the original tumor site, if allowed to grow, these lesions can be disfiguring and dangerous.
                                    Untreated BCCs can become locally invasive, grow wide and deep into the skin and destroy skin, tissue and bone.
                                    </p>
                                    </Typography>
                                </CardContent>
                                </Card>
                            </Grid>
                            ))}
                            {cards.map((card) => (
                            <Grid item key={card} xs={4}>
                                <Card>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2" align="center">
                                        Benign Keratosis-ike Lesions <b>(bkl)</b>
                                    </Typography>
                                    <Typography>
                                    <p style={{color: 'green', textAlign: 'center'}}> SAFE: Not dangerous and does not need treatment. </p>
                                    <p style={{textAlign: 'justify'}}>
                                        This category includes solar lentigines / seborrheic keratoses and lichen-planus like keratoses.
                                        A seborrheic keratosis and solar lentigos is a common noncancerous skin growths, they are harmless and don't require treatment. People tend to get more of them as they get older.
                                        Seborrheic keratoses are usually brown, black or light tan. The growths look waxy, scaly and slightly raised. They usually appear on the head, neck, chest or back.
                                    </p>
                                    </Typography>
                                </CardContent>
                                </Card>
                            </Grid>
                            ))}
                            {cards.map((card) => (
                            <Grid item key={card} xs={4}>
                                <Card>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2" align="center">
                                    Dermatofibroma <b>(df)</b> 
                                    </Typography>
                                    <Typography>
                                    <p style={{color: 'green', textAlign: 'center'}}> SAFE: Not dangerous and does not need treatment. </p>
                                    <p style={{textAlign: 'justify'}}>
                                    A dermatofibroma is a common overgrowth of the fibrous tissue situated in the dermis (the deeper of the two main layers of the skin). 
                                    It is benign (harmless) and will not turn into a cancer. Whilst dermatofibromas are harmless, they can be similar in appearance to other concerning skin tumours. 
                                    It is therefore important to see a health professional for a diagnosis.
                                        
                                    </p>
                                    </Typography>
                                </CardContent>
                                </Card>
                            </Grid>
                            ))}
                            {cards.map((card) => (
                            <Grid item key={card} xs={4}>
                                <Card>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2" align="center">
                                    Melanoma <b>(mel)</b>
                                    </Typography>
                                    <Typography>
                                    <p style={{color: 'red', textAlign: 'center'}}> DANGEROUS: should be addressed as soon as possible. </p>
                                    <p style={{textAlign: 'justify'}}>
                                    Melanoma is a type of skin cancer that occurs when pigment producing cells called melanocytes mutate and begin to divide uncontrollably.
                                    It is not the most common, but it is the most serious, as it often spreads. When this happens, it can be difficult to treat, and the outlook may be poor. 
                                    For this reason, people should keep track of any changing or growing moles. 
                                    </p>
                                    </Typography>
                                </CardContent>
                                </Card>
                            </Grid>
                            ))}
                            {cards.map((card) => (
                            <Grid item key={card} xs={4}>
                                <Card>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2" align="center">
                                    Nelanocytic Nevi <b>(nv)</b>
                                    </Typography>
                                    <Typography>
                                    <p style={{color: 'green', textAlign: 'center'}}> SAFE: Not dangerous and does not need treatment. </p>
                                    <p style={{textAlign: 'justify'}}>
                                    A melanocytic naevus, or mole, is a common benign skin lesion due to a local proliferation of pigment cells (melanocytes). There are various types of it. 
                                    A brown or black melanocytic naevus contains the pigment melanin. They can be present at birth or appear later. 
                                    Almost everyone has at least one type of a nevi. Most white-skinned New Zealanders have 20–50 melanocytic naevi.
                                    </p>
                                    </Typography>
                                </CardContent>
                                </Card>
                            </Grid>
                            ))}
                            {cards.map((card) => (
                            <Grid item key={card} xs={4}>
                                <Card>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2" align="center">
                                    Vascular Lesions <b>(vasc)</b>
                                    </Typography>
                                    <Typography>
                                    <p style={{color: 'green', textAlign: 'center'}}> SAFE: Not dangerous and does not need treatment. </p>
                                    <p style={{textAlign: 'justify'}}>
                                    Vascular lesions are relatively common abnormalities of the skin and underlying tissues, more commonly known as birthmarks. 
                                    There are three major categories of vascular lesions: Hemangiomas, Vascular Malformations, and Pyogenic Granulomas. 
                                    While these birthmarks can look similar at times, they each vary in terms of origin and necessary treatment.
                                        
                                    </p>
                                    </Typography>
                                </CardContent>
                                </Card>
                            </Grid>
                            ))}
                        </Grid>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}