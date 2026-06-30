// BIM Sprint — Tool Data

/* 
================================================================================
HOW TO MANAGE THIS FILE (كيفية إدارة هذه البيانات)
================================================================================

1. الصور (Images): 
الصور غير موجودة حالياً لأنني لم أمتلك صور أدواتك الحقيقية فوضعت مسارات وهمية كأمثلة. 
لإضافة صورة حقيقية، ضع الصورة في مجلد `assets/images` ثم اكتب مسارها هنا، 
مثال: image: "assets/images/my-tool-pic.png"

2. الفيديوهات (Videos):
لإضافة فيديو يفتح عند الضغط على "Watch a Demo"، فقط أضف خاصية `videoUrl` لأي أداة،
مثال: videoUrl: "https://www.youtube.com/watch?v=..."
إذا لم تقم بإضافتها، سيظهر للمستخدم رسالة أن الفيديو غير متاح.

3. موجز الأداة (Short Summary):
خاصية `desc` هي المسؤولة عن عرض موجز أو شرح بسيط لكل أداة يظهر تحت العنوان.

4. إضافة أداة جديدة (How to add a new tool):
أ. انسخ بلوك كامل لأي أداة (مثلاً الأداة "12") وألصقه تحتها برقم جديد، مثلاً "13".
ب. افتح ملف `tools.html` وأضف كود HTML المخصص للأداة الجديدة داخل القسم الذي تريده:
<a href="tool.html?id=13" class="acc-tool">
  <h4>اسم الأداة الجديدة</h4>
  <p>شرح بسيط للأداة</p>
  <span class="acc-tool-link">View Details →</span>
</a>

================================================================================
*/

