import { FaTwitter, FaFacebook } from "react-icons/fa";
import { StyledSocialIcons } from "./styles/SocialIcons.styled"

export default function SocialIcons() {
    return (
        <StyledSocialIcons>
            <li>
            <a href="https://twitter.com">
                <FaTwitter />
            </a>
           </li>
           <li> 
            <a href="https://facebook.com">
                <FaFacebook />
            </a>
           </li>
        </StyledSocialIcons>
    )
}