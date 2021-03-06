/**
 * Custom data stored in editor
 */
export default interface CustomData {
    /**
     * Value of this custom data
     */
    value: any;

    /**
     * Optional disposer function of the custom data.
     * When a valid value is set, it will be invoked when editor is disposing
     */
    disposer?: (value: any) => void;
}
