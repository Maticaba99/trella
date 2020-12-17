// Styles
import style from './style.module.scss';

function TaskCard({ data, deleteTask }) {
  const deleteT = async () => {
    await deleteTask(data.id);
  };
  return (
    <div className={style.container}>
      <div className={style.title}>
        <h3>{data.title}</h3>
        <div onClick={deleteT} className={style.closeIcon}>
          X
        </div>
      </div>
      <div className={style.content}>{data.content}</div>
    </div>
  );
}

export default TaskCard;
