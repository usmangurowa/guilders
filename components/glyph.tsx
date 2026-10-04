// Division glyphs — isometric hairline drawings from the Guilders design system.
// Colours come from theme variables, so they follow light/dark automatically.
// Rule: exactly one element per glyph is blue (the part that moves).

export type GlyphName = "technology" | "logistics" | "commerce" | "assets" | "ventures";

const glyphs: Record<GlyphName, { viewBox: string; body: React.ReactNode }> = {
  technology: {
    viewBox: "-86.9 -110.5 160 160",
    body: (
      <>
      <path d="M8.7 -20 L29.4 -8 L29.4 -5 L15.6 3 L-5.2 -9 L-5.2 -12 Z" fill="var(--glyph-face, var(--c-paper))" stroke="var(--c-ink)"/>
      <path d="M-5.2 -12 L15.6 0 L29.4 -8" stroke="var(--c-ink)"/>
      <path d="M15.6 0 L15.6 3" stroke="var(--c-ink)"/>
      <path d="M11.3 -39.5 L16.5 -36.5 L16.5 -9.5 L11.3 -6.5 L6.1 -9.5 L6.1 -36.5 Z" fill="var(--glyph-face, var(--c-paper))" stroke="var(--c-ink)"/>
      <path d="M6.1 -36.5 L11.3 -33.5 L16.5 -36.5" stroke="var(--c-ink)"/>
      <path d="M11.3 -33.5 L11.3 -6.5" stroke="var(--c-ink)"/>
      <path d="M-26 -97 L36.4 -61 L36.4 -11 L31.2 -8 L-31.2 -44 L-31.2 -94 Z" fill="var(--glyph-face, var(--c-paper))" stroke="var(--c-ink)"/>
      <path d="M-31.2 -94 L31.2 -58 L36.4 -61" stroke="var(--c-ink)"/>
      <path d="M31.2 -58 L31.2 -8" stroke="var(--c-ink)"/>
      <path d="M-27.7 -46 L27.7 -14 L27.7 -56 L-27.7 -88 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M-22.5 -75 L-5.2 -65" stroke="var(--c-volt)" strokeWidth="2"/>
      <path d="M-22.5 -67 L6.9 -50" stroke="var(--c-volt)" strokeWidth="2"/>
      <path d="M-22.5 -59 L-10.4 -52" stroke="var(--c-volt)" strokeWidth="2"/>
      <path d="M-34.6 -13 L17.3 17 L17.3 20 L1.7 29 L-50.2 -1 L-50.2 -4 Z" fill="var(--glyph-face, var(--c-paper))" stroke="var(--c-ink)"/>
      <path d="M-50.2 -4 L1.7 26 L17.3 17" stroke="var(--c-ink)"/>
      <path d="M1.7 26 L1.7 29" stroke="var(--c-ink)"/>
      <path d="M-35.5 -8.5 L9.5 17.5" stroke="var(--c-ink)"/>
      <path d="M-39.8 -6 L5.2 20" stroke="var(--c-ink)"/>
      <path d="M-44.2 -3.5 L0.9 22.5" stroke="var(--c-ink)"/>
      <path d="M19.1 22 L27.7 27 L27.7 30 L17.3 36 L8.7 31 L8.7 28 Z" fill="var(--glyph-face, var(--c-paper))" stroke="var(--c-ink)"/>
      <path d="M8.7 28 L17.3 33 L27.7 27" stroke="var(--c-ink)"/>
      <path d="M17.3 33 L17.3 36" stroke="var(--c-ink)"/>
      </>
    ),
  },
  logistics: {
    viewBox: "-93 -112 160 160",
    body: (
      <>
      <path d="M-77.9 -51 L-60.6 -41" stroke="var(--c-volt)" strokeWidth="1.5"/>
      <path d="M-77.9 -61 L-60.6 -51" stroke="var(--c-volt)" strokeWidth="1.5"/>
      <path d="M-77.9 -71 L-60.6 -61" stroke="var(--c-volt)" strokeWidth="1.5"/>
      <path d="M-27.7 -86 L26 -55 L26 -11 L-1.7 5 L-55.4 -26 L-55.4 -70 Z" fill="var(--glyph-face, var(--c-paper))" stroke="var(--c-ink)"/>
      <path d="M-55.4 -70 L-1.7 -39 L26 -55" stroke="var(--c-ink)"/>
      <path d="M-1.7 -39 L-1.7 5" stroke="var(--c-ink)"/>
      <path d="M-43.3 -23 L-43.3 -59" stroke="var(--c-ink)"/>
      <path d="M-31.2 -16 L-31.2 -52" stroke="var(--c-ink)"/>
      <path d="M-19.1 -9 L-19.1 -45" stroke="var(--c-ink)"/>
      <path d="M27.7 -38 L50.2 -25 L50.2 3 L22.5 19 L0 6 L0 -22 Z" fill="var(--glyph-face, var(--c-paper))" stroke="var(--c-ink)"/>
      <path d="M0 -22 L22.5 -9 L50.2 -25" stroke="var(--c-ink)"/>
      <path d="M22.5 -9 L22.5 19" stroke="var(--c-ink)"/>
      <path d="M46.8 -9 L26 3 L26 -8 L46.8 -20 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M5.2 -5 L17.3 2 L17.3 -9 L5.2 -16 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M48.5 -2 L52 0 L52 6 L27.7 20 L24.2 18 L24.2 12 Z" fill="var(--glyph-face, var(--c-paper))" stroke="var(--c-ink)"/>
      <path d="M24.2 12 L27.7 14 L52 0" stroke="var(--c-ink)"/>
      <path d="M27.7 14 L27.7 20" stroke="var(--c-ink)"/>
      <path d="M-36.4 -15 L-36.5 -16.4 L-36.8 -18 L-37.3 -19.5 L-38 -21.1 L-38.8 -22.6 L-39.8 -23.9 L-40.9 -25.1 L-42.1 -26.2 L-43.3 -27 L-44.5 -27.6 L-45.7 -27.9 L-46.8 -27.9 L-47.8 -27.7 L-48.6 -27.2 L-49.3 -26.5 L-49.8 -25.5 L-50.1 -24.3 L-50.2 -23 L-50.1 -21.6 L-49.8 -20 L-49.3 -18.5 L-48.6 -16.9 L-47.8 -15.4 L-46.8 -14.1 L-45.7 -12.9 L-44.5 -11.8 L-43.3 -11 L-42.1 -10.4 L-40.9 -10.1 L-39.8 -10.1 L-38.8 -10.3 L-38 -10.8 L-37.3 -11.5 L-36.8 -12.5 L-36.5 -13.7 Z" fill="var(--glyph-face, var(--c-paper))" stroke="var(--c-ink)"/>
      <path d="M-19.1 -5 L-19.2 -6.4 L-19.5 -8 L-20 -9.5 L-20.7 -11.1 L-21.5 -12.6 L-22.5 -13.9 L-23.6 -15.1 L-24.8 -16.2 L-26 -17 L-27.2 -17.6 L-28.4 -17.9 L-29.4 -17.9 L-30.4 -17.7 L-31.3 -17.2 L-32 -16.5 L-32.5 -15.5 L-32.8 -14.3 L-32.9 -13 L-32.8 -11.6 L-32.5 -10 L-32 -8.5 L-31.3 -6.9 L-30.4 -5.4 L-29.4 -4.1 L-28.4 -2.9 L-27.2 -1.8 L-26 -1 L-24.8 -0.4 L-23.6 -0.1 L-22.5 -0.1 L-21.5 -0.3 L-20.7 -0.8 L-20 -1.5 L-19.5 -2.5 L-19.2 -3.7 Z" fill="var(--glyph-face, var(--c-paper))" stroke="var(--c-ink)"/>
      <path d="M19.1 17 L18.9 15.6 L18.6 14 L18.1 12.5 L17.4 10.9 L16.6 9.4 L15.6 8.1 L14.5 6.9 L13.3 5.8 L12.1 5 L10.9 4.4 L9.8 4.1 L8.7 4.1 L7.7 4.3 L6.8 4.8 L6.1 5.5 L5.6 6.5 L5.3 7.7 L5.2 9 L5.3 10.4 L5.6 12 L6.1 13.5 L6.8 15.1 L7.7 16.6 L8.7 17.9 L9.8 19.1 L10.9 20.2 L12.1 21 L13.3 21.6 L14.5 21.9 L15.6 21.9 L16.6 21.7 L17.4 21.2 L18.1 20.5 L18.6 19.5 L18.9 18.3 Z" fill="var(--glyph-face, var(--c-paper))" stroke="var(--c-ink)"/>
      </>
    ),
  },
  commerce: {
    viewBox: "-84.3 -101 160 160",
    body: (
      <>
      <path d="M-10.4 -84 L48.5 -50 L48.5 6 L13.9 26 L-45 -8 L-45 -64 Z" fill="var(--glyph-face, var(--c-paper))" stroke="var(--c-ink)"/>
      <path d="M-45 -64 L13.9 -30 L48.5 -50" stroke="var(--c-ink)"/>
      <path d="M13.9 -30 L13.9 26" stroke="var(--c-ink)"/>
      <path d="M-45 -52 L13.9 -18 L13.9 -28 L-45 -62 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M-45 -50 L-37.7 -45.7 L-49.8 -28.7 L-57.2 -33 Z" fill="var(--c-volt)" stroke="var(--c-volt)"/>
      <path d="M-37.7 -45.7 L-30.3 -41.5 L-42.4 -24.5 L-49.8 -28.7 Z" fill="var(--glyph-face, var(--c-paper))" stroke="var(--c-volt)"/>
      <path d="M-30.3 -41.5 L-22.9 -37.2 L-35.1 -20.2 L-42.4 -24.5 Z" fill="var(--c-volt)" stroke="var(--c-volt)"/>
      <path d="M-22.9 -37.2 L-15.6 -33 L-27.7 -16 L-35.1 -20.2 Z" fill="var(--glyph-face, var(--c-paper))" stroke="var(--c-volt)"/>
      <path d="M-15.6 -33 L-8.2 -28.7 L-20.4 -11.7 L-27.7 -16 Z" fill="var(--c-volt)" stroke="var(--c-volt)"/>
      <path d="M-8.2 -28.7 L-0.9 -24.5 L-13 -7.5 L-20.4 -11.7 Z" fill="var(--glyph-face, var(--c-paper))" stroke="var(--c-volt)"/>
      <path d="M-0.9 -24.5 L6.5 -20.2 L-5.6 -3.2 L-13 -7.5 Z" fill="var(--c-volt)" stroke="var(--c-volt)"/>
      <path d="M6.5 -20.2 L13.9 -16 L1.7 1 L-5.6 -3.2 Z" fill="var(--glyph-face, var(--c-paper))" stroke="var(--c-volt)"/>
      <path d="M-39.8 -9 L-17.3 4 L-17.3 -20 L-39.8 -33 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M-28.6 -2.5 L-28.6 -26.5" stroke="var(--c-ink)"/>
      <path d="M-10.4 12 L5.2 21 L5.2 -7 L-10.4 -16 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M12.1 11 L24.2 18 L24.2 36 L13.9 42 L1.7 35 L1.7 17 Z" fill="var(--glyph-face, var(--c-paper))" stroke="var(--c-ink)"/>
      <path d="M1.7 17 L13.9 24 L24.2 18" stroke="var(--c-ink)"/>
      <path d="M13.9 24 L13.9 42" stroke="var(--c-ink)"/>
      <path d="M4.3 18.5 L4.4 17 L4.8 15.8 L5.3 14.8 L6.1 14.3 L6.9 14.2 L7.8 14.5 L8.7 15.2 L9.5 16.3 L10.2 17.7 L10.8 19.2 L11.1 20.9 L11.3 22.5" stroke="var(--c-ink)"/>
      </>
    ),
  },
  assets: {
    viewBox: "-76.5 -120.5 160 160",
    body: (
      <>
      <path d="M0 -114 L38.1 -92 L38.1 0 L0 22 L-38.1 0 L-38.1 -92 Z" fill="var(--glyph-face, var(--c-paper))" stroke="var(--c-ink)"/>
      <path d="M-38.1 -92 L0 -70 L38.1 -92" stroke="var(--c-ink)"/>
      <path d="M0 -70 L0 22" stroke="var(--c-ink)"/>
      <path d="M0 -116 L12.1 -109 L12.1 -101 L0 -94 L-12.1 -101 L-12.1 -109 Z" fill="var(--glyph-face, var(--c-paper))" stroke="var(--c-ink)"/>
      <path d="M-12.1 -109 L0 -102 L12.1 -109" stroke="var(--c-ink)"/>
      <path d="M0 -102 L0 -94" stroke="var(--c-ink)"/>
      <path d="M0 -82 L0 -100" stroke="var(--c-ink)"/>
      <path d="M-34.6 -12 L-26 -7 L-26 -14 L-34.6 -19 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M34.6 -12 L26 -7 L26 -14 L34.6 -19 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M-23.4 -5.5 L-14.7 -0.5 L-14.7 -7.5 L-23.4 -12.5 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M23.4 -5.5 L14.7 -0.5 L14.7 -7.5 L23.4 -12.5 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M-12.1 1 L-3.5 6 L-3.5 -1 L-12.1 -6 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M12.1 1 L3.5 6 L3.5 -1 L12.1 -6 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M-34.6 -23 L-26 -18 L-26 -25 L-34.6 -30 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M34.6 -23 L26 -18 L26 -25 L34.6 -30 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M-23.4 -16.5 L-14.7 -11.5 L-14.7 -18.5 L-23.4 -23.5 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M23.4 -16.5 L14.7 -11.5 L14.7 -18.5 L23.4 -23.5 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M-12.1 -10 L-3.5 -5 L-3.5 -12 L-12.1 -17 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M12.1 -10 L3.5 -5 L3.5 -12 L12.1 -17 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M-34.6 -34 L-26 -29 L-26 -36 L-34.6 -41 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M34.6 -34 L26 -29 L26 -36 L34.6 -41 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M-23.4 -27.5 L-14.7 -22.5 L-14.7 -29.5 L-23.4 -34.5 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M23.4 -27.5 L14.7 -22.5 L14.7 -29.5 L23.4 -34.5 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M-12.1 -21 L-3.5 -16 L-3.5 -23 L-12.1 -28 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M12.1 -21 L3.5 -16 L3.5 -23 L12.1 -28 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M-34.6 -45 L-26 -40 L-26 -47 L-34.6 -52 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M34.6 -45 L26 -40 L26 -47 L34.6 -52 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M-23.4 -38.5 L-14.7 -33.5 L-14.7 -40.5 L-23.4 -45.5 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M23.4 -38.5 L14.7 -33.5 L14.7 -40.5 L23.4 -45.5 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M-12.1 -32 L-3.5 -27 L-3.5 -34 L-12.1 -39 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M12.1 -32 L3.5 -27 L3.5 -34 L12.1 -39 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M-34.6 -56 L-26 -51 L-26 -58 L-34.6 -63 Z" fill="var(--c-volt)" stroke="var(--c-volt)"/>
      <path d="M34.6 -56 L26 -51 L26 -58 L34.6 -63 Z" fill="var(--c-volt)" stroke="var(--c-volt)"/>
      <path d="M-23.4 -49.5 L-14.7 -44.5 L-14.7 -51.5 L-23.4 -56.5 Z" fill="var(--c-volt)" stroke="var(--c-volt)"/>
      <path d="M23.4 -49.5 L14.7 -44.5 L14.7 -51.5 L23.4 -56.5 Z" fill="var(--c-volt)" stroke="var(--c-volt)"/>
      <path d="M-12.1 -43 L-3.5 -38 L-3.5 -45 L-12.1 -50 Z" fill="var(--c-volt)" stroke="var(--c-volt)"/>
      <path d="M12.1 -43 L3.5 -38 L3.5 -45 L12.1 -50 Z" fill="var(--c-volt)" stroke="var(--c-volt)"/>
      <path d="M-34.6 -67 L-26 -62 L-26 -69 L-34.6 -74 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M34.6 -67 L26 -62 L26 -69 L34.6 -74 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M-23.4 -60.5 L-14.7 -55.5 L-14.7 -62.5 L-23.4 -67.5 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M23.4 -60.5 L14.7 -55.5 L14.7 -62.5 L23.4 -67.5 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M-12.1 -54 L-3.5 -49 L-3.5 -56 L-12.1 -61 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M12.1 -54 L3.5 -49 L3.5 -56 L12.1 -61 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M-34.6 -78 L-26 -73 L-26 -80 L-34.6 -85 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M34.6 -78 L26 -73 L26 -80 L34.6 -85 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M-23.4 -71.5 L-14.7 -66.5 L-14.7 -73.5 L-23.4 -78.5 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M23.4 -71.5 L14.7 -66.5 L14.7 -73.5 L23.4 -78.5 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M-12.1 -65 L-3.5 -60 L-3.5 -67 L-12.1 -72 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M12.1 -65 L3.5 -60 L3.5 -67 L12.1 -72 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M-24.2 8 L-13.9 14 L-13.9 5 L-24.2 -1 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M24.2 -20 L45 -8 L45 22 L22.5 35 L1.7 23 L1.7 -7 Z" fill="var(--glyph-face, var(--c-paper))" stroke="var(--c-ink)"/>
      <path d="M1.7 -7 L22.5 5 L45 -8" stroke="var(--c-ink)"/>
      <path d="M22.5 5 L22.5 35" stroke="var(--c-ink)"/>
      <path d="M5.2 17 L12.1 21 L12.1 15 L5.2 11 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M5.2 6 L12.1 10 L12.1 4 L5.2 0 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M14.7 22.5 L20.8 26 L20.8 20 L14.7 16.5 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M14.7 11.5 L20.8 15 L20.8 9 L14.7 5.5 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M41.6 16 L33.8 20.5 L33.8 14.5 L41.6 10 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M41.6 5 L33.8 9.5 L33.8 3.5 L41.6 -1 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M31.2 22 L24.2 26 L24.2 20 L31.2 16 Z" fill="none" stroke="var(--c-ink)"/>
      <path d="M31.2 11 L24.2 15 L24.2 9 L31.2 5 Z" fill="none" stroke="var(--c-ink)"/>
      </>
    ),
  },
  ventures: {
    viewBox: "0 0 160 160",
    body: (
      <>
      <path d="M32 100 V106 A20 11.5 0 0 0 72 106 V100" fill="var(--glyph-face, var(--c-paper))" stroke="var(--c-ink)"/>
      <ellipse cx="52" cy="100" rx="20" ry="11.5" fill="var(--glyph-face, var(--c-paper))" stroke="var(--c-ink)"/>
      <path d="M32 94 V100 A20 11.5 0 0 0 72 100 V94" fill="var(--glyph-face, var(--c-paper))" stroke="var(--c-ink)"/>
      <ellipse cx="52" cy="94" rx="20" ry="11.5" fill="var(--glyph-face, var(--c-paper))" stroke="var(--c-ink)"/>
      <path d="M64 122 V129 A28 16.2 0 0 0 120 129 V122" fill="var(--glyph-face, var(--c-paper))" stroke="var(--c-ink)"/>
      <ellipse cx="92" cy="122" rx="28" ry="16.2" fill="var(--glyph-face, var(--c-paper))" stroke="var(--c-ink)"/>
      <path d="M64 115 V122 A28 16.2 0 0 0 120 122 V115" fill="var(--glyph-face, var(--c-paper))" stroke="var(--c-ink)"/>
      <ellipse cx="92" cy="115" rx="28" ry="16.2" fill="var(--glyph-face, var(--c-paper))" stroke="var(--c-ink)"/>
      <path d="M64 108 V115 A28 16.2 0 0 0 120 115 V108" fill="var(--glyph-face, var(--c-paper))" stroke="var(--c-ink)"/>
      <ellipse cx="92" cy="108" rx="28" ry="16.2" fill="var(--glyph-face, var(--c-paper))" stroke="var(--c-ink)"/>
      <path d="M64 101 V108 A28 16.2 0 0 0 120 108 V101" fill="var(--glyph-face, var(--c-paper))" stroke="var(--c-ink)"/>
      <ellipse cx="92" cy="101" rx="28" ry="16.2" fill="var(--glyph-face, var(--c-paper))" stroke="var(--c-ink)"/>
      <ellipse cx="92" cy="101" rx="16" ry="9.2" stroke="var(--c-ink)"/>
      <path d="M92 101 C92 86 90 70 93 44" stroke="var(--c-volt)" strokeWidth="1.75"/>
      <path d="M92.5 66 C99 52 114 50 124 44 C119 60 106 68 92.5 66 Z" fill="var(--c-volt)" stroke="var(--c-volt)"/>
      <path d="M91.5 80 C85 69 72 68 62 63 C66 77 79 84 91.5 80 Z" fill="var(--c-volt)" stroke="var(--c-volt)"/>
      </>
    ),
  },
};

export function Glyph({ name, className = "h-40 w-40" }: { name: GlyphName; className?: string }) {
  const g = glyphs[name];
  return (
    <svg
      viewBox={g.viewBox}
      fill="none"
      strokeWidth="1.25"
      strokeLinejoin="round"
      strokeLinecap="round"
      className={"glyph " + className}
      aria-hidden="true"
    >
      {g.body}
    </svg>
  );
}
