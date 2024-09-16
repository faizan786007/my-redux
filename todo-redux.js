//action type
const ADD_TODO = "add todo";
const TOGGLE_TODO = "toggle todo";

//action creator
const addTodo = (text) => ({ type: ADD_TODO, text });
const toggleTodo = (index) => ({ type: TOGGLE_TODO, index });

//intial state
const initialState = {
	todos: [],
};

//reducer
function todoReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_TODO:
			return {
				...state,
				todos: [...state.todos, { text: action.text, completed: false }],
			};
		case TOGGLE_TODO:
			return {
				todos: state.todos.map((todo, i) =>
					i == action.index ? { ...todo, completed: !todo.completed } : todo
				),
			};
		default:
			return state;
	}
}
const redux = require("redux");

//store
const store = redux.createStore(todoReducer);

//dispatch actions
store.dispatch(addTodo("eat in mrg"));
store.dispatch(addTodo("gym in evening"));
store.dispatch(toggleTodo(0));
store.dispatch(addTodo("study in night"));
store.dispatch(toggleTodo(2));

//get current state
console.log(store.getState());
