import React from "react";
import { useSelector } from "react-redux";
import { add, appSelector, reset } from "./store/slices/appSlice";
import { useAppDispatch } from "./store/stores";

type Props = {};

export default function App({}: Props) {
  // 1# const appReducer = useSelector((state: any) => state.appReducer);
  // 2# const appReducer = useSelector(({ appReducer }: any) => appReducer);
  const appReducer = useSelector(appSelector);
  const dispatch = useAppDispatch();
  return (
    <div>
      <div>App: {appReducer.count}</div> <br />
      <button onClick={() => dispatch(add())}>add</button>
      <br />
      <button onClick={() => dispatch(reset(0))}>reset</button>
    </div>
  );
}
