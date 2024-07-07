import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";
import {FiDribbble} from "react-icons/fi";


const HeaderSocial=()=>{
    return(
        <div className="header__social">
            <a href="https://www.linkedin.com/in/picoty-jemutai-3876812b0/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/Picoty" target="_blank"><FaGithub/></a>
            {/* <a href="https://dribble.com" target="_blank"><FiDribbble/></a> */}
        </div>
    );
}
export default HeaderSocial;