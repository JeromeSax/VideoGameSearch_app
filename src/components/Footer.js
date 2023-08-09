import SocialIcons from "./SocialIcons";
import { Container } from "./styles/Container.styled";
import { StyledFooter } from "./styles/Footer.styled";


export default function Footer() {
    return (
        <StyledFooter>
            <Container>
                <img />
                <ul>
                    <li>About us</li>
                    <li>FAQ</li>
                    <li>Contact Us</li>
                </ul>
                <SocialIcons />
            </Container>
        </StyledFooter>
    )
}