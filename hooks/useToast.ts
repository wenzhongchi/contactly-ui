import create from "zustand";
import shallow from "zustand/shallow";

type ToastStore = {
    toastList: Set<string>;
    showToast: (id: string) => void;
    closeToast: (id: string) => void;
    closeAllToast: () => void;
};

export const useToastStore = create<ToastStore>((set, get) => ({
    toastList: new Set<string>(),
    showToast: (id: string) => {
        const { toastList } = get();

        const list = new Set(toastList as Set<string>);
        list.add(id);

        set({
            toastList: list,
        });
    },
    closeToast: (id: string) => {
        const { toastList } = get();

        const list = new Set(toastList as Set<string>);
        list.delete(id);

        set({
            toastList: list,
        });
    },
    closeAllToast() {
        const list = new Set<string>();

        set({
            toastList: list,
        });
    },
}));

type ToastHookProps = {
    showToast: (id: string) => void;
    closeToast: (id: string) => void;
    closeAllToast: () => void;
};

export const useToast = (): ToastHookProps =>
    useToastStore(
        (store) => ({
            showToast: store.showToast,
            closeToast: store.closeToast,
            closeAllToast: store.closeAllToast,
        }),
        shallow,
    );
