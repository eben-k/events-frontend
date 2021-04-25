import { FunctionComponent, ReactElement } from "react";
import { render as rtlRender } from "@testing-library/react";
import { createStore, Store } from "redux";
import { Provider } from "react-redux";
import { rootReducer, RootState } from "../store/reducers";
import AppThemeProvider from "./app/AppThemeProvider";

type WithReduxConfig = {
  initialState?: RootState;
  store?: Store<RootState>;
};

const render = (
  ui: ReactElement,
  {
    initialState,
    store = createStore(rootReducer, initialState),
    ...renderOptions
  }: WithReduxConfig = {}
) => {
  const Wrapper: FunctionComponent = ({ children }) => {
    return (
      <Provider store={store}>
        <AppThemeProvider>{children}</AppThemeProvider>
      </Provider>
    );
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from "@testing-library/react";

export { render };
