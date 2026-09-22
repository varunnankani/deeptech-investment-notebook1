const notebookData = {
  inflections: [
    {
      title: "Physical AI leaves the factory",
      text: "Sensors, edge compute, perception and autonomy are making domain-specific robots viable in hazardous and unstructured environments — inspection and maintenance, not only assembly lines.",
      signal: "Robotics → field work"
    },
    {
      title: "Earth observation becomes persistent",
      text: "Smaller satellites, cheaper launch and private constellations shift the product from occasional imagery toward repeated monitoring and operational intelligence.",
      signal: "Imagery → monitoring"
    },
    {
      title: "Hardware becomes a sensing layer",
      text: "Repeated inspections create asset histories; repeated ocean observations create behavioural histories. The compounding value sits in what those histories allow you to infer.",
      signal: "Data → intelligence"
    },
    {
      title: "India gets a deep-tech funding bridge",
      text: "The RDI Scheme explicitly prioritises robotics and space — useful for companies whose technical milestones arrive long before software-style revenue does.",
      signal: "R&D → commercial scale"
    }
  ],

  commonFlow: [
    {
      company: "Octobotics",
      color: "octo",
      steps: ["Hazardous asset", "Robot + NDT", "Repeated condition history", "Asset intelligence", "Maintenance decision"],
      test: "Does inspection output grow faster than field labour?"
    },
    {
      company: "PierSight",
      color: "pier",
      steps: ["Ocean / vessel", "SAR + AIS", "Repeated behaviour history", "Maritime intelligence", "Security / commercial decision"],
      test: "Does intelligence revenue grow faster than satellite count?"
    }
  ],

  companies: {
    octobotics: {
      name: "Octobotics",
      accent: "#f6a73b",
      category: "ROBOTICS · NDT · ASSET INTEGRITY",
      stage: "Seed / early commercial",
      rdi: "2.7 Intelligent Systems & Robotics · 2.3 Advanced Manufacturing & Robotics",
      status: "Pursue diligence",
      oneLine: "A mandatory inspection budget converted from hazardous manual work into robotic, repeatable field operations.",
      thesis: "The base case is not SaaS. It is operating leverage: inspection capacity and revenue must grow faster than skilled field labour. Predictive asset intelligence is upside if repeated data and reuse rights emerge.",
      metric: "Revenue / field engineer",
      metricWhy: "If this rises alongside inspections per robot, the technology is creating leverage rather than merely adding equipment to a services team.",
      kill: "Growth remains roughly proportional to field headcount and every new vertical needs heavy custom engineering.",
      catalyst: "Hazardous-area certification + repeat / multi-site deployments",
      map: [
        {label:"01 · CURRENT", title:"What exists today", short:"Robotic NDT inspection across tanks, pipelines, welds and other critical assets.", detail:"Octobotics combines robotic deployment with NDT workflows such as UT / PAUT / TOFD and digital inspection outputs. The near-term product is a field service delivered with robotics — not a pure software licence."},
        {label:"02 · WHITE SPACE", title:"Where the gap is", short:"Inspection is mandatory, but access is still labour-heavy, risky and often slow.", detail:"The company does not need to invent a budget. Asset owners already spend on inspection. The wedge is to replace scaffolding, work-at-height, confined access and manually sampled workflows with safer, repeatable robotic coverage."},
        {label:"03 · WHY NOW", title:"The economic crossover", short:"The problem is old; reliable field robotics is becoming economically viable now.", detail:"Better sensing, controls, batteries and autonomy reduce deployment friction while safety, downtime and skilled-labour constraints increase the cost of manual access. The inflection is economic, not the discovery of a new problem."},
        {label:"04 · COMPETITION", title:"The category is already validated", short:"Gecko globally; PetroBot and Solinas in India.", detail:"PetroBot is the most important Indian head-to-head because it publicly claims hazardous-area certifications and substantial deployment history. That weakens any 'no competition' story, but it also proves that robotic NDT can clear industrial adoption barriers."},
        {label:"05 · ADVANTAGE", title:"What can still differentiate", short:"Field reliability + NDT workflow + reusable platform + customer trust.", detail:"A crawler alone is not the moat. The investment case depends on the combination of reliable field execution, certification, NDT know-how and how much hardware / autonomy / software can be reused across asset classes without rebuilding the company each time."},
        {label:"06 · END-STATE", title:"Asset integrity layer", short:"Inspection first. Operating leverage second. Predictive intelligence later.", detail:"If repeated digital inspections build a useful history of how specific assets age, Octobotics can move from 'we inspected it' toward condition trends and maintenance decisions. I treat that as upside until data rights and willingness-to-pay are proven."}
      ],
      competitors: [
        {name:"PetroBot", type:"Indian head-to-head", threat:"High", why:"Similar robotic NDT category with public certification and deployment claims.", response:"Do not pretend Octobotics is uncontested. Underwrite earlier entry, platform reuse, customer expansion and geography — and verify post-certification differentiation."},
        {name:"Gecko Robotics", type:"Scaled global incumbent", threat:"High", why:"Proves the category can scale into large industrial and defence accounts.", response:"Octobotics cannot win on generic robotics. The wedge has to be local economics, service model, market access and faster fit for India / regional industrial workflows."},
        {name:"Solinas", type:"Adjacent Indian robotics", threat:"Medium", why:"Better-funded adjacent robotics player that can converge into inspection use cases.", response:"The test is specialist depth versus generalist capital: does Octobotics build enough asset-integrity workflow advantage before adjacent players move in?"},
        {name:"Traditional NDT / TIC", type:"Incumbent workflow", threat:"Medium", why:"Trusted service providers already own customer relationships and inspection budgets.", response:"The opportunity is to become their technology layer, partner, or ultimately a more scalable alternative — not assume customers abandon trusted providers overnight."}
      ],
      customers: [
        ["Oil & gas / refineries", "Tank shells, piping, welds, external asset integrity"],
        ["Marine / shipyards", "Hull and structural inspection"],
        ["Rail", "Track / weld inspection and repeat testing"],
        ["Heavy industry", "Hard-to-access structures where shutdown and safety matter"]
      ],
      challengeIds: ["octo-petrobot", "octo-data", "octo-services"],
      founderQuestions: [
        ["Walk me through your last ten inspection jobs — fully loaded cost versus price.", "Tests contribution margin and whether management truly knows job-level economics."],
        ["When you enter a new vertical, what percentage of hardware, autonomy and software is reused?", "Separates a platform from several custom-engineering businesses."],
        ["Show me the dated path to hazardous-area certification and the pipeline it unlocks.", "Tests whether certification is a real commercial catalyst, not a logo on a slide."],
        ["If I gave you ₹50 crore tomorrow, what grows first: robots, engineers or inspection output?", "Reveals whether the team thinks in operating leverage or headcount."],
        ["What inspection data do you contractually retain the right to reuse?", "Tests whether the future analytics layer is legally and commercially buildable."]
      ]
    },

    piersight: {
      name: "PierSight",
      accent: "#53c9ff",
      category: "SPACE · SAR/AIS · MARITIME INTELLIGENCE",
      stage: "Seed / post-demonstrator",
      rdi: "2.5 Space Technologies · remote sensing · space intelligence",
      status: "Pursue diligence",
      oneLine: "A maritime-specific observation network trying to turn persistent ocean sensing into a recurring intelligence product.",
      thesis: "The bet is not 'another SAR satellite'. It is whether lower-cost persistent maritime observation can be monetised repeatedly across security, insurance, compliance and trading workflows — with MATSYA becoming the decision layer.",
      metric: "Recurring analytics revenue / satellite",
      metricWhy: "If this rises, the same physical infrastructure is being monetised more richly. If it stays flat, growth is still being purchased with satellite capex.",
      kill: "Revenue remains primarily per-image / per-tasking and MATSYA creates little measurable value above commodity data.",
      catalyst: "Commercial-grade operational satellite + paying, renewing intelligence customer",
      map: [
        {label:"01 · CURRENT", title:"What exists today", short:"Varuna demonstrated in orbit; MATSYA is the intelligence layer being built.", detail:"PierSight publicly describes a maritime-first SAR + AIS architecture, a target constellation and MATSYA — software intended to fuse multiple data sources into alerts and maritime queries. The scaled network and recurring analytics business remain ahead."},
        {label:"02 · WHITE SPACE", title:"Persistent, affordable surveillance", short:"Wide-area awareness rather than only premium point-tasking.", detail:"AIS can be disabled or spoofed and optical imagery is constrained by cloud and darkness. PierSight is trying to make SAR-based monitoring economical enough to watch maritime activity persistently rather than only task a satellite once a suspicious location is already known."},
        {label:"03 · WHY NOW", title:"Private space meets maritime urgency", short:"Smaller SAR, cheaper launch and private capital meet a more valuable need for maritime truth.", detail:"The timing is a convergence of private-space infrastructure, smaller satellite economics and rising demand around dark vessels, illegal fishing, sanctions exposure, shipping risk and sovereign maritime awareness."},
        {label:"04 · COMPETITION", title:"The use case is already proven", short:"ICEYE / Capella / RF-intelligence players validate demand.", detail:"PierSight did not invent maritime surveillance or dark-vessel detection. The diligence question is whether its maritime-specific architecture produces better cost / coverage / latency for persistence — and whether that advantage is converted into a proprietary intelligence product."},
        {label:"05 · ADVANTAGE", title:"Head start must become a moat", short:"Founder experience, flight heritage and regional positioning are leads, not permanent protection.", detail:"Most technical choices can eventually be copied. The durable layer has to be earned through repeated observations, historical vessel behaviour, workflow integration and trust. Sovereign / regional positioning can improve go-to-market, but it is not a closed market."},
        {label:"06 · END-STATE", title:"Bloomberg for the ocean", short:"Observation becomes a common decision layer across security and commerce.", detail:"A Coast Guard buys threat intelligence; an insurer buys vessel-risk history; a bank buys sanctions intelligence; a trader buys physical-flow signals. The same observation can support different decisions — which is where the non-linear economics can emerge."}
      ],
      competitors: [
        {name:"ICEYE", type:"Scaled SAR incumbent", threat:"Very high", why:"Already has flight heritage, constellation scale and maritime products.", response:"PierSight should not compete on 'we also have SAR'. It must prove maritime-specific persistence economics and a decision layer that customers value above raw imagery."},
        {name:"Capella Space", type:"SAR incumbent", threat:"High", why:"High-quality SAR and maritime awareness validate the same customer problem.", response:"The differentiation has to be architecture / economics / regional workflow fit — not basic vessel detection."},
        {name:"HawkEye 360 / Unseenlabs", type:"RF substitutes", threat:"Medium-high", why:"Attack dark-vessel and maritime-domain-awareness problems through RF rather than SAR.", response:"This broadens the competitive frame: customers buy maritime truth, not a sensor. MATSYA should ingest complementary signals rather than act like SAR alone solves the problem."},
        {name:"Pure analytics platforms", type:"Software unbundling threat", threat:"High", why:"Could buy imagery from multiple providers and own the higher-margin intelligence layer.", response:"Owning satellites must measurably improve latency, accuracy, historical continuity or unit economics. Otherwise the capital-intensive layer is unnecessary."}
      ],
      customers: [
        ["Navy / Coast Guard", "Persistent EEZ awareness, dark vessels, suspicious activity"],
        ["Marine insurance / P&I", "Behavioural risk, claims context, sanctions exposure"],
        ["Banks / trade finance / compliance", "Vessel screening, sanctions and cargo-risk context"],
        ["Commodity traders", "Physical flows, congestion and ship-to-ship activity"],
        ["Ports / shipping", "Traffic, disruption and operating visibility"]
      ],
      challengeIds: ["pier-iceye", "pier-matsya", "pier-capex"],
      founderQuestions: [
        ["Show me the economics at satellite 5, 15 and 32 — when does recurring revenue switch on?", "Tests whether the network can create value before full constellation density."],
        ["Quantify the advantage of your maritime architecture versus externally fused SAR + AIS.", "Forces technical differentiation into latency, accuracy, cost or coverage."],
        ["What percentage of future revenue should come from imagery / tasking versus recurring intelligence?", "Reveals whether the team is building an imagery utility or intelligence platform."],
        ["How many different paid workflows can consume the same observation without new tasking?", "Tests the multi-tenant monetisation thesis directly."],
        ["Would a customer pay MATSYA to analyse third-party data? What gets better with PierSight data?", "Tests standalone software value and why owning the sensing layer still matters."]
      ]
    }
  },

  challenges: [
    {
      id:"octo-petrobot", company:"Octobotics", title:"Why not PetroBot instead?", severity:"High",
      bear:"PetroBot appears ahead on publicly claimed hazardous-area certification and has strategic backing from major oil & gas players. If both companies converge on the same product and customers, Octobotics risks being an earlier, less de-risked version of the same bet.",
      response:"I treat PetroBot as category validation, not something to dismiss. Octobotics only remains interesting if the earlier entry price plus future certification, platform reuse, customer expansion or geography creates enough upside. Competition is acceptable; undifferentiated competition is not.",
      falsifier:"Primary customer calls show no meaningful difference in win-rate, platform reuse, economics or post-certification opportunity."
    },
    {
      id:"octo-data", company:"Octobotics", title:"Is the data moat just a story?", severity:"Medium",
      bear:"Industrial customers may own the inspection data, restrict reuse, or simply refuse to pay for predictive software. In that case 'asset intelligence' is a narrative layered on top of a field-services business.",
      response:"I do not underwrite the seed investment on a data moat. The base case is operating leverage in inspection. Data becomes upside only when reuse rights, repeated histories and customer willingness-to-pay are proven.",
      falsifier:"The company cannot retain meaningful derived-data rights and customers consistently pay only for one-off inspection output."
    },
    {
      id:"octo-services", company:"Octobotics", title:"What if robotics never breaks the services model?", severity:"Critical",
      bear:"If every incremental inspection requires proportional field labour, travel and hardware, the company may grow but still look like a technically sophisticated services firm.",
      response:"This is the master investment test. I want inspections per robot, utilisation and revenue per field engineer to rise over time. SaaS is optional; operating leverage is not.",
      falsifier:"After deployment density improves, revenue growth still tracks headcount roughly one-for-one."
    },
    {
      id:"pier-iceye", company:"PierSight", title:"Why does PierSight need to exist if ICEYE already does maritime SAR?", severity:"High",
      bear:"ICEYE has more capital, flight heritage, customers and an existing constellation. A smaller Indian company can easily become 'ICEYE, but younger' unless the architecture creates a different economic product.",
      response:"PierSight should not try to win generic SAR. The case rests on persistent maritime economics: enough resolution, lower cost, suitable coverage and an intelligence layer built around maritime workflows. If that advantage is not measurable, the thesis weakens sharply.",
      falsifier:"At comparable customer outcomes, PierSight cannot show a material advantage in cost, coverage, latency or workflow value."
    },
    {
      id:"pier-matsya", company:"PierSight", title:"What if MATSYA is only a dashboard?", severity:"Critical",
      bear:"If MATSYA mainly visualises detections or imagery, the highest-value layer remains commodity satellite data and customers can unbundle sensing from analytics.",
      response:"A real intelligence product should fuse signals, create verdicts / risk scores / alerts, improve with history and become embedded via API into customer decisions. It should be paid for as intelligence, not merely as a UI attached to tasking.",
      falsifier:"Customers still need analysts to inspect raw imagery before acting and pricing remains tied to images / tasking rather than recurring outcomes."
    },
    {
      id:"pier-capex", company:"PierSight", title:"What if strong demand actually makes the business more capital-hungry?", severity:"High",
      bear:"If every new geography or customer consumes dedicated capacity, demand forces more satellite launches. Revenue rises, but only because capex rises with it.",
      response:"The escape is repeated monetisation: one observation supporting several commercial or security workflows. That is why recurring analytics revenue per satellite is the core metric.",
      falsifier:"Revenue per satellite stays flat while the company repeatedly raises capital just to add equivalent new capacity."
    }
  ],

  timeline: {
    octobotics: [
      ["Initial view", "The vertically integrated robot + sensor + analytics stack looked like the moat."],
      ["Contrary evidence", "PetroBot appeared at least as advanced on publicly claimed hazardous-area certification and customer validation."],
      ["Reframe", "Competition validates robotic NDT; the seed opportunity is backing Octobotics before equivalent de-risking milestones are priced in."],
      ["Current thesis", "Do not require SaaS. Underwrite operating leverage first: inspection capacity and revenue must grow faster than field labour."]
    ],
    piersight: [
      ["Initial view", "Maritime SAR + AIS looked uniquely hard to replicate."],
      ["Contrary evidence", "ICEYE, Capella and RF-intelligence players already provide much of the customer outcome."],
      ["Reframe", "The thesis is not technical novelty; it is persistent maritime economics plus repeated monetisation of observations."],
      ["Current thesis", "The company becomes venture-scale only if MATSYA turns observation into recurring intelligence whose revenue grows faster than satellite count."]
    ]
  },

  evidence: [
    {company:"Octobotics", type:"fact", claim:"Octobotics markets robotic inspection workflows across tanks, pipelines / corrosion and weld inspection, and lists advanced NDT capabilities including UT / PAUT / TOFD.", source:"OCTO_HOME", quality:"Primary"},
    {company:"Octobotics", type:"fact", claim:"Its technology material shows magnetic / underwater crawler concepts and swappable NDT tooling; at least some instrumentation is third-party rather than wholly proprietary.", source:"OCTO_TECH", quality:"Primary"},
    {company:"Octobotics", type:"fact", claim:"PetroBot publicly claims ATEX and PESO certification for Zone 0/1/2 and strategic backing from ONGC and HPCL.", source:"PETROBOT", quality:"Competitor primary"},
    {company:"Octobotics", type:"assumption", claim:"Hazardous-area certification should unlock a materially larger refinery / live-asset pipeline.", source:null, quality:"Needs founder / customer validation"},
    {company:"Octobotics", type:"thesis", claim:"Platform reuse across asset classes matters more than whether every component is proprietary.", source:null, quality:"Investment view"},
    {company:"Octobotics", type:"risk", claim:"If revenue and inspection capacity only grow with field headcount, the business remains services-heavy.", source:null, quality:"Kill criterion"},

    {company:"PierSight", type:"fact", claim:"PierSight says Varuna completed its primary in-orbit objectives after launching on PSLV-C60 in December 2024.", source:"PIER_VARUNA", quality:"Primary"},
    {company:"PierSight", type:"fact", claim:"PierSight publicly targets a maritime SAR+AIS constellation and presents ~1m resolution / ~30-minute revisit as target-state capabilities rather than a fully deployed network today.", source:"PIER_HOME", quality:"Primary"},
    {company:"PierSight", type:"fact", claim:"PierSight describes MATSYA as fusing SAR, AIS, optical and terrestrial data into maritime monitoring / query workflows.", source:"PIER_MATSYA", quality:"Primary"},
    {company:"PierSight", type:"assumption", claim:"A meaningful share of commercial intelligence can be sold repeatedly from overlapping observations rather than requiring bespoke tasking for each customer.", source:null, quality:"Needs commercial validation"},
    {company:"PierSight", type:"thesis", claim:"The end-state is an intelligence layer — 'Bloomberg for the ocean' — not a price-per-image SAR utility.", source:null, quality:"Investment view"},
    {company:"PierSight", type:"risk", claim:"If recurring analytics revenue does not grow faster than satellite count / capex, the model remains capital-intensive and linear.", source:null, quality:"Kill criterion"}
  ],

  sources: {
    RDI: {title:"DST — Research, Development & Innovation Scheme", url:"https://dst.gov.in/node/8255", note:"RDI policy context; Deep Technology includes robotics and space.", kind:"Policy"},
    OCTO_HOME: {title:"Octobotics — Official site", url:"https://www.octobotics.tech/", note:"Products, solutions and company positioning.", kind:"Company primary"},
    OCTO_TECH: {title:"Octobotics — Technology", url:"https://www.octobotics.tech/technology", note:"Crawler architecture and NDT tooling.", kind:"Company primary"},
    PETROBOT: {title:"PetroBot — Official site", url:"https://petrobot.co.in/", note:"Competitor certification, deployment and strategic-investor claims.", kind:"Competitor primary"},
    PIER_HOME: {title:"PierSight — Official site", url:"https://piersight.space/", note:"Maritime SAR positioning and target-state capabilities.", kind:"Company primary"},
    PIER_VARUNA: {title:"PierSight — Varuna", url:"https://piersight.space/systems/varuna", note:"Company description of Varuna mission / in-orbit demonstration.", kind:"Company primary"},
    PIER_MATSYA: {title:"PierSight — MATSYA / product vision", url:"https://piersight.space/blog/varuna-paved-the-way-now-drone-sar-and-matsya-take-over", note:"MATSYA description and intended maritime use cases.", kind:"Company primary"},
    ICEYE: {title:"ICEYE — Maritime Domain Awareness", url:"https://www.iceye.com/sar-data/use-cases/maritime-domain-awareness", note:"Global category validation for SAR-based maritime surveillance.", kind:"Incumbent primary"},
    IFR: {title:"International Federation of Robotics — World Robotics 2025", url:"https://ifr.org/worldrobotics/report-2025", note:"Industrial robotics market benchmark.", kind:"Industry"}
  },

  suggestions: [
    "Why isn't PetroBot the better investment?",
    "How does PierSight become non-linear?",
    "What would make you walk away from Octobotics?",
    "Why is MATSYA more than a dashboard?",
    "What is the common thesis across both companies?",
    "What would you ask the PierSight founders first?"
  ],

  corpus: [
    {company:"Both", type:"thesis", tags:"common thesis physical systems observation sensing data intelligence hardware", text:"The common thesis is not robotics plus space for their own sake. Both companies use difficult physical systems to capture information that is expensive or unreliable to obtain today. The venture outcome appears only if that information compounds into a recurring decision layer.", sources:["RDI"]},
    {company:"Octobotics", type:"fact", tags:"robotic NDT UT PAUT TOFD tanks pipelines weld inspection", text:"Octobotics publicly offers robotic inspection workflows for tanks, pipelines / corrosion and welds, and lists UT, PAUT and TOFD among its NDT capabilities.", sources:["OCTO_HOME"]},
    {company:"Octobotics", type:"fact", tags:"petrobot competition certification ATEX PESO ONGC HPCL", text:"PetroBot is a serious Indian competitor. It publicly states ATEX and PESO hazardous-area certifications for Zone 0/1/2 and strategic backing from ONGC and HPCL.", sources:["PETROBOT"]},
    {company:"Octobotics", type:"thesis", tags:"petrobot better investment competitor why invest octobotics", text:"PetroBot's progress is category validation, not a reason to pretend competition is absent. Octobotics is investable only if the earlier entry price plus future certification, platform reuse, customer expansion or geography creates enough upside. If post-certification differentiation is weak, the thesis becomes an execution-and-price bet.", sources:["PETROBOT","OCTO_HOME"]},
    {company:"Octobotics", type:"risk", tags:"walk away linear headcount services margin", text:"The master kill criterion is linearity: if inspection capacity and revenue can only grow by adding field engineers and robots in roughly the same proportion, Octobotics remains an industrial services business rather than a venture-scale technology platform.", sources:[]},
    {company:"Octobotics", type:"thesis", tags:"data moat analytics asset health predictive maintenance", text:"A data / asset-health layer is upside, not base-case underwriting. Repeated digital inspections could eventually support condition trends and predictive maintenance, but this only matters if Octobotics has sufficient reuse rights and customers actually pay for the intelligence layer.", sources:["OCTO_HOME"]},
    {company:"Octobotics", type:"thesis", tags:"founder questions diligence certification platform reuse field engineer", text:"The highest-information questions are job-level contribution margin, percentage of platform reuse when entering a new vertical, dated certification milestones and whether inspection output can grow faster than field headcount.", sources:[]},

    {company:"PierSight", type:"fact", tags:"Varuna orbit demonstrator SAR AIS constellation 30 minute revisit", text:"PierSight says its Varuna demonstrator completed its primary mission objectives in orbit. Its public target state is a maritime SAR+AIS constellation with ~1m resolution and ~30-minute revisit; the full network is not yet deployed.", sources:["PIER_VARUNA","PIER_HOME"]},
    {company:"PierSight", type:"fact", tags:"MATSYA analytics dashboard SAR AIS optical terrestrial natural language", text:"PierSight describes MATSYA as a maritime analytics layer that combines SAR, AIS, optical and terrestrial sources and supports alerts / query workflows.", sources:["PIER_MATSYA","PIER_HOME"]},
    {company:"PierSight", type:"thesis", tags:"non linear recurring analytics revenue per satellite scaling", text:"PierSight becomes non-linear when recurring intelligence revenue grows faster than satellite count. That requires overlapping observations to support multiple paid workflows — security, insurance, compliance and trading — instead of every incremental dollar consuming equivalent new tasking capacity.", sources:["PIER_HOME"]},
    {company:"PierSight", type:"thesis", tags:"Bloomberg ocean end state customers coast guard insurer bank trader", text:"The end-state is 'Bloomberg for the ocean': a common maritime intelligence layer where a Coast Guard buys threat intelligence, an insurer buys behavioural risk, a bank buys sanctions intelligence, and a trader buys physical-flow signals from overlapping observation infrastructure.", sources:["PIER_MATSYA"]},
    {company:"PierSight", type:"risk", tags:"walk away imagery utility capital intensity satellite count", text:"The thesis weakens sharply if MATSYA remains a dashboard and revenue stays priced per image, per tasking or per kilometre of coverage. In that case growth remains tied to capital expenditure and PierSight behaves like an imagery utility.", sources:["PIER_HOME"]},
    {company:"PierSight", type:"thesis", tags:"third party imagery MATSYA analytics own satellites", text:"MATSYA being able to ingest third-party data is not a problem by itself. The key test is whether PierSight's own observations and historical data measurably improve latency, accuracy, prediction or unit economics. Owning satellites must create an advantage, not an artificial technical dependency.", sources:["PIER_MATSYA"]},
    {company:"PierSight", type:"fact", tags:"competition ICEYE incumbent maritime SAR dark vessels", text:"Global SAR incumbents already validate maritime surveillance, so PierSight should not be underwritten on novelty of SAR or dark-vessel detection. Its case rests on maritime-specific economics and turning observation into recurring intelligence.", sources:["ICEYE","PIER_HOME"]},
    {company:"PierSight", type:"thesis", tags:"founder questions diligence satellite 5 15 32 economics third party data", text:"The highest-information questions are when recurring revenue switches on as the constellation scales, the measurable advantage of the maritime architecture, how many paid workflows can reuse an observation, and what MATSYA gains from PierSight's own data versus third-party feeds.", sources:[]}
  ]
};
