# Oden Demo Video — Remotion Specification

Use this document as the prompt/spec to recreate the interactive demo as a rendered video in Remotion. Total runtime: **~29 seconds**.

---

## 1. Overview & Narrative

**Story:** Show how Oden goes from a competitor pricing alert to an updated battle card and a Slack notification — automatically, without the user leaving the app.

**Flow:**
1. User sees Oden dashboard with a “Competitor Updates” news feed.
2. One news item is highlighted (Nexus pricing drop).
3. A floating snackbar appears with the pricing change.
4. A Chat panel slides in from the right; user “types” a request.
5. Oden “responds” with an updated battle card summary.
6. View switches to Assets tab; the battle card row is highlighted as “Updated”.
7. View zooms out to a desktop: Oden app (small, left) + Slack window (right).
8. Slack expands to full frame; Oden bot message appears in #competitive-intel with the full alert and “View updated battle card” link.

**Tagline (caption below video):**  
“From competitor alert to updated battle card and team notification — automatically”

---

## 2. Technical Specs

- **Aspect ratio:** Match the website container — e.g. 16:9 or the same ratio as the demo container (width ~1100px, height 520–580px → ~1.9:1 or 16:9).
- **Frame rate:** 30fps (or 24fps if you prefer).
- **Background:** Wrap the entire demo in a subtle frame: light gray background `#FAFAFA`, inner content area with rounded corners, and a soft border (e.g. `rgba(0,0,0,0.2)` padding/border) so it reads as a “video player” or embedded demo.

---

## 3. Scene-by-Scene Breakdown (with Timings)

All timings are from animation start (t=0). Use these as Remotion `delay` or sequence offsets.

| Time (s) | Step | What happens |
|----------|------|--------------|
| 0 | IDLE | Full Oden app in browser chrome, dashboard tab. |
| 1.5 | NEWS_HIGHLIGHT | First row in “Competitor Updates” list gets a yellow highlight (e.g. `#FEF9C3` or yellow-50). |
| 5.0 | OPEN_CHAT | Chat panel slides in from right (slideIn: from translateX(100%) to 0). Floating snackbar appears at bottom center. |
| 6.5 | TYPING | User message appears with typing effect (see copy below). |
| 10.0 | RESPONSE | Oden’s reply appears (fade in) with checkmarks and “View updated battle card” link. |
| 14.0 | NAVIGATE_ASSETS | Tab switches from “Dashboard” to “Assets”; Assets view visible. |
| 16.0 | SHOW_UPDATED | First table row (Acme vs Nexus battle card) gets green highlight; status changes to “Updated” with checkmark; “Modified” shows “Just now”. |
| 19.0 | DESKTOP_VIEW | Cut or transition to “desktop” view: browser chrome title changes to “Desktop”, desktop wallpaper visible, Oden app scales down to ~35% and moves left (~-18% translateX), Slack window appears as a tile (e.g. 340×203px) to the right of the Oden app, rounded 12px, strong shadow. |
| 23.0 | EXPAND_SLACK | Slack tile expands to full frame (same size as content area). Oden app stays small and dims (e.g. opacity 0.5). |
| 25.0 | SLACK_MESSAGE | In #competitive-intel, Oden bot message appears (fade in): avatar (Oden logo), “Oden” name, “APP” badge, timestamp, and the full message block (see copy). |
| 29.0 | COMPLETE | Freeze on final frame (Slack with Oden message visible). Optionally fade to same frame with a soft “Replay” or end card. |

---

## 4. Visual Design Specs

### 4.1 Browser Chrome (when showing app.getoden.com)

- **Bar:** Dark gray `#2D2D2D`, bottom border `#3f3f46` (zinc-700).
- **Traffic lights (left):** Red `#FF5F57`, Yellow `#FEBC2E`, Green `#28C840` (circles).
- **Back/forward:** Small gray chevrons.
- **URL bar (center):** Dark `#1A1A1A`, border `#3f3f46`, lock icon green, text “app.getoden.com” `#a1a1aa` (zinc-400), small text.
- **Right:** Small icons (e.g. share, more).

### 4.2 Desktop Chrome (after t=19s)

- Same bar; center text: “Desktop” in `#a1a1aa`, no URL bar.

### 4.3 Oden App — Shell

- **Sidebar:** Background `#FAFAFA`, width ~48px; top: Oden logo (orange “O” mark); nav icons (House, Compass, Folder, Database, Lightbulb, Shield) — active tab white bg, border, shadow; inactive gray.
- **Header:** Tabs “Dashboard” / “Assets” (file-folder style tab); right: “Chat” button with “⌘ + K”.
- **Content area:** White background, borders `#e4e4e7` (zinc-200).

