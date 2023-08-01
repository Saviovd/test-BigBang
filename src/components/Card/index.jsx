import Loading from "../Loading";
import { CardStyle } from "./styles";

const Card = ({ title, subtitle, text, width, height }) => {
    return(
        <CardStyle style={{width: `${width}`, height: `${height}`}}>
            {title ? <h2>{title}</h2> : <Loading />}
            {subtitle ? <h2>{subtitle}</h2> : <Loading color='rgb(239 243 245)' width={70} />}
            {text ? <h2>{text}</h2> : <Loading width={70} />}
        </CardStyle>
    )
}

export default Card;
