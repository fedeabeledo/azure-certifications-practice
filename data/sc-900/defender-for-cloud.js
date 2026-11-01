// SC-900 > Introduction to Microsoft security solutions > Describe the security management capabilities of Azure
Catalog.module("sc-900", {
  id: "defender-for-cloud",
  name: "Describe the security management capabilities of Azure",
  es: { name: "Describir las funcionalidades de administración de seguridad de Azure" },
  url: "https://learn.microsoft.com/en-us/training/modules/describe-security-management-capabilities-of-azure/",
  quiz: {
    added: "2026-11-01",
    items: [
      {
        type: "single",
        topic: "Cloud security posture management",
        q: "A security lead wants a single number that shows at a glance how secure the multicloud environment is, where higher means lower risk. What should they look at?",
        options: ["Secure score in Defender for Cloud", "The regulatory compliance dashboard only", "Attack path analysis", "The Defender for DevOps console"],
        answer: 0,
        explain: "Secure score aggregates findings into one score: the higher the score, the lower the identified risk.",
        es: {
          topic: "Administración de la postura de seguridad en la nube",
          q: "Un responsable de seguridad quiere un solo número que muestre de un vistazo qué tan seguro es el entorno multinube, donde más alto signifique menos riesgo. ¿Qué debe mirar?",
          options: ["La puntuación de seguridad de Defender for Cloud", "Solo el panel de cumplimiento normativo", "El análisis de rutas de ataque", "La consola de Defender for DevOps"],
          explain: "La puntuación de seguridad reúne los hallazgos en un solo valor: cuanto más alto, menor es el riesgo identificado."
        }
      },
      {
        type: "match",
        topic: "Defender for Cloud pillars",
        q: "Match each capability to the Defender for Cloud pillar.",
        values: ["DevSecOps", "CSPM", "CWPP"],
        targets: [
          { t: "Scan code repositories for exposed secrets before deployment", answer: 0 },
          { t: "Continuously assess misconfigurations and produce a secure score", answer: 1 },
          { t: "Detect threats to servers, storage and databases with Defender plans", answer: 2 },
          { t: "Assess infrastructure-as-code templates in pipelines", answer: 0 }
        ],
        explain: "DevSecOps shifts security left into pipelines, CSPM manages posture and CWPP protects running workloads.",
        es: {
          topic: "Pilares de Defender for Cloud",
          q: "Relacione cada capacidad con el pilar de Defender for Cloud.",
          values: ["DevSecOps", "CSPM", "CWPP"],
          targets: [
            { t: "Analizar repositorios de código en busca de secretos expuestos antes de implementar" },
            { t: "Evaluar continuamente las configuraciones incorrectas y generar una puntuación de seguridad" },
            { t: "Detectar amenazas en servidores, almacenamiento y bases de datos con planes de Defender" },
            { t: "Evaluar plantillas de infraestructura como código en las canalizaciones" }
          ],
          explain: "DevSecOps lleva la seguridad a las canalizaciones, CSPM administra la postura y CWPP protege las cargas en ejecución."
        }
      },
      {
        type: "single",
        topic: "Security policies and standards",
        q: "What happens when Defender for Cloud is first enabled on a subscription?",
        options: [
          "The Microsoft cloud security benchmark is assigned automatically as the default initiative",
          "All Defender plans are enabled and billed automatically",
          "Every resource gets a ReadOnly lock",
          "ISO 27001 is assigned as the only standard"
        ],
        answer: 0,
        explain: "MCSB is the default built-in initiative and drives the built-in recommendations and secure score.",
        es: {
          topic: "Directivas y estándares de seguridad",
          q: "¿Qué pasa cuando se habilita Defender for Cloud por primera vez en una suscripción?",
          options: [
            "Se asigna automáticamente el punto de referencia de seguridad en la nube de Microsoft como iniciativa predeterminada",
            "Se habilitan y facturan automáticamente todos los planes de Defender",
            "Cada recurso recibe un bloqueo ReadOnly",
            "Se asigna ISO 27001 como único estándar"
          ],
          explain: "El MCSB es la iniciativa integrada predeterminada y genera las recomendaciones integradas y la puntuación de seguridad."
        }
      },
      {
        type: "multi",
        topic: "Cloud security posture management",
        q: "Which two capabilities require the optional Defender CSPM plan rather than foundational CSPM?",
        options: ["Attack path analysis", "Cloud security explorer", "Secure score", "Asset discovery", "MCSB compliance"],
        answers: [0, 1],
        explain: "Foundational CSPM is free and includes asset discovery, assessment, MCSB and secure score. Attack paths, the explorer, governance, DSPM and AI SPM are advanced.",
        es: {
          topic: "Administración de la postura de seguridad en la nube",
          q: "¿Cuáles son dos capacidades que requieren el plan opcional Defender CSPM en lugar del CSPM básico?",
          options: ["El análisis de rutas de ataque", "El explorador de seguridad en la nube", "La puntuación de seguridad", "La detección de recursos", "El cumplimiento del MCSB"],
          explain: "El CSPM básico es gratuito e incluye detección de recursos, evaluación, MCSB y puntuación de seguridad. Las rutas de ataque, el explorador, la gobernanza, DSPM y AI SPM son avanzados."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "Defender for Cloud pillars", s: "Defender for Cloud can protect workloads in AWS and GCP as well as Azure.", answer: true, explain: "It covers Azure, other clouds and on-premises." },
          { topic: "Security policies and standards", s: "Fixing one recommendation can improve compliance with several standards at once.", answer: true, explain: "For example, MFA for privileged accounts helps with ISO 27001, NIST and PCI DSS." },
          { topic: "Enhanced security", s: "Defender plans can't run at the same time; you must choose one.", answer: false, explain: "Plans are enabled separately and run simultaneously." }
        ],
        es: {
          statements: [
            { topic: "Pilares de Defender for Cloud", s: "Defender for Cloud puede proteger cargas en AWS y GCP además de Azure.", explain: "Abarca Azure, otras nubes y el entorno local." },
            { topic: "Directivas y estándares de seguridad", s: "Corregir una recomendación puede mejorar el cumplimiento de varios estándares a la vez.", explain: "Por ejemplo, MFA para cuentas con privilegios ayuda con ISO 27001, NIST y PCI DSS." },
            { topic: "Seguridad mejorada", s: "Los planes de Defender no pueden ejecutarse a la vez; hay que elegir uno.", explain: "Los planes se habilitan por separado y se ejecutan simultáneamente." }
          ]
        }
      },
      {
        type: "dropdown",
        topic: "Security policies and standards",
        q: "Complete the statement about Defender for Cloud policies.",
        parts: [
          "Security policies in Defender for Cloud are backed by ",
          { options: ["Azure Policy", "Microsoft Purview", "Azure Bastion"], answer: 0 },
          ", and each policy that a resource doesn't comply with produces a ",
          { options: ["security recommendation", "resource lock", "budget alert"], answer: 0 },
          "."
        ],
        explain: "Initiatives group Azure Policy definitions; noncompliance surfaces as recommendations.",
        es: {
          topic: "Directivas y estándares de seguridad",
          q: "Complete la afirmación sobre las directivas de Defender for Cloud.",
          parts: [
            "Las directivas de seguridad de Defender for Cloud se basan en ",
            { options: ["Azure Policy", "Microsoft Purview", "Azure Bastion"] },
            ", y cada directiva que un recurso no cumple genera una ",
            { options: ["recomendación de seguridad", "bloqueo de recursos", "alerta de presupuesto"] },
            "."
          ],
          explain: "Las iniciativas agrupan definiciones de Azure Policy; el incumplimiento aparece como recomendaciones."
        }
      },
      {
        type: "single",
        topic: "Enhanced security",
        q: "A company runs Azure OpenAI apps and wants real-time detection of prompt injection and data leakage. Which Defender plan fits?",
        options: ["Microsoft Defender for AI Services", "Microsoft Defender for Storage", "Microsoft Defender for Resource Manager", "Microsoft Defender for Key Vault"],
        answer: 0,
        explain: "Defender for AI Services detects prompt injection, data leakage, data poisoning and credential theft in AI workloads.",
        es: {
          topic: "Seguridad mejorada",
          q: "Una empresa ejecuta aplicaciones de Azure OpenAI y quiere detección en tiempo real de inyección de prompts y filtración de datos. ¿Qué plan de Defender corresponde?",
          options: ["Microsoft Defender for AI Services", "Microsoft Defender for Storage", "Microsoft Defender for Resource Manager", "Microsoft Defender for Key Vault"],
          explain: "Defender for AI Services detecta inyección de prompts, filtración de datos, envenenamiento de datos y robo de credenciales en cargas de IA."
        }
      },
      {
        type: "single",
        topic: "Cloud security posture management",
        q: "An internet-exposed VM with a known vulnerability can reach a storage account with customer data. Which Defender CSPM feature reveals this chain of risks?",
        options: ["Attack path analysis", "Secure score", "Threat protection alerts", "Exposed secrets scanning"],
        answer: 0,
        explain: "Attack path analysis models how vulnerabilities can be chained to reach high-value resources.",
        es: {
          topic: "Administración de la postura de seguridad en la nube",
          q: "Una máquina virtual expuesta a internet con una vulnerabilidad conocida puede llegar a una cuenta de almacenamiento con datos de clientes. ¿Qué característica de Defender CSPM revela esa cadena de riesgos?",
          options: ["El análisis de rutas de ataque", "La puntuación de seguridad", "Las alertas de protección contra amenazas", "El análisis de secretos expuestos"],
          explain: "El análisis de rutas de ataque modela cómo se pueden encadenar vulnerabilidades para llegar a recursos valiosos."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "DevOps security", s: "Defender for DevOps supports GitHub, Azure DevOps and GitLab.", answer: true, explain: "It works across multi-pipeline environments." },
          { topic: "Cloud security posture management", s: "Your secure score improves as soon as you fix one recommendation for a resource, even if others in the same control remain.", answer: false, explain: "The score improves only when all recommendations for a resource within a control are remediated." },
          { topic: "Defender for Cloud pillars", s: "Defender for Cloud is a cloud-native application protection platform (CNAPP).", answer: true, explain: "It combines DevSecOps, CSPM, CWPP and AI security." }
        ],
        es: {
          statements: [
            { topic: "Seguridad de DevOps", s: "Defender for DevOps admite GitHub, Azure DevOps y GitLab.", explain: "Funciona en entornos con varias canalizaciones." },
            { topic: "Administración de la postura de seguridad en la nube", s: "Su puntuación de seguridad mejora apenas corrige una recomendación de un recurso, aunque queden otras del mismo control.", explain: "La puntuación mejora solo cuando se corrigen todas las recomendaciones de un recurso dentro de un control." },
            { topic: "Pilares de Defender for Cloud", s: "Defender for Cloud es una plataforma de protección de aplicaciones nativas de la nube (CNAPP).", explain: "Combina DevSecOps, CSPM, CWPP y seguridad de IA." }
          ]
        }
      },
      {
        type: "single",
        topic: "Enhanced security",
        q: "Which enhanced security feature reduces exposure to brute-force attacks on VM management ports?",
        options: ["Just-in-time access to management ports", "Secure score", "Asset discovery", "Microsoft cloud security benchmark mapping"],
        answer: 0,
        explain: "Access and application controls include just-in-time, controlled access to management ports on Azure VMs.",
        es: {
          topic: "Seguridad mejorada",
          q: "¿Qué característica de seguridad mejorada reduce la exposición a ataques de fuerza bruta contra los puertos de administración de las máquinas virtuales?",
          options: ["El acceso justo a tiempo a los puertos de administración", "La puntuación de seguridad", "La detección de recursos", "La correspondencia con el punto de referencia de seguridad de Microsoft"],
          explain: "Los controles de acceso y de aplicaciones incluyen acceso controlado y justo a tiempo a los puertos de administración de las máquinas virtuales."
        }
      },
      {
        type: "single",
        topic: "DevOps security",
        q: "An AI service API key was accidentally committed to a repository. Which Defender for Cloud capability can detect it?",
        options: ["Defender for DevOps secrets scanning", "Defender for Storage", "Azure DDoS Protection", "Cloud security explorer only"],
        answer: 0,
        explain: "Defender for DevOps finds exposed secrets in code and configuration files, including AI service keys.",
        es: {
          topic: "Seguridad de DevOps",
          q: "Una clave de API de un servicio de IA se subió por error a un repositorio. ¿Qué capacidad de Defender for Cloud puede detectarla?",
          options: ["El análisis de secretos de Defender for DevOps", "Defender for Storage", "La protección contra DDoS de Azure", "Solo el explorador de seguridad en la nube"],
          explain: "Defender for DevOps encuentra secretos expuestos en código y archivos de configuración, incluidas claves de servicios de IA."
        }
      },
      {
        type: "single",
        topic: "Cloud security posture management",
        q: "A company wants to assign a recommendation to a resource owner with a due date so fixes don't get overlooked. Which Defender CSPM capability fits?",
        options: ["Governance", "Data security posture management", "Secure score", "Defender for Containers"],
        answer: 0,
        explain: "Governance assigns recommendations to owners with due dates to drive accountability.",
        es: {
          topic: "Administración de la postura de seguridad en la nube",
          q: "Una empresa quiere asignar una recomendación a un responsable del recurso con fecha límite para que las correcciones no se pierdan. ¿Qué capacidad de Defender CSPM corresponde?",
          options: ["La gobernanza", "La administración de la postura de seguridad de los datos", "La puntuación de seguridad", "Defender for Containers"],
          explain: "La gobernanza asigna recomendaciones a responsables con fecha límite para asegurar la rendición de cuentas."
        }
      }
    ]
  },
  units: [
    {
      id: "defender-cloud-overview",
      name: "Describe Microsoft Defender for Cloud",
      es: { name: "Descripción de Microsoft Defender for Cloud" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-security-management-capabilities-of-azure/2-describe-defender-cloud",
      quiz: {
        added: "2026-11-01",
        items: [
          {
            type: "single",
            q: "What is Microsoft Defender for Cloud?",
            options: [
              "A cloud-native application protection platform for Azure, other clouds and on-premises",
              "A SIEM that only collects logs from Microsoft 365",
              "A firewall that filters traffic between VNets",
              "An identity provider for external users"
            ],
            answer: 0,
            explain: "It's a CNAPP that combines DevSecOps, CSPM, CWPP and AI security across environments.",
            es: {
              q: "¿Qué es Microsoft Defender for Cloud?",
              options: [
                "Una plataforma de protección de aplicaciones nativas de la nube para Azure, otras nubes y el entorno local",
                "Un SIEM que solo recopila registros de Microsoft 365",
                "Un firewall que filtra el tráfico entre redes virtuales",
                "Un proveedor de identidades para usuarios externos"
              ],
              explain: "Es una CNAPP que combina DevSecOps, CSPM, CWPP y seguridad de IA en distintos entornos."
            }
          },
          {
            type: "match",
            q: "Match each AI threat to its description.",
            values: ["Prompt injection", "Data leakage", "Data poisoning", "Credential theft"],
            targets: [
              { t: "Inserting instructions into a model's input to manipulate its behavior", answer: 0 },
              { t: "Sensitive information exposed through model responses", answer: 1 },
              { t: "Corrupting the data a model uses, undermining its outputs", answer: 2 },
              { t: "Stealing tokens by exploiting AI application components", answer: 3 }
            ],
            explain: "Defender for Cloud's AI threat protection detects these threats in real time.",
            es: {
              q: "Relacione cada amenaza de IA con su descripción.",
              values: ["Inyección de prompts", "Filtración de datos", "Envenenamiento de datos", "Robo de credenciales"],
              targets: [
                { t: "Insertar instrucciones en la entrada de un modelo para manipular su comportamiento" },
                { t: "Información confidencial expuesta en las respuestas del modelo" },
                { t: "Corromper los datos que usa un modelo, lo que afecta sus resultados" },
                { t: "Robar tokens aprovechando componentes de la aplicación de IA" }
              ],
              explain: "La protección contra amenazas de IA de Defender for Cloud detecta estas amenazas en tiempo real."
            }
          },
          {
            type: "multi",
            q: "Which two can you do with Security Copilot embedded in Defender for Cloud?",
            options: ["Get remediation guidance for a specific issue", "Delegate a recommendation to the resource owner", "Provision Azure Firewall", "Create Microsoft Entra users", "Buy Defender plans"],
            answers: [0, 1],
            explain: "Copilot helps analyze recommendations, summarize findings, give remediation guidance and delegate recommendations.",
            es: {
              q: "¿Cuáles son dos cosas que puede hacer con Security Copilot integrado en Defender for Cloud?",
              options: ["Obtener guía de corrección para un problema concreto", "Delegar una recomendación al responsable del recurso", "Aprovisionar Azure Firewall", "Crear usuarios de Microsoft Entra", "Comprar planes de Defender"],
              explain: "Copilot ayuda a analizar recomendaciones, resumir hallazgos, guiar la corrección y delegar recomendaciones."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "DevSecOps is sometimes called shift-left security.", answer: true, explain: "It moves security checks earlier in development." },
              { s: "AI SPM maintains an AI Bill of Materials of the AI models, apps and services you run.", answer: true, explain: "It's part of the Defender CSPM plan." },
              { s: "Alerts from AI threat protection can't be correlated with other Defender XDR alerts.", answer: false, explain: "They integrate with Microsoft Defender XDR." }
            ],
            es: {
              statements: [
                { s: "DevSecOps a veces se llama seguridad desplazada a la izquierda (shift-left).", explain: "Adelanta los controles de seguridad en el desarrollo." },
                { s: "AI SPM mantiene una lista de materiales de IA con los modelos, aplicaciones y servicios de IA que ejecuta.", explain: "Forma parte del plan Defender CSPM." },
                { s: "Las alertas de la protección contra amenazas de IA no se pueden correlacionar con otras alertas de Defender XDR.", explain: "Se integran con Microsoft Defender XDR." }
              ]
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about Defender for Cloud.",
            parts: [
              "CWPP is delivered through ",
              { options: ["Microsoft Defender plans", "Azure Policy initiatives", "Purview labels"], answer: 0 },
              " specific to resource types, and Defender for Cloud is now integrated into the ",
              { options: ["Microsoft Defender portal", "Service Trust Portal", "Azure Pricing Calculator"], answer: 0 },
              "."
            ],
            explain: "Defender plans such as Defender for Servers deliver CWPP, and Defender for Cloud brings posture management into the Defender portal.",
            es: {
              q: "Complete la afirmación sobre Defender for Cloud.",
              parts: [
                "La CWPP se ofrece mediante ",
                { options: ["planes de Microsoft Defender", "iniciativas de Azure Policy", "etiquetas de Purview"] },
                " específicos de cada tipo de recurso, y Defender for Cloud ahora está integrado en el ",
                { options: ["portal de Microsoft Defender", "Portal de confianza de servicios", "Calculadora de precios de Azure"] },
                "."
              ],
              explain: "Planes como Defender for Servers ofrecen la CWPP, y Defender for Cloud suma la administración de la postura al portal de Defender."
            }
          }
        ]
      }
    },
    {
      id: "policies-standards",
      name: "Describe how security policies, standards, and recommendations improve cloud security posture",
      es: { name: "Describir cómo las directivas de seguridad, los estándares y las recomendaciones mejoran la posición de seguridad en la nube" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-security-management-capabilities-of-azure/3-baselines-for-azure",
      quiz: {
        added: "2026-11-01",
        items: [
          {
            type: "match",
            q: "Match each concept to its definition.",
            values: ["Azure Policy definition", "Security initiative", "Assignment"],
            targets: [
              { t: "A rule about a specific security condition", answer: 0 },
              { t: "A collection of policy definitions grouped toward a goal", answer: 1 },
              { t: "Applying a definition or initiative to a scope such as a subscription", answer: 2 }
            ],
            explain: "Definitions are rules, initiatives group them and assignments apply them to a scope.",
            es: {
              q: "Relacione cada concepto con su definición.",
              values: ["Definición de Azure Policy", "Iniciativa de seguridad", "Asignación"],
              targets: [
                { t: "Una regla sobre una condición de seguridad específica" },
                { t: "Una colección de definiciones de directivas agrupadas para un objetivo" },
                { t: "Aplicar una definición o iniciativa a un ámbito, como una suscripción" }
              ],
              explain: "Las definiciones son reglas, las iniciativas las agrupan y las asignaciones las aplican a un ámbito."
            }
          },
          {
            type: "single",
            q: "The Microsoft cloud security benchmark builds on controls from which frameworks?",
            options: ["CIS and NIST", "ISO 9001 and ITIL", "OWASP and COBIT", "GDPR and HIPAA"],
            answer: 0,
            explain: "MCSB builds on CIS and NIST controls with a cloud-centric focus, and maps to CIS, NIST and PCI DSS.",
            es: {
              q: "¿En los controles de qué marcos se basa el punto de referencia de seguridad en la nube de Microsoft?",
              options: ["CIS y NIST", "ISO 9001 e ITIL", "OWASP y COBIT", "GDPR e HIPAA"],
              explain: "El MCSB se basa en controles de CIS y NIST con un enfoque en la nube, y se corresponde con CIS, NIST y PCI DSS."
            }
          },
          {
            type: "multi",
            q: "Which two pieces of information does each Defender for Cloud recommendation include?",
            options: ["Remediation steps", "The affected resources", "The cost of each resource", "The resource owner's password", "A list of available VM sizes"],
            answers: [0, 1],
            explain: "Recommendations include a description, remediation steps, affected resources, severity and risk factors, and attack path context when available.",
            es: {
              q: "¿Cuáles son dos datos que incluye cada recomendación de Defender for Cloud?",
              options: ["Los pasos de corrección", "Los recursos afectados", "El costo de cada recurso", "La contraseña del responsable del recurso", "Una lista de tamaños de máquina virtual disponibles"],
              explain: "Las recomendaciones incluyen una descripción, pasos de corrección, recursos afectados, gravedad y factores de riesgo, y el contexto de rutas de ataque cuando está disponible."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "You can add standards such as ISO 27001 and PCI DSS to the regulatory compliance dashboard.", answer: true, explain: "MCSB is the default, but other standards can be added." },
              { s: "MCSB provides implementation guidance only for Azure.", answer: false, explain: "It also includes AWS and GCP guidance." },
              { s: "In the Defender CSPM plan, recommendations are prioritized using factors like internet exposure and sensitive data.", answer: true, explain: "That's risk prioritization." }
            ],
            es: {
              statements: [
                { s: "Puede agregar estándares como ISO 27001 y PCI DSS al panel de cumplimiento normativo.", explain: "El MCSB es el predeterminado, pero se pueden agregar otros estándares." },
                { s: "El MCSB solo ofrece guía de implementación para Azure.", explain: "También incluye guía para AWS y GCP." },
                { s: "En el plan Defender CSPM, las recomendaciones se priorizan según factores como la exposición a internet y los datos confidenciales.", explain: "Eso es la priorización por riesgo." }
              ]
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about recommendations.",
            parts: [
              "Recommendations have a severity of ",
              { options: ["high, medium or low", "critical only", "pass or fail"], answer: 0 },
              ", which helps teams ",
              { options: ["focus first on the most impactful actions", "ignore low-cost resources", "skip compliance reviews"], answer: 0 },
              "."
            ],
            explain: "Severity indicates how urgently an issue should be addressed.",
            es: {
              q: "Complete la afirmación sobre las recomendaciones.",
              parts: [
                "Las recomendaciones tienen una gravedad ",
                { options: ["alta, media o baja", "solo crítica", "de aprobado o desaprobado"] },
                ", lo que ayuda a los equipos a ",
                { options: ["centrarse primero en las acciones de mayor impacto", "ignorar los recursos de bajo costo", "omitir las revisiones de cumplimiento"] },
                "."
              ],
              explain: "La gravedad indica con qué urgencia se debe abordar un problema."
            }
          }
        ]
      }
    },
    {
      id: "cspm",
      name: "Describe Cloud security posture management",
      es: { name: "Descripción de la administración de la posición de seguridad en la nube" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-security-management-capabilities-of-azure/4-describe-cloud-security-posture-management",
      quiz: {
        added: "2026-11-01",
        items: [
          {
            type: "match",
            q: "Match each Defender CSPM capability to what it does.",
            values: ["Cloud security explorer", "Data security posture management", "AI security posture management", "Governance"],
            targets: [
              { t: "Run graph-based queries to ask specific security questions", answer: 0 },
              { t: "Discover datastores with sensitive data and assess their exposure", answer: 1 },
              { t: "Catalog generative AI workloads and assess their posture", answer: 2 },
              { t: "Assign recommendations to owners with due dates", answer: 3 }
            ],
            explain: "These are advanced capabilities of the Defender CSPM plan.",
            es: {
              q: "Relacione cada capacidad de Defender CSPM con lo que hace.",
              values: ["Explorador de seguridad en la nube", "Administración de la postura de seguridad de los datos", "Administración de la postura de seguridad de IA", "Gobernanza"],
              targets: [
                { t: "Ejecutar consultas basadas en grafos para hacer preguntas de seguridad específicas" },
                { t: "Descubrir almacenes con datos confidenciales y evaluar su exposición" },
                { t: "Catalogar cargas de IA generativa y evaluar su postura" },
                { t: "Asignar recomendaciones a responsables con fecha límite" }
              ],
              explain: "Son capacidades avanzadas del plan Defender CSPM."
            }
          },
          {
            type: "single",
            q: "Which CSPM capabilities are free and enabled by default on onboarded subscriptions?",
            options: [
              "Asset discovery, continuous assessment, MCSB compliance and secure score",
              "Attack path analysis and the cloud security explorer",
              "DSPM and AI SPM",
              "All Defender plans for servers and storage"
            ],
            answer: 0,
            explain: "Foundational CSPM is free; the optional Defender CSPM plan adds advanced capabilities.",
            es: {
              q: "¿Qué capacidades de CSPM son gratuitas y vienen habilitadas de forma predeterminada en las suscripciones incorporadas?",
              options: [
                "La detección de recursos, la evaluación continua, el cumplimiento del MCSB y la puntuación de seguridad",
                "El análisis de rutas de ataque y el explorador de seguridad en la nube",
                "DSPM y AI SPM",
                "Todos los planes de Defender para servidores y almacenamiento"
              ],
              explain: "El CSPM básico es gratuito; el plan opcional Defender CSPM suma capacidades avanzadas."
            }
          },
          {
            type: "multi",
            q: "Which two statements about secure score are true?",
            options: [
              "A higher score means a lower identified risk level",
              "Recommendations are grouped into security controls",
              "It's available only with the paid Defender CSPM plan",
              "It improves after fixing any single recommendation",
              "It measures how much you spend on security"
            ],
            answers: [0, 1],
            explain: "Secure score is free, aggregates findings and improves when all recommendations for a resource within a control are fixed.",
            es: {
              q: "¿Cuáles son dos afirmaciones verdaderas sobre la puntuación de seguridad?",
              options: [
                "Una puntuación más alta significa un nivel de riesgo identificado más bajo",
                "Las recomendaciones se agrupan en controles de seguridad",
                "Solo está disponible con el plan pago Defender CSPM",
                "Mejora después de corregir cualquier recomendación individual",
                "Mide cuánto gasta en seguridad"
              ],
              explain: "La puntuación de seguridad es gratuita, reúne los hallazgos y mejora cuando se corrigen todas las recomendaciones de un recurso dentro de un control."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "DSPM is available with the Defender CSPM plan or with Microsoft Defender for Storage.", answer: true, explain: "It discovers and protects sensitive datastores." },
              { s: "Copilot in Defender for Cloud can help remediate misconfigurations directly in code.", answer: true, explain: "It's embedded on the recommendations page." },
              { s: "Attack path analysis treats each vulnerability in isolation.", answer: false, explain: "It models how vulnerabilities can be chained together." }
            ],
            es: {
              statements: [
                { s: "DSPM está disponible con el plan Defender CSPM o con Microsoft Defender for Storage.", explain: "Descubre y protege los almacenes con datos confidenciales." },
                { s: "Copilot en Defender for Cloud puede ayudar a corregir configuraciones incorrectas directamente en el código.", explain: "Está integrado en la página de recomendaciones." },
                { s: "El análisis de rutas de ataque trata cada vulnerabilidad de forma aislada.", explain: "Modela cómo se pueden encadenar las vulnerabilidades." }
              ]
            }
          },
          {
            type: "single",
            q: "A generative AI app can reach a customer database and is reachable from the internet without proper authentication. Which capability is designed to surface this risk?",
            options: ["AI security posture management", "Foundational secure score only", "Defender for Resource Manager", "The regulatory compliance dashboard"],
            answer: 0,
            explain: "AI SPM uses attack path analysis to show how AI vulnerabilities can be chained to reach sensitive data.",
            es: {
              q: "Una aplicación de IA generativa puede llegar a una base de datos de clientes y es accesible desde internet sin la autenticación adecuada. ¿Qué capacidad está pensada para mostrar este riesgo?",
              options: ["La administración de la postura de seguridad de IA", "Solo la puntuación de seguridad básica", "Defender for Resource Manager", "El panel de cumplimiento normativo"],
              explain: "AI SPM usa el análisis de rutas de ataque para mostrar cómo se encadenan vulnerabilidades de IA hasta llegar a datos confidenciales."
            }
          }
        ]
      }
    },
    {
      id: "enhanced-security",
      name: "Describe the enhanced security of Microsoft Defender for Cloud",
      es: { name: "Describir la seguridad mejorada de Microsoft Defender para la nube" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-security-management-capabilities-of-azure/5a-describe-enhanced-security-defender-cloud",
      quiz: {
        added: "2026-11-01",
        items: [
          {
            type: "match",
            q: "Match each need to the Defender plan.",
            values: ["Defender for Servers", "Defender for Containers", "Defender for Resource Manager", "Defender for APIs"],
            targets: [
              { t: "EDR and threat detection for Windows and Linux machines", answer: 0 },
              { t: "Hardening and run-time threat detection for Kubernetes", answer: 1 },
              { t: "Monitoring of resource management operations", answer: 2 },
              { t: "Visibility and threat detection for business-critical APIs", answer: 3 }
            ],
            explain: "Each plan protects a specific resource type.",
            es: {
              q: "Relacione cada necesidad con el plan de Defender.",
              values: ["Defender for Servers", "Defender for Containers", "Defender for Resource Manager", "Defender for APIs"],
              targets: [
                { t: "EDR y detección de amenazas para equipos Windows y Linux" },
                { t: "Protección y detección de amenazas en tiempo de ejecución para Kubernetes" },
                { t: "Supervisión de las operaciones de administración de recursos" },
                { t: "Visibilidad y detección de amenazas para API críticas" }
              ],
              explain: "Cada plan protege un tipo de recurso específico."
            }
          },
          {
            type: "single",
            q: "Which product does Microsoft Defender for Servers include for endpoint detection and response?",
            options: ["Microsoft Defender for Endpoint", "Microsoft Sentinel", "Azure Firewall Premium", "Microsoft Purview"],
            answer: 0,
            explain: "Defender for Servers includes Defender for Endpoint for comprehensive EDR.",
            es: {
              q: "¿Qué producto incluye Microsoft Defender for Servers para la detección y respuesta en puntos de conexión?",
              options: ["Microsoft Defender para punto de conexión", "Microsoft Sentinel", "Azure Firewall Premium", "Microsoft Purview"],
              explain: "Defender for Servers incluye Defender para punto de conexión para un EDR completo."
            }
          },
          {
            type: "multi",
            q: "Which two are enhanced security features of Defender for Cloud?",
            options: ["Vulnerability scanning for VMs and container registries", "Multicloud protection for AWS and GCP resources", "Free secure score", "Asset discovery", "Microsoft Entra Conditional Access"],
            answers: [0, 1],
            explain: "Enhanced features include EDR, vulnerability scanning, multicloud and hybrid security, threat alerts, compliance tracking and access controls. Secure score and discovery are foundational.",
            es: {
              q: "¿Cuáles son dos características de seguridad mejorada de Defender for Cloud?",
              options: ["El análisis de vulnerabilidades en máquinas virtuales y registros de contenedores", "La protección multinube de recursos de AWS y GCP", "La puntuación de seguridad gratuita", "La detección de recursos", "El acceso condicional de Microsoft Entra"],
              explain: "Las características mejoradas incluyen EDR, análisis de vulnerabilidades, seguridad multinube e híbrida, alertas de amenazas, seguimiento del cumplimiento y controles de acceso. La puntuación y la detección son básicas."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Defender for Databases covers Azure SQL, open-source relational databases and Azure Cosmos DB.", answer: true, explain: "It protects the whole database estate." },
              { s: "Defender for AI Services works with Azure AI Content Safety Prompt Shields.", answer: true, explain: "Along with Microsoft Threat Intelligence." },
              { s: "Application controls use machine learning to create allow lists and block lists.", answer: true, explain: "They block malware and unwanted applications." }
            ],
            es: {
              statements: [
                { s: "Defender for Databases abarca Azure SQL, bases de datos relacionales de código abierto y Azure Cosmos DB.", explain: "Protege todo el patrimonio de bases de datos." },
                { s: "Defender for AI Services trabaja con Prompt Shields de Azure AI Content Safety.", explain: "Junto con la inteligencia sobre amenazas de Microsoft." },
                { s: "Los controles de aplicaciones usan aprendizaje automático para crear listas de permitidos y bloqueados.", explain: "Bloquean malware y aplicaciones no deseadas." }
              ]
            }
          },
          {
            type: "single",
            q: "Unusual activity is detected on an Azure Storage account, suggesting someone is trying to exfiltrate data. Which plan detects potentially harmful activity like this?",
            options: ["Microsoft Defender for Storage", "Microsoft Defender for App Service", "Microsoft Defender for Key Vault", "Microsoft Defender for APIs"],
            answer: 0,
            explain: "Defender for Storage detects potentially harmful activity on storage accounts.",
            es: {
              q: "Se detecta actividad inusual en una cuenta de Azure Storage que sugiere un intento de extraer datos. ¿Qué plan detecta actividad potencialmente dañina como esta?",
              options: ["Microsoft Defender for Storage", "Microsoft Defender for App Service", "Microsoft Defender for Key Vault", "Microsoft Defender for APIs"],
              explain: "Defender for Storage detecta actividad potencialmente dañina en las cuentas de almacenamiento."
            }
          }
        ]
      }
    },
    {
      id: "devops-security",
      name: "Describe DevOps security management",
      es: { name: "Descripción de la administración de seguridad de DevOps" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-security-management-capabilities-of-azure/6-describe-dev-ops-security-management",
      quiz: {
        added: "2026-11-01",
        items: [
          {
            type: "match",
            q: "Match each finding to the DevOps security overview category.",
            values: ["Code scanning vulnerabilities", "Exposed secrets", "OSS vulnerabilities"],
            targets: [
              { t: "A weakness in the application's own code", answer: 0 },
              { t: "An API key left in a configuration file", answer: 1 },
              { t: "A known flaw in a third-party open-source dependency", answer: 2 }
            ],
            explain: "The overview also shows recommendations to improve DevOps environment configuration.",
            es: {
              q: "Relacione cada hallazgo con la categoría de la vista general de seguridad de DevOps.",
              values: ["Vulnerabilidades del análisis de código", "Secretos expuestos", "Vulnerabilidades de OSS"],
              targets: [
                { t: "Una debilidad en el propio código de la aplicación" },
                { t: "Una clave de API olvidada en un archivo de configuración" },
                { t: "Una falla conocida en una dependencia de código abierto de terceros" }
              ],
              explain: "La vista general también muestra recomendaciones para mejorar la configuración del entorno de DevOps."
            }
          },
          {
            type: "single",
            q: "How does Defender for DevOps help developers prioritize critical code fixes?",
            options: ["Pull request annotations with code-to-cloud context", "Automatic deletion of vulnerable repositories", "Blocking all deployments until secure score is 100%", "Sending fixes directly to Microsoft support"],
            answer: 0,
            explain: "Code-to-cloud insights and PR annotations guide developers, and admins can assign ownership through workflows.",
            es: {
              q: "¿Cómo ayuda Defender for DevOps a los desarrolladores a priorizar las correcciones críticas de código?",
              options: ["Con anotaciones en las solicitudes de incorporación de cambios con contexto del código a la nube", "Eliminando automáticamente los repositorios vulnerables", "Bloqueando toda implementación hasta que la puntuación sea 100 %", "Enviando las correcciones directamente al soporte de Microsoft"],
              explain: "La información del código a la nube y las anotaciones en las PR guían a los desarrolladores, y los administradores pueden asignar responsables con flujos de trabajo."
            }
          },
          {
            type: "multi",
            q: "Which two statements about Defender for DevOps are true?",
            options: [
              "It assesses infrastructure-as-code templates to stop misconfigurations reaching production",
              "Its findings can be correlated with cloud risks in the Defender CSPM plan",
              "It only supports Azure DevOps",
              "It replaces the need for code reviews",
              "It works only after code is deployed to production"
            ],
            answers: [0, 1],
            explain: "It covers IaC and correlates with CSPM for a code-to-cloud view, across GitHub, Azure DevOps and GitLab.",
            es: {
              q: "¿Cuáles son dos afirmaciones verdaderas sobre Defender for DevOps?",
              options: [
                "Evalúa plantillas de infraestructura como código para evitar que lleguen errores de configuración a producción",
                "Sus hallazgos se pueden correlacionar con riesgos de la nube en el plan Defender CSPM",
                "Solo admite Azure DevOps",
                "Reemplaza la necesidad de revisar el código",
                "Solo funciona después de implementar el código en producción"
              ],
              explain: "Abarca la IaC y se correlaciona con CSPM para una vista del código a la nube, en GitHub, Azure DevOps y GitLab."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Attackers have shifted focus to upstream tools such as pipelines and DevOps environments.", answer: true, explain: "That's why traditional AppSec isn't enough." },
              { s: "If CSPM finds a misconfigured VNet in production, the template that deployed it can often be traced and corrected.", answer: true, explain: "That's the code-to-cloud view." },
              { s: "DevSecOps practices don't apply to AI development pipelines.", answer: false, explain: "AI projects use the same pipelines and face the same risks." }
            ],
            es: {
              statements: [
                { s: "Los atacantes pasaron a enfocarse en herramientas previas como las canalizaciones y los entornos de DevOps.", explain: "Por eso la seguridad de aplicaciones tradicional no alcanza." },
                { s: "Si CSPM encuentra una red virtual mal configurada en producción, muchas veces se puede rastrear y corregir la plantilla que la implementó.", explain: "Es la vista del código a la nube." },
                { s: "Las prácticas de DevSecOps no se aplican a las canalizaciones de desarrollo de IA.", explain: "Los proyectos de IA usan las mismas canalizaciones y enfrentan los mismos riesgos." }
              ]
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about DevOps security.",
            parts: [
              "Defender for DevOps uses a ",
              { options: ["central console", "separate portal per pipeline", "local agent on each laptop"], answer: 0 },
              " to protect applications ",
              { options: ["from code to cloud", "only at runtime", "only in on-premises datacenters"], answer: 0 },
              " across multi-pipeline environments."
            ],
            explain: "Security teams manage DevOps posture across pipelines from one console.",
            es: {
              q: "Complete la afirmación sobre la seguridad de DevOps.",
              parts: [
                "Defender for DevOps usa una ",
                { options: ["consola central", "portal distinto por canalización", "agente local en cada laptop"] },
                " para proteger las aplicaciones ",
                { options: ["del código a la nube", "solo en tiempo de ejecución", "solo en centros de datos locales"] },
                " en entornos con varias canalizaciones."
              ],
              explain: "Los equipos de seguridad administran la postura de DevOps de todas las canalizaciones desde una sola consola."
            }
          }
        ]
      }
    }
  ]
});
