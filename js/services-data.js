//// BIM Sprint — Services Data

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
    tagline: "Your tools still work — but they deserve a modern, professional look and feel.",
    overview: "We specialize in modernizing the UI and architecture of existing Windows desktop tools. Whether you have an old Windows Forms application that needs to be rebuilt in WPF with a proper MVVM structure, or a WPF app whose interface needs a visual upgrade with modern design systems like Material Design — we handle it while preserving your existing business logic completely.",
    deliveryTime: "Depends on complexity",
    supportedVersions: "Windows 10/11, .NET 8+, WPF / Material Design",
    features: [
      "Windows Forms → WPF Migration: Rebuild your WinForms app using WPF and the proper MVVM pattern",
      "WPF UI Modernization: Upgrade existing WPF interfaces with modern design systems (Material Design, Fluent UI)",
      "UI Extension & Redesign: Add new panels, tabs, or controls to an existing interface without breaking it",
      "MVVM Architecture: Implement proper separation of logic and UI for cleaner, testable code",
      "Component-Level Upgrades: Modernize specific controls or windows without rewriting the entire app",
      "Visual Consistency: Establish a unified design system across all windows and dialogs"
    ],
    useCases: [
      "Migrating a Windows Forms structural calculation tool into a modern WPF application with MVVM.",
      "Applying Material Design to an existing WPF add-in that still uses default ugly grey controls.",
      "Adding a new settings panel or a results dashboard to an existing desktop tool.",
      "Redesigning an old-style ribbon toolbar into a clean modern sidebar navigation."
    ],
    related: [
      { id: "02", name: "Custom Revit Add-in Development" },
      { id: "06", name: "Revit Add-in Maintenance & Enhancement" },
      { id: "04", name: "Custom Engineering Software Development" }
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
        tagline: "Protect your engineering tools with secure licensing and advanced code protection.",

        overview: "We provide a complete dual-layer protection solution for your engineering software. The first layer is a flexible licensing system that gives you full control over who can use your tools and for how long. The second layer is an advanced Code Obfuscation (code protection) solution that helps secure your compiled assemblies against reverse engineering and intellectual property theft — while ensuring your DLL files never leave your own computer.",

        deliveryTime: "Instant setup for managed licensing / 1–2 days for complete system handover",

        supportedVersions: "Compatible with any engineering software, including Revit add-ins, AutoCAD plugins, Civil 3D tools, Tekla extensions, standalone applications, and Python scripts.",
        features: [
            "Dual-Layer Protection: Combine secure software licensing with advanced code protection to safeguard both software access and intellectual property.",

            "Two Licensing Models: Choose between a fully managed licensing service, where we handle user licenses and activations for you, or purchase the complete licensing infrastructure to manage everything independently.",

            "Managed Licensing Service: Simply integrate our lightweight validation component into your application, and we handle license creation, activation, expiration, renewals, and user management.",

            "Self-Hosted Licensing System: Receive the complete licensing server, administration dashboard, deployment guide, database structure, and client validation SDK, allowing you to host and manage your own licensing platform.",

            "Advanced Code Obfuscation (Code Protection): We provide a ready-to-use local obfuscation toolkit specifically configured for C# engineering applications. All protection is performed entirely on your own computer—your DLL files never leave your machine and are never uploaded or shared with us. This guarantees complete privacy while significantly increasing protection against reverse engineering, decompilation, and intellectual property theft.",

            "100% Local Processing: Your DLL files always remain inside your own development environment. We never request, receive, upload, or store any part of your compiled application, ensuring complete confidentiality of your software.",

            "Multi-Language Support: Ready-to-use validation libraries for both C# and Python applications, connected to the same licensing backend.",

            "Device Locking (Node-Lock): Bind licenses to specific hardware IDs to prevent unauthorized sharing across multiple machines.",

            "Subscription & Trial Management: Support monthly, yearly, lifetime, time-limited, and feature-limited licensing models."
        ],

        deliverables: [
            "Managed Licensing Model: Complete licensing management with user administration, license activation, renewal, and expiration management.",

            "Self-Hosted Licensing Model: Complete licensing server, administration dashboard, deployment guide, database structure, and client validation SDK.",

            "Local Code Obfuscation Toolkit: A ready-to-use local protection tool specifically configured for engineering software. All DLL protection is performed entirely on your own computer, so your compiled files never leave your environment.",

            "Secure administration dashboard for managing users, licenses, activations, and subscription expirations.",

            "Post-delivery technical support for deployment and integration."
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
        overview: "We produce Revit-based structural shop drawings for concrete elements — from concrete dimension plans to full reinforcement detailing with Bar Bending Schedules (BBS) and quantity summaries. You provide an IFC or RVT model at LOD 300, and we deliver fabrication-ready shop drawings at LOD 400 directly from Revit. We also provide LOD 500 as-built documentation reflecting actual site conditions after execution.",
        deliveryTime: "Depends on sheet count and complexity",
        supportedVersions: "IFC / RVT / DWG / PDF",
        features: [
            "Revit-Native Detailing: All shop drawings produced directly in Revit — not drafted in CAD and back-linked",
            "IFC to LOD 400 Workflow: We accept IFC models and develop them into full fabrication-level shop drawings in Revit",
            "LOD 300 → LOD 400: We receive your structural model and develop it from coordination level to fabrication level — bar diameters, spacing, lap lengths, hook details, and cover all fully specified",
            "LOD 500 As-Built: After execution, we update the Revit model to reflect actual built conditions — including every design change, site modification, and approved deviation",
            "Rebar Detailing: Precise reinforcement detailing for slabs, beams, columns, and foundations following local building codes",
            "Bar Bending Schedules (BBS): Complete bar bending schedules generated directly from the Revit model, matching each sheet",
            "Cross-Sections: Clear, readable, and highly annotated cross-sections for easy site reading",
            "Quantity Summaries: Steel weights and concrete volumes extracted directly from Revit per sheet and per zone",
            "Rigorous QC: In-depth verification rounds before final drawings are issued"
        ],
        useCases: [
            "Creating shop drawings for columns, stirrups, and starter dowels in a high-rise tower from an IFC model.",
            "Preparing raft foundation reinforcement layouts with correct lap splices and hook lengths in Revit.",
            "Generating slab rebar detailing with automated BBS for large residential layouts.",
            "Updating the Revit model to LOD 500 as-built after site execution with all field changes."
        ],
        deliverables: [
            "Reinforcement detail drawings (DWG & PDF — exported from Revit)",
            "Concrete dimension drawings",
            "Sections and detail elevation views",
            "Bar Bending Schedules (BBS)",
            "Steel and concrete quantity summaries",
            "LOD 500 as-built Revit model (when requested)"
        ],
        related: [
            { id: "09", name: "Structural & Architectural BIM Modeling" },
            { id: "08", name: "BIM Automation Consulting" },
            { id: "01", name: "Ready-to-Use Revit Add-ins" }
        ]
    }
};
