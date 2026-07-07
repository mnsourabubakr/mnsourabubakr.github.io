// BIM Sprint — Services Data

const SERVICES = {
  "01": {
    title: "Ready-to-Use Revit Add-ins",
    icon: "🧩",
    tagline: "Install, click, and automate — production-ready tools that deliver results from day one.",
    overview: "Ready-to-use Revit Add-ins designed to automate repetitive engineering tasks, improve modeling accuracy, and significantly reduce project delivery time. No complex setup needed — install the tool and start saving hours immediately.",
    deliveryTime: "Instant download and activation",
    supportedVersions: "Revit 2022–2027",
    features: [
      "Instant Setup: Install in under a minute with zero configuration",
      "60-80% Time Savings: Proven in real-world structural and architectural projects",
      "Regular Updates: Continuous improvements and new features based on user feedback",
      "Full Compatibility: Seamless performance across all modern Revit versions",
      "Full Documentation: Complete step-by-step guides and priority technical support"
    ],
    packages: [
      { name: "🔩 Rebar Automation Suite", count: "5 tools", desc: "Structural reinforcement automation (footings, columns, slabs, legs generator...)" },
      { name: "📐 CAD to Revit Suite", count: "4 tools", desc: "CAD integration & instant elements modeling" },
      { name: "⚡ Productivity Suite", count: "7 tools", desc: "General productivity, parameter transfers, warning clash visualization, SQL doors..." }
    ],
    useCases: [
      "MEP Coordination: Highlight and color-code warning elements instantly inside 3D section boxes.",
      "Structural Detailing: Drawing hook legs for foundation slabs or placing column stirrup zones automatically.",
      "Parameter Auditing: Copying and verifying instance or type parameters in bulk in seconds."
    ],
    related: [
      { id: "02", name: "Custom Revit Add-in Development" },
      { id: "03", name: "Workflow Automation" },
      { id: "08", name: "BIM Automation Consulting" }
    ]
  },
  "02": {
    title: "Custom Revit Add-in Development",
    icon: "🔧",
    tagline: "Your unique workflow deserves a unique tool — built to fit, not to force change.",
    overview: "Every company has unique workflows. We develop custom Revit Add-ins tailored specifically to your standards, ensuring seamless integration with your existing processes. You don't need to change how your team works — we build the tool around your workflow.",
    deliveryTime: "Depends on project scope (typically 1–3 weeks)",
    supportedVersions: "Revit 2022–2027",
    features: [
      "Workflow-First Design: Built around your existing process with zero operational disruption",
      "Professional UI: Clean, intuitive interface that feels native to Revit's layout",
      "System Integration: Connect with Excel, databases, and external enterprise systems",
      "Real-Project Testing: Thoroughly tested on actual project models before delivery",
      "Source Code Option: Full source code ownership and repository handover available"
    ],
    useCases: [
      "Automated drawing generation based on custom model data and standards.",
      "Custom parameter management tools for company-specific workflows.",
      "Project-specific scheduling, custom exporting, and reporting modules.",
      "Automated QA/QC check sheets built natively into the ribbon."
    ],
    deliverables: [
      "Compiled Revit Add-in (.dll / .addin files)",
      "Professional MSI Installer package",
      "Complete user guide & training video",
      "Full Source Code (optional)",
      "Free post-delivery support & bug-fix warranty"
    ],
    related: [
      { id: "03", name: "Workflow Automation" },
      { id: "06", name: "Revit Add-in Maintenance & Enhancement" },
      { id: "07", name: "Software Licensing & Protection" }
    ]
  },
  "03": {
    title: "Workflow Automation",
    icon: "⚙️",
    tagline: "Eliminate repetitive tasks — let automation handle the boring stuff.",
    overview: "We transform manual, time-consuming engineering processes into fully automated workflows. Whether it's within Revit or across multiple software platforms (Revit + Excel + AutoCAD + Navisworks), we connect all the dots and keep your projects moving with minimal human intervention.",
    deliveryTime: "Depends on project scope (typically 1–4 weeks)",
    supportedVersions: "Revit 2022–2027",
    features: [
      "Multi-Software Integration: Bridge Revit, Excel, AutoCAD, Navisworks, and more",
      "Batch Processing: Execute operations on hundreds of elements at once",
      "60-90% Time Savings: Proven, measurable reduction in manual coordination work",
      "Full Documentation: Every automation step documented for your team",
      "Modular Design: Flexible architecture you can easily extend or update later"
    ],
    useCases: [
      "Automated drawing generation and sheet placement from model data.",
      "Parameter management and data synchronization between Revit and Excel.",
      "CAD-to-Revit automated modeling workflows.",
      "Batch exporting of drawings, schedules, and models into PDF/DWG/IFC formats."
    ],
    related: [
      { id: "02", name: "Custom Revit Add-in Development" },
      { id: "04", name: "Custom Engineering Software Development" },
      { id: "08", name: "BIM Automation Consulting" }
    ]
  },
  "04": {
    title: "Custom Engineering Software Development",
    icon: "💻",
    tagline: "Full-scale engineering software — from concept to deployment.",
    overview: "We develop complete engineering software solutions that go beyond Revit. Whether you need a calculation engine, an internal management system, a web-based data platform, or any custom engineering application — we build it from scratch using modern technologies.",
    deliveryTime: "Depends on project scope",
    supportedVersions: "Windows 10/11, Web-based",
    features: [
      "Desktop Applications: Professional applications using WPF and .NET",
      "Web Applications: Modern web apps accessible securely from anywhere",
      "Database Design: Engineered databases for structural and engineering data",
      "Calculation Engines: Precise engineering calculation modules tailored to code",
      "Enterprise Security: Production-grade security and reliability built-in"
    ],
    useCases: [
      "Engineering desktop design and calculation applications.",
      "Internal database-driven management and tracking systems.",
      "Custom reporting systems and project management utilities.",
      "Cloud platforms for structural data exchange and auditing."
    ],
    related: [
      { id: "05", name: "Legacy Software Modernization" },
      { id: "07", name: "Software Licensing & Protection" },
      { id: "08", name: "BIM Automation Consulting" }
    ]
  },
  "05": {
    title: "Legacy Software Modernization",
    icon: "🔄",
    tagline: "Still using old Excel macros or Windows Forms apps? Let's fix that.",
    overview: "We modernize legacy engineering software by rebuilding it with modern technologies — such as WPF and MVVM — while preserving your existing business logic. Your team keeps the same workflow they know, but gets a faster, more stable, and professionally packaged tool.",
    deliveryTime: "Depends on complexity",
    supportedVersions: "Windows 10/11, .NET 8+",
    features: [
      "VBA to .NET Migration: Move from fragile VBA/Macros to robust, compiled C# code",
      "Modern UI: Replace outdated, raw interfaces with clean, responsive designs",
      "Performance Boost: Significantly faster execution times and better stability",
      "Code Protection: Secure compiled code instead of exposed VBA scripts",
      "Professional Installer: Proper distribution packages instead of manual copying",
      "Data Compatibility: Full backward compatibility with your existing sheets and files"
    ],
    useCases: [
      "Converting large, fragile Excel VBA macros into robust Revit add-ins or desktop apps.",
      "Rebuilding old Windows Forms tools into WPF with modern MVVM design patterns.",
      "Securing proprietary structural calculations from unauthorized copies."
    ],
    related: [
      { id: "04", name: "Custom Engineering Software Development" },
      { id: "06", name: "Revit Add-in Maintenance & Enhancement" },
      { id: "07", name: "Software Licensing & Protection" }
    ]
  },
  "06": {
    title: "Revit Add-in Maintenance & Enhancement",
    icon: "🛠️",
    tagline: "Keep your tools running smoothly — updates, fixes, and new features on demand.",
    overview: "Already have a Revit Add-in that needs maintenance, bug fixes, or new features? Whether it was built by your team or by another developer, we take over and keep it running at peak performance. We fix what's broken, add what's missing, and update it for the latest Revit versions.",
    deliveryTime: "Depends on task / On-going support available",
    supportedVersions: "Revit 2022–2027",
    features: [
      "Add New Features: Extend functionality based on your evolving workflows",
      "Improve Performance: Optimize memory usage and speed up execution",
      "Fix Compatibility Issues: Resolve bugs, crashes, and unhandled exceptions",
      "Revit Upgrades: Upgrade code to be fully compatible with Revit 2022–2027",
      "Code Review & Refactoring: Improve code quality, safety, and maintainability"
    ],
    useCases: [
      "Upgrading legacy Revit add-ins built for Revit 2019 to run on Revit 2026/2027.",
      "Fixing silent crashes and memory leaks in custom tools.",
      "Adding a new user interface or a new command tab to an existing add-in."
    ],
    related: [
      { id: "02", name: "Custom Revit Add-in Development" },
      { id: "05", name: "Legacy Software Modernization" },
      { id: "07", name: "Software Licensing & Protection" }
    ]
  },
  "07": {
    title: "Software Licensing & Protection",
    icon: "🔒",
    tagline: "Protect your intellectual property — secure, flexible, and user-friendly licensing.",
    overview: "Our licensing solutions help protect your intellectual property while providing a smooth experience for legitimate users. From code obfuscation to advanced licensing systems (Node-Lock, Subscription, Floating License), we give you full control over who uses your software and how.",
    deliveryTime: "Typically 1–2 weeks",
    supportedVersions: "Cross-platform compatibility",
    features: [
      "Code Obfuscation: Prevent reverse engineering and decompilation of your code",
      "Online Activation: Smooth activation with a secure admin dashboard",
      "Device Locking: Lock licenses to specific hardware IDs (Node-Locking)",
      "Subscription Licensing: Setup monthly, annual, or lifetime options",
      "Trial Versions: Built-in demo limitations (time-locked or feature-locked)",
      "Tamper Protection: Secure cryptography to validate license files offline"
    ],
    useCases: [
      "Setting up licensing for commercial Revit add-ins sold to external firms.",
      "Securing internal software tools so they cannot be copied outside the company.",
      "Managing subscription durations and trial licenses for a suite of tools."
    ],
    related: [
      { id: "02", name: "Custom Revit Add-in Development" },
      { id: "04", name: "Custom Engineering Software Development" },
      { id: "06", name: "Revit Add-in Maintenance & Enhancement" }
    ]
  },
  "08": {
    title: "BIM Automation Consulting",
    icon: "📋",
    tagline: "Expert guidance to automate smarter — strategy before code.",
    overview: "Not every company needs new software. Sometimes improving existing workflows can save hundreds of engineering hours every month. In our consulting service, we analyze your processes, identify where automation will make the biggest impact, and create a clear roadmap — so you invest in the right solutions from day one.",
    deliveryTime: "Milestone-based delivery",
    supportedVersions: "All Autodesk / BIM platforms",
    features: [
      "Workflow Audit: Comprehensive review of your team's current drawing and modeling processes",
      "Automation Roadmap: Clear step-by-step implementation plan with priorities",
      "ROI Analysis: Detailed calculation of hours saved versus development cost",
      "Priority Matrix: Separate low-hanging fruits from high-complexity automations",
      "Best Practices: Expert guidance on Revit API standards, C#, and deployment"
    ],
    useCases: [
      "Helping a structural design firm identify why their detailing takes 5 days per project and mapping out 3 key tools to reduce it to 2 hours.",
      "Auditing a large BIM department's standards and creating an automation deployment checklist.",
      "Evaluating whether Dynamo, Revit API, or a standalone application is the best technical approach for a specific workflow."
    ],
    related: [
      { id: "01", name: "Ready-to-Use Revit Add-ins" },
      { id: "02", name: "Custom Revit Add-in Development" },
      { id: "03", name: "Workflow Automation" }
    ]
  },
  "09": {
    title: "Structural & Architectural BIM Modeling",
    icon: "🏢",
    tagline: "Accurate, detailed BIM models — ready for coordination and construction.",
    overview: "Professional structural and architectural BIM modeling using Revit. From initial models to construction-ready documentation, we build precise models covering all structural elements (columns, beams, slabs, foundations) and architectural elements (walls, doors, windows, finishes).",
    deliveryTime: "Depends on model size and LOD",
    supportedVersions: "LOD 300 to LOD 400",
    features: [
      "LOD 300-400 Details: High-detail models fully prepared for construction planning",
      "Geometric Accuracy: Precise dimensions, offsets, elevations, and annotations",
      "Clash Detection: Models formatted and cleaned specifically for Navisworks coordination",
      "Quantity Takeoff: Extract precise material schedules and takeoffs directly from models",
      "BIM Standards: 100% compliance with international BIM standards and templates"
    ],
    useCases: [
      "Building high-complexity structural concrete models for hospitals and high-rises from 2D designs.",
      "Modeling architectural partitions and finishes for layout coordination.",
      "Converting historical 2D paper blueprints into clean Revit 3D assets."
    ],
    deliverables: [
      "Accurate 3D BIM Models (Revit .rvt)",
      "Coordinated Models ready for Navisworks clash runs",
      "Construction-ready documentation sheets",
      "Detailed quantity schedules (BOM / Takeoffs)",
      "BIM compliance and quality reports"
    ],
    related: [
      { id: "10", name: "Structural Shop Drawings" },
      { id: "08", name: "BIM Automation Consulting" },
      { id: "03", name: "Workflow Automation" }
    ]
  },
  "10": {
    title: "Structural Shop Drawings",
    icon: "📐",
    tagline: "Construction-ready shop drawings — precise, detailed, and built for the site.",
    overview: "Our shop drawings are prepared with constructability, accuracy, and ease of execution in mind. We produce detailed structural shop drawings ready for direct site execution, including rebar detailing for slabs, beams, columns, and foundations, complete with Bar Bending Schedules (BBS) and precise construction details.",
    deliveryTime: "Depends on sheet count and complexity",
    supportedVersions: "Drawing templates (DWG / PDF / RVT)",
    features: [
      "Rebar Detailing: Precise reinforcement detailing following local building codes",
      "Bar Bending Schedules (BBS): Complete bar bending schedules automatically matching sheets",
      "Cross-Sections: Clear, readable, and highly annotated cross-sections for easy site reading",
      "Quantity Summaries: Steel weights and concrete volumes summarized per sheet/zone",
      "Rigorous QC: In-depth verification rounds before final drawings are issued"
    ],
    useCases: [
      "Creating shop drawings for columns, stirrups, and starter dowels in a high-rise tower.",
      "Preparing raft foundation reinforcement layouts with correct lap splices and hook lengths.",
      "Generating slab rebar detailing with automated BBS for large residential layouts."
    ],
    deliverables: [
      "Reinforcement detail drawings (DWG & PDF)",
      "Concrete dimension drawings",
      "Sections and detail elevation views",
      "Bar Bending Schedules (BBS)",
      "Steel and concrete quantity summaries"
    ],
    related: [
      { id: "09", name: "Structural & Architectural BIM Modeling" },
      { id: "08", name: "BIM Automation Consulting" },
      { id: "01", name: "Ready-to-Use Revit Add-ins" }
    ]
  }
};
