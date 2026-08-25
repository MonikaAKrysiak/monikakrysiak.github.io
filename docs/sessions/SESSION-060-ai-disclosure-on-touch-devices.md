# Session 060 – AI Disclosure on Touch Devices

## Goal

Fix the mobile interaction issue affecting the AI disclosure in the site footer.

On a physical mobile device, tapping the AI disclosure did not display the tooltip correctly and caused the page viewport to jump unexpectedly.

---

## Problem

The AI disclosure worked correctly with a mouse on desktop, but behaved incorrectly on touch devices.

Observed behaviour:

- tapping the AI disclosure did not leave the tooltip visible,
- the viewport jumped upward,
- the current URL contained `#hobbies`, initially suggesting unexpected anchor navigation,
- reproducing the interaction in mobile browser emulation exposed additional layout behaviour.

The `#hobbies` hash was eventually identified as unrelated to the bug itself. The header's active-section logic updates the URL with `history.replaceState()` while scrolling.

---

## Investigation

The issue was investigated incrementally.

The following areas were inspected:

- `Footer.astro`,
- AI disclosure JavaScript,
- AI disclosure CSS,
- hobby cards and their links,
- hobbies grid layout,
- header navigation and active-section tracking.

This ruled out:

- accidental navigation from the disclosure button,
- an oversized or stretched hobby-card link,
- overlapping hobby cards,
- the `#hobbies` hash as the cause of the viewport movement.

The investigation identified two touch-specific problems.

### Mouse events on touch devices

The disclosure used `mouseenter` in addition to its click behaviour.

Touch interaction can generate mouse-compatible events, causing the hover behaviour and click behaviour to interfere with each other.

The hover listener was therefore restricted to devices that actually support hover using:

```js
window.matchMedia("(hover: hover)").matches
```

Touch devices now rely on the explicit click interaction.

### Tooltip horizontal overflow

The tooltip originally used absolute positioning relative to the disclosure trigger:

```css
position: absolute;
left: 0;
width: min(24rem, calc(100vw - 2 * var(--space-md)));
```

On narrow screens the trigger is positioned toward the right side of the footer. Although the tooltip width itself respected the viewport width, its starting position was relative to the trigger.

This allowed the tooltip to extend beyond the viewport and create horizontal overflow.

For mobile viewports the tooltip now uses fixed positioning with explicit spacing from the viewport edges.

This prevents the tooltip from increasing the document width and keeps it fully visible.

---

## Result

The AI disclosure now behaves appropriately for different input methods:

- desktop devices retain hover behaviour,
- keyboard interaction continues to work,
- touch devices use tap/click interaction without conflicting hover events,
- the tooltip remains within the mobile viewport,
- opening the disclosure no longer causes the page layout to scale horizontally.

---

## Verification

Local verification completed successfully:

- desktop browser interaction,
- mobile browser emulation,
- disclosure open/close behaviour,
- tooltip positioning,
- no horizontal layout expansion,
- `npm run build` completed successfully.

A final smoke test on a physical mobile device remains to be performed after deployment.

---

## Files changed

- `src/components/Footer.astro`
- `src/styles/global.css`

---

## Commit

```text
fix: improve AI disclosure behavior on touch devices
```

---

## Remaining verification

After merge and GitHub Pages deployment:

1. Open the production site on a physical mobile device.
2. Scroll to the footer.
3. Tap `AI disclosure`.
4. Confirm that the disclosure opens.
5. Confirm that the viewport does not jump or rescale.
6. Tap the trigger again and outside the disclosure to verify closing behaviour.

If the production smoke test passes, the bugfix can be considered complete.
