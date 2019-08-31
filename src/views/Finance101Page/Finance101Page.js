import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
// import AccountIcon from "@material-ui/icons/Account";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/christian.jpg";
import money from "assets/img/money.jpg"
import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="woke to wealth"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={money} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Finance 101</h3>
                    <h6>back to basics.</h6>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                Congratulations on taking action towards a better financial future! Finance 101 is what I consider to be the first steps towards getting your financial life in order. Since everyone is on different journeys and stages of their financial lives, these first steps won't necessarily relate to everyone, whether this is making and sticking to a realistic budget, setting up a high interest savings account, paying down debt fast or changing KiwiSaver providers so your money works smarter and not harder for you. These are all important steps to take when managing your money.
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Budgeting",
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio2}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio5}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio4}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <div className={classes.description}>
                        <p>
                          Budgeting is a way of staying in control of your finances. Rather than wondering where your money has gone each payday, having an effective budget can help you keep on track with your spending and achieve your financial goals sooner. I recommend using the <a className="nav-link" href="https://sorted.org.nz/#/tools/budgeting-tool">Sorted Budgeting Tool</a> to help you create an achievable budget. I also highly recommend reading 'The Barefoot Investor' by Scott Pape. The recommended financial plan that Scott Pape proposes is each payday, 100% of your take home pay gets divided between four accounts which are Daily Expenses, Splurge, Smile and Fire Extinguisher accounts. The recommended percentages into each account are 60% Daily Expenses, 10% Splurge, 10% Smile, 20% Fire Extinguisher. <a className="nav-link" href="https://sustainable-living.blog/2019/02/24/barefoot-budgeting-understanding-buckets/">Here</a> is a good article that goes into more detail about the accounts.
                        </p>
                      </div>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Savings Accounts",
                      // tabIcon: AccountIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work5}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <div className={classes.description}>
                        <p>
                          Getting your money to work smarter for you is another way to help grow your wealth. I recommend researching high interest savings accounts and term deposits that are available currently through <a className="nav-link" href="https://www.interest.co.nz">Interest.</a>Inflation is another factor to consider when choosing a savings account. Since 2000 the average inflation rate in NZ has averaged around 2.7%. What this means is aiming to keep your money in a savings account with at least 2.5% interest to keep up with inflation.  
                        </p>
                      </div>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "KiwiSaver",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            />
                          </GridItem>
                        <div className={classes.description}>
                          <p>
                            KiwiSaver is a great savings scheme setup by the New Zealand government to help people like you save for retirement. You can choose to contribute 3%, 4%, 6%, 8% or 10% of your gross wage to your KiwiSaver account and your employer contributes at least 3% as well.
                            Since KiwiSaver contributions come out of your pay before you see it this makes saving even easier. Some other great benefits of KiwiSaver include; the annual government contribution of $521.43, providing you have contributed at least $1,042.86 from 1 July to 30 June each year. You're also able to use your KiwiSaver towards a first home deposit and may be eligible for a KiwiSaver HomeStart grant.
                          </p>
                          <p>
                            It is important to be aware of who your current KiwiSaver provider is because of management fees. Every KiwiSaver provider charges management fees and a lot of people are unaware of how much they are really being charged. I would try this <a className="nav-link" href="https://sorted.org.nz/tools/kiwisaver-fees-calculator"KiwiSaver fees calculator></a> to see how much you are being charged in fees currently. I also highly recommend <a className="nav-link" href="https://simplicity.kiwi/">Simplicity</a> as a KiwiSaver provider to consider joining, as they have some of the lowest fees in the market, are a New Zealand owned not-for-profit and 15% of their management fees are donated to charity.
                          </p>
                          <p> 
                            Lastly, when choosing a type of KiwiSaver Fund (e.g. Conservative, Balanced, Growth) consider your savings timeframe. When thinking about when you want to access your money my general advice is 0-2 years time - Conservative fund, 3-5 years time - Balanced Fund or 5+ years time - Growth Fund. My advice is if you're saving for retirement and are are not planning on withdrawing KiwiSaver for 5+ years, choose a Growth Fund.
                          </p>
                        </div>
                        </GridContainer>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
