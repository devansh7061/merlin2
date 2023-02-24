import create from "zustand";

const contextStore =  (set) => ({
    response: "",
    setResponse: (Response) => {
        set(() => ({response: Response}))
    }
})

const useContextStore = create(contextStore);
export default useContextStore;
