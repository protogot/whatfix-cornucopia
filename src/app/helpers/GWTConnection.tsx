declare const window : any;

function CALLWINDOW(type: string, ...params : any) {
  if (
    window.wfxActions &&
    window.wfxActions[type] &&
    typeof window.wfxActions[type] == "function"
  ) {
    return window.wfxActions[type](...params);
  } else {
    return window.wfxActions[type];
  }
}

function UPDATEWINDOW (type: string, context: any) {
  if (window.wfxActions === undefined) {
    window.wfxActions = {};
  }

  if (type) {
    window.wfxActions[type] = context;
  }
}

export { CALLWINDOW, UPDATEWINDOW };
