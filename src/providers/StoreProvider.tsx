"use client";
import Loading from "@/components/ui/loading";
import { AppStore, makeStore } from "@/redux/store";
import { ReactNode, useRef } from "react";
import { Provider } from "react-redux";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";

const StoreProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<AppStore>(undefined);
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  const persistedStore = persistStore(storeRef.current);
  return (
    <Provider store={storeRef.current}>
      {/* //deploy it in build mode   */}
      {/* <PersistGate loading={<Loading />} persistor={persistedStore}>  */}
        {children}
      {/* </PersistGate>  */}
    </Provider>
  );
};

export default StoreProvider;