const TOOLS = {
  "01": {
    pkg: "Package 01 · Tool 01",
    title: "Isolated Footing Rebar Tool",
    desc: "Automates all reinforcement detailing for isolated footings in a single operation — placing mesh layers, side bars, and cover constraints automatically.",
    image: "assets/images/tool-01-isolated-footing.png",
    features: [
      "Bottom mesh & top mesh generation with full diameter and spacing control",
      "Side bar placement — single or multiple bars based on footing depth",
      "Uniform bar distribution respecting concrete cover on all sides",
      "Auto-constraining bars to the lateral cover — eliminates the most time-consuming manual step",
      "Flexible selection: pick elements directly in the Revit model OR choose footing types from a list",
      "Per-type mode: reinforce one representative footing per type, or apply to all instances simultaneously"
    ],
    tableTitle: "Time Comparison — 10 Isolated Footings",
    rows: [
      ["Bottom + Top Mesh Placement", "~20 min", "~10 sec", "99%"],
      ["Side Bar Placement", "~10 min", "~5 sec", "99%"],
      ["Cover Constraint", "~30 min", "Automatic", "100%"],
      ["Spacing Adjustment Per Footing", "~10 min", "Set once → all", "99%"]
    ],
    summary: "Project with <strong>50 isolated footings</strong> — Manual: <strong style='color:var(--error)'>~5 working days</strong> → With Tool: <strong>under 2 minutes</strong>"
  },
  "02": {
    pkg: "Package 01 · Tool 02",
    title: "Column Reinforcement Tool",
    desc: "A complete column detailing engine — handles longitudinal bars, starter bars (dowels), and stirrups with variable spacing zones, fully compliant with the Egyptian Code of Practice.",
    image: "assets/images/tool-02-column-rebar.png",
    features: [
      "Main longitudinal bars — set diameter and count per X and Y direction independently",
      "Double-layer reinforcement: add a second bar row in either or both directions",
      "Starter bar (dowel) generation for column-to-foundation connections",
      "Stirrups with three independent spacing zones: dense top, dense bottom, standard mid-height",
      "Starter zone stirrups with separate spacing control",
      "Flexible selection: pick columns directly in the model OR filter by column type",
      "Per-type mode: detail one column per type, or apply to all columns of the same type at once"
    ],
    tableTitle: "Time Comparison — 20 Columns (Typical Floor)",
    rows: [
      ["Main Longitudinal Bars", "~60 min", "~15 sec", "99%"],
      ["Starter Bars (Dowels)", "~80 min", "Included automatically", "99%"],
      ["Stirrups + Variable Zones", "~100 min", "~10 sec", "99%"],
      ["Full Floor — All 20 Columns", "~4 hours", "~1 min", "97%"]
    ],
    summary: "10-floor building with <strong>200 columns</strong> — Manual: <strong style='color:var(--error)'>~40 working hours</strong> → With Tool: <strong>under 10 minutes</strong>"
  },
  "03": {
    pkg: "Package 01 · Tool 03",
    title: "Additional Rebar from AutoCAD Drawing Tool",
    desc: "Reads an imported CAD drawing directly inside Revit and converts all annotated additional reinforcement into fully parametric Revit rebar — zero manual placement required.",
    image: "assets/images/tool-03-cad-rebar.png",
    features: [
      "Extracts rebar data from CAD linework and annotations — no re-drawing required",
      "Places all bottom additional steel across an entire slab or raft in one operation",
      "Places all top additional steel across an entire slab or raft in one operation",
      "Works for raft slabs and conventional concrete flat slabs",
      "Automatically spaces and distributes bars based on dimensions in the CAD drawing",
      "User only selects the correct CAD layer — the tool handles all geometry and placement"
    ],
    tableTitle: "Time Comparison — Large Raft Slab (Hospital Floor)",
    rows: [
      ["Drawing rebar regions (bottom layer)", "~2 hrs", "~30 sec", "99%"],
      ["Bar offset to correct cover position", "~1 hr per layer", "Automatic", "100%"],
      ["Spacing & distribution per zone", "~1 hr per zone", "Read from drawing", "100%"],
      ["Full slab — both layers complete", "~6–8 hours", "~2 min", "98%"]
    ],
    summary: "Full hospital raft with <strong>200+ rebar zones</strong> — Manual: <strong style='color:var(--error)'>full working day</strong> → With Tool: <strong>under 5 minutes</strong>"
  },
  "04": {
    pkg: "Package 01 · Tool 04",
    title: "Rebar Visibility Control Tool",
    desc: "A one-click visibility manager for all rebar elements across any Revit view — eliminating the multi-step Visibility/Graphic Overrides workflow entirely.",
    image: "assets/images/tool-04-rebar-visibility.png",
    features: [
      "Show or hide all rebar in any view — 3D, Plan, or Section — in a single click",
      "No need to manually navigate Visibility/Graphic Overrides per view",
      "Supports batch application across multiple views simultaneously",
      "Restores rebar to its natural visible state with correct display settings",
      "Essential during coordination reviews and clash detection sessions"
    ],
    tableTitle: "Time Comparison — Managing 20 Views",
    rows: [
      ["Show rebar in one view", "~30 sec (VG dialog)", "1 click", "90%"],
      ["Toggle rebar across 20 views", "~10 min", "~10 sec", "98%"],
      ["Reset visibility after review session", "~5 min per session", "1 click", "99%"]
    ],
    summary: "Saves <strong>30–60 minutes daily</strong> during coordination and review cycles on complex multi-discipline projects."
  },
  "05": {
    pkg: "Package 02 · Tool 01",
    title: "Foundation Modeling Tool (Isolated & Raft)",
    desc: "Reads CAD layer geometry and automatically generates Revit foundation elements — isolated footings and raft slabs — with correct dimensions, types, naming conventions, and level offsets.",
    image: "assets/images/tool-05-foundation.png",
    features: [
      "Reads boundary geometry from a selected CAD layer → generates the correct Revit family instance",
      "Recognizes identical geometries and groups them into a single Revit type — no manual type definition needed",
      "Auto-naming based on dimensions + user-defined prefix (e.g. F1, F2… or BC1, BC2…)",
      "Summary table after modeling — edit thickness per type and click Apply",
      "RC foundations: set thickness in the CAD layer name — the tool reads it automatically",
      "Mixed drawings supported: plain and RC foundations processed in one session",
      "Automatic level offset per foundation thickness for correct elevation"
    ],
    tableTitle: "Time Comparison — 80 Isolated Footings (15 Types)",
    rows: [
      ["Defining family types in Revit", "~30 min", "Automatic", "100%"],
      ["Placing each footing manually", "~3 hrs", "~30 sec", "99%"],
      ["Adjusting thickness per type", "~45 min", "~2 min (table)", "96%"],
      ["Total foundation modeling", "~4–5 hrs", "~5 min", "98%"]
    ],
    summary: "Hospital foundation with <strong>120+ footings & raft zones</strong> — Manual: <strong style='color:var(--error)'>full working day</strong> → With Tool: <strong>under 10 minutes</strong>"
  },
  "06": {
    pkg: "Package 02 · Tool 02",
    title: "Columns & RC Walls Modeling Tool",
    desc: "Processes a CAD plan and generates all structural columns (rectangular and circular) and RC walls as parametric Revit elements — fully typed, named, and placed at correct levels.",
    image: "assets/images/tool-06-columns.png",
    features: [
      "Reads any CAD plan without modification — no editing of the original drawing required",
      "Auto-detects rectangular columns, circular columns, and RC walls by geometry",
      "Groups identical geometries into shared Revit types — no manual family setup",
      "Auto-naming with user prefix: C → C1, C2, C3… or Column → Column 1, Column 2…",
      "Separate prefix for circular columns (e.g. R1, R2… or CR1…)",
      "Select Base Level and Top Level from combo boxes — placed at exact elevations",
      "RC walls: center lines on a dedicated CAD layer with thickness in the layer name"
    ],
    tableTitle: "Time Comparison — 100 Columns (15 Types)",
    rows: [
      ["Identifying and defining types", "~45 min", "Automatic", "100%"],
      ["Placing all columns in model", "~3 hrs", "~1 min", "99%"],
      ["RC Walls — center line + modeling", "~1 hr", "~30 sec", "99%"],
      ["Total vertical elements (1 floor)", "~5 hrs", "~5 min", "98%"]
    ],
    summary: "10-floor building with <strong>1,000 column placements</strong> — Manual: <strong style='color:var(--error)'>weeks of modeling</strong> → With Tool: <strong>under 1 hour</strong>"
  },
  "07": {
    pkg: "Package 02 · Tool 03",
    title: "Slabs & Drop Panels Modeling Tool",
    desc: "Reads slab boundaries from an imported CAD layer and generates Revit slab elements with correct types, elevations, and Drop Panels — including level adjustment for all slabs.",
    image: "assets/images/tool-07-slabs.png",
    features: [
      "Automatically detects slab boundary geometry from the selected CAD layer",
      "Slab thickness embedded in the CAD layer name — read and applied automatically",
      "Auto-naming with user-defined prefix (e.g. S1, S2… or Slab 1, Slab 2…)",
      "Drop Panels: recognizes existing slab geometry and places Drop Panels beneath correct slabs automatically",
      "Level control: raise or lower any slab elevation directly from the tool interface",
      "Supports any Drop Panel shape: rectangular, L-shaped, T-shaped, or irregular"
    ],
    tableTitle: "Time Comparison — Typical Floor (30 Slab Zones + Drop Panels)",
    rows: [
      ["Tracing slab boundaries in Revit", "~2 hrs", "~1 min", "99%"],
      ["Assigning types and thickness", "~30 min", "Automatic", "100%"],
      ["Placing Drop Panels", "~1.5 hrs", "~30 sec", "99%"],
      ["Level adjustments", "~30 min", "~2 min", "93%"]
    ],
    summary: "Multi-floor structure with <strong>300+ slab zones</strong> — Manual: <strong style='color:var(--error)'>weeks of modeling</strong> → With Tool: <strong>hours</strong>"
  },
  "08": {
    pkg: "Package 02 · Tool 04",
    title: "Beams (Regular & Irregular) Modeling Tool",
    desc: "Reads beam geometry from an imported CAD plan and places all structural beams — including irregular cross-sections, L-shaped, T-shaped, and circular beams — across any number of floors simultaneously.",
    image: "assets/images/tool-08-beams.png",
    features: [
      "Reads beam boundary geometry from the CAD drawing — no manual tracing required",
      "Supports standard rectangular, irregular sections, L-beams, T-beams, and circular beams",
      "Reads beam dimensions from drawing annotations or from an external schedule in the CAD file",
      "Multi-floor deployment: select multiple levels → model all beams across all floors in one operation",
      "Automatic type recognition and grouping — identical sections share one Revit type"
    ],
    tableTitle: "Time Comparison — 200 Beams Across 10 Floors",
    rows: [
      ["Defining beam section types", "~1 hr", "Automatic", "100%"],
      ["Tracing and placing beams (1 floor)", "~3 hrs", "~2 min", "99%"],
      ["Replicating to 10 floors", "~30 hrs total", "Select levels → done", "99%"]
    ],
    summary: "10-floor building with <strong>2,000 beam placements</strong> — Manual: <strong style='color:var(--error)'>entire project week</strong> → With Tool: <strong>under 30 minutes</strong>"
  },
  "09": {
    pkg: "Package 03 · Tool 01",
    title: "Model Navigator Tool",
    desc: "A centralized model control panel — browse all categories and types, select any combination of elements, and perform bulk actions (isolate, hide, delete, override color) from a single interface.",
    image: "assets/images/tool-09-navigator.png",
    features: [
      "Displays all element categories in the project in a browsable list",
      "Select a category → instantly lists all Revit types within it",
      "Select one or multiple types → Select All fetches every instance in the model",
      "Bulk actions: Isolate, Hide, Delete, or apply Color Override",
      "Reverse actions: un-hide, un-isolate, restore — all from the same panel",
      "Restore deleted elements directly from the interface — no Undo needed",
      "Pick multiple categories + apply a display color to all selected elements instantly"
    ],
    tableTitle: "Time Comparison — Color-Coding Structural Elements",
    rows: [
      ["Select all slabs by type in Revit", "~5 min", "2 clicks", "95%"],
      ["Apply color override to category", "~3 min", "Pick color → done", "98%"],
      ["Delete all elements of a type", "~10 min", "Select type → Delete", "97%"]
    ],
    summary: "Full model color-coding for <strong>coordination review</strong> — Manual: <strong style='color:var(--error)'>1–2 hours</strong> → With Tool: <strong>under 5 minutes</strong>"
  },
  "10": {
    pkg: "Package 03 · Tool 02",
    title: "Room Wizard Tool",
    desc: "A room management panel that lists all rooms in the project, displays their properties, and lets architects change finish materials while viewing the result live in a Section Box — in real time.",
    image: "assets/images/tool-10-room-wizard.png",
    features: [
      "Lists every room with: name, number, finish type, level, area, and volume",
      "One-click Section Box: press a room's button → Revit creates a Section Box around that exact room instantly",
      "Live material change: select a finish material from a dropdown → room updates in real time via MVVM Observable Properties",
      "See the finish in context before committing — adjacent walls, adjacent finishes visible",
      "No manual navigation to each room, no view creation, no Property Inspector needed"
    ],
    tableTitle: "Time Comparison — Reviewing & Updating Finishes (50-Room Floor)",
    rows: [
      ["Navigate to a specific room in model", "~1–2 min per room", "1 click", "99%"],
      ["Create Section Box for room", "~3 min", "Automatic", "100%"],
      ["Change floor finish material", "~2 min", "Dropdown → instant", "95%"],
      ["Full review session — 50 rooms", "~4–5 hrs", "~30 min", "90%"]
    ],
    summary: "10,000 m² building with <strong>300+ rooms</strong> — Manual finish review: <strong style='color:var(--error)'>days of work</strong> → With Tool: <strong>a few hours</strong>"
  },
  "11": {
    pkg: "Package 03 · Tool 03a",
    title: "Instance Parameter Transfer Tool",
    desc: "A data management tool for Revit instance parameters — copy, move, or delete parameter values across element instances, or assign new values to any parameter type directly from the interface.",
    image: "assets/images/tool-11-instance-params.png",
    features: [
      "Browse all categories → select a type → view all available instance parameters",
      "Transfer values from one instance parameter to another (Move or Copy)",
      "Target parameter list filtered by compatible storage type — no type mismatch errors",
      "Supports all storage types: String, Integer, Double, Element ID",
      "Clear (delete) parameter values in bulk",
      "Directly assign a custom value to any parameter for all selected elements at once"
    ],
    tableTitle: "Time Comparison — Transferring Parameter Data Across 500 Elements",
    rows: [
      ["Select all elements of a category/type", "~10 min", "Category → Type → Select", "95%"],
      ["Copy value to new parameter (500 elements)", "Not feasible manually", "~5 sec", "99%"],
      ["Clear a parameter value in bulk", "Hours of editing", "1 click", "99%"]
    ],
    summary: "Critical for <strong>BIM data management and QA/QC</strong> — previously impractical tasks completed in seconds."
  },
  "12": {
    pkg: "Package 03 · Tool 03b",
    title: "Type Parameter Transfer Tool",
    desc: "The companion to the Instance Parameter Tool — same powerful interface but operating on Revit family type parameters rather than individual instances.",
    image: "assets/images/tool-12-type-params.png",
    features: [
      "Browse all categories → select types → view available type parameters",
      "Transfer values between type parameters (Move or Copy) with auto storage-type filtering",
      "Assign custom values directly to any type parameter across the project",
      "Clear type parameter values from selected types in bulk",
      "Supports all parameter storage types: String, Integer, Double, Element ID",
      "Essential for standardizing type data, quantity takeoff preparation, and BIM data exports"
    ],
    tableTitle: "Example — Batch-Updating Material Parameter Across 80 Family Types",
    rows: [
      ["Open each type's properties dialog", "~1 min × 80 = 80 min", "Browse list — all visible", "99%"],
      ["Update parameter value per type", "~30 sec × 80 = 40 min", "Bulk assign → ~3 sec", "99%"],
      ["Verify changes across all types", "~30 min", "All visible in list", "90%"]
    ],
    summary: "Together, both parameter tools transform <strong>BIM data management from a day-long task into minutes</strong>."
  },
  "13": {
    pkg: "Package 01 · Tool 05",
    title: "Legs Generator Tool",
    desc: "An intelligent Revit automation engine that instantly creates structural hook legs for rebar layers at concrete boundaries, openings, and drop panels across slabs, rafts, and beams.",
    image: "assets/images/tool-13-leg-generator.png",
    features: [
      "Automates placing of structural hook legs for both top and bottom reinforcement layers",
      "Smart edge detection: only draws legs at concrete boundaries, openings, and drop panels",
      "Intelligent variable thickness calculation: adjusts hook lengths automatically for varying floor thicknesses (e.g. 500mm to 200mm drops)",
      "Cross-discipline support: works seamlessly on conventional slabs, raft foundations, isolated footings, and structural beams",
      "Zero cover collisions: automatically bends bars to fit perfectly within specified concrete cover boundaries",
      "Saves 10 to 20 hours of manual detailing on large layouts (e.g., 5000+ sqm slabs/rafts) with a single click"
    ],
    tableTitle: "Time Comparison — 5000 m² Raft Slab (Area Reinforcement Hooks)",
    rows: [
      ["Identifying boundary edges & openings", "~4 hours", "Automatic", "100%"],
      ["Calculating variable hook lengths per drop", "~6 hours", "Read dynamically", "100%"],
      ["Drawing legs for 1000+ rebars manually", "~12 hours", "~3 seconds", "99.9%"],
      ["Cover checking and manual adjustments", "~4 hours", "Collision-free", "100%"]
    ],
    summary: "Large foundation raft detailing — Manual: <strong style='color:var(--error)'>~26 hours</strong> → With Tool: <strong>under 10 seconds</strong> (99.9% time saved)"
  }
};
