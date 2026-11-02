// SC-900 > Introduction to Microsoft security solutions > Describe threat protection with Microsoft Defender XDR
Catalog.module("sc-900", {
  id: "defender-xdr",
  name: "Describe threat protection with Microsoft Defender XDR",
  es: { name: "Descripción de la protección contra amenazas con Microsoft Defender XDR" },
  url: "https://learn.microsoft.com/en-us/training/modules/describe-threat-protection-with-microsoft-365-defender/",
  quiz: {
    added: "2026-11-01",
    items: [
      {
        type: "single",
        topic: "Defender XDR suite",
        q: "Defender for Endpoint detects a malicious file on a laptop, and the same file is then removed from all mailboxes without anyone acting. Which Defender XDR capability is this?",
        options: ["Automatic response to threats across products", "Attack simulation training results shared with Defender for Office 365", "Automatic attack disruption", "Automated investigation in Defender for Endpoint only"],
        answer: 0,
        explain: "When one product detects a threat, it shares it with the others, so Defender for Office 365 removes the file from email automatically.",
        es: {
          topic: "Conjunto Defender XDR",
          q: "Defender para punto de conexión detecta un archivo malicioso en una laptop, y luego ese archivo se elimina de todos los buzones sin que nadie intervenga. ¿Qué capacidad de Defender XDR es esta?",
          options: ["La respuesta automática a amenazas entre productos", "Los resultados de la formación con simulación de ataques compartidos con Defender para Office 365", "La interrupción automática de ataques", "La investigación automatizada solo en Defender para punto de conexión"],
          explain: "Cuando un producto detecta una amenaza, la comparte con los demás, así que Defender para Office 365 quita el archivo del correo automáticamente."
        }
      },
      {
        type: "match",
        topic: "Defender XDR suite",
        q: "Match each need to the Microsoft Defender XDR product.",
        values: ["Defender for Office 365", "Defender for Endpoint", "Defender for Cloud Apps", "Defender for Identity"],
        targets: [
          { t: "Detonate email attachments in a virtual environment before delivery", answer: 0 },
          { t: "EDR and automated investigation for laptops and servers", answer: 1 },
          { t: "Discover shadow IT and control OAuth apps", answer: 2 },
          { t: "Detect lateral movement using sensors on domain controllers", answer: 3 }
        ],
        explain: "Each product covers a domain: email, endpoints, cloud apps or identities.",
        es: {
          topic: "Conjunto Defender XDR",
          q: "Relacione cada necesidad con el producto de Microsoft Defender XDR.",
          values: ["Defender para Office 365", "Defender para punto de conexión", "Defender for Cloud Apps", "Defender for Identity"],
          targets: [
            { t: "Detonar los adjuntos de correo en un entorno virtual antes de entregarlos" },
            { t: "EDR e investigación automatizada para laptops y servidores" },
            { t: "Descubrir la TI en la sombra y controlar aplicaciones OAuth" },
            { t: "Detectar movimiento lateral con sensores en los controladores de dominio" }
          ],
          explain: "Cada producto cubre un dominio: correo, puntos de conexión, aplicaciones en la nube o identidades."
        }
      },
      {
        type: "single",
        topic: "Security Exposure Management",
        q: "Several attack paths converge on a single overprivileged service account before reaching a domain controller. What is that account called, and why prioritize it?",
        options: [
          "A choke point; securing it disrupts multiple attack paths at once",
          "A critical asset; it should be excluded from attack paths",
          "An entry point; it's where attacks start",
          "A blast radius; it limits the damage"
        ],
        answer: 0,
        explain: "Choke points are nodes where multiple attack paths converge, so fixing them breaks several routes.",
        es: {
          topic: "Administración de la exposición de seguridad",
          q: "Varias rutas de ataque convergen en una única cuenta de servicio con privilegios excesivos antes de llegar a un controlador de dominio. ¿Cómo se llama esa cuenta y por qué priorizarla?",
          options: [
            "Un punto de estrangulamiento; protegerlo interrumpe varias rutas de ataque a la vez",
            "Un recurso crítico; se debe excluir de las rutas de ataque",
            "Un punto de entrada; es donde empiezan los ataques",
            "Un radio de impacto; limita el daño"
          ],
          explain: "Los puntos de estrangulamiento son nodos donde convergen varias rutas de ataque, así que corregirlos corta varios caminos."
        }
      },
      {
        type: "multi",
        topic: "Defender for Office 365",
        q: "Which two Defender for Office 365 features help respond to threats that are already in mailboxes?",
        options: ["Zero-hour auto purge (ZAP)", "Automated investigation and response (AIR)", "Safe Attachments", "Safe Links", "Attack simulation training"],
        answers: [0, 1],
        explain: "ZAP retroactively neutralizes delivered malicious messages, and AIR runs automated investigations; SIEM integration also supports response.",
        es: {
          topic: "Defender para Office 365",
          q: "¿Cuáles son dos características de Defender para Office 365 que ayudan a responder a amenazas que ya están en los buzones?",
          options: ["La purga automática de hora cero (ZAP)", "La investigación y respuesta automatizadas (AIR)", "Datos adjuntos seguros", "Vínculos seguros", "La formación con simulación de ataques"],
          explain: "ZAP neutraliza de forma retroactiva los mensajes maliciosos entregados, y AIR ejecuta investigaciones automatizadas; la integración con SIEM también apoya la respuesta."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "Defender portal", s: "Advanced hunting in the Defender portal can query up to 30 days of raw data from Defender XDR and Sentinel.", answer: true, explain: "Queries can be written in KQL, with a builder or through Copilot." },
          { topic: "Defender Threat Intelligence", s: "The standalone Defender TI product is being retired, with its capabilities converging into Defender XDR and Sentinel.", answer: true, explain: "Retirement is on August 1, 2026." },
          { topic: "Defender for Identity", s: "Defender for Identity sends all raw event logs from domain controllers to the cloud.", answer: false, explain: "The sensor parses logs and traffic locally and sends only the parsed information." }
        ],
        es: {
          statements: [
            { topic: "Portal de Defender", s: "La búsqueda avanzada del portal de Defender puede consultar hasta 30 días de datos sin procesar de Defender XDR y Sentinel.", explain: "Las consultas se escriben en KQL, con un generador o mediante Copilot." },
            { topic: "Inteligencia sobre amenazas de Defender", s: "El producto independiente Defender TI se retira, y sus capacidades se integran en Defender XDR y Sentinel.", explain: "El retiro es el 1 de agosto de 2026." },
            { topic: "Defender for Identity", s: "Defender for Identity envía a la nube todos los registros de eventos sin procesar de los controladores de dominio.", explain: "El sensor analiza los registros y el tráfico localmente y envía solo la información procesada." }
          ]
        }
      },
      {
        type: "dropdown",
        topic: "Defender XDR suite",
        q: "Complete the statement about automatic attack disruption.",
        parts: [
          "Automatic attack disruption uses ",
          { options: ["high-fidelity signals from across the suite", "a single antivirus signature", "rules written by each customer"], answer: 0 },
          " to contain attacks in progress, for example by ",
          { options: ["disabling compromised accounts", "opening a ticket for the SOC", "lowering the incident severity"], answer: 0 },
          " in real time."
        ],
        explain: "It correlates signals into one high-confidence incident and takes actions like isolating devices or disabling accounts.",
        es: {
          topic: "Conjunto Defender XDR",
          q: "Complete la afirmación sobre la interrupción automática de ataques.",
          parts: [
            "La interrupción automática de ataques usa ",
            { options: ["señales de alta fidelidad de todo el conjunto", "una única firma de antivirus", "reglas escritas por cada cliente"] },
            " para contener ataques en curso, por ejemplo ",
            { options: ["deshabilitando cuentas comprometidas", "abriendo un ticket para el SOC", "bajando la gravedad del incidente"] },
            " en tiempo real."
          ],
          explain: "Correlaciona señales en un incidente de alta confianza y toma acciones como aislar dispositivos o deshabilitar cuentas."
        }
      },
      {
        type: "single",
        topic: "Defender Vulnerability Management",
        q: "A CVE on several laptops is being actively exploited in the wild, and one affected laptop belongs to the CFO. How does Defender Vulnerability Management treat it?",
        options: [
          "It raises its priority using threat intelligence and the asset's business value",
          "It treats it like every other vulnerability and lists it in order of discovery, regardless of the device owner",
          "It waits for the next CVSS update to change the score",
          "It ranks it only by CVSS score"
        ],
        answer: 0,
        explain: "Risk-based prioritization focuses on emerging threats, active breaches and high-value assets.",
        es: {
          topic: "Administración de vulnerabilidades de Defender",
          q: "Una CVE presente en varias laptops se está explotando activamente, y una de las laptops afectadas es del director financiero. ¿Cómo la trata la Administración de vulnerabilidades de Defender?",
          options: [
            "Eleva su prioridad según la inteligencia sobre amenazas y el valor del recurso para el negocio",
            "La trata igual que a cualquier otra vulnerabilidad y la lista en orden de detección, sin importar de quién es el dispositivo",
            "Espera la próxima actualización de CVSS para cambiar la puntuación",
            "La clasifica solo por puntuación CVSS"
          ],
          explain: "La priorización basada en riesgo se centra en amenazas emergentes, filtraciones activas y recursos de alto valor."
        }
      },
      {
        type: "single",
        topic: "Copilot in Defender XDR",
        q: "Security teams are overwhelmed by user-reported suspicious emails. Which Security Copilot agent classifies those submissions and explains its verdict?",
        options: ["Phishing Triage Agent", "Threat Intelligence Briefing Agent", "Threat Hunting Assistant", "Conditional Access Optimization Agent"],
        answer: 0,
        explain: "The Phishing Triage Agent reviews reported emails and decides whether they're real phishing or false positives. It needs Defender for Office 365 Plan 2.",
        es: {
          topic: "Copilot en Defender XDR",
          q: "Los equipos de seguridad están desbordados por los correos sospechosos que informan los usuarios. ¿Qué agente de Security Copilot clasifica esos envíos y explica su veredicto?",
          options: ["El agente de evaluación de phishing", "El agente de informes de inteligencia sobre amenazas", "El asistente de búsqueda de amenazas", "El agente de optimización del acceso condicional"],
          explain: "El agente de evaluación de phishing revisa los correos informados y decide si son phishing real o falsos positivos. Requiere Defender para Office 365 Plan 2."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "Defender for Cloud Apps", s: "Defender for Cloud Apps can detect custom AI agents built with Microsoft Copilot Studio.", answer: true, explain: "It monitors them and can block harmful actions." },
          { topic: "Security Exposure Management", s: "Security Exposure Management only uses Microsoft data sources.", answer: false, explain: "Connectors integrate tools such as ServiceNow CMDB, Tenable, Qualys and Rapid7." },
          { topic: "Copilot in Defender XDR", s: "Guided responses are available for every incident type.", answer: false, explain: "They're available for incident types such as phishing, BEC and ransomware." }
        ],
        es: {
          statements: [
            { topic: "Defender for Cloud Apps", s: "Defender for Cloud Apps puede detectar agentes de IA personalizados creados con Microsoft Copilot Studio.", explain: "Los supervisa y puede bloquear acciones dañinas." },
            { topic: "Administración de la exposición de seguridad", s: "La administración de la exposición de seguridad solo usa orígenes de datos de Microsoft.", explain: "Hay conectores para herramientas como ServiceNow CMDB, Tenable, Qualys y Rapid7." },
            { topic: "Copilot en Defender XDR", s: "Las respuestas guiadas están disponibles para todos los tipos de incidentes.", explain: "Están disponibles para tipos como phishing, BEC y ransomware." }
          ]
        }
      },
      {
        type: "single",
        topic: "Defender for Cloud Apps",
        q: "What kind of solution is Microsoft Defender for Cloud Apps at its core?",
        options: ["A cloud access security broker (CASB)", "A secure web gateway", "An XDR for SaaS endpoints", "A data loss prevention service"],
        answer: 0,
        explain: "Defender for Cloud Apps is a CASB with SSPM, advanced threat protection and app governance.",
        es: {
          topic: "Defender for Cloud Apps",
          q: "¿Qué tipo de solución es Microsoft Defender for Cloud Apps en su base?",
          options: ["Un agente de seguridad de acceso a la nube (CASB)", "Una puerta de enlace web segura", "Un XDR para puntos de conexión SaaS", "Un servicio de prevención de pérdida de datos"],
          explain: "Defender for Cloud Apps es un CASB con SSPM, protección avanzada contra amenazas y gobernanza de aplicaciones."
        }
      },
      {
        type: "single",
        topic: "Defender portal",
        q: "A SOC wants one queue with incidents from Defender XDR products and Microsoft Sentinel together. Where do they get it?",
        options: ["Incidents and alerts in the Microsoft Defender portal", "The Sentinel blade in the Azure portal, which also imports Defender XDR alerts", "The Microsoft Purview portal", "Microsoft Defender for Cloud"],
        answer: 0,
        explain: "The Defender portal is a unified security operations platform with a unified incident queue.",
        es: {
          topic: "Portal de Defender",
          q: "Un SOC quiere una sola cola con los incidentes de los productos de Defender XDR y de Microsoft Sentinel juntos. ¿Dónde la obtiene?",
          options: ["En Incidentes y alertas del portal de Microsoft Defender", "En la hoja de Sentinel de Azure Portal, que además importa las alertas de Defender XDR", "El portal de Microsoft Purview", "Microsoft Defender for Cloud"],
          explain: "El portal de Defender es una plataforma unificada de operaciones de seguridad con una cola de incidentes unificada."
        }
      },
      {
        type: "single",
        topic: "Defender for Identity",
        q: "Which stages of the attack kill chain does Defender for Identity detect?",
        options: [
          "Reconnaissance, compromised credentials, lateral movements and domain dominance",
          "Only phishing and credential theft",
          "Only malware execution and persistence on endpoints, through the same agent as Defender for Endpoint",
          "Only misconfigurations in Active Directory"
        ],
        answer: 0,
        explain: "Defender for Identity detects threats throughout the cyberattack kill chain at the identity source.",
        es: {
          topic: "Defender for Identity",
          q: "¿Qué etapas de la cadena de ataque detecta Defender for Identity?",
          options: [
            "Reconocimiento, credenciales comprometidas, movimientos laterales y dominio del dominio",
            "Solo phishing y robo de credenciales",
            "Solo la ejecución y persistencia de malware en los puntos de conexión, con el mismo agente que Defender para punto de conexión",
            "Solo configuraciones incorrectas en Active Directory"
          ],
          explain: "Defender for Identity detecta amenazas a lo largo de toda la cadena de ataque en el origen de identidad."
        }
      }
    ]
  },
  units: [
    {
      id: "xdr-services",
      name: "Describe Microsoft Defender XDR services",
      es: { name: "Descripción de los servicios de Microsoft Defender XDR" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-threat-protection-with-microsoft-365-defender/2-describe-services",
      quiz: {
        added: "2026-11-01",
        items: [
          {
            type: "single",
            q: "What is Microsoft Defender XDR?",
            options: [
              "A unified pre- and post-breach defense suite across endpoints, identities, email and applications",
              "A SIEM that replaces Microsoft Sentinel",
              "A governance tool that enforces security policies and resource locks across Azure subscriptions and management groups",
              "A CNAPP for multicloud workloads"
            ],
            answer: 0,
            explain: "Defender XDR coordinates detection, prevention, investigation and response across domains.",
            es: {
              q: "¿Qué es Microsoft Defender XDR?",
              options: [
                "Un conjunto de defensa unificado antes y después de una filtración, para puntos de conexión, identidades, correo y aplicaciones",
                "Un SIEM que reemplaza a Microsoft Sentinel",
                "Una herramienta de gobernanza que aplica directivas de seguridad y bloqueos de recursos en suscripciones y grupos de administración de Azure",
                "Una CNAPP para cargas de trabajo multinube"
              ],
              explain: "Defender XDR coordina la detección, la prevención, la investigación y la respuesta entre dominios."
            }
          },
          {
            type: "match",
            q: "Match each cross-product capability to its description.",
            values: ["Combined incidents queue", "Self-healing", "Cross-product threat hunting"],
            targets: [
              { t: "Related alerts and assets grouped into one incident", answer: 0 },
              { t: "Impacted assets remediated back to a secure state automatically", answer: 1 },
              { t: "Custom queries over raw data from all products", answer: 2 }
            ],
            explain: "These capabilities make Defender XDR more than a collection of separate tools.",
            es: {
              q: "Relacione cada capacidad entre productos con su descripción.",
              values: ["Cola de incidentes combinada", "Recuperación automática", "Búsqueda de amenazas entre productos"],
              targets: [
                { t: "Alertas y recursos relacionados agrupados en un solo incidente" },
                { t: "Recursos afectados devueltos automáticamente a un estado seguro" },
                { t: "Consultas personalizadas sobre datos sin procesar de todos los productos" }
              ],
              explain: "Estas capacidades hacen que Defender XDR sea más que un conjunto de herramientas separadas."
            }
          },
          {
            type: "multi",
            q: "Which two products are part of the Microsoft Defender XDR suite?",
            options: ["Microsoft Defender Vulnerability Management", "Microsoft Entra ID Protection", "Microsoft Defender for Cloud", "Microsoft Sentinel", "Microsoft Purview"],
            answers: [0, 1],
            explain: "The suite includes Defender for Endpoint, Vulnerability Management, Office 365, Identity, Entra ID Protection, Cloud Apps, Defender TI and Exposure Management.",
            es: {
              q: "¿Cuáles son dos productos que forman parte del conjunto Microsoft Defender XDR?",
              options: ["Administración de vulnerabilidades de Microsoft Defender", "Microsoft Entra ID Protection", "Microsoft Defender for Cloud", "Microsoft Sentinel", "Microsoft Purview"],
              explain: "El conjunto incluye Defender para punto de conexión, Administración de vulnerabilidades, Office 365, Identity, Entra ID Protection, Cloud Apps, Defender TI y Exposure Management."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Automatic attack disruption waits for an analyst to approve each containment action.", answer: false, explain: "It acts in real time without waiting for human action." },
              { s: "Modern attacks often start with phishing and pivot to endpoints and cloud apps.", answer: true, explain: "That's why tools must share information." },
              { s: "The Defender portal combines Defender XDR data with Sentinel and Defender for Cloud.", answer: true, explain: "It's a unified security operations platform." }
            ],
            es: {
              statements: [
                { s: "La interrupción automática de ataques espera que un analista apruebe cada acción de contención.", explain: "Actúa en tiempo real sin esperar intervención humana." },
                { s: "Los ataques modernos suelen empezar con phishing y pasar a puntos de conexión y aplicaciones en la nube.", explain: "Por eso las herramientas deben compartir información." },
                { s: "El portal de Defender combina datos de Defender XDR con Sentinel y Defender for Cloud.", explain: "Es una plataforma unificada de operaciones de seguridad." }
              ]
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about Defender XDR.",
            parts: [
              "Defender XDR provides query-based access to ",
              { options: ["30 days", "90 days", "180 days"], answer: 0 },
              " of historic raw signals for hunting, and Entra ID Protection uses learnings from Entra ID, Microsoft Accounts and ",
              { options: ["Xbox", "Bing", "LinkedIn"], answer: 0 },
              "."
            ],
            explain: "Cross-product hunting covers 30 days of raw data; ID Protection learns from Entra ID, Microsoft Accounts and Xbox.",
            es: {
              q: "Complete la afirmación sobre Defender XDR.",
              parts: [
                "Defender XDR ofrece acceso por consultas a ",
                { options: ["30 días", "90 días", "180 días"] },
                " de señales históricas sin procesar para búsquedas, y Entra ID Protection usa aprendizajes de Entra ID, las cuentas Microsoft y ",
                { options: ["Xbox", "Bing", "LinkedIn"] },
                "."
              ],
              explain: "La búsqueda entre productos cubre 30 días de datos sin procesar; ID Protection aprende de Entra ID, las cuentas Microsoft y Xbox."
            }
          }
        ]
      }
    },
    {
      id: "defender-office",
      name: "Describe Microsoft Defender for Office 365",
      es: { name: "Descripción de Microsoft Defender para Office 365" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-threat-protection-with-microsoft-365-defender/3-describe-defender-office",
      quiz: {
        added: "2026-11-01",
        items: [
          {
            type: "match",
            q: "Match each feature to the Defender for Office 365 emphasis it belongs to.",
            values: ["Prevent and detect", "Investigate", "Respond"],
            targets: [
              { t: "Safe Links scanning", answer: 0 },
              { t: "Threat Explorer", answer: 1 },
              { t: "Zero-hour auto purge", answer: 2 },
              { t: "Campaigns view of coordinated attacks", answer: 1 }
            ],
            explain: "Features are grouped into preventing and detecting, investigating, and responding.",
            es: {
              q: "Relacione cada característica con el enfoque de Defender para Office 365 al que pertenece.",
              values: ["Prevenir y detectar", "Investigar", "Responder"],
              targets: [
                { t: "El análisis de Vínculos seguros" },
                { t: "El Explorador de amenazas" },
                { t: "La purga automática de hora cero" },
                { t: "La vista de campañas de ataques coordinados" }
              ],
              explain: "Las características se agrupan en prevenir y detectar, investigar y responder."
            }
          },
          {
            type: "single",
            q: "A company wants to identify employees likely to fall for phishing and train them before a real attack. Which feature fits?",
            options: ["Attack simulation training", "Anti-phishing policies", "Threat Explorer", "Safe Links"],
            answer: 0,
            explain: "Attack simulation training runs realistic attacks to find and train vulnerable users.",
            es: {
              q: "Una empresa quiere identificar a los empleados con más probabilidad de caer en phishing y capacitarlos antes de un ataque real. ¿Qué característica corresponde?",
              options: ["La formación con simulación de ataques", "Las directivas contra phishing", "El Explorador de amenazas", "Vínculos seguros"],
              explain: "La formación con simulación de ataques ejecuta ataques realistas para encontrar y capacitar a usuarios vulnerables."
            }
          },
          {
            type: "single",
            q: "What does Safe Attachments do after files pass the common virus detection engine?",
            options: ["Opens them in a virtual environment to observe their behavior", "Rewrites links in the file to scan them at click time", "Quarantines them until an admin approves", "Checks their hash against threat intelligence only"],
            answer: 0,
            explain: "Safe Attachments detonates files in a virtual environment as an extra layer of protection.",
            es: {
              q: "¿Qué hace Datos adjuntos seguros después de que los archivos pasan el motor común de detección de virus?",
              options: ["Los abre en un entorno virtual para observar su comportamiento", "Reescribe los vínculos del archivo para analizarlos al hacer clic", "Los pone en cuarentena hasta que un administrador los apruebe", "Compara su hash solo con inteligencia sobre amenazas"],
              explain: "Datos adjuntos seguros detona los archivos en un entorno virtual como capa adicional de protección."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Message trace shows whether an email was received, rejected, deferred or delivered.", answer: true, explain: "It follows messages through the organization." },
              { s: "Defender for Office 365 functionality is under Email & collaboration in the Defender portal.", answer: true, explain: "Including Explorer, Review and Campaigns." },
              { s: "Defender for Office 365 only protects Outlook, not Teams or SharePoint.", answer: false, explain: "It also covers collaboration tools like SharePoint and Teams." }
            ],
            es: {
              statements: [
                { s: "El seguimiento de mensajes muestra si un correo se recibió, rechazó, aplazó o entregó.", explain: "Sigue los mensajes a través de la organización." },
                { s: "Las funciones de Defender para Office 365 están en Correo electrónico y colaboración del portal de Defender.", explain: "Incluido el Explorador, Revisión y Campañas." },
                { s: "Defender para Office 365 solo protege Outlook, no Teams ni SharePoint.", explain: "También cubre herramientas de colaboración como SharePoint y Teams." }
              ]
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about Defender for Office 365.",
            parts: [
              "Defender for Office 365 is available in ",
              { options: ["Plan 1 and Plan 2", "a single plan", "Standard and Strict"], answer: 0 },
              ", and the Phishing Triage Agent requires ",
              { options: ["Plan 2 and Security Copilot", "Plan 1 only", "Plan 1 and Microsoft Sentinel"], answer: 0 },
              "."
            ],
            explain: "There are two plans, and the agent needs Plan 2 plus Security Copilot.",
            es: {
              q: "Complete la afirmación sobre Defender para Office 365.",
              parts: [
                "Defender para Office 365 está disponible en ",
                { options: ["Plan 1 y Plan 2", "un único plan", "Estándar y Estricto"] },
                ", y el agente de evaluación de phishing requiere ",
                { options: ["el Plan 2 y Security Copilot", "solo el Plan 1", "el Plan 1 y Microsoft Sentinel"] },
                "."
              ],
              explain: "Hay dos planes, y el agente necesita el Plan 2 más Security Copilot."
            }
          }
        ]
      }
    },
    {
      id: "defender-endpoint",
      name: "Describe Microsoft Defender for Endpoint",
      es: { name: "Descripción de Microsoft Defender para punto de conexión" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-threat-protection-with-microsoft-365-defender/4-describe-defender-endpoint",
      quiz: {
        added: "2026-11-01",
        items: [
          {
            type: "match",
            q: "Match each Defender for Endpoint capability to its description.",
            values: ["Attack surface reduction", "Next generation protection", "Endpoint detection and response", "Automated investigation and remediation"],
            targets: [
              { t: "First layer of defense: proper configuration and exploit mitigation", answer: 0 },
              { t: "Behavior-based and cloud-delivered antivirus protection", answer: 1 },
              { t: "Near real-time detections that show the full scope of a breach", answer: 2 },
              { t: "Examines alerts and takes immediate action to resolve breaches", answer: 3 }
            ],
            explain: "These are core components of Defender for Endpoint.",
            es: {
              q: "Relacione cada capacidad de Defender para punto de conexión con su descripción.",
              values: ["Reducción de la superficie expuesta a ataques", "Protección de próxima generación", "Detección y respuesta de puntos de conexión", "Investigación y corrección automatizadas"],
              targets: [
                { t: "Primera capa de defensa: configuración correcta y mitigación de vulnerabilidades" },
                { t: "Protección antivirus basada en comportamiento y entregada desde la nube" },
                { t: "Detecciones casi en tiempo real que muestran el alcance completo de una filtración" },
                { t: "Examina alertas y actúa de inmediato para resolver filtraciones" }
              ],
              explain: "Son componentes principales de Defender para punto de conexión."
            }
          },
          {
            type: "single",
            q: "A SOC wants Microsoft experts to proactively hunt threats in its environment and add context to findings. Which service fits?",
            options: ["Microsoft Defender Experts for Hunting", "Automated investigation and remediation", "Attack surface reduction rules", "Threat analytics reports"],
            answer: 0,
            explain: "Defender Experts for Hunting is a managed threat hunting service.",
            es: {
              q: "Un SOC quiere que expertos de Microsoft busquen amenazas de forma proactiva en su entorno y agreguen contexto a los hallazgos. ¿Qué servicio corresponde?",
              options: ["Microsoft Defender Experts for Hunting", "La investigación y corrección automatizadas", "Las reglas de reducción de la superficie expuesta a ataques", "Los informes de análisis de amenazas"],
              explain: "Defender Experts for Hunting es un servicio administrado de búsqueda de amenazas."
            }
          },
          {
            type: "multi",
            q: "Which two technologies does Defender for Endpoint embed?",
            options: ["Endpoint behavioral sensors in Windows", "Cloud security analytics", "Network sensors on domain controllers", "Email detonation sandboxes", "Cloud app discovery logs"],
            answers: [0, 1],
            explain: "It uses behavioral sensors, cloud security analytics and threat intelligence.",
            es: {
              q: "¿Cuáles son dos tecnologías que incorpora Defender para punto de conexión?",
              options: ["Sensores de comportamiento de puntos de conexión en Windows", "Análisis de seguridad en la nube", "Sensores de red en controladores de dominio", "Entornos aislados para detonar correo", "Registros de detección de aplicaciones en la nube"],
              explain: "Usa sensores de comportamiento, análisis de seguridad en la nube e inteligencia sobre amenazas."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Defender for Endpoint can protect routers and firewalls as well as laptops and phones.", answer: true, explain: "It covers a wide range of endpoints." },
              { s: "Defender for Endpoint integrates with Intune and Defender for Cloud.", answer: true, explain: "As well as other Defender suite components." },
              { s: "Defender for Endpoint is available in only one plan.", answer: false, explain: "It's available in Plan 1 and Plan 2." }
            ],
            es: {
              statements: [
                { s: "Defender para punto de conexión puede proteger routers y firewalls además de laptops y teléfonos.", explain: "Cubre una amplia variedad de puntos de conexión." },
                { s: "Defender para punto de conexión se integra con Intune y Defender for Cloud.", explain: "Además de otros componentes del conjunto Defender." },
                { s: "Defender para punto de conexión está disponible en un único plan.", explain: "Está disponible en Plan 1 y Plan 2." }
              ]
            }
          },
          {
            type: "single",
            q: "Which Defender for Endpoint feature helps assess the security state of devices and identify unprotected systems?",
            options: ["Microsoft Secure Score for Devices", "Device inventory", "Attack surface reduction", "Next-generation protection"],
            answer: 0,
            explain: "Secure Score for Devices assesses device security and recommends actions.",
            es: {
              q: "¿Qué característica de Defender para punto de conexión ayuda a evaluar el estado de seguridad de los dispositivos e identificar sistemas sin protección?",
              options: ["Microsoft Secure Score para dispositivos", "El inventario de dispositivos", "La reducción de la superficie expuesta a ataques", "La protección de próxima generación"],
              explain: "Secure Score para dispositivos evalúa la seguridad de los dispositivos y recomienda acciones."
            }
          }
        ]
      }
    },
    {
      id: "defender-cloud-apps",
      name: "Describe Microsoft Defender for Cloud Apps",
      es: { name: "Descripción de Microsoft Defender for Cloud Apps" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-threat-protection-with-microsoft-365-defender/5-describe-microsoft-cloud-app-security",
      quiz: {
        added: "2026-11-01",
        items: [
          {
            type: "single",
            q: "IT suspects employees are using unsanctioned SaaS apps. Which Defender for Cloud Apps capability identifies them from network traffic and an app catalog?",
            options: ["Cloud discovery", "App governance", "Session controls", "SaaS security posture management"],
            answer: 0,
            explain: "Discovery identifies apps, assesses them against 90+ risk indicators and lets you manage them with policies.",
            es: {
              q: "TI sospecha que los empleados usan aplicaciones SaaS no autorizadas. ¿Qué capacidad de Defender for Cloud Apps las identifica a partir del tráfico de red y un catálogo de aplicaciones?",
              options: ["La detección en la nube", "La gobernanza de aplicaciones", "Los controles de sesión", "La administración de la postura de seguridad de SaaS"],
              explain: "La detección identifica aplicaciones, las evalúa con más de 90 indicadores de riesgo y permite administrarlas con directivas."
            }
          },
          {
            type: "match",
            q: "Match each feature area to its purpose.",
            values: ["Information protection", "SSPM", "App governance"],
            targets: [
              { t: "Block downloads of confidential files to unmanaged devices", answer: 0 },
              { t: "Surface misconfigurations in connected SaaS apps", answer: 1 },
              { t: "Watch OAuth apps for unused or expired credentials", answer: 2 }
            ],
            explain: "Defender for Cloud Apps combines CASB, SSPM, threat protection and app-to-app protection.",
            es: {
              q: "Relacione cada área de características con su propósito.",
              values: ["Protección de la información", "SSPM", "Gobernanza de aplicaciones"],
              targets: [
                { t: "Bloquear descargas de archivos confidenciales a dispositivos no administrados" },
                { t: "Detectar configuraciones incorrectas en aplicaciones SaaS conectadas" },
                { t: "Vigilar aplicaciones OAuth con credenciales sin uso o vencidas" }
              ],
              explain: "Defender for Cloud Apps combina CASB, SSPM, protección contra amenazas y protección entre aplicaciones."
            }
          },
          {
            type: "multi",
            q: "Which two controls can Defender for Cloud Apps apply to protect sensitive files in SaaS apps?",
            options: ["Apply a sensitivity label", "Remove external collaborators on confidential files", "Detonate files in a sandbox before sharing", "Encrypt files with a customer-managed key in Key Vault", "Purge files with zero-hour auto purge"],
            answers: [0, 1],
            explain: "Controls include applying labels, blocking downloads to unmanaged devices and removing external collaborators.",
            es: {
              q: "¿Cuáles son dos controles que puede aplicar Defender for Cloud Apps para proteger archivos confidenciales en aplicaciones SaaS?",
              options: ["Aplicar una etiqueta de confidencialidad", "Quitar colaboradores externos de archivos confidenciales", "Detonar archivos en un entorno aislado antes de compartirlos", "Cifrar archivos con una clave administrada por el cliente en Key Vault", "Purgar archivos con la purga automática de hora cero"],
              explain: "Los controles incluyen aplicar etiquetas, bloquear descargas a dispositivos no administrados y quitar colaboradores externos."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "SSPM recommendations are based on industry standards like CIS and app provider best practices.", answer: true, explain: "SSPM data also feeds Microsoft Secure Score." },
              { s: "Defender for Cloud Apps provides user and entity behavior analysis (UEBA).", answer: true, explain: "Along with adaptive access control." },
              { s: "OAuth apps never have extensive permissions to other apps' data.", answer: false, explain: "They often do, which makes them susceptible to compromise." }
            ],
            es: {
              statements: [
                { s: "Las recomendaciones de SSPM se basan en estándares como CIS y en las prácticas recomendadas de cada proveedor.", explain: "Los datos de SSPM también alimentan Microsoft Secure Score." },
                { s: "Defender for Cloud Apps ofrece análisis del comportamiento de usuarios y entidades (UEBA).", explain: "Junto con el control de acceso adaptable." },
                { s: "Las aplicaciones OAuth nunca tienen permisos amplios sobre datos de otras aplicaciones.", explain: "Muchas veces los tienen, lo que las hace vulnerables." }
              ]
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about Defender for Cloud Apps.",
            parts: [
              "Its integration with ",
              { options: ["Microsoft Purview", "Microsoft Entra ID Protection", "Microsoft Sentinel"], answer: 0 },
              " enables data classification and ",
              { options: ["data loss prevention", "attack path analysis", "threat hunting"], answer: 0 },
              " in information protection policies."
            ],
            explain: "Purview integration brings classification types and DLP to Cloud Apps policies.",
            es: {
              q: "Complete la afirmación sobre Defender for Cloud Apps.",
              parts: [
                "Su integración con ",
                { options: ["Microsoft Purview", "Microsoft Entra ID Protection", "Microsoft Sentinel"] },
                " permite usar clasificación de datos y ",
                { options: ["prevención de pérdida de datos", "análisis de rutas de ataque", "búsqueda de amenazas"] },
                " en las directivas de protección de la información."
              ],
              explain: "La integración con Purview aporta tipos de clasificación y DLP a las directivas de Cloud Apps."
            }
          }
        ]
      }
    },
    {
      id: "defender-identity",
      name: "Describe Microsoft Defender for Identity",
      es: { name: "Descripción de Microsoft Defender for Identity" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-threat-protection-with-microsoft-365-defender/6-describe-defender-identity",
      quiz: {
        added: "2026-11-01",
        items: [
          {
            type: "single",
            q: "Where does Defender for Identity install its sensors?",
            options: [
              "On domain controllers and AD FS and AD CS servers",
              "On every employee laptop, as part of the Defender for Endpoint agent",
              "On Microsoft Entra Connect servers only",
              "On network firewalls at the perimeter"
            ],
            answer: 0,
            explain: "Sensors run on on-premises identity infrastructure servers.",
            es: {
              q: "¿Dónde instala sus sensores Defender for Identity?",
              options: [
                "En los controladores de dominio y en los servidores de AD FS y AD CS",
                "En la laptop de cada empleado, como parte del agente de Defender para punto de conexión",
                "Solo en servidores de Microsoft Entra Connect",
                "En los firewalls de red del perímetro"
              ],
              explain: "Los sensores se ejecutan en los servidores de la infraestructura de identidad local."
            }
          },
          {
            type: "match",
            q: "Match each kill chain stage to what Defender for Identity detects.",
            values: ["Reconnaissance", "Compromised credentials", "Lateral movements", "Domain dominance"],
            targets: [
              { t: "Attempts to gather information about users and the network", answer: 0 },
              { t: "Brute force attacks and failed authentications", answer: 1 },
              { t: "Attempts to move inside the network toward sensitive users", answer: 2 },
              { t: "Remote code execution on a domain controller", answer: 3 }
            ],
            explain: "Defender for Identity detects threats throughout the kill chain.",
            es: {
              q: "Relacione cada etapa de la cadena de ataque con lo que detecta Defender for Identity.",
              values: ["Reconocimiento", "Credenciales comprometidas", "Movimientos laterales", "Dominio del dominio"],
              targets: [
                { t: "Intentos de reunir información sobre usuarios y la red" },
                { t: "Ataques de fuerza bruta y autenticaciones fallidas" },
                { t: "Intentos de moverse dentro de la red hacia usuarios sensibles" },
                { t: "Ejecución remota de código en un controlador de dominio" }
              ],
              explain: "Defender for Identity detecta amenazas en toda la cadena de ataque."
            }
          },
          {
            type: "multi",
            q: "Which two remediation actions can Defender for Identity perform on on-premises identities?",
            options: ["Disable the user in Active Directory", "Reset the user's password", "Isolate the user's device", "Quarantine the user's email", "Remove the user's sensitivity labels"],
            answers: [0, 1],
            explain: "Examples are disabling the user in AD and forcing a password reset at next sign-in.",
            es: {
              q: "¿Cuáles son dos acciones de corrección que Defender for Identity puede hacer sobre identidades locales?",
              options: ["Deshabilitar al usuario en Active Directory", "Restablecer la contraseña del usuario", "Aislar el dispositivo del usuario", "Poner en cuarentena el correo del usuario", "Quitar las etiquetas de confidencialidad del usuario"],
              explain: "Por ejemplo, deshabilitar al usuario en AD y forzar un cambio de contraseña en el próximo inicio de sesión."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Defender for Identity builds a behavioral baseline for each user.", answer: true, explain: "It then flags anomalies." },
              { s: "Defender for Identity monitors only on-premises Active Directory.", answer: false, explain: "It also monitors Microsoft Entra ID and can ingest other identity providers." },
              { s: "Defender for Identity security assessments are available from Microsoft Secure Score.", answer: true, explain: "They help improve identity posture." }
            ],
            es: {
              statements: [
                { s: "Defender for Identity crea una línea base de comportamiento para cada usuario.", explain: "Después señala las anomalías." },
                { s: "Defender for Identity solo supervisa Active Directory local.", explain: "También supervisa Microsoft Entra ID y puede incorporar otros proveedores de identidad." },
                { s: "Las evaluaciones de seguridad de Defender for Identity están disponibles en Microsoft Secure Score.", explain: "Ayudan a mejorar la postura de identidades." }
              ]
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about Defender for Identity.",
            parts: [
              "Defender for Identity delivers an ",
              { options: ["identity threat detection and response (ITDR)", "endpoint detection and response (EDR)", "cloud access security broker (CASB)"], answer: 0 },
              " solution, and it identifies sensitive accounts with the riskiest ",
              { options: ["lateral movement paths", "privileged role assignments", "Group Policy settings"], answer: 0 },
              "."
            ],
            explain: "It's an ITDR solution that proactively reports risky lateral movement paths.",
            es: {
              q: "Complete la afirmación sobre Defender for Identity.",
              parts: [
                "Defender for Identity ofrece una solución de ",
                { options: ["detección y respuesta a amenazas de identidad (ITDR)", "detección y respuesta de puntos de conexión (EDR)", "agente de seguridad de acceso a la nube (CASB)"] },
                ", e identifica las cuentas sensibles con las ",
                { options: ["rutas de movimiento lateral", "asignaciones de roles con privilegios", "configuraciones de directivas de grupo"] },
                " más riesgosas."
              ],
              explain: "Es una solución ITDR que informa de forma proactiva las rutas de movimiento lateral riesgosas."
            }
          }
        ]
      }
    },
    {
      id: "vulnerability-management",
      name: "Describe Microsoft Defender Vulnerability Management",
      es: { name: "Descripción de Administración de vulnerabilidades de Microsoft Defender" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-threat-protection-with-microsoft-365-defender/6a-describe-defender-vulnerability-management",
      quiz: {
        added: "2026-11-01",
        items: [
          {
            type: "match",
            q: "Match each activity to the Defender Vulnerability Management core capability.",
            values: ["Continuous discovery and monitoring", "Risk-based prioritization", "Remediation and tracking"],
            targets: [
              { t: "Build a real-time inventory of software, certificates and browser extensions", answer: 0 },
              { t: "Rank vulnerabilities exploited in the wild above others", answer: 1 },
              { t: "Create a remediation task in Intune from a recommendation", answer: 2 }
            ],
            explain: "The three core capabilities identify what's vulnerable, focus on what's urgent and ensure fixes happen.",
            es: {
              q: "Relacione cada actividad con la capacidad principal de la Administración de vulnerabilidades de Defender.",
              values: ["Detección y supervisión continuas", "Priorización basada en riesgo", "Corrección y seguimiento"],
              targets: [
                { t: "Armar un inventario en tiempo real de software, certificados y extensiones del explorador" },
                { t: "Poner por encima las vulnerabilidades que se explotan activamente" },
                { t: "Crear una tarea de corrección en Intune a partir de una recomendación" }
              ],
              explain: "Las tres capacidades principales identifican lo vulnerable, se centran en lo urgente y aseguran que se corrija."
            }
          },
          {
            type: "single",
            q: "A team wants to scan unmanaged Windows devices for vulnerabilities by providing credentials for remote access. Which feature fits?",
            options: ["Authenticated scan for Windows", "Browser extensions assessment", "Agentless scanning for servers", "Network shares assessment"],
            answer: 0,
            explain: "Authenticated scans remotely check unmanaged Windows devices for software vulnerabilities.",
            es: {
              q: "Un equipo quiere analizar dispositivos Windows no administrados en busca de vulnerabilidades proporcionando credenciales de acceso remoto. ¿Qué característica corresponde?",
              options: ["El análisis autenticado para Windows", "La evaluación de extensiones del explorador", "El análisis sin agente para servidores", "La evaluación de recursos compartidos de red"],
              explain: "Los análisis autenticados revisan de forma remota los dispositivos Windows no administrados."
            }
          },
          {
            type: "multi",
            q: "Which two assessments does Defender Vulnerability Management provide?",
            options: ["Digital certificates assessment", "Security baselines assessment against CIS or STIG", "Attack path analysis", "SaaS posture assessment", "Identity exposure assessment"],
            answers: [0, 1],
            explain: "Assessments include baselines, software, network shares, browser extensions, certificates and hardware/firmware.",
            es: {
              q: "¿Cuáles son dos evaluaciones que ofrece la Administración de vulnerabilidades de Defender?",
              options: ["La evaluación de certificados digitales", "La evaluación de líneas base de seguridad frente a CIS o STIG", "El análisis de rutas de ataque", "La evaluación de la postura de SaaS", "La evaluación de la exposición de identidades"],
              explain: "Las evaluaciones incluyen líneas base, software, recursos compartidos de red, extensiones del explorador, certificados y hardware/firmware."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "A lower exposure score means devices are less exposed.", answer: true, explain: "It reflects current device exposure to threats." },
              { s: "Vulnerability management is located under Exposure management in the Defender portal.", answer: true, explain: "It's integrated into Security Exposure Management." },
              { s: "Defender Vulnerability Management only works for Windows devices.", answer: false, explain: "It covers Windows, macOS, Linux, Android, iOS and network devices." }
            ],
            es: {
              statements: [
                { s: "Una puntuación de exposición más baja significa que los dispositivos están menos expuestos.", explain: "Refleja la exposición actual de los dispositivos a las amenazas." },
                { s: "La administración de vulnerabilidades está dentro de Administración de la exposición en el portal de Defender.", explain: "Está integrada en Security Exposure Management." },
                { s: "La Administración de vulnerabilidades de Defender solo funciona con dispositivos Windows.", explain: "Cubre Windows, macOS, Linux, Android, iOS y dispositivos de red." }
              ]
            }
          },
          {
            type: "single",
            q: "A critical patch can't be installed yet. What can Defender Vulnerability Management offer to reduce risk in the meantime?",
            options: ["Alternate mitigations or blocking the vulnerable application", "Automatic removal of the affected devices from the domain until the patch can be installed", "Lowering the CVE's severity until patched", "Opening a Sentinel incident automatically"],
            answer: 0,
            explain: "It suggests alternate mitigations such as configuration changes and can block vulnerable apps for device groups.",
            es: {
              q: "Todavía no se puede instalar un parche crítico. ¿Qué puede ofrecer la Administración de vulnerabilidades de Defender para reducir el riesgo mientras tanto?",
              options: ["Mitigaciones alternativas o bloquear la aplicación vulnerable", "Quitar automáticamente del dominio los dispositivos afectados hasta que se pueda instalar el parche", "Bajar la gravedad de la CVE hasta que se aplique el parche", "Abrir un incidente de Sentinel automáticamente"],
              explain: "Sugiere mitigaciones alternativas, como cambios de configuración, y puede bloquear aplicaciones vulnerables para grupos de dispositivos."
            }
          }
        ]
      }
    },
    {
      id: "threat-intelligence",
      name: "Describe Microsoft Defender Threat Intelligence",
      es: { name: "Descripción de la inteligencia sobre amenazas de Microsoft Defender" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-threat-protection-with-microsoft-365-defender/6b-describe-defender-threat-intelligence",
      quiz: {
        added: "2026-11-01",
        items: [
          {
            type: "match",
            q: "Match each Defender TI capability to its purpose.",
            values: ["Threat analytics", "Intel profiles", "Intel explorer", "Projects"],
            targets: [
              { t: "Reports on tracked threats with data on whether they're active in your network", answer: 0 },
              { t: "Curated knowledge on threat actors, tools and vulnerabilities", answer: 1 },
              { t: "Search by keyword, indicator or CVE ID", answer: 2 },
              { t: "Organize indicators of compromise from an investigation", answer: 3 }
            ],
            explain: "These capabilities are in the Threat intelligence node of the Defender portal.",
            es: {
              q: "Relacione cada capacidad de Defender TI con su propósito.",
              values: ["Análisis de amenazas", "Perfiles de inteligencia", "Explorador de inteligencia", "Proyectos"],
              targets: [
                { t: "Informes sobre amenazas rastreadas con datos sobre si están activas en su red" },
                { t: "Conocimiento curado sobre actores de amenazas, herramientas y vulnerabilidades" },
                { t: "Búsquedas por palabra clave, indicador o identificador de CVE" },
                { t: "Organizar los indicadores de compromiso de una investigación" }
              ],
              explain: "Estas capacidades están en el nodo Inteligencia sobre amenazas del portal de Defender."
            }
          },
          {
            type: "single",
            q: "What problem does Defender TI solve for analysts investigating a suspicious domain?",
            options: [
              "It aggregates and enriches data like DNS and WHOIS in one interface",
              "It blocks the domain automatically at every firewall and proxy connected to the tenant",
              "It isolates devices that contacted the domain",
              "It scans the domain for vulnerabilities"
            ],
            answer: 0,
            explain: "Defender TI brings disconnected sources together so analysts focus on insight instead of gathering data.",
            es: {
              q: "¿Qué problema resuelve Defender TI para los analistas que investigan un dominio sospechoso?",
              options: [
                "Reúne y enriquece datos como DNS y WHOIS en una sola interfaz",
                "Bloquea el dominio automáticamente en todos los firewalls y proxies conectados al inquilino",
                "Aísla los dispositivos que contactaron el dominio",
                "Analiza el dominio en busca de vulnerabilidades"
              ],
              explain: "Defender TI reúne orígenes desconectados para que los analistas se centren en el análisis en lugar de juntar datos."
            }
          },
          {
            type: "multi",
            q: "Which two are built-in Security Copilot promptbooks for Defender TI?",
            options: ["Vulnerability impact assessment", "Threat actor profile", "Incident investigation", "Phishing triage", "Attack path summary"],
            answers: [0, 1],
            explain: "The two promptbooks generate vulnerability and threat actor reports.",
            es: {
              q: "¿Cuáles son dos libros de indicaciones integrados de Security Copilot para Defender TI?",
              options: ["Evaluación del impacto de una vulnerabilidad", "Perfil de un actor de amenazas", "Investigación de incidentes", "Evaluación de phishing", "Resumen de rutas de ataque"],
              explain: "Los dos libros de indicaciones generan informes sobre vulnerabilidades y actores de amenazas."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "The threat analytics dashboard has categories for latest threats, high-impact threats and highest exposure.", answer: true, explain: "It surfaces the most relevant reports." },
              { s: "The Threat Intelligence Briefing Agent delivers regular, customized threat briefings.", answer: true, explain: "It gathers and synthesizes intelligence autonomously." },
              { s: "CVE searches in Defender TI return only the CVE number with no context.", answer: false, explain: "Vulnerability articles include descriptions, mitigations, dark web chatter and a priority score." }
            ],
            es: {
              statements: [
                { s: "El panel de análisis de amenazas tiene categorías de amenazas recientes, de alto impacto y de mayor exposición.", explain: "Muestra los informes más relevantes." },
                { s: "El agente de informes de inteligencia sobre amenazas entrega informes periódicos y personalizados.", explain: "Reúne y sintetiza la inteligencia de forma autónoma." },
                { s: "Las búsquedas de CVE en Defender TI devuelven solo el número de CVE sin contexto.", explain: "Los artículos de vulnerabilidad incluyen descripciones, mitigaciones, menciones en la dark web y una puntuación de prioridad." }
              ]
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about Defender TI.",
            parts: [
              "The standalone Defender TI product is being retired on ",
              { options: ["August 1, 2026", "March 31, 2027", "January 1, 2025"], answer: 0 },
              ", and its capabilities are converging into ",
              { options: ["Defender XDR and Microsoft Sentinel", "Microsoft Purview", "Defender for Cloud only"], answer: 0 },
              "."
            ],
            explain: "Threat intelligence features remain accessible through the Defender portal.",
            es: {
              q: "Complete la afirmación sobre Defender TI.",
              parts: [
                "El producto independiente Defender TI se retira el ",
                { options: ["1 de agosto de 2026", "31 de marzo de 2027", "1 de enero de 2025"] },
                ", y sus capacidades se integran en ",
                { options: ["Defender XDR y Microsoft Sentinel", "Microsoft Purview", "solo Defender for Cloud"] },
                "."
              ],
              explain: "Las funciones de inteligencia sobre amenazas siguen accesibles desde el portal de Defender."
            }
          }
        ]
      }
    },
    {
      id: "exposure-management",
      name: "Describe Microsoft Security Exposure Management",
      es: { name: "Descripción de la administración de exposición de seguridad de Microsoft" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-threat-protection-with-microsoft-365-defender/6c-describe-security-exposure-management",
      quiz: {
        added: "2026-11-01",
        items: [
          {
            type: "single",
            q: "A team wants to see visually how assets connect across on-premises and cloud, for example whether a cloud misconfiguration exposes an on-premises server. What should it use?",
            options: ["The attack surface map", "Attack path analysis in Defender for Cloud", "The Sentinel investigation graph", "The device inventory"],
            answer: 0,
            explain: "The attack surface map visualizes the enterprise exposure graph.",
            es: {
              q: "Un equipo quiere ver de forma visual cómo se conectan los recursos entre el entorno local y la nube, por ejemplo si una configuración incorrecta en la nube expone un servidor local. ¿Qué debe usar?",
              options: ["El mapa de la superficie expuesta a ataques", "El análisis de rutas de ataque de Defender for Cloud", "El gráfico de investigación de Sentinel", "El inventario de dispositivos"],
              explain: "El mapa de la superficie expuesta a ataques visualiza el grafo de exposición empresarial."
            }
          },
          {
            type: "match",
            q: "Match each initiative type to what it assesses.",
            values: ["Workload initiative", "Horizontal threat initiative", "Threat analytics initiative", "Zero Trust initiative"],
            targets: [
              { t: "Risk for a domain such as endpoints or identities", answer: 0 },
              { t: "Risk for a threat category such as ransomware", answer: 1 },
              { t: "Risk based on current research on real threat actors", answer: 2 },
              { t: "Alignment with Microsoft's Zero Trust adoption framework", answer: 3 }
            ],
            explain: "Initiatives group metrics and recommendations with a score and target.",
            es: {
              q: "Relacione cada tipo de iniciativa con lo que evalúa.",
              values: ["Iniciativa de carga de trabajo", "Iniciativa de amenaza horizontal", "Iniciativa de análisis de amenazas", "Iniciativa de Confianza cero"],
              targets: [
                { t: "El riesgo de un dominio como los puntos de conexión o las identidades" },
                { t: "El riesgo de una categoría de amenaza como el ransomware" },
                { t: "El riesgo según investigaciones actuales sobre actores reales" },
                { t: "La alineación con el marco de adopción de Confianza cero de Microsoft" }
              ],
              explain: "Las iniciativas agrupan métricas y recomendaciones con una puntuación y un objetivo."
            }
          },
          {
            type: "single",
            q: "How does Security Exposure Management differ from Defender Vulnerability Management?",
            options: [
              "It works at a cross-workload level, connecting endpoints, identities and cloud into attack paths",
              "It only tracks individual CVEs on endpoints, with a more detailed software inventory than Vulnerability Management",
              "It focuses only on cloud misconfigurations",
              "It replaces Microsoft Secure Score"
            ],
            answer: 0,
            explain: "Vulnerability Management focuses on CVEs at the endpoint layer and is one data source for Exposure Management.",
            es: {
              q: "¿En qué se diferencia la administración de la exposición de seguridad de la Administración de vulnerabilidades de Defender?",
              options: [
                "Trabaja entre cargas de trabajo y conecta puntos de conexión, identidades y nube en rutas de ataque",
                "Solo sigue CVE individuales en los puntos de conexión, con un inventario de software más detallado que la Administración de vulnerabilidades",
                "Se centra solo en configuraciones incorrectas en la nube",
                "Reemplaza a Microsoft Secure Score"
              ],
              explain: "La Administración de vulnerabilidades se centra en CVE en la capa de puntos de conexión y es un origen de datos de Exposure Management."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Microsoft Secure Score can give partial credit, for example for protecting 50 of 100 users with MFA.", answer: true, explain: "Points are based on how fully a recommendation is implemented." },
              { s: "Cloud Secure Score comes from Microsoft Defender for Cloud.", answer: true, explain: "It measures posture across Azure, AWS and GCP." },
              { s: "Custom critical asset classifications aren't supported.", answer: false, explain: "A query builder lets you create custom classifications." }
            ],
            es: {
              statements: [
                { s: "Microsoft Secure Score puede dar puntaje parcial, por ejemplo por proteger con MFA a 50 de 100 usuarios.", explain: "Los puntos dependen de cuán completa está la recomendación." },
                { s: "Cloud Secure Score proviene de Microsoft Defender for Cloud.", explain: "Mide la postura en Azure, AWS y GCP." },
                { s: "No se admiten clasificaciones personalizadas de recursos críticos.", explain: "Un generador de consultas permite crear clasificaciones personalizadas." }
              ]
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about Security Exposure Management.",
            parts: [
              "At its core is the ",
              { options: ["enterprise exposure graph", "attack surface map", "Microsoft Secure Score"], answer: 0 },
              ", and it consolidates recommendations organized by ",
              { options: ["attack surface and issue type", "severity only", "product and license"], answer: 0 },
              "."
            ],
            explain: "The exposure graph maps assets; recommendations are grouped by surface (devices, cloud, identity, SaaS, data) and type.",
            es: {
              q: "Complete la afirmación sobre la administración de la exposición de seguridad.",
              parts: [
                "En su núcleo está el ",
                { options: ["grafo de exposición empresarial", "mapa de la superficie expuesta a ataques", "Microsoft Secure Score"] },
                ", y consolida recomendaciones organizadas por ",
                { options: ["superficie de ataque y tipo de problema", "solo gravedad", "producto y licencia"] },
                "."
              ],
              explain: "El grafo de exposición mapea los recursos; las recomendaciones se agrupan por superficie (dispositivos, nube, identidad, SaaS, datos) y tipo."
            }
          }
        ]
      }
    },
    {
      id: "defender-portal",
      name: "Describe the Microsoft Defender portal",
      es: { name: "Describir el portal de Microsoft Defender" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-threat-protection-with-microsoft-365-defender/7-describe-microsoft-defender-portal",
      quiz: {
        added: "2026-11-01",
        items: [
          {
            type: "match",
            q: "Match each Defender portal node to the product functionality it contains.",
            values: ["Endpoints", "Email & collaboration", "Cloud apps", "Identities"],
            targets: [
              { t: "Defender for Endpoint", answer: 0 },
              { t: "Defender for Office 365", answer: 1 },
              { t: "Defender for Cloud Apps", answer: 2 },
              { t: "Defender for Identity", answer: 3 }
            ],
            explain: "Each node in the left navigation maps to a Defender XDR product.",
            es: {
              q: "Relacione cada nodo del portal de Defender con el producto que contiene.",
              values: ["Puntos de conexión", "Correo electrónico y colaboración", "Aplicaciones en la nube", "Identidades"],
              targets: [
                { t: "Defender para punto de conexión" },
                { t: "Defender para Office 365" },
                { t: "Defender for Cloud Apps" },
                { t: "Defender for Identity" }
              ],
              explain: "Cada nodo del panel izquierdo corresponde a un producto de Defender XDR."
            }
          },
          {
            type: "single",
            q: "Which page brings together pending and completed remediation actions from Defender for Endpoint and Defender for Office 365?",
            options: ["The unified Action center", "The incidents queue", "Threat analytics", "Submissions"],
            answer: 0,
            explain: "The Action center lists remediation actions across devices, email and identities.",
            es: {
              q: "¿Qué página reúne las acciones de corrección pendientes y completadas de Defender para punto de conexión y Defender para Office 365?",
              options: ["El centro de actividades unificado", "La cola de incidentes", "El análisis de amenazas", "Envíos"],
              explain: "El centro de actividades enumera las acciones de corrección en dispositivos, correo e identidades."
            }
          },
          {
            type: "multi",
            q: "Which two Microsoft Entra roles can give access to the Defender portal?",
            options: ["Security Reader", "Security Operator", "User Administrator", "Billing Administrator", "Application Administrator"],
            answers: [0, 1],
            explain: "Roles such as Global Reader or Administrator, Security Reader or Administrator and Security Operator give access.",
            es: {
              q: "¿Cuáles son dos roles de Microsoft Entra que pueden dar acceso al portal de Defender?",
              options: ["Lector de seguridad", "Operador de seguridad", "Administrador de usuarios", "Administrador de facturación", "Administrador de aplicaciones"],
              explain: "Roles como Lector o Administrador global, Lector o Administrador de seguridad y Operador de seguridad dan acceso."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Customizing the navigation pane in the Defender portal changes it for all admins.", answer: false, explain: "Customization is specific to you." },
              { s: "Defender Experts for XDR is sold separately from other Defender XDR products.", answer: true, explain: "It's a managed XDR service." },
              { s: "The Assets tab includes inventories of devices, identities, applications, cloud and AI agents.", answer: true, explain: "It covers protected and discovered assets." }
            ],
            es: {
              statements: [
                { s: "Personalizar el panel de navegación del portal de Defender lo cambia para todos los administradores.", explain: "La personalización es solo suya." },
                { s: "Defender Experts for XDR se vende aparte de los demás productos de Defender XDR.", explain: "Es un servicio administrado de XDR." },
                { s: "La pestaña Recursos incluye inventarios de dispositivos, identidades, aplicaciones, nube y agentes de IA.", explain: "Abarca recursos protegidos y descubiertos." }
              ]
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about the Defender portal.",
            parts: [
              "Hunting queries can be reused to build ",
              { options: ["custom detection rules", "automation rules", "threat analytics reports"], answer: 0 },
              ", and the Cloud security node gives access to ",
              { options: ["Microsoft Defender for Cloud", "Microsoft Sentinel", "Microsoft Security Exposure Management"], answer: 0 },
              "."
            ],
            explain: "Custom detection rules run hunting queries automatically; Cloud security brings Defender for Cloud into the portal.",
            es: {
              q: "Complete la afirmación sobre el portal de Defender.",
              parts: [
                "Las consultas de búsqueda se pueden reutilizar para crear ",
                { options: ["reglas de detección personalizadas", "reglas de automatización", "informes de análisis de amenazas"] },
                ", y el nodo Seguridad en la nube da acceso a ",
                { options: ["Microsoft Defender for Cloud", "Microsoft Sentinel", "Microsoft Security Exposure Management"] },
                "."
              ],
              explain: "Las reglas de detección personalizadas ejecutan consultas de búsqueda automáticamente; Seguridad en la nube suma Defender for Cloud al portal."
            }
          }
        ]
      }
    },
    {
      id: "copilot-defender-xdr",
      name: "Describe Copilot integration with Microsoft Defender XDR",
      es: { name: "Descripción de la integración de Copilot con Microsoft Defender XDR" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-threat-protection-with-microsoft-365-defender/7a-describe-copilot-in-defender-xdr",
      quiz: {
        added: "2026-11-01",
        items: [
          {
            type: "match",
            q: "Match each Security Copilot agent to its role in Defender XDR.",
            values: ["Phishing Triage Agent", "Threat Intelligence Briefing Agent", "Threat Hunting Assistant", "Dynamic Threat Detection Agent"],
            targets: [
              { t: "Classifies user-reported suspicious emails", answer: 0 },
              { t: "Delivers regular, customized threat briefings", answer: 1 },
              { t: "Guides complete hunting sessions in natural language", answer: 2 },
              { t: "Finds threats that rule-based detection missed", answer: 3 }
            ],
            explain: "These agents work autonomously in the Defender portal.",
            es: {
              q: "Relacione cada agente de Security Copilot con su función en Defender XDR.",
              values: ["Agente de evaluación de phishing", "Agente de informes de inteligencia sobre amenazas", "Asistente de búsqueda de amenazas", "Agente de detección dinámica de amenazas"],
              targets: [
                { t: "Clasifica correos sospechosos que informan los usuarios" },
                { t: "Entrega informes periódicos y personalizados sobre amenazas" },
                { t: "Guía sesiones completas de búsqueda en lenguaje natural" },
                { t: "Encuentra amenazas que la detección basada en reglas no detectó" }
              ],
              explain: "Estos agentes trabajan de forma autónoma en el portal de Defender."
            }
          },
          {
            type: "single",
            q: "What's the difference between an incident summary and an incident report in Copilot for Defender XDR?",
            options: [
              "The report also includes analyst steps, automated actions, people involved and comments",
              "The summary is longer, includes every analyst comment and is exported automatically to Sentinel",
              "The summary includes remediation steps; the report doesn't",
              "The report covers only Sentinel incidents"
            ],
            answer: 0,
            explain: "Summaries give an overview; reports consolidate the full response history from Sentinel and Defender XDR.",
            es: {
              q: "¿Qué diferencia hay entre un resumen de incidente y un informe de incidente en Copilot para Defender XDR?",
              options: [
                "El informe también incluye los pasos de los analistas, las acciones automáticas, las personas involucradas y los comentarios",
                "El resumen es más largo, incluye todos los comentarios de los analistas y se exporta automáticamente a Sentinel",
                "El resumen incluye pasos de corrección; el informe no",
                "El informe cubre solo incidentes de Sentinel"
              ],
              explain: "Los resúmenes dan una visión general; los informes reúnen todo el historial de respuesta de Sentinel y Defender XDR."
            }
          },
          {
            type: "multi",
            q: "Which two features does Copilot in Microsoft Defender XDR (the embedded experience) support?",
            options: ["Script analysis", "Device and identity summaries", "Automatic attack disruption", "Creating custom detection rules automatically", "Approving remediation in the Action center"],
            answers: [0, 1],
            explain: "Embedded features include summaries, guided responses, script and file analysis, NL-to-KQL, reports and device/identity summaries.",
            es: {
              q: "¿Cuáles son dos características que admite Copilot en Microsoft Defender XDR (la experiencia integrada)?",
              options: ["El análisis de scripts", "Los resúmenes de dispositivos e identidades", "La interrupción automática de ataques", "Crear reglas de detección personalizadas automáticamente", "Aprobar correcciones en el centro de actividades"],
              explain: "Las características integradas incluyen resúmenes, respuestas guiadas, análisis de scripts y archivos, conversión a KQL, informes y resúmenes de dispositivos e identidades."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Copilot can summarize incidents containing up to 100 alerts into one summary.", answer: true, explain: "It creates the summary when you open the incident." },
              { s: "Users can pivot from the embedded experience to the standalone experience.", answer: true, explain: "Using Open in Security Copilot." },
              { s: "The Dynamic Threat Detection Agent requires a lengthy onboarding process.", answer: false, explain: "It runs in the Defender backend with no setup or onboarding." }
            ],
            es: {
              statements: [
                { s: "Copilot puede resumir en un solo resumen incidentes con hasta 100 alertas.", explain: "Crea el resumen al abrir el incidente." },
                { s: "Los usuarios pueden pasar de la experiencia integrada a la independiente.", explain: "Con la opción Abrir en Security Copilot." },
                { s: "El agente de detección dinámica de amenazas requiere un proceso de incorporación largo.", explain: "Se ejecuta en el back-end de Defender sin configuración ni incorporación." }
              ]
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about the standalone experience.",
            parts: [
              "Two plugins support Defender XDR in the standalone experience: Microsoft Defender XDR and ",
              { options: ["Natural language to KQL for Microsoft Defender XDR", "Microsoft Sentinel", "Microsoft Defender Threat Intelligence"], answer: 0 },
              ", and a built-in ",
              { options: ["promptbook", "agent", "workbook"], answer: 0 },
              " produces an incident investigation report."
            ],
            explain: "The XDR plugin and the NL-to-KQL plugin, plus a built-in incident investigation promptbook.",
            es: {
              q: "Complete la afirmación sobre la experiencia independiente.",
              parts: [
                "Dos complementos admiten Defender XDR en la experiencia independiente: Microsoft Defender XDR y ",
                { options: ["Lenguaje natural a KQL para Microsoft Defender XDR", "Microsoft Sentinel", "Inteligencia sobre amenazas de Microsoft Defender"] },
                ", y un ",
                { options: ["libro de indicaciones", "agente", "libro"] },
                " integrado genera un informe de investigación de incidentes."
              ],
              explain: "El complemento de XDR y el de lenguaje natural a KQL, más un libro de indicaciones integrado para investigar incidentes."
            }
          }
        ]
      }
    }
  ]
});
