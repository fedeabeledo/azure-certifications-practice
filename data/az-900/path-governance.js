// AZ-900 > Describe Azure management and governance: learning path review (all four modules)
Catalog.pathQuiz("az-900", "governance", {
  added: "2026-11-01",
  items: [
    {
      type: "single",
      topic: "Governance and compliance",
      q: "A company wants every new resource to carry a CostCenter tag so finance can report spend per cost center. Which combination delivers this?",
      options: ["Azure Policy to require the tag, then Cost Management to analyze costs by tag", "A Delete lock on each subscription and the pricing calculator", "Azure Advisor recommendations and Resource Health", "Azure Arc and Application Insights"],
      answer: 0,
      explain: "Azure Policy enforces tagging rules, and tags let Cost Management group and report costs.",
      es: {
        topic: "Gobernanza y cumplimiento",
        q: "Una empresa quiere que todo recurso nuevo tenga una etiqueta CostCenter para que finanzas informe el gasto por centro de costos. ¿Qué combinación lo logra?",
        options: ["Azure Policy para exigir la etiqueta y Cost Management para analizar costos por etiqueta", "Un bloqueo Delete en cada suscripción y la calculadora de precios", "Las recomendaciones de Azure Advisor y Resource Health", "Azure Arc y Application Insights"],
        explain: "Azure Policy aplica reglas de etiquetado, y las etiquetas permiten que Cost Management agrupe e informe los costos."
      }
    },
    {
      type: "match",
      topic: "Monitoring",
      q: "Match each scenario to the tool you should use.",
      values: ["Azure Advisor", "Resource Health", "Application Insights", "Cost analysis"],
      targets: [
        { t: "Find underused VMs you could resize to save money", answer: 0 },
        { t: "Check whether one VM's outage comes from Azure", answer: 1 },
        { t: "Measure a web app's failure rate and response time", answer: 2 },
        { t: "See which resource group drove last month's spend", answer: 3 }
      ],
      explain: "Advisor recommends optimizations, Resource Health diagnoses a single resource, Application Insights monitors apps and cost analysis breaks down actual spend.",
      es: {
        topic: "Supervisión",
        q: "Relacione cada escenario con la herramienta que debe usar.",
        values: ["Azure Advisor", "Resource Health", "Application Insights", "Análisis de costos"],
        targets: [
          { t: "Encontrar máquinas virtuales poco usadas a las que podría bajar el tamaño para ahorrar" },
          { t: "Comprobar si la caída de una máquina virtual viene de Azure" },
          { t: "Medir la tasa de errores y el tiempo de respuesta de una aplicación web" },
          { t: "Ver qué grupo de recursos generó el gasto del mes pasado" }
        ],
        explain: "Advisor recomienda optimizaciones, Resource Health diagnostica un recurso, Application Insights supervisa aplicaciones y el análisis de costos desglosa el gasto real."
      }
    },
    {
      type: "single",
      topic: "Managing and deploying resources",
      q: "A company manages servers in its datacenter and in another public cloud. It wants Azure Policy and inventory tracking to apply to them from Azure. What should it use?",
      options: ["Azure Arc", "Azure Cloud Shell", "The pricing calculator", "Microsoft Purview"],
      answer: 0,
      explain: "Arc projects non-Azure resources into Resource Manager so Azure governance applies to them.",
      es: {
        topic: "Administración e implementación de recursos",
        q: "Una empresa administra servidores en su centro de datos y en otra nube pública. Quiere que Azure Policy y el seguimiento de inventario se apliquen a ellos desde Azure. ¿Qué debe usar?",
        options: ["Azure Arc", "Azure Cloud Shell", "La calculadora de precios", "Microsoft Purview"],
        explain: "Arc proyecta recursos que no son de Azure en Resource Manager para que se les aplique la gobernanza de Azure."
      }
    },
    {
      type: "single",
      topic: "Cost management",
      q: "Before approving a new project, finance wants an estimated monthly cost for an App Service plan, a database and storage in two candidate regions. What should the team use?",
      options: ["The pricing calculator", "Cost analysis", "Budget alerts", "Azure Service Health"],
      answer: 0,
      explain: "The pricing calculator estimates costs before deployment; cost analysis reviews actual spend afterward.",
      es: {
        topic: "Administración de costos",
        q: "Antes de aprobar un proyecto, finanzas quiere un costo mensual estimado para un plan de App Service, una base de datos y almacenamiento en dos regiones candidatas. ¿Qué debe usar el equipo?",
        options: ["La calculadora de precios", "El análisis de costos", "Las alertas de presupuesto", "Azure Service Health"],
        explain: "La calculadora de precios estima costos antes de implementar; el análisis de costos revisa el gasto real después."
      }
    },
    {
      type: "yesno",
      statements: [
        { topic: "Governance and compliance", s: "Resource locks apply even to users with the Owner role.", answer: true, explain: "Locks apply regardless of RBAC permissions." },
        { topic: "Cost management", s: "Resources inherit tags from their subscription automatically.", answer: false, explain: "Tags aren't inherited; Azure Policy can apply them." },
        { topic: "Managing and deploying resources", s: "Azure PowerShell and the Azure CLI are both available in Azure Cloud Shell.", answer: true, explain: "Cloud Shell supports both." }
      ],
      es: {
        statements: [
          { topic: "Gobernanza y cumplimiento", s: "Los bloqueos de recursos se aplican incluso a usuarios con el rol Propietario.", explain: "Los bloqueos se aplican sin importar los permisos de RBAC." },
          { topic: "Administración de costos", s: "Los recursos heredan automáticamente las etiquetas de su suscripción.", explain: "Las etiquetas no se heredan; Azure Policy puede aplicarlas." },
          { topic: "Administración e implementación de recursos", s: "Azure PowerShell y la CLI de Azure están disponibles en Azure Cloud Shell.", explain: "Cloud Shell admite ambos." }
        ]
      }
    },
    {
      type: "dropdown",
      topic: "Cost management",
      q: "Complete the statement about pricing options.",
      parts: [
        "A database that runs 24/7 with stable needs fits ",
        { options: ["Reservations", "Spot pricing", "an Advisor recommendation"], answer: 0 },
        ", while batch jobs that can restart after interruption fit ",
        { options: ["Spot pricing", "a savings plan only", "a ReadOnly lock"], answer: 0 },
        "."
      ],
      explain: "Reservations reward predictable usage; Spot offers cheap, evictable capacity for interruptible work.",
      es: {
        topic: "Administración de costos",
        q: "Complete la afirmación sobre las opciones de precios.",
        parts: [
          "Una base de datos que funciona 24/7 con necesidades estables encaja con ",
          { options: ["las reservas", "los precios de Spot", "una recomendación de Advisor"] },
          ", mientras que los trabajos por lotes que pueden reiniciarse tras una interrupción encajan con ",
          { options: ["los precios de Spot", "solo un plan de ahorro", "un bloqueo ReadOnly"] },
          "."
        ],
        explain: "Las reservas premian el uso predecible; Spot ofrece capacidad barata y desalojable para trabajo interrumpible."
      }
    },
    {
      type: "single",
      topic: "Governance and compliance",
      q: "A critical resource group must not be deleted, but administrators still need to change its resources' settings. What should you apply?",
      options: ["A Delete lock on the resource group", "A ReadOnly lock on the resource group", "An Azure Policy that denies all changes", "A budget with automation"],
      answer: 0,
      explain: "A Delete lock blocks deletion but allows updates; it's inherited by the resources in the group.",
      es: {
        topic: "Gobernanza y cumplimiento",
        q: "Un grupo de recursos crítico no se debe eliminar, pero los administradores todavía necesitan cambiar la configuración de sus recursos. ¿Qué debe aplicar?",
        options: ["Un bloqueo Delete en el grupo de recursos", "Un bloqueo ReadOnly en el grupo de recursos", "Una directiva de Azure Policy que niegue todo cambio", "Un presupuesto con automatización"],
        explain: "Un bloqueo Delete impide eliminar pero permite actualizar; lo heredan los recursos del grupo."
      }
    },
    {
      type: "multi",
      topic: "Managing and deploying resources",
      q: "Which two are benefits of using ARM templates or Bicep?",
      options: [
        "Repeatable, consistent deployments across environments",
        "Resource Manager handles dependency order and parallel deployment",
        "Resources deployed with templates cost less",
        "Templates bypass Azure Policy checks",
        "Templates remove the need for RBAC"
      ],
      answers: [0, 1],
      explain: "Declarative templates give repeatable results and built-in orchestration; policies and RBAC still apply.",
      es: {
        topic: "Administración e implementación de recursos",
        q: "¿Cuáles son dos ventajas de usar plantillas ARM o Bicep?",
        options: [
          "Implementaciones repetibles y coherentes entre entornos",
          "Resource Manager se ocupa del orden de dependencias y la implementación en paralelo",
          "Los recursos implementados con plantillas cuestan menos",
          "Las plantillas evitan los controles de Azure Policy",
          "Las plantillas eliminan la necesidad de RBAC"
        ],
        explain: "Las plantillas declarativas dan resultados repetibles y orquestación integrada; las directivas y RBAC se siguen aplicando."
      }
    },
    {
      type: "single",
      topic: "Monitoring",
      q: "A company wants the operations team emailed when a VM's CPU stays high, and the same contacts notified about Azure outages in its regions. What should it reuse?",
      options: ["An action group", "A resource lock", "A policy initiative", "A pricing estimate"],
      answer: 0,
      explain: "Action groups are reusable across Azure Monitor alerts, Service Health and Advisor.",
      es: {
        topic: "Supervisión",
        q: "Una empresa quiere que se avise por correo al equipo de operaciones cuando la CPU de una máquina virtual se mantiene alta, y que los mismos contactos reciban avisos de caídas de Azure en sus regiones. ¿Qué debe reutilizar?",
        options: ["Un grupo de acciones", "Un bloqueo de recursos", "Una iniciativa de directivas", "Una estimación de precios"],
        explain: "Los grupos de acciones se reutilizan en las alertas de Azure Monitor, Service Health y Advisor."
      }
    },
    {
      type: "single",
      topic: "Governance and compliance",
      q: "An auditor needs Microsoft's own audit reports about its cloud controls, not your configuration. Where are they?",
      options: ["The Service Trust Portal", "Azure Policy compliance", "Azure Advisor", "Microsoft Cost Management"],
      answer: 0,
      explain: "The Service Trust Portal provides content about Microsoft's security, privacy and compliance practices.",
      es: {
        topic: "Gobernanza y cumplimiento",
        q: "Un auditor necesita los informes de auditoría propios de Microsoft sobre sus controles en la nube, no sobre su configuración. ¿Dónde están?",
        options: ["En el Portal de confianza de servicios", "En el cumplimiento de Azure Policy", "En Azure Advisor", "En Microsoft Cost Management"],
        explain: "El Portal de confianza de servicios ofrece contenido sobre las prácticas de seguridad, privacidad y cumplimiento de Microsoft."
      }
    },
    {
      type: "yesno",
      statements: [
        { topic: "Monitoring", s: "Azure Status shows the health of all Azure services and regions, not only yours.", answer: true, explain: "It's the global view." },
        { topic: "Cost management", s: "Budget alerts can trigger automation that shuts down nonproduction resources.", answer: true, explain: "Budgets can trigger automation at a threshold." },
        { topic: "Managing and deploying resources", s: "Requests made from the Azure portal skip Azure Resource Manager.", answer: false, explain: "All tools go through Resource Manager." }
      ],
      es: {
        statements: [
          { topic: "Supervisión", s: "Azure Status muestra el estado de todos los servicios y regiones de Azure, no solo los suyos.", explain: "Es la vista global." },
          { topic: "Administración de costos", s: "Las alertas de presupuesto pueden disparar automatizaciones que apaguen recursos que no son de producción.", explain: "Los presupuestos pueden disparar automatizaciones en un umbral." },
          { topic: "Administración e implementación de recursos", s: "Las solicitudes hechas desde Azure Portal no pasan por Azure Resource Manager.", explain: "Todas las herramientas pasan por Resource Manager." }
        ]
      }
    },
    {
      type: "single",
      topic: "Governance and compliance",
      q: "A company needs to discover and classify sensitive data across Azure, on-premises SQL and Amazon S3, with end-to-end lineage. Which service fits?",
      options: ["Microsoft Purview", "Azure Policy", "Azure Monitor", "Azure Arc"],
      answer: 0,
      explain: "Purview offers automated discovery, classification and lineage across on-premises, multicloud and SaaS data.",
      es: {
        topic: "Gobernanza y cumplimiento",
        q: "Una empresa necesita descubrir y clasificar datos confidenciales en Azure, SQL local y Amazon S3, con linaje de extremo a extremo. ¿Qué servicio corresponde?",
        options: ["Microsoft Purview", "Azure Policy", "Azure Monitor", "Azure Arc"],
        explain: "Purview ofrece detección, clasificación y linaje automatizados en datos locales, multinube y SaaS."
      }
    },
    {
      type: "match",
      topic: "Cost management",
      q: "Match each example to the factor that affects its cost.",
      values: ["Geography", "Consumption", "Azure Marketplace", "Maintenance"],
      targets: [
        { t: "Moving data from Europe to Asia costs more than within Europe", answer: 0 },
        { t: "Using more compute this billing cycle means a higher bill", answer: 1 },
        { t: "A vendor adds its own charges to a preconfigured solution", answer: 2 },
        { t: "Disks left behind after deleting a VM keep billing", answer: 3 }
      ],
      explain: "Each example illustrates one of the cost factors described in the module.",
      es: {
        topic: "Administración de costos",
        q: "Relacione cada ejemplo con el factor que afecta su costo.",
        values: ["Geografía", "Consumo", "Azure Marketplace", "Mantenimiento"],
        targets: [
          { t: "Mover datos de Europa a Asia cuesta más que dentro de Europa" },
          { t: "Usar más proceso en este ciclo de facturación implica una factura mayor" },
          { t: "Un proveedor agrega sus propios cargos a una solución preconfigurada" },
          { t: "Los discos que quedan tras eliminar una máquina virtual se siguen cobrando" }
        ],
        explain: "Cada ejemplo ilustra uno de los factores de costo descritos en el módulo."
      }
    },
    {
      type: "single",
      topic: "Managing and deploying resources",
      q: "An administrator wants a natural-language assistant to help explore services and draft commands, while still reviewing changes before applying them. What fits?",
      options: ["Copilot in Azure", "Azure Status", "Azure Arc", "A ReadOnly lock"],
      answer: 0,
      explain: "Copilot in Azure provides contextual guidance; recommendations should still be validated.",
      es: {
        topic: "Administración e implementación de recursos",
        q: "Un administrador quiere un asistente en lenguaje natural que lo ayude a explorar servicios y redactar comandos, revisando igual los cambios antes de aplicarlos. ¿Qué corresponde?",
        options: ["Copilot en Azure", "Azure Status", "Azure Arc", "Un bloqueo ReadOnly"],
        explain: "Copilot en Azure ofrece orientación contextual; las recomendaciones se deben validar igual."
      }
    },
    {
      type: "multi",
      topic: "Monitoring",
      q: "Which two statements about Azure Advisor are true?",
      options: [
        "It covers reliability, security, performance, operational excellence and cost",
        "Its recommendations can be postponed or dismissed",
        "It applies all recommendations automatically",
        "It replaces Azure Monitor alerts",
        "It only works for resources managed by Azure Arc"
      ],
      answers: [0, 1],
      explain: "Advisor gives recommendations in five categories that you can act on, postpone or dismiss.",
      es: {
        topic: "Supervisión",
        q: "¿Cuáles son dos afirmaciones verdaderas sobre Azure Advisor?",
        options: [
          "Cubre confiabilidad, seguridad, rendimiento, excelencia operativa y costo",
          "Sus recomendaciones se pueden posponer o descartar",
          "Aplica todas las recomendaciones automáticamente",
          "Reemplaza las alertas de Azure Monitor",
          "Solo funciona con recursos administrados por Azure Arc"
        ],
        explain: "Advisor da recomendaciones en cinco categorías que se pueden aplicar, posponer o descartar."
      }
    },
    {
      type: "single",
      topic: "Governance and compliance",
      q: "An Azure Policy initiative is assigned at a management group. What happens?",
      options: [
        "All its policy definitions apply to every subscription and resource beneath it",
        "Only the first policy in the initiative is applied",
        "It applies only to resources created in the next 30 days",
        "It locks every resource as ReadOnly"
      ],
      answer: 0,
      explain: "Initiatives group policies, and assignments are inherited by everything beneath the scope.",
      es: {
        topic: "Gobernanza y cumplimiento",
        q: "Se asigna una iniciativa de Azure Policy en un grupo de administración. ¿Qué pasa?",
        options: [
          "Todas sus definiciones se aplican a cada suscripción y recurso que está debajo",
          "Solo se aplica la primera directiva de la iniciativa",
          "Se aplica solo a los recursos creados en los próximos 30 días",
          "Bloquea todos los recursos como ReadOnly"
        ],
        explain: "Las iniciativas agrupan directivas, y las asignaciones las hereda todo lo que está debajo del ámbito."
      }
    },
    {
      type: "dropdown",
      topic: "Monitoring",
      q: "Complete the statement about Azure monitoring tools.",
      parts: [
        "To query the logs that Azure Monitor collects, use ",
        { options: ["Log Analytics", "Azure Advisor", "the Service Trust Portal"], answer: 0 },
        ", and to be told about planned maintenance in the regions you use, check ",
        { options: ["Service Health", "Application Insights", "the pricing calculator"], answer: 0 },
        "."
      ],
      explain: "Log Analytics runs queries on Azure Monitor data; Service Health shows events relevant to your services.",
      es: {
        topic: "Supervisión",
        q: "Complete la afirmación sobre las herramientas de supervisión de Azure.",
        parts: [
          "Para consultar los registros que recopila Azure Monitor, use ",
          { options: ["Log Analytics", "Azure Advisor", "el Portal de confianza de servicios"] },
          ", y para enterarse del mantenimiento planificado en sus regiones, revise ",
          { options: ["Service Health", "Application Insights", "la calculadora de precios"] },
          "."
        ],
        explain: "Log Analytics ejecuta consultas sobre los datos de Azure Monitor; Service Health muestra los eventos relevantes para sus servicios."
      }
    },
    {
      type: "single",
      topic: "Cost management",
      q: "An Enterprise Agreement customer gets an automatic alert when 90% of its Azure Prepayment is used. Which alert type is this?",
      options: ["Credit alert", "Budget alert", "Department spending quota alert", "Advisor cost alert"],
      answer: 0,
      explain: "Credit alerts fire automatically at 90% and 100% of the Azure Prepayment balance.",
      es: {
        topic: "Administración de costos",
        q: "Un cliente con Contrato Enterprise recibe una alerta automática al usar el 90 % de su Prepago de Azure. ¿Qué tipo de alerta es?",
        options: ["Alerta de crédito", "Alerta de presupuesto", "Alerta de cuota de gasto del departamento", "Alerta de costos de Advisor"],
        explain: "Las alertas de crédito se disparan automáticamente al 90 % y al 100 % del saldo del Prepago de Azure."
      }
    },
    {
      type: "yesno",
      statements: [
        { topic: "Governance and compliance", s: "Azure Policy evaluates resources that existed before the policy was assigned.", answer: true, explain: "It monitors existing resources too." },
        { topic: "Managing and deploying resources", s: "Azure Arc can manage SQL Server instances running outside Azure.", answer: true, explain: "SQL Server is one of the supported resource types." },
        { topic: "Monitoring", s: "Application Insights can only be enabled by changing application code.", answer: false, explain: "An agent can enable it without code changes." }
      ],
      es: {
        statements: [
          { topic: "Gobernanza y cumplimiento", s: "Azure Policy evalúa recursos que ya existían antes de asignar la directiva.", explain: "También supervisa los recursos existentes." },
          { topic: "Administración e implementación de recursos", s: "Azure Arc puede administrar instancias de SQL Server que se ejecutan fuera de Azure.", explain: "SQL Server es uno de los tipos de recursos admitidos." },
          { topic: "Supervisión", s: "Application Insights solo se puede habilitar cambiando el código de la aplicación.", explain: "Un agente puede habilitarlo sin cambiar el código." }
        ]
      }
    },
    {
      type: "single",
      topic: "Cost management",
      q: "A workload uses a steady amount of compute but moves between VM sizes and other compute services. Which option gives a commitment discount with that flexibility?",
      options: ["Azure savings plan for compute", "Reservations for a single VM size", "Spot Virtual Machines", "A department quota"],
      answer: 0,
      explain: "Savings plans commit to an hourly spend across eligible compute rather than a specific instance.",
      es: {
        topic: "Administración de costos",
        q: "Una carga usa una cantidad estable de proceso pero cambia entre tamaños de máquina virtual y otros servicios de proceso. ¿Qué opción da un descuento por compromiso con esa flexibilidad?",
        options: ["El plan de ahorro de Azure para proceso", "Reservas para un único tamaño de máquina virtual", "Las máquinas virtuales de Spot", "Una cuota por departamento"],
        explain: "Los planes de ahorro comprometen un gasto por hora en proceso elegible en lugar de una instancia específica."
      }
    },
    {
      type: "single",
      topic: "Managing and deploying resources",
      q: "Which file format do ARM templates use to declare the resources to deploy?",
      options: ["JSON", "PowerShell scripts", "Bash scripts", "CSV"],
      answer: 0,
      explain: "ARM templates are declarative JSON; Bicep is a simpler alternative language.",
      es: {
        topic: "Administración e implementación de recursos",
        q: "¿Qué formato usan las plantillas ARM para declarar los recursos que se implementan?",
        options: ["JSON", "Scripts de PowerShell", "Scripts de Bash", "CSV"],
        explain: "Las plantillas ARM son JSON declarativo; Bicep es un lenguaje alternativo más simple."
      }
    },
    {
      type: "single",
      topic: "Governance and compliance",
      q: "Copilot suggests deploying a VM in a region the company doesn't allow. How does Azure Policy treat that change?",
      options: [
        "It enforces the allowed-locations rule just like any other change",
        "It skips the rule because the change came from Copilot",
        "It applies the rule only after the VM is running",
        "It converts the VM to Spot pricing"
      ],
      answer: 0,
      explain: "Azure Policy enforces standards regardless of how a change was proposed.",
      es: {
        topic: "Gobernanza y cumplimiento",
        q: "Copilot sugiere implementar una máquina virtual en una región que la empresa no permite. ¿Cómo trata Azure Policy ese cambio?",
        options: [
          "Aplica la regla de ubicaciones permitidas como con cualquier otro cambio",
          "Omite la regla porque el cambio vino de Copilot",
          "Aplica la regla solo después de que la máquina esté en ejecución",
          "Pasa la máquina virtual a precios de Spot"
        ],
        explain: "Azure Policy aplica los estándares sin importar cómo se propuso el cambio."
      }
    }
  ]
});
