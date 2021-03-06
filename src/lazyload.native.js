import { loadNative } from "./lazyload.load";
import { setToLoadCount } from "./lazyload.counters";

const nativeLazyTags = ["IMG", "IFRAME"];
const loadingString = "loading";

export const shouldUseNative = settings =>
    settings.use_native && loadingString in HTMLImageElement.prototype;

export const loadAllNative = (elements, settings, instance) => {
    elements.forEach(element => {
        if (nativeLazyTags.indexOf(element.tagName) === -1) {
            return;
        }
        element.setAttribute(loadingString, "lazy"); //TODO: Move inside the loadNative method
        loadNative(element, settings, instance);
    });
    setToLoadCount(instance, 0);
};
