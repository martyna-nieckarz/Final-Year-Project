import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  containerContent: {
    textAlign: "justify",
  },

  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  cardContentSection1: {
    paddingTop: "30px",
    textAlign: "center",
  },
}));

const cards = [1];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="md" >
            <Typography component="h1" variant="h2" align="center" color="textPrimary" textAlign="justify" gutterBottom>
              What is skin cancer?
            </Typography>
            <Typography className={classes.containerContent} variant="h5" color="textSecondary" paragraph>
              Skin cancer is the abnormal, uncontrolled growth of skin cells. It develops when the genetic material (DNA) inside skin cells is damaged, triggering changes that lead these cells to multiply rapidly and become cancerous.
            </Typography>
          </Container>
        </div>
        <div style={{paddingTop: "40px",}}>
          <Container maxWidth="md"> <br></br>
            <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
            What Are the Risk Factors for Skin Cancer?
            </Typography> <br></br>
            <Typography className={classes.containerContent} variant="h5" color="textSecondary" paragraph>
              Reducing the UV exposure can help keep keep skin and lower chances of getting skin cancer in the future. 
              Most people get at least some UV exposure from the sun when they spend time outdoors. 
              Using sun protection everyday will lower the risk of skin cancer. Anyone can get skin cancer, but people with certain characteristics are at greater risk.
            </Typography>
          </Container> 
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={3}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/ItphH2lGzuI"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContentSection1}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Older age
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/uFjORuZQczQ"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContentSection1}>
                      <Typography gutterBottom variant="h5" component="h2">
                      A lighter natural skin color
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/DUrU_bZV8So"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContentSection1}>
                      <Typography gutterBottom variant="h5" component="h2">
                        A family history of skin cancer
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
          <Container maxWidth="md">
            <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
              What are the types of skin cancer?
            </Typography> <br></br>
            <Typography className={classes.containerContent} variant="h5" color="textSecondary" paragraph>
                Below are listed some of the more common types of skin cancer
            </Typography>
          </Container>      
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={3}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://assets.skinvision.com/2020/05/18094358/Basal-Cell-Carcinoma-picture-nod3.jpg"
                      title="Example picture of basal cell carcinoma"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2" align="center">
                      Basal cell carcinoma (BCC)
                      </Typography>
                      <Typography>
                      <p style={{textAlign: 'justify'}}>
                        Basal cell carcinoma (BCC) is the most common form of skin cancer and the most frequently occurring form of all cancers. 
                        It's serious and should be addressed as soon as possible. Because BCCs grow slowly, most are curable and cause minimal damage when caught and treated early. 
                        The lesions commonly arise in sun-exposed areas of the body.
                      </p>
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://assets.skinvision.com/2020/05/18091821/Squamous-Cell-Carcinoma-picture-6.jpg"
                      title="Example picture of squamous cell carcinoma with irritated skin"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2" align="center">
                      Squamous cell carcinoma (SCC)
                      </Typography>
                      <Typography>
                      <p style={{textAlign: 'justify'}}>
                      Squamous cell carcinoma is the second most common form of skin cancer. 
                      They can appear as scaly red patches, open sores, rough, thickened, or raised growths with a central depression. 
                      At times, it may crust over, itch or bleed. The lesions most commonly arise in sun-exposed areas of the body.
                      When caught early, most SCCs are curable.
                      </p>
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://4ag46i294nta1038p13v77x1-wpengine.netdna-ssl.com/wp-content/uploads/NEW-Merkel-Cell-photo-for-SC101-bottom-right-3.05.18-1.jpg"
                      title="Merkel cell carcinoma on the lower leg"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h6" component="h2" align="center">
                        Merkel Cell Skin Cancer (MCC)
                      </Typography>
                      <Typography>
                      <p style={{textAlign: 'justify'}}>
                      Merkel cell carcinoma is a rare, aggressive form of skin cancer with a high risk for returning and spreading, often within two to three years after initial diagnosis.
                      It tends to grow quickly and can be hard to treat if it spreads beyond the skin.
                      Usually appears as a flesh-colored or bluish-red nodule, often on the face, head or neck. 
                      </p>
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://assets.skinvision.com/2020/01/22125549/Example-pictures-of-melanoma.jpg"
                      title="Example pictures of melanoma with a high asymmetry, border and color"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h6" component="h2" align="center">
                      Melanoma Skin Cancer
                      </Typography>
                      <Typography>
                      <p style={{textAlign: 'justify'}}>
                        Melanoma is a very dangerous albeit less common than some other types of skin cancer, but it is more likely to grow and spread to other parts of the body. 
                        The most common sign of melanoma is the appearance of a new mole or a change in an existing mole. 
                        Melanomas are uncommon in areas which are protected from sun exposure, such as the buttocks and the scalp.
                      </p>
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://dermnetnz.org/assets/Uploads/lesions/patch2__ProtectWyJQcm90ZWN0Il0_FocusFillWzI5NCwyMjIsIngiLDE1XQ.jpg"
                      title="Patch Stage KS"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h6" component="h2" align="center">
                        Kaposi Sarcoma (KS)
                      </Typography>
                      <Typography>
                      <p style={{textAlign: 'justify'}}>
                      Kaposi sarcoma (KS) is a cancer that causes patches of abnormal tissue to grow under the skin, in the lining of the mouth, nose, and throat, in lymph nodes, or in other organs. 
                      These patches, or lesions, are usually red or purple. They are made of cancer cells, blood vessels, and blood cells.
                      KS can cause serious problems or even become life threatening when the lesions are in the lungs, liver, or digestive tract.
                      </p>                    
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://lymphoma-action.org.uk/sites/default/files/inline-images/patches_mycosis_fungoides.jpg"
                      title="Patches of mycosis fungoides showing areas of dry, red skin"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2" align="center">
                        Lymphoma of the Skin
                      </Typography>
                      <Typography>
                      <p style={{textAlign: 'justify'}}>
                      Skin lymphomas is a rare condition that starts in white blood cells called lymphocytes.
                      In the UK, around seven people in every million develop a skin lymphoma each year. 
                      Most of these (7 in 10) are T-cell skin lymphomas.   
                      Most skin lymphomas develop slowly – sometimes over decades. They are difficult to diagnose because they often resemble more common skin conditions. 
                      </p> 
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
          <Container maxWidth="md">
            <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
              How to prevent skin cancer?
            </Typography> <br></br>
            <Typography className={classes.containerContent} variant="h5" color="textSecondary" paragraph>
            Skin cancer is the most common cancer in Ireland. Yet in most cases, it is preventable and early detection leads to better outcomes. 
            The vast majority of these cancers are caused by overexposure to ultraviolet radiation (UV), mainly from sunlight, although UV from artificial sources 
            (e.g. sunbeds) can also cause skin cancer.
            That’s why preventing skin cancer by protecting yourself completely requires a comprehensive approach. <br></br> <br></br> 
            <b>The Skin Cancer Foundation recommends that you: </b>
            </Typography>
          </Container> 
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={3}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/LtNvQHdKkmw"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h6" component="h2" align="center">
                      Examine your skin head-to-toe every month and go see a dermatologist at least once a year for a professional skin exam.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/yxwBJjtgtUs"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h6" component="h2" align="center">
                        Seek the shade, especially between 10 AM and 4 PM. 
                        Avoid tanning, don’t get sunburned and cover up with clothing.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/0JZgnNL2N8s"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h6" component="h2" align="center">
                        Use a broad-spectrum (UVA/UVB) sunscreen with an SPF of 15 or higher every day.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </div> 
      </main>
    </React.Fragment>
  );
}