import { Children, createContext, useEffect } from "react";
import { useState } from "react";
import featureFlagsDataServiceCall from "../data";

export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagGlobalState({children}) {
  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState({});

  async function fetchFeatureFlags() {

    try {
      setLoading(true);
      const respo = await featureFlagsDataServiceCall();
      setEnabledFlags(respo);
      setLoading(false);
    //   console.log(enabledFlags[showTabs])

    } catch (error) {
      console.log(error);
      setLoading(false);
      throw new Error(error);
    }
  }

  useEffect(() => {
    fetchFeatureFlags();
  }, []);

  return (
    <FeatureFlagsContext.Provider value={{ loading, enabledFlags }}>
         {children}
  </FeatureFlagsContext.Provider>
  );
}