### 4.4 Dashboard Tab Content

- Greeting: “Good evening, Sarah” (muted), then “What are you working on?” (serif, italic, large).
- Input area: White card, border, placeholder “Ask Oden to research competitors, draft content, or analyze calls...”, paperclip and arrow button.
- Quick actions: “Create a battlecard”, “Analyze a competitor”, “Draft sales email” (pill buttons).
- **Competitor Updates block:** Title “Competitor Updates”, “View all” link. Table/list:
  - Row 1: Favicon (e.g. TechCrunch), “Nexus drops Enterprise pricing by 20%”, “TechCrunch • 2h ago”, tag “Pricing” (red). **Highlight this row at t=1.5s** (e.g. yellow-50).
  - Row 2: “Prism launches AI-powered win/loss analysis”, VentureBeat, 5h ago, “Product” (blue).
  - Row 3: “Vertex hiring 50+ engineers in EMEA region”, LinkedIn, 1d ago, “Hiring” (amber).

### 4.5 Chat Panel (slides in from right at 5s)

- Width ~380px, white, left border, shadow.
- Header: “Chat”, close (X).
- **User message (from 6.5s, typing):** Right-aligned bubble, dark bg `#18181b`, white text. Text typed over ~3.5s at ~40ms per character:  
  **“Nexus dropped their Enterprise pricing by 20%. Update our battle card.”**  
  Optional: blinking cursor during typing.
- **Oden reply (from 10s):** Left-aligned, white card, border. Copy:
  - “Done! I've updated the Nexus battle card with the new pricing information:”
  - Bullets (green checkmarks): “Updated pricing: $12,000/year (was $15,000)”, “Added new objection handler for price comparison”, “Updated competitive positioning section”
  - Button/link: “View updated battle card” with arrow (primary orange).
- Footer: Input “Ask Oden anything...”, paperclip, send button (primary).

### 4.6 Floating Snackbar (visible 5s–19s, or until desktop view)

- Position: Bottom center of the demo frame.
- Style: Dark `#18181b`, white text, thin border, shadow. Left accent: vertical orange bar (primary).
- Line 1: “Nexus Enterprise: ~~$15,000~~ → **$12,000/yr**” (strikethrough then primary color).
- Line 2: “Competitor pricing change detected” (smaller, muted).
- Animation: Slide up into view (e.g. from translateY(20px) to 0, opacity 0→1), optional subtle pulse on the accent bar.

### 4.7 Assets Tab (from 14s)

- Title “Assets”, “3 items”, search field, “+ New asset” (dark button).
- Table: columns Name, Type, Status, Modified.
- **Row 1 (highlight from 16s):**  
  - Icon (orange/primary), “Acme vs Nexus - Battle Card”, Type: Battle card, Status: “Updated” (green pill with check), Modified: “Just now”.  
  - Row background green-50 when highlighted.
- Row 2: “Acme vs Prism - Battle Card”, Battle card, Active, Feb 1, 2026.
- Row 3: “Pricing Matrix Q1 2026”, Analysis, Active, Jan 28, 2026.

### 4.8 Desktop Wallpaper (from 19s)

- Gradient: deep purple/blue (`#2D1B4E` → `#1E3A5F` → `#0D2137`).
- Optional soft gradient orbs (purple/teal) for depth.

### 4.9 Oden App in Desktop View (19s–end)

- Scale to ~35%, translate left so it sits in the left portion of the frame.
- Border radius 12px, strong shadow (e.g. `0 25px 50px -12px rgba(0,0,0,0.5)`).
- When Slack is expanded (23s+), reduce opacity to ~0.5 so Slack is the focus.

### 4.10 Slack — Mini Tile (19s–23s)

- Size ~340×203px, rounded 12px, same shadow as above.
- Dark sidebar `#1A1D21`, border `#35373B`: workspace “A” (purple), channel list with “# competitive-intel” selected (blue bg), unread badge (orange “1”).
- Main area: header “# competitive-intel”, then compact Oden message: small Oden logo (12px), “Oden” “APP”, “🚨 Competitor Pricing Alert”, “Nexus dropped pricing...”.

### 4.11 Slack — Full View (23s–end)

