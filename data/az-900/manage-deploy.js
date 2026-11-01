// AZ-900 > Describe Azure management and governance > Describe features and tools for managing and deploying Azure resources
Catalog.module("az-900", {
  id: "manage-deploy",
  name: "Describe features and tools for managing and deploying Azure resources",
  es: { name: "Descripción de las características y herramientas para administrar e implementar recursos de Azure" },
  url: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-manage-deploy-azure-resources/",
  quiz: {
    added: "2026-11-01",
    items: [
      {
        type: "single",
        topic: "Azure Resource Manager and templates",
        q: "A team wants to deploy identical dev, test and production environments from a single definition that declares the desired end state. What should it use?",
        options: ["ARM templates or Bicep", "Azure Cloud Shell sessions", "The Azure portal dashboards", "Azure Arc custom locations"],
        answer: 0,
        explain: "Templates are declarative infrastructure as code that produce repeatable, consistent deployments.",
        es: {
          topic: "Azure Resource Manager y plantillas",
          q: "Un equipo quiere implementar entornos idénticos de desarrollo, pruebas y producción a partir de una única definición que declare el estado final deseado. ¿Qué debe usar?",
          options: ["Plantillas ARM o Bicep", "Sesiones de Azure Cloud Shell", "Los paneles de Azure Portal", "Las ubicaciones personalizadas de Azure Arc"],
          explain: "Las plantillas son infraestructura como código declarativa que produce implementaciones repetibles y coherentes."
        }
      },
      {
        type: "match",
        topic: "Tools for interacting with Azure",
        q: "Match each description to the tool.",
        values: ["Azure portal", "Azure Cloud Shell", "Azure PowerShell", "Azure CLI"],
        targets: [
          { t: "Web-based graphical console with custom dashboards", answer: 0 },
          { t: "Browser-based shell already authenticated with your credentials", answer: 1 },
          { t: "Runs commands called cmdlets that call the Azure REST API", answer: 2 },
          { t: "Functionally equivalent to PowerShell but uses Bash syntax", answer: 3 }
        ],
        explain: "The portal is the GUI, Cloud Shell hosts both shells in the browser, PowerShell uses cmdlets and the CLI uses Bash commands.",
        es: {
          topic: "Herramientas para interactuar con Azure",
          q: "Relacione cada descripción con la herramienta.",
          values: ["Azure Portal", "Azure Cloud Shell", "Azure PowerShell", "CLI de Azure"],
          targets: [
            { t: "Consola gráfica web con paneles personalizados" },
            { t: "Shell en el explorador ya autenticado con sus credenciales" },
            { t: "Ejecuta comandos llamados cmdlets que llaman a la API REST de Azure" },
            { t: "Equivale en funciones a PowerShell pero usa sintaxis de Bash" }
          ],
          explain: "El portal es la interfaz gráfica, Cloud Shell aloja ambos shells en el explorador, PowerShell usa cmdlets y la CLI usa comandos de Bash."
        }
      },
      {
        type: "single",
        topic: "Azure Arc",
        q: "A company wants to apply Azure Policy and track inventory for servers in its own datacenter and Kubernetes clusters in another cloud, all from Azure. What should it use?",
        options: ["Azure Arc", "Azure Resource Manager templates", "Azure Cloud Shell", "Microsoft Purview"],
        answer: 0,
        explain: "Azure Arc projects non-Azure resources into Azure Resource Manager so they can be governed and managed like Azure resources.",
        es: {
          topic: "Azure Arc",
          q: "Una empresa quiere aplicar Azure Policy y llevar el inventario de servidores de su centro de datos y de clústeres de Kubernetes en otra nube, todo desde Azure. ¿Qué debe usar?",
          options: ["Azure Arc", "Plantillas de Azure Resource Manager", "Azure Cloud Shell", "Microsoft Purview"],
          explain: "Azure Arc proyecta recursos que no son de Azure en Azure Resource Manager para gobernarlos y administrarlos como recursos de Azure."
        }
      },
      {
        type: "multi",
        topic: "Azure Resource Manager and templates",
        q: "Which two are benefits of Azure Resource Manager?",
        options: [
          "Defining dependencies so resources deploy in the correct order",
          "Native RBAC integration for access control across services",
          "Automatic cost reduction of every deployed resource",
          "Replacing the need for authentication on requests",
          "Hosting virtual machines outside Azure"
        ],
        answers: [0, 1],
        explain: "Resource Manager handles dependencies, group deployment, tags and natively integrated RBAC; it authenticates and authorizes every request.",
        es: {
          topic: "Azure Resource Manager y plantillas",
          q: "¿Cuáles son dos ventajas de Azure Resource Manager?",
          options: [
            "Definir dependencias para que los recursos se implementen en el orden correcto",
            "La integración nativa con RBAC para controlar el acceso a todos los servicios",
            "La reducción automática del costo de cada recurso implementado",
            "Eliminar la necesidad de autenticar las solicitudes",
            "Hospedar máquinas virtuales fuera de Azure"
          ],
          explain: "Resource Manager maneja dependencias, implementación en grupo, etiquetas y RBAC integrado de forma nativa; autentica y autoriza cada solicitud."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "Azure Resource Manager and templates", s: "Requests from the portal, the CLI and SDKs all go through Azure Resource Manager.", answer: true, explain: "That's why results are consistent across tools." },
          { topic: "Tools for interacting with Azure", s: "Azure Cloud Shell requires installing the Azure CLI on your computer first.", answer: false, explain: "It's browser-based with no local installation." },
          { topic: "Tools for interacting with Azure", s: "Copilot in Azure recommendations should still be validated before applying changes in production.", answer: true, explain: "Treat Copilot as an operational assistant." }
        ],
        es: {
          statements: [
            { topic: "Azure Resource Manager y plantillas", s: "Las solicitudes desde el portal, la CLI y los SDK pasan todas por Azure Resource Manager.", explain: "Por eso los resultados son coherentes entre herramientas." },
            { topic: "Herramientas para interactuar con Azure", s: "Azure Cloud Shell requiere instalar primero la CLI de Azure en su equipo.", explain: "Se usa desde el explorador, sin instalación local." },
            { topic: "Herramientas para interactuar con Azure", s: "Las recomendaciones de Copilot en Azure se deben validar antes de aplicar cambios en producción.", explain: "Copilot se usa como un asistente operativo." }
          ]
        }
      },
      {
        type: "dropdown",
        topic: "Azure Resource Manager and templates",
        q: "Complete the statement about infrastructure as code.",
        parts: [
          "ARM templates describe resources in declarative ",
          { options: ["JSON", "Bash", "YAML pipelines"], answer: 0 },
          ", while ",
          { options: ["Bicep", "Azure PowerShell", "Azure Arc"], answer: 0 },
          " is a declarative language with simpler, more concise syntax that also deploys through ARM."
        ],
        explain: "ARM templates are JSON; Bicep is a simpler declarative language that deploys through Azure Resource Manager.",
        es: {
          topic: "Azure Resource Manager y plantillas",
          q: "Complete la afirmación sobre la infraestructura como código.",
          parts: [
            "Las plantillas ARM describen los recursos en ",
            { options: ["JSON", "Bash", "canalizaciones YAML"] },
            " declarativo, mientras que ",
            { options: ["Bicep", "Azure PowerShell", "Azure Arc"] },
            " es un lenguaje declarativo con sintaxis más simple y concisa que también implementa mediante ARM."
          ],
          explain: "Las plantillas ARM son JSON; Bicep es un lenguaje declarativo más simple que implementa mediante Azure Resource Manager."
        }
      },
      {
        type: "single",
        topic: "Tools for interacting with Azure",
        q: "An administrator is comfortable with Bash and wants to script repeatable Azure tasks from a Mac. Which tool fits most naturally?",
        options: ["The Azure CLI", "Azure PowerShell cmdlets only", "The Azure portal", "The Service Trust Portal"],
        answer: 0,
        explain: "The Azure CLI uses Bash commands and runs on Windows, Linux and macOS. The choice between CLI and PowerShell mostly depends on familiarity.",
        es: {
          topic: "Herramientas para interactuar con Azure",
          q: "Un administrador se siente cómodo con Bash y quiere automatizar tareas repetibles de Azure desde una Mac. ¿Qué herramienta encaja mejor?",
          options: ["La CLI de Azure", "Solo los cmdlets de Azure PowerShell", "Azure Portal", "El Portal de confianza de servicios"],
          explain: "La CLI de Azure usa comandos de Bash y funciona en Windows, Linux y macOS. Elegir entre CLI y PowerShell depende sobre todo de la familiaridad."
        }
      },
      {
        type: "single",
        topic: "Azure Arc",
        q: "Which resource types can Azure Arc currently manage outside Azure?",
        options: [
          "Servers, Kubernetes clusters, Azure data services and SQL Server",
          "Only Windows servers running in Microsoft datacenters or connected through ExpressRoute",
          "Only Microsoft 365 tenants",
          "Only storage accounts in other clouds"
        ],
        answer: 0,
        explain: "Azure Arc manages servers, Kubernetes clusters, Azure data services, SQL Server and, in preview, virtual machines.",
        es: {
          topic: "Azure Arc",
          q: "¿Qué tipos de recursos puede administrar actualmente Azure Arc fuera de Azure?",
          options: [
            "Servidores, clústeres de Kubernetes, servicios de datos de Azure y SQL Server",
            "Solo servidores Windows que se ejecutan en centros de datos de Microsoft o conectados por ExpressRoute",
            "Solo inquilinos de Microsoft 365",
            "Solo cuentas de almacenamiento en otras nubes"
          ],
          explain: "Azure Arc administra servidores, clústeres de Kubernetes, servicios de datos de Azure, SQL Server y, en versión preliminar, máquinas virtuales."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "Azure Resource Manager and templates", s: "Bicep deployments are idempotent, so redeploying the same file gives consistent results.", answer: true, explain: "That supports repeatable lifecycle deployments." },
          { topic: "Tools for interacting with Azure", s: "The Azure portal needs scheduled downtime for maintenance.", answer: false, explain: "It updates continuously and requires no downtime." },
          { topic: "Azure Arc", s: "Azure Arc works with Azure Resource Manager to extend compliance and monitoring to hybrid and multicloud setups.", answer: true, explain: "It delivers a consistent management platform." }
        ],
        es: {
          statements: [
            { topic: "Azure Resource Manager y plantillas", s: "Las implementaciones de Bicep son idempotentes, así que volver a implementar el mismo archivo da resultados coherentes.", explain: "Eso permite implementaciones repetibles a lo largo del ciclo de vida." },
            { topic: "Herramientas para interactuar con Azure", s: "Azure Portal necesita tiempo de inactividad programado para mantenimiento.", explain: "Se actualiza continuamente y no requiere tiempo de inactividad." },
            { topic: "Azure Arc", s: "Azure Arc trabaja con Azure Resource Manager para extender el cumplimiento y la supervisión a entornos híbridos y multinube.", explain: "Ofrece una plataforma de administración coherente." }
          ]
        }
      },
      {
        type: "single",
        topic: "Azure Resource Manager and templates",
        q: "What does Azure Resource Manager do when it receives a request from a tool?",
        options: [
          "It authenticates and authorizes the request, then sends it to the Azure service",
          "It sends the request directly to the service without checks",
          "It converts the request into a Bicep file and stores it in the resource group for later review",
          "It forwards the request to Azure Arc for approval"
        ],
        answer: 0,
        explain: "Resource Manager authenticates and authorizes every request before the target service acts on it.",
        es: {
          topic: "Azure Resource Manager y plantillas",
          q: "¿Qué hace Azure Resource Manager cuando recibe una solicitud de una herramienta?",
          options: [
            "Autentica y autoriza la solicitud, y luego la envía al servicio de Azure",
            "Envía la solicitud directamente al servicio sin controles",
            "Convierte la solicitud en un archivo Bicep y lo guarda en el grupo de recursos para revisarlo después",
            "Reenvía la solicitud a Azure Arc para su aprobación"
          ],
          explain: "Resource Manager autentica y autoriza cada solicitud antes de que el servicio de destino actúe."
        }
      },
      {
        type: "single",
        topic: "Tools for interacting with Azure",
        q: "Why is the Azure portal resilient to the failure of an individual datacenter?",
        options: [
          "It maintains a presence in every Azure datacenter",
          "It runs only in a single paired region",
          "It's installed locally on each administrator's computer",
          "It caches all resources in Azure Cloud Shell"
        ],
        answer: 0,
        explain: "Being present in every datacenter makes the portal resilient and close to users.",
        es: {
          topic: "Herramientas para interactuar con Azure",
          q: "¿Por qué Azure Portal resiste la falla de un centro de datos individual?",
          options: [
            "Tiene presencia en todos los centros de datos de Azure",
            "Se ejecuta solo en un par de regiones",
            "Se instala localmente en el equipo de cada administrador",
            "Guarda en caché todos los recursos en Azure Cloud Shell"
          ],
          explain: "Estar presente en todos los centros de datos hace que el portal sea resiliente y cercano a los usuarios."
        }
      },
      {
        type: "single",
        topic: "Azure Resource Manager and templates",
        q: "A template needs to run a setup script after creating a resource. What allows this?",
        options: ["Deployment scripts in PowerShell or Bash called from the template", "A resource lock on the resource group", "An Azure Arc custom location", "A budget alert"],
        answer: 0,
        explain: "Templates are extensible: they can call PowerShell or Bash deployment scripts before or after resource creation.",
        es: {
          topic: "Azure Resource Manager y plantillas",
          q: "Una plantilla necesita ejecutar un script de configuración después de crear un recurso. ¿Qué lo permite?",
          options: ["Scripts de implementación en PowerShell o Bash llamados desde la plantilla", "Un bloqueo de recursos en el grupo de recursos", "Una ubicación personalizada de Azure Arc", "Una alerta de presupuesto"],
          explain: "Las plantillas son extensibles: pueden llamar a scripts de implementación de PowerShell o Bash antes o después de crear los recursos."
        }
      }
    ]
  },
  units: [
    {
      id: "interacting-azure",
      name: "Describe tools for interacting with Azure",
      es: { name: "Descripción de las herramientas para interactuar con Azure" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-manage-deploy-azure-resources/2-describe-interacting-azure",
      quiz: {
        added: "2026-11-01",
        items: [
          {
            type: "single",
            q: "An administrator on a borrowed laptop needs to run Azure CLI commands right away without installing anything. What should they use?",
            options: ["Azure Cloud Shell", "A local Azure PowerShell installation", "An ARM template", "Azure Arc"],
            answer: 0,
            explain: "Cloud Shell runs in the browser, needs no installation and is already authenticated with your credentials.",
            es: {
              q: "Un administrador en una laptop prestada necesita ejecutar comandos de la CLI de Azure de inmediato sin instalar nada. ¿Qué debe usar?",
              options: ["Azure Cloud Shell", "Una instalación local de Azure PowerShell", "Una plantilla ARM", "Azure Arc"],
              explain: "Cloud Shell funciona en el explorador, no requiere instalación y ya está autenticado con sus credenciales."
            }
          },
          {
            type: "match",
            q: "Match each capability to the tool.",
            values: ["Azure portal", "Azure PowerShell", "Azure CLI", "Copilot in Azure"],
            targets: [
              { t: "Create custom dashboards for an organized view of resources", answer: 0 },
              { t: "Run cmdlets on Windows, Linux or macOS", answer: 1 },
              { t: "Run Bash commands to orchestrate complex operations", answer: 2 },
              { t: "Get natural-language guidance and draft commands", answer: 3 }
            ],
            explain: "The portal is graphical, PowerShell uses cmdlets, the CLI uses Bash and Copilot assists in natural language.",
            es: {
              q: "Relacione cada capacidad con la herramienta.",
              values: ["Azure Portal", "Azure PowerShell", "CLI de Azure", "Copilot en Azure"],
              targets: [
                { t: "Crear paneles personalizados para ver los recursos de forma ordenada" },
                { t: "Ejecutar cmdlets en Windows, Linux o macOS" },
                { t: "Ejecutar comandos de Bash para orquestar operaciones complejas" },
                { t: "Recibir orientación en lenguaje natural y borradores de comandos" }
              ],
              explain: "El portal es gráfico, PowerShell usa cmdlets, la CLI usa Bash y Copilot asiste en lenguaje natural."
            }
          },
          {
            type: "single",
            q: "What is the main difference between Azure PowerShell and the Azure CLI?",
            options: ["The syntax of the commands", "Which Azure services they can manage", "Whether they can be scripted", "Whether they work in Cloud Shell"],
            answer: 0,
            explain: "They're functionally equivalent; PowerShell uses PowerShell commands and the CLI uses Bash.",
            es: {
              q: "¿Cuál es la principal diferencia entre Azure PowerShell y la CLI de Azure?",
              options: ["La sintaxis de los comandos", "Qué servicios de Azure pueden administrar", "Si se pueden usar en scripts", "Si funcionan en Cloud Shell"],
              explain: "Son equivalentes en funciones; PowerShell usa comandos de PowerShell y la CLI usa Bash."
            }
          },
          {
            type: "multi",
            q: "Which two are features of Azure Cloud Shell?",
            options: [
              "It's authenticated with your Azure credentials",
              "It supports both Azure PowerShell and the Azure CLI",
              "It requires a local installation on Windows",
              "It only works with Microsoft 365 resources",
              "It replaces Azure Resource Manager"
            ],
            answers: [0, 1],
            explain: "Cloud Shell is browser-based, already knows who you are and lets you choose PowerShell or the CLI.",
            es: {
              q: "¿Cuáles son dos características de Azure Cloud Shell?",
              options: [
                "Está autenticado con sus credenciales de Azure",
                "Admite tanto Azure PowerShell como la CLI de Azure",
                "Requiere una instalación local en Windows",
                "Solo funciona con recursos de Microsoft 365",
                "Reemplaza a Azure Resource Manager"
              ],
              explain: "Cloud Shell funciona en el explorador, ya sabe quién es usted y permite elegir PowerShell o la CLI."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Capturing Azure PowerShell commands in a script makes a process repeatable and automatable.", answer: true, explain: "Cmdlets can be combined to orchestrate complex actions." },
              { s: "Copilot in Azure removes the need to confirm permissions before applying changes.", answer: false, explain: "You should still validate recommendations and confirm permissions." },
              { s: "The Azure portal provides a graphical alternative to command-line tools.", answer: true, explain: "It's a web-based unified console." }
            ],
            es: {
              statements: [
                { s: "Guardar los comandos de Azure PowerShell en un script hace que el proceso sea repetible y automatizable.", explain: "Los cmdlets se pueden combinar para orquestar acciones complejas." },
                { s: "Copilot en Azure elimina la necesidad de confirmar permisos antes de aplicar cambios.", explain: "Igual hay que validar las recomendaciones y confirmar los permisos." },
                { s: "Azure Portal ofrece una alternativa gráfica a las herramientas de línea de comandos.", explain: "Es una consola web unificada." }
              ]
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about Azure PowerShell.",
            parts: [
              "Azure PowerShell runs commands called ",
              { options: ["cmdlets", "templates", "initiatives"], answer: 0 },
              " that call the ",
              { options: ["Azure REST API", "Service Trust Portal", "pricing calculator"], answer: 0 },
              " to perform management tasks."
            ],
            explain: "Cmdlets call the Azure REST API and can be run individually or combined in scripts.",
            es: {
              q: "Complete la afirmación sobre Azure PowerShell.",
              parts: [
                "Azure PowerShell ejecuta comandos llamados ",
                { options: ["cmdlets", "plantillas", "iniciativas"] },
                " que llaman a la ",
                { options: ["API REST de Azure", "Portal de confianza de servicios", "calculadora de precios"] },
                " para realizar tareas de administración."
              ],
              explain: "Los cmdlets llaman a la API REST de Azure y se pueden ejecutar de a uno o combinados en scripts."
            }
          }
        ]
      }
    },
    {
      id: "azure-arc",
      name: "Describe the purpose of Azure Arc",
      es: { name: "Descripción del propósito de Azure Arc" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-manage-deploy-azure-resources/3-describe-purpose-of-azure-arc",
      quiz: {
        added: "2026-11-01",
        items: [
          {
            type: "single",
            q: "How does Azure Arc let you manage non-Azure resources with Azure tools?",
            options: [
              "By projecting them into Azure Resource Manager",
              "By migrating them into Azure automatically",
              "By copying their data into Microsoft Purview",
              "By converting them into ARM templates"
            ],
            answer: 0,
            explain: "Arc projects existing non-Azure resources into Resource Manager so they're managed as if they ran in Azure.",
            es: {
              q: "¿Cómo permite Azure Arc administrar recursos que no son de Azure con herramientas de Azure?",
              options: [
                "Proyectándolos en Azure Resource Manager",
                "Migrándolos automáticamente a Azure",
                "Copiando sus datos en Microsoft Purview",
                "Convirtiéndolos en plantillas ARM"
              ],
              explain: "Arc proyecta los recursos existentes que no son de Azure en Resource Manager para administrarlos como si estuvieran en Azure."
            }
          },
          {
            type: "multi",
            q: "Which two resource types can Azure Arc manage outside Azure?",
            options: ["Kubernetes clusters", "SQL Server", "Microsoft 365 mailboxes", "Billing zones", "Service Trust Portal documents"],
            answers: [0, 1],
            explain: "Arc manages servers, Kubernetes clusters, Azure data services, SQL Server and, in preview, VMs.",
            es: {
              q: "¿Cuáles son dos tipos de recursos que Azure Arc puede administrar fuera de Azure?",
              options: ["Clústeres de Kubernetes", "SQL Server", "Buzones de Microsoft 365", "Zonas de facturación", "Documentos del Portal de confianza de servicios"],
              explain: "Arc administra servidores, clústeres de Kubernetes, servicios de datos de Azure, SQL Server y, en versión preliminar, máquinas virtuales."
            }
          },
          {
            type: "single",
            q: "An organization runs workloads in Azure, its datacenter and another public cloud, each managed with separate tools. What problem does Azure Arc address?",
            options: [
              "Disconnected management, by enabling consistent governance and inventory from Azure",
              "High egress costs, by moving all the data from every environment into a single Azure region",
              "Licensing, by converting servers to Azure subscriptions",
              "Latency, by caching resources in Cloud Shell"
            ],
            answer: 0,
            explain: "Arc delivers a consistent multicloud and on-premises management platform instead of disconnected tools.",
            es: {
              q: "Una organización ejecuta cargas en Azure, en su centro de datos y en otra nube pública, cada una administrada con herramientas distintas. ¿Qué problema resuelve Azure Arc?",
              options: [
                "La administración desconectada, al permitir gobernanza e inventario coherentes desde Azure",
                "Los costos de salida altos, al mover todos los datos de cada entorno a una única región de Azure",
                "Las licencias, al convertir los servidores en suscripciones de Azure",
                "La latencia, al guardar los recursos en caché en Cloud Shell"
              ],
              explain: "Arc ofrece una plataforma coherente para multinube y entorno local en lugar de herramientas desconectadas."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "With Azure Arc, you can keep traditional ITOps while introducing DevOps practices.", answer: true, explain: "It supports both approaches." },
              { s: "Azure Arc can only manage resources hosted in Azure regions.", answer: false, explain: "Its purpose is managing hybrid and multicloud resources." },
              { s: "Custom locations are an abstraction layer on top of Azure Arc-enabled Kubernetes clusters.", answer: true, explain: "They sit on top of Arc-enabled clusters and cluster extensions." }
            ],
            es: {
              statements: [
                { s: "Con Azure Arc puede mantener las operaciones de TI tradicionales mientras incorpora prácticas de DevOps.", explain: "Admite ambos enfoques." },
                { s: "Azure Arc solo puede administrar recursos hospedados en regiones de Azure.", explain: "Su propósito es administrar recursos híbridos y multinube." },
                { s: "Las ubicaciones personalizadas son una capa de abstracción sobre clústeres de Kubernetes habilitados para Azure Arc.", explain: "Se ubican sobre los clústeres habilitados para Arc y sus extensiones." }
              ]
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about Azure Arc.",
            parts: [
              "Azure Arc works with ",
              { options: ["Azure Resource Manager", "Azure Cloud Shell", "the pricing calculator"], answer: 0 },
              " to extend Azure ",
              { options: ["compliance and monitoring", "billing zones", "Spot capacity"], answer: 0 },
              " to hybrid and multicloud configurations."
            ],
            explain: "Arc extends compliance and monitoring by working with Resource Manager.",
            es: {
              q: "Complete la afirmación sobre Azure Arc.",
              parts: [
                "Azure Arc trabaja con ",
                { options: ["Azure Resource Manager", "Azure Cloud Shell", "la calculadora de precios"] },
                " para extender ",
                { options: ["el cumplimiento y la supervisión", "las zonas de facturación", "la capacidad de Spot"] },
                " de Azure a configuraciones híbridas y multinube."
              ],
              explain: "Arc extiende el cumplimiento y la supervisión trabajando con Resource Manager."
            }
          }
        ]
      }
    },
    {
      id: "resource-manager",
      name: "Describe Azure Resource Manager and Azure ARM templates",
      es: { name: "Descripción de las plantillas de Azure Resource Manager y Azure ARM" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-manage-deploy-azure-resources/4-describe-azure-resource-manager-azure-arm-templates",
      quiz: {
        added: "2026-11-01",
        items: [
          {
            type: "single",
            q: "Why do the portal, PowerShell and the CLI give consistent results when managing resources?",
            options: [
              "All requests are handled through Azure Resource Manager's same API",
              "Each tool keeps its own copy of the resources",
              "They synchronize their own copies of the resources through Azure Arc every hour",
              "They all store state in Cloud Shell storage"
            ],
            answer: 0,
            explain: "Resource Manager receives, authenticates and authorizes every request, regardless of the tool.",
            es: {
              q: "¿Por qué el portal, PowerShell y la CLI dan resultados coherentes al administrar recursos?",
              options: [
                "Todas las solicitudes pasan por la misma API de Azure Resource Manager",
                "Cada herramienta guarda su propia copia de los recursos",
                "Sincronizan sus propias copias de los recursos mediante Azure Arc cada hora",
                "Todas guardan el estado en el almacenamiento de Cloud Shell"
              ],
              explain: "Resource Manager recibe, autentica y autoriza cada solicitud, sin importar la herramienta."
            }
          },
          {
            type: "match",
            q: "Match each ARM template benefit to its description.",
            values: ["Declarative syntax", "Orchestration", "Modularity", "Extensibility"],
            targets: [
              { t: "Define what to deploy instead of writing step-by-step commands", answer: 0 },
              { t: "Resource Manager handles dependency order and parallel deployment", answer: 1 },
              { t: "Split templates into reusable components and nested templates", answer: 2 },
              { t: "Add deployment scripts for extra setup actions", answer: 3 }
            ],
            explain: "These are among the key benefits of ARM templates, along with repeatable results.",
            es: {
              q: "Relacione cada ventaja de las plantillas ARM con su descripción.",
              values: ["Sintaxis declarativa", "Orquestación", "Modularidad", "Extensibilidad"],
              targets: [
                { t: "Definir qué implementar en lugar de escribir comandos paso a paso" },
                { t: "Resource Manager se ocupa del orden de dependencias y la implementación en paralelo" },
                { t: "Dividir las plantillas en componentes reutilizables y plantillas anidadas" },
                { t: "Agregar scripts de implementación para acciones de configuración adicionales" }
              ],
              explain: "Son algunas de las ventajas principales de las plantillas ARM, junto con los resultados repetibles."
            }
          },
          {
            type: "single",
            q: "A team finds JSON ARM templates hard to read and wants a simpler declarative language that still deploys through Resource Manager. What should it use?",
            options: ["Bicep", "Azure CLI scripts", "Azure Arc", "Azure Cloud Shell"],
            answer: 0,
            explain: "Bicep is simpler and more concise than JSON templates and deploys through ARM.",
            es: {
              q: "A un equipo le cuesta leer las plantillas ARM en JSON y quiere un lenguaje declarativo más simple que siga implementando con Resource Manager. ¿Qué debe usar?",
              options: ["Bicep", "Scripts de la CLI de Azure", "Azure Arc", "Azure Cloud Shell"],
              explain: "Bicep es más simple y conciso que las plantillas JSON e implementa mediante ARM."
            }
          },
          {
            type: "multi",
            q: "Which two statements about infrastructure as code are true?",
            options: [
              "It means managing infrastructure through code and templates instead of manual configuration",
              "It can start with Azure CLI or PowerShell and grow into ARM templates and Bicep",
              "It requires deploying resources one at a time by hand",
              "It can only be used in production environments",
              "It replaces the need for Azure Resource Manager"
            ],
            answers: [0, 1],
            explain: "IaC replaces manual configuration and can grow from scripts to declarative templates.",
            es: {
              q: "¿Cuáles son dos afirmaciones verdaderas sobre la infraestructura como código?",
              options: [
                "Significa administrar la infraestructura con código y plantillas en lugar de configurarla a mano",
                "Puede empezar con la CLI de Azure o PowerShell y crecer hacia plantillas ARM y Bicep",
                "Requiere implementar los recursos de a uno y a mano",
                "Solo se puede usar en entornos de producción",
                "Reemplaza la necesidad de Azure Resource Manager"
              ],
              explain: "La IaC reemplaza la configuración manual y puede crecer desde scripts hasta plantillas declarativas."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Azure validates an ARM template before deploying it.", answer: true, explain: "Then it orchestrates resource creation." },
              { s: "With ARM templates, you must specify the exact order of every deployment step.", answer: false, explain: "Templates are declarative; Resource Manager handles order and parallelism." },
              { s: "Resource Manager lets you deploy, manage and monitor a solution's resources as a group.", answer: true, explain: "Instead of handling them individually." }
            ],
            es: {
              statements: [
                { s: "Azure valida una plantilla ARM antes de implementarla.", explain: "Después orquesta la creación de los recursos." },
                { s: "Con las plantillas ARM debe especificar el orden exacto de cada paso de la implementación.", explain: "Las plantillas son declarativas; Resource Manager se ocupa del orden y el paralelismo." },
                { s: "Resource Manager permite implementar, administrar y supervisar los recursos de una solución como un grupo.", explain: "En lugar de manejarlos de forma individual." }
              ]
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about Azure Resource Manager.",
            parts: [
              "Azure Resource Manager is the ",
              { options: ["deployment and management service", "monitoring service", "cost estimation service"], answer: 0 },
              " for Azure, and it applies access control natively through ",
              { options: ["RBAC", "resource tags", "Azure Arc"], answer: 0 },
              "."
            ],
            explain: "Resource Manager is the management layer for create, update and delete, with RBAC built in.",
            es: {
              q: "Complete la afirmación sobre Azure Resource Manager.",
              parts: [
                "Azure Resource Manager es el ",
                { options: ["servicio de implementación y administración", "servicio de supervisión", "servicio de estimación de costos"] },
                " de Azure, y aplica el control de acceso de forma nativa con ",
                { options: ["RBAC", "etiquetas de recursos", "Azure Arc"] },
                "."
              ],
              explain: "Resource Manager es la capa de administración para crear, actualizar y eliminar, con RBAC integrado."
            }
          }
        ]
      }
    }
  ]
});
