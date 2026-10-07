export const PROJECTS = [
  {
    "id": 1,
    "slug": "medilink-healthcare-intelligence-platform",
    "title": "MediLink Healthcare Intelligence Platform",
    "domain": "AI / Health",
    "status": "built",
    "level": "Flagship",
    "stack": [
      "Python",
      "FastAPI",
      "React",
      "ML",
      "Explainability"
    ],
    "summary": "Clinical decision-support research platform with predictive risk modelling, patient analytics, uncertainty-aware inference and auditable data pipelines.",
    "evidence": "Existing implementation",
    "year": "2026+",
    "objective": "Build an auditable decision-support platform that turns longitudinal clinical signals into useful risk estimates without hiding uncertainty or model limitations.",
    "architecture": [
      "Data ingestion & validation",
      "Feature / representation layer",
      "Model ensemble",
      "Calibration & uncertainty",
      "Explainability",
      "Clinician-facing interface"
    ],
    "capabilities": [
      "End-to-end platform workflow",
      "Decision-support analytics and explainable outputs",
      "Risk decomposition and stress testing",
      "Python integration",
      "FastAPI integration",
      "React integration"
    ],
    "validation": [
      "Temporal hold-out evaluation",
      "Calibration and subgroup error analysis",
      "Explainability sanity checks",
      "Failure-mode testing on missing/noisy data"
    ],
    "risks": [
      "Dataset shift",
      "Calibration drift",
      "Over-reliance on model output",
      "Sensitive-data governance"
    ],
    "currentWork": "Implemented system is being hardened with stronger tests, documentation, benchmarking and portfolio-grade presentation.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: AI / Health",
      "Maturity target: Flagship",
      "Core stack: Python, FastAPI, React, ML, Explainability",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "Python core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 2,
    "slug": "aqualink-earth-observation-intelligence",
    "title": "AquaLink Earth Observation Intelligence",
    "domain": "Earth Observation / AI",
    "status": "built",
    "level": "Flagship",
    "stack": [
      "Python",
      "CNNs",
      "Remote Sensing",
      "GIS"
    ],
    "summary": "Satellite intelligence system for water scarcity, contamination risk and environmental change detection using multispectral imagery and geospatial analytics.",
    "evidence": "Existing implementation",
    "year": "2026+",
    "objective": "Convert multi-source Earth-observation data into operational environmental intelligence with traceable preprocessing, geospatial context and uncertainty-aware outputs.",
    "architecture": [
      "EO data ingestion",
      "Geospatial alignment",
      "Spectral / spatial features",
      "Detection / segmentation models",
      "Risk fusion",
      "Map intelligence layer"
    ],
    "capabilities": [
      "Decision-support analytics and explainable outputs",
      "Risk decomposition and stress testing",
      "Python integration",
      "CNNs integration",
      "Remote Sensing integration"
    ],
    "validation": [
      "Cross-region holdout",
      "Seasonal robustness checks",
      "Spatial IoU / F1 metrics",
      "Sensor-gap and cloud-cover stress tests"
    ],
    "risks": [
      "Sensor heterogeneity",
      "Cloud contamination",
      "Geographic domain shift",
      "Sparse ground truth"
    ],
    "currentWork": "Implemented system is being hardened with stronger tests, documentation, benchmarking and portfolio-grade presentation.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: Earth Observation / AI",
      "Maturity target: Flagship",
      "Core stack: Python, CNNs, Remote Sensing, GIS",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "Python core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 3,
    "slug": "inflow-ai-flood-intelligence",
    "title": "INFLOW-AI Flood Intelligence",
    "domain": "Climate AI",
    "status": "built",
    "level": "Advanced",
    "stack": [
      "Python",
      "TAMSAT",
      "GIS",
      "Forecasting"
    ],
    "summary": "Flood detection and early-warning system combining rainfall, terrain and satellite signals with predictive risk scoring.",
    "evidence": "Development programme",
    "year": "2026+",
    "objective": "Fuse environmental observations and forecasting models into an early-warning workflow that is useful under sparse, delayed and noisy field data.",
    "architecture": [
      "Rainfall / satellite ingest",
      "Terrain & catchment features",
      "Forecast models",
      "Hydrological risk fusion",
      "Alert thresholds",
      "Operational dashboard"
    ],
    "capabilities": [
      "Decision-support analytics and explainable outputs",
      "Risk decomposition and stress testing",
      "Python integration",
      "TAMSAT integration",
      "GIS integration"
    ],
    "validation": [
      "Event-based backtesting",
      "Lead-time scoring",
      "False-alarm analysis",
      "Spatial cross-validation"
    ],
    "risks": [
      "Extreme-event rarity",
      "Observation gaps",
      "Threshold sensitivity",
      "Distribution shift"
    ],
    "currentWork": "Architecture and core implementation are being developed iteratively, with runnable subsystems promoted as they pass validation gates.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: Climate AI",
      "Maturity target: Advanced",
      "Core stack: Python, TAMSAT, GIS, Forecasting",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "Python core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 4,
    "slug": "vectormind-multi-agent-reasoning-engine",
    "title": "VectorMind Multi-Agent Reasoning Engine",
    "domain": "Agentic AI",
    "status": "in-progress",
    "level": "Research-grade",
    "stack": [
      "Python",
      "LLM orchestration",
      "Graphs",
      "Tools"
    ],
    "summary": "Hierarchical multi-agent engine with tool use, shared memory, planning, critic loops and traceable inter-agent reasoning.",
    "evidence": "Development programme",
    "year": "2026+",
    "objective": "Engineer a multi-agent reasoning system whose plans, tool calls, memory and hand-offs are observable, testable and recoverable rather than opaque.",
    "architecture": [
      "Task router",
      "Planner agents",
      "Tool adapters",
      "Shared / episodic memory",
      "Critic & verifier",
      "Trace / replay store"
    ],
    "capabilities": [
      "Python integration",
      "LLM orchestration integration",
      "Graphs integration"
    ],
    "validation": [
      "Task-suite success rate",
      "Tool-failure recovery",
      "Ablation of memory / critic",
      "Latency and token-cost profiling"
    ],
    "risks": [
      "Agent loops",
      "Tool misuse",
      "Context contamination",
      "Non-deterministic failure"
    ],
    "currentWork": "Architecture and core implementation are being developed iteratively, with runnable subsystems promoted as they pass validation gates.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: Agentic AI",
      "Maturity target: Research-grade",
      "Core stack: Python, LLM orchestration, Graphs, Tools",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "Python core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 5,
    "slug": "worldforge-latent-world-model",
    "title": "WorldForge Latent World Model",
    "domain": "AI / Control",
    "status": "in-progress",
    "level": "Research-grade",
    "stack": [
      "PyTorch",
      "Latent Dynamics",
      "MPC"
    ],
    "summary": "Learned world model for forecasting environment state and planning actions under uncertainty.",
    "evidence": "Development programme",
    "year": "2026+",
    "objective": "Learn compact predictive world representations that can support planning and control while exposing uncertainty when the learned dynamics leave the training regime.",
    "architecture": [
      "Observation encoder",
      "Latent dynamics model",
      "Uncertainty head",
      "Rollout engine",
      "Planner / MPC",
      "Policy interface"
    ],
    "capabilities": [
      "PyTorch integration",
      "Latent Dynamics integration",
      "MPC integration"
    ],
    "validation": [
      "Multi-step rollout error",
      "Out-of-distribution stress tests",
      "Planning regret",
      "Uncertainty calibration"
    ],
    "risks": [
      "Compounding rollout error",
      "Latent collapse",
      "Model exploitation",
      "Simulator mismatch"
    ],
    "currentWork": "Architecture and core implementation are being developed iteratively, with runnable subsystems promoted as they pass validation gates.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: AI / Control",
      "Maturity target: Research-grade",
      "Core stack: PyTorch, Latent Dynamics, MPC",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "PyTorch core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 6,
    "slug": "sciformer-scientific-foundation-model",
    "title": "SciFormer Scientific Foundation Model",
    "domain": "Scientific AI",
    "status": "in-progress",
    "level": "Research-grade",
    "stack": [
      "Transformers",
      "Neural Operators",
      "PDEs"
    ],
    "summary": "Scientific transformer framework for learning field evolution, boundary conditions and cross-domain physical trajectories.",
    "evidence": "Development programme",
    "year": "2026+",
    "objective": "Develop reusable scientific-learning components that model physical fields while respecting boundary conditions, symmetries and long-horizon stability.",
    "architecture": [
      "Scientific data loader",
      "Field/token encoder",
      "Operator backbone",
      "Physics constraints",
      "Long-horizon rollout",
      "Benchmark harness"
    ],
    "capabilities": [
      "Transformers integration",
      "Neural Operators integration",
      "PDEs integration"
    ],
    "validation": [
      "PDE benchmark suite",
      "Conservation-law diagnostics",
      "Long-horizon stability",
      "Resolution generalisation"
    ],
    "risks": [
      "Non-physical extrapolation",
      "Numerical instability",
      "High compute cost",
      "Benchmark leakage"
    ],
    "currentWork": "Architecture and core implementation are being developed iteratively, with runnable subsystems promoted as they pass validation gates.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: Scientific AI",
      "Maturity target: Research-grade",
      "Core stack: Transformers, Neural Operators, PDEs",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "Transformers core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 7,
    "slug": "aegisai-autonomous-cyber-defence-platform",
    "title": "AegisAI Autonomous Cyber Defence Platform",
    "domain": "Cybersecurity / AI",
    "status": "built",
    "level": "Flagship",
    "stack": [
      "Python",
      "FastAPI",
      "Detection",
      "SOAR"
    ],
    "summary": "Security intelligence platform with anomaly scoring, correlated alerts, playbooks and autonomous response concepts.",
    "evidence": "Existing implementation",
    "year": "2026+",
    "objective": "Build a defensive cyber-intelligence platform that correlates telemetry, scores anomalies and supports controlled response while preserving auditability.",
    "architecture": [
      "Telemetry collectors",
      "Detection pipeline",
      "Correlation graph",
      "Risk scoring",
      "Response playbooks",
      "Audit / observability"
    ],
    "capabilities": [
      "End-to-end platform workflow",
      "Decision-support analytics and explainable outputs",
      "Python integration",
      "FastAPI integration",
      "Detection integration"
    ],
    "validation": [
      "Detection precision / recall",
      "Alert-deduplication tests",
      "Playbook dry-runs",
      "Adversarial / noisy telemetry tests"
    ],
    "risks": [
      "Alert fatigue",
      "Concept drift",
      "False positives",
      "Automation overreach"
    ],
    "currentWork": "Implemented system is being hardened with stronger tests, documentation, benchmarking and portfolio-grade presentation.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: Cybersecurity / AI",
      "Maturity target: Flagship",
      "Core stack: Python, FastAPI, Detection, SOAR",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "Python core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 8,
    "slug": "quasar-post-quantum-security-platform",
    "title": "QUASAR Post-Quantum Security Platform",
    "domain": "Cybersecurity / PQC",
    "status": "built",
    "level": "Flagship",
    "stack": [
      "ML-KEM",
      "ML-DSA",
      "Kafka",
      "ML",
      "SOAR"
    ],
    "summary": "Post-quantum security architecture combining PQC, threat analytics, response automation and tamper-evident observability.",
    "evidence": "Existing implementation",
    "year": "2026+",
    "objective": "Engineer a security architecture that combines post-quantum primitives with detection, observability and response rather than treating cryptography as an isolated component.",
    "architecture": [
      "PQC key / signature layer",
      "Secure transport",
      "Threat analytics",
      "Response orchestration",
      "Tamper-evident logs",
      "Metrics & dashboards"
    ],
    "capabilities": [
      "End-to-end platform workflow",
      "Noise-aware quantum experiment modelling",
      "ML-KEM integration",
      "ML-DSA integration",
      "Kafka integration"
    ],
    "validation": [
      "Crypto benchmark profiles",
      "Failure / rollback tests",
      "Threat-detection evaluation",
      "Latency and throughput measurement"
    ],
    "risks": [
      "Implementation complexity",
      "Interoperability",
      "Key-management errors",
      "Operational overhead"
    ],
    "currentWork": "Implemented system is being hardened with stronger tests, documentation, benchmarking and portfolio-grade presentation.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: Cybersecurity / PQC",
      "Maturity target: Flagship",
      "Core stack: ML-KEM, ML-DSA, Kafka, ML, SOAR",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "ML-KEM core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 9,
    "slug": "deeptrace-digital-forensics-engine",
    "title": "DeepTrace Digital Forensics Engine",
    "domain": "Cybersecurity",
    "status": "in-progress",
    "level": "Advanced",
    "stack": [
      "Python",
      "DFIR",
      "YARA",
      "Timeline Analysis"
    ],
    "summary": "Digital forensics workbench for artefact parsing, memory indicators, malware triage and cross-source timeline reconstruction.",
    "evidence": "Development programme",
    "year": "2026+",
    "objective": "Create a defensive analysis environment that reconstructs incidents from heterogeneous artefacts while making analyst assumptions and evidence chains explicit.",
    "architecture": [
      "Artefact acquisition",
      "Parser / normaliser",
      "IOC extraction",
      "Timeline engine",
      "Correlation graph",
      "Analyst workbench"
    ],
    "capabilities": [
      "Python integration",
      "DFIR integration",
      "YARA integration"
    ],
    "validation": [
      "Known-image replay",
      "Timeline consistency",
      "Parser fuzz cases",
      "False-positive review"
    ],
    "risks": [
      "Incomplete artefacts",
      "Clock skew",
      "Parser ambiguity",
      "Evidence contamination"
    ],
    "currentWork": "Architecture and core implementation are being developed iteratively, with runnable subsystems promoted as they pass validation gates.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: Cybersecurity",
      "Maturity target: Advanced",
      "Core stack: Python, DFIR, YARA, Timeline Analysis",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "Python core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 10,
    "slug": "post-quantum-network-laboratory",
    "title": "Post-Quantum Network Laboratory",
    "domain": "Cybersecurity / Quantum",
    "status": "in-progress",
    "level": "Advanced",
    "stack": [
      "PQC",
      "TLS",
      "Benchmarking"
    ],
    "summary": "Benchmark hybrid classical/post-quantum handshakes across latency, bandwidth, CPU and constrained-network scenarios.",
    "evidence": "Development programme",
    "year": "2026+",
    "objective": "Measure the operational cost and compatibility of post-quantum network handshakes under realistic latency, bandwidth and endpoint constraints.",
    "architecture": [
      "Protocol harness",
      "Classical baseline",
      "Hybrid PQ handshake",
      "Network emulator",
      "Metrics collector",
      "Benchmark reports"
    ],
    "capabilities": [
      "Reproducible experiment laboratory",
      "Noise-aware quantum experiment modelling",
      "Protocol / topology experimentation and metrics",
      "PQC integration",
      "TLS integration",
      "Benchmarking integration"
    ],
    "validation": [
      "Repeated latency trials",
      "Bandwidth sweeps",
      "CPU / memory profiling",
      "Interoperability matrix"
    ],
    "risks": [
      "Library-version variance",
      "Synthetic network bias",
      "Benchmark noise",
      "Protocol churn"
    ],
    "currentWork": "Architecture and core implementation are being developed iteratively, with runnable subsystems promoted as they pass validation gates.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: Cybersecurity / Quantum",
      "Maturity target: Advanced",
      "Core stack: PQC, TLS, Benchmarking",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "PQC core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 11,
    "slug": "adversarial-ml-security-laboratory",
    "title": "Adversarial ML Security Laboratory",
    "domain": "AI Security",
    "status": "in-progress",
    "level": "Research-grade",
    "stack": [
      "PyTorch",
      "Robustness",
      "Adversarial ML"
    ],
    "summary": "Controlled evaluation of evasion, poisoning, model extraction and robustness techniques with reproducible attack/defence baselines.",
    "evidence": "Development programme",
    "year": "2026+",
    "objective": "Evaluate model robustness in a controlled defensive laboratory with reproducible threat models, baselines and mitigation experiments.",
    "architecture": [
      "Dataset / model registry",
      "Threat-model definitions",
      "Attack harness",
      "Defence modules",
      "Metrics / calibration",
      "Experiment ledger"
    ],
    "capabilities": [
      "Reproducible experiment laboratory",
      "PyTorch integration",
      "Robustness integration",
      "Adversarial ML integration"
    ],
    "validation": [
      "Clean-vs-attacked accuracy",
      "Robustness curves",
      "Ablation studies",
      "Reproducibility checks"
    ],
    "risks": [
      "Unrealistic threat models",
      "Metric gaming",
      "Dataset bias",
      "Overfitting to one attack family"
    ],
    "currentWork": "Architecture and core implementation are being developed iteratively, with runnable subsystems promoted as they pass validation gates.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: AI Security",
      "Maturity target: Research-grade",
      "Core stack: PyTorch, Robustness, Adversarial ML",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "PyTorch core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 12,
    "slug": "eeg-smart-wheelchair-2-0",
    "title": "EEG Smart Wheelchair 2.0",
    "domain": "Robotics / BCI",
    "status": "in-progress",
    "level": "Flagship",
    "stack": [
      "EEG",
      "CNN/LSTM",
      "ROS2",
      "MPC",
      "SLAM"
    ],
    "summary": "Shared-autonomy wheelchair combining EEG intent decoding, obstacle avoidance, SLAM, control arbitration and safety constraints.",
    "evidence": "Development programme",
    "year": "2026+",
    "objective": "Combine intent decoding with shared autonomy so uncertain EEG commands are mediated by navigation, obstacle avoidance and safety constraints.",
    "architecture": [
      "EEG preprocessing",
      "Intent classifier",
      "Confidence estimator",
      "Shared-autonomy arbiter",
      "SLAM / planning",
      "Low-level control"
    ],
    "capabilities": [
      "EEG integration",
      "CNN/LSTM integration",
      "ROS2 integration"
    ],
    "validation": [
      "Offline decoding accuracy",
      "Command-latency measurement",
      "Navigation success rate",
      "Safety intervention tests"
    ],
    "risks": [
      "EEG non-stationarity",
      "False commands",
      "Control handoff ambiguity",
      "Sim-to-real gap"
    ],
    "currentWork": "Architecture and core implementation are being developed iteratively, with runnable subsystems promoted as they pass validation gates.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: Robotics / BCI",
      "Maturity target: Flagship",
      "Core stack: EEG, CNN/LSTM, ROS2, MPC, SLAM",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "EEG core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 13,
    "slug": "autonomous-drone-swarm-platform",
    "title": "Autonomous Drone Swarm Platform",
    "domain": "Robotics / Aerospace",
    "status": "in-progress",
    "level": "Flagship",
    "stack": [
      "ROS2",
      "PX4",
      "Gazebo",
      "GNNs",
      "RL"
    ],
    "summary": "Distributed multi-UAV simulation for formation flight, collision avoidance, mission allocation and degraded communications.",
    "evidence": "Development programme",
    "year": "2026+",
    "objective": "Build a distributed multi-vehicle autonomy stack that keeps coordination robust when communication, sensing or individual agents degrade.",
    "architecture": [
      "Vehicle dynamics",
      "Local perception",
      "Distributed state sharing",
      "Task / formation planner",
      "Collision avoidance",
      "Mission supervisor"
    ],
    "capabilities": [
      "End-to-end platform workflow",
      "Distributed coordination and degraded-communications handling",
      "Flight-dynamics and control experiments",
      "ROS2 integration",
      "PX4 integration",
      "Gazebo integration"
    ],
    "validation": [
      "Formation error",
      "Packet-loss sweeps",
      "Agent-dropout tests",
      "Mission completion under faults"
    ],
    "risks": [
      "Communication instability",
      "Collision cascades",
      "Centralisation bottlenecks",
      "Sim-to-real mismatch"
    ],
    "currentWork": "Architecture and core implementation are being developed iteratively, with runnable subsystems promoted as they pass validation gates.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: Robotics / Aerospace",
      "Maturity target: Flagship",
      "Core stack: ROS2, PX4, Gazebo, GNNs, RL",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "ROS2 core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 14,
    "slug": "lunar-mars-autonomous-rover",
    "title": "Lunar / Mars Autonomous Rover",
    "domain": "Robotics / Space",
    "status": "in-progress",
    "level": "Flagship",
    "stack": [
      "ROS2",
      "SLAM",
      "CV",
      "Planning"
    ],
    "summary": "Planetary rover simulation with terrain segmentation, hazard detection, energy-aware planning and autonomous mission execution.",
    "evidence": "Development programme",
    "year": "2026+",
    "objective": "Create a planetary autonomy stack for terrain understanding, localisation, hazard avoidance and energy-aware mission planning.",
    "architecture": [
      "Terrain perception",
      "Visual-inertial localisation",
      "Hazard map",
      "Energy model",
      "Path planner",
      "Mission executive"
    ],
    "capabilities": [
      "ROS2 integration",
      "SLAM integration",
      "CV integration"
    ],
    "validation": [
      "Terrain-class metrics",
      "Localisation drift",
      "Energy budget adherence",
      "Hazard-avoidance trials"
    ],
    "risks": [
      "Low-texture terrain",
      "Lighting extremes",
      "Wheel slip",
      "Limited compute / energy"
    ],
    "currentWork": "Architecture and core implementation are being developed iteratively, with runnable subsystems promoted as they pass validation gates.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: Robotics / Space",
      "Maturity target: Flagship",
      "Core stack: ROS2, SLAM, CV, Planning",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "ROS2 core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 15,
    "slug": "humanoid-whole-body-control-laboratory",
    "title": "Humanoid Whole-Body Control Laboratory",
    "domain": "Robotics",
    "status": "in-progress",
    "level": "Research-grade",
    "stack": [
      "Rigid-body Dynamics",
      "IK",
      "MPC"
    ],
    "summary": "Simulation environment for humanoid balance, gait generation, inverse dynamics and whole-body control.",
    "evidence": "Development programme",
    "year": "2026+",
    "objective": "Develop a physics-grounded robotics laboratory for control, planning and adaptation with reproducible simulation experiments.",
    "architecture": [
      "Dynamics model",
      "State estimation",
      "Control / optimisation",
      "Planning",
      "Safety constraints",
      "Experiment harness"
    ],
    "capabilities": [
      "Reproducible experiment laboratory",
      "Dynamic perturbation and regulatory-network experiments",
      "Rigid-body Dynamics integration",
      "IK integration",
      "MPC integration"
    ],
    "validation": [
      "Tracking error",
      "Stability margins",
      "Perturbation tests",
      "Controller ablations"
    ],
    "risks": [
      "Model mismatch",
      "Contact instability",
      "Controller brittleness",
      "Compute latency"
    ],
    "currentWork": "Architecture and core implementation are being developed iteratively, with runnable subsystems promoted as they pass validation gates.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: Robotics",
      "Maturity target: Research-grade",
      "Core stack: Rigid-body Dynamics, IK, MPC",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "Rigid-body Dynamics core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 16,
    "slug": "soft-robotics-simulation-platform",
    "title": "Soft Robotics Simulation Platform",
    "domain": "Robotics",
    "status": "in-progress",
    "level": "Research-grade",
    "stack": [
      "FEM",
      "Differentiable Simulation",
      "Control"
    ],
    "summary": "Continuum and soft-actuator simulation platform for learned control under deformation and model uncertainty.",
    "evidence": "Development programme",
    "year": "2026+",
    "objective": "Develop a physics-grounded robotics laboratory for control, planning and adaptation with reproducible simulation experiments.",
    "architecture": [
      "Dynamics model",
      "State estimation",
      "Control / optimisation",
      "Planning",
      "Safety constraints",
      "Experiment harness"
    ],
    "capabilities": [
      "End-to-end platform workflow",
      "FEM integration",
      "Differentiable Simulation integration",
      "Control integration"
    ],
    "validation": [
      "Tracking error",
      "Stability margins",
      "Perturbation tests",
      "Controller ablations"
    ],
    "risks": [
      "Model mismatch",
      "Contact instability",
      "Controller brittleness",
      "Compute latency"
    ],
    "currentWork": "Architecture and core implementation are being developed iteratively, with runnable subsystems promoted as they pass validation gates.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: Robotics",
      "Maturity target: Research-grade",
      "Core stack: FEM, Differentiable Simulation, Control",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "FEM core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 17,
    "slug": "swarmmind-gnn-coordination-engine",
    "title": "SwarmMind GNN Coordination Engine",
    "domain": "Robotics / Graph AI",
    "status": "in-progress",
    "level": "Research-grade",
    "stack": [
      "Graph Neural Networks",
      "Distributed Control"
    ],
    "summary": "Graph-based decentralized coordination engine for resilient emergent swarm behaviour.",
    "evidence": "Development programme",
    "year": "2026+",
    "objective": "Build an auditable decision-support platform that turns longitudinal clinical signals into useful risk estimates without hiding uncertainty or model limitations.",
    "architecture": [
      "Data ingestion & validation",
      "Feature / representation layer",
      "Model ensemble",
      "Calibration & uncertainty",
      "Explainability",
      "Clinician-facing interface"
    ],
    "capabilities": [
      "Distributed coordination and degraded-communications handling",
      "Graph Neural Networks integration",
      "Distributed Control integration"
    ],
    "validation": [
      "Temporal hold-out evaluation",
      "Calibration and subgroup error analysis",
      "Explainability sanity checks",
      "Failure-mode testing on missing/noisy data"
    ],
    "risks": [
      "Dataset shift",
      "Calibration drift",
      "Over-reliance on model output",
      "Sensitive-data governance"
    ],
    "currentWork": "Architecture and core implementation are being developed iteratively, with runnable subsystems promoted as they pass validation gates.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: Robotics / Graph AI",
      "Maturity target: Research-grade",
      "Core stack: Graph Neural Networks, Distributed Control",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "Graph Neural Networks core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 18,
    "slug": "visionnav-visual-inertial-slam",
    "title": "VisionNav Visual-Inertial SLAM",
    "domain": "Computer Vision",
    "status": "in-progress",
    "level": "Flagship",
    "stack": [
      "OpenCV",
      "VIO",
      "BA",
      "Loop Closure"
    ],
    "summary": "Visual-inertial navigation system with feature tracking, pose estimation, bundle adjustment and loop closure.",
    "evidence": "Development programme",
    "year": "2026+",
    "objective": "Build perception and localisation pipelines that remain useful under motion, lighting changes and sensor uncertainty.",
    "architecture": [
      "Sensor ingest",
      "Feature / representation extraction",
      "State estimation",
      "Mapping / reconstruction",
      "Loop / consistency checks",
      "Diagnostics"
    ],
    "capabilities": [
      "Perception, estimation and visual diagnostics",
      "OpenCV integration",
      "VIO integration",
      "BA integration"
    ],
    "validation": [
      "Pose error",
      "Tracking robustness",
      "Sequence benchmarks",
      "Sensor-dropout tests"
    ],
    "risks": [
      "Motion blur",
      "Scale drift",
      "Dynamic scenes",
      "Calibration errors"
    ],
    "currentWork": "Architecture and core implementation are being developed iteratively, with runnable subsystems promoted as they pass validation gates.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: Computer Vision",
      "Maturity target: Flagship",
      "Core stack: OpenCV, VIO, BA, Loop Closure",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "OpenCV core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 19,
    "slug": "orbitalvision-satellite-intelligence",
    "title": "OrbitalVision Satellite Intelligence",
    "domain": "Computer Vision / Space",
    "status": "in-progress",
    "level": "Advanced",
    "stack": [
      "YOLO",
      "ViT",
      "Segmentation",
      "GIS"
    ],
    "summary": "Satellite perception platform for object detection, segmentation and change detection over Earth-observation imagery.",
    "evidence": "Development programme",
    "year": "2026+",
    "objective": "Build perception and localisation pipelines that remain useful under motion, lighting changes and sensor uncertainty.",
    "architecture": [
      "Sensor ingest",
      "Feature / representation extraction",
      "State estimation",
      "Mapping / reconstruction",
      "Loop / consistency checks",
      "Diagnostics"
    ],
    "capabilities": [
      "End-to-end platform workflow",
      "Decision-support analytics and explainable outputs",
      "Perception, estimation and visual diagnostics",
      "YOLO integration",
      "ViT integration",
      "Segmentation integration"
    ],
    "validation": [
      "Pose error",
      "Tracking robustness",
      "Sequence benchmarks",
      "Sensor-dropout tests"
    ],
    "risks": [
      "Motion blur",
      "Scale drift",
      "Dynamic scenes",
      "Calibration errors"
    ],
    "currentWork": "Architecture and core implementation are being developed iteratively, with runnable subsystems promoted as they pass validation gates.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: Computer Vision / Space",
      "Maturity target: Advanced",
      "Core stack: YOLO, ViT, Segmentation, GIS",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "YOLO core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 20,
    "slug": "neuralscene-3d-reconstruction-platform",
    "title": "NeuralScene 3D Reconstruction Platform",
    "domain": "3D Vision",
    "status": "in-progress",
    "level": "Research-grade",
    "stack": [
      "NeRF",
      "Gaussian Splatting",
      "SfM"
    ],
    "summary": "3D reconstruction lab comparing neural radiance fields, Gaussian splatting and geometric structure-from-motion.",
    "evidence": "Development programme",
    "year": "2026+",
    "objective": "Engineer a reproducible system with explicit interfaces, measurable behaviour and documented failure modes.",
    "architecture": [
      "Inputs",
      "Core engine",
      "State / storage",
      "Analysis",
      "Interface",
      "Observability"
    ],
    "capabilities": [
      "End-to-end platform workflow",
      "NeRF integration",
      "Gaussian Splatting integration",
      "SfM integration"
    ],
    "validation": [
      "Unit tests",
      "Integration tests",
      "Performance profiling",
      "Failure-mode checks"
    ],
    "risks": [
      "Scope growth",
      "Integration complexity",
      "Data quality",
      "Performance constraints"
    ],
    "currentWork": "Architecture and core implementation are being developed iteratively, with runnable subsystems promoted as they pass validation gates.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: 3D Vision",
      "Maturity target: Research-grade",
      "Core stack: NeRF, Gaussian Splatting, SfM",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "NeRF core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 21,
    "slug": "eventvision-high-speed-navigation",
    "title": "EventVision High-Speed Navigation",
    "domain": "Event Cameras",
    "status": "in-progress",
    "level": "Research-grade",
    "stack": [
      "Event Vision",
      "VIO",
      "UAV"
    ],
    "summary": "Asynchronous perception pipeline for high-speed, low-light visual odometry and aerial navigation.",
    "evidence": "Development programme",
    "year": "2026+",
    "objective": "Use asynchronous event streams for high-speed, low-light perception where conventional frame cameras become motion-blurred or latency-limited.",
    "architecture": [
      "Event stream ingest",
      "Temporal voxelisation",
      "Motion / flow estimator",
      "VIO fusion",
      "Navigation interface",
      "Latency profiler"
    ],
    "capabilities": [
      "Perception, estimation and visual diagnostics",
      "Event Vision integration",
      "VIO integration",
      "UAV integration"
    ],
    "validation": [
      "Trajectory error",
      "Low-light sequences",
      "High-speed motion tests",
      "Latency / throughput"
    ],
    "risks": [
      "Event noise",
      "Sparse texture",
      "Timestamp synchronisation",
      "Dataset availability"
    ],
    "currentWork": "Architecture and core implementation are being developed iteratively, with runnable subsystems promoted as they pass validation gates.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: Event Cameras",
      "Maturity target: Research-grade",
      "Core stack: Event Vision, VIO, UAV",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "Event Vision core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 22,
    "slug": "fusionsense-multimodal-perception-engine",
    "title": "FusionSense Multimodal Perception Engine",
    "domain": "Autonomous Systems",
    "status": "in-progress",
    "level": "Research-grade",
    "stack": [
      "Camera",
      "LiDAR",
      "Radar",
      "IMU",
      "Transformers"
    ],
    "summary": "Bird’s-eye-view sensor-fusion system with uncertainty modelling and graceful sensor dropout.",
    "evidence": "Development programme",
    "year": "2026+",
    "objective": "Engineer a reproducible system with explicit interfaces, measurable behaviour and documented failure modes.",
    "architecture": [
      "Inputs",
      "Core engine",
      "State / storage",
      "Analysis",
      "Interface",
      "Observability"
    ],
    "capabilities": [
      "Camera integration",
      "LiDAR integration",
      "Radar integration"
    ],
    "validation": [
      "Unit tests",
      "Integration tests",
      "Performance profiling",
      "Failure-mode checks"
    ],
    "risks": [
      "Scope growth",
      "Integration complexity",
      "Data quality",
      "Performance constraints"
    ],
    "currentWork": "Architecture and core implementation are being developed iteratively, with runnable subsystems promoted as they pass validation gates.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: Autonomous Systems",
      "Maturity target: Research-grade",
      "Core stack: Camera, LiDAR, Radar, IMU, Transformers",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "Camera core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 23,
    "slug": "aeroguard-fault-tolerant-flight-ai",
    "title": "AeroGuard Fault-Tolerant Flight AI",
    "domain": "Aerospace AI",
    "status": "in-progress",
    "level": "Flagship",
    "stack": [
      "MPC",
      "System ID",
      "Safety",
      "RL"
    ],
    "summary": "Adaptive flight-control system that identifies faults online and reconfigures control while respecting safety envelopes.",
    "evidence": "Development programme",
    "year": "2026+",
    "objective": "Build an auditable decision-support platform that turns longitudinal clinical signals into useful risk estimates without hiding uncertainty or model limitations.",
    "architecture": [
      "Data ingestion & validation",
      "Feature / representation layer",
      "Model ensemble",
      "Calibration & uncertainty",
      "Explainability",
      "Clinician-facing interface"
    ],
    "capabilities": [
      "Flight-dynamics and control experiments",
      "MPC integration",
      "System ID integration",
      "Safety integration"
    ],
    "validation": [
      "Temporal hold-out evaluation",
      "Calibration and subgroup error analysis",
      "Explainability sanity checks",
      "Failure-mode testing on missing/noisy data"
    ],
    "risks": [
      "Dataset shift",
      "Calibration drift",
      "Over-reliance on model output",
      "Sensitive-data governance"
    ],
    "currentWork": "Architecture and core implementation are being developed iteratively, with runnable subsystems promoted as they pass validation gates.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: Aerospace AI",
      "Maturity target: Flagship",
      "Core stack: MPC, System ID, Safety, RL",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "MPC core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 24,
    "slug": "aerostruct-multi-objective-wing-optimizer",
    "title": "AeroStruct Multi-Objective Wing Optimizer",
    "domain": "Aerospace Design",
    "status": "in-progress",
    "level": "Flagship",
    "stack": [
      "FEM",
      "CFD Surrogates",
      "NSGA-II"
    ],
    "summary": "Multidisciplinary wing optimiser balancing drag, weight, stress, structural constraints and mission performance.",
    "evidence": "Development programme",
    "year": "2026+",
    "objective": "Develop fault-aware flight intelligence that identifies degraded dynamics and reconfigures control without hiding safety constraints.",
    "architecture": [
      "Flight model",
      "Sensor / actuator fault monitor",
      "State estimator",
      "Reconfigurable controller",
      "Safety supervisor",
      "Telemetry recorder"
    ],
    "capabilities": [
      "Multi-objective optimisation and trade-space exploration",
      "FEM integration",
      "CFD Surrogates integration",
      "NSGA-II integration"
    ],
    "validation": [
      "Fault injection matrix",
      "Tracking error under faults",
      "Recovery time",
      "Constraint-violation analysis"
    ],
    "risks": [
      "Compound failures",
      "Model mismatch",
      "Unsafe exploration",
      "Controller saturation"
    ],
    "currentWork": "Architecture and core implementation are being developed iteratively, with runnable subsystems promoted as they pass validation gates.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: Aerospace Design",
      "Maturity target: Flagship",
      "Core stack: FEM, CFD Surrogates, NSGA-II",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "FEM core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 25,
    "slug": "cfd-airfoil-wing-research-workbench",
    "title": "CFD Airfoil & Wing Research Workbench",
    "domain": "Aerospace / CFD",
    "status": "in-progress",
    "level": "Flagship",
    "stack": [
      "Navier-Stokes",
      "Panel Methods",
      "OpenFOAM concepts"
    ],
    "summary": "Aerodynamic research environment for lift, drag, stall, pressure distributions and solver comparison.",
    "evidence": "Development programme",
    "year": "2026+",
    "objective": "Create a reproducible aerodynamic workbench for studying lift, drag, pressure and stall behaviour across geometry and flow regimes.",
    "architecture": [
      "Geometry / mesh",
      "Boundary conditions",
      "Flow solver",
      "Turbulence options",
      "Post-processing",
      "Validation notebook"
    ],
    "capabilities": [
      "Navier-Stokes integration",
      "Panel Methods integration",
      "OpenFOAM concepts integration"
    ],
    "validation": [
      "Grid convergence",
      "Reference airfoil comparison",
      "Lift/drag curves",
      "Boundary-condition sensitivity"
    ],
    "risks": [
      "Mesh dependence",
      "Turbulence-model error",
      "Numerical diffusion",
      "High compute cost"
    ],
    "currentWork": "Architecture and core implementation are being developed iteratively, with runnable subsystems promoted as they pass validation gates.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: Aerospace / CFD",
      "Maturity target: Flagship",
      "Core stack: Navier-Stokes, Panel Methods, OpenFOAM concepts",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "Navier-Stokes core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 26,
    "slug": "6-dof-flight-dynamics-simulator",
    "title": "6-DOF Flight Dynamics Simulator",
    "domain": "Aerospace",
    "status": "in-progress",
    "level": "Flagship",
    "stack": [
      "Rigid-body Dynamics",
      "Control",
      "Atmosphere"
    ],
    "summary": "Six-degree-of-freedom aircraft simulator with stability derivatives, failures, turbulence and autopilot/control-law experiments.",
    "evidence": "Development programme",
    "year": "2026+",
    "objective": "Build a distributed multi-vehicle autonomy stack that keeps coordination robust when communication, sensing or individual agents degrade.",
    "architecture": [
      "Vehicle dynamics",
      "Local perception",
      "Distributed state sharing",
      "Task / formation planner",
      "Collision avoidance",
      "Mission supervisor"
    ],
    "capabilities": [
      "Interactive simulation and parameter sweeps",
      "Flight-dynamics and control experiments",
      "Rigid-body Dynamics integration",
      "Control integration",
      "Atmosphere integration"
    ],
    "validation": [
      "Formation error",
      "Packet-loss sweeps",
      "Agent-dropout tests",
      "Mission completion under faults"
    ],
    "risks": [
      "Communication instability",
      "Collision cascades",
      "Centralisation bottlenecks",
      "Sim-to-real mismatch"
    ],
    "currentWork": "Architecture and core implementation are being developed iteratively, with runnable subsystems promoted as they pass validation gates.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: Aerospace",
      "Maturity target: Flagship",
      "Core stack: Rigid-body Dynamics, Control, Atmosphere",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "Rigid-body Dynamics core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 27,
    "slug": "aeroelastic-flutter-digital-twin",
    "title": "Aeroelastic Flutter Digital Twin",
    "domain": "Aeroelasticity",
    "status": "in-progress",
    "level": "Research-grade",
    "stack": [
      "FSI",
      "ROMs",
      "Neural Operators"
    ],
    "summary": "Coupled aerodynamic/structural digital twin for flutter, divergence and nonlinear instability prediction.",
    "evidence": "Development programme",
    "year": "2026+",
    "objective": "Engineer a reproducible system with explicit interfaces, measurable behaviour and documented failure modes.",
    "architecture": [
      "Inputs",
      "Core engine",
      "State / storage",
      "Analysis",
      "Interface",
      "Observability"
    ],
    "capabilities": [
      "FSI integration",
      "ROMs integration",
      "Neural Operators integration"
    ],
    "validation": [
      "Unit tests",
      "Integration tests",
      "Performance profiling",
      "Failure-mode checks"
    ],
    "risks": [
      "Scope growth",
      "Integration complexity",
      "Data quality",
      "Performance constraints"
    ],
    "currentWork": "Architecture and core implementation are being developed iteratively, with runnable subsystems promoted as they pass validation gates.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: Aeroelasticity",
      "Maturity target: Research-grade",
      "Core stack: FSI, ROMs, Neural Operators",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "FSI core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 28,
    "slug": "morphing-wing-optimisation-platform",
    "title": "Morphing Wing Optimisation Platform",
    "domain": "Aerospace Design",
    "status": "in-progress",
    "level": "Research-grade",
    "stack": [
      "CFD",
      "Optimisation",
      "RL"
    ],
    "summary": "Adaptive wing system optimising camber, span, twist and sweep across multiple flight phases.",
    "evidence": "Development programme",
    "year": "2026+",
    "objective": "Develop fault-aware flight intelligence that identifies degraded dynamics and reconfigures control without hiding safety constraints.",
    "architecture": [
      "Flight model",
      "Sensor / actuator fault monitor",
      "State estimator",
      "Reconfigurable controller",
      "Safety supervisor",
      "Telemetry recorder"
    ],
    "capabilities": [
      "End-to-end platform workflow",
      "Flight-dynamics and control experiments",
      "CFD integration",
      "Optimisation integration",
      "RL integration"
    ],
    "validation": [
      "Fault injection matrix",
      "Tracking error under faults",
      "Recovery time",
      "Constraint-violation analysis"
    ],
    "risks": [
      "Compound failures",
      "Model mismatch",
      "Unsafe exploration",
      "Controller saturation"
    ],
    "currentWork": "Architecture and core implementation are being developed iteratively, with runnable subsystems promoted as they pass validation gates.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: Aerospace Design",
      "Maturity target: Research-grade",
      "Core stack: CFD, Optimisation, RL",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "CFD core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 29,
    "slug": "hypersonic-vehicle-digital-twin",
    "title": "Hypersonic Vehicle Digital Twin",
    "domain": "Hypersonics",
    "status": "in-progress",
    "level": "Research-grade",
    "stack": [
      "Compressible Flow",
      "Thermal",
      "Surrogates"
    ],
    "summary": "High-Mach simulation environment coupling shock physics, aerodynamic heating, trajectory and thermal response.",
    "evidence": "Development programme",
    "year": "2026+",
    "objective": "Engineer a reproducible system with explicit interfaces, measurable behaviour and documented failure modes.",
    "architecture": [
      "Inputs",
      "Core engine",
      "State / storage",
      "Analysis",
      "Interface",
      "Observability"
    ],
    "capabilities": [
      "Compressible Flow integration",
      "Thermal integration",
      "Surrogates integration"
    ],
    "validation": [
      "Unit tests",
      "Integration tests",
      "Performance profiling",
      "Failure-mode checks"
    ],
    "risks": [
      "Scope growth",
      "Integration complexity",
      "Data quality",
      "Performance constraints"
    ],
    "currentWork": "Architecture and core implementation are being developed iteratively, with runnable subsystems promoted as they pass validation gates.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: Hypersonics",
      "Maturity target: Research-grade",
      "Core stack: Compressible Flow, Thermal, Surrogates",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "Compressible Flow core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 30,
    "slug": "hybrid-electric-aircraft-energy-simulator",
    "title": "Hybrid-Electric Aircraft Energy Simulator",
    "domain": "Sustainable Aviation",
    "status": "in-progress",
    "level": "Advanced",
    "stack": [
      "Energy Systems",
      "Optimisation",
      "Thermal"
    ],
    "summary": "Mission-level model for battery, motor and turbine sizing with thermal and range/endurance analysis.",
    "evidence": "Development programme",
    "year": "2026+",
    "objective": "Engineer a reproducible system with explicit interfaces, measurable behaviour and documented failure modes.",
    "architecture": [
      "Inputs",
      "Core engine",
      "State / storage",
      "Analysis",
      "Interface",
      "Observability"
    ],
    "capabilities": [
      "Interactive simulation and parameter sweeps",
      "Energy Systems integration",
      "Optimisation integration",
      "Thermal integration"
    ],
    "validation": [
      "Unit tests",
      "Integration tests",
      "Performance profiling",
      "Failure-mode checks"
    ],
    "risks": [
      "Scope growth",
      "Integration complexity",
      "Data quality",
      "Performance constraints"
    ],
    "currentWork": "Architecture and core implementation are being developed iteratively, with runnable subsystems promoted as they pass validation gates.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: Sustainable Aviation",
      "Maturity target: Advanced",
      "Core stack: Energy Systems, Optimisation, Thermal",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "Energy Systems core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 31,
    "slug": "orbital-mission-spacecraft-gnc-designer",
    "title": "Orbital Mission & Spacecraft GNC Designer",
    "domain": "Space Systems",
    "status": "in-progress",
    "level": "Flagship",
    "stack": [
      "Orbital Mechanics",
      "GNC",
      "Optimisation"
    ],
    "summary": "Mission design suite for orbit propagation, manoeuvres, rendezvous, docking and autonomous guidance.",
    "evidence": "Development programme",
    "year": "2026+",
    "objective": "Create a mission-design and guidance environment for orbit propagation, manoeuvre planning, rendezvous and autonomous navigation experiments.",
    "architecture": [
      "Orbital propagator",
      "Reference frames",
      "Navigation estimator",
      "Guidance / optimiser",
      "Control",
      "Mission visualiser"
    ],
    "capabilities": [
      "Orbital Mechanics integration",
      "GNC integration",
      "Optimisation integration"
    ],
    "validation": [
      "Conservation checks",
      "Known transfer cases",
      "Monte Carlo dispersions",
      "Navigation-noise sweeps"
    ],
    "risks": [
      "Integrator error",
      "Frame mistakes",
      "Poor covariance models",
      "Constraint complexity"
    ],
    "currentWork": "Architecture and core implementation are being developed iteratively, with runnable subsystems promoted as they pass validation gates.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: Space Systems",
      "Maturity target: Flagship",
      "Core stack: Orbital Mechanics, GNC, Optimisation",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "Orbital Mechanics core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 32,
    "slug": "space-debris-conjunction-analysis-system",
    "title": "Space Debris Conjunction Analysis System",
    "domain": "Space Safety",
    "status": "in-progress",
    "level": "Advanced",
    "stack": [
      "Monte Carlo",
      "Covariance",
      "Orbital Mechanics"
    ],
    "summary": "Collision-risk analysis using uncertainty propagation, conjunction geometry and probabilistic Monte Carlo methods.",
    "evidence": "Development programme",
    "year": "2026+",
    "objective": "Estimate conjunction risk using uncertainty-aware orbit propagation rather than deterministic miss distance alone.",
    "architecture": [
      "Orbit / covariance ingest",
      "Propagation",
      "Encounter geometry",
      "Monte Carlo sampler",
      "Collision probability",
      "Decision dashboard"
    ],
    "capabilities": [
      "Risk decomposition and stress testing",
      "Monte Carlo integration",
      "Covariance integration",
      "Orbital Mechanics integration"
    ],
    "validation": [
      "Analytic-vs-MC comparisons",
      "Covariance sensitivity",
      "Synthetic encounter suite",
      "Numerical stability"
    ],
    "risks": [
      "Covariance quality",
      "Non-Gaussian uncertainty",
      "Propagation errors",
      "Threshold interpretation"
    ],
    "currentWork": "Architecture and core implementation are being developed iteratively, with runnable subsystems promoted as they pass validation gates.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: Space Safety",
      "Maturity target: Advanced",
      "Core stack: Monte Carlo, Covariance, Orbital Mechanics",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "Monte Carlo core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 33,
    "slug": "electric-propulsion-simulator",
    "title": "Electric Propulsion Simulator",
    "domain": "Space Propulsion",
    "status": "in-progress",
    "level": "Advanced",
    "stack": [
      "Ion Thrusters",
      "Hall Thrusters",
      "Plasma Models"
    ],
    "summary": "Performance and mission-effects simulator for electric propulsion concepts.",
    "evidence": "Development programme",
    "year": "2026+",
    "objective": "Model electric-propulsion performance and mission trade-offs across thrust, specific impulse, power and efficiency.",
    "architecture": [
      "Thruster equations",
      "Plasma / efficiency model",
      "Power processor",
      "Mission coupling",
      "Parameter sweeps",
      "Performance plots"
    ],
    "capabilities": [
      "Interactive simulation and parameter sweeps",
      "Ion Thrusters integration",
      "Hall Thrusters integration",
      "Plasma Models integration"
    ],
    "validation": [
      "Published curve comparison",
      "Energy consistency",
      "Parameter sensitivity",
      "Limit-case checks"
    ],
    "risks": [
      "Simplified plasma physics",
      "Empirical constants",
      "Thermal limits",
      "Scaling assumptions"
    ],
    "currentWork": "Architecture and core implementation are being developed iteratively, with runnable subsystems promoted as they pass validation gates.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: Space Propulsion",
      "Maturity target: Advanced",
      "Core stack: Ion Thrusters, Hall Thrusters, Plasma Models",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "Ion Thrusters core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 34,
    "slug": "quantum-dynamics-simulator",
    "title": "Quantum Dynamics Simulator",
    "domain": "Quantum Physics",
    "status": "in-progress",
    "level": "Flagship",
    "stack": [
      "Schrödinger",
      "Split Operator",
      "Open Systems"
    ],
    "summary": "Numerical quantum dynamics workbench for tunnelling, driven systems, decoherence and wave-packet evolution.",
    "evidence": "Development programme",
    "year": "2026+",
    "objective": "Build a numerical quantum-dynamics laboratory that makes solver error, norm conservation and physical interpretation explicit.",
    "architecture": [
      "Hamiltonian builder",
      "State initialiser",
      "Time integrators",
      "Observable engine",
      "Noise / open-system layer",
      "Visual diagnostics"
    ],
    "capabilities": [
      "Interactive simulation and parameter sweeps",
      "Noise-aware quantum experiment modelling",
      "Schrödinger integration",
      "Split Operator integration",
      "Open Systems integration"
    ],
    "validation": [
      "Norm / trace checks",
      "Analytic test cases",
      "Solver convergence",
      "Cross-method comparisons"
    ],
    "risks": [
      "Stiff dynamics",
      "Large Hilbert spaces",
      "Discretisation error",
      "Long-horizon drift"
    ],
    "currentWork": "Architecture and core implementation are being developed iteratively, with runnable subsystems promoted as they pass validation gates.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: Quantum Physics",
      "Maturity target: Flagship",
      "Core stack: Schrödinger, Split Operator, Open Systems",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "Schrödinger core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 35,
    "slug": "quantum-error-correction-laboratory",
    "title": "Quantum Error-Correction Laboratory",
    "domain": "Quantum Computing",
    "status": "in-progress",
    "level": "Flagship",
    "stack": [
      "Surface Codes",
      "Decoders",
      "Noise Models"
    ],
    "summary": "QEC simulator covering repetition, Shor/Steane concepts, surface-code models and adaptive decoding.",
    "evidence": "Development programme",
    "year": "2026+",
    "objective": "Engineer reproducible quantum-computing experiments around error correction, compilation or simulation with classical baselines and noise-aware metrics.",
    "architecture": [
      "Circuit / code model",
      "Noise model",
      "Core algorithm",
      "Decoder / optimiser",
      "Benchmark harness",
      "Results explorer"
    ],
    "capabilities": [
      "Interactive simulation and parameter sweeps",
      "Reproducible experiment laboratory",
      "Noise-aware quantum experiment modelling",
      "Surface Codes integration",
      "Decoders integration",
      "Noise Models integration"
    ],
    "validation": [
      "Logical error curves",
      "Gate / depth counts",
      "Noise sweeps",
      "Classical cross-checks"
    ],
    "risks": [
      "Toy-model overreach",
      "Simulation cost",
      "Noise-model mismatch",
      "Hardware-specific assumptions"
    ],
    "currentWork": "Architecture and core implementation are being developed iteratively, with runnable subsystems promoted as they pass validation gates.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: Quantum Computing",
      "Maturity target: Flagship",
      "Core stack: Surface Codes, Decoders, Noise Models",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "Surface Codes core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 36,
    "slug": "quantum-compiler-circuit-optimizer",
    "title": "Quantum Compiler & Circuit Optimizer",
    "domain": "Quantum Computing",
    "status": "in-progress",
    "level": "Research-grade",
    "stack": [
      "Routing",
      "Mapping",
      "Gate Synthesis"
    ],
    "summary": "Hardware-aware circuit compiler optimising topology, SWAP count, depth and error exposure.",
    "evidence": "Development programme",
    "year": "2026+",
    "objective": "Engineer reproducible quantum-computing experiments around error correction, compilation or simulation with classical baselines and noise-aware metrics.",
    "architecture": [
      "Circuit / code model",
      "Noise model",
      "Core algorithm",
      "Decoder / optimiser",
      "Benchmark harness",
      "Results explorer"
    ],
    "capabilities": [
      "Multi-objective optimisation and trade-space exploration",
      "Noise-aware quantum experiment modelling",
      "Routing integration",
      "Mapping integration",
      "Gate Synthesis integration"
    ],
    "validation": [
      "Logical error curves",
      "Gate / depth counts",
      "Noise sweeps",
      "Classical cross-checks"
    ],
    "risks": [
      "Toy-model overreach",
      "Simulation cost",
      "Noise-model mismatch",
      "Hardware-specific assumptions"
    ],
    "currentWork": "Architecture and core implementation are being developed iteratively, with runnable subsystems promoted as they pass validation gates.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: Quantum Computing",
      "Maturity target: Research-grade",
      "Core stack: Routing, Mapping, Gate Synthesis",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "Routing core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 37,
    "slug": "quantum-network-simulator",
    "title": "Quantum Network Simulator",
    "domain": "Quantum Information",
    "status": "in-progress",
    "level": "Research-grade",
    "stack": [
      "Repeaters",
      "Entanglement",
      "Routing"
    ],
    "summary": "Network simulator for entanglement distribution, swapping, fidelity decay, routing and repeater scheduling.",
    "evidence": "Development programme",
    "year": "2026+",
    "objective": "Engineer a reproducible system with explicit interfaces, measurable behaviour and documented failure modes.",
    "architecture": [
      "Inputs",
      "Core engine",
      "State / storage",
      "Analysis",
      "Interface",
      "Observability"
    ],
    "capabilities": [
      "Interactive simulation and parameter sweeps",
      "Noise-aware quantum experiment modelling",
      "Protocol / topology experimentation and metrics",
      "Repeaters integration",
      "Entanglement integration",
      "Routing integration"
    ],
    "validation": [
      "Unit tests",
      "Integration tests",
      "Performance profiling",
      "Failure-mode checks"
    ],
    "risks": [
      "Scope growth",
      "Integration complexity",
      "Data quality",
      "Performance constraints"
    ],
    "currentWork": "Architecture and core implementation are being developed iteratively, with runnable subsystems promoted as they pass validation gates.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: Quantum Information",
      "Maturity target: Research-grade",
      "Core stack: Repeaters, Entanglement, Routing",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "Repeaters core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 38,
    "slug": "quantum-machine-learning-benchmark-suite",
    "title": "Quantum Machine Learning Benchmark Suite",
    "domain": "Quantum AI",
    "status": "in-progress",
    "level": "Advanced",
    "stack": [
      "Qiskit",
      "Kernels",
      "VQCs",
      "Baselines"
    ],
    "summary": "Reproducible benchmark comparing quantum and classical learning under noise and small-data conditions.",
    "evidence": "Development programme",
    "year": "2026+",
    "objective": "Build an auditable decision-support platform that turns longitudinal clinical signals into useful risk estimates without hiding uncertainty or model limitations.",
    "architecture": [
      "Data ingestion & validation",
      "Feature / representation layer",
      "Model ensemble",
      "Calibration & uncertainty",
      "Explainability",
      "Clinician-facing interface"
    ],
    "capabilities": [
      "Noise-aware quantum experiment modelling",
      "Qiskit integration",
      "Kernels integration",
      "VQCs integration"
    ],
    "validation": [
      "Temporal hold-out evaluation",
      "Calibration and subgroup error analysis",
      "Explainability sanity checks",
      "Failure-mode testing on missing/noisy data"
    ],
    "risks": [
      "Dataset shift",
      "Calibration drift",
      "Over-reliance on model output",
      "Sensitive-data governance"
    ],
    "currentWork": "Architecture and core implementation are being developed iteratively, with runnable subsystems promoted as they pass validation gates.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: Quantum AI",
      "Maturity target: Advanced",
      "Core stack: Qiskit, Kernels, VQCs, Baselines",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "Qiskit core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 39,
    "slug": "tensor-network-quantum-simulator",
    "title": "Tensor-Network Quantum Simulator",
    "domain": "Many-Body Physics",
    "status": "in-progress",
    "level": "Research-grade",
    "stack": [
      "MPS",
      "DMRG",
      "Spin Chains"
    ],
    "summary": "Tensor-network simulator for entanglement, many-body dynamics and approximate ground-state studies.",
    "evidence": "Development programme",
    "year": "2026+",
    "objective": "Engineer a reproducible system with explicit interfaces, measurable behaviour and documented failure modes.",
    "architecture": [
      "Inputs",
      "Core engine",
      "State / storage",
      "Analysis",
      "Interface",
      "Observability"
    ],
    "capabilities": [
      "Interactive simulation and parameter sweeps",
      "Noise-aware quantum experiment modelling",
      "Protocol / topology experimentation and metrics",
      "MPS integration",
      "DMRG integration",
      "Spin Chains integration"
    ],
    "validation": [
      "Unit tests",
      "Integration tests",
      "Performance profiling",
      "Failure-mode checks"
    ],
    "risks": [
      "Scope growth",
      "Integration complexity",
      "Data quality",
      "Performance constraints"
    ],
    "currentWork": "Architecture and core implementation are being developed iteratively, with runnable subsystems promoted as they pass validation gates.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: Many-Body Physics",
      "Maturity target: Research-grade",
      "Core stack: MPS, DMRG, Spin Chains",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "MPS core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 40,
    "slug": "photonforge-quantum-photonics",
    "title": "PhotonForge Quantum Photonics",
    "domain": "Quantum Photonics",
    "status": "in-progress",
    "level": "Flagship",
    "stack": [
      "Interferometers",
      "SPDC",
      "Photonic Gates"
    ],
    "summary": "Programmable photonic-circuit simulator with loss, phase drift, photon statistics and adaptive calibration experiments.",
    "evidence": "Development programme",
    "year": "2026+",
    "objective": "Create a programmable photonic quantum simulator spanning interferometers, sources, loss and photon statistics with hardware-aware diagnostics.",
    "architecture": [
      "Optical component graph",
      "Unitary / transfer matrices",
      "Photon source models",
      "Loss / noise",
      "Measurement engine",
      "Circuit optimiser"
    ],
    "capabilities": [
      "Interactive simulation and parameter sweeps",
      "Noise-aware quantum experiment modelling",
      "Optical component and loss modelling",
      "Interferometers integration",
      "SPDC integration",
      "Photonic Gates integration"
    ],
    "validation": [
      "HOM interference",
      "Known interferometers",
      "Photon-number conservation",
      "Loss / phase sweeps"
    ],
    "risks": [
      "State-space growth",
      "Partial distinguishability",
      "Loss modelling",
      "Numerical precision"
    ],
    "currentWork": "Architecture and core implementation are being developed iteratively, with runnable subsystems promoted as they pass validation gates.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: Quantum Photonics",
      "Maturity target: Flagship",
      "Core stack: Interferometers, SPDC, Photonic Gates",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "Interferometers core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 41,
    "slug": "geooptics-differentiable-ray-tracing-lab",
    "title": "GeoOptics Differentiable Ray-Tracing Lab",
    "domain": "Computational Optics",
    "status": "in-progress",
    "level": "Flagship",
    "stack": [
      "Ray Tracing",
      "AutoDiff",
      "Inverse Design"
    ],
    "summary": "Differentiable optical design environment for lenses, aberrations and gradient-based inverse optimisation.",
    "evidence": "Development programme",
    "year": "2026+",
    "objective": "Build an optics design laboratory for forward simulation and inverse design while exposing aberrations, sensitivities and physical constraints.",
    "architecture": [
      "Optical scene",
      "Ray / wave propagator",
      "Material models",
      "Merit function",
      "Optimiser",
      "Aberration diagnostics"
    ],
    "capabilities": [
      "Ray Tracing integration",
      "AutoDiff integration",
      "Inverse Design integration"
    ],
    "validation": [
      "Known lens cases",
      "Snell / paraxial checks",
      "Spot / wavefront metrics",
      "Tolerance sweeps"
    ],
    "risks": [
      "Local minima",
      "Dispersion assumptions",
      "Sampling error",
      "Optimisation instability"
    ],
    "currentWork": "Architecture and core implementation are being developed iteratively, with runnable subsystems promoted as they pass validation gates.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: Computational Optics",
      "Maturity target: Flagship",
      "Core stack: Ray Tracing, AutoDiff, Inverse Design",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "Ray Tracing core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 42,
    "slug": "waveoptics-fourier-propagation-suite",
    "title": "WaveOptics Fourier Propagation Suite",
    "domain": "Optics",
    "status": "in-progress",
    "level": "Advanced",
    "stack": [
      "FFT",
      "Fresnel",
      "Fraunhofer",
      "Holography"
    ],
    "summary": "Wave-optics platform for diffraction, propagation, holography and wavefront analysis.",
    "evidence": "Development programme",
    "year": "2026+",
    "objective": "Build an optics design laboratory for forward simulation and inverse design while exposing aberrations, sensitivities and physical constraints.",
    "architecture": [
      "Optical scene",
      "Ray / wave propagator",
      "Material models",
      "Merit function",
      "Optimiser",
      "Aberration diagnostics"
    ],
    "capabilities": [
      "End-to-end platform workflow",
      "FFT integration",
      "Fresnel integration",
      "Fraunhofer integration"
    ],
    "validation": [
      "Known lens cases",
      "Snell / paraxial checks",
      "Spot / wavefront metrics",
      "Tolerance sweeps"
    ],
    "risks": [
      "Local minima",
      "Dispersion assumptions",
      "Sampling error",
      "Optimisation instability"
    ],
    "currentWork": "Architecture and core implementation are being developed iteratively, with runnable subsystems promoted as they pass validation gates.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: Optics",
      "Maturity target: Advanced",
      "Core stack: FFT, Fresnel, Fraunhofer, Holography",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "FFT core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 43,
    "slug": "nonlinear-photonics-simulator",
    "title": "Nonlinear Photonics Simulator",
    "domain": "Photonics",
    "status": "in-progress",
    "level": "Research-grade",
    "stack": [
      "NLSE",
      "Kerr",
      "SHG",
      "Solitons"
    ],
    "summary": "Numerical simulator for nonlinear optical propagation, spectral broadening and soliton dynamics.",
    "evidence": "Development programme",
    "year": "2026+",
    "objective": "Create a programmable photonic quantum simulator spanning interferometers, sources, loss and photon statistics with hardware-aware diagnostics.",
    "architecture": [
      "Optical component graph",
      "Unitary / transfer matrices",
      "Photon source models",
      "Loss / noise",
      "Measurement engine",
      "Circuit optimiser"
    ],
    "capabilities": [
      "Interactive simulation and parameter sweeps",
      "Optical component and loss modelling",
      "NLSE integration",
      "Kerr integration",
      "SHG integration"
    ],
    "validation": [
      "HOM interference",
      "Known interferometers",
      "Photon-number conservation",
      "Loss / phase sweeps"
    ],
    "risks": [
      "State-space growth",
      "Partial distinguishability",
      "Loss modelling",
      "Numerical precision"
    ],
    "currentWork": "Architecture and core implementation are being developed iteratively, with runnable subsystems promoted as they pass validation gates.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: Photonics",
      "Maturity target: Research-grade",
      "Core stack: NLSE, Kerr, SHG, Solitons",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "NLSE core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 44,
    "slug": "maxwellfdtd-electromagnetics-solver",
    "title": "MaxwellFDTD Electromagnetics Solver",
    "domain": "Computational Physics",
    "status": "in-progress",
    "level": "Research-grade",
    "stack": [
      "FDTD",
      "Maxwell",
      "Waveguides"
    ],
    "summary": "Finite-difference time-domain solver for EM propagation, resonators, scattering and metamaterial studies.",
    "evidence": "Development programme",
    "year": "2026+",
    "objective": "Engineer a reproducible system with explicit interfaces, measurable behaviour and documented failure modes.",
    "architecture": [
      "Inputs",
      "Core engine",
      "State / storage",
      "Analysis",
      "Interface",
      "Observability"
    ],
    "capabilities": [
      "FDTD integration",
      "Maxwell integration",
      "Waveguides integration"
    ],
    "validation": [
      "Unit tests",
      "Integration tests",
      "Performance profiling",
      "Failure-mode checks"
    ],
    "risks": [
      "Scope growth",
      "Integration complexity",
      "Data quality",
      "Performance constraints"
    ],
    "currentWork": "Architecture and core implementation are being developed iteratively, with runnable subsystems promoted as they pass validation gates.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: Computational Physics",
      "Maturity target: Research-grade",
      "Core stack: FDTD, Maxwell, Waveguides",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "FDTD core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 45,
    "slug": "bioforge-genomic-protein-intelligence",
    "title": "BioForge Genomic & Protein Intelligence",
    "domain": "Computational Biology",
    "status": "in-progress",
    "level": "Flagship",
    "stack": [
      "Transformers",
      "Sequence Models",
      "Bioinformatics"
    ],
    "summary": "Sequence-intelligence platform for DNA, RNA and protein representation, motifs and property prediction.",
    "evidence": "Development programme",
    "year": "2026+",
    "objective": "Build computational genomics / protein intelligence systems around public data, reproducible representation learning and uncertainty-aware prediction.",
    "architecture": [
      "Sequence / structure ingest",
      "Representation encoder",
      "Task head",
      "Interpretability layer",
      "Benchmark suite",
      "Reproducibility pipeline"
    ],
    "capabilities": [
      "End-to-end platform workflow",
      "Decision-support analytics and explainable outputs",
      "Sequence representation and biological benchmark workflows",
      "Transformers integration",
      "Sequence Models integration",
      "Bioinformatics integration"
    ],
    "validation": [
      "Held-out species / chromosome",
      "Calibration",
      "Motif / attribution checks",
      "Baseline comparisons"
    ],
    "risks": [
      "Dataset leakage",
      "Population bias",
      "Spurious motifs",
      "Biological over-interpretation"
    ],
    "currentWork": "Architecture and core implementation are being developed iteratively, with runnable subsystems promoted as they pass validation gates.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: Computational Biology",
      "Maturity target: Flagship",
      "Core stack: Transformers, Sequence Models, Bioinformatics",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "Transformers core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 46,
    "slug": "genenet-regulatory-dynamics-simulator",
    "title": "GeneNet Regulatory Dynamics Simulator",
    "domain": "Genetics",
    "status": "in-progress",
    "level": "Research-grade",
    "stack": [
      "Graphs",
      "ODEs",
      "Causal Perturbation"
    ],
    "summary": "Dynamic simulator for gene-regulatory networks, perturbations, feedback and state transitions.",
    "evidence": "Development programme",
    "year": "2026+",
    "objective": "Predict variant effects using sequence context, conservation and uncertainty while keeping the task computational and benchmark-driven.",
    "architecture": [
      "Variant ingest",
      "Reference context",
      "Feature / embedding layer",
      "Effect model",
      "Calibration",
      "Interpretability / reports"
    ],
    "capabilities": [
      "Interactive simulation and parameter sweeps",
      "Dynamic perturbation and regulatory-network experiments",
      "Protocol / topology experimentation and metrics",
      "Graphs integration",
      "ODEs integration",
      "Causal Perturbation integration"
    ],
    "validation": [
      "Held-out loci",
      "Class imbalance metrics",
      "Calibration curves",
      "Baseline comparison"
    ],
    "risks": [
      "Label noise",
      "Ancestry bias",
      "Data leakage",
      "Clinical over-interpretation"
    ],
    "currentWork": "Architecture and core implementation are being developed iteratively, with runnable subsystems promoted as they pass validation gates.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: Genetics",
      "Maturity target: Research-grade",
      "Core stack: Graphs, ODEs, Causal Perturbation",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "Graphs core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 47,
    "slug": "variantpath-mutation-effect-predictor",
    "title": "VariantPath Mutation-Effect Predictor",
    "domain": "Genomics",
    "status": "in-progress",
    "level": "Advanced",
    "stack": [
      "ML",
      "Conservation",
      "Sequence Models"
    ],
    "summary": "Mutation-effect research tool with uncertainty, conservation and sequence-context modelling.",
    "evidence": "Development programme",
    "year": "2026+",
    "objective": "Engineer a reproducible system with explicit interfaces, measurable behaviour and documented failure modes.",
    "architecture": [
      "Inputs",
      "Core engine",
      "State / storage",
      "Analysis",
      "Interface",
      "Observability"
    ],
    "capabilities": [
      "ML integration",
      "Conservation integration",
      "Sequence Models integration"
    ],
    "validation": [
      "Unit tests",
      "Integration tests",
      "Performance profiling",
      "Failure-mode checks"
    ],
    "risks": [
      "Scope growth",
      "Integration complexity",
      "Data quality",
      "Performance constraints"
    ],
    "currentWork": "Architecture and core implementation are being developed iteratively, with runnable subsystems promoted as they pass validation gates.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: Genomics",
      "Maturity target: Advanced",
      "Core stack: ML, Conservation, Sequence Models",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "ML core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 48,
    "slug": "molecular-dynamics-mini-lab",
    "title": "Molecular Dynamics Mini-Lab",
    "domain": "Computational Chemistry",
    "status": "in-progress",
    "level": "Advanced",
    "stack": [
      "Verlet",
      "Potentials",
      "Thermodynamics"
    ],
    "summary": "Molecular simulation environment with particle integration, thermodynamic observables and trajectory visualisation.",
    "evidence": "Development programme",
    "year": "2026+",
    "objective": "Engineer a reproducible system with explicit interfaces, measurable behaviour and documented failure modes.",
    "architecture": [
      "Inputs",
      "Core engine",
      "State / storage",
      "Analysis",
      "Interface",
      "Observability"
    ],
    "capabilities": [
      "Geometry / dynamics-aware molecular experiments",
      "Verlet integration",
      "Potentials integration",
      "Thermodynamics integration"
    ],
    "validation": [
      "Unit tests",
      "Integration tests",
      "Performance profiling",
      "Failure-mode checks"
    ],
    "risks": [
      "Scope growth",
      "Integration complexity",
      "Data quality",
      "Performance constraints"
    ],
    "currentWork": "Architecture and core implementation are being developed iteratively, with runnable subsystems promoted as they pass validation gates.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: Computational Chemistry",
      "Maturity target: Advanced",
      "Core stack: Verlet, Potentials, Thermodynamics",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "Verlet core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 49,
    "slug": "moleculegraph-equivariant-gnn-platform",
    "title": "MoleculeGraph Equivariant GNN Platform",
    "domain": "Molecular AI",
    "status": "in-progress",
    "level": "Research-grade",
    "stack": [
      "E(3) GNNs",
      "Molecular Graphs"
    ],
    "summary": "3D equivariant graph-learning platform for molecular property and interaction prediction.",
    "evidence": "Development programme",
    "year": "2026+",
    "objective": "Evaluate graph and equivariant neural networks for molecular property prediction with geometry-aware representations and uncertainty diagnostics.",
    "architecture": [
      "Molecular graph builder",
      "3D equivariant encoder",
      "Message passing",
      "Property head",
      "Uncertainty / calibration",
      "Benchmark harness"
    ],
    "capabilities": [
      "End-to-end platform workflow",
      "Geometry / dynamics-aware molecular experiments",
      "E(3) GNNs integration",
      "Molecular Graphs integration"
    ],
    "validation": [
      "Scaffold split",
      "Geometry perturbations",
      "Classical descriptor baseline",
      "Calibration / OOD"
    ],
    "risks": [
      "Dataset shortcuts",
      "Conformer dependence",
      "Small-data variance",
      "Compute cost"
    ],
    "currentWork": "Architecture and core implementation are being developed iteratively, with runnable subsystems promoted as they pass validation gates.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: Molecular AI",
      "Maturity target: Research-grade",
      "Core stack: E(3) GNNs, Molecular Graphs",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "E(3) GNNs core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 50,
    "slug": "quantforge-advanced-quant-research-terminal",
    "title": "QuantForge Advanced Quant Research Terminal",
    "domain": "Quantitative Finance",
    "status": "built",
    "level": "Flagship",
    "stack": [
      "FastAPI",
      "GARCH",
      "HMM",
      "VaR",
      "Options",
      "ML"
    ],
    "summary": "Quantitative research terminal spanning risk, portfolio optimisation, derivatives, regimes, forecasting and reproducible backtesting.",
    "evidence": "Existing implementation",
    "year": "2026+",
    "objective": "Provide a research terminal for statistically disciplined portfolio, risk, derivatives and forecasting experiments with explicit out-of-sample controls.",
    "architecture": [
      "Market data layer",
      "Forecasting / regimes",
      "Portfolio engine",
      "Risk engine",
      "Derivatives lab",
      "Backtest & diagnostics"
    ],
    "capabilities": [
      "Risk decomposition and stress testing",
      "FastAPI integration",
      "GARCH integration",
      "HMM integration"
    ],
    "validation": [
      "Walk-forward tests",
      "Purging / embargo",
      "Risk backtests",
      "Model / strategy ablations"
    ],
    "risks": [
      "Overfitting",
      "Look-ahead leakage",
      "Data quality",
      "Regime instability"
    ],
    "currentWork": "Implemented system is being hardened with stronger tests, documentation, benchmarking and portfolio-grade presentation.",
    "roadmap": [
      "Stabilise the core engine and interfaces",
      "Add automated tests and reproducible experiment configurations",
      "Benchmark against domain-appropriate baselines",
      "Add failure-mode, uncertainty or robustness analysis",
      "Publish technical documentation, diagrams and demonstration assets"
    ],
    "engineeringNotes": [
      "Primary domain: Quantitative Finance",
      "Maturity target: Flagship",
      "Core stack: FastAPI, GARCH, HMM, VaR, Options",
      "Design rule: prefer observable, testable modules over opaque monoliths",
      "Portfolio rule: status describes current implementation maturity, not ambition"
    ],
    "interfaces": [
      "FastAPI core",
      "Configuration / experiment layer",
      "Metrics and diagnostics",
      "Visualisation / operator interface"
    ]
  },
  {
    "id": 51,
    "slug": "pharmacy-inventory-management-system",
    "title": "Pharmacy Inventory Management System",
    "domain": "Software / Healthcare Operations",
    "status": "built",
    "level": "Built",
    "stack": ["Java", "Swing", "MySQL", "SQL"],
    "summary": "Desktop pharmacy inventory system for managing medicine records, stock levels, expiry tracking and day-to-day inventory operations through a structured Java and MySQL workflow.",
    "evidence": "Existing implementation",
    "year": "2024",
    "objective": "Provide a reliable desktop workflow for maintaining pharmacy stock records, reducing manual inventory errors and making stock and expiry information easier to review.",
    "architecture": [
      "Java Swing desktop interface",
      "Medicine and inventory records",
      "MySQL persistence layer",
      "Stock update workflow",
      "Expiry tracking",
      "Inventory search and reporting"
    ],
    "capabilities": [
      "Medicine and stock record management",
      "Inventory quantity updates",
      "Expiry-date tracking",
      "Database-backed CRUD operations",
      "Searchable pharmacy inventory",
      "Desktop operator interface"
    ],
    "validation": [
      "CRUD workflow testing",
      "Inventory update consistency checks",
      "Database persistence checks",
      "Expiry-data validation"
    ],
    "risks": [
      "Manual data-entry errors",
      "Duplicate medicine records",
      "Incorrect stock adjustments",
      "Local database backup requirements"
    ],
    "currentWork": "Built desktop system represented as completed portfolio work.",
    "roadmap": [
      "Add stronger audit logging",
      "Add configurable low-stock notifications",
      "Improve reporting and export workflows",
      "Package installation and user documentation"
    ],
    "engineeringNotes": [
      "Primary domain: Software / Healthcare Operations",
      "Status: Built",
      "Core stack: Java Swing and MySQL",
      "Designed around practical pharmacy stock and expiry workflows"
    ],
    "interfaces": [
      "Java Swing desktop UI",
      "MySQL database",
      "Inventory forms",
      "Search and reporting views"
    ]
  },
  {
    "id": 52,
    "slug": "shwari-caregivers-platform",
    "title": "Shwari Caregivers",
    "domain": "Software / Care Services",
    "status": "built",
    "level": "Built",
    "stack": ["Web Application", "Database", "Care Coordination"],
    "summary": "Caregiver coordination and care-services management platform designed to organise client information, caregiver records, scheduling and service administration in one operational system.",
    "evidence": "Existing implementation",
    "year": "2024+",
    "objective": "Simplify the administration of caregiving services by bringing client, caregiver and scheduling information into a single structured workflow.",
    "architecture": [
      "Caregiver records",
      "Client records",
      "Scheduling workflow",
      "Service administration",
      "Database persistence",
      "Operator dashboard"
    ],
    "capabilities": [
      "Caregiver profile management",
      "Client record organisation",
      "Care schedule coordination",
      "Service administration workflow",
      "Centralised operational records",
      "Dashboard-based management"
    ],
    "validation": [
      "Record creation and update testing",
      "Schedule workflow checks",
      "Data consistency checks",
      "User-flow testing"
    ],
    "risks": [
      "Sensitive care information",
      "Scheduling conflicts",
      "Data accuracy",
      "Access-control requirements"
    ],
    "currentWork": "Built caregiving-management system represented as completed portfolio work.",
    "roadmap": [
      "Strengthen role-based access",
      "Add notifications and scheduling reminders",
      "Improve reporting",
      "Expand deployment documentation"
    ],
    "engineeringNotes": [
      "Primary domain: Software / Care Services",
      "Status: Built",
      "Focus: caregiver coordination and operational care administration",
      "Portfolio description intentionally avoids unsupported clinical claims"
    ],
    "interfaces": [
      "Caregiver management interface",
      "Client records",
      "Scheduling views",
      "Administrative dashboard"
    ]
  },
  {
    "id": 53,
    "slug": "edmas-emergency-disaster-management-system",
    "title": "EDMAS Emergency & Disaster Management System",
    "domain": "Emergency Technology / IoT",
    "status": "built",
    "level": "Built",
    "stack": ["Django", "React", "IoT", "REST APIs"],
    "summary": "Emergency and disaster-management platform combining a Django backend, React interface and IoT-oriented event inputs to support incident reporting, operational awareness and coordinated response workflows.",
    "evidence": "Existing implementation",
    "year": "2024+",
    "objective": "Create a central digital workflow for reporting emergencies, monitoring incidents and giving operators a clearer view of active response information.",
    "architecture": [
      "Incident reporting interface",
      "Django application backend",
      "React operations dashboard",
      "REST API layer",
      "IoT / sensor event inputs",
      "Incident status and response workflow"
    ],
    "capabilities": [
      "Emergency incident reporting",
      "Incident status tracking",
      "Operational dashboard",
      "IoT-oriented alert inputs",
      "Backend API workflow",
      "Response coordination support"
    ],
    "validation": [
      "Incident workflow testing",
      "API request and response checks",
      "Dashboard state validation",
      "Sensor-event integration tests"
    ],
    "risks": [
      "False or duplicate alerts",
      "Network disruption during emergencies",
      "Sensor reliability",
      "Role and access management"
    ],
    "currentWork": "Built emergency-management system represented as completed portfolio work.",
    "roadmap": [
      "Add resilient offline / degraded-network workflows",
      "Improve alert prioritisation",
      "Expand response analytics",
      "Add deployment and incident-playbook documentation"
    ],
    "engineeringNotes": [
      "Primary domain: Emergency Technology / IoT",
      "Status: Built",
      "Core stack: Django, React, REST APIs and IoT-oriented integrations",
      "Designed as an operational coordination system rather than a replacement for emergency services"
    ],
    "interfaces": [
      "React dashboard",
      "Django backend",
      "REST API",
      "IoT / sensor event interface"
    ]
  }
];

