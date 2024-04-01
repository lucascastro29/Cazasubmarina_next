import {
  useSelector
} from "../node_modules/react-redux/es/exports";

import LogosRedess from "../components/LogosRedess";
import dynamic from "../node_modules/next/dynamic";
import Styles from "../styles/Home.module.css"
import { Button, Form, Modal } from "../node_modules/react-bootstrap/esm/index";

export default function Footer() {

  const {  LogosWhite } = useSelector((state:{data:any}) => state.data);
  const MapWithNoSSR = dynamic(() => import("../components/map"), {
    ssr: false
  });
  return (<>
    <div id="footer" className="col-12 d-flex align-items-center justify-content-center " style={{color: "white", backgroundColor: "#000c1d",paddingTop:"1%"}}>
            <div className="col-10 ">
            <div className="col-12 d-flex align-items-center justify-content-center">
              <div className="col-12">
             <h1 className={Styles.FONT} style={{borderBottom:"2px solid white",padding:"0px 15px 5px 5px", fontSize:"300%"}}>CONTACTANOS</h1>
                 </div>

             </div>
           
       
        <div className="col-12 d-flex justify-content-center align-items-center" >
        <div className="col-6 ">
          <div style={{height:"320px",paddingTop:"20px"}}>

          <MapWithNoSSR/>   


          </div>

                <div
                  id="logos"
                  className="d-flex" style={{minWidth:"5px"}} 
                >{LogosWhite.map((element, index) => (
                  <div key={index} style={{margin:"10px 15px 15px 15px"}}>
                    <LogosRedess
                      href={element.href}
                      src={element.src}
                      alt={element.alt}
                      text={""}
                    />
                  </div>
                ))}</div>
             </div>
             <div className="col-1 "> </div>
             <div
            className="col-5 "
            style={{ paddingBottom: "0px", margin: "0px 0px 10px 0px" }}
          >  <Form >
          <Modal.Title style={{fontSize:"100%"}}>Envianos un mail:</Modal.Title>
            <Form.Group className="mb-3 col-10"  controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Nombre"
                autoFocus
              />
              
            </Form.Group>
            <Form.Group className="mb-3 col-10"  controlId="exampleForm.ControlInput1">
       
            <Form.Control
                type="email"
                placeholder="Email"
                autoFocus
              />
            </Form.Group>
            
            <Form.Group className="mb-3 col-10"  controlId="exampleForm.ControlInput1">
       
            <Form.Control
                type="text"
                placeholder="Asunto"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3 col-10"
              controlId="exampleForm.ControlTextarea2"
              
            >
              <Form.Control as="textarea" rows={3} placeholder="Mensaje"/>
            </Form.Group>
            <div className="col-12 d-flex" style={{paddingRight:"2%"}}>
             <div className="col-9"> <a  target="_blank"
          rel="noreferrer" href="https://wa.me/59899606606">
                <Button className="btn-success" >
           Escribinos por whatsapp
          </Button></a> </div>
          <div className="col" >
          <Button className="btn-success" >
           Enviar
          </Button>
          </div>
          
            </div>
            <div className="col-12">
             
              </div>
            
          
          </Form>
            
          </div>
             </div>
            </div>
           
           
            </div>
    
    
    </>);
}
