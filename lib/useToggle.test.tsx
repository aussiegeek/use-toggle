import { renderHook, act } from "@testing-library/react-hooks";
import useToggle from "./useToggle";

describe("useToggle", () => {
  test("returns false by default", () => {
    const { result } = renderHook(() => useToggle());

    act(() => {
      expect(result.current[0]).toBeFalsy();
    });
  });

  test("calling useToggle sets value to true", () => {
    const { result } = renderHook(() => useToggle());

    act(() => {
      result.current[1]();
    });
    expect(result.current[0]).toBeTruthy();
  });

  test("calling useToggle twice sets value to true then false", () => {
    const { result } = renderHook(() => useToggle());

    act(() => {
      result.current[1]();
    });
    expect(result.current[0]).toBeTruthy();

    act(() => {
      result.current[1]();
    });
    expect(result.current[0]).toBeFalsy();
  });
});
