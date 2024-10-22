import { APPLICATION_THEME } from "src/constants/common-constants";
import { MODIFY_APP_THEME } from "src/store/common-reducer/common-reducer-constants";

const initialState = {
  appTheme: "light",
};
const commonReducer = (state = initialState, action: any) => {
  const { type } = action;
  switch (type) {
    case MODIFY_APP_THEME: {
      return {
        ...state,
        appTheme:
          state.appTheme === APPLICATION_THEME.LIGHT
            ? APPLICATION_THEME.DARK
            : APPLICATION_THEME.LIGHT,
      };
    }
    default:
      return state;
  }
};

export default commonReducer;
