const notebookData = {
  thesis: {
    headline: "India's next deep-tech inflection is not simply ‘more robots’ or ‘more satellites’; it is the conversion of physical systems into data/intelligence platforms.",
    closing: "India's next decade of deep tech will be won by companies that use indigenous hardware to capture difficult physical-world data, then compound it into recurring intelligence.",
    inflections: [
      {
        number: "01",
        title: "Physical AI crosses the deployment threshold",
        body: "Sensors, edge compute, perception and autonomy are becoming cheap and reliable enough for robots to move from structured factories into hazardous, variable environments. India installed a record 9,100 industrial robots in 2024 and became the world's 6th-largest market. The next step is domain-specific autonomy—inspection, maintenance and defence—not generic automation.",
        sourceIds: ["IFR"]
      },
      {
        number: "02",
        title: "Space moves from state infrastructure to commercial utility",
        body: "IN-SPACe targets a $44B Indian space economy by 2033; the 2024 FDI regime allows up to 74% automatic investment in satellite manufacturing/operations/data products. Small satellites, cheaper launches and private constellations make high-frequency Earth observation economically possible. The important shift is from selling images to selling recurring intelligence.",
        sourceIds: ["INSPACE_44", "PIB_FDI"]
      },
      {
        number: "03",
        title: "Hardware becomes the data-acquisition wedge",
        body: "A robot inspecting a refinery and a SAR satellite observing a shipping lane create proprietary longitudinal datasets. Over time, value can migrate from one-off hardware/services to predictive asset health, risk scores, alerts and APIs. That creates software-like operating leverage on top of hard-to-replicate physical infrastructure.",
        sourceIds: []
      },
      {
        number: "04",
        title: "India now has a capital-policy bridge for long-gestation R&D",
        body: "The ₹1 lakh crore RDI Scheme explicitly targets private-sector robotics and space, including transformative projects at TRL-4 and above. This can shorten the ‘lab-to-commercial-scale’ funding gap that historically constrained Indian deep-tech companies.",
        sourceIds: ["RDI"]
      }
    ]
  },

  commonFlow: [
    {
      company: "Octobotics",
      key: "octobotics",
      kicker: "PHYSICAL ACCESS",
      steps: ["Hazardous asset", "Robot + NDT", "Repeated condition history", "Asset intelligence", "Maintenance decision"],
      test: "Does inspection output grow faster than field labour?"
    },
    {
      company: "PierSight",
      key: "piersight",
      kicker: "PHYSICAL OBSERVATION",
      steps: ["Ocean / vessel", "SAR + AIS", "Repeated behaviour history", "Maritime intelligence", "Security / commercial decision"],
      test: "Does intelligence revenue grow faster than satellite count?"
    }
  ],

  companies: {
    octobotics: {
      name: "Octobotics",
      accent: "#F2A65A",
      category: "ROBOTICS · NDT · ASSET INTEGRITY",
      stage: "Seed / early commercial",
      status: "Pursue diligence",
      rdi: "RDI Deep Technology · 2.7 Intelligent Systems & Robotics · overlaps with 2.3 Advanced Manufacturing & Robotics",
      oneLine: "A mandatory inspection budget converted from hazardous manual work into robotic, repeatable field operations.",
      thesis: "The base case is not SaaS. It is operating leverage: inspection capacity and revenue must grow faster than skilled field labour. Predictive asset intelligence is upside if repeated data and reuse rights emerge.",
      metric: "Revenue / field engineer",
      metricWhy: "If this rises alongside inspections per robot, robotics is creating operating leverage rather than simply adding equipment to a services team.",
      catalyst: "Hazardous-area certification + repeat / multi-site deployments",
      kill: "Growth remains roughly proportional to field headcount and every new vertical needs heavy custom engineering.",
      sections: [
        {
          label: "01 · CURRENT OPERATIONS",
          title: "Robotic NDT delivered as a field service",
          body: "Octobotics is building robotic inspection systems for hard-to-access industrial assets and pairs the hardware with NDT workflows such as UT, PAUT and TOFD. Its services-led model matters: the customer can buy an inspection outcome instead of taking capex and deployment risk on a robot.",
          sourceIds: ["OCTO_HOME", "OCTO_TECH"]
        },
        {
          label: "02 · WHITE SPACE",
          title: "Modernise an existing mandatory inspection budget",
          body: "Refineries, tanks, ships, piping and rail assets already have to be inspected. The gap is that access can still depend on scaffolding, shutdown windows, work at height and skilled manual NDT. Octobotics does not need to create demand; it needs to prove robotics is a safer, more repeatable way to spend an existing budget.",
          sourceIds: []
        },
        {
          label: "03 · WHY NOW / POTENTIAL",
          title: "The problem is old; the economic crossover is new",
          body: "Better sensing, edge compute, controls and autonomy reduce the cost of reliable field deployment while safety, downtime and specialist-labour constraints raise the cost of manual access. If one core robotics/software platform can stretch across asset classes, each new vertical expands TAM without recreating the company.",
          sourceIds: ["IFR"]
        },
        {
          label: "04 · WHO DOES THIS / REPLICATION",
          title: "The category is validated—and that is useful",
          body: "Gecko Robotics is the global scaled benchmark; PetroBot is the most important Indian head-to-head; Solinas is an adjacent Indian robotics threat. Replication is harder than building a crawler because robotics, NDT know-how, certifications, field reliability and industrial trust all have to work together.",
          sourceIds: ["PETROBOT", "GECKO", "SOLINAS"]
        },
        {
          label: "05 · ADVANTAGE VS COMPETITION",
          title: "The real test is platform reuse and field execution",
          body: "Against new entrants, Octobotics has early field learning and customer references. Against incumbents, its wedge is a lower-friction service model and potentially broader reuse across industrial, marine and rail workflows. I would not underwrite proprietary hardware alone; I would underwrite whether the stack can be reused and whether certification creates a commercial step-up.",
          sourceIds: ["OCTO_HOME", "PETROBOT"]
        },
        {
          label: "06 · END-STATE / VENTURE SCALE",
          title: "From inspection company to asset-integrity intelligence layer",
          body: "The first layer is robotic inspection. The second is operating leverage: more inspections per robot and per field engineer. The higher-margin upside is repeated digital inspection history becoming condition trends and predictive maintenance intelligence. My venture-scale test is simple: revenue and inspection capacity must grow materially faster than field headcount.",
          sourceIds: []
        }
      ],
      customers: [
        ["Oil & gas / refineries", "Tank shells, piping, welds, external asset integrity"],
        ["Marine / shipyards", "Hull and structural inspection"],
        ["Rail", "Track / weld inspection and repeat testing"],
        ["Heavy industry", "Hard-to-access structures where shutdown and safety matter"]
      ],
      competitors: [
        {
          name: "PetroBot",
          type: "Indian head-to-head",
          threat: "High",
          why: "Similar robotic NDT category with public hazardous-area certification and deployment claims.",
          response: "Treat PetroBot as category validation. Octobotics still needs to prove enough post-certification differentiation through platform reuse, customers, geography or economics."
        },
        {
          name: "Gecko Robotics",
          type: "Scaled global incumbent",
          threat: "High",
          why: "Shows that robotic asset inspection can scale into large industrial and defence accounts.",
          response: "Octobotics cannot win on generic robotics. The wedge has to be regional economics, service delivery, faster fit for local workflows and eventually data / workflow depth."
        },
        {
          name: "Solinas",
          type: "Adjacent Indian robotics",
          threat: "Medium",
          why: "A better-funded adjacent inspection robotics player can converge into more asset-integrity workflows.",
          response: "The question is specialist depth versus generalist capital: can Octobotics build a strong enough asset-integrity workflow before adjacent players move in?"
        },
        {
          name: "Traditional NDT / TIC",
          type: "Incumbent workflow",
          threat: "Medium",
          why: "Trusted service providers already own customer relationships and inspection budgets.",
          response: "The realistic route may include partnering with incumbents or becoming their technology layer—not assuming customers rip out trusted providers overnight."
        }
      ],
      founderQuestions: [
        ["Walk me through your last ten inspection jobs—fully loaded cost versus price.", "Tests job-level contribution margin and whether management actually knows the economics."],
        ["When you enter a new vertical, what percentage of hardware, autonomy and software is reused?", "Separates a platform from several custom-engineering businesses."],
        ["Show me the dated path to hazardous-area certification and the pipeline it unlocks.", "Tests whether certification is a real commercial catalyst rather than a slide milestone."],
        ["If I gave you ₹50 crore tomorrow, what grows first: robots, engineers or inspection output?", "Reveals whether the team thinks in operating leverage or headcount."],
        ["What inspection data do you contractually retain the right to reuse?", "Tests whether the future analytics layer is legally and commercially buildable."]
      ]
    },

    piersight: {
      name: "PierSight",
      accent: "#53C9FF",
      category: "SPACE · SAR/AIS · MARITIME INTELLIGENCE",
      stage: "Seed / post-demonstrator",
      status: "Pursue diligence",
      rdi: "RDI Deep Technology · 2.5 Space Technologies · satellite systems, remote sensing, space intelligence and next-gen Earth-observation payloads",
      oneLine: "A maritime-specific observation network trying to turn persistent ocean sensing into a recurring intelligence product.",
      thesis: "The bet is not ‘another SAR satellite’. It is whether lower-cost persistent maritime observation can be monetised repeatedly across security, insurance, compliance and trading workflows—with MATSYA becoming the decision layer.",
      metric: "Recurring analytics revenue / satellite",
      metricWhy: "If this rises, the same physical infrastructure is being monetised more richly. If it stays flat, growth is still being purchased with satellite capex.",
      catalyst: "Commercial-grade operational satellite + paying, renewing intelligence customer",
      kill: "Revenue remains primarily per-image / per-tasking and MATSYA creates little measurable value above commodity data.",
      sections: [
        {
          label: "01 · CURRENT OPERATIONS",
          title: "Maritime-first SAR + AIS, with MATSYA above it",
          body: "PierSight has flown its Varuna technology demonstrator and is building toward a maritime-focused SAR + AIS constellation. MATSYA is the planned intelligence layer that combines observation with other maritime signals. The scaled network and recurring analytics business are still ahead, which is exactly where the investment risk—and upside—sits.",
          sourceIds: ["PIER_VARUNA", "PIER_HOME", "PIER_MATSYA"]
        },
        {
          label: "02 · WHITE SPACE",
          title: "Persistent ocean awareness instead of only reactive imagery",
          body: "AIS can be disabled or spoofed, optical imagery is constrained by cloud and darkness, and premium SAR is often tasked after suspicion already exists. PierSight is designing around a different job: affordable, wide-area maritime persistence that can answer not just ‘what is there?’ but eventually ‘what is this vessel doing and why does it matter?’",
          sourceIds: ["PIER_HOME", "ICEYE"]
        },
        {
          label: "03 · WHY NOW / POTENTIAL",
          title: "Private space, cheaper sensing and maritime urgency converge",
          body: "India's space market is opening to private capital while Earth observation is moving toward smaller, more frequent constellations. At the same time, sanctions evasion, dark vessels, IUU fishing and maritime security make persistent vessel intelligence more valuable. The opportunity extends beyond governments into insurance, trade finance, compliance and commodity markets.",
          sourceIds: ["INSPACE_44", "PIB_FDI", "PIER_HOME"]
        },
        {
          label: "04 · WHO DOES THIS / REPLICATION",
          title: "The use case is globally validated; the stack is still difficult",
          body: "ICEYE and Capella validate SAR-based maritime surveillance; HawkEye 360 and Unseenlabs attack parts of the same dark-vessel problem from RF. PierSight did not invent maritime intelligence. What takes time to recreate is flight heritage, constellation deployment, mission economics, customer trust and eventually a longitudinal vessel-behaviour dataset.",
          sourceIds: ["ICEYE", "CAPELLA", "HAWKEYE", "UNSEENLABS"]
        },
        {
          label: "05 · ADVANTAGE VS COMPETITION",
          title: "A specialist architecture can still beat a larger generalist on economics",
          body: "Against new entrants, PierSight has founder SAR experience, flown hardware and early institutional access. Against incumbents, the opportunity is a maritime-specific architecture optimised for persistence rather than maximum resolution, plus an Indian sovereign / regional positioning. These are advantages, not permanent moats; they must become customer lock-in and better data economics.",
          sourceIds: ["PIER_HOME", "ICEYE"]
        },
        {
          label: "06 · END-STATE / VENTURE SCALE",
          title: "‘Bloomberg for the ocean’",
          body: "The end-state is one intelligence layer used by coast guards, insurers, banks, compliance teams and traders. A single observation can support multiple decisions: threat detection, vessel-risk history, sanctions exposure and commodity-flow signals. Government can anchor the constellation, but venture-scale economics require MATSYA subscriptions and APIs to make recurring intelligence revenue grow faster than satellite count.",
          sourceIds: ["PIER_MATSYA"]
        }
      ],
      customers: [
        ["Navies / Coast Guards", "Dark-vessel detection, EEZ awareness, suspicious activity"],
        ["Marine insurers / P&I", "Behavioural risk, claims, sanctions and route history"],
        ["Banks / compliance", "Vessel-risk and sanctions screening for trade / cargo finance"],
        ["Commodity traders", "Physical-flow, port and tanker intelligence"],
        ["Ports / shipping", "Congestion, arrival and route intelligence"]
      ],
      competitors: [
        {
          name: "ICEYE",
          type: "Scaled SAR incumbent",
          threat: "Very high",
          why: "Already has constellation scale, flight heritage and maritime-domain-awareness products.",
          response: "PierSight must win on economics of persistence, regional fit and intelligence product—not claim SAR itself is novel."
        },
        {
          name: "Capella Space",
          type: "High-resolution SAR incumbent",
          threat: "High",
          why: "Strong SAR capability and existing dark-vessel / maritime use cases.",
          response: "The specialist thesis only works if PierSight's maritime architecture delivers materially better coverage economics for the job customers actually need."
        },
        {
          name: "HawkEye 360 / Unseenlabs",
          type: "RF intelligence substitutes",
          threat: "High",
          why: "Can detect dark or suspicious emitters using a different sensor layer and already serve maritime-security use cases.",
          response: "This reinforces that the product must be multi-signal intelligence, not ‘SAR wins’. MATSYA should benefit from external RF rather than treat it only as competition."
        },
        {
          name: "Analytics-only platforms",
          type: "Unbundling threat",
          threat: "Medium-high",
          why: "Customers may buy the cheapest imagery and the best software separately.",
          response: "Owning satellites must improve latency, data history, unit economics or prediction enough to justify vertical integration. Otherwise the capital-heavy layer should be unbundled."
        }
      ],
      founderQuestions: [
        ["At satellite 5, 15 and 32, what customer product becomes possible that was impossible before?", "Tests whether revenue can switch on before full constellation density."],
        ["What measurable improvement does your maritime architecture create versus buying SAR and AIS separately?", "Forces the architecture advantage into latency, accuracy, coverage or cost."],
        ["How many distinct paid workflows can monetise the same observation?", "Directly tests the multi-tenant economics behind the thesis."],
        ["What does MATSYA do better because you own the satellite layer?", "Tests whether vertical integration is strategic or merely expensive."],
        ["Which recurring commercial customer do you expect before the constellation is complete?", "Tests whether the analytics business can help fund the hardware build."]
      ]
    }
  },

  challenges: [
    {
      id: "octo-petrobot",
      company: "Octobotics",
      severity: "High",
      title: "PetroBot looks further ahead on certification. Why not back them instead?",
      bear: "If PetroBot already has hazardous-area certifications and strategic oil & gas backing, Octobotics may simply be second in a market where certification and trust matter more than product elegance.",
      response: "That weakens any claim that Octobotics is the clear leader, but it also validates that Indian robotic NDT can cross the certification and adoption barrier. The seed-stage question becomes whether Octobotics can be backed before equivalent de-risking and still build differentiated platform reuse, customer breadth or geography.",
      falsifier: "Primary customer calls show no meaningful post-certification differentiation, similar win rates, similar economics and no credible platform advantage. Then it is an execution-and-price race rather than a differentiated venture bet."
    },
    {
      id: "octo-services",
      company: "Octobotics",
      severity: "Critical",
      title: "Isn't this just a services company with robots?",
      bear: "If every incremental inspection needs another engineer, robot and trip to site, revenue scales with operating headcount and margins stay services-like.",
      response: "That is the central underwriting risk. I do not need Octobotics to become pure SaaS; I need technology to increase inspections per robot and revenue per field engineer. Operating leverage is the base case. Analytics is a second layer, not a rescue story.",
      falsifier: "Over 12–18 months, inspection output and revenue remain roughly proportional to field headcount, utilisation does not improve, and each new vertical requires bespoke engineering."
    },
    {
      id: "piersight-iceye",
      company: "PierSight",
      severity: "Critical",
      title: "Why won't ICEYE or Capella crush them?",
      bear: "Incumbents have more capital, more satellites, flight heritage and maritime products already. They can discount, localise or build a more maritime-specific offer.",
      response: "PierSight should not be underwritten on technical superiority. The investable thesis is a specialist system designed around persistent maritime economics plus regional / sovereign fit, then converted into a sticky intelligence layer. The specialist only wins if the economics for the job are materially better.",
      falsifier: "PierSight cannot demonstrate a meaningful coverage / latency / cost advantage for persistent maritime use cases, and customers view its data as interchangeable with incumbent SAR."
    },
    {
      id: "piersight-capex",
      company: "PierSight",
      severity: "Critical",
      title: "Isn't this just an extremely capital-intensive imagery company?",
      bear: "If more revenue requires more tasking and more satellites, strong demand actually forces the company to keep raising capital to buy growth.",
      response: "Exactly. The business becomes venture-scale only if the same observation supports several paid workflows and the mix shifts toward recurring intelligence subscriptions / APIs. The key metric is recurring analytics revenue per satellite—not satellite count.",
      falsifier: "Revenue remains mostly per-image, per-tasking or per-km²; MATSYA is a thin dashboard; recurring analytics revenue does not grow faster than satellite count."
    },
    {
      id: "piersight-own-sats",
      company: "PierSight",
      severity: "High",
      title: "If analytics is the value, why own satellites at all?",
      bear: "A smarter model may be to buy commodity SAR from whoever is cheapest and build the intelligence layer without carrying launch and replacement capex.",
      response: "Owning satellites is justified only if it creates a measurable product advantage—better persistence, lower marginal data cost, lower latency, same-pass observations or a proprietary historical dataset. MATSYA should still be able to ingest third-party sources; vertical integration should improve the product, not trap it.",
      falsifier: "MATSYA performs just as well on third-party feeds, proprietary observations add no measurable accuracy / latency / economics advantage, and owning the constellation does not improve customer retention or margins."
    }
  ],

  evidence: [
    {company:"Macro", type:"fact", claim:"India installed roughly 9,100 industrial robots in 2024 and ranked sixth globally by annual installations.", source:"IFR", quality:"Industry primary"},
    {company:"Macro", type:"fact", claim:"IN-SPACe's decadal strategy targets a $44B Indian space economy by 2033.", source:"INSPACE_44", quality:"Government primary"},
    {company:"Macro", type:"fact", claim:"India's 2024 space-sector FDI policy permits up to 74% automatic-route FDI for satellite manufacturing/operations, satellite data products and ground/user segment activities.", source:"PIB_FDI", quality:"Government primary"},
    {company:"Macro", type:"fact", claim:"The ₹1 lakh crore RDI Scheme explicitly prioritises robotics and space; financing can cover transformative RDI projects at TRL 4+.", source:"RDI", quality:"Government primary"},

    {company:"Octobotics", type:"fact", claim:"Octobotics publicly positions around robotic inspection / NDT for industrial assets and describes multiple ultrasonic inspection modalities.", source:"OCTO_HOME", quality:"Company primary"},
    {company:"Octobotics", type:"fact", claim:"PetroBot publicly claims ATEX/PESO hazardous-area certifications and oil & gas strategic backing.", source:"PETROBOT", quality:"Competitor primary"},
    {company:"Octobotics", type:"assumption", claim:"Hazardous-area certification should unlock a materially larger refinery / live-asset pipeline.", source:null, quality:"Needs founder / customer validation"},
    {company:"Octobotics", type:"thesis", claim:"Platform reuse across asset classes matters more than whether every component is proprietary.", source:null, quality:"Investment view"},
    {company:"Octobotics", type:"risk", claim:"If revenue and inspection capacity only grow with field headcount, the business remains services-heavy.", source:null, quality:"Kill criterion"},

    {company:"PierSight", type:"fact", claim:"PierSight says Varuna completed its primary in-orbit objectives after launching in December 2024.", source:"PIER_VARUNA", quality:"Company primary"},
    {company:"PierSight", type:"fact", claim:"PierSight publicly targets a maritime SAR+AIS constellation and describes ~1m resolution / ~30-minute revisit as target-state capabilities rather than a fully deployed network today.", source:"PIER_HOME", quality:"Company primary"},
    {company:"PierSight", type:"fact", claim:"PierSight describes MATSYA as a maritime intelligence layer combining SAR, AIS and other data sources.", source:"PIER_MATSYA", quality:"Company primary"},
    {company:"PierSight", type:"assumption", claim:"A meaningful share of commercial intelligence can be sold repeatedly from overlapping observations rather than requiring bespoke tasking for each customer.", source:null, quality:"Needs commercial validation"},
    {company:"PierSight", type:"thesis", claim:"The end-state is an intelligence layer—‘Bloomberg for the ocean’—not a price-per-image SAR utility.", source:null, quality:"Investment view"},
    {company:"PierSight", type:"risk", claim:"If recurring analytics revenue does not grow faster than satellite count / capex, the model remains capital-intensive and linear.", source:null, quality:"Kill criterion"}
  ],

  sources: {
    RDI: {title:"DST — Research, Development & Innovation Scheme", url:"https://dst.gov.in/node/8255", note:"₹1 lakh crore RDI scheme; Deep Technology includes robotics and space; TRL-4+ financing eligibility.", kind:"Government / policy"},
    IFR: {title:"International Federation of Robotics — World Robotics 2025", url:"https://ifr.org/worldrobotics/report-2025", note:"India installed ~9,100 industrial robots in 2024 and ranked sixth globally.", kind:"Industry primary"},
    INSPACE_44: {title:"IN-SPACe — Decadal Vision for Indian Space Economy", url:"https://www.inspace.gov.in/sys_attachment.do?sys_id=c4547416877d711082e163d70cbb35d3", note:"Targets a $44B Indian space economy by 2033.", kind:"Government primary"},
    PIB_FDI: {title:"PIB — Review of FDI Policy on Space Sector", url:"https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=2011523", note:"Up to 74% automatic-route FDI for satellite manufacturing/operations, satellite data products and ground/user segment.", kind:"Government primary"},

    OCTO_HOME: {title:"Octobotics — Official site", url:"https://www.octobotics.tech/", note:"Company positioning, inspection use cases and product descriptions.", kind:"Company primary"},
    OCTO_TECH: {title:"Octobotics — Technology", url:"https://www.octobotics.tech/technology", note:"Robotics / NDT technology details.", kind:"Company primary"},
    PETROBOT: {title:"PetroBot — Official site", url:"https://petrobot.co.in/", note:"Competitor certification, deployments and strategic-backing claims.", kind:"Competitor primary"},
    GECKO: {title:"Gecko Robotics — Official site", url:"https://www.geckorobotics.com/", note:"Scaled global reference for robotic asset inspection / intelligence.", kind:"Competitor primary"},
    SOLINAS: {title:"Solinas Integrity — Official site", url:"https://solinas.in/", note:"Adjacent Indian inspection robotics player.", kind:"Competitor primary"},

    PIER_HOME: {title:"PierSight — Official site", url:"https://piersight.space/", note:"Maritime SAR positioning and target-state capabilities.", kind:"Company primary"},
    PIER_VARUNA: {title:"PierSight — Varuna", url:"https://piersight.space/systems/varuna", note:"Company description of Varuna mission / in-orbit demonstration.", kind:"Company primary"},
    PIER_MATSYA: {title:"PierSight — MATSYA / product vision", url:"https://piersight.space/blog/varuna-paved-the-way-now-drone-sar-and-matsya-take-over", note:"MATSYA description and intended maritime use cases.", kind:"Company primary"},
    ICEYE: {title:"ICEYE — Maritime Domain Awareness", url:"https://www.iceye.com/sar-data/use-cases/maritime-domain-awareness", note:"Global category validation for SAR-based maritime surveillance.", kind:"Incumbent primary"},
    CAPELLA: {title:"Capella Space — Maritime Awareness", url:"https://www.capellaspace.com/industry/maritime-awareness", note:"High-resolution SAR maritime awareness and dark-vessel use cases.", kind:"Incumbent primary"},
    HAWKEYE: {title:"HawkEye 360 — Official site", url:"https://www.he360.com/", note:"Space-based RF intelligence and maritime-domain-awareness use cases.", kind:"Substitute / incumbent primary"},
    UNSEENLABS: {title:"Unseenlabs — Official site", url:"https://unseenlabs.com/en/", note:"Space-based RF geolocation for maritime surveillance and dark-vessel detection.", kind:"Substitute / incumbent primary"}
  },

  suggestions: [
    "Why isn't PetroBot the better investment?",
    "How does PierSight become non-linear?",
    "What would make you walk away from Octobotics?",
    "Why is MATSYA more than a dashboard?",
    "What is the common thesis across both companies?",
    "Why should PierSight own satellites if analytics is the value?"
  ],

  corpus: [
    {id:"C01", company:"Both", type:"thesis", tags:"common thesis physical systems observation sensing data intelligence hardware", text:"The common thesis is not robotics plus space for their own sake. Both companies use difficult physical systems to capture information that is expensive or unreliable to obtain today. The venture outcome appears only if that information compounds into a recurring decision layer.", sources:["RDI"]},

    {id:"C02", company:"Octobotics", type:"fact", tags:"robotic NDT UT PAUT TOFD tanks pipelines weld inspection", text:"Octobotics publicly offers robotic inspection workflows for industrial assets and describes ultrasonic NDT capabilities including UT, PAUT and TOFD.", sources:["OCTO_HOME","OCTO_TECH"]},
    {id:"C03", company:"Octobotics", type:"fact", tags:"petrobot competition certification ATEX PESO ONGC HPCL", text:"PetroBot is a serious Indian competitor. It publicly states hazardous-area certifications and strategic backing from oil and gas companies.", sources:["PETROBOT"]},
    {id:"C04", company:"Octobotics", type:"thesis", tags:"petrobot better investment competitor why invest octobotics", text:"PetroBot's progress is category validation, not a reason to pretend competition is absent. Octobotics is investable only if the earlier entry point plus future certification, platform reuse, customer expansion or geography creates enough upside. If post-certification differentiation is weak, the thesis becomes an execution-and-price bet.", sources:["PETROBOT","OCTO_HOME"]},
    {id:"C05", company:"Octobotics", type:"risk", tags:"walk away linear headcount services margin", text:"The master kill criterion is linearity: if inspection capacity and revenue can only grow by adding field engineers and robots in roughly the same proportion, Octobotics remains an industrial services business rather than a venture-scale technology platform.", sources:[]},
    {id:"C06", company:"Octobotics", type:"thesis", tags:"data moat analytics asset health predictive maintenance", text:"A data / asset-health layer is upside, not base-case underwriting. Repeated digital inspections could eventually support condition trends and predictive maintenance, but this only matters if Octobotics has sufficient reuse rights and customers actually pay for the intelligence layer.", sources:["OCTO_HOME"]},
    {id:"C07", company:"Octobotics", type:"thesis", tags:"founder questions diligence certification platform reuse field engineer", text:"The highest-information diligence questions are job-level contribution margin, percentage of platform reuse when entering a new vertical, dated certification milestones and whether inspection output can grow faster than field headcount.", sources:[]},

    {id:"C08", company:"PierSight", type:"fact", tags:"Varuna orbit demonstrator SAR AIS constellation 30 minute revisit", text:"PierSight says its Varuna demonstrator completed primary mission objectives in orbit. Its public target state is a maritime SAR+AIS constellation; the full network is not yet deployed.", sources:["PIER_VARUNA","PIER_HOME"]},
    {id:"C09", company:"PierSight", type:"fact", tags:"MATSYA analytics dashboard SAR AIS optical terrestrial", text:"PierSight describes MATSYA as a maritime intelligence layer that combines SAR, AIS and other data sources into monitoring, alerts and query workflows.", sources:["PIER_MATSYA","PIER_HOME"]},
    {id:"C10", company:"PierSight", type:"thesis", tags:"non linear recurring analytics revenue per satellite scaling", text:"PierSight becomes non-linear when recurring intelligence revenue grows faster than satellite count. That requires overlapping observations to support multiple paid workflows—security, insurance, compliance and trading—instead of every incremental dollar consuming equivalent new tasking capacity.", sources:["PIER_HOME"]},
    {id:"C11", company:"PierSight", type:"thesis", tags:"Bloomberg ocean end state customers coast guard insurer bank trader", text:"The end-state is ‘Bloomberg for the ocean’: a common maritime intelligence layer where a Coast Guard buys threat intelligence, an insurer buys behavioural risk, a bank buys sanctions intelligence, and a trader buys physical-flow signals from overlapping observation infrastructure.", sources:["PIER_MATSYA"]},
    {id:"C12", company:"PierSight", type:"risk", tags:"walk away imagery utility capital intensity satellite count", text:"The thesis weakens sharply if MATSYA remains a dashboard and revenue stays priced per image, per tasking or per kilometre of coverage. In that case growth remains tied to capital expenditure and PierSight behaves like an imagery utility.", sources:["PIER_HOME"]},
    {id:"C13", company:"PierSight", type:"thesis", tags:"third party imagery MATSYA analytics own satellites", text:"MATSYA being able to ingest third-party data is not a problem by itself. The key test is whether PierSight's own observations and historical data measurably improve latency, accuracy, prediction or unit economics. Owning satellites must create an advantage, not an artificial technical dependency.", sources:["PIER_MATSYA"]},
    {id:"C14", company:"PierSight", type:"fact", tags:"competition ICEYE incumbent maritime SAR dark vessels", text:"Global SAR incumbents already validate maritime surveillance, so PierSight should not be underwritten on novelty of SAR or dark-vessel detection. Its case rests on maritime-specific economics and turning observation into recurring intelligence.", sources:["ICEYE","CAPELLA","PIER_HOME"]},
    {id:"C15", company:"PierSight", type:"thesis", tags:"founder questions diligence satellite 5 15 32 economics third party data", text:"The highest-information diligence questions are when recurring revenue switches on as the constellation scales, the measurable advantage of the maritime architecture, how many paid workflows can reuse an observation, and what MATSYA gains from PierSight's own data versus third-party feeds.", sources:[]}
  ]
};
