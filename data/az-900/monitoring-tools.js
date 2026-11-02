// AZ-900 > Describe Azure management and governance > Describe monitoring tools in Azure
Catalog.module("az-900", {
  id: "monitoring-tools",
  name: "Describe monitoring tools in Azure",
  es: { name: "Descripción de las herramientas de supervisión de Azure" },
  url: "https://learn.microsoft.com/en-us/training/modules/describe-monitoring-tools-azure/",
  quiz: {
    added: "2026-11-01",
    items: [
      {
        type: "single",
        topic: "Azure Service Health",
        q: "A user reports that one specific VM is unreachable. The admin wants to know whether the problem is on Azure's side or theirs. Which view should they check?",
        options: ["Resource Health", "Azure Status", "Azure Advisor", "Application Insights"],
        answer: 0,
        explain: "Resource Health zooms in on individual resources and indicates whether an issue comes from Azure or from your side.",
        es: {
          topic: "Azure Service Health",
          q: "Un usuario informa que una máquina virtual específica no responde. El administrador quiere saber si el problema es de Azure o propio. ¿Qué vista debe revisar?",
          options: ["Resource Health", "Azure Status", "Azure Advisor", "Application Insights"],
          explain: "Resource Health se centra en recursos individuales e indica si un problema viene de Azure o de su lado."
        }
      },
      {
        type: "match",
        topic: "Monitoring tools",
        q: "Match each need to the Azure monitoring tool.",
        values: ["Azure Advisor", "Azure Service Health", "Log Analytics", "Application Insights"],
        targets: [
          { t: "Get personalized recommendations to cut costs and improve reliability", answer: 0 },
          { t: "Learn about planned maintenance in the regions you use", answer: 1 },
          { t: "Query all errors collected in the last hour", answer: 2 },
          { t: "Track response times and failure rates of a web app", answer: 3 }
        ],
        explain: "Advisor recommends, Service Health informs about Azure events, Log Analytics queries collected data and Application Insights monitors apps.",
        es: {
          topic: "Herramientas de supervisión",
          q: "Relacione cada necesidad con la herramienta de supervisión de Azure.",
          values: ["Azure Advisor", "Azure Service Health", "Log Analytics", "Application Insights"],
          targets: [
            { t: "Recibir recomendaciones personalizadas para reducir costos y mejorar la confiabilidad" },
            { t: "Enterarse del mantenimiento planificado en las regiones que usa" },
            { t: "Consultar todos los errores recopilados en la última hora" },
            { t: "Seguir los tiempos de respuesta y las tasas de error de una aplicación web" }
          ],
          explain: "Advisor recomienda, Service Health informa sobre eventos de Azure, Log Analytics consulta los datos recopilados y Application Insights supervisa aplicaciones."
        }
      },
      {
        type: "single",
        topic: "Azure Monitor",
        q: "A team wants an email whenever a VM's CPU stays above 80%. What should it create in Azure Monitor?",
        options: ["A metric alert rule with an action group", "An Advisor recommendation configured with a CPU threshold of 80%", "A log alert on activity logs", "An availability test"],
        answer: 0,
        explain: "An alert rule defines the condition and an action group controls who's notified and what happens.",
        es: {
          topic: "Azure Monitor",
          q: "Un equipo quiere un correo cada vez que la CPU de una máquina virtual se mantenga por encima del 80 %. ¿Qué debe crear en Azure Monitor?",
          options: ["Una regla de alerta de métricas con un grupo de acciones", "Una recomendación de Advisor configurada con un umbral de CPU del 80 %", "Una alerta de registros sobre los registros de actividad", "Una prueba de disponibilidad"],
          explain: "Una regla de alerta define la condición y un grupo de acciones controla a quién se notifica y qué pasa."
        }
      },
      {
        type: "multi",
        topic: "Azure Advisor",
        q: "Which two are Azure Advisor recommendation categories?",
        options: ["Operational Excellence", "Cost", "Compliance", "Governance", "Availability"],
        answers: [0, 1],
        explain: "The five categories are Reliability, Security, Performance, Operational Excellence and Cost.",
        es: {
          topic: "Azure Advisor",
          q: "¿Cuáles son dos categorías de recomendaciones de Azure Advisor?",
          options: ["Excelencia operativa", "Costo", "Cumplimiento", "Gobernanza", "Disponibilidad"],
          explain: "Las cinco categorías son Confiabilidad, Seguridad, Rendimiento, Excelencia operativa y Costo."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "Azure Monitor", s: "Azure Monitor can collect data from on-premises and multicloud environments.", answer: true, explain: "It works with Azure, on-premises and multicloud." },
          { topic: "Azure Service Health", s: "Azure Status shows only the services you personally use.", answer: false, explain: "Azure Status is the global view; Service Health focuses on your services and regions." },
          { topic: "Azure Monitor", s: "Action groups can be reused across Azure Monitor, Service Health and Azure Advisor.", answer: true, explain: "They're reusable." }
        ],
        es: {
          statements: [
            { topic: "Azure Monitor", s: "Azure Monitor puede recopilar datos de entornos locales y multinube.", explain: "Funciona con Azure, el entorno local y la multinube." },
            { topic: "Azure Service Health", s: "Azure Status muestra solo los servicios que usted usa.", explain: "Azure Status es la vista global; Service Health se centra en sus servicios y regiones." },
            { topic: "Azure Monitor", s: "Los grupos de acciones se pueden reutilizar en Azure Monitor, Service Health y Azure Advisor.", explain: "Son reutilizables." }
          ]
        }
      },
      {
        type: "dropdown",
        topic: "Azure Monitor",
        q: "Complete the statement about Application Insights.",
        parts: [
          "Application Insights can be set up by adding an SDK or by ",
          { options: ["enabling an agent without code changes", "deploying an ARM template only", "enabling Azure Monitor metrics only"], answer: 0 },
          ", and ",
          { options: ["availability tests", "metric alerts", "Resource Health checks"], answer: 0 },
          " send synthetic requests to check the app responds even with little traffic."
        ],
        explain: "Application Insights works through an SDK or a codeless agent, and availability tests send synthetic requests.",
        es: {
          topic: "Azure Monitor",
          q: "Complete la afirmación sobre Application Insights.",
          parts: [
            "Application Insights se configura agregando un SDK o ",
            { options: ["habilitando un agente sin cambiar el código", "implementando solo una plantilla ARM", "habilitar solo las métricas de Azure Monitor"] },
            ", y las ",
            { options: ["pruebas de disponibilidad", "las alertas de métricas", "las comprobaciones de Resource Health"] },
            " envían solicitudes sintéticas para comprobar que la aplicación responde aunque haya poco tráfico."
          ],
          explain: "Application Insights funciona con un SDK o un agente sin código, y las pruebas de disponibilidad envían solicitudes sintéticas."
        }
      },
      {
        type: "single",
        topic: "Azure Service Health",
        q: "News reports a widespread cloud outage. Where can you check whether it affects Azure globally?",
        options: ["Azure Status", "Resource Health", "Application Insights", "Azure Advisor"],
        answer: 0,
        explain: "Azure Status gives a global picture of Azure health across all services and regions.",
        es: {
          topic: "Azure Service Health",
          q: "Las noticias informan una caída generalizada en la nube. ¿Dónde puede comprobar si afecta a Azure a nivel global?",
          options: ["Azure Status", "Resource Health", "Application Insights", "Azure Advisor"],
          explain: "Azure Status ofrece una imagen global del estado de Azure en todos los servicios y regiones."
        }
      },
      {
        type: "single",
        topic: "Azure Advisor",
        q: "What can you do with an Azure Advisor recommendation?",
        options: ["Act on it, postpone it or dismiss it", "Only accept it, since it's applied automatically", "Only act on it within 7 days", "Only assign it to a policy"],
        answer: 0,
        explain: "Each recommendation includes a suggested action you can take now, postpone or dismiss.",
        es: {
          topic: "Azure Advisor",
          q: "¿Qué puede hacer con una recomendación de Azure Advisor?",
          options: ["Aplicarla, posponerla o descartarla", "Solo aceptarla, porque se aplica automáticamente", "Solo actuar sobre ella dentro de 7 días", "Solo asignarla a una directiva"],
          explain: "Cada recomendación incluye una acción sugerida que puede tomar ahora, posponer o descartar."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "Azure Monitor", s: "Log alerts can watch for a specific error pattern across multiple resources.", answer: true, explain: "Alerts can be metric-based or log-based." },
          { topic: "Azure Service Health", s: "Service Health retains historical alerts so you can spot recurring trends.", answer: true, explain: "Historical alerts are kept." },
          { topic: "Azure Monitor", s: "Application Insights only monitors apps hosted in Azure.", answer: false, explain: "It monitors apps in Azure, on-premises or another cloud." }
        ],
        es: {
          statements: [
            { topic: "Azure Monitor", s: "Las alertas de registros pueden vigilar un patrón de error específico en varios recursos.", explain: "Las alertas pueden basarse en métricas o en registros." },
            { topic: "Azure Service Health", s: "Service Health conserva las alertas históricas para detectar tendencias recurrentes.", explain: "Las alertas históricas se conservan." },
            { topic: "Azure Monitor", s: "Application Insights solo supervisa aplicaciones hospedadas en Azure.", explain: "Supervisa aplicaciones en Azure, en el entorno local o en otra nube." }
          ]
        }
      },
      {
        type: "single",
        topic: "Azure Monitor",
        q: "Where do you write and run queries against the logs and metrics that Azure Monitor collects?",
        options: ["Log Analytics", "Azure Service Health", "Application Insights", "Azure Monitor workbooks only"],
        answer: 0,
        explain: "Log Analytics is the portal tool for simple filtering and advanced queries on Azure Monitor data.",
        es: {
          topic: "Azure Monitor",
          q: "¿Dónde se escriben y ejecutan consultas sobre los registros y métricas que recopila Azure Monitor?",
          options: ["Log Analytics", "Azure Service Health", "Application Insights", "Solo los libros de Azure Monitor"],
          explain: "Log Analytics es la herramienta del portal para filtrar y hacer consultas avanzadas sobre los datos de Azure Monitor."
        }
      },
      {
        type: "single",
        topic: "Azure Service Health",
        q: "Why can Service Health show events relevant to your environment, unlike Azure Status?",
        options: [
          "Because you're signed in, it knows which services and regions you use",
          "Because it scans the logs of every VM in your subscriptions to detect problems",
          "Because Advisor shares its recommendations with it",
          "Because it only covers your paired region"
        ],
        answer: 0,
        explain: "Service Health is personalized to the services and regions you actually use.",
        es: {
          topic: "Azure Service Health",
          q: "¿Por qué Service Health puede mostrar eventos relevantes para su entorno, a diferencia de Azure Status?",
          options: [
            "Porque, al haber iniciado sesión, sabe qué servicios y regiones usa",
            "Porque analiza los registros de cada máquina virtual de sus suscripciones para detectar problemas",
            "Porque Advisor le comparte sus recomendaciones",
            "Porque solo cubre su región emparejada"
          ],
          explain: "Service Health se personaliza según los servicios y regiones que usted usa."
        }
      },
      {
        type: "single",
        topic: "Azure Monitor",
        q: "Which statement describes Azure Monitor?",
        options: [
          "A platform to collect, analyze and act on data from resources and applications",
          "A service that gives best-practice recommendations",
          "A tool that enforces configuration rules on resources and reports which ones are noncompliant",
          "A dashboard of Azure-wide service status"
        ],
        answer: 0,
        explain: "Azure Monitor gathers logs and metrics centrally and exposes them through dashboards, queries and alerts.",
        es: {
          topic: "Azure Monitor",
          q: "¿Qué afirmación describe Azure Monitor?",
          options: [
            "Una plataforma para recopilar, analizar y actuar sobre datos de recursos y aplicaciones",
            "Un servicio que da recomendaciones de prácticas recomendadas",
            "Una herramienta que aplica reglas de configuración a los recursos e informa cuáles no las cumplen",
            "Un panel con el estado de los servicios de Azure en todo el mundo"
          ],
          explain: "Azure Monitor reúne registros y métricas de forma centralizada y los expone en paneles, consultas y alertas."
        }
      }
    ]
  },
  units: [
    {
      id: "advisor",
      name: "Describe the purpose of Azure Advisor",
      es: { name: "Descripción del propósito de Azure Advisor" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-monitoring-tools-azure/2-describe-purpose-of-azure-advisor",
      quiz: {
        added: "2026-11-01",
        items: [
          {
            type: "match",
            q: "Match each recommendation to its Azure Advisor category.",
            values: ["Reliability", "Security", "Performance", "Cost"],
            targets: [
              { t: "Flag a configuration risk that could take an app offline", answer: 0 },
              { t: "Detect a vulnerability that could lead to a breach", answer: 1 },
              { t: "Suggest a change that speeds up an application", answer: 2 },
              { t: "Point out an underused VM you could resize", answer: 3 }
            ],
            explain: "Advisor groups recommendations into Reliability, Security, Performance, Operational Excellence and Cost.",
            es: {
              q: "Relacione cada recomendación con su categoría de Azure Advisor.",
              values: ["Confiabilidad", "Seguridad", "Rendimiento", "Costo"],
              targets: [
                { t: "Señalar un riesgo de configuración que podría dejar una aplicación fuera de línea" },
                { t: "Detectar una vulnerabilidad que podría causar una filtración" },
                { t: "Sugerir un cambio que acelere una aplicación" },
                { t: "Indicar una máquina virtual poco usada a la que podría cambiar el tamaño" }
              ],
              explain: "Advisor agrupa las recomendaciones en Confiabilidad, Seguridad, Rendimiento, Excelencia operativa y Costo."
            }
          },
          {
            type: "single",
            q: "Which Advisor category suggests workflow and deployment improvements?",
            options: ["Operational Excellence", "Performance", "Reliability", "Security"],
            answer: 0,
            explain: "Operational Excellence focuses on workflow and deployment improvements.",
            es: {
              q: "¿Qué categoría de Advisor sugiere mejoras en flujos de trabajo e implementaciones?",
              options: ["Excelencia operativa", "Rendimiento", "Confiabilidad", "Seguridad"],
              explain: "Excelencia operativa se centra en mejorar flujos de trabajo e implementaciones."
            }
          },
          {
            type: "single",
            q: "A team wants to know automatically whenever Advisor has a new recommendation. What should it do?",
            options: ["Set up Advisor notifications", "Create a metric alert on the subscription", "Configure Service Health alerts", "Check Azure Status daily"],
            answer: 0,
            explain: "You can configure notifications so Advisor alerts you about new recommendations.",
            es: {
              q: "Un equipo quiere enterarse automáticamente cada vez que Advisor tenga una recomendación nueva. ¿Qué debe hacer?",
              options: ["Configurar notificaciones de Advisor", "Crear una alerta de métricas en la suscripción", "Configurar alertas de Service Health", "Revisar Azure Status todos los días"],
              explain: "Puede configurar notificaciones para que Advisor le avise sobre recomendaciones nuevas."
            }
          },
          {
            type: "multi",
            q: "Which two statements about Azure Advisor are true?",
            options: [
              "Its dashboard shows recommendations for all your subscriptions",
              "You can filter recommendations by subscription, resource group or service",
              "It applies every recommendation automatically",
              "It's only available through the Azure CLI",
              "It only covers cost recommendations"
            ],
            answers: [0, 1],
            explain: "Advisor is built into the portal, covers all subscriptions and supports filtering; you decide what to act on.",
            es: {
              q: "¿Cuáles son dos afirmaciones verdaderas sobre Azure Advisor?",
              options: [
                "Su panel muestra recomendaciones de todas sus suscripciones",
                "Puede filtrar las recomendaciones por suscripción, grupo de recursos o servicio",
                "Aplica todas las recomendaciones automáticamente",
                "Solo está disponible mediante la CLI de Azure",
                "Solo cubre recomendaciones de costo"
              ],
              explain: "Advisor está integrado en el portal, abarca todas las suscripciones y permite filtrar; usted decide qué aplicar."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Azure Advisor can be thought of as a personalized best-practices guide.", answer: true, explain: "It's built into the Azure portal." },
              { s: "Advisor recommendations can be postponed.", answer: true, explain: "You can act now, postpone or dismiss." },
              { s: "Advisor's only focus is reducing cost.", answer: false, explain: "It also covers reliability, security, performance and operational excellence." }
            ],
            es: {
              statements: [
                { s: "Azure Advisor se puede pensar como una guía personalizada de procedimientos recomendados.", explain: "Está integrado en Azure Portal." },
                { s: "Las recomendaciones de Advisor se pueden posponer.", explain: "Puede aplicarlas ahora, posponerlas o descartarlas." },
                { s: "El único objetivo de Advisor es reducir costos.", explain: "También cubre confiabilidad, seguridad, rendimiento y excelencia operativa." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "service-health",
      name: "Describe Azure Service Health",
      es: { name: "Descripción de Azure Service Health" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-monitoring-tools-azure/3-describe-azure-service-health",
      quiz: {
        added: "2026-11-01",
        items: [
          {
            type: "match",
            q: "Match each question to the Azure Service Health view that answers it.",
            values: ["Azure Status", "Service Health", "Resource Health"],
            targets: [
              { t: "Is Azure having a widespread outage anywhere in the world?", answer: 0 },
              { t: "Is there planned maintenance in the services and regions we use?", answer: 1 },
              { t: "Is this specific VM running normally?", answer: 2 }
            ],
            explain: "The three views narrow in scope from global (Azure Status) to your services (Service Health) to individual resources (Resource Health).",
            es: {
              q: "Relacione cada pregunta con la vista de Azure Service Health que la responde.",
              values: ["Azure Status", "Service Health", "Resource Health"],
              targets: [
                { t: "¿Azure tiene una caída generalizada en alguna parte del mundo?" },
                { t: "¿Hay mantenimiento planificado en los servicios y regiones que usamos?" },
                { t: "¿Esta máquina virtual específica funciona con normalidad?" }
              ],
              explain: "Las tres vistas reducen el alcance de lo global (Azure Status) a sus servicios (Service Health) y a recursos individuales (Resource Health)."
            }
          },
          {
            type: "single",
            q: "A company wants to be notified automatically about outages and health advisories that affect the Azure services it uses. What should it configure?",
            options: ["Service Health alerts", "Azure Status RSS only", "Advisor notifications", "Resource Health only"],
            answer: 0,
            explain: "Service Health shows events relevant to your environment and supports alerts.",
            es: {
              q: "Una empresa quiere recibir avisos automáticos sobre caídas y avisos de estado que afecten a los servicios de Azure que usa. ¿Qué debe configurar?",
              options: ["Alertas de Service Health", "Solo el RSS de Azure Status", "Las notificaciones de Advisor", "Solo Resource Health"],
              explain: "Service Health muestra los eventos relevantes para su entorno y admite alertas."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about Azure Service Health.",
            parts: [
              "Resource Health tells you whether a problem is ",
              { options: ["on Azure's side or yours", "caused by a policy", "in the paired region"], answer: 0 },
              ", and when an event affects a workload, Service Health provides ",
              { options: ["links to support", "automatic failover", "Advisor recommendations"], answer: 0 },
              "."
            ],
            explain: "Resource Health attributes the issue, and Service Health links to support so you can respond quickly.",
            es: {
              q: "Complete la afirmación sobre Azure Service Health.",
              parts: [
                "Resource Health indica si un problema es ",
                { options: ["de Azure o suyo", "causado por una directiva", "en la región emparejada"] },
                ", y cuando un evento afecta una carga de trabajo, Service Health ofrece ",
                { options: ["enlaces al soporte", "una conmutación por error automática", "recomendaciones de Advisor"] },
                "."
              ],
              explain: "Resource Health atribuye el problema y Service Health enlaza al soporte para responder rápido."
            }
          },
          {
            type: "multi",
            q: "Which two kinds of events does Service Health show for your environment?",
            options: ["Planned maintenance", "Health advisories", "Advisor recommendations", "Metric alerts", "Budget alerts"],
            answers: [0, 1],
            explain: "Service Health shows outages, planned maintenance and health advisories relevant to you.",
            es: {
              q: "¿Cuáles son dos tipos de eventos que Service Health muestra para su entorno?",
              options: ["El mantenimiento planificado", "Los avisos de estado", "Recomendaciones de Advisor", "Alertas de métricas", "Alertas de presupuesto"],
              explain: "Service Health muestra caídas, mantenimiento planificado y avisos de estado relevantes para usted."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Azure Status requires signing in to show which services you use.", answer: false, explain: "Azure Status is the global view; Service Health is the personalized one." },
              { s: "Used together, the three views give visibility from broad service events down to one resource.", answer: true, explain: "They narrow in scope." },
              { s: "Service Health keeps historical alerts.", answer: true, explain: "That helps spot recurring trends." }
            ],
            es: {
              statements: [
                { s: "Azure Status requiere iniciar sesión para mostrar qué servicios usa.", explain: "Azure Status es la vista global; Service Health es la personalizada." },
                { s: "Usadas juntas, las tres vistas dan visibilidad desde eventos amplios del servicio hasta un solo recurso.", explain: "Su alcance se va reduciendo." },
                { s: "Service Health conserva las alertas históricas.", explain: "Eso ayuda a detectar tendencias recurrentes." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "azure-monitor",
      name: "Describe Azure Monitor",
      es: { name: "Descripción de Azure Monitor" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-monitoring-tools-azure/4-describe-azure-monitor",
      quiz: {
        added: "2026-11-01",
        items: [
          {
            type: "single",
            q: "A web app runs in another cloud. The team wants to track its request rates, dependency calls and page load times. What should it use?",
            options: ["Application Insights", "Log Analytics alone", "Resource Health", "VM Insights"],
            answer: 0,
            explain: "Application Insights monitors performance and usage of web apps in Azure, on-premises or another cloud.",
            es: {
              q: "Una aplicación web se ejecuta en otra nube. El equipo quiere seguir sus tasas de solicitudes, llamadas a dependencias y tiempos de carga de página. ¿Qué debe usar?",
              options: ["Application Insights", "Log Analytics solo", "Resource Health", "VM Insights"],
              explain: "Application Insights supervisa el rendimiento y el uso de aplicaciones web en Azure, en el entorno local o en otra nube."
            }
          },
          {
            type: "match",
            q: "Match each component to its role in Azure Monitor alerts.",
            values: ["Alert rule", "Action group"],
            targets: [
              { t: "Specifies the condition that must be met", answer: 0 },
              { t: "Controls who gets notified and what happens next", answer: 1 },
              { t: "Can be reused across Azure Monitor, Service Health and Advisor", answer: 1 }
            ],
            explain: "Alert rules define conditions; action groups define notifications and actions and are reusable.",
            es: {
              q: "Relacione cada componente con su función en las alertas de Azure Monitor.",
              values: ["Regla de alerta", "Grupo de acciones"],
              targets: [
                { t: "Especifica la condición que se debe cumplir" },
                { t: "Controla a quién se notifica y qué pasa después" },
                { t: "Se puede reutilizar en Azure Monitor, Service Health y Advisor" }
              ],
              explain: "Las reglas de alerta definen condiciones; los grupos de acciones definen notificaciones y acciones, y son reutilizables."
            }
          },
          {
            type: "single",
            q: "A team wants to know its app responds even at night, when there's almost no traffic. Which Application Insights feature helps?",
            options: ["Availability tests", "Log alerts on CPU", "Resource Health", "Service Health alerts"],
            answer: 0,
            explain: "Availability tests send synthetic requests so you know the app responds during low-traffic periods.",
            es: {
              q: "Un equipo quiere saber que su aplicación responde incluso de noche, cuando casi no hay tráfico. ¿Qué característica de Application Insights ayuda?",
              options: ["Las pruebas de disponibilidad", "Alertas de registros sobre la CPU", "Resource Health", "Alertas de Service Health"],
              explain: "Las pruebas de disponibilidad envían solicitudes sintéticas para saber que la aplicación responde en períodos de poco tráfico."
            }
          },
          {
            type: "multi",
            q: "Which two can Application Insights monitor?",
            options: ["Dependency calls and their performance", "Server performance counters such as CPU and memory", "Azure outages in your regions", "Advisor cost recommendations", "Policy compliance"],
            answers: [0, 1],
            explain: "It monitors requests, dependencies, page loads, users and server performance counters.",
            es: {
              q: "¿Cuáles son dos elementos que puede supervisar Application Insights?",
              options: ["Las llamadas a dependencias y su rendimiento", "Los contadores de rendimiento del servidor, como CPU y memoria", "Las interrupciones de Azure en sus regiones", "Las recomendaciones de costo de Advisor", "El cumplimiento de directivas"],
              explain: "Supervisa solicitudes, dependencias, cargas de página, usuarios y contadores de rendimiento del servidor."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Log Analytics supports both simple filtering and advanced analytics over time.", answer: true, explain: "For example, finding errors in the last hour or visualizing trends." },
              { s: "Application Insights always requires changing the application's code.", answer: false, explain: "It can be enabled with an agent and no code changes." },
              { s: "Azure Monitor gathers data from applications, operating systems and network layers.", answer: true, explain: "It stores the data centrally." }
            ],
            es: {
              statements: [
                { s: "Log Analytics admite tanto filtros simples como análisis avanzados a lo largo del tiempo.", explain: "Por ejemplo, buscar errores de la última hora o visualizar tendencias." },
                { s: "Application Insights siempre requiere cambiar el código de la aplicación.", explain: "Se puede habilitar con un agente sin cambiar el código." },
                { s: "Azure Monitor reúne datos de aplicaciones, sistemas operativos y capas de red.", explain: "Guarda los datos de forma centralizada." }
              ]
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about Azure Monitor alerts.",
            parts: [
              "An alert that emails you when a VM's CPU stays above 80% is a ",
              { options: ["metric alert", "log alert", "activity log alert"], answer: 0 },
              ", while one that watches for an error pattern across several resources is a ",
              { options: ["log alert", "metric alert", "Service Health alert"], answer: 0 },
              "."
            ],
            explain: "Alerts can be metric-based or log-based.",
            es: {
              q: "Complete la afirmación sobre las alertas de Azure Monitor.",
              parts: [
                "Una alerta que le envía un correo cuando la CPU de una máquina virtual se mantiene por encima del 80 % es una ",
                { options: ["alerta de métricas", "alerta de registros", "alerta del registro de actividad"] },
                ", mientras que una que vigila un patrón de error en varios recursos es una ",
                { options: ["alerta de registros", "alerta de métricas", "alerta de Service Health"] },
                "."
              ],
              explain: "Las alertas pueden basarse en métricas o en registros."
            }
          }
        ]
      }
    }
  ]
});
