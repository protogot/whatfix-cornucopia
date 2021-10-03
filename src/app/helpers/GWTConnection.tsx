declare const window : any;

function CALLWINDOW(type: string, ...params : any) {
  if (
    window.wfxCornucopiaActions &&
    window.wfxCornucopiaActions[type] &&
    typeof window.wfxCornucopiaActions[type] == "function"
  ) {
    return window.wfxCornucopiaActions[type](...params);
  } else {
    return window.wfxCornucopiaActions[type];
  }
}

function UPDATEWINDOW (type: string, context: any) {
  if (window.wfxCornucopiaActions === undefined) {
    window.wfxCornucopiaActions = {};
  }

  if (type) {
    window.wfxCornucopiaActions[type] = context;
  }
}

export { CALLWINDOW, UPDATEWINDOW };