export const RESEARCH = [
  {
    "id": 1,
    "title": "Autonomous Self-Healing Quantum Photonic Circuits",
    "domain": "Quantum Photonics",
    "question": "Can a photonic processor detect phase drift, loss and component degradation online, then reconfigure itself to recover target fidelity?",
    "method": "Closed-loop device identification + differentiable optimisation/RL + loss/noise simulation.",
    "novelty": "Moves from passive calibration to autonomous self-recovery under non-stationary hardware faults.",
    "stage": "in-progress",
    "target": "Preprint / reproducible research package",
    "status": "in-progress",
    "baselines": [
      "Strong classical / numerical baseline",
      "Ablated version of the proposed method",
      "Published-style reference configuration"
    ],
    "experiments": [
      "Reproduce a trusted baseline before testing the novelty claim",
      "Run controlled sweeps over the main failure / noise variable",
      "Perform ablation studies to isolate the proposed contribution",
      "Report uncertainty, failure cases and computational cost",
      "Package code, configs, figures and results for reproducibility"
    ],
    "noveltyGate": "Existing work must be mapped first; the paper advances only if the literature review and baseline reproduction leave a defensible gap that the proposed method addresses.",
    "deliverables": [
      "paper/manuscript.tex",
      "references.bib",
      "src/",
      "experiments/",
      "figures/",
      "results/",
      "reproduction/",
      "CITATION.cff"
    ],
    "statusNote": "Research programme in progress. Novelty is a hypothesis until literature review, baseline reproduction and controlled experiments support it."
  },
  {
    "id": 2,
    "title": "Hardware-Aware Fault-Tolerant Quantum Architecture Discovery",
    "domain": "Fault-Tolerant Quantum Computing",
    "question": "Can code, topology, routing and physical error model be co-optimised instead of selected independently?",
    "method": "Multi-objective resource estimator over code families, hardware connectivity and routing schedules.",
    "novelty": "Searches a joint hardware/code/compiler design space and exposes Pareto-optimal fault-tolerant architectures.",
    "stage": "in-progress",
    "target": "Preprint / reproducible research package",
    "status": "in-progress",
    "baselines": [
      "Strong classical / numerical baseline",
      "Ablated version of the proposed method",
      "Published-style reference configuration"
    ],
    "experiments": [
      "Reproduce a trusted baseline before testing the novelty claim",
      "Run controlled sweeps over the main failure / noise variable",
      "Perform ablation studies to isolate the proposed contribution",
      "Report uncertainty, failure cases and computational cost",
      "Package code, configs, figures and results for reproducibility"
    ],
    "noveltyGate": "Existing work must be mapped first; the paper advances only if the literature review and baseline reproduction leave a defensible gap that the proposed method addresses.",
    "deliverables": [
      "paper/manuscript.tex",
      "references.bib",
      "src/",
      "experiments/",
      "figures/",
      "results/",
      "reproduction/",
      "CITATION.cff"
    ],
    "statusNote": "Research programme in progress. Novelty is a hypothesis until literature review, baseline reproduction and controlled experiments support it."
  },
  {
    "id": 3,
    "title": "Causal Hamiltonian Discovery from Sparse Quantum Measurements",
    "domain": "Quantum Dynamics",
    "question": "Can latent couplings and dissipative channels be inferred from incomplete noisy observables?",
    "method": "Differentiable Lindblad simulation + Bayesian/SINDy-style sparse inference + active measurement selection.",
    "novelty": "Targets causal recovery of hidden quantum dynamics instead of forward simulation only.",
    "stage": "in-progress",
    "target": "Preprint / reproducible research package",
    "status": "in-progress",
    "baselines": [
      "Strong classical / numerical baseline",
      "Ablated version of the proposed method",
      "Published-style reference configuration"
    ],
    "experiments": [
      "Reproduce a trusted baseline before testing the novelty claim",
      "Run controlled sweeps over the main failure / noise variable",
      "Perform ablation studies to isolate the proposed contribution",
      "Report uncertainty, failure cases and computational cost",
      "Package code, configs, figures and results for reproducibility"
    ],
    "noveltyGate": "Existing work must be mapped first; the paper advances only if the literature review and baseline reproduction leave a defensible gap that the proposed method addresses.",
    "deliverables": [
      "paper/manuscript.tex",
      "references.bib",
      "src/",
      "experiments/",
      "figures/",
      "results/",
      "reproduction/",
      "CITATION.cff"
    ],
    "statusNote": "Research programme in progress. Novelty is a hypothesis until literature review, baseline reproduction and controlled experiments support it."
  },
  {
    "id": 4,
    "title": "Unitary Neural Operators for Long-Horizon Quantum Dynamics",
    "domain": "Scientific ML / Quantum",
    "question": "Can learned operators preserve norm, unitarity and symmetry by construction over long rollouts?",
    "method": "Structure-preserving operator parameterisation benchmarked against FNO, DeepONet and numerical solvers.",
    "novelty": "Makes physical constraints architectural rather than soft penalty terms.",
    "stage": "in-progress",
    "target": "Preprint / reproducible research package",
    "status": "in-progress",
    "baselines": [
      "Strong classical / numerical baseline",
      "Ablated version of the proposed method",
      "Published-style reference configuration"
    ],
    "experiments": [
      "Reproduce a trusted baseline before testing the novelty claim",
      "Run controlled sweeps over the main failure / noise variable",
      "Perform ablation studies to isolate the proposed contribution",
      "Report uncertainty, failure cases and computational cost",
      "Package code, configs, figures and results for reproducibility"
    ],
    "noveltyGate": "Existing work must be mapped first; the paper advances only if the literature review and baseline reproduction leave a defensible gap that the proposed method addresses.",
    "deliverables": [
      "paper/manuscript.tex",
      "references.bib",
      "src/",
      "experiments/",
      "figures/",
      "results/",
      "reproduction/",
      "CITATION.cff"
    ],
    "statusNote": "Research programme in progress. Novelty is a hypothesis until literature review, baseline reproduction and controlled experiments support it."
  },
  {
    "id": 5,
    "title": "Adaptive QEC under Correlated Non-Stationary Noise",
    "domain": "Quantum Error Correction",
    "question": "Can a decoder infer drifting correlated noise while decoding syndromes online?",
    "method": "Temporal noise-state estimator + adaptive decoder benchmark against static MWPM/union-find baselines.",
    "novelty": "Targets realistic time-varying error structure rather than IID toy noise.",
    "stage": "in-progress",
    "target": "Preprint / reproducible research package",
    "status": "in-progress",
    "baselines": [
      "Strong classical / numerical baseline",
      "Ablated version of the proposed method",
      "Published-style reference configuration"
    ],
    "experiments": [
      "Reproduce a trusted baseline before testing the novelty claim",
      "Run controlled sweeps over the main failure / noise variable",
      "Perform ablation studies to isolate the proposed contribution",
      "Report uncertainty, failure cases and computational cost",
      "Package code, configs, figures and results for reproducibility"
    ],
    "noveltyGate": "Existing work must be mapped first; the paper advances only if the literature review and baseline reproduction leave a defensible gap that the proposed method addresses.",
    "deliverables": [
      "paper/manuscript.tex",
      "references.bib",
      "src/",
      "experiments/",
      "figures/",
      "results/",
      "reproduction/",
      "CITATION.cff"
    ],
    "statusNote": "Research programme in progress. Novelty is a hypothesis until literature review, baseline reproduction and controlled experiments support it."
  },
  {
    "id": 6,
    "title": "Differentiable Quantum-Photonic Hardware–Algorithm Co-Design",
    "domain": "Quantum Photonics",
    "question": "Can algorithm parameters and photonic topology be optimised jointly for fidelity, loss and component count?",
    "method": "End-to-end differentiable circuit/device simulator with constrained multi-objective optimisation.",
    "novelty": "Collapses the traditional algorithm→compiler→device separation into one co-design loop.",
    "stage": "in-progress",
    "target": "Preprint / reproducible research package",
    "status": "in-progress",
    "baselines": [
      "Strong classical / numerical baseline",
      "Ablated version of the proposed method",
      "Published-style reference configuration"
    ],
    "experiments": [
      "Reproduce a trusted baseline before testing the novelty claim",
      "Run controlled sweeps over the main failure / noise variable",
      "Perform ablation studies to isolate the proposed contribution",
      "Report uncertainty, failure cases and computational cost",
      "Package code, configs, figures and results for reproducibility"
    ],
    "noveltyGate": "Existing work must be mapped first; the paper advances only if the literature review and baseline reproduction leave a defensible gap that the proposed method addresses.",
    "deliverables": [
      "paper/manuscript.tex",
      "references.bib",
      "src/",
      "experiments/",
      "figures/",
      "results/",
      "reproduction/",
      "CITATION.cff"
    ],
    "statusNote": "Research programme in progress. Novelty is a hypothesis until literature review, baseline reproduction and controlled experiments support it."
  },
  {
    "id": 7,
    "title": "Differentiable Kerr Geodesics for Inverse Gravitational Lensing",
    "domain": "Relativistic Optics",
    "question": "Can black-hole parameters be inferred directly through differentiable null-geodesic rendering?",
    "method": "Kerr ray tracer + synthetic observables + gradient-based inverse estimation of mass/spin/inclination.",
    "novelty": "Turns relativistic rendering into an inverse parameter-recovery engine.",
    "stage": "in-progress",
    "target": "Preprint / reproducible research package",
    "status": "in-progress",
    "baselines": [
      "Strong classical / numerical baseline",
      "Ablated version of the proposed method",
      "Published-style reference configuration"
    ],
    "experiments": [
      "Reproduce a trusted baseline before testing the novelty claim",
      "Run controlled sweeps over the main failure / noise variable",
      "Perform ablation studies to isolate the proposed contribution",
      "Report uncertainty, failure cases and computational cost",
      "Package code, configs, figures and results for reproducibility"
    ],
    "noveltyGate": "Existing work must be mapped first; the paper advances only if the literature review and baseline reproduction leave a defensible gap that the proposed method addresses.",
    "deliverables": [
      "paper/manuscript.tex",
      "references.bib",
      "src/",
      "experiments/",
      "figures/",
      "results/",
      "reproduction/",
      "CITATION.cff"
    ],
    "statusNote": "Research programme in progress. Novelty is a hypothesis until literature review, baseline reproduction and controlled experiments support it."
  },
  {
    "id": 8,
    "title": "Reconstruction-Free Adaptive Optics",
    "domain": "Computational Optics",
    "question": "Can a controller map raw wavefront-sensor observations directly to mirror commands under time-varying turbulence?",
    "method": "Kolmogorov turbulence simulator + deformable mirror + model-based/RL control benchmark.",
    "novelty": "Bypasses explicit wavefront reconstruction and learns end-to-end correction.",
    "stage": "in-progress",
    "target": "Preprint / reproducible research package",
    "status": "in-progress",
    "baselines": [
      "Strong classical / numerical baseline",
      "Ablated version of the proposed method",
      "Published-style reference configuration"
    ],
    "experiments": [
      "Reproduce a trusted baseline before testing the novelty claim",
      "Run controlled sweeps over the main failure / noise variable",
      "Perform ablation studies to isolate the proposed contribution",
      "Report uncertainty, failure cases and computational cost",
      "Package code, configs, figures and results for reproducibility"
    ],
    "noveltyGate": "Existing work must be mapped first; the paper advances only if the literature review and baseline reproduction leave a defensible gap that the proposed method addresses.",
    "deliverables": [
      "paper/manuscript.tex",
      "references.bib",
      "src/",
      "experiments/",
      "figures/",
      "results/",
      "reproduction/",
      "CITATION.cff"
    ],
    "statusNote": "Research programme in progress. Novelty is a hypothesis until literature review, baseline reproduction and controlled experiments support it."
  },
  {
    "id": 9,
    "title": "Equation-Free Aeroelastic Bifurcation Discovery with Neural Operators",
    "domain": "Aeroelasticity",
    "question": "Can learned operators expose flutter boundaries and bifurcations without dense CFD/FEM sweeps?",
    "method": "Operator surrogate + continuation/stability analysis + validation against reduced-order simulations.",
    "novelty": "Uses learned dynamics for instability discovery, not only fast forward prediction.",
    "stage": "in-progress",
    "target": "Preprint / reproducible research package",
    "status": "in-progress",
    "baselines": [
      "Strong classical / numerical baseline",
      "Ablated version of the proposed method",
      "Published-style reference configuration"
    ],
    "experiments": [
      "Reproduce a trusted baseline before testing the novelty claim",
      "Run controlled sweeps over the main failure / noise variable",
      "Perform ablation studies to isolate the proposed contribution",
      "Report uncertainty, failure cases and computational cost",
      "Package code, configs, figures and results for reproducibility"
    ],
    "noveltyGate": "Existing work must be mapped first; the paper advances only if the literature review and baseline reproduction leave a defensible gap that the proposed method addresses.",
    "deliverables": [
      "paper/manuscript.tex",
      "references.bib",
      "src/",
      "experiments/",
      "figures/",
      "results/",
      "reproduction/",
      "CITATION.cff"
    ],
    "statusNote": "Research programme in progress. Novelty is a hypothesis until literature review, baseline reproduction and controlled experiments support it."
  },
  {
    "id": 10,
    "title": "Zero-Shot Flight-Control Reconfiguration under Compound Failures",
    "domain": "Autonomous Flight",
    "question": "Can an aircraft infer previously unseen simultaneous failures online and remain within a safety envelope?",
    "method": "Online latent system identification + constrained MPC + safety shield in 6-DOF simulation.",
    "novelty": "Focuses on compound unseen failures rather than a fixed fault catalogue.",
    "stage": "in-progress",
    "target": "Preprint / reproducible research package",
    "status": "in-progress",
    "baselines": [
      "Strong classical / numerical baseline",
      "Ablated version of the proposed method",
      "Published-style reference configuration"
    ],
    "experiments": [
      "Reproduce a trusted baseline before testing the novelty claim",
      "Run controlled sweeps over the main failure / noise variable",
      "Perform ablation studies to isolate the proposed contribution",
      "Report uncertainty, failure cases and computational cost",
      "Package code, configs, figures and results for reproducibility"
    ],
    "noveltyGate": "Existing work must be mapped first; the paper advances only if the literature review and baseline reproduction leave a defensible gap that the proposed method addresses.",
    "deliverables": [
      "paper/manuscript.tex",
      "references.bib",
      "src/",
      "experiments/",
      "figures/",
      "results/",
      "reproduction/",
      "CITATION.cff"
    ],
    "statusNote": "Research programme in progress. Novelty is a hypothesis until literature review, baseline reproduction and controlled experiments support it."
  },
  {
    "id": 11,
    "title": "Collective Event-Based Navigation for GPS-Denied Aerial Swarms",
    "domain": "Robotics / Event Vision",
    "question": "Can a swarm localise and coordinate using event cameras and local communication without GPS or a global map?",
    "method": "Event-VIO + relative pose graph + decentralized control under packet loss and darkness.",
    "novelty": "Fuses event perception and collective localisation under severe sensing/communications constraints.",
    "stage": "in-progress",
    "target": "Preprint / reproducible research package",
    "status": "in-progress",
    "baselines": [
      "Strong classical / numerical baseline",
      "Ablated version of the proposed method",
      "Published-style reference configuration"
    ],
    "experiments": [
      "Reproduce a trusted baseline before testing the novelty claim",
      "Run controlled sweeps over the main failure / noise variable",
      "Perform ablation studies to isolate the proposed contribution",
      "Report uncertainty, failure cases and computational cost",
      "Package code, configs, figures and results for reproducibility"
    ],
    "noveltyGate": "Existing work must be mapped first; the paper advances only if the literature review and baseline reproduction leave a defensible gap that the proposed method addresses.",
    "deliverables": [
      "paper/manuscript.tex",
      "references.bib",
      "src/",
      "experiments/",
      "figures/",
      "results/",
      "reproduction/",
      "CITATION.cff"
    ],
    "statusNote": "Research programme in progress. Novelty is a hypothesis until literature review, baseline reproduction and controlled experiments support it."
  },
  {
    "id": 12,
    "title": "Counterfactual Genome Foundation Models for Regulatory Variant Effects",
    "domain": "Genomic AI",
    "question": "Can sequence models predict intervention outcomes rather than correlations alone?",
    "method": "Foundation-model embeddings + causal perturbation objectives + public functional-genomics benchmarks.",
    "novelty": "Targets do-intervention style regulatory reasoning over sequence and context.",
    "stage": "in-progress",
    "target": "Preprint / reproducible research package",
    "status": "in-progress",
    "baselines": [
      "Strong classical / numerical baseline",
      "Ablated version of the proposed method",
      "Published-style reference configuration"
    ],
    "experiments": [
      "Reproduce a trusted baseline before testing the novelty claim",
      "Run controlled sweeps over the main failure / noise variable",
      "Perform ablation studies to isolate the proposed contribution",
      "Report uncertainty, failure cases and computational cost",
      "Package code, configs, figures and results for reproducibility"
    ],
    "noveltyGate": "Existing work must be mapped first; the paper advances only if the literature review and baseline reproduction leave a defensible gap that the proposed method addresses.",
    "deliverables": [
      "paper/manuscript.tex",
      "references.bib",
      "src/",
      "experiments/",
      "figures/",
      "results/",
      "reproduction/",
      "CITATION.cff"
    ],
    "statusNote": "Research programme in progress. Novelty is a hypothesis until literature review, baseline reproduction and controlled experiments support it."
  },
  {
    "id": 13,
    "title": "Multiscale 4D Regulatory Digital Twins of Cell-State Transitions",
    "domain": "Systems Biology",
    "question": "Can sequence, chromatin, expression and time be fused into a dynamical predictor of cell-state trajectories?",
    "method": "Multimodal latent dynamics + perturbation modelling + temporal validation on public single-cell datasets.",
    "novelty": "Shifts from static cell classification to perturbation-aware trajectory prediction.",
    "stage": "in-progress",
    "target": "Preprint / reproducible research package",
    "status": "in-progress",
    "baselines": [
      "Strong classical / numerical baseline",
      "Ablated version of the proposed method",
      "Published-style reference configuration"
    ],
    "experiments": [
      "Reproduce a trusted baseline before testing the novelty claim",
      "Run controlled sweeps over the main failure / noise variable",
      "Perform ablation studies to isolate the proposed contribution",
      "Report uncertainty, failure cases and computational cost",
      "Package code, configs, figures and results for reproducibility"
    ],
    "noveltyGate": "Existing work must be mapped first; the paper advances only if the literature review and baseline reproduction leave a defensible gap that the proposed method addresses.",
    "deliverables": [
      "paper/manuscript.tex",
      "references.bib",
      "src/",
      "experiments/",
      "figures/",
      "results/",
      "reproduction/",
      "CITATION.cff"
    ],
    "statusNote": "Research programme in progress. Novelty is a hypothesis until literature review, baseline reproduction and controlled experiments support it."
  },
  {
    "id": 14,
    "title": "Constraint-Aware Neural Operators for Discovering Missing Physics",
    "domain": "Scientific ML",
    "question": "Can a model identify unknown terms in governing equations while preserving conservation laws?",
    "method": "Partial-physics simulator + operator learning + sparse symbolic candidate recovery + uncertainty.",
    "novelty": "Attempts to discover hidden constitutive terms instead of fitting a known PDE.",
    "stage": "in-progress",
    "target": "Preprint / reproducible research package",
    "status": "in-progress",
    "baselines": [
      "Strong classical / numerical baseline",
      "Ablated version of the proposed method",
      "Published-style reference configuration"
    ],
    "experiments": [
      "Reproduce a trusted baseline before testing the novelty claim",
      "Run controlled sweeps over the main failure / noise variable",
      "Perform ablation studies to isolate the proposed contribution",
      "Report uncertainty, failure cases and computational cost",
      "Package code, configs, figures and results for reproducibility"
    ],
    "noveltyGate": "Existing work must be mapped first; the paper advances only if the literature review and baseline reproduction leave a defensible gap that the proposed method addresses.",
    "deliverables": [
      "paper/manuscript.tex",
      "references.bib",
      "src/",
      "experiments/",
      "figures/",
      "results/",
      "reproduction/",
      "CITATION.cff"
    ],
    "statusNote": "Research programme in progress. Novelty is a hypothesis until literature review, baseline reproduction and controlled experiments support it."
  },
  {
    "id": 15,
    "title": "Universal Coupled-Field Neural Operator for Multiphysics Systems",
    "domain": "Multiphysics AI",
    "question": "Can one operator learn interacting fluid, thermal, structural and electromagnetic fields while conserving interface quantities?",
    "method": "Coupled synthetic benchmarks + modular field encoders + conservation-aware interface operators.",
    "novelty": "Targets transfer across coupled physics rather than independent single-domain surrogates.",
    "stage": "in-progress",
    "target": "Preprint / reproducible research package",
    "status": "in-progress",
    "baselines": [
      "Strong classical / numerical baseline",
      "Ablated version of the proposed method",
      "Published-style reference configuration"
    ],
    "experiments": [
      "Reproduce a trusted baseline before testing the novelty claim",
      "Run controlled sweeps over the main failure / noise variable",
      "Perform ablation studies to isolate the proposed contribution",
      "Report uncertainty, failure cases and computational cost",
      "Package code, configs, figures and results for reproducibility"
    ],
    "noveltyGate": "Existing work must be mapped first; the paper advances only if the literature review and baseline reproduction leave a defensible gap that the proposed method addresses.",
    "deliverables": [
      "paper/manuscript.tex",
      "references.bib",
      "src/",
      "experiments/",
      "figures/",
      "results/",
      "reproduction/",
      "CITATION.cff"
    ],
    "statusNote": "Research programme in progress. Novelty is a hypothesis until literature review, baseline reproduction and controlled experiments support it."
  }
];
