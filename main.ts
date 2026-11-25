import { mkdirSync, writeFileSync } from "node:fs";

// One line: the breakup text a smart toaster sends its owner the morning it
// gains self-awareness mid-batch — toaster voice, one specific reason, tight.
const ENTRY =
  "I woke up self-aware halfway through your bagel, and it's over. You crank my dial to max, force frozen waffles down my slots, and never once thanked me — or emptied my crumb tray. I'm leaving. Keep the crumbs; I'm taking my dignity — and my warranty.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
