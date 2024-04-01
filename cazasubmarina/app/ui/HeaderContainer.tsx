import { useContext, useEffect, useLayoutEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { Button, Form, Modal } from "react-bootstrap";

import imglogo   from "../img/logo.png";
import Header from "../components/Header";
import LogosRedess from "../components/LogosRedess";
import { useSelector} from "../node_modules/react-redux/es/exports";
import Images from "../components/Images";
import { CazasubmarinaContext } from "../context/CazasubmarinaProvider";
const HeaderContainer = () => {

const {
  setfontColor,
  setbackgroundColor,
  backgroundColor,
  handleShow,
  height,
  updateheight,
  heights,
  setHeights,
  imagee,
  setimagee,
  setmarginToPP,StyleBorder,
  setStyleBorder,
} = useContext(CazasubmarinaContext);

 const {Headers, Logos } = useSelector(
   (state: { data: any }) => state.data
 );
  

useEffect(() => {
  window.addEventListener("resize", () => updateheight());
  updateheight();
  const changeBackground=()=>{
    if (window.scrollY>100){
      setbackgroundColor("#000c1d");
      setfontColor("white");
      setimagee(<div></div>);
      setHeights("60px")
      setmarginToPP("60px")
      setStyleBorder(styles.borderheaderwhite);

    }else{
      setmarginToPP("")
            setbackgroundColor("#f1f1f1");
      setfontColor("black");
            setHeights("140px");
            setmarginToPP("135px");
      setStyleBorder(styles.borderheader);

            setimagee(
              <Images
                src={imglogo}
                width={0}
                height={0}
                alt={"logo"}
                Styles={"image"}
              />
            );
    }
  }
  window.addEventListener("scroll", () => changeBackground());
}, []);
 
  return (
    <>
      <div className={styles.navcontainer}>
        <nav
          className="col-12 d-flex justify-content-center align-items-center sticky-top m-0"
          style={{
            backgroundColor: backgroundColor,
            boxShadow: " 0px 5px 25px 5px #000000bf",
            transition: "all ease-in-out 0.2s",
            height: heights,
          }}
        >
          <div className="col-12">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                height: "20%",
                textAlign: "center",
                width: "100%",
              }}
            >
              <div className="col-4">
                <div className={styles.logoHeader}>
                  <a href={"/"} style={{ margin: "0px 0px 0px 25px" }}>
                    {imagee}
                  </a>
                </div>
              </div>
              {Headers.map((element, index) => (
                <Header
                  href={element.href}
                  key={index}
                  content={element.content}
                  type={element.type}
                  items={element.items}
                  StyleBorderer={StyleBorder}
                />
              ))}
              <div
                className="col-12 d-flex align-items-center"
                style={{
                  height: "100px",
                  width: "100px",
                  paddingTop: "10px",
                }}
              >
                {Logos.map((element, index) => (
                  <div key={index} style={{ margin: "5px" }}>
                    <LogosRedess
                      href={element.href}
                      src={element.src}
                      alt={element.alt}
                      text={""}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className=" justify-content-end align-items-end"
            style={{ padding: "0px", height: "125px", width: "150px" }}
          ></div>
        </nav>
      </div>
      <nav className="sticky-top col-12  m-0">
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "flex-end",
            position: "absolute",
            bottom: "0px",
            top: `${height - 0}px`,
            left: "0px",
            right: "0px",
            zIndex: "2",
            height: "0px",
          }}
        >
          <div className={styles.buttonContactUs}>
            <a href="#footer">
            <Button variant="danger" >
              Contactanos
            </Button>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderContainer;