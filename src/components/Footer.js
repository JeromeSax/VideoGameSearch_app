import SocialIcons from "./SocialIcons";
import { Container } from "./styles/Container.styled";
import { StyledFooter } from "./styles/Footer.styled";
import backgroundImg from "./img/background.jpg";


export default function Footer() {
    return (
        <StyledFooter className="background-2"style={{backgroundImage: `url(${backgroundImg})` }}>
            <Container>
                <ul className="footer-text">
                    <ol>About us</ol>
                    <ol>FAQ</ol>
                    <ol>Contact Us</ol>
                </ul>
                <SocialIcons />
                <p className="copyright-text">&copy; 2023 Romey-Rome Games. All rights reserved</p>
            </Container>
        </StyledFooter>
    )
}