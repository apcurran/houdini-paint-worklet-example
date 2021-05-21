"use strict";

registerPaint("headerHighlight", class {
    static get contextOptions() {
        return { alpha: true };
    }

    /**
     * @param {CanvasRenderingContext2D} ctx - Canvas drawing context (actually supposed to be PaintRenderingContext2D type, but intellisense does not identify this yet.)
     * @param {number} size - Paint size property for drawn element.
     */
    paint(ctx, size) {
        ctx.fillStyle = "hsla(55 90% 60% / 1)";
        ctx.fillRect(0, size.height / 3, size.width * 0.4, size.height * 0.6);
    }
});