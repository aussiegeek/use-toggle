import { useState } from "react";

function useToggle(): [boolean, () => void] {
  const [value, setValue] = useState<boolean>(false);

  const toggleValue = () => {
    setValue(!value);
  };
  return [value, toggleValue];
}

export default useToggle;
