import Loading from "../Loading";
import { TaskStyle } from "./styles";

const Task = ({ title, text, width, height }) => {
    return(
        <TaskStyle style={{width: `${width}`, height: `${height}`}}>
            {title ? <h2>{title}</h2> : ''}
            {text ? <h2>{text}</h2> : <Loading width={"40%"} />}
        </TaskStyle>
    )
}

export default Task;