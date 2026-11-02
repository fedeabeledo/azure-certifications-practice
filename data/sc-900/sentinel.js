// SC-900 > Introduction to Microsoft security solutions > Describe security capabilities of Microsoft Sentinel
Catalog.module("sc-900", {
  id: "sentinel",
  name: "Describe security capabilities of Microsoft Sentinel",
  es: { name: "Descripción de las funcionalidades de seguridad de Microsoft Sentinel" },
  url: "https://learn.microsoft.com/en-us/training/modules/describe-security-capabilities-of-azure-sentinel/",
  quiz: {
    added: "2026-11-01",
    items: [
      {
        type: "single",
        topic: "Microsoft Sentinel",
        q: "When an incident involving a compromised account is created, the company wants the account disabled, a ticket opened and the team notified automatically. What should it configure in Sentinel?",
        options: ["An automation rule that triggers a playbook", "A scheduled hunting query that runs every five minutes", "A Fusion analytics rule", "A watchlist"],
        answer: 0,
        explain: "Automation rules define conditions and actions, including triggering playbooks built on Azure Logic Apps.",
        es: {
          topic: "Microsoft Sentinel",
          q: "Cuando se crea un incidente con una cuenta comprometida, la empresa quiere que la cuenta se deshabilite, se abra un ticket y se avise al equipo automáticamente. ¿Qué debe configurar en Sentinel?",
          options: ["Una regla de automatización que dispare un playbook", "Una consulta de búsqueda programada cada cinco minutos", "Una regla de análisis de Fusion", "Una lista de seguimiento"],
          explain: "Las reglas de automatización definen condiciones y acciones, incluido disparar playbooks basados en Azure Logic Apps."
        }
      },
      {
        type: "match",
        topic: "SIEM and SOAR",
        q: "Match each capability to SIEM or SOAR.",
        values: ["SIEM", "SOAR"],
        targets: [
          { t: "Aggregate logs from firewalls, servers and identity systems", answer: 0 },
          { t: "Run a playbook that disables an account and opens a ticket", answer: 1 },
          { t: "Correlate events to surface a potential threat", answer: 0 },
          { t: "Orchestrate several security tools to respond together", answer: 1 }
        ],
        explain: "SIEM provides visibility through collection and correlation; SOAR provides speed through orchestration and automation.",
        es: {
          topic: "SIEM y SOAR",
          q: "Relacione cada capacidad con SIEM o SOAR.",
          values: ["SIEM", "SOAR"],
          targets: [
            { t: "Reunir registros de firewalls, servidores y sistemas de identidad" },
            { t: "Ejecutar un playbook que deshabilita una cuenta y abre un ticket" },
            { t: "Correlacionar eventos para detectar una posible amenaza" },
            { t: "Orquestar varias herramientas de seguridad para que respondan juntas" }
          ],
          explain: "El SIEM da visibilidad mediante la recopilación y la correlación; el SOAR da velocidad mediante la orquestación y la automatización."
        }
      },
      {
        type: "single",
        topic: "Microsoft Sentinel",
        q: "Which Sentinel correlation engine links low-severity signals from several sources into high-confidence incidents to reveal multistage attacks?",
        options: ["Fusion", "UEBA", "Threat intelligence matching", "Anomaly rules"],
        answer: 0,
        explain: "Fusion is the ML-based correlation engine that surfaces advanced multistage attacks.",
        es: {
          topic: "Microsoft Sentinel",
          q: "¿Qué motor de correlación de Sentinel une señales de baja gravedad de varios orígenes en incidentes de alta confianza para revelar ataques de varias fases?",
          options: ["Fusion", "UEBA", "La coincidencia con inteligencia sobre amenazas", "Las reglas de anomalías"],
          explain: "Fusion es el motor de correlación basado en aprendizaje automático que revela ataques avanzados de varias fases."
        }
      },
      {
        type: "multi",
        topic: "Sentinel and Security Copilot",
        q: "Which two Security Copilot capabilities are available for Sentinel incidents in the Defender portal?",
        options: ["Incident summarization", "Natural language to KQL for hunting", "Automatic attack disruption", "Creating playbooks in Logic Apps", "Tuning analytics rule thresholds"],
        answers: [0, 1],
        explain: "Capabilities include summaries, guided responses, script and file analysis, identity and device summaries, reports and NL-to-KQL.",
        es: {
          topic: "Sentinel y Security Copilot",
          q: "¿Cuáles son dos capacidades de Security Copilot disponibles para los incidentes de Sentinel en el portal de Defender?",
          options: ["El resumen de incidentes", "La conversión de lenguaje natural a KQL para búsquedas", "La interrupción automática de ataques", "Crear cuadernos de estrategias en Logic Apps", "Ajustar los umbrales de las reglas de análisis"],
          explain: "Las capacidades incluyen resúmenes, respuestas guiadas, análisis de scripts y archivos, resúmenes de identidades y dispositivos, informes y conversión a KQL."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "Microsoft Sentinel", s: "The Azure portal experience for Microsoft Sentinel will be retired, leaving it available only in the Defender portal.", answer: true, explain: "The retirement date is March 31, 2027." },
          { topic: "SIEM and SOAR", s: "A playbook is a predefined sequence of automated actions triggered by an alert or incident type.", answer: true, explain: "It's a key SOAR concept." },
          { topic: "Sentinel and Security Copilot", s: "Guided responses in Security Copilot run containment actions automatically.", answer: false, explain: "They're suggestions; analysts decide how to proceed." }
        ],
        es: {
          statements: [
            { topic: "Microsoft Sentinel", s: "La experiencia de Microsoft Sentinel en Azure Portal se retirará y quedará disponible solo en el portal de Defender.", explain: "La fecha de retiro es el 31 de marzo de 2027." },
            { topic: "SIEM y SOAR", s: "Un playbook es una secuencia predefinida de acciones automatizadas que dispara un tipo de alerta o incidente.", explain: "Es un concepto clave del SOAR." },
            { topic: "Sentinel y Security Copilot", s: "Las respuestas guiadas de Security Copilot ejecutan automáticamente acciones de contención.", explain: "Son sugerencias; los analistas deciden cómo seguir." }
          ]
        }
      },
      {
        type: "dropdown",
        topic: "Microsoft Sentinel",
        q: "Complete the statement about Sentinel data storage.",
        parts: [
          "Data is ingested first into the ",
          { options: ["analytics tier", "data lake tier", "archive tier"], answer: 0 },
          " where analytics rules run, and the ",
          { options: ["data lake tier", "analytics tier", "basic logs tier"], answer: 0 },
          " keeps security data cost-effectively for up to 12 years."
        ],
        explain: "The analytics tier is a Log Analytics workspace; the data lake tier is mirrored long-term storage.",
        es: {
          topic: "Microsoft Sentinel",
          q: "Complete la afirmación sobre el almacenamiento de datos de Sentinel.",
          parts: [
            "Los datos se ingieren primero en el ",
            { options: ["nivel de análisis", "nivel de lago de datos", "nivel de archivo"] },
            " donde se ejecutan las reglas de análisis, y el ",
            { options: ["nivel de lago de datos", "nivel de análisis", "nivel de registros básicos"] },
            " conserva los datos de seguridad de forma económica hasta 12 años."
          ],
          explain: "El nivel de análisis es un área de trabajo de Log Analytics; el de lago de datos es almacenamiento duplicado a largo plazo."
        }
      },
      {
        type: "single",
        topic: "SIEM and SOAR",
        q: "Analysts receive thousands of alerts a day and start dismissing them without review. What is this problem called?",
        options: ["Alert fatigue", "Alert drift", "False negative bias", "Signal sprawl"],
        answer: 0,
        explain: "Alert fatigue is addressed with incident grouping, severity scoring and automatic enrichment.",
        es: {
          topic: "SIEM y SOAR",
          q: "Los analistas reciben miles de alertas por día y empiezan a descartarlas sin revisarlas. ¿Cómo se llama este problema?",
          options: ["La fatiga de alertas", "Desviación de alertas", "Sesgo de falsos negativos", "Dispersión de señales"],
          explain: "La fatiga de alertas se combate con agrupación de incidentes, puntuación de gravedad y enriquecimiento automático."
        }
      },
      {
        type: "single",
        topic: "Microsoft Sentinel",
        q: "A team wants to see which attack techniques its current detection rules cover and where it has gaps. What does Sentinel map coverage to?",
        options: ["The MITRE ATT&CK framework", "The Microsoft cloud security benchmark", "The Cyber Kill Chain", "NIST CSF"],
        answer: 0,
        explain: "Sentinel maps detection coverage to MITRE ATT&CK tactics and techniques.",
        es: {
          topic: "Microsoft Sentinel",
          q: "Un equipo quiere ver qué técnicas de ataque cubren sus reglas de detección actuales y dónde tiene huecos. ¿Con qué relaciona Sentinel la cobertura?",
          options: ["El marco MITRE ATT&CK", "El punto de referencia de seguridad en la nube de Microsoft", "La Cyber Kill Chain", "NIST CSF"],
          explain: "Sentinel relaciona la cobertura de detección con las tácticas y técnicas de MITRE ATT&CK."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "Microsoft Sentinel", s: "A significant hunting query finding can be promoted to a custom analytics rule.", answer: true, explain: "It then generates alerts automatically." },
          { topic: "Sentinel and Security Copilot", s: "The Dynamic Threat Detection Agent identifies threats that rule-based detection missed.", answer: true, explain: "It generates dynamic alerts with context and MITRE techniques." },
          { topic: "Microsoft Sentinel", s: "Sentinel can only collect data from Microsoft services.", answer: false, explain: "It has 350+ connectors, including AWS and GCP." }
        ],
        es: {
          statements: [
            { topic: "Microsoft Sentinel", s: "Un hallazgo importante de una consulta de búsqueda se puede convertir en una regla de análisis personalizada.", explain: "A partir de ahí genera alertas automáticamente." },
            { topic: "Sentinel y Security Copilot", s: "El agente de detección dinámica de amenazas identifica amenazas que la detección basada en reglas no detectó.", explain: "Genera alertas dinámicas con contexto y técnicas de MITRE." },
            { topic: "Microsoft Sentinel", s: "Sentinel solo puede recopilar datos de servicios de Microsoft.", explain: "Tiene más de 350 conectores, incluidos AWS y GCP." }
          ]
        }
      },
      {
        type: "single",
        topic: "Sentinel and Security Copilot",
        q: "An analyst who doesn't know KQL wants to find sign-ins from unfamiliar locations in the last 48 hours. What helps most?",
        options: ["Natural language to KQL in Security Copilot", "A Sentinel workbook", "A Fusion rule", "A UEBA anomaly rule"],
        answer: 0,
        explain: "Natural language to KQL generates a ready-to-run query from a plain-language request.",
        es: {
          topic: "Sentinel y Security Copilot",
          q: "Un analista que no sabe KQL quiere encontrar inicios de sesión desde ubicaciones desconocidas en las últimas 48 horas. ¿Qué lo ayuda más?",
          options: ["La conversión de lenguaje natural a KQL de Security Copilot", "Un libro de Sentinel", "Una regla de Fusion", "Una regla de anomalías de UEBA"],
          explain: "La conversión de lenguaje natural a KQL genera una consulta lista para ejecutar a partir de un pedido en lenguaje común."
        }
      },
      {
        type: "single",
        topic: "Microsoft Sentinel",
        q: "Where can a team find and deploy packaged solutions that bundle data connectors, analytics rules, workbooks and playbooks?",
        options: ["The Content hub", "The Defender portal partner catalog", "The data connectors page", "Azure Marketplace only"],
        answer: 0,
        explain: "The Content hub delivers end-to-end solutions as single deployments.",
        es: {
          topic: "Microsoft Sentinel",
          q: "¿Dónde puede un equipo encontrar e implementar soluciones empaquetadas que incluyan conectores de datos, reglas de análisis, libros y playbooks?",
          options: ["En el centro de contenido", "El catálogo de partners del portal de Defender", "La página de conectores de datos", "Solo Azure Marketplace"],
          explain: "El centro de contenido ofrece soluciones completas en una sola implementación."
        }
      },
      {
        type: "single",
        topic: "SIEM and SOAR",
        q: "An attacker performs reconnaissance one day, establishes persistence days later and exfiltrates data weeks after. Which AI capability helps connect these signals?",
        options: ["Multi-stage attack detection", "Threat intelligence matching", "Scheduled analytics rules", "Automation rules"],
        answer: 0,
        explain: "ML models connect low-level signals over time to reveal the broader attack pattern.",
        es: {
          topic: "SIEM y SOAR",
          q: "Un atacante hace reconocimiento un día, establece persistencia días después y extrae datos semanas más tarde. ¿Qué capacidad de IA ayuda a conectar esas señales?",
          options: ["La detección de ataques de varias fases", "La coincidencia con inteligencia sobre amenazas", "Las reglas de análisis programadas", "Las reglas de automatización"],
          explain: "Los modelos de aprendizaje automático conectan señales de bajo nivel a lo largo del tiempo para revelar el patrón del ataque."
        }
      }
    ]
  },
  units: [
    {
      id: "siem-soar",
      name: "Define the concepts of SIEM and SOAR",
      es: { name: "Definición de los conceptos de SIEM y SOAR" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-security-capabilities-of-azure-sentinel/2-define-concepts-of-siem-soar",
      quiz: {
        added: "2026-11-01",
        items: [
          {
            type: "match",
            q: "Match each SIEM function to its description.",
            values: ["Log aggregation", "Correlation", "Incident creation"],
            targets: [
              { t: "Consolidate events from many sources into one platform", answer: 0 },
              { t: "Link an unusual sign-in time with a large file download", answer: 1 },
              { t: "Group related alerts into a case file for investigation", answer: 2 }
            ],
            explain: "SIEM aggregates, correlates, alerts, creates incidents and gives centralized visibility.",
            es: {
              q: "Relacione cada función del SIEM con su descripción.",
              values: ["Agregación de registros", "Correlación", "Creación de incidentes"],
              targets: [
                { t: "Consolidar eventos de muchos orígenes en una sola plataforma" },
                { t: "Vincular un inicio de sesión a una hora inusual con una descarga grande de archivos" },
                { t: "Agrupar alertas relacionadas en un caso para investigar" }
              ],
              explain: "El SIEM agrega, correlaciona, alerta, crea incidentes y da visibilidad centralizada."
            }
          },
          {
            type: "single",
            q: "What does a SOAR system add on top of a SIEM's alerting?",
            options: [
              "Action-driven automated workflows that handle the response",
              "Longer log retention in a lower-cost data lake tier for investigations",
              "Correlation of alerts across sources",
              "Threat intelligence matching"
            ],
            answer: 0,
            explain: "SOAR takes alerts and triggers orchestrated, automated response workflows.",
            es: {
              q: "¿Qué agrega un sistema SOAR a las alertas de un SIEM?",
              options: [
                "Flujos de trabajo automatizados que se ocupan de la respuesta",
                "Una retención de registros más larga en un nivel de lago de datos más económico",
                "La correlación de alertas entre orígenes",
                "La coincidencia con inteligencia sobre amenazas"
              ],
              explain: "El SOAR toma las alertas y dispara flujos de respuesta orquestados y automatizados."
            }
          },
          {
            type: "multi",
            q: "Which two help modern SIEM/SOAR platforms reduce alert fatigue?",
            options: ["Incident grouping", "Automatic enrichment with context", "Raising every alert to high severity", "Ingesting more log sources", "Lengthening log retention"],
            answers: [0, 1],
            explain: "Incident grouping, severity scoring and automatic enrichment address alert fatigue.",
            es: {
              q: "¿Cuáles son dos formas en que las plataformas SIEM/SOAR modernas reducen la fatiga de alertas?",
              options: ["La agrupación de incidentes", "El enriquecimiento automático con contexto", "Elevar todas las alertas a gravedad alta", "Incorporar más orígenes de registros", "Alargar la retención de registros"],
              explain: "La agrupación de incidentes, la puntuación de gravedad y el enriquecimiento automático combaten la fatiga de alertas."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Machine learning can establish a baseline of normal behavior and flag deviations.", answer: true, explain: "That's anomaly detection." },
              { s: "SIEM and SOAR are competing technologies; organizations should choose one.", answer: false, explain: "They complement each other: SIEM gives visibility and SOAR gives speed." },
              { s: "AI models can help reduce false positives.", answer: true, explain: "They distinguish genuine threats from benign activity." }
            ],
            es: {
              statements: [
                { s: "El aprendizaje automático puede establecer una línea base de comportamiento normal y señalar desvíos.", explain: "Eso es la detección de anomalías." },
                { s: "SIEM y SOAR son tecnologías que compiten; las organizaciones deben elegir una.", explain: "Se complementan: el SIEM da visibilidad y el SOAR, velocidad." },
                { s: "Los modelos de IA pueden ayudar a reducir los falsos positivos.", explain: "Distinguen las amenazas reales de la actividad benigna." }
              ]
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about SOAR.",
            parts: [
              "In SOAR, ",
              { options: ["orchestration", "aggregation", "retention"], answer: 0 },
              " connects different security tools so they work together, while ",
              { options: ["automation", "correlation", "classification"], answer: 0 },
              " handles repetitive tasks without manual effort."
            ],
            explain: "Orchestration and automation are the two key concepts SOAR introduces.",
            es: {
              q: "Complete la afirmación sobre el SOAR.",
              parts: [
                "En el SOAR, la ",
                { options: ["orquestación", "agregación", "retención"] },
                " conecta distintas herramientas de seguridad para que trabajen juntas, mientras que la ",
                { options: ["automatización", "correlación", "clasificación"] },
                " se ocupa de las tareas repetitivas sin esfuerzo manual."
              ],
              explain: "La orquestación y la automatización son los dos conceptos clave que introduce el SOAR."
            }
          }
        ]
      }
    },
    {
      id: "sentinel-threat-management",
      name: "Describe threat detection and mitigation capabilities in Microsoft Sentinel",
      es: { name: "Descripción de las funcionalidades de detección y mitigación de amenazas en Microsoft Sentinel" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-security-capabilities-of-azure-sentinel/3-describe-sentinel-provide-integrated-threat-management",
      quiz: {
        added: "2026-11-01",
        items: [
          {
            type: "match",
            q: "Match each Sentinel platform component to what it does.",
            values: ["Data lake", "Sentinel graph", "Sentinel MCP server"],
            targets: [
              { t: "Cost-effective long-term storage of security data in an open format", answer: 0 },
              { t: "Models relationships to find paths from a compromised identity to a critical asset", answer: 1 },
              { t: "Lets people and AI agents query Sentinel data in natural language", answer: 2 }
            ],
            explain: "These three components make Sentinel an extensible security platform beyond SIEM.",
            es: {
              q: "Relacione cada componente de la plataforma Sentinel con lo que hace.",
              values: ["Lago de datos", "Grafo de Sentinel", "Servidor MCP de Sentinel"],
              targets: [
                { t: "Almacenamiento económico a largo plazo de datos de seguridad en formato abierto" },
                { t: "Modela relaciones para encontrar rutas de una identidad comprometida a un recurso crítico" },
                { t: "Permite a personas y agentes de IA consultar datos de Sentinel en lenguaje natural" }
              ],
              explain: "Estos tres componentes convierten a Sentinel en una plataforma de seguridad extensible más allá del SIEM."
            }
          },
          {
            type: "single",
            q: "Instead of waiting for an alert, an analyst runs queries to search for suspicious activity that hasn't triggered any rule. What is this?",
            options: ["Threat hunting", "Anomaly detection", "Threat intelligence matching", "Incident triage"],
            answer: 0,
            explain: "Hunting proactively searches data; findings can become custom analytics rules.",
            es: {
              q: "En lugar de esperar una alerta, un analista ejecuta consultas para buscar actividad sospechosa que no disparó ninguna regla. ¿Qué es esto?",
              options: ["La búsqueda de amenazas", "La detección de anomalías", "La coincidencia con inteligencia sobre amenazas", "La evaluación de incidentes"],
              explain: "La búsqueda revisa los datos de forma proactiva; los hallazgos pueden convertirse en reglas de análisis personalizadas."
            }
          },
          {
            type: "multi",
            q: "Which two are detection approaches in Microsoft Sentinel?",
            options: ["Rule-based detection", "Threat intelligence matching", "Attack path analysis", "Secure score assessment", "Vulnerability scanning"],
            answers: [0, 1],
            explain: "Sentinel uses rule-based detection, AI and ML detection, and threat intelligence matching.",
            es: {
              q: "¿Cuáles son dos enfoques de detección de Microsoft Sentinel?",
              options: ["La detección basada en reglas", "La coincidencia con inteligencia sobre amenazas", "El análisis de rutas de ataque", "La evaluación de la puntuación de seguridad", "El análisis de vulnerabilidades"],
              explain: "Sentinel usa detección basada en reglas, detección con IA y aprendizaje automático, y coincidencia con inteligencia sobre amenazas."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Playbooks are built on Azure Logic Apps.", answer: true, explain: "They execute remediation actions." },
              { s: "Sentinel has more than 350 built-in data connectors.", answer: true, explain: "For Microsoft services, non-Microsoft platforms and custom sources." },
              { s: "Analytics rules run once when Sentinel is deployed and never again.", answer: false, explain: "They run regularly to query collected data." }
            ],
            es: {
              statements: [
                { s: "Los playbooks se basan en Azure Logic Apps.", explain: "Ejecutan acciones de corrección." },
                { s: "Sentinel tiene más de 350 conectores de datos integrados.", explain: "Para servicios de Microsoft, plataformas de terceros y orígenes personalizados." },
                { s: "Las reglas de análisis se ejecutan una vez al implementar Sentinel y nunca más.", explain: "Se ejecutan con regularidad para consultar los datos recopilados." }
              ]
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about Sentinel's SIEM capabilities.",
            parts: [
              "Sentinel supports security operations in four areas: collect, detect, ",
              { options: ["investigate", "hunt", "remediate"], answer: 0 },
              " and respond, and the recommended place to use it is the ",
              { options: ["Microsoft Defender portal", "Azure portal", "Microsoft Purview portal"], answer: 0 },
              "."
            ],
            explain: "Sentinel covers collect, detect, investigate and respond, and is accessed through the Defender portal.",
            es: {
              q: "Complete la afirmación sobre las capacidades de SIEM de Sentinel.",
              parts: [
                "Sentinel cubre las operaciones de seguridad en cuatro áreas: recopilar, detectar, ",
                { options: ["investigar", "buscar", "corregir"] },
                " y responder, y el lugar recomendado para usarlo es el ",
                { options: ["portal de Microsoft Defender", "Azure Portal", "portal de Microsoft Purview"] },
                "."
              ],
              explain: "Sentinel cubre recopilar, detectar, investigar y responder, y se usa desde el portal de Defender."
            }
          }
        ]
      }
    },
    {
      id: "sentinel-copilot",
      name: "Describe Microsoft Sentinel integration with Microsoft Security Copilot",
      es: { name: "Descripción de la integración de Microsoft Sentinel con Microsoft Security Copilot" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-security-capabilities-of-azure-sentinel/4-describe-security-copilot",
      quiz: {
        added: "2026-11-01",
        items: [
          {
            type: "match",
            q: "Match each guided response category to its purpose.",
            values: ["Triage", "Containment", "Investigation", "Remediation"],
            targets: [
              { t: "Classify the incident", answer: 0 },
              { t: "Stop the attack from spreading", answer: 1 },
              { t: "Suggest further analysis steps", answer: 2 },
              { t: "Specific actions for affected entities", answer: 3 }
            ],
            explain: "Guided responses are organized into these four categories.",
            es: {
              q: "Relacione cada categoría de respuesta guiada con su propósito.",
              values: ["Evaluación", "Contención", "Investigación", "Corrección"],
              targets: [
                { t: "Clasificar el incidente" },
                { t: "Evitar que el ataque se propague" },
                { t: "Sugerir pasos de análisis adicionales" },
                { t: "Acciones específicas para las entidades afectadas" }
              ],
              explain: "Las respuestas guiadas se organizan en estas cuatro categorías."
            }
          },
          {
            type: "single",
            q: "An analyst finds an obfuscated PowerShell command line in an incident. Which Security Copilot capability explains what it does and which MITRE techniques it uses?",
            options: ["Script and command-line analysis", "Incident report generation", "Device summarization", "Threat intelligence summary for the indicators in the incident"],
            answer: 0,
            explain: "Script analysis explains the script in plain language without external reverse-engineering tools.",
            es: {
              q: "Un analista encuentra una línea de comandos de PowerShell ofuscada en un incidente. ¿Qué capacidad de Security Copilot explica qué hace y qué técnicas de MITRE usa?",
              options: ["El análisis de scripts y líneas de comandos", "La generación de informes de incidentes", "El resumen de dispositivos", "El resumen de inteligencia sobre amenazas de los indicadores del incidente"],
              explain: "El análisis de scripts explica el script en lenguaje común sin herramientas externas de ingeniería inversa."
            }
          },
          {
            type: "multi",
            q: "Which two plugins connect the standalone Security Copilot experience to Microsoft Sentinel?",
            options: ["Microsoft Sentinel", "Natural language to KQL for Microsoft Sentinel", "Microsoft Defender for Cloud", "Microsoft Entra", "Microsoft Defender Threat Intelligence"],
            answers: [0, 1],
            explain: "The Sentinel and NL-to-KQL for Sentinel plugins enable chat-based questions about incidents and data.",
            es: {
              q: "¿Cuáles son dos complementos que conectan la experiencia independiente de Security Copilot con Microsoft Sentinel?",
              options: ["Microsoft Sentinel", "Lenguaje natural a KQL para Microsoft Sentinel", "Microsoft Defender for Cloud", "Microsoft Entra", "Inteligencia sobre amenazas de Microsoft Defender"],
              explain: "Los complementos de Sentinel y de lenguaje natural a KQL para Sentinel permiten preguntar sobre incidentes y datos en un chat."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "The Security Alert Triage Agent classifies alerts and explains its reasoning step by step.", answer: true, explain: "It covers phishing, identity and cloud alerts." },
              { s: "Incident reports generated by Copilot can be exported to PDF.", answer: true, explain: "Or posted to the incident activity log." },
              { s: "Security Copilot makes final decisions on incidents instead of analysts.", answer: false, explain: "It provides suggestions; humans stay in control." }
            ],
            es: {
              statements: [
                { s: "El agente de evaluación de alertas de seguridad clasifica alertas y explica su razonamiento paso a paso.", explain: "Cubre alertas de phishing, identidad y nube." },
                { s: "Los informes de incidentes que genera Copilot se pueden exportar a PDF.", explain: "O publicar en el registro de actividad del incidente." },
                { s: "Security Copilot toma las decisiones finales sobre los incidentes en lugar de los analistas.", explain: "Ofrece sugerencias; las personas mantienen el control." }
              ]
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about the Sentinel integration.",
            parts: [
              "In the standalone experience, the ",
              { options: ["incident investigation promptbook", "Sentinel MCP server", "Phishing Triage Agent"], answer: 0 },
              " assembles a sequence of prompts automatically, while identity summaries pull sign-in behavior and risk flags from ",
              { options: ["Microsoft Entra ID", "Microsoft Defender for Identity only", "Microsoft Purview"], answer: 0 },
              "."
            ],
            explain: "The promptbook gives a structured starting point; identity summaries use Entra ID data.",
            es: {
              q: "Complete la afirmación sobre la integración con Sentinel.",
              parts: [
                "En la experiencia independiente, el ",
                { options: ["libro de indicaciones de investigación de incidentes", "servidor MCP de Sentinel", "agente de evaluación de phishing"] },
                " arma automáticamente una secuencia de indicaciones, mientras que los resúmenes de identidad toman el comportamiento de inicio de sesión y las marcas de riesgo de ",
                { options: ["Microsoft Entra ID", "solo Microsoft Defender for Identity", "Microsoft Purview"] },
                "."
              ],
              explain: "El libro de indicaciones da un punto de partida estructurado; los resúmenes de identidad usan datos de Entra ID."
            }
          }
        ]
      }
    }
  ]
});
