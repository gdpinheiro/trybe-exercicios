import { createStore } from "redux";

const NEXT_COLOR = "NEXT_COLOR";
const PREVIOUS_COLOR = "PREVIOUS_COLOR";

const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");

previousButton.addEventListener("click", () => {
  store.dispatch({ type: PREVIOUS_COLOR });
});
nextButton.addEventListener("click", () => {
  store.dispatch({ type: NEXT_COLOR });
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_COLOR:
      return;
    case PREVIOUS_COLOR:
      return;
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});
