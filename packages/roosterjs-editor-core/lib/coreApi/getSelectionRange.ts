import { contains } from 'roosterjs-editor-dom';
import { EditorCore, GetSelectionRange } from 'roosterjs-editor-types';

/**
 * Get current or cached selection range
 * @param core The EditorCore object
 * @param tryGetFromCache Set to true to retrieve the selection range from cache if editor doesn't own the focus now
 * @returns A Range object of the selection range
 */
export const getSelectionRange: GetSelectionRange = (
    core: EditorCore,
    tryGetFromCache: boolean
) => {
    let result: Range = null;

    if (!tryGetFromCache || core.api.hasFocus(core)) {
        let selection = core.contentDiv.ownerDocument.defaultView.getSelection();
        if (selection && selection.rangeCount > 0) {
            let range = selection.getRangeAt(0);
            if (contains(core.contentDiv, range)) {
                result = range;
            }
        }
    }

    if (!result && tryGetFromCache) {
        result = core.domEvent.value.selectionRange;
    }

    return result;
};
