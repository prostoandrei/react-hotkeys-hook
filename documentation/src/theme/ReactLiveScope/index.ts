import React from 'react';
import { isHotkeyPressed, useHotkeys, useRecordHotkeys } from 'react-hotkeys-hook'
// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  isHotkeyPressed,
  useHotkeys,
  useRecordHotkeys,
};
export default ReactLiveScope;
