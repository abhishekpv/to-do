import moment from "moment";
import { TodoType } from "../../db";

const TodoCard = ({
  todo,
  handleCompleteTodo,
}: {
  todo: TodoType;
  handleCompleteTodo: (todo: TodoType) => Promise<void>;
}) => {
  // const completeRef = useRef<HTMLDivElement>(null);
  // const deleteRef = useRef<HTMLDivElement>(null);

  // const [touchStart, setTouchStart] = useState(0);
  // const [touchEnd, setTouchEnd] = useState(0);

  // const handleTouchStart = (e: any) => {
  //   setTouchStart(e.targetTouches[0].clientX);
  // };

  // const moveCompleteDiv = () => {
  //   if (completeRef.current) {
  //     completeRef.current.style.position = "absolute";
  //     completeRef.current.style.right = `${100 - (touchEnd - touchStart) / 6}%`;
  //   }
  // };

  // const moveDeleteDiv = () => {
  //   if (deleteRef.current) {
  //     deleteRef.current.style.position = "absolute";
  //     deleteRef.current.style.left = `${100 - (touchStart - touchEnd) / 6}%`;
  //   }
  // };

  // const handleTouchMove = (e: any) => {
  //   setTouchEnd(e.targetTouches[0].clientX);
  //   if (touchStart - touchEnd > 0) {
  //     moveDeleteDiv();
  //   } else if(touchStart - touchEnd < 0) {
  //     moveCompleteDiv()    }
  // };

  // const handleTouchEnd = () => {
  //   if (touchStart - touchEnd > 150) {
  //   }

  //   if (touchStart - touchEnd < -150) {
  //   }
  //   if (deleteRef.current) {
  //     deleteRef.current.style.left = `100%`;
  //   }
  //   if(completeRef.current){

  //     completeRef.current.style.right = `100%`;
  //   }
  // };

  return (
    <div
      key={todo.id}
      // onTouchStart={handleTouchStart}
      // onTouchMove={handleTouchMove}
      // onTouchEnd={handleTouchEnd}
      className="todo-card"
    >
      <p>{todo.task}</p>
      <div className="todo-card-footer">
        <p>{moment(Number(todo.createdAt)).fromNow()}</p>
        <p></p>
      </div>
      <button
        className="complete-btn"
        onClick={() => {
          handleCompleteTodo(todo);
        }}
      >
        Mark as done
      </button>
      {/* <div ref={deleteRef} className="delete-curtain">
        Delete
      </div>
      <div ref={completeRef} className="complete-curtain">
        Mark as done
      </div> */}
    </div>
  );
};

export default TodoCard;