- Same layout as real Slack: left rail (workspace icon, Home, DMs, Search), channel list (Acme Inc, # general, # sales, **# competitive-intel** selected, # product), main channel area.
- Channel header: “# competitive-intel | 5 members”.
- **Oden message (appears at 25s):**
  - Avatar: Oden logo 36×36 (orange rounded square with white “O” shape — see logo spec below).
  - Name: “Oden”, badge “APP”, time “2:34 PM”.
  - Message block (gray-50 bg, border):
    - “🚨 Competitor Pricing Alert: Nexus”
    - “Nexus has dropped their Enterprise pricing by 20% (from $15,000 → $12,000/year).”
    - Nested box: “What this means for us:” then bullets: “Our Enterprise tier is now priced 15% higher”, “May see increased price objections in deals”, “Battle cards have been updated with new objection handlers”.
    - Link: “View updated battle card” with arrow (Slack blue `#1264A3`).
- Input at bottom: “Message #competitive-intel”.

### 4.12 Oden Logo (Slack avatar and app icon)

- **Primary orange:** `#D95F2B`.
- **Shape:** Rounded square (e.g. 48px radius on 400×400 viewBox).
- **Mark:** White “O” / ring shape. Path (approximate, scale to your viewBox):
  - `M129.938 340.35V303.648H91.9406V97.2538H129.938V60.1202H261.201V97.2538H299.63V303.648H261.201V340.35H129.938ZM146.777 281.627H244.361V119.275H146.777V281.627Z`
- Use this for: app sidebar icon, Slack message avatar (36px), Slack mini preview (12px).

---

## 5. Colors Reference

- **Primary (Oden orange):** `#D95F2B` (or `hsl(17, 73%, 45%)`).
- **Backgrounds:** White `#FFFFFF`, off-white `#FAFAFA`, zinc-50 `#fafafa`, zinc-100 `#f4f4f5`.
- **Borders:** zinc-200 `#e4e4e7`, zinc-300 `#d4d4d8`.
- **Text:** zinc-900 `#18181b`, zinc-700 `#3f3f46`, zinc-600 `#52525b`, zinc-500 `#71717a`, zinc-400 `#a1a1aa`.
- **Slack:** Background `#1A1D21`, borders `#35373B`, selected channel blue `#1164A3`, workspace purple `#4A154B`, link blue `#1264A3`, unread badge orange `#E8912D`.
- **Highlights:** Yellow-50 for news row, green-50 + green-600/green-200 for “Updated” state.

---

## 6. Animations & Easing

- **Chat panel:** Slide in from right, 0.4s, ease-out or cubic-bezier(0.16, 1, 0.3, 1).
- **Snackbar:** Slide up + fade in, 0.4s, same easing.
- **Typing:** Character-by-character, ~40ms per character; cursor can blink.
- **Oden reply / Slack message:** Fade in, ~0.3s.
- **Desktop transition:** At 19s, crossfade or short transition (e.g. 0.5s) from browser view to desktop + wallpaper; Oden app scale/position 1s ease-out.
- **Slack expand:** 1s ease-out from tile to full frame.
- **News row / Assets row highlight:** Color transition, ~0.5s.

---

## 7. Remotion Structure Suggestion

- **Composition:** Single composition, 29+ seconds, 1920×1080 (or 16:9 of your choice).
- **Sequences:** One sequence per “step” or group of steps, driven by `delay` or a timeline:
  - 0–1.5s: Dashboard idle.
  - 1.5–5s: News highlight + hold.
  - 5–6.5s: Chat open + snackbar appear.
  - 6.5–10s: Typing + hold.
  - 10–14s: Response visible.
  - 14–16s: Assets tab, then row highlight.
  - 16–19s: Hold then transition to desktop.
  - 19–23s: Desktop with mini Slack.
  - 23–25s: Slack expand.
  - 25–29s: Slack message appear, hold.
- Use Remotion’s `<Sequence>` and `useCurrentFrame()` / `interpolate()` for typing effect and any scroll/opacity/transform.
- Export the Oden logo as an SVG or React component and reuse in sidebar, Slack mini, and Slack full.

---

## 8. Copy Checklist

- **User chat message:** “Nexus dropped their Enterprise pricing by 20%. Update our battle card.”
- **Oden chat reply:** “Done! I've updated the Nexus battle card with the new pricing information:” + 3 checkmark bullets + “View updated battle card”.
- **Snackbar:** “Nexus Enterprise: $15,000 → $12,000/yr” and “Competitor pricing change detected”.
- **Slack Oden message:** “🚨 Competitor Pricing Alert: Nexus” + body paragraph + “What this means for us:” + 3 bullets + “View updated battle card”.
- **Caption:** “From competitor alert to updated battle card and team notification — automatically”.

---

## 9. Optional Add-Ons for Remotion

- Add a very subtle noise or grain for a product-ui feel.
- Optional: soft focus or blur on the “background” app when Slack is full screen.
- End frame: keep last frame for 1–2s, or add a brief “Replay” or Oden logo watermark.

Use this spec as the single source of truth for building the Remotion composition; adjust durations by a few frames if needed for pacing.
