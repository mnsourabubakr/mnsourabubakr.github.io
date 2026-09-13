(() => {
  'use strict';

  const STORE_KEY = 'bimsprint_store_cart_v2';
  const QUOTE_ENDPOINT = 'https://formsubmit.co/ajax/mnsourabubakr95@gmail.com';
  const WHATSAPP_NUMBER = '201068970898';
  const RAW_TOOLS = {"01":{"pkg":"Package 01 · Tool 01","title":"Isolated Footing Rebar Tool","desc":"Automates all reinforcement detailing for isolated footings in a single operation — placing mesh layers, side bars, and cover constraints automatically.","image":"assets/images/tool-01-isolated-footing.png","features":["Bottom mesh & top mesh generation with full diameter and spacing control","Side bar placement — single or multiple bars based on footing depth","Uniform bar distribution respecting concrete cover on all sides","Auto-constraining bars to the lateral cover — eliminates the most time-consuming manual step","Flexible selection: pick elements directly in the Revit model OR choose footing types from a list","Per-type mode: reinforce one representative footing per type, or apply to all instances simultaneously"],"tableTitle":"Time Comparison — 10 Isolated Footings","rows":[["Bottom + Top Mesh Placement","~20 min","~10 sec","99%"],["Side Bar Placement","~10 min","~5 sec","99%"],["Cover Constraint","~30 min","Automatic","100%"],["Spacing Adjustment Per Footing","~10 min","Set once → all","99%"]],"summary":"Project with <strong>50 isolated footings</strong> — Manual: <strong style='color:var(--error)'>~5 working days</strong> → With Tool: <strong>under 2 minutes</strong>","web_image":"assets/images/tools/isolated-footing-rebar-tool.webp","discipline":"Structure","category":"Reinforcement","suite":"Rebar Automation Suite","slug":"isolated-footing-rebar"},"02":{"pkg":"Package 01 · Tool 02","title":"Column Reinforcement Tool","desc":"A complete column detailing engine — handles longitudinal bars, starter bars (dowels), and stirrups with variable spacing zones, fully compliant with the Egyptian Code of Practice.","image":"assets/images/tool-02-column-rebar.png","features":["Main longitudinal bars — set diameter and count per X and Y direction independently","Double-layer reinforcement: add a second bar row in either or both directions","Starter bar (dowel) generation for column-to-foundation connections","Stirrups with three independent spacing zones: dense top, dense bottom, standard mid-height","Starter zone stirrups with separate spacing control","Flexible selection: pick columns directly in the model OR filter by column type","Per-type mode: detail one column per type, or apply to all columns of the same type at once"],"tableTitle":"Time Comparison — 20 Columns (Typical Floor)","rows":[["Main Longitudinal Bars","~60 min","~15 sec","99%"],["Starter Bars (Dowels)","~80 min","Included automatically","99%"],["Stirrups + Variable Zones","~100 min","~10 sec","99%"],["Full Floor — All 20 Columns","~4 hours","~1 min","97%"]],"summary":"10-floor building with <strong>200 columns</strong> — Manual: <strong style='color:var(--error)'>~40 working hours</strong> → With Tool: <strong>under 10 minutes</strong>","web_image":"assets/images/tools/column-reinforcement-tool.webp","discipline":"Structure","category":"Reinforcement","suite":"Rebar Automation Suite","slug":"column-reinforcement"},"03":{"pkg":"Package 01 · Tool 03","title":"Additional Rebar from AutoCAD Drawing Tool","desc":"Reads an imported CAD drawing directly inside Revit and converts all annotated additional reinforcement into fully parametric Revit rebar — zero manual placement required.","image":"assets/images/tool-03-cad-rebar.png","features":["Extracts rebar data from CAD linework and annotations — no re-drawing required","Places all bottom additional steel across an entire slab or raft in one operation","Places all top additional steel across an entire slab or raft in one operation","Works for raft slabs and conventional concrete flat slabs","Automatically spaces and distributes bars based on dimensions in the CAD drawing","User only selects the correct CAD layer — the tool handles all geometry and placement"],"tableTitle":"Time Comparison — Large Raft Slab (Hospital Floor)","rows":[["Drawing rebar regions (bottom layer)","~2 hrs","~30 sec","99%"],["Bar offset to correct cover position","~1 hr per layer","Automatic","100%"],["Spacing & distribution per zone","~1 hr per zone","Read from drawing","100%"],["Full slab — both layers complete","~6–8 hours","~2 min","98%"]],"summary":"Full hospital raft with <strong>200+ rebar zones</strong> — Manual: <strong style='color:var(--error)'>full working day</strong> → With Tool: <strong>under 5 minutes</strong>","web_image":"assets/images/tools/additional-rebar-from-autocad-drawing-tool.webp","discipline":"Structure","category":"Reinforcement","suite":"Rebar Automation Suite","slug":"additional-rebar-from-autocad-drawing"},"04":{"pkg":"Package 01 · Tool 04","title":"Rebar Visibility Control Tool","desc":"A one-click visibility manager for all rebar elements across any Revit view — eliminating the multi-step Visibility/Graphic Overrides workflow entirely.","image":"assets/images/tool-04-rebar-visibility.png","features":["Show or hide all rebar in any view — 3D, Plan, or Section — in a single click","No need to manually navigate Visibility/Graphic Overrides per view","Supports batch application across multiple views simultaneously","Restores rebar to its natural visible state with correct display settings","Essential during coordination reviews and clash detection sessions"],"tableTitle":"Time Comparison — Managing 20 Views","rows":[["Show rebar in one view","~30 sec (VG dialog)","1 click","90%"],["Toggle rebar across 20 views","~10 min","~10 sec","98%"],["Reset visibility after review session","~5 min per session","1 click","99%"]],"summary":"Saves <strong>30–60 minutes daily</strong> during coordination and review cycles on complex multi-discipline projects.","web_image":"assets/images/tools/rebar-visibility-control-tool.webp","discipline":"Structure","category":"Coordination","suite":"Rebar Automation Suite","slug":"rebar-visibility-control"},"13":{"pkg":"Package 01 · Tool 05","title":"Legs Generator Tool","desc":"An intelligent Revit automation engine that instantly creates structural hook legs for rebar layers at concrete boundaries, openings, and drop panels across slabs, rafts, and beams.","image":"assets/images/tool-13-leg-generator.png","features":["Automates placing of structural hook legs for both top and bottom reinforcement layers","Smart edge detection: only draws legs at concrete boundaries, openings, and drop panels","Intelligent variable thickness calculation: adjusts hook lengths automatically for varying floor thicknesses (e.g. 500mm to 200mm drops)","Cross-discipline support: works seamlessly on conventional slabs, raft foundations, isolated footings, and structural beams","Zero cover collisions: automatically bends bars to fit perfectly within specified concrete cover boundaries","Saves 10 to 20 hours of manual detailing on large layouts (e.g., 5000+ sqm slabs/rafts) with a single click"],"tableTitle":"Time Comparison — 5000 m² Raft Slab (Area Reinforcement Hooks)","rows":[["Identifying boundary edges & openings","~4 hours","Automatic","100%"],["Calculating variable hook lengths per drop","~6 hours","Read dynamically","100%"],["Drawing legs for 1000+ rebars manually","~12 hours","~3 seconds","99.9%"],["Cover checking and manual adjustments","~4 hours","Collision-free","100%"]],"summary":"Large foundation raft detailing — Manual: <strong style='color:var(--error)'>~26 hours</strong> → With Tool: <strong>under 10 seconds</strong> (99.9% time saved)","web_image":"assets/images/tools/legs-generator-tool.webp","discipline":"Structure","category":"Reinforcement","suite":"Rebar Automation Suite","slug":"legs-generator"},"05":{"pkg":"Package 02 · Tool 01","title":"Foundation Modeling Tool (Isolated & Raft)","desc":"Reads CAD layer geometry and automatically generates Revit foundation elements — isolated footings and raft slabs — with correct dimensions, types, naming conventions, and level offsets.","image":"assets/images/tool-05-foundation.png","features":["Reads boundary geometry from a selected CAD layer → generates the correct Revit family instance","Recognizes identical geometries and groups them into a single Revit type — no manual type definition needed","Auto-naming based on dimensions + user-defined prefix (e.g. F1, F2… or BC1, BC2…)","Summary table after modeling — edit thickness per type and click Apply","RC foundations: set thickness in the CAD layer name — the tool reads it automatically","Mixed drawings supported: plain and RC foundations processed in one session","Automatic level offset per foundation thickness for correct elevation"],"tableTitle":"Time Comparison — 80 Isolated Footings (15 Types)","rows":[["Defining family types in Revit","~30 min","Automatic","100%"],["Placing each footing manually","~3 hrs","~30 sec","99%"],["Adjusting thickness per type","~45 min","~2 min (table)","96%"],["Total foundation modeling","~4–5 hrs","~5 min","98%"]],"summary":"Hospital foundation with <strong>120+ footings & raft zones</strong> — Manual: <strong style='color:var(--error)'>full working day</strong> → With Tool: <strong>under 10 minutes</strong>","web_image":"assets/images/tools/foundation-modeling-tool-isolated-and-raft.webp","discipline":"Structure","category":"Modeling","suite":"CAD to Revit Modeling Suite","slug":"foundation-modeling-isolated-and-raft"},"06":{"pkg":"Package 02 · Tool 02","title":"Columns & RC Walls Modeling Tool","desc":"Processes a CAD plan and generates all structural columns (rectangular and circular) and RC walls as parametric Revit elements — fully typed, named, and placed at correct levels.","image":"assets/images/tool-06-columns.png","features":["Reads any CAD plan without modification — no editing of the original drawing required","Auto-detects rectangular columns, circular columns, and RC walls by geometry","Groups identical geometries into shared Revit types — no manual family setup","Auto-naming with user prefix: C → C1, C2, C3… or Column → Column 1, Column 2…","Separate prefix for circular columns (e.g. R1, R2… or CR1…)","Select Base Level and Top Level from combo boxes — placed at exact elevations","RC walls: center lines on a dedicated CAD layer with thickness in the layer name"],"tableTitle":"Time Comparison — 100 Columns (15 Types)","rows":[["Identifying and defining types","~45 min","Automatic","100%"],["Placing all columns in model","~3 hrs","~1 min","99%"],["RC Walls — center line + modeling","~1 hr","~30 sec","99%"],["Total vertical elements (1 floor)","~5 hrs","~5 min","98%"]],"summary":"10-floor building with <strong>1,000 column placements</strong> — Manual: <strong style='color:var(--error)'>weeks of modeling</strong> → With Tool: <strong>under 1 hour</strong>","web_image":"assets/images/tools/columns-and-rc-walls-modeling-tool.webp","discipline":"Structure","category":"Modeling","suite":"CAD to Revit Modeling Suite","slug":"columns-and-rc-walls-modeling"},"07":{"pkg":"Package 02 · Tool 03","title":"Slabs & Drop Panels Modeling Tool","desc":"Reads slab boundaries from an imported CAD layer and generates Revit slab elements with correct types, elevations, and Drop Panels — including level adjustment for all slabs.","image":"assets/images/tool-07-slabs.png","features":["Automatically detects slab boundary geometry from the selected CAD layer","Slab thickness embedded in the CAD layer name — read and applied automatically","Auto-naming with user-defined prefix (e.g. S1, S2… or Slab 1, Slab 2…)","Drop Panels: recognizes existing slab geometry and places Drop Panels beneath correct slabs automatically","Level control: raise or lower any slab elevation directly from the tool interface","Supports any Drop Panel shape: rectangular, L-shaped, T-shaped, or irregular"],"tableTitle":"Time Comparison — Typical Floor (30 Slab Zones + Drop Panels)","rows":[["Tracing slab boundaries in Revit","~2 hrs","~1 min","99%"],["Assigning types and thickness","~30 min","Automatic","100%"],["Placing Drop Panels","~1.5 hrs","~30 sec","99%"],["Level adjustments","~30 min","~2 min","93%"]],"summary":"Multi-floor structure with <strong>300+ slab zones</strong> — Manual: <strong style='color:var(--error)'>weeks of modeling</strong> → With Tool: <strong>hours</strong>","web_image":"assets/images/tools/slabs-and-drop-panels-modeling-tool.webp","discipline":"Structure","category":"Modeling","suite":"CAD to Revit Modeling Suite","slug":"slabs-and-drop-panels-modeling"},"08":{"pkg":"Package 02 · Tool 04","title":"Beams (Regular & Irregular) Modeling Tool","desc":"Reads beam geometry from an imported CAD plan and places all structural beams — including irregular cross-sections, L-shaped, T-shaped, and circular beams — across any number of floors simultaneously.","image":"assets/images/tool-08-beams.png","features":["Reads beam boundary geometry from the CAD drawing — no manual tracing required","Supports standard rectangular, irregular sections, L-beams, T-beams, and circular beams","Reads beam dimensions from drawing annotations or from an external schedule in the CAD file","Multi-floor deployment: select multiple levels → model all beams across all floors in one operation","Automatic type recognition and grouping — identical sections share one Revit type"],"tableTitle":"Time Comparison — 200 Beams Across 10 Floors","rows":[["Defining beam section types","~1 hr","Automatic","100%"],["Tracing and placing beams (1 floor)","~3 hrs","~2 min","99%"],["Replicating to 10 floors","~30 hrs total","Select levels → done","99%"]],"summary":"10-floor building with <strong>2,000 beam placements</strong> — Manual: <strong style='color:var(--error)'>entire project week</strong> → With Tool: <strong>under 30 minutes</strong>","web_image":"assets/images/tools/beams-regular-and-irregular-modeling-tool.webp","discipline":"Structure","category":"Modeling","suite":"CAD to Revit Modeling Suite","slug":"beams-regular-and-irregular-modeling"},"10":{"pkg":"Package 03 · Tool 01","title":"Room Wizard Tool","desc":"A room-finish automation workspace for Revit that reviews existing finishes, configures single- or multi-layer assemblies, groups rooms, and applies finish floors safely in batch.","image":"assets/images/tools/room-wizard-tool.webp","features":["Central room table showing room number, name, department, level, area, current finish, finish mode, new finish, and thickness","Single-layer and multi-layer finish modes, with editable layer build-ups and visible total thickness control","Existing finish conflict detection with an automatic safe-resolution option so supported finish overlaps can be handled before application","Search, Create Group, Add Columns, Show / Hide Columns, and Arrange Columns for large-project workflows","Room order and grouping controls, including level-based grouping and tile-pattern options such as Balance and Align to Corner","Per-room review through the View button, plus Apply or Apply Selected workflows for controlled batch modeling","Finish base offset from level control for managing finish elevations consistently across multiple rooms","Designed for real finish-production review where current room conditions stay visible while new finishes are prepared"],"tableTitle":"Workflow Comparison — Room Finish Design & Modeling","rows":[["Review current room finishes","Open rooms, inspect existing floors, and track conditions manually","Centralized room grid with current finish and planned finish side by side","Less navigation"],["Configure finish build-ups","Create or edit floor types repeatedly for each room","Choose single-layer or multi-layer finish modes directly in the grid","Faster setup"],["Handle finish conflicts","Find and resolve overlapping finishes manually","Automatic safe conflict resolution with manual review for unsupported cases","Safer updates"],["Apply finish specs to many rooms","Repeat setup room by room","Group rooms and use Apply / Apply Selected in batch","Consistent batch application"]],"summary":"Room Wizard keeps room data, existing finishes, new finish assemblies, conflict handling, and batch application together in one controlled production workspace.","web_image":"assets/images/tools/room-wizard-tool.webp","discipline":"Architecture","category":"Finishes","suite":"Architectural Automation Suite","slug":"room-wizard","tableImpactHeader":"Automation impact"},"17":{"pkg":"Package 03 · Tool 02","title":"Ceiling Wizard Tool","desc":"Automated suspended-ceiling design, calculation, and modeling for Revit rooms, with grouped-room workflows, preview/review, structural height checks, and advanced layout options including divided bays.","features":["Four ceiling patterns in one workspace: Full Gypsum, Full Tiles, Perimeter + Whole Tiles, and Divided Bays","Room list workflow with Select All, linked-room support, grouping of similar rooms, and per-room Design / Review actions","Type detection for gypsum and tile ceilings, including 60×60 module recognition from the ceiling material pattern for calculation-driven layouts","Height validation against the structural soffit above the room before generation, including linked structural content when available","Divided-Bay controls for tile orientation, gypsum border widths, internal bands, equal or symmetric bay distribution, and whole-tile review","Optional vertical gypsum bulkheads with separate wall-type control whenever adjacent ceiling regions have different elevations","Reusable grouped workflows so one approved design basis can be reviewed and applied across similar rooms","Clear status and message feedback for existing Ceiling Wizard designs, owned elements, and review-ready rooms"],"tableTitle":"Workflow Comparison — Suspended Ceiling Design & Modeling","rows":[["Select and review dozens of rooms","Open rooms one by one and inspect ceiling conditions manually","Central room table with search, grouping, review, and batch selection","Batch-ready workflow"],["Create full or stepped ceiling layouts","Sketch multiple ceiling regions manually and coordinate offsets","Generate calculated layouts from one controlled design panel","Coordinated modeling"],["Divide a rectangular room into tiled bays","Manual trial-and-error with gypsum bands and tile counts","Calculation-driven divided-bay layout with controlled bands and tile modules","Faster and more consistent"],["Repeat an approved design across similar rooms","Rebuild the same concept room by room","Group similar rooms, review once, and apply repeatedly","Reusable room logic"]],"summary":"Built for real architectural ceiling production: one interface for room grouping, ceiling-type detection, layout calculation, and coordinated generation of ceilings and optional bulkheads.","tableImpactHeader":"Automation impact","web_image":"assets/images/tools/ceiling-wizard-tool.webp","image":"assets/images/tools/ceiling-wizard-tool.webp","discipline":"Architecture","category":"Ceilings","suite":"Architectural Automation Suite","slug":"ceiling-wizard"},"09":{"pkg":"Package 04 · Tool 01","title":"Model Navigator Tool","desc":"A powerful model-control workspace for Revit: browse categories and types, select elements by parameter, isolate or hide them, apply graphic overrides, control transparency, and save reusable selections.","image":"assets/images/tools/model-navigator-tool.webp","features":["Choose scope: Active View or Entire Model, depending on whether the operation should stay view-specific or project-wide","Category source options from the live model or from a prepared list, with category search and optional general filters","Type-of-elements panel that loads model types for the selected categories and supports type-level filtering","Selection by Parameter workflow: pick an element from Revit, read its parameter context, and drive selection logic from it","Bulk controls for Select Elements, Isolate, Hide, Transparency, Delete, and the corresponding Reset / Restore actions","Graphic Override panel with color picking and one-click apply/reset for fast visual review and coordination","Saved selections area for storing and reloading reusable filtered selections","Useful for fast navigation and review in large multi-discipline models where finding, isolating, and styling elements takes too many clicks manually"],"tableTitle":"Workflow Comparison — Model Navigation & Visual Review","rows":[["Find categories and types","Open different Revit dialogs and views to locate target elements","Browse categories and types in one workspace","Centralized navigation"],["Isolate or hide selected elements","Repeated manual selections and temporary hide/isolate commands","Select once and run isolate or hide immediately","Fewer clicks"],["Apply graphic overrides","Open VG/Overrides workflows and repeat changes manually","Pick a color and apply overrides directly from the tool","Faster visual review"],["Reuse common filtered selections","Repeat the same selection workflow every time","Save selections and reload them instantly","Reusable review setup"]],"summary":"Model Navigator brings category browsing, type filtering, parameter-based selection, visibility control, overrides, and saved selections into a single high-speed review interface.","web_image":"assets/images/tools/model-navigator-tool.webp","discipline":"All","category":"Productivity","suite":"General Productivity Suite","slug":"model-navigator","tableImpactHeader":"Automation impact"},"11":{"pkg":"Package 04 · Tool 02","title":"Instance Parameter Transfer Tool","desc":"A data management tool for Revit instance parameters — copy, move, or delete parameter values across element instances, or assign new values to any parameter type directly from the interface.","image":"assets/images/tool-11-instance-params.png","features":["Browse all categories → select a type → view all available instance parameters","Transfer values from one instance parameter to another (Move or Copy)","Target parameter list filtered by compatible storage type — no type mismatch errors","Supports all storage types: String, Integer, Double, Element ID","Clear (delete) parameter values in bulk","Directly assign a custom value to any parameter for all selected elements at once"],"tableTitle":"Time Comparison — Transferring Parameter Data Across 500 Elements","rows":[["Select all elements of a category/type","~10 min","Category → Type → Select","95%"],["Copy value to new parameter (500 elements)","Not feasible manually","~5 sec","99%"],["Clear a parameter value in bulk","Hours of editing","1 click","99%"]],"summary":"Critical for <strong>BIM data management and QA/QC</strong> — previously impractical tasks completed in seconds.","web_image":"assets/images/tools/instance-parameter-transfer-tool.webp","discipline":"Multi-Discipline","category":"Parameters","suite":"General Productivity Suite","slug":"instance-parameter-transfer"},"12":{"pkg":"Package 04 · Tool 03","title":"Type Parameter Transfer Tool","desc":"The companion to the Instance Parameter Tool — same powerful interface but operating on Revit family type parameters rather than individual instances.","image":"assets/images/tool-12-type-params.png","features":["Browse all categories → select types → view available type parameters","Transfer values between type parameters (Move or Copy) with auto storage-type filtering","Assign custom values directly to any type parameter across the project","Clear type parameter values from selected types in bulk","Supports all parameter storage types: String, Integer, Double, Element ID","Essential for standardizing type data, quantity takeoff preparation, and BIM data exports"],"tableTitle":"Example — Batch-Updating Material Parameter Across 80 Family Types","rows":[["Open each type's properties dialog","~1 min × 80 = 80 min","Browse list — all visible","99%"],["Update parameter value per type","~30 sec × 80 = 40 min","Bulk assign → ~3 sec","99%"],["Verify changes across all types","~30 min","All visible in list","90%"]],"summary":"Together, both parameter tools transform <strong>BIM data management from a day-long task into minutes</strong>.","web_image":"assets/images/tools/type-parameter-transfer-tool.webp","discipline":"Multi-Discipline","category":"Parameters","suite":"General Productivity Suite","slug":"type-parameter-transfer"},"14":{"pkg":"Package 04 · Tool 04","title":"Selection by Filter Tool","desc":"An intelligent selection interface — pick a single element, choose any instance parameter, select a value, and instantly select all matching elements in the active view.","image":"assets/images/tool-14-selection-parameter.png","features":["Pick & Learn: Click any element in the model to instantly display all its available instance parameters","Unique Value Discovery: Choose a parameter to retrieve all its unique existing values in the current view without duplicates","Instant Smart Selection: Select a value and click Filter to automatically select all elements with the same parameter value in the active view","Active View Scope: Searches only within visible elements in the current view (not the entire project) for high precision and fast performance","All Data Types Supported: Seamlessly handles and processes text, integers, doubles, and Element IDs, converting them to searchable string values","Alphabetical Sorting: Automatically sorts parameters and values alphabetically for fast and easy access"],"tableTitle":"Time Comparison — Selecting Elements by Parameter","rows":[["Select all doors with a specific Mark","~8 min (Schedule → Filter → Select)","4 clicks (under 5 sec)","95%"],["Select elements by a non-standard custom parameter","~15 min (Requires writing a Dynamo/API script)","Pick value → Filter (under 5 sec)","98%"],["Select all beams with a specific connection type in a large model","~12 min (Visual inspection + Ctrl+Click)","Pick → Filter → Done","97%"],["Find elements by a long text parameter value","~10 min (Export → Excel → Filter → Copy IDs → Select in Revit)","Choose value from list (under 5 sec)","99%"]],"summary":"Smart, instant selection of coordination elements in large views. Manual: <strong style='color:var(--error)'>20–40 minutes</strong> (requires scheduling, exporting, or custom scripting, often failing with custom parameters) → With Tool: <strong>under 15 seconds</strong>.","web_image":"assets/images/tools/selection-by-filter-tool.webp","discipline":"Multi-Discipline","category":"Selection","suite":"General Productivity Suite","slug":"selection-by-filter"},"15":{"pkg":"Package 04 · Tool 05","title":"Warning Clash Visualizer Tool","desc":"A centralized warning management dashboard — display all project warnings and clashes in a single list, and instantly isolate, color-code, and zoom into conflicting elements in a dedicated 3D view with an automatically sized section box.","image":"assets/images/tool-15-clash-visualizer.png","features":["Central Warning List: Displays all project warnings in a detailed table with error messages, element counts, and specific element details","Smart 3D Warning View: Automatically generates or reuses a dedicated 3D view named 'WarningView' specifically for visualizing issues","Auto-Isolation: Instantly isolates only the conflicting elements of the selected warning, clearing previous overrides automatically","Precise Section Box: Calculates the exact bounding box around the clashing elements and applies it with a safe offset (4 feet / ~1.2 meters)","Multi-Color Coding: Uses a pre-defined 8-color palette to paint each clashing element a different color for instant visual differentiation","Solid Surface Fills: Applies high-contrast solid surface fills and projection colors for optimal visibility","Auto-Zoom & Select: Automatically selects the clashing elements and zooms in (ShowElements) to focus on the issue area","Smart View Reuse: Avoids cluttering the project by reusing the 'WarningView' and cleaning up old overrides rather than creating new views","Grouping by Category: Internally categorizes conflicting elements by category for better tracking"],"tableTitle":"Time Comparison — Inspecting Clashing Elements & Warnings","rows":[["Find conflicting elements for a specific warning","~10 min (Manage → Warnings → copy IDs → search manually)","Click 'Show' (1 sec)","97%"],["Isolate conflicting elements in a 3D view","~5 min (Isolate manually using element IDs)","Done automatically","99%"],["Adjust Section Box around clash zone","~4 min (Manually adjusting 6 section box grips)","Calculated automatically","98%"],["Color-code each element differently for visibility","~8 min (Manually override graphics per element)","Done automatically with 8 colors","99%"],["Fully inspect a single warning from A to Z","~25 min","1 click","99%"]],"summary":"Comprehensive warning and clash inspection. Manual: <strong style='color:var(--error)'>2–4 hours</strong> (locating warnings, copying IDs, isolating, color-coding, and zooming for dozens of items) → With Tool: <strong>under 5 minutes</strong> to inspect all warnings one-by-one.","web_image":"assets/images/tools/warning-clash-visualizer-tool.webp","discipline":"Multi-Discipline","category":"QA/QC","suite":"General Productivity Suite","slug":"warning-clash-visualizer"},"16":{"pkg":"Package 04 · Tool 06","title":"Door Data Sync Tool","desc":"A bi-directional data bridge — export all door data from Revit to a SQL Server database, edit parameters externally (via Excel, SQL, or web tools), and sync the changes back to Revit parameters in seconds.","image":"assets/images/tool-16-sql-doors.png","features":["Auto Table Creation: Instantly creates a 'Doors' table with correct schemas in SQL Server with verification to prevent duplicates","Comprehensive Export: Scans the project and exports key door parameters: UniqueId, FamilyType, Mark, and Finish","Smart Import & Sync: Reads updated values from the SQL database and updates the corresponding Revit elements using the UniqueId as a primary key","Duplicate Prevention: Safe primary key handling skips already-exported elements without throwing errors","Read-Only Protection: Safely skips read-only parameters without breaking the synchronization process","Secure Connection: Uses Windows Authentication (Integrated Security) and TrustServerCertificate for local SQL Server instances","Instant Progress Logs: Provides real-world success notifications showing the count of elements exported or updated"],"tableTitle":"Time Comparison — Syncing Door Parameters","rows":[["Exporting 500 doors to external tables","~30 min (Schedule → Export → Clean Excel)","Click 'Export' (2 sec)","98%"],["Updating finish parameters for 200 doors externally","~45 min (Editing elements one-by-one in Revit)","Click 'Import' (5 sec)","99%"],["Designing database tables and schemas","~20 min (Designing DB → creating columns → setting types)","Click 'Create Table' (1 sec)","99%"],["Verification of duplicate or missing doors","~15 min (Comparing Excel lists against Revit schedules)","UniqueId matches 100% reliably","100%"]],"summary":"Update finish data for all doors in the project from an external database. Manual: <strong style='color:var(--error)'>1–2 hours</strong> (exporting schedules, editing Excel, locating elements, and typing updates) → With Tool: <strong>under 30 seconds</strong>.","web_image":"assets/images/tools/door-data-sync-tool.webp","discipline":"Architecture","category":"Data","suite":"General Productivity Suite","slug":"door-data-sync"}};
  const toolsData = Object.values(RAW_TOOLS).map(tool => ({ ...tool, disciplineLabel: normalizeDiscipline(tool.discipline) }));
  const dismissedSuggestions = new Set();

  const PACKAGE_CONFIG = {
    'Rebar Automation Suite': {
      title: 'Structural Reinforcement Package', short: 'Structural', icon: '🔩', accent: 'blue',
      description: 'Reinforcement automation for footings, columns, additional bars, visibility control, and rebar legs.'
    },
    'CAD to Revit Modeling Suite': {
      title: 'Structural Modeling Package', short: 'Structural', icon: '📐', accent: 'orange',
      description: 'CAD-to-Revit modeling for foundations, columns, RC walls, slabs, drop panels, and beams.'
    },
    'Architectural Automation Suite': {
      title: 'Architectural Automation Package', short: 'Architecture', icon: '🏛️', accent: 'purple',
      description: 'Architectural production automation through Room Wizard and Ceiling Wizard.'
    },
    'General Productivity Suite': {
      title: 'General Productivity Package', short: 'All Disciplines', icon: '⚡', accent: 'green',
      description: 'Model navigation, parameter workflows, smart selection, QA/QC, and connected data tools.'
    }
  };

  const root = document.querySelector('[data-store-root]');
  const state = loadState();

  function loadState() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORE_KEY) || '{}');
      return {
        packages: Array.isArray(parsed.packages) ? parsed.packages.filter(name => PACKAGE_CONFIG[name]) : [],
        tools: Array.isArray(parsed.tools) ? parsed.tools.filter(slug => toolsData.some(tool => tool.slug === slug)) : []
      };
    } catch (_) { return { packages: [], tools: [] }; }
  }

  function saveState() {
    state.packages = [...new Set(state.packages)];
    state.tools = [...new Set(state.tools)];
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (_) {}
    dismissedSuggestions.clear();
    updateGlobalCartCount();
  }

  function normalizeDiscipline(value) {
    if (!value || value === 'Multi-Discipline' || value === 'All') return 'All Disciplines';
    if (value === 'Structure') return 'Structural';
    return value;
  }

  function suiteTools(suiteName) { return toolsData.filter(tool => tool.suite === suiteName); }
  function findTool(slug) { return toolsData.find(tool => tool.slug === slug); }
  function isDirect(slug) { return state.tools.includes(slug); }
  function includedByPackage(slug) {
    return state.packages.find(suite => suiteTools(suite).some(tool => tool.slug === slug)) || null;
  }
  function standaloneTools() {
    return state.tools.filter(slug => !includedByPackage(slug)).map(findTool).filter(Boolean);
  }
  function cartCount() { return state.packages.length + standaloneTools().length; }

  function addTool(slug) {
    if (includedByPackage(slug)) return;
    if (!state.tools.includes(slug)) state.tools.push(slug);
    saveState();
  }
  function removeTool(slug) { state.tools = state.tools.filter(item => item !== slug); saveState(); }
  function addPackage(suite) { if (!state.packages.includes(suite)) state.packages.push(suite); saveState(); }
  function removePackage(suite) { state.packages = state.packages.filter(item => item !== suite); saveState(); }
  function clearCart() { state.packages = []; state.tools = []; saveState(); }

  function convertPackageExcluding(suite, excludedSlug) {
    const slugs = suiteTools(suite).map(tool => tool.slug);
    state.packages = state.packages.filter(item => item !== suite);
    slugs.forEach(slug => {
      if (slug !== excludedSlug && !includedByPackage(slug) && !state.tools.includes(slug)) state.tools.push(slug);
    });
    state.tools = [...new Set(state.tools.filter(slug => slug !== excludedSlug))];
    saveState();
  }

  function packageSuggestions() {
    return Object.keys(PACKAGE_CONFIG).filter(suite => {
      if (state.packages.includes(suite) || dismissedSuggestions.has(suite)) return false;
      const slugs = suiteTools(suite).map(tool => tool.slug);
      return slugs.length > 0 && slugs.every(slug => state.tools.includes(slug));
    });
  }

  function switchToPackage(suite) {
    const slugs = suiteTools(suite).map(tool => tool.slug);
    state.tools = state.tools.filter(slug => !slugs.includes(slug));
    if (!state.packages.includes(suite)) state.packages.push(suite);
    saveState();
  }

  function updateGlobalCartCount() {
    document.querySelectorAll('[data-global-cart-count], [data-cart-count]').forEach(el => { el.textContent = String(cartCount()); });
    document.querySelectorAll('[data-global-cart-link]').forEach(link => {
      link.classList.toggle('has-items', cartCount() > 0);
      link.setAttribute('aria-label', `Open cart, ${cartCount()} item${cartCount() === 1 ? '' : 's'}`);
    });
  }

  function toast(message) {
    const el = document.querySelector('[data-store-toast]') || createToast();
    el.textContent = message; el.hidden = false;
    clearTimeout(toast.timer); toast.timer = setTimeout(() => { el.hidden = true; }, 2200);
  }
  function createToast() {
    const el = document.createElement('div'); el.className = 'toast'; el.dataset.storeToast = ''; el.hidden = true; document.body.appendChild(el); return el;
  }

  function statusForTool(tool) {
    const suite = includedByPackage(tool.slug);
    if (suite) return { kind:'included', suite };
    if (isDirect(tool.slug)) return { kind:'added' };
    return { kind:'available' };
  }

  function renderPackages() {
    const target = document.querySelector('[data-packages-grid]'); if (!target) return;
    target.innerHTML = Object.entries(PACKAGE_CONFIG).map(([suite, cfg]) => {
      const items = suiteTools(suite); const added = state.packages.includes(suite);
      return `<article class="package-card package-${cfg.accent} ${added ? 'is-selected' : ''}">
        <div class="package-card-top"><span class="package-icon">${cfg.icon}</span><span class="status-badge ${added ? 'status-added' : 'status-neutral'}">${added ? '✓ Added to cart' : 'Ready package'}</span></div>
        <div class="package-meta"><span class="pill">${cfg.short}</span><span class="pill muted-pill">${items.length} tools</span></div>
        <h3>${cfg.title}</h3><p>${cfg.description}</p>
        <div class="price-placeholder"><strong>Pricing on request</strong><span>One quote for the complete package</span></div>
        <div class="package-tools"><strong>Included tools</strong><ul>${items.map(tool => `<li><a href="tools/${tool.slug}.html">${tool.title}</a></li>`).join('')}</ul></div>
        <div class="tool-card-actions">
          ${added ? `<button class="button button-secondary" type="button" data-remove-package="${suite}">Remove Package</button>` : `<button class="button button-primary" type="button" data-add-package="${suite}">Add Package</button>`}
          <a class="button button-ghost" href="#bundle-builder">View Tools</a>
        </div>
      </article>`;
    }).join('');
  }

  function currentFilters() {
    return {
      q: (document.querySelector('[data-bundle-search]')?.value || '').trim().toLowerCase(),
      discipline: document.querySelector('[data-bundle-discipline]')?.value || '',
      suite: document.querySelector('[data-bundle-suite]')?.value || ''
    };
  }

  function renderTools() {
    const target = document.querySelector('[data-bundle-grid]'); if (!target) return;
    const f = currentFilters();
    const filtered = toolsData.filter(tool => {
      const hay = `${tool.title} ${tool.desc} ${tool.category} ${tool.suite} ${tool.disciplineLabel}`.toLowerCase();
      return (!f.q || hay.includes(f.q)) && (!f.discipline || tool.disciplineLabel === f.discipline) && (!f.suite || tool.suite === f.suite);
    });
    const count = document.querySelector('[data-bundle-count]'); if (count) count.textContent = String(filtered.length);
    target.innerHTML = filtered.map(tool => {
      const status = statusForTool(tool);
      const cfg = status.suite ? PACKAGE_CONFIG[status.suite] : null;
      const cardClass = status.kind === 'included' ? 'is-included' : status.kind === 'added' ? 'is-added' : '';
      let statusHtml = '<span class="status-badge status-neutral">Available</span>';
      let primaryAction = `<button class="button button-primary" type="button" data-add-tool="${tool.slug}">Add to Cart</button>`;
      if (status.kind === 'added') {
        statusHtml = '<span class="status-badge status-added">✓ Added to cart</span>';
        primaryAction = `<button class="button button-secondary" type="button" data-remove-tool="${tool.slug}">Remove</button>`;
      } else if (status.kind === 'included') {
        statusHtml = `<span class="status-badge status-included">✓ Included in ${cfg?.title || status.suite}</span>`;
        primaryAction = `<button class="button button-secondary" type="button" data-manage-package="${status.suite}">Manage Package</button>`;
      }
      return `<article class="store-card ${cardClass}">
        <a class="store-card-image" href="tools/${tool.slug}.html"><img src="${tool.web_image || tool.image}" alt="${tool.title} interface" loading="lazy"><span class="image-link-label">View tool</span></a>
        <div class="store-card-body">
          <div class="tool-meta-row"><span class="pill discipline-badge">${tool.disciplineLabel}</span><span class="pill category-badge">${tool.category}</span></div>
          <h3><a href="tools/${tool.slug}.html">${tool.title}</a></h3><p>${tool.desc}</p>
          <div class="tool-suite">${tool.suite.replace(' Suite',' Package')}</div>
          <div class="price-placeholder compact"><strong>Pricing on request</strong><span>Individual license quote</span></div>
          <div>${statusHtml}</div>
          <div class="tool-card-actions">${primaryAction}<a class="button button-ghost" href="tools/${tool.slug}.html">View Details</a></div>
        </div>
      </article>`;
    }).join('') || '<div class="empty-state store-empty"><h3>No matching tools</h3><p>Try another search term or change the filters.</p></div>';
  }

  function renderCart() {
    const target = document.querySelector('[data-cart-items]'); if (!target) return;
    const directTools = standaloneTools();
    if (!cartCount()) {
      target.innerHTML = '<div class="cart-empty-state"><span>🛒</span><strong>Your cart is empty</strong><p>Add a package or individual tools to start your quote request.</p></div>';
    } else {
      const packages = state.packages.map(suite => {
        const cfg = PACKAGE_CONFIG[suite]; const items = suiteTools(suite);
        return `<article class="cart-item cart-package-item"><div class="cart-item-header"><div><span class="cart-type">Package</span><strong>${cfg.title}</strong><small>${items.length} included tools</small></div><button class="mini-remove" type="button" data-remove-package="${suite}">Remove</button></div>
          <ul class="cart-package-list">${items.map(tool => `<li><a href="tools/${tool.slug}.html">${tool.title}</a><button class="manage-link" type="button" data-exclude-tool="${suite}|${tool.slug}">Exclude</button></li>`).join('')}</ul></article>`;
      }).join('');
      const tools = directTools.map(tool => `<article class="cart-item"><div class="cart-item-header"><div><span class="cart-type">Individual tool</span><strong>${tool.title}</strong><small>${tool.disciplineLabel} · ${tool.category}</small></div><button class="mini-remove" type="button" data-remove-tool="${tool.slug}">Remove</button></div></article>`).join('');
      target.innerHTML = packages + tools;
    }

    const suggestions = packageSuggestions(); const suggestionRoot = document.querySelector('[data-cart-suggestions]');
    if (suggestionRoot) {
      suggestionRoot.innerHTML = suggestions.map(suite => `<div class="cart-suggestion"><span class="suggestion-kicker">Smart suggestion</span><p>You selected every tool in <strong>${PACKAGE_CONFIG[suite].title}</strong>.</p><div class="suggestion-actions"><button class="button button-small button-secondary" type="button" data-switch-package="${suite}">Switch to Package</button><button class="manage-link" type="button" data-keep-bundle="${suite}">Keep Custom Bundle</button></div></div>`).join('');
      suggestionRoot.hidden = suggestions.length === 0;
    }
    const btn = document.querySelector('[data-open-quote]'); if (btn) btn.disabled = cartCount() === 0;
    updateGlobalCartCount();
    renderMobileCartBar();
  }

  function renderMobileCartBar() {
    const bar = document.querySelector('[data-mobile-cart-bar]'); if (!bar) return;
    bar.hidden = cartCount() === 0;
    const c = bar.querySelector('[data-mobile-cart-count]'); if (c) c.textContent = String(cartCount());
  }

  function quoteSelectionNames() {
    return [
      ...state.packages.map(suite => PACKAGE_CONFIG[suite]?.title || suite),
      ...standaloneTools().map(tool => tool.title)
    ];
  }

  function buildMessage(customer) {
    const lines = ['Hello BIM Sprint,', "I'm interested in purchasing the following BIM Sprint products:", ''];
    quoteSelectionNames().forEach(name => lines.push(`• ${name}`));
    lines.push('', `Name: ${customer.name}`, `Phone: ${customer.phone}`, `Country: ${customer.country}`);
    if (customer.company) lines.push(`Company: ${customer.company}`);
    if (customer.email) lines.push(`Email: ${customer.email}`);
    lines.push('', 'Please send me the pricing and licensing details.');
    return lines.join('\n');
  }

  function populateQuote() {
    const list = document.querySelector('[data-quote-selection]'); if (!list) return;
    const items = quoteSelectionNames(); list.innerHTML = items.map(name => `<li>${name}</li>`).join('') || '<li>No selection yet.</li>';
  }

  function openQuote() {
    if (!cartCount()) return;
    populateQuote(); const overlay = document.querySelector('[data-quote-overlay]'); if (!overlay) return;
    overlay.hidden = false; document.body.classList.add('modal-open');
    const form = overlay.querySelector('[data-quote-form]'); const success = overlay.querySelector('[data-quote-success]');
    if (form) { form.hidden = false; form.reset(); } if (success) success.hidden = true;
    const status = overlay.querySelector('[data-quote-status]'); if (status) status.textContent = '';
    setTimeout(() => overlay.querySelector('input[name="name"]')?.focus(), 20);
  }
  function closeQuote() { document.querySelector('[data-quote-overlay]')?.setAttribute('hidden',''); document.body.classList.remove('modal-open'); }

  function openConfirm(suite, slug) {
    const tool = findTool(slug); const cfg = PACKAGE_CONFIG[suite]; const overlay = document.querySelector('[data-confirm-overlay]'); if (!overlay || !tool || !cfg) return;
    overlay.dataset.suite = suite; overlay.dataset.slug = slug;
    overlay.querySelector('[data-confirm-tool-name]').textContent = tool.title;
    overlay.querySelector('[data-confirm-package-name]').textContent = cfg.title;
    overlay.hidden = false; document.body.classList.add('modal-open');
  }
  function closeConfirm() { document.querySelector('[data-confirm-overlay]')?.setAttribute('hidden',''); document.body.classList.remove('modal-open'); }

  async function submitQuote(form) {
    if (!form.reportValidity()) return;
    const customer = Object.fromEntries(new FormData(form).entries()); const message = buildMessage(customer);
    const status = document.querySelector('[data-quote-status]'); const submit = form.querySelector('button[type="submit"]');
    if (status) status.textContent = 'Sending your request…'; if (submit) submit.disabled = true;
    const payload = {
      _subject: 'BIM Sprint — Ready Add-ins quote request', _captcha: 'false', _template: 'table',
      Name: customer.name, Phone: customer.phone, Country: customer.country,
      Company: customer.company || 'Not provided', Products: quoteSelectionNames().join(' | '), Message: message
    };
    if (customer.email) payload.Email = customer.email;
    try {
      const response = await fetch(QUOTE_ENDPOINT, { method:'POST', headers:{'Content-Type':'application/json','Accept':'application/json'}, body:JSON.stringify(payload) });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.success === 'false') throw new Error(result.message || 'Email service error');
      if (status) status.textContent = ''; form.hidden = true;
      const success = document.querySelector('[data-quote-success]'); if (success) {
        success.hidden = false;
        const wa = success.querySelector('[data-open-whatsapp]'); if (wa) wa.onclick = () => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
      }
    } catch (error) {
      if (status) status.textContent = 'Automatic email could not be completed. Opening an email draft as a fallback…';
      window.location.href = `mailto:mnsourabubakr95@gmail.com?subject=${encodeURIComponent('BIM Sprint — Ready Add-ins quote request')}&body=${encodeURIComponent(message)}`;
    } finally { if (submit) submit.disabled = false; }
  }

  function renderAll() { renderPackages(); renderTools(); renderCart(); populateQuote(); syncDetailPage(); }

  function bindStore() {
    root?.addEventListener('click', event => {
      const t = event.target.closest('button, a'); if (!t) return;
      if (t.matches('[data-add-package]')) { addPackage(t.dataset.addPackage); renderAll(); toast('Package added to cart.'); }
      else if (t.matches('[data-remove-package]')) { removePackage(t.dataset.removePackage); renderAll(); }
      else if (t.matches('[data-add-tool]')) { addTool(t.dataset.addTool); renderAll(); toast('Tool added to cart.'); }
      else if (t.matches('[data-remove-tool]')) { removeTool(t.dataset.removeTool); renderAll(); }
      else if (t.matches('[data-manage-package]')) { document.querySelector('#cart-panel')?.scrollIntoView({behavior:'smooth',block:'start'}); }
      else if (t.matches('[data-exclude-tool]')) { const [suite, slug] = t.dataset.excludeTool.split('|'); openConfirm(suite, slug); }
      else if (t.matches('[data-switch-package]')) { switchToPackage(t.dataset.switchPackage); renderAll(); toast('Custom selection switched to package.'); }
      else if (t.matches('[data-keep-bundle]')) { dismissedSuggestions.add(t.dataset.keepBundle); renderCart(); }
      else if (t.matches('[data-clear-cart]')) { clearCart(); renderAll(); }
      else if (t.matches('[data-open-quote]')) openQuote();
    });
    document.querySelector('[data-bundle-search]')?.addEventListener('input', renderTools);
    document.querySelector('[data-bundle-discipline]')?.addEventListener('change', renderTools);
    document.querySelector('[data-bundle-suite]')?.addEventListener('change', renderTools);
    document.querySelector('[data-mobile-cart-bar]')?.addEventListener('click', () => document.querySelector('#cart-panel')?.scrollIntoView({behavior:'smooth',block:'start'}));

    const quoteOverlay = document.querySelector('[data-quote-overlay]');
    quoteOverlay?.addEventListener('click', event => { if (event.target === quoteOverlay || event.target.closest('[data-close-quote]')) closeQuote(); });
    document.querySelector('[data-quote-form]')?.addEventListener('submit', event => { event.preventDefault(); submitQuote(event.currentTarget); });

    const confirmOverlay = document.querySelector('[data-confirm-overlay]');
    confirmOverlay?.addEventListener('click', event => {
      if (event.target === confirmOverlay || event.target.closest('[data-confirm-keep]')) closeConfirm();
      const convert = event.target.closest('[data-confirm-convert]');
      if (convert) { const suite = confirmOverlay.dataset.suite, slug = confirmOverlay.dataset.slug; closeConfirm(); convertPackageExcluding(suite, slug); renderAll(); toast('Package converted to a custom bundle.'); }
    });
    document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeQuote(); closeConfirm(); } });
  }

  function syncDetailPage() {
    updateGlobalCartCount();
    document.querySelectorAll('[data-store-add-tool]').forEach(button => {
      const slug = button.dataset.storeAddTool; const status = statusForTool(findTool(slug) || {slug}); const href = button.getAttribute('href');
      button.classList.remove('button-primary','button-secondary','is-disabled');
      if (status.kind === 'included') { button.textContent = `✓ Included in ${PACKAGE_CONFIG[status.suite]?.title || 'package'}`; button.classList.add('button-secondary','is-disabled'); }
      else if (status.kind === 'added') { button.textContent = '✓ Added to cart'; button.classList.add('button-secondary','is-disabled'); }
      else { button.textContent = 'Add to Cart'; button.classList.add('button-primary'); }
      button.onclick = event => {
        event.preventDefault();
        if (status.kind === 'available') { addTool(slug); toast('Tool added to cart.'); syncDetailPage(); }
      };
    });
    document.querySelectorAll('[data-store-request-quote]').forEach(button => {
      button.onclick = event => {
        event.preventDefault(); const slug = button.dataset.storeRequestQuote;
        if (!includedByPackage(slug) && !isDirect(slug)) addTool(slug);
        window.location.href = `${button.getAttribute('href')}?quote=1`;
      };
    });
  }

  function initStorePage() {
    updateGlobalCartCount(); syncDetailPage();
    if (!root) return;
    renderAll(); bindStore();
    const params = new URLSearchParams(window.location.search);
    if (params.get('quote') === '1' && cartCount()) setTimeout(openQuote, 80);
    if (window.location.hash === '#cart-panel') setTimeout(() => document.querySelector('#cart-panel')?.scrollIntoView({block:'start'}), 80);
  }

  initStorePage();
})();
