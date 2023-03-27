import { LinksList, SocialList } from '../data'

const Footer = () => {
  return (
    <footer className="section footer">
      <LinksList parentClass="footer-links" itemClass="footer-link" />
      <SocialList parentClass="footer-icons" itemClass="footer-icon" />
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}
export default Footer
