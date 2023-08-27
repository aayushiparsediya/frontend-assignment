import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Dropdown, DropdownButton, SplitButton } from "react-bootstrap";
import SecondaryButton from "../components/SecondaryButton";
import PrimaryButton from "../components/PrimaryButton";
import Prod_Dropdown from "../components/Dropdown";
import TextField from "../components/TextField";
import "./Desktop1.css";
const Desktop1 = () => {
  return (
    <div className="desktop-1">
      <div className="desktop-1-child" />
      <img className="rectangle-icon2" alt="" src="/rectangle1@2x.png" />
      <div className="rectangle-group">
        <div className="group-child2" />
        <img className="group-child3" alt="" src="/star-31.svg" />
        <img
          className="jessica-radanavong-ichpbhfd0pw-icon1"
          alt=""
          src="/jessicaradanavongichpbhfd0pwunsplash1@2x.png"
        />
        <div className="group-child4" />
        <img className="group-child5" alt="" src="/star-41.svg" />
        <div className="oregon-jacket1">Oregon jacket</div>
        <div className="div2">$124</div>
        <div className="group-child6" />
      </div>
      <img
        className="zam-nungaray-acw3b7q6ys0-unspl-icon1"
        alt=""
        src="/zamnungarayacw3b7q6ys0unsplash@2x.png"
      />
      <img
        className="philipp-arlt-nmh9a0obon8-unspl-icon"
        alt=""
        src="/philipparltnmh9a0obon8unsplash@2x.png"
      />
      <img
        className="philipp-arlt-8eyb-rvawty-unspl-icon1"
        alt=""
        src="/philipparlt8eyb-rvawtyunsplash@2x.png"
      />
      <div className="lorem-ipsum-dolor4">Fresh</div>
      <div className="lorem-ipsum-dolor5">New products</div>
      <div className="lorem-ipsum-dolor6">Look</div>
      <div className="lorem-ipsum-dolor7">2022</div>
      <div className="apparel1">Apparel</div>
      <div className="accessories1">Accessories</div>
      <div className="best-sellers1">Best sellers</div>
      <div className="off1">50% off</div>
      <header className="desktop-1-item" />
      <footer className="desktop-1-inner" />
      <img className="icon1" alt="" src="/185910631@2x.png" />
      <div className="home1">HOME</div>
      <div className="about1">ABOUT</div>
      <div className="copyright-2022-all1">
        Copyright 2022 All Right Reserved By SG
      </div>
      <div className="contact-us1">CONTACT US</div>
      <div className="bag-0">BAG (0)</div>
      <div className="wishlist-0">WISHLIST (0)</div>
      <div className="shopkart2">ShopKart</div>
      <div className="free-delivery2">Free Delivery</div>
      <div className="return-policy2">Return Policy</div>
      <div className="login2">Login</div>
      <div className="follow-us">Follow US</div>
      <img className="layer-156-icon2" alt="truck" src="/layer-156.svg" />
      <img className="vector-icon8" alt="" src="/vector2.svg" />
      <img className="vector-icon9" alt="" src="/vector3.svg" />
      <img className="vector-icon10" alt="" src="/vector4.svg" />
      <img className="desktop-1-child1" alt="" src="/group-62.svg" />
      <div className="desktop-1-child2" />
      <img className="desktop-1-child3" alt="" src="/group-16.svg" />
      <img className="desktop-1-child4" alt="" src="/group-17.svg" />
      <div className="get-news-about-container1">
        <p className="blank-line1">&nbsp;</p>
        <p className="blank-line1">
          Get news about articles and updates in your inbox.
        </p>
      </div>
      <div className="newslleter1">Newslleter</div>
      <Form.Group className="name-formgroup">
        <Form.Label>NAME</Form.Label>
        <Form.Control type="text" placeholder="Input placeholder" />
      </Form.Group>
      <Form.Group className="email-formgroup">
        <Form.Label>EMAIL</Form.Label>
        <Form.Control type="text" placeholder="Input placeholder" />
      </Form.Group>
      <Form.Group className="message-formgroup">
        <Form.Label>MESSAGE</Form.Label>
        <Form.Control type="text" placeholder="Input placeholder" />
      </Form.Group>
      <img className="desktop-1-child5" alt="" src="/arrow-1.svg" />
      <img className="desktop-1-child6" alt="" src="/arrow-2.svg" />
      <div className="lorem-ipsum-dolor-container1">
        <p className="blank-line1">{`GET `}</p>
        <p className="blank-line1">IN TOUCH</p>
      </div>
      <div className="desktop-1-child7" />
      <div className="desktop-1-child8" />
      <div className="desktop-1-child9" />
      <div className="button1">
        <div className="button-item" />
        <div className="send1">SEND</div>
      </div>
      <SecondaryButton
        secondaryButtonPosition="absolute"
        secondaryButtonWidth="2.81rem"
        secondaryButtonHeight="2.81rem"
        secondaryButtonTop="79.69rem"
        secondaryButtonLeft="38.19rem"
      />
      <SecondaryButton
        secondaryButtonPosition="absolute"
        secondaryButtonWidth="2.81rem"
        secondaryButtonHeight="2.81rem"
        secondaryButtonTop="79.69rem"
        secondaryButtonLeft="58.81rem"
      />
      <SecondaryButton
        secondaryButtonPosition="absolute"
        secondaryButtonWidth="2.81rem"
        secondaryButtonHeight="2.81rem"
        secondaryButtonTop="79.69rem"
        secondaryButtonLeft="79.5rem"
      />
      <img
        className="malicki-m-beser-pkmvkg7vnuo-un-icon"
        alt=""
        src="/malickimbeserpkmvkg7vnuounsplash@2x.png"
      />
      <SecondaryButton
        secondaryButtonPosition="absolute"
        secondaryButtonWidth="2.81rem"
        secondaryButtonHeight="2.81rem"
        secondaryButtonTop="79.69rem"
        secondaryButtonLeft="79.5rem"
      />
      <PrimaryButton
        primaryButtonPosition="absolute"
        primaryButtonTop="43.5rem"
        primaryButtonLeft="7.19rem"
        primaryButtonBorder="1px solid var(--grey-scale-000)"
        primaryButtonBoxSizing="border-box"
        vectorIconWidth="0.63rem"
        vectorIconHeight="0.63rem"
        lineDivHeight="0.06rem"
      />
      <Prod_Dropdown
        dropdownPosition="absolute"
        dropdownWidth="9.94rem"
        dropdownHeight="unset"
        dropdownDisplay="flex"
        dropdownFlexDirection="column"
        dropdownTop="7.19rem"
        dropdownLeft="30.63rem"
      />
      <TextField
        textFieldPosition="absolute"
        textFieldTop="83.25rem"
        textFieldLeft="21.63rem"
        frameDivWidth="19.38rem"
        frameDivPadding="0rem var(--padding-5xs)"
        fLORIDAJACKETWidth="16.13rem"
        fLORIDAJACKETHeight="1.88rem"
        sufferedAlterationInWidth="18.94rem"
        sufferedAlterationInHeight="3.06rem"
        divWidth="16.13rem"
        divHeight="1.88rem"
      />
      <TextField
        textFieldPosition="absolute"
        textFieldTop="83.25rem"
        textFieldLeft="42.63rem"
        frameDivWidth="19.38rem"
        frameDivPadding="0rem var(--padding-5xs)"
        fLORIDAJACKETWidth="16.13rem"
        fLORIDAJACKETHeight="1.88rem"
        sufferedAlterationInWidth="18.94rem"
        sufferedAlterationInHeight="3.06rem"
        divWidth="16.13rem"
        divHeight="1.88rem"
      />
      <TextField
        textFieldPosition="absolute"
        textFieldTop="83.25rem"
        textFieldLeft="63.25rem"
        frameDivWidth="19.38rem"
        frameDivPadding="0rem var(--padding-5xs)"
        fLORIDAJACKETWidth="16.13rem"
        fLORIDAJACKETHeight="1.88rem"
        sufferedAlterationInWidth="18.94rem"
        sufferedAlterationInHeight="3.06rem"
        divWidth="16.13rem"
        divHeight="1.88rem"
      />
      <TextField
        textFieldPosition="absolute"
        textFieldTop="83.25rem"
        textFieldLeft="83.94rem"
        frameDivWidth="19.38rem"
        frameDivPadding="0rem var(--padding-5xs)"
        fLORIDAJACKETWidth="16.13rem"
        fLORIDAJACKETHeight="1.88rem"
        sufferedAlterationInWidth="18.94rem"
        sufferedAlterationInHeight="3.06rem"
        divWidth="16.13rem"
        divHeight="1.88rem"
      />
    </div>
  );
};

export default Desktop1;
