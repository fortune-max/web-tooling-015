import { Todo } from "./TodoTS";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
// committing for render to string howto
const element = createElement(
    Todo,
    {
        todo: { isCompleted: false, text: "Finish Homework" },
        index: 0,
        completeTodo: () => 0,
        finishTodo: () => 0,
    },
    null
);

console.log(renderToString(element, { pretty: true }));
