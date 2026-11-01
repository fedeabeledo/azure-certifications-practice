// SC-900 > Introduction to Microsoft security solutions > Describe Microsoft Security Copilot
Catalog.module("sc-900", {
  id: "security-copilot",
  name: "Describe Microsoft Security Copilot",
  es: { name: "Descripción de Microsoft Security Copilot" },
  url: "https://learn.microsoft.com/en-us/training/modules/security-copilot-getting-started/",
  quiz: {
    added: "2026-11-01",
    items: [
      {
        type: "single",
        topic: "Terminology",
        q: "An analyst asks Security Copilot to summarize an incident, then asks follow-up questions that rely on the first answer. What keeps that context?",
        options: ["The session", "The workspace", "The plugin", "The promptbook"],
        answer: 0,
        explain: "A session is a particular conversation, and Copilot maintains context within it.",
        es: {
          topic: "Terminología",
          q: "Un analista le pide a Security Copilot que resuma un incidente y luego hace preguntas de seguimiento que dependen de la primera respuesta. ¿Qué mantiene ese contexto?",
          options: ["La sesión", "El área de trabajo", "El complemento", "El libro de indicaciones"],
          explain: "Una sesión es una conversación concreta, y Copilot mantiene el contexto dentro de ella."
        }
      },
      {
        type: "match",
        topic: "Terminology",
        q: "Match each Security Copilot term to its definition.",
        values: ["Capability", "Plugin", "Workspace", "Orchestrator"],
        targets: [
          { t: "A function Copilot uses to solve part of a problem, also called a skill", answer: 0 },
          { t: "A collection of capabilities by a particular resource", answer: 1 },
          { t: "A separate Copilot work environment within the tenant", answer: 2 },
          { t: "The system that composes capabilities to answer a prompt", answer: 3 }
        ],
        explain: "Capabilities are functions, plugins group them, workspaces separate environments and the orchestrator plans which capabilities to use.",
        es: {
          topic: "Terminología",
          q: "Relacione cada término de Security Copilot con su definición.",
          values: ["Capacidad", "Complemento", "Área de trabajo", "Orquestador"],
          targets: [
            { t: "Una función que Copilot usa para resolver parte de un problema, también llamada aptitud" },
            { t: "Una colección de capacidades de un recurso determinado" },
            { t: "Un entorno de trabajo de Copilot separado dentro del inquilino" },
            { t: "El sistema que combina capacidades para responder una indicación" }
          ],
          explain: "Las capacidades son funciones, los complementos las agrupan, las áreas de trabajo separan entornos y el orquestador planifica qué capacidades usar."
        }
      },
      {
        type: "single",
        topic: "Enabling Security Copilot",
        q: "A company has Microsoft 365 E5 licenses. What does it need to do to get Security Copilot?",
        options: [
          "Nothing manual; eligible tenants are provisioned automatically with advance notice",
          "Provision at least 10 SCUs in an Azure subscription and assign them to a workspace manually",
          "Buy a separate Azure OpenAI subscription",
          "Deploy Microsoft Sentinel first"
        ],
        answer: 0,
        explain: "For Microsoft 365 E5 and E7 customers, Security Copilot is included and activated with zero-click provisioning after a 7-day notice.",
        es: {
          topic: "Habilitación de Security Copilot",
          q: "Una empresa tiene licencias de Microsoft 365 E5. ¿Qué debe hacer para obtener Security Copilot?",
          options: [
            "Nada manual; los inquilinos aptos se aprovisionan automáticamente con aviso previo",
            "Aprovisionar al menos 10 SCU en una suscripción de Azure y asignarlas a mano a un área de trabajo",
            "Comprar una suscripción aparte de Azure OpenAI",
            "Implementar primero Microsoft Sentinel"
          ],
          explain: "Para clientes de Microsoft 365 E5 y E7, Security Copilot está incluido y se activa sin pasos manuales tras un aviso de 7 días."
        }
      },
      {
        type: "multi",
        topic: "Effective prompts",
        q: "Which two are elements of an effective Security Copilot prompt?",
        options: ["Goal", "Expectations", "Orchestrator", "Overage", "Capacity"],
        answers: [0, 1],
        explain: "The four elements are goal, context, expectations and source.",
        es: {
          topic: "Indicaciones eficaces",
          q: "¿Cuáles son dos elementos de una indicación eficaz para Security Copilot?",
          options: ["El objetivo", "Las expectativas", "El orquestador", "El uso por encima de la capacidad", "La capacidad"],
          explain: "Los cuatro elementos son objetivo, contexto, expectativas y origen."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "Security Copilot overview", s: "Data you give Security Copilot is used to train the foundation AI models.", answer: false, explain: "Your data isn't used to train the foundation models." },
          { topic: "Prompt processing", s: "The process log lets users see which capability generated a response.", answer: true, explain: "That helps judge whether the response came from a trusted source." },
          { topic: "Enabling Security Copilot", s: "Each workspace must have its own capacity.", answer: true, explain: "Workspaces are powered by capacities." }
        ],
        es: {
          statements: [
            { topic: "Introducción a Security Copilot", s: "Los datos que le da a Security Copilot se usan para entrenar los modelos de IA fundacionales.", explain: "Sus datos no se usan para entrenar los modelos fundacionales." },
            { topic: "Procesamiento de indicaciones", s: "El registro del proceso permite ver qué capacidad generó una respuesta.", explain: "Eso ayuda a juzgar si la respuesta vino de un origen confiable." },
            { topic: "Habilitación de Security Copilot", s: "Cada área de trabajo debe tener su propia capacidad.", explain: "Las áreas de trabajo funcionan con capacidades." }
          ]
        }
      },
      {
        type: "dropdown",
        topic: "Enabling Security Copilot",
        q: "Complete the statement about capacity.",
        parts: [
          "Customers without Microsoft 365 E5 or E7 provision ",
          { options: ["Security Compute Units (SCUs)", "Azure Policy initiatives", "Sentinel workspaces"], answer: 0 },
          ", and can set an ",
          { options: ["overage amount", "access package", "authentication strength"], answer: 0 },
          " to cover unexpected spikes when provisioned units run out."
        ],
        explain: "SCUs are billed hourly; overage units are billed on demand and can be capped or unlimited.",
        es: {
          topic: "Habilitación de Security Copilot",
          q: "Complete la afirmación sobre la capacidad.",
          parts: [
            "Los clientes sin Microsoft 365 E5 o E7 aprovisionan ",
            { options: ["unidades de proceso de seguridad (SCU)", "iniciativas de Azure Policy", "áreas de trabajo de Sentinel"] },
            ", y pueden definir un ",
            { options: ["monto de uso excedente", "paquete de acceso", "nivel de autenticación"] },
            " para cubrir picos inesperados cuando se agotan las unidades aprovisionadas."
          ],
          explain: "Las SCU se facturan por hora; las unidades excedentes se facturan según el uso y pueden tener un tope o ser ilimitadas."
        }
      },
      {
        type: "single",
        topic: "Enabling Security Copilot",
        q: "An analyst with the Copilot contributor role can open Security Copilot but can't see Sentinel incidents through the Sentinel plugin. What's missing?",
        options: [
          "A role that grants access to Sentinel data, such as Microsoft Sentinel Reader",
          "The Copilot owner role, which grants access to all the security data connected through plugins",
          "A larger number of SCUs",
          "A new session"
        ],
        answer: 0,
        explain: "Copilot doesn't go beyond your access; plugins may require their own service roles.",
        es: {
          topic: "Habilitación de Security Copilot",
          q: "Un analista con el rol de colaborador de Copilot puede abrir Security Copilot pero no ve los incidentes de Sentinel con el complemento de Sentinel. ¿Qué le falta?",
          options: [
            "Un rol que dé acceso a los datos de Sentinel, como Lector de Microsoft Sentinel",
            "El rol de propietario de Copilot, que da acceso a todos los datos de seguridad conectados mediante complementos",
            "Una cantidad mayor de SCU",
            "Una sesión nueva"
          ],
          explain: "Copilot no va más allá de su acceso; los complementos pueden requerir sus propios roles del servicio."
        }
      },
      {
        type: "single",
        topic: "Security Copilot overview",
        q: "Within the Microsoft Defender XDR portal, an analyst uses a Copilot button to turn a natural-language question into a KQL query. Which experience is this?",
        options: ["The embedded experience", "The standalone experience", "A promptbook", "A custom plugin"],
        answer: 0,
        explain: "Embedded experiences put Copilot capabilities directly inside security products like Defender XDR.",
        es: {
          topic: "Introducción a Security Copilot",
          q: "En el portal de Microsoft Defender XDR, un analista usa un botón de Copilot para convertir una pregunta en lenguaje natural en una consulta KQL. ¿Qué experiencia es?",
          options: ["La experiencia integrada", "La experiencia independiente", "Un libro de indicaciones", "Un complemento personalizado"],
          explain: "Las experiencias integradas incorporan capacidades de Copilot directamente en productos de seguridad como Defender XDR."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "Enabling Security Copilot", s: "The Copilot owner and contributor roles grant access to security data by themselves.", answer: false, explain: "They only control access to the Copilot platform." },
          { topic: "Effective prompts", s: "Positive instructions tend to work better than telling Copilot what not to do.", answer: true, explain: "Copilot is geared toward action." },
          { topic: "Security Copilot overview", s: "Security Copilot is built using Azure OpenAI Services.", answer: true, explain: "It combines LLMs with security-specific sources." }
        ],
        es: {
          statements: [
            { topic: "Habilitación de Security Copilot", s: "Los roles de propietario y colaborador de Copilot dan acceso por sí solos a los datos de seguridad.", explain: "Solo controlan el acceso a la plataforma de Copilot." },
            { topic: "Indicaciones eficaces", s: "Las instrucciones positivas suelen funcionar mejor que decirle a Copilot qué no hacer.", explain: "Copilot está orientado a la acción." },
            { topic: "Introducción a Security Copilot", s: "Security Copilot está construido con Azure OpenAI Services.", explain: "Combina modelos de lenguaje grandes con orígenes específicos de seguridad." }
          ]
        }
      },
      {
        type: "single",
        topic: "Prompt processing",
        q: "What happens just before Security Copilot sends a response back to the user?",
        options: [
          "It formats and reviews the response as part of responsible AI",
          "It asks the user to approve the plan",
          "It trains the foundation model on the response",
          "It sends the response to Microsoft support so a human analyst can review it first"
        ],
        answer: 0,
        explain: "The response is formatted and goes through safety checks before it reaches the user.",
        es: {
          topic: "Procesamiento de indicaciones",
          q: "¿Qué pasa justo antes de que Security Copilot devuelva una respuesta al usuario?",
          options: [
            "Formatea y revisa la respuesta como parte de la IA responsable",
            "Le pide al usuario que apruebe el plan",
            "Entrena el modelo fundacional con la respuesta",
            "Envía la respuesta al soporte de Microsoft para que un analista humano la revise antes"
          ],
          explain: "La respuesta se formatea y pasa por controles de seguridad antes de llegar al usuario."
        }
      },
      {
        type: "single",
        topic: "Terminology",
        q: "Which Security Copilot component can autonomously manage high-volume security and IT tasks for specific scenarios?",
        options: ["Agents", "Prompts", "Sessions", "Process logs"],
        answer: 0,
        explain: "Security Copilot agents autonomously handle tasks such as threat protection, identity management or data security.",
        es: {
          topic: "Terminología",
          q: "¿Qué componente de Security Copilot puede administrar de forma autónoma un gran volumen de tareas de seguridad y TI para escenarios específicos?",
          options: ["Los agentes", "Las indicaciones", "Las sesiones", "Los registros del proceso"],
          explain: "Los agentes de Security Copilot se ocupan de forma autónoma de tareas como protección contra amenazas, administración de identidades o seguridad de datos."
        }
      },
      {
        type: "single",
        topic: "Effective prompts",
        q: "Which prompt follows the guidance for effective prompts best?",
        options: [
          "Summarize incident 15134 in Microsoft Defender XDR as a paragraph for my manager and list the entities involved",
          "Incident 15134",
          "Don't give me anything about devices",
          "Tell me everything"
        ],
        answer: 0,
        explain: "It has a goal, context, an expected format and a source.",
        es: {
          topic: "Indicaciones eficaces",
          q: "¿Qué indicación sigue mejor las recomendaciones para indicaciones eficaces?",
          options: [
            "Resume el incidente 15134 de Microsoft Defender XDR en un párrafo para mi gerente y enumera las entidades involucradas",
            "Incidente 15134",
            "No me des nada sobre dispositivos",
            "Contame todo"
          ],
          explain: "Tiene objetivo, contexto, formato esperado y origen."
        }
      }
    ]
  },
  units: [
    {
      id: "copilot-overview",
      name: "Get acquainted with Microsoft Security Copilot",
      es: { name: "Familiarícese con Microsoft Security Copilot" },
      url: "https://learn.microsoft.com/en-us/training/modules/security-copilot-getting-started/2-describe-security-copilot",
      quiz: {
        added: "2026-11-01",
        items: [
          {
            type: "single",
            q: "Which statement describes Microsoft Security Copilot?",
            options: [
              "An AI-powered, cloud-based security analysis tool that helps analysts respond at machine speed",
              "An on-premises SIEM that replaces Microsoft Sentinel",
              "A firewall that filters traffic to Azure resources",
              "A service that provisions hardened virtual machines so security teams can run their analysis tools"
            ],
            answer: 0,
            explain: "Security Copilot helps analysts respond quickly, process signals at machine speed and assess risk exposure.",
            es: {
              q: "¿Qué afirmación describe Microsoft Security Copilot?",
              options: [
                "Una herramienta de análisis de seguridad en la nube con IA que ayuda a responder a velocidad de máquina",
                "Un SIEM local que reemplaza a Microsoft Sentinel",
                "Un firewall que filtra el tráfico hacia los recursos de Azure",
                "Un servicio que aprovisiona máquinas virtuales protegidas para que los equipos de seguridad ejecuten sus herramientas"
              ],
              explain: "Security Copilot ayuda a responder rápido, procesar señales a velocidad de máquina y evaluar la exposición al riesgo."
            }
          },
          {
            type: "multi",
            q: "Which two are highlighted Security Copilot use cases?",
            options: [
              "Build KQL queries or analyze suspicious scripts",
              "Develop reports for stakeholders",
              "Provision Azure virtual networks",
              "Estimate Azure costs before deployment",
              "Host web applications"
            ],
            answers: [0, 1],
            explain: "Use cases include investigating threats, building KQL, managing posture, troubleshooting IT, managing policies, lifecycle workflows and reports.",
            es: {
              q: "¿Cuáles son dos casos de uso destacados de Security Copilot?",
              options: [
                "Crear consultas KQL o analizar scripts sospechosos",
                "Preparar informes para las partes interesadas",
                "Aprovisionar redes virtuales de Azure",
                "Estimar costos de Azure antes de implementar",
                "Hospedar aplicaciones web"
              ],
              explain: "Los casos de uso incluyen investigar amenazas, crear KQL, administrar la postura, resolver problemas de TI, administrar directivas, flujos de ciclo de vida e informes."
            }
          },
          {
            type: "match",
            q: "Match each description to the Security Copilot experience.",
            values: ["Standalone experience", "Embedded experience"],
            targets: [
              { t: "Users interact through the prompt bar on the dedicated site", answer: 0 },
              { t: "Copilot capabilities appear inside Microsoft Defender XDR", answer: 1 },
              { t: "Summarizing an incident from within a security product's interface", answer: 1 }
            ],
            explain: "The standalone experience is the dedicated site; embedded experiences live inside security products.",
            es: {
              q: "Relacione cada descripción con la experiencia de Security Copilot.",
              values: ["Experiencia independiente", "Experiencia integrada"],
              targets: [
                { t: "Los usuarios interactúan con la barra de indicaciones en el sitio dedicado" },
                { t: "Las capacidades de Copilot aparecen dentro de Microsoft Defender XDR" },
                { t: "Resumir un incidente desde la interfaz de un producto de seguridad" }
              ],
              explain: "La experiencia independiente es el sitio dedicado; las integradas están dentro de los productos de seguridad."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about Security Copilot.",
            parts: [
              "Security Copilot combines large language models with security-specific sources informed by more than ",
              { options: ["65 trillion", "65 million", "6.5 billion"], answer: 0 },
              " daily signals, and integrates with other tools through ",
              { options: ["plugins", "resource locks", "access packages"], answer: 0 },
              "."
            ],
            explain: "Plugins connect Microsoft products, non-Microsoft products and open-source intelligence feeds.",
            es: {
              q: "Complete la afirmación sobre Security Copilot.",
              parts: [
                "Security Copilot combina modelos de lenguaje grandes con orígenes específicos de seguridad alimentados por más de ",
                { options: ["65 billones", "65 millones", "6500 millones"] },
                " de señales diarias, y se integra con otras herramientas mediante ",
                { options: ["complementos", "bloqueos de recursos", "paquetes de acceso"] },
                "."
              ],
              explain: "Los complementos conectan productos de Microsoft, productos de terceros y fuentes de inteligencia de código abierto."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Information you give Security Copilot is accessible only to your organization.", answer: true, explain: "It's protected by enterprise compliance and security controls." },
              { s: "Connecting knowledge bases gives Copilot more context for its responses.", answer: true, explain: "Responses become more relevant and specific." },
              { s: "Security Copilot only works with Microsoft security products.", answer: false, explain: "Plugins also cover non-Microsoft products and open-source feeds." }
            ],
            es: {
              statements: [
                { s: "La información que le da a Security Copilot solo es accesible para su organización.", explain: "Está protegida por controles empresariales de cumplimiento y seguridad." },
                { s: "Conectar bases de conocimiento le da a Copilot más contexto para sus respuestas.", explain: "Las respuestas son más relevantes y específicas." },
                { s: "Security Copilot solo funciona con productos de seguridad de Microsoft.", explain: "Los complementos también cubren productos de terceros y fuentes de código abierto." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "copilot-terminology",
      name: "Describe Microsoft Security Copilot terminology",
      es: { name: "Descripción de la terminología de Microsoft Security Copilot" },
      url: "https://learn.microsoft.com/en-us/training/modules/security-copilot-getting-started/3-describe-terminology",
      quiz: {
        added: "2026-11-01",
        items: [
          {
            type: "single",
            q: "In the house analogy for Security Copilot, what does a room represent?",
            options: ["A workspace", "A tenant", "A plugin", "A prompt"],
            answer: 0,
            explain: "The house is the tenant and each room is a workspace that users may or may not have access to.",
            es: {
              q: "En la analogía de la casa para Security Copilot, ¿qué representa una habitación?",
              options: ["Un área de trabajo", "Un inquilino", "Un complemento", "Una indicación"],
              explain: "La casa es el inquilino y cada habitación es un área de trabajo a la que los usuarios pueden tener acceso o no."
            }
          },
          {
            type: "match",
            q: "Match each term to its meaning.",
            values: ["Prompt", "Session", "Plugin", "Agent"],
            targets: [
              { t: "A specific statement or question entered in the prompt bar", answer: 0 },
              { t: "The whole conversation, in which context is kept", answer: 1 },
              { t: "Gives Copilot a collection of capabilities for a data source", answer: 2 },
              { t: "Autonomously handles high-volume security and IT tasks", answer: 3 }
            ],
            explain: "Prompts are individual requests, sessions are conversations, plugins bring capabilities and agents act autonomously.",
            es: {
              q: "Relacione cada término con su significado.",
              values: ["Indicación", "Sesión", "Complemento", "Agente"],
              targets: [
                { t: "Una afirmación o pregunta concreta escrita en la barra de indicaciones" },
                { t: "La conversación completa, en la que se mantiene el contexto" },
                { t: "Le da a Copilot una colección de capacidades para un origen de datos" },
                { t: "Se ocupa de forma autónoma de un gran volumen de tareas de seguridad y TI" }
              ],
              explain: "Las indicaciones son pedidos individuales, las sesiones son conversaciones, los complementos aportan capacidades y los agentes actúan de forma autónoma."
            }
          },
          {
            type: "multi",
            q: "Which two are capabilities included in the Microsoft Defender XDR plugin?",
            options: ["Summarize an incident", "Generate KQL queries from natural language", "Create Azure subscriptions", "Assign Microsoft Entra licenses", "Provision SCUs"],
            answers: [0, 1],
            explain: "The Defender XDR plugin includes incident summaries, guided responses, script analysis, KQL generation and incident reports.",
            es: {
              q: "¿Cuáles son dos capacidades incluidas en el complemento de Microsoft Defender XDR?",
              options: ["Resumir un incidente", "Generar consultas KQL a partir de lenguaje natural", "Crear suscripciones de Azure", "Asignar licencias de Microsoft Entra", "Aprovisionar SCU"],
              explain: "El complemento de Defender XDR incluye resúmenes de incidentes, respuestas guiadas, análisis de scripts, generación de KQL e informes de incidentes."
            }
          },
          {
            type: "single",
            q: "What benefit do Security Copilot workspaces provide?",
            options: [
              "Mapping costs to team budgets and storing session data according to geo-specific regulations",
              "Removing the need for role permissions",
              "Training a private foundation model per team with that team's own incidents and session data",
              "Replacing Microsoft Entra tenants"
            ],
            answer: 0,
            explain: "Workspaces separate environments, help allocate capacity and costs, and support data residency rules.",
            es: {
              q: "¿Qué ventaja ofrecen las áreas de trabajo de Security Copilot?",
              options: [
                "Asignar costos a los presupuestos de cada equipo y guardar los datos de sesión según normas geográficas",
                "Eliminar la necesidad de permisos de rol",
                "Entrenar un modelo fundacional privado por equipo con los incidentes y los datos de sesión de ese equipo",
                "Reemplazar los inquilinos de Microsoft Entra"
              ],
              explain: "Las áreas de trabajo separan entornos, ayudan a asignar capacidad y costos, y admiten reglas de residencia de datos."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Promptbooks provide a series of preselected prompts.", answer: true, explain: "They help users new to prompting." },
              { s: "Some plugins require setup, such as account authentication for non-Microsoft sources.", answer: true, explain: "Indicated by a Setup button or gear icon." },
              { s: "A capability is a collection of plugins.", answer: false, explain: "It's the other way around: a plugin is a collection of capabilities." }
            ],
            es: {
              statements: [
                { s: "Los libros de indicaciones ofrecen una serie de indicaciones preseleccionadas.", explain: "Ayudan a quienes recién empiezan a escribir indicaciones." },
                { s: "Algunos complementos requieren configuración, como la autenticación de cuentas para orígenes de terceros.", explain: "Lo indica un botón Configurar o un ícono de engranaje." },
                { s: "Una capacidad es una colección de complementos.", explain: "Es al revés: un complemento es una colección de capacidades." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "copilot-prompt-processing",
      name: "Describe how Microsoft Security Copilot processes prompt requests",
      es: { name: "Descripción de cómo Microsoft Security Copilot procesa solicitudes de instrucciones" },
      url: "https://learn.microsoft.com/en-us/training/modules/security-copilot-getting-started/4-describe-how-copilot-processes-prompts",
      quiz: {
        added: "2026-11-01",
        items: [
          {
            type: "single",
            q: "After a prompt is submitted, which component determines the initial context and builds a plan using the available capabilities?",
            options: ["The orchestrator", "The prompt bar", "The process log", "The workspace"],
            answer: 0,
            explain: "The orchestrator composes capabilities and builds the plan used to answer the prompt.",
            es: {
              q: "Después de enviar una indicación, ¿qué componente determina el contexto inicial y arma un plan con las capacidades disponibles?",
              options: ["El orquestador", "La barra de indicaciones", "El registro del proceso", "El área de trabajo"],
              explain: "El orquestador combina capacidades y arma el plan para responder la indicación."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about the prompt process.",
            parts: [
              "Once the plan is built, Copilot ",
              { options: ["executes it to gather the data context", "asks the user to approve each step", "discards the plugins"], answer: 0 },
              ", and then uses its LLM to ",
              { options: ["compose a human-readable response", "train itself on the data", "delete the session"], answer: 0 },
              "."
            ],
            explain: "Copilot builds context by running the plan and reasoning over plugins, then composes the response.",
            es: {
              q: "Complete la afirmación sobre el procesamiento de indicaciones.",
              parts: [
                "Una vez armado el plan, Copilot ",
                { options: ["lo ejecuta para reunir el contexto de datos", "le pide al usuario que apruebe cada paso", "descarta los complementos"] },
                ", y luego usa su modelo de lenguaje para ",
                { options: ["redactar una respuesta comprensible", "entrenarse con los datos", "eliminar la sesión"] },
                "."
              ],
              explain: "Copilot arma el contexto ejecutando el plan y razonando sobre los complementos, y luego redacta la respuesta."
            }
          },
          {
            type: "single",
            q: "Why is the process log important to the user?",
            options: [
              "It shows which capability produced the response, helping judge whether the source is trusted",
              "It lets the user edit the foundation model's answer and retrain it with the corrected version",
              "It records the user's SCU invoice",
              "It replaces the need for safety checks"
            ],
            answer: 0,
            explain: "The process log shows the capability used and that safety checks ran.",
            es: {
              q: "¿Por qué es importante el registro del proceso para el usuario?",
              options: [
                "Muestra qué capacidad produjo la respuesta, lo que ayuda a juzgar si el origen es confiable",
                "Permite al usuario editar la respuesta del modelo fundacional y volver a entrenarlo con la versión corregida",
                "Registra la factura de SCU del usuario",
                "Reemplaza la necesidad de controles de seguridad"
              ],
              explain: "El registro del proceso muestra la capacidad usada y que se ejecutaron controles de seguridad."
            }
          },
          {
            type: "multi",
            q: "Which two happen during Security Copilot's processing of a prompt?",
            options: [
              "Copilot reasons over the enabled plugins and data sources",
              "The response is formatted and reviewed before it's returned",
              "The user's data is added to the foundation model's training set",
              "A new workspace is created for each prompt",
              "The prompt is forwarded to Microsoft support"
            ],
            answers: [0, 1],
            explain: "Copilot reasons over plugins and applies responsible AI review before returning a response.",
            es: {
              q: "¿Cuáles son dos cosas que ocurren mientras Security Copilot procesa una indicación?",
              options: [
                "Copilot razona sobre los complementos y orígenes de datos habilitados",
                "La respuesta se formatea y se revisa antes de devolverla",
                "Los datos del usuario se agregan al entrenamiento del modelo fundacional",
                "Se crea un área de trabajo nueva para cada indicación",
                "La indicación se reenvía al soporte de Microsoft"
              ],
              explain: "Copilot razona sobre los complementos y aplica una revisión de IA responsable antes de devolver la respuesta."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "The process starts when a user submits a prompt in the prompt bar.", answer: true, explain: "That's step one." },
              { s: "Users can't see which capability Copilot chose.", answer: false, explain: "The process log shows it." },
              { s: "Safety checks are part of Microsoft's commitment to responsible AI.", answer: true, explain: "The log shows the output went through them." }
            ],
            es: {
              statements: [
                { s: "El proceso empieza cuando un usuario envía una indicación en la barra de indicaciones.", explain: "Es el primer paso." },
                { s: "Los usuarios no pueden ver qué capacidad eligió Copilot.", explain: "El registro del proceso lo muestra." },
                { s: "Los controles de seguridad forman parte del compromiso de Microsoft con la IA responsable.", explain: "El registro muestra que la salida pasó por ellos." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "copilot-effective-prompts",
      name: "Describe the elements of an effective prompt",
      es: { name: "Describir los elementos de un mensaje eficaz" },
      url: "https://learn.microsoft.com/en-us/training/modules/security-copilot-getting-started/5-create-effective-prompts",
      quiz: {
        added: "2026-11-01",
        items: [
          {
            type: "match",
            q: "Match each part of a prompt to the element it represents.",
            values: ["Goal", "Context", "Expectations", "Source"],
            targets: [
              { t: "Give me the indicators of compromise for Pearl Sleet", answer: 0 },
              { t: "I'll use this in a report for leadership", answer: 1 },
              { t: "Present it as a table", answer: 2 },
              { t: "Use the Microsoft Defender XDR plugin", answer: 3 }
            ],
            explain: "Goal is what you need, context is why, expectations are the format or audience and source is where Copilot should look.",
            es: {
              q: "Relacione cada parte de una indicación con el elemento que representa.",
              values: ["Objetivo", "Contexto", "Expectativas", "Origen"],
              targets: [
                { t: "Dame los indicadores de compromiso de Pearl Sleet" },
                { t: "Lo voy a usar en un informe para la dirección" },
                { t: "Presentalo como tabla" },
                { t: "Usá el complemento de Microsoft Defender XDR" }
              ],
              explain: "El objetivo es lo que necesita, el contexto es para qué, las expectativas son el formato o el público y el origen es dónde debe buscar Copilot."
            }
          },
          {
            type: "single",
            q: "A user wants a list of high-risk unmanaged devices but without any device named \"test\". How should the prompt be phrased?",
            options: [
              "Give me high-risk unmanaged devices; if they're named \"test\", remove them from the list",
              "Don't show devices",
              "Show nothing named test",
              "Devices?"
            ],
            answer: 0,
            explain: "Give positive instructions about what you want, including how to handle exceptions.",
            es: {
              q: "Un usuario quiere una lista de dispositivos no administrados de alto riesgo, pero sin los que se llamen \"test\". ¿Cómo debería escribir la indicación?",
              options: [
                "Dame los dispositivos no administrados de alto riesgo; si se llaman \"test\", quitalos de la lista",
                "No muestres dispositivos",
                "No muestres nada que se llame test",
                "¿Dispositivos?"
              ],
              explain: "Conviene dar instrucciones positivas sobre lo que se quiere, incluido cómo tratar las excepciones."
            }
          },
          {
            type: "multi",
            q: "Which two are recommended prompting tips?",
            options: ["Iterate with follow-up prompts", "Address Copilot directly as \"You\"", "Keep every prompt to a single word", "Describe only what Copilot shouldn't do", "Avoid giving any context"],
            answers: [0, 1],
            explain: "Be specific, iterate, give context, use positive instructions and address Copilot as \"You\".",
            es: {
              q: "¿Cuáles son dos recomendaciones para escribir indicaciones?",
              options: ["Iterar con indicaciones de seguimiento", "Dirigirse a Copilot como \"vos\" o \"usted\"", "Limitar cada indicación a una sola palabra", "Describir solo lo que Copilot no debe hacer", "Evitar dar contexto"],
              explain: "Ser específico, iterar, dar contexto, usar instrucciones positivas y dirigirse a Copilot en segunda persona."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Copilot may respond to the same prompt in slightly different ways.", answer: true, explain: "Like all LLM-based systems." },
              { s: "Prompts must follow a strict fixed structure to be understood.", answer: false, explain: "Copilot is designed to respond to natural language in your own words." },
              { s: "A well-crafted prompt with clear, specific inputs leads to more useful responses.", answer: true, explain: "Response quality depends largely on prompt quality." }
            ],
            es: {
              statements: [
                { s: "Copilot puede responder a la misma indicación de formas un poco distintas.", explain: "Como todos los sistemas basados en modelos de lenguaje." },
                { s: "Las indicaciones deben seguir una estructura fija y estricta para que se entiendan.", explain: "Copilot está diseñado para responder al lenguaje natural con sus propias palabras." },
                { s: "Una indicación bien armada, con datos claros y específicos, da respuestas más útiles.", explain: "La calidad de la respuesta depende en gran parte de la calidad de la indicación." }
              ]
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about prompts.",
            parts: [
              "\"Pearl Sleet actor\" is a ",
              { options: ["basic prompt", "better prompt", "promptbook"], answer: 0 },
              "; asking for its activity, indicators of compromise and TTPs adds ",
              { options: ["a specific goal and detail", "a workspace", "an SCU"], answer: 0 },
              "."
            ],
            explain: "Being specific, clear and concise improves the response.",
            es: {
              q: "Complete la afirmación sobre las indicaciones.",
              parts: [
                "\"Pearl Sleet actor\" es una ",
                { options: ["indicación básica", "indicación mejorada", "libro de indicaciones"] },
                "; pedir su actividad, indicadores de compromiso y TTP agrega ",
                { options: ["un objetivo específico y detalle", "un área de trabajo", "una SCU"] },
                "."
              ],
              explain: "Ser específico, claro y conciso mejora la respuesta."
            }
          }
        ]
      }
    },
    {
      id: "copilot-enable",
      name: "Describe how to enable Microsoft Security Copilot",
      es: { name: "Descripción de cómo habilitar Microsoft Security Copilot" },
      url: "https://learn.microsoft.com/en-us/training/modules/security-copilot-getting-started/6-describe-how-to-enable-security-copilot",
      quiz: {
        added: "2026-11-01",
        items: [
          {
            type: "single",
            q: "A company without Microsoft 365 E5 or E7 wants to provision Security Copilot capacity. Which permissions are needed at minimum?",
            options: [
              "Azure owner or contributor at resource group level, plus Security Administrator in the tenant",
              "Only the Global Administrator role in Microsoft Entra, with no Azure role needed on the subscription or resource group",
              "Only the Copilot contributor role",
              "A Microsoft Sentinel Reader role"
            ],
            answer: 0,
            explain: "Provisioning needs an Azure subscription, Azure owner or contributor at resource group level and Security Administrator or higher. Entra roles don't grant Azure resource access.",
            es: {
              q: "Una empresa sin Microsoft 365 E5 ni E7 quiere aprovisionar capacidad de Security Copilot. ¿Qué permisos necesita como mínimo?",
              options: [
                "Propietario o colaborador de Azure en el grupo de recursos, más Administrador de seguridad en el inquilino",
                "Solo el rol de administrador global de Microsoft Entra, sin ningún rol de Azure en la suscripción ni en el grupo de recursos",
                "Solo el rol de colaborador de Copilot",
                "Un rol de Lector de Microsoft Sentinel"
              ],
              explain: "Aprovisionar requiere una suscripción de Azure, propietario o colaborador en el grupo de recursos y Administrador de seguridad o superior. Los roles de Entra no dan acceso a recursos de Azure."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about SCUs.",
            parts: [
              "You can provision between 1 and ",
              { options: ["100", "10", "1,000"], answer: 0 },
              " SCUs, and Microsoft recommends ",
              { options: ["three", "one", "fifty"], answer: 0 },
              " units with unlimited overage for an introductory exploration."
            ],
            explain: "The minimum is one SCU and the maximum 100; three units with unlimited overage are recommended to start.",
            es: {
              q: "Complete la afirmación sobre las SCU.",
              parts: [
                "Puede aprovisionar entre 1 y ",
                { options: ["100", "10", "1000"] },
                " SCU, y Microsoft recomienda ",
                { options: ["tres", "una", "cincuenta"] },
                " unidades con uso excedente ilimitado para una exploración inicial."
              ],
              explain: "El mínimo es una SCU y el máximo 100; para empezar se recomiendan tres unidades con excedente ilimitado."
            }
          },
          {
            type: "match",
            q: "Match each setting to what it controls.",
            values: ["Data storage", "Prompt evaluation", "Purview audit logging", "Plugin settings"],
            targets: [
              { t: "Where customer data is stored, per workspace", answer: 0 },
              { t: "Whether prompts are evaluated only within your geo or anywhere", answer: 1 },
              { t: "Whether admin actions, user actions and responses are recorded", answer: 2 },
              { t: "Who can add custom plugins and whether Microsoft 365 data is accessible", answer: 3 }
            ],
            explain: "These settings are configured during setup of the default environment.",
            es: {
              q: "Relacione cada configuración con lo que controla.",
              values: ["Almacenamiento de datos", "Evaluación de indicaciones", "Registro de auditoría en Purview", "Configuración de complementos"],
              targets: [
                { t: "Dónde se almacenan los datos del cliente, por área de trabajo" },
                { t: "Si las indicaciones se evalúan solo dentro de su geografía o en cualquier lugar" },
                { t: "Si se registran las acciones de administradores y usuarios y las respuestas" },
                { t: "Quién puede agregar complementos personalizados y si se accede a datos de Microsoft 365" }
              ],
              explain: "Estas opciones se configuran al preparar el entorno predeterminado."
            }
          },
          {
            type: "multi",
            q: "Which two Microsoft Entra roles automatically inherit Copilot owner access?",
            options: ["Security Administrator", "Global Administrator", "User Administrator", "Helpdesk Administrator", "Guest Inviter"],
            answers: [0, 1],
            explain: "Billing, Compliance, Global, Intune and Security Administrators inherit Copilot owner access, along with some Purview roles.",
            es: {
              q: "¿Cuáles son dos roles de Microsoft Entra que heredan automáticamente el acceso de propietario de Copilot?",
              options: ["Administrador de seguridad", "Administrador global", "Administrador de usuarios", "Administrador del departamento de soporte técnico", "Invitador de invitados"],
              explain: "Los administradores de facturación, cumplimiento, global, Intune y seguridad heredan el acceso de propietario de Copilot, junto con algunos roles de Purview."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Opting in to data sharing allows Microsoft to train foundation models on customer data.", answer: false, explain: "Opting in doesn't allow training foundational models." },
              { s: "The usage monitoring dashboard includes up to 90 days of data.", answer: true, explain: "It shows units used, plugins and session initiators." },
              { s: "Most Microsoft plugins use the on-behalf-of model to access products the customer is licensed for.", answer: true, explain: "Some plugins that require setup use configurable parameters instead." }
            ],
            es: {
              statements: [
                { s: "Aceptar el uso compartido de datos permite que Microsoft entrene modelos fundacionales con datos del cliente.", explain: "Aceptar no permite entrenar modelos fundacionales." },
                { s: "El panel de supervisión de uso incluye hasta 90 días de datos.", explain: "Muestra las unidades usadas, los complementos y quién inició las sesiones." },
                { s: "La mayoría de los complementos de Microsoft usan el modelo en nombre de para acceder a los productos para los que el cliente tiene licencia.", explain: "Algunos complementos que requieren configuración usan parámetros configurables." }
              ]
            }
          }
        ]
      }
    }
  ]
});
