import React from 'react';
import "./Item.scss";
import wait from "../../assets/wait.svg";
import done from "../../assets/done.svg";
import { useAppDispatch } from "../../hook";
import { setCompleted } from "../../redux/reducers/todoReducer";

interface ItemProps {
    id: string;
    text: string;
    completed: boolean;
}

const Item: React.FC<ItemProps> = ({ text, completed, id }) => {
    const dispatch = useAppDispatch();

    return (
        <>
            <div className="todo-item">
                <img
                    src={completed ? done : wait}
                    alt=""
                    className="todo-item__icon"
                    onClick={() => {
                        dispatch(setCompleted(id));
                    }}
                />
                <span
                    className={
                        completed
                            ? "todo-item__text completed"
                            : "todo-item__text"
                    }
                >
                    {text}
                </span>
            </div>
        </>
    );
};

export default Item;