"use strict";

registerPaint("headerHighlight", class {
    /**
     * Context Options
     * @returns {object} - Returns an object with context options set as key/value pairs.
     */
    static get contextOptions() {
        return { alpha: true };
    }
    /**
     * Input Properties
     * @returns {string[]} - Returns an array of strings representing CSS custom properties.
     */
    static get inputProperties() {
        return ["--highColor"];
    }

    /**
     * Paint func
     * @param {CanvasRenderingContext2D} ctx - Canvas drawing context (actually supposed to be PaintRenderingContext2D type, but intellisense does not identify this yet.)
     * @param {object} size - Object with paint sizing properties for drawn element.
     * @param {object} props - Object with get() method for drawn element.
     */
    paint(ctx, size, props) {
        // Set where to start the highlight and dimensions.
        const x = 0;
        const y = size.height * 0.3;
        const blockWidth = size.width * 0.33;
        const highlightHeight = size.height * 0.85;
        const color = props.get("--highColor");

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(blockWidth, y);
        ctx.lineTo(blockWidth + highlightHeight, highlightHeight);
        ctx.lineTo(x, highlightHeight);
        ctx.lineTo(x, y);
        ctx.fill();

        // Create the dash effect.
        for (let i = 0; i < 4; i++) {
            const start = i * 2;
            const adjustedStart = start * 10;

            ctx.beginPath();
            ctx.moveTo(blockWidth + adjustedStart + 10, y);
            ctx.lineTo(blockWidth + adjustedStart + 20, y);
            ctx.lineTo(blockWidth + adjustedStart + 20 + highlightHeight, highlightHeight);
            ctx.lineTo(blockWidth + adjustedStart + 10 + highlightHeight, highlightHeight);
            ctx.lineTo(blockWidth + adjustedStart + 10, y);
            ctx.fill();
        }
    }
});