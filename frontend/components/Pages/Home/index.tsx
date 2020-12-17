import TaskCard from '@/components/Utils/TaskCard';
import Input from '@/components/Utils/Input';
import style from './style.module.scss';

function HomeComponent({ data, deleteTask, refetch }) {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <h1>Trella</h1>
        <h2>Get done your things!</h2>
      </div>
      <Input refetch={refetch} />
      <br />
      <div className={style.tasksContainer}>
        {data.map((task) => (
          <TaskCard key={task.id} deleteTask={deleteTask} data={task} />
        ))}
      </div>
    </div>
  );
}

export default HomeComponent;
