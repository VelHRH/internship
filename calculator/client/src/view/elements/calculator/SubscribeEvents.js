"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SubscribeEvents {
    constructor(modelContext, screenContext) {
        modelContext.subscribe("updateInput" /* Event.UPDATE_INPUT */, screenContext.inputElem.updateInput);
        modelContext.subscribe("displayResult" /* Event.DISPLAY_RESULT */, screenContext.resultField.displayResult);
        modelContext.subscribe("displayError" /* Event.DISPLAY_ERROR */, screenContext.errorField.displayError);
    }
}
exports.default = SubscribeEvents;
