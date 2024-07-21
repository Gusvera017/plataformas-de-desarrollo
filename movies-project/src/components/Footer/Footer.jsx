import "./Footer.css";

const Footer = () => {
  return (
    <div className="fixed-bottom">
      <div className="container-footer">
        <p>The Movies Project</p>
        <p>{(new Date().getFullYear())}</p>
      </div>
    </div>
  )
}

export default Footer;