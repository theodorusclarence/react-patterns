import * as React from 'react';

type HidableCardContextType = {
  hidden: boolean;
  toggle: () => void;
};
const HidableCardContext = React.createContext<HidableCardContextType | null>(
  null
);

export function HidableCardContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hidden, setHidden] = React.useState(false);
  function toggle() {
    setHidden((prev) => !prev);
  }

  return (
    <HidableCardContext.Provider value={{ hidden, toggle }}>
      {children}
    </HidableCardContext.Provider>
  );
}
export const useHidableCardContext = () => {
  const context = React.useContext(HidableCardContext);

  if (!context) {
    throw new Error(
      'useHidableCardContext must be used inside the HidableCardContextProvider'
    );
  }

  return context;
};
