import Task from "../Task";
import { TasksStyle, Title } from "./styles";

const Tasks = () => {
    return(<>
    <TasksStyle>
        <Title>Tarefas de hoje</Title>
        <Task />
        <Task />
        <Task />
        <Title>Projeto recente</Title>
        <Task height={'110px'} />
    </TasksStyle>
    </>)
}

export default Tasks;