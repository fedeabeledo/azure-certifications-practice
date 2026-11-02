// SC-900 > Introduction to Microsoft security solutions: learning path review (all five modules)
Catalog.pathQuiz("sc-900", "security-solutions", {
  added: "2026-11-01",
  items: [
    {
      type: "match",
      topic: "Azure infrastructure security",
      q: "Match each requirement to the Azure service that meets it.",
      values: ["Azure DDoS Protection", "Web Application Firewall", "Azure Bastion", "Azure Key Vault"],
      targets: [
        { t: "Mitigate volumetric floods at layers 3 and 4", answer: 0 },
        { t: "Block SQL injection against a public web app", answer: 1 },
        { t: "RDP to VMs without exposing public IPs", answer: 2 },
        { t: "Store certificates and keys protected by HSMs", answer: 3 }
      ],
      explain: "DDoS Protection covers network and transport layers, WAF covers layer 7 exploits, Bastion gives browser-based RDP/SSH and Key Vault stores secrets.",
      es: {
        topic: "Seguridad de la infraestructura de Azure",
        q: "Relacione cada requisito con el servicio de Azure que lo cumple.",
        values: ["Azure DDoS Protection", "Firewall de aplicaciones web", "Azure Bastion", "Azure Key Vault"],
        targets: [
          { t: "Mitigar inundaciones volumétricas en las capas 3 y 4" },
          { t: "Bloquear inyección de código SQL contra una aplicación web pública" },
          { t: "Conectarse por RDP a máquinas virtuales sin exponer IP públicas" },
          { t: "Almacenar certificados y claves protegidos con HSM" }
        ],
        explain: "DDoS Protection cubre las capas de red y transporte, WAF cubre ataques de capa 7, Bastion da RDP/SSH desde el explorador y Key Vault almacena secretos."
      }
    },
    {
      type: "single",
      topic: "Microsoft Sentinel",
      q: "A SOC must collect logs from AWS, firewalls and Microsoft 365, correlate them and launch a Logic Apps playbook when ransomware is detected. Which single solution covers both needs?",
      options: ["Microsoft Sentinel", "Microsoft Defender for Cloud Apps", "Microsoft Defender XDR", "Microsoft Defender for Cloud"],
      answer: 0,
      explain: "Sentinel combines SIEM (collection and correlation) with SOAR (automation rules and playbooks built on Logic Apps).",
      es: {
        topic: "Microsoft Sentinel",
        q: "Un SOC debe recopilar registros de AWS, firewalls y Microsoft 365, correlacionarlos y ejecutar un cuaderno de estrategias de Logic Apps cuando se detecta ransomware. ¿Qué solución única cubre ambas necesidades?",
        options: ["Microsoft Sentinel", "Microsoft Defender for Cloud Apps", "Microsoft Defender XDR", "Microsoft Defender for Cloud"],
        explain: "Sentinel combina SIEM (recopilación y correlación) con SOAR (reglas de automatización y cuadernos de estrategias basados en Logic Apps)."
      }
    },
    {
      type: "single",
      topic: "Defender for Cloud",
      q: "A company wants free posture visibility across Azure, AWS and GCP, with a secure score and recommendations based on the Microsoft cloud security benchmark. What should it enable, at minimum?",
      options: ["Foundational CSPM in Defender for Cloud", "The Defender CSPM plan", "Defender for Servers Plan 2", "Microsoft Sentinel"],
      answer: 0,
      explain: "Foundational CSPM is free and includes asset discovery, MCSB recommendations and secure score. Defender CSPM adds attack paths and the security explorer.",
      es: {
        topic: "Defender for Cloud",
        q: "Una empresa quiere visibilidad gratuita de la postura en Azure, AWS y GCP, con puntuación de seguridad y recomendaciones basadas en el banco de pruebas de seguridad en la nube de Microsoft. ¿Qué debe habilitar, como mínimo?",
        options: ["CSPM fundamental en Defender for Cloud", "El plan Defender CSPM", "Defender para servidores Plan 2", "Microsoft Sentinel"],
        explain: "CSPM fundamental es gratuito e incluye detección de recursos, recomendaciones de MCSB y puntuación de seguridad. Defender CSPM agrega rutas de ataque y el explorador de seguridad."
      }
    },
    {
      type: "yesno",
      statements: [
        { topic: "Security Copilot", s: "Security Copilot can give a user access to data that their own role doesn't allow.", answer: false, explain: "Copilot works within the user's existing permissions." },
        { topic: "Microsoft Sentinel", s: "Microsoft Sentinel is accessed through the Microsoft Defender portal.", answer: true, explain: "The Azure portal experience retires on March 31, 2027." },
        { topic: "Defender XDR", s: "Defender for Identity sensors run on domain controllers and AD FS servers.", answer: true, explain: "Also on AD CS servers." }
      ],
      es: {
        statements: [
          { topic: "Security Copilot", s: "Security Copilot puede dar a un usuario acceso a datos que su propio rol no le permite.", explain: "Copilot trabaja dentro de los permisos existentes del usuario." },
          { topic: "Microsoft Sentinel", s: "Microsoft Sentinel se usa desde el portal de Microsoft Defender.", explain: "La experiencia en Azure Portal se retira el 31 de marzo de 2027." },
          { topic: "Defender XDR", s: "Los sensores de Defender for Identity se ejecutan en controladores de dominio y servidores de AD FS.", explain: "También en servidores de AD CS." }
        ]
      }
    },
    {
      type: "single",
      topic: "Azure infrastructure security",
      q: "Two NSG rules match the same inbound packet: priority 200 allows it and priority 100 denies it. What happens?",
      options: ["The packet is denied", "The packet is allowed", "The more specific rule wins", "Allow wins because it's evaluated last"],
      answer: 0,
      explain: "Rules are processed by priority, lowest number first, and processing stops at the first match.",
      es: {
        topic: "Seguridad de la infraestructura de Azure",
        q: "Dos reglas de un NSG coinciden con el mismo paquete entrante: la de prioridad 200 lo permite y la de prioridad 100 lo deniega. ¿Qué sucede?",
        options: ["El paquete se deniega", "El paquete se permite", "Gana la regla más específica", "Gana el permiso porque se evalúa al final"],
        explain: "Las reglas se procesan por prioridad, primero el número más bajo, y el procesamiento se detiene en la primera coincidencia."
      }
    },
    {
      type: "multi",
      topic: "Defender XDR",
      q: "A user clicks a phishing link, malware lands on the laptop and the attacker uses stolen credentials against Active Directory. Which two Defender XDR products detect the endpoint and identity stages?",
      options: ["Defender for Endpoint", "Defender for Identity", "Defender for Cloud Apps app governance", "Defender for Office 365", "Defender Vulnerability Management"],
      answers: [0, 1],
      explain: "Defender for Endpoint covers the device; Defender for Identity covers on-premises AD. Defender XDR correlates both into one incident.",
      es: {
        topic: "Defender XDR",
        q: "Un usuario hace clic en un vínculo de phishing, se instala malware en la laptop y el atacante usa credenciales robadas contra Active Directory. ¿Qué dos productos de Defender XDR detectan las etapas de dispositivo e identidad?",
        options: ["Defender para punto de conexión", "Defender for Identity", "La gobernanza de aplicaciones de Defender for Cloud Apps", "Defender para Office 365", "Administración de vulnerabilidades de Defender"],
        explain: "Defender para punto de conexión cubre el dispositivo; Defender for Identity cubre AD local. Defender XDR correlaciona ambos en un solo incidente."
      }
    },
    {
      type: "dropdown",
      topic: "Security Copilot",
      q: "Complete the statement about Security Copilot.",
      parts: [
        "Security Copilot workspaces are powered by ",
        { options: ["security compute units (SCUs)", "Log Analytics workspaces", "Copilot licenses per user"], answer: 0 },
        ", and an effective prompt includes a goal, context, expectations and ",
        { options: ["a source", "a promptbook", "a plugin"], answer: 0 },
        "."
      ],
      explain: "Capacity is provisioned as SCUs; the four elements of an effective prompt are goal, context, expectations and source.",
      es: {
        topic: "Security Copilot",
        q: "Complete la afirmación sobre Security Copilot.",
        parts: [
          "Las áreas de trabajo de Security Copilot funcionan con ",
          { options: ["unidades de proceso de seguridad (SCU)", "áreas de trabajo de Log Analytics", "licencias de Copilot por usuario"] },
          ", y una indicación eficaz incluye un objetivo, contexto, expectativas y ",
          { options: ["un origen", "un libro de indicaciones", "un complemento"] },
          "."
        ],
        explain: "La capacidad se aprovisiona en SCU; los cuatro elementos de una indicación eficaz son objetivo, contexto, expectativas y origen."
      }
    },
    {
      type: "single",
      topic: "Defender for Cloud",
      q: "A security team wants to see how an internet-exposed VM with a vulnerability could be chained to reach a storage account with sensitive data. Which Defender for Cloud capability fits?",
      options: ["Attack path analysis", "Just-in-time VM access", "Regulatory compliance dashboard", "Adaptive network hardening"],
      answer: 0,
      explain: "Attack path analysis, part of Defender CSPM, models how weaknesses can be chained to reach high-value resources.",
      es: {
        topic: "Defender for Cloud",
        q: "Un equipo de seguridad quiere ver cómo una máquina virtual expuesta a Internet con una vulnerabilidad podría encadenarse hasta una cuenta de almacenamiento con datos confidenciales. ¿Qué capacidad de Defender for Cloud corresponde?",
        options: ["El análisis de rutas de ataque", "El acceso a máquinas virtuales Just-In-Time", "El panel de cumplimiento normativo", "El refuerzo de red adaptable"],
        explain: "El análisis de rutas de ataque, parte de Defender CSPM, modela cómo se pueden encadenar debilidades hasta llegar a recursos de alto valor."
      }
    },
    {
      type: "match",
      topic: "Defender XDR",
      q: "Match each scenario to the Microsoft Defender XDR product.",
      values: ["Defender for Office 365", "Defender for Cloud Apps", "Defender Vulnerability Management", "Security Exposure Management"],
      targets: [
        { t: "Retroactively remove a malicious email already delivered", answer: 0 },
        { t: "Discover unsanctioned SaaS apps used by employees", answer: 1 },
        { t: "Prioritize a CVE exploited in the wild on laptops", answer: 2 },
        { t: "Find choke points where attack paths converge across workloads", answer: 3 }
      ],
      explain: "ZAP is in Defender for Office 365, cloud discovery in Cloud Apps, CVE prioritization in MDVM and choke points in Exposure Management.",
      es: {
        topic: "Defender XDR",
        q: "Relacione cada escenario con el producto de Microsoft Defender XDR.",
        values: ["Defender para Office 365", "Defender for Cloud Apps", "Administración de vulnerabilidades de Defender", "Administración de la exposición de seguridad"],
        targets: [
          { t: "Quitar de forma retroactiva un correo malicioso ya entregado" },
          { t: "Descubrir aplicaciones SaaS no autorizadas que usan los empleados" },
          { t: "Priorizar una CVE explotada activamente en laptops" },
          { t: "Encontrar puntos de estrangulamiento donde convergen rutas de ataque" }
        ],
        explain: "ZAP está en Defender para Office 365, la detección en la nube en Cloud Apps, la priorización de CVE en MDVM y los puntos de estrangulamiento en Exposure Management."
      }
    },
    {
      type: "single",
      topic: "Security Copilot",
      q: "An analyst works in the Defender portal and wants an incident summary without leaving the incident page. Which Security Copilot experience is this?",
      options: ["The embedded experience", "The standalone experience", "A custom promptbook in a new workspace", "The Security Store"],
      answer: 0,
      explain: "Embedded experiences put Copilot capabilities inside products such as Defender XDR; the standalone experience is the dedicated portal.",
      es: {
        topic: "Security Copilot",
        q: "Un analista trabaja en el portal de Defender y quiere un resumen del incidente sin salir de la página del incidente. ¿Qué experiencia de Security Copilot es esta?",
        options: ["La experiencia integrada", "La experiencia independiente", "Un libro de indicaciones personalizado en un área de trabajo nueva", "La Security Store"],
        explain: "Las experiencias integradas ponen las capacidades de Copilot dentro de productos como Defender XDR; la experiencia independiente es el portal dedicado."
      }
    },
    {
      type: "single",
      topic: "Microsoft Sentinel",
      q: "Low-severity alerts from different products, spread over several days, turn out to be one multistage attack. Which Sentinel capability is designed to surface this?",
      options: ["Fusion correlation", "UEBA", "Threat intelligence matching", "Automation rules"],
      answer: 0,
      explain: "Fusion uses machine learning to correlate low-fidelity signals into high-fidelity multistage incidents.",
      es: {
        topic: "Microsoft Sentinel",
        q: "Alertas de baja gravedad de distintos productos, repartidas en varios días, resultan ser un único ataque en varias fases. ¿Qué capacidad de Sentinel está diseñada para detectarlo?",
        options: ["La correlación Fusion", "UEBA", "La coincidencia con inteligencia sobre amenazas", "Las reglas de automatización"],
        explain: "Fusion usa aprendizaje automático para correlacionar señales de baja fidelidad en incidentes de varias fases de alta fidelidad."
      }
    },
    {
      type: "yesno",
      statements: [
        { topic: "Azure infrastructure security", s: "Azure Firewall Premium adds IDPS with signature-based detection.", answer: true, explain: "Premium includes more than 67,000 signatures." },
        { topic: "Defender for Cloud", s: "A higher secure score in Defender for Cloud means higher identified risk.", answer: false, explain: "The higher the score, the lower the identified risk." },
        { topic: "Defender XDR", s: "Advanced hunting in the Defender portal can query raw data from both Defender XDR and Sentinel.", answer: true, explain: "Up to 30 days of raw data." }
      ],
      es: {
        statements: [
          { topic: "Seguridad de la infraestructura de Azure", s: "Azure Firewall Premium agrega IDPS con detección basada en firmas.", explain: "Premium incluye más de 67 000 firmas." },
          { topic: "Defender for Cloud", s: "Una puntuación de seguridad más alta en Defender for Cloud significa más riesgo identificado.", explain: "Cuanto más alta la puntuación, menor el riesgo identificado." },
          { topic: "Defender XDR", s: "La búsqueda avanzada del portal de Defender puede consultar datos sin procesar de Defender XDR y de Sentinel.", explain: "Hasta 30 días de datos sin procesar." }
        ]
      }
    },
    {
      type: "multi",
      topic: "Defender for Cloud",
      q: "Which two are pillars that Defender for Cloud combines as a cloud-native application protection platform (CNAPP)?",
      options: ["Cloud workload protection (CWPP)", "Cloud security posture management (CSPM)", "Security information and event management (SIEM)", "Extended detection and response (XDR)", "Cloud access security broker (CASB)"],
      answers: [0, 1],
      explain: "Defender for Cloud combines DevSecOps, CSPM, CWPP and AI security.",
      es: {
        topic: "Defender for Cloud",
        q: "¿Cuáles son dos pilares que combina Defender for Cloud como plataforma de protección de aplicaciones nativas de la nube (CNAPP)?",
        options: ["La protección de cargas de trabajo en la nube (CWPP)", "La administración de la postura de seguridad en la nube (CSPM)", "Administración de eventos e información de seguridad (SIEM)", "Detección y respuesta extendidas (XDR)", "Agente de seguridad de acceso a la nube (CASB)"],
        explain: "Defender for Cloud combina DevSecOps, CSPM, CWPP y seguridad de IA."
      }
    },
    {
      type: "single",
      topic: "Azure infrastructure security",
      q: "A company with many VNets across subscriptions wants one central, stateful service to filter outbound traffic by FQDN and apply threat intelligence. What should it deploy?",
      options: ["Azure Firewall in a hub VNet", "A network security group on every subnet with FQDN-based rules", "Web Application Firewall on Application Gateway", "Azure Firewall Manager alone, without a firewall"],
      answer: 0,
      explain: "Azure Firewall is a centralized, stateful firewall with application (FQDN) rules and threat intelligence; NSGs filter only by IP and port within VNets.",
      es: {
        topic: "Seguridad de la infraestructura de Azure",
        q: "Una empresa con muchas redes virtuales en varias suscripciones quiere un servicio central con estado que filtre el tráfico saliente por FQDN y aplique inteligencia sobre amenazas. ¿Qué debe implementar?",
        options: ["Azure Firewall en una red virtual central", "Un grupo de seguridad de red en cada subred con reglas basadas en FQDN", "Firewall de aplicaciones web en Application Gateway", "Azure Firewall Manager solo, sin un firewall"],
        explain: "Azure Firewall es un firewall centralizado con estado, con reglas de aplicación (FQDN) e inteligencia sobre amenazas; los NSG filtran solo por IP y puerto dentro de las redes virtuales."
      }
    },
    {
      type: "dropdown",
      topic: "Microsoft Sentinel",
      q: "Complete the statement about Microsoft Sentinel.",
      parts: [
        "Sentinel maps detection coverage to ",
        { options: ["MITRE ATT&CK", "the Cyber Kill Chain", "the CIS benchmark"], answer: 0 },
        ", and solutions with connectors, rules and workbooks are deployed from the ",
        { options: ["Content hub", "data connectors page", "partner catalog"], answer: 0 },
        "."
      ],
      explain: "Coverage is mapped to MITRE ATT&CK tactics and techniques; the Content hub delivers packaged solutions.",
      es: {
        topic: "Microsoft Sentinel",
        q: "Complete la afirmación sobre Microsoft Sentinel.",
        parts: [
          "Sentinel asigna la cobertura de detección a ",
          { options: ["MITRE ATT&CK", "la Cyber Kill Chain", "el banco de pruebas de CIS"] },
          ", y las soluciones con conectores, reglas y libros se implementan desde el ",
          { options: ["centro de contenido", "página de conectores de datos", "catálogo de partners"] },
          "."
        ],
        explain: "La cobertura se asigna a tácticas y técnicas de MITRE ATT&CK; el centro de contenido entrega soluciones empaquetadas."
      }
    },
    {
      type: "single",
      topic: "Defender XDR",
      q: "Which Defender XDR capability can automatically isolate devices and disable accounts during an attack in progress, without waiting for an analyst?",
      options: ["Automatic attack disruption", "Attack surface reduction rules", "Threat analytics reports", "Secure Score recommendations"],
      answer: 0,
      explain: "Automatic attack disruption uses high-confidence correlated signals to contain attacks in real time.",
      es: {
        topic: "Defender XDR",
        q: "¿Qué capacidad de Defender XDR puede aislar dispositivos y deshabilitar cuentas automáticamente durante un ataque en curso, sin esperar a un analista?",
        options: ["La interrupción automática de ataques", "Las reglas de reducción de la superficie expuesta a ataques", "Los informes de análisis de amenazas", "Las recomendaciones de Secure Score"],
        explain: "La interrupción automática de ataques usa señales correlacionadas de alta confianza para contener ataques en tiempo real."
      }
    },
    {
      type: "single",
      topic: "Security Copilot",
      q: "In Security Copilot, what's the relationship between plugins and capabilities?",
      options: [
        "A plugin is a collection of capabilities",
        "A capability is a collection of plugins",
        "They're two names for the same thing",
        "Capabilities only exist in agents"
      ],
      answer: 0,
      explain: "Capabilities are individual functions; plugins group them, and the orchestrator picks which ones to use.",
      es: {
        topic: "Security Copilot",
        q: "En Security Copilot, ¿qué relación hay entre los complementos y las capacidades?",
        options: [
          "Un complemento es un conjunto de capacidades",
          "Una capacidad es un conjunto de complementos",
          "Son dos nombres para lo mismo",
          "Las capacidades solo existen en los agentes"
        ],
        explain: "Las capacidades son funciones individuales; los complementos las agrupan y el orquestador elige cuáles usar."
      }
    },
    {
      type: "single",
      topic: "Defender for Cloud",
      q: "Developers accidentally commit an AI service key to a repository. Which Defender for Cloud capability can find it before deployment?",
      options: ["Defender for DevOps code scanning", "Defender for Servers", "Just-in-time VM access", "Defender for AI Services"],
      answer: 0,
      explain: "DevOps security shifts checks left and detects exposed secrets in code and configuration files.",
      es: {
        topic: "Defender for Cloud",
        q: "Unos desarrolladores suben por error una clave de un servicio de IA a un repositorio. ¿Qué capacidad de Defender for Cloud puede encontrarla antes de la implementación?",
        options: ["El análisis de código de Defender for DevOps", "Defender para servidores", "El acceso a máquinas virtuales Just-In-Time", "Defender for AI Services"],
        explain: "La seguridad de DevOps adelanta los controles y detecta secretos expuestos en archivos de código y configuración."
      }
    },
    {
      type: "yesno",
      statements: [
        { topic: "Microsoft Sentinel", s: "Hunting queries in Sentinel can be turned into custom analytics rules.", answer: true, explain: "So findings become ongoing detections." },
        { topic: "Azure infrastructure security", s: "Azure DDoS Protection blocks HTTP floods at layer 7 by itself.", answer: false, explain: "Layer 7 attacks need a WAF." },
        { topic: "Security Copilot", s: "Customer data in Security Copilot is used to train the foundation models.", answer: false, explain: "Your data isn't used to train them." }
      ],
      es: {
        statements: [
          { topic: "Microsoft Sentinel", s: "Las consultas de búsqueda de Sentinel se pueden convertir en reglas de análisis personalizadas.", explain: "Así los hallazgos se vuelven detecciones permanentes." },
          { topic: "Seguridad de la infraestructura de Azure", s: "Azure DDoS Protection bloquea por sí solo las inundaciones HTTP de capa 7.", explain: "Los ataques de capa 7 necesitan un WAF." },
          { topic: "Security Copilot", s: "Los datos del cliente en Security Copilot se usan para entrenar los modelos fundacionales.", explain: "Sus datos no se usan para entrenarlos." }
        ]
      }
    },
    {
      type: "single",
      topic: "Defender XDR",
      q: "A team wants to know which domains (devices, identities, cloud, SaaS) are most exposed to ransomware, with a score and target to track progress. What should it use?",
      options: ["A Security Exposure Management initiative", "Microsoft Secure Score for Devices", "A Defender for Office 365 campaign view filtered by ransomware campaigns", "A Defender for Cloud regulatory standard"],
      answer: 0,
      explain: "Initiatives, such as horizontal threat initiatives for ransomware, group metrics and recommendations with a score and target.",
      es: {
        topic: "Defender XDR",
        q: "Un equipo quiere saber qué dominios (dispositivos, identidades, nube, SaaS) están más expuestos al ransomware, con una puntuación y un objetivo para seguir el avance. ¿Qué debe usar?",
        options: ["Una iniciativa de la administración de la exposición de seguridad", "Microsoft Secure Score para dispositivos", "La vista de campañas de Defender para Office 365 filtrada por campañas de ransomware", "Un estándar normativo de Defender for Cloud"],
        explain: "Las iniciativas, como las de amenaza horizontal para ransomware, agrupan métricas y recomendaciones con una puntuación y un objetivo."
      }
    },
    {
      type: "single",
      topic: "Security Copilot",
      q: "Usage spikes during a major incident and exceeds the provisioned SCUs. How is the extra usage handled?",
      options: ["Overage units are billed on demand, up to a cap you set or unlimited", "Copilot stops answering until the next month", "Extra prompts are queued until the next billing hour", "Capacity scales automatically at no extra cost"],
      answer: 0,
      explain: "Provisioned SCUs are billed hourly; overage units are billed on demand and can be capped or unlimited.",
      es: {
        topic: "Security Copilot",
        q: "Durante un incidente grave el uso se dispara y supera las SCU aprovisionadas. ¿Cómo se maneja el uso adicional?",
        options: ["Las unidades excedentes se facturan a demanda, hasta un límite que usted define o sin límite", "Copilot deja de responder hasta el mes siguiente", "Las indicaciones adicionales quedan en cola hasta la próxima hora de facturación", "La capacidad escala automáticamente sin costo adicional"],
        explain: "Las SCU aprovisionadas se facturan por hora; las unidades excedentes se facturan a demanda y pueden tener límite o no."
      }
    },
    {
      type: "single",
      topic: "Azure infrastructure security",
      q: "Auditors require recordings of every administrative RDP and SSH session to VMs. Which Azure Bastion tier meets this?",
      options: ["Premium", "Basic", "Developer", "Standard"],
      answer: 0,
      explain: "Bastion Premium adds session recording and private-only deployment.",
      es: {
        topic: "Seguridad de la infraestructura de Azure",
        q: "Los auditores exigen grabaciones de cada sesión administrativa de RDP y SSH a las máquinas virtuales. ¿Qué nivel de Azure Bastion lo cumple?",
        options: ["Premium", "Básico", "Desarrollador", "Estándar"],
        explain: "Bastion Premium agrega la grabación de sesiones y la implementación solo privada."
      }
    },
    {
      type: "single",
      topic: "Azure infrastructure security",
      q: "A regulation requires encryption keys to be protected by hardware security modules. Which Key Vault tier should you choose?",
      options: ["Premium", "Standard", "Basic", "Free"],
      answer: 0,
      explain: "The Premium tier offers HSM-protected keys; Standard uses software-based protection.",
      es: {
        topic: "Seguridad de la infraestructura de Azure",
        q: "Una normativa exige que las claves de cifrado estén protegidas por módulos de seguridad de hardware. ¿Qué nivel de Key Vault debe elegir?",
        options: ["Premium", "Estándar", "Básico", "Gratis"],
        explain: "El nivel Premium ofrece claves protegidas por HSM; Estándar usa protección por software."
      }
    },
    {
      type: "single",
      topic: "Defender for Cloud",
      q: "A company subject to PCI DSS wants its compliance status shown in Defender for Cloud alongside the default benchmark. What should it do?",
      options: ["Add the PCI DSS standard to the regulatory compliance dashboard", "Replace MCSB, since only one standard can be active", "Assign PCI DSS as an Azure Policy initiative outside Defender for Cloud", "Enable Defender for Servers on in-scope VMs"],
      answer: 0,
      explain: "MCSB is the default, but other standards can be added to the regulatory compliance dashboard.",
      es: {
        topic: "Defender for Cloud",
        q: "Una empresa sujeta a PCI DSS quiere ver su estado de cumplimiento en Defender for Cloud junto al banco de pruebas predeterminado. ¿Qué debe hacer?",
        options: ["Agregar el estándar PCI DSS al panel de cumplimiento normativo", "Reemplazar el MCSB, porque solo puede haber un estándar activo", "Asignar PCI DSS como iniciativa de Azure Policy fuera de Defender for Cloud", "Habilitar Defender para servidores en las máquinas del alcance"],
        explain: "El MCSB es el predeterminado, pero se pueden agregar otros estándares al panel de cumplimiento normativo."
      }
    },
    {
      type: "single",
      topic: "Microsoft Sentinel",
      q: "A SOC must keep years of logs for investigations at low cost, while recent high-value data stays available for real-time detection. How does Sentinel support this?",
      options: ["Analytics tier for recent data and data lake tier for long-term storage", "A single tier that keeps all data for 30 days", "Basic logs in the analytics tier for everything", "Exporting logs to Defender for Cloud"],
      answer: 0,
      explain: "The analytics tier is a Log Analytics workspace; the data lake tier is mirrored long-term storage.",
      es: {
        topic: "Microsoft Sentinel",
        q: "Un SOC debe conservar años de registros para investigaciones a bajo costo, mientras los datos recientes de alto valor siguen disponibles para la detección en tiempo real. ¿Cómo lo admite Sentinel?",
        options: ["Nivel de análisis para datos recientes y nivel de lago de datos para almacenamiento a largo plazo", "Un único nivel que conserva todos los datos durante 30 días", "Registros básicos en el nivel de análisis para todo", "Exportar los registros a Defender for Cloud"],
        explain: "El nivel de análisis es un área de trabajo de Log Analytics; el nivel de lago de datos es almacenamiento reflejado a largo plazo."
      }
    },
    {
      type: "single",
      topic: "Defender XDR",
      q: "Users click URLs in emails and Teams messages that only become malicious after delivery. Which Defender for Office 365 feature checks the URL at click time?",
      options: ["Safe Links", "Safe Attachments", "Zero-hour auto purge", "Anti-phishing policies"],
      answer: 0,
      explain: "Safe Links scans and verifies URLs when users click them in email and collaboration tools.",
      es: {
        topic: "Defender XDR",
        q: "Los usuarios hacen clic en URL de correos y mensajes de Teams que se vuelven maliciosas después de la entrega. ¿Qué característica de Defender para Office 365 revisa la URL en el momento del clic?",
        options: ["Vínculos seguros", "Datos adjuntos seguros", "La purga automática de hora cero", "Las directivas contra phishing"],
        explain: "Vínculos seguros analiza y verifica las URL cuando los usuarios hacen clic en ellas en el correo y las herramientas de colaboración."
      }
    },
    {
      type: "single",
      topic: "Azure infrastructure security",
      q: "A small company wants DDoS protection for just two public IPs and doesn't need DDoS rapid response support or cost protection. Which option fits best?",
      options: ["DDoS IP Protection", "DDoS Network Protection", "Azure Firewall Basic", "Web Application Firewall on Front Door"],
      answer: 0,
      explain: "DDoS IP Protection is pay-per-protected-IP with the same core engineering, without Network Protection's value-added services.",
      es: {
        topic: "Seguridad de la infraestructura de Azure",
        q: "Una empresa chica quiere protección contra DDoS para solo dos IP públicas y no necesita el soporte de respuesta rápida ni la protección de costos. ¿Qué opción es la más adecuada?",
        options: ["DDoS IP Protection", "DDoS Network Protection", "Azure Firewall Básico", "Firewall de aplicaciones web en Front Door"],
        explain: "DDoS IP Protection se paga por IP protegida, con la misma ingeniería base pero sin los servicios de valor agregado de Network Protection."
      }
    }
  ]
});
