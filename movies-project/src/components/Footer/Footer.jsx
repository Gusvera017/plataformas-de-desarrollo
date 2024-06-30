import "./Footer.css";

const Footer = () => {
  return (
    <div className="container-footer">
      <p>The Movies Project</p>
      <p>{(new Date().getFullYear())}</p>
    </div>
  )
}

export default Footer;