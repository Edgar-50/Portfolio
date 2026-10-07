# Edgar Mission Control Portfolio — v16 Restored Systems Edition

This build restores the deep mission-control interaction model while retaining exactly **50 engineering / scientific-computing projects** and **15 separate frontier research programmes**.

## Status model
Projects now use only two portfolio states:
- **Built** — implemented systems already represented as completed work.
- **In Progress** — active engineering programmes currently being developed, benchmarked or hardened.

The previous `Planned` and `Active` labels have been removed from the project archive.

## Mission dossiers
Every project has a detailed dossier with:
- mission objective and current engineering state
- architecture flow and interfaces
- core capabilities
- validation strategy and engineering gates
- technical stack and engineering notes
- current roadmap / next milestone
- known technical risks and mitigation approach

Every research programme has a research dossier with:
- research question
- proposed method
- novelty hypothesis and novelty gate
- experiment programme
- baseline requirements
- reproducible paper deliverables

## Restored unique systems
- Bristol and Nairobi live clocks
- mission ribbon / date / route telemetry
- scroll progress indicator
- mission director rotator
- active-programme departure board
- recruiter and technical modes
- 50-project searchable engineering archive
- 15-programme frontier research lab
- project comparison matrix
- operations drawer
- interactive technology constellation
- animated NBO → BRS checkpoint route (no flight simulator)
- experience, education, aviation systems training and credentials
- command palette (`Ctrl/Cmd + K`)
- mission terminal
- persistent light / dark theme
- contact transmission panel

The standalone Repository Evidence / GitHub telemetry section has been removed. The GitHub profile link remains available in the professional manifest for direct navigation without turning the portfolio into a repository list.

## Run on Windows PowerShell
From the extracted `portfolio_v16` folder:

```powershell
npm.cmd run dev
```

Then open:

```text
http://localhost:4173
```

You can also run:

```powershell
node server.mjs
```


## V17 restored features
Original-portfolio aircraft illustrations and SVG avatar (where present) extracted to local assets, flying radar background, lanyard identity, enhanced technical dossier, clickable constellation with connected nodes, achievement timeline linked to NBO–BRS map, named issuer logo-style wordmark badges and expanded credentials. ATS CV downloadable in DOCX (no tables/images/multi-column layout).

Run `npm.cmd run dev` in PowerShell from the extracted mission_control_v17 directory. Open `http://localhost:4173`. This is a portfolio presentation and flight narrative, not a real-world flight simulator or an independently verified log of credential status.


## v17.1 certification and profile update
- Expanded credentials: Cisco CCNA, Cisco CCNP, Microsoft Data Science Professional Certification, Google Machine Learning Professional Programme, EITCA AI & ML (in progress), EC-Council Ethical Hacking, EC-Council Penetration Testing, MIT xPRO Quantum Computing, MIT Professional Education Industry 4.0, IBM Quantum Computing Processes, IBM Blockchain Development Foundations, Strathmore IoT & Embedded Systems, and HarvardX Python for Research.
- LinkedIn is surfaced in the hero, mission card, professional manifest, contact area and ATS CV.
- Embraer E-Jet gallery image now uses the user-provided reference URL, with the original local aircraft image as a fallback.
- All other v17 project, research, dossier, constellation and route functionality is retained.


## v17.3 certification branding
Certification cards now display recognizable issuer brand marks for Cisco, Microsoft, Google, IBM, MIT and edX/HarvardX, plus branded site icons for EC-Council, EITCA, Strathmore University and Action Tutoring. Text fallbacks remain if a remote logo cannot load. LinkedIn points to https://www.linkedin.com/in/edgar-charles-mrsc-b72353202/.


## v17.3 branding update
- MIT certification cards now use the MIT logo URL supplied by the portfolio owner.
- IBM certification cards now use the supplied IBM logo asset URL.
- Microsoft Data Science certification now uses the Microsoft logo image from the official Microsoft brand/trademark source URL supplied by the portfolio owner.
- UWE Bristol, Harvard University and Strathmore University logos are displayed in the Education section.
- Repetitive “certificate verification on request” copy was removed. Credential copies are referenced through the LinkedIn profile instead.
- The ATS CV remains intentionally logo-free so applicant-tracking systems can parse it cleanly.
