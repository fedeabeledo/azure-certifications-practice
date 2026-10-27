// AZ-900 > Describe cloud concepts: learning path review (all three modules)
Catalog.pathQuiz("az-900", "cloud-concepts", {
  added: "2026-10-26",
  items: [
    {
      type: "single",
      topic: "Cloud computing",
      q: "A company runs workloads on Azure, in a private cloud in its own datacenter, and on a second public cloud provider. It wants to manage all of these environments from one place. What should it use?",
      options: ["Azure VMware Solution", "Azure Arc", "A service-level agreement", "The Azure Pricing Calculator"],
      answer: 1,
      explain: "Azure Arc manages public, private, hybrid and multicloud environments. Azure VMware Solution is for running VMware workloads in Azure.",
      es: {
        topic: "Informática en la nube",
        q: "Una empresa ejecuta cargas de trabajo en Azure, en una nube privada en su propio centro de datos y en un segundo proveedor de nube pública. Quiere administrar todos estos entornos desde un solo lugar. ¿Qué debe usar?",
        options: ["Azure VMware Solution", "Azure Arc", "Un acuerdo de nivel de servicio", "La Calculadora de precios de Azure"],
        explain: "Azure Arc administra entornos públicos, privados, híbridos y multinube. Azure VMware Solution sirve para ejecutar cargas de trabajo de VMware en Azure."
      }
    },
    {
      type: "dropdown",
      topic: "Cloud computing",
      q: "Complete the statement about the shared responsibility model.",
      parts: [
        "Regardless of the service type, ",
        { options: ["the data stored in the cloud", "the physical datacenter", "the operating system"], answer: 1 },
        " is always the cloud provider's responsibility, and ",
        { options: ["network controls", "the physical hosts", "the data stored in the cloud"], answer: 2 },
        " is always the customer's responsibility."
      ],
      explain: "The physical datacenter, network and hosts always belong to the provider. Data, devices and identities always belong to the customer. The OS and network controls depend on the service type.",
      es: {
        topic: "Informática en la nube",
        q: "Complete la afirmación sobre el modelo de responsabilidad compartida.",
        parts: [
          "Sin importar el tipo de servicio, ",
          { options: ["los datos almacenados en la nube", "el centro de datos físico", "el sistema operativo"] },
          " siempre es responsabilidad del proveedor de nube, y ",
          { options: ["los controles de red", "los hosts físicos", "los datos almacenados en la nube"] },
          " siempre son responsabilidad del cliente."
        ],
        explain: "El centro de datos, la red y los hosts físicos siempre son del proveedor. Los datos, los dispositivos y las identidades siempre son del cliente. El sistema operativo y los controles de red dependen del tipo de servicio."
      }
    },
    {
      type: "single",
      topic: "Cloud computing",
      q: "A company wants to stop buying servers up front and instead pay monthly according to what it uses. Which change in spending does this describe?",
      options: ["From OpEx to CapEx", "From CapEx to OpEx", "From fixed cost to capital investment", "From pay-as-you-go to reserved hardware"],
      answer: 1,
      explain: "Up-front purchases of physical infrastructure are CapEx. Paying for cloud services as you consume them is OpEx.",
      es: {
        topic: "Informática en la nube",
        q: "Una empresa quiere dejar de comprar servidores por adelantado y pasar a pagar mensualmente según lo que usa. ¿Qué cambio en el gasto describe esto?",
        options: ["De OpEx a CapEx", "De CapEx a OpEx", "De costo fijo a inversión de capital", "De pago por uso a hardware reservado"],
        explain: "Las compras iniciales de infraestructura física son CapEx. Pagar los servicios en la nube a medida que se consumen es OpEx."
      }
    },
    {
      type: "yesno",
      statements: [
        { topic: "Cloud computing", s: "A private cloud can be hosted by a third party in a dedicated offsite datacenter.", answer: true, explain: "A private cloud can be on-site or in a dedicated offsite datacenter, even one run by a third party." },
        { topic: "Cloud computing", s: "In SaaS, the cloud provider becomes responsible for the accounts and identities of your users.", answer: false, explain: "Accounts and identities always remain the customer's responsibility." },
        { topic: "Cloud computing", s: "Cloud computing is classified as an operational expense.", answer: true, explain: "You pay for cloud services as you consume them, which is OpEx." }
      ],
      es: {
        statements: [
          { topic: "Informática en la nube", s: "Una nube privada puede estar hospedada por un tercero en un centro de datos externo dedicado.", explain: "Una nube privada puede estar en el sitio o en un centro de datos externo dedicado, incluso operado por un tercero." },
          { topic: "Informática en la nube", s: "En SaaS, el proveedor de nube pasa a ser responsable de las cuentas e identidades de sus usuarios.", explain: "Las cuentas y las identidades siempre siguen siendo responsabilidad del cliente." },
          { topic: "Informática en la nube", s: "La informática en la nube se clasifica como gasto operativo.", explain: "Los servicios en la nube se pagan a medida que se consumen, lo que es OpEx." }
        ]
      }
    },
    {
      type: "match",
      topic: "Cloud benefits",
      q: "Match each example to the cloud benefit it represents.",
      values: ["Reliability", "Predictability", "Manageability", "Security and governance"],
      targets: [
        { t: "Cloud-based auditing flags resources that are out of compliance", answer: 3 },
        { t: "The Azure Pricing Calculator estimates potential spend", answer: 1 },
        { t: "Resources keep running in another region after a regional failure", answer: 0 },
        { t: "Resources are managed through APIs or PowerShell", answer: 2 }
      ],
      explain: "Auditing supports governance. Cost estimates support predictability. Surviving a regional failure is reliability. Managing through APIs or PowerShell is manageability.",
      es: {
        topic: "Ventajas de la nube",
        q: "Relacione cada ejemplo con la ventaja de la nube que representa.",
        values: ["Confiabilidad", "Previsibilidad", "Capacidad de administración", "Seguridad y gobernanza"],
        targets: [
          { t: "La auditoría basada en la nube marca los recursos que no cumplen" },
          { t: "La Calculadora de precios de Azure estima el gasto posible" },
          { t: "Los recursos siguen funcionando en otra región después de una falla regional" },
          { t: "Los recursos se administran mediante API o PowerShell" }
        ],
        explain: "La auditoría contribuye a la gobernanza. Las estimaciones de costos, a la previsibilidad. Sobrevivir a una falla regional es confiabilidad. Administrar mediante API o PowerShell es capacidad de administración."
      }
    },
    {
      type: "single",
      topic: "Cloud benefits",
      q: "An online store's traffic triples during a sale. The team wants additional containers to be added automatically and removed when the sale ends. Which capability does this describe?",
      options: ["Vertical scaling", "Horizontal scaling", "High availability through SLAs", "Cost predictability"],
      answer: 1,
      explain: "Adding and removing instances such as containers or VMs, automatically or manually, is horizontal scaling (out and in).",
      es: {
        topic: "Ventajas de la nube",
        q: "El tráfico de una tienda en línea se triplica durante una oferta. El equipo quiere que se agreguen contenedores automáticamente y que se quiten cuando termine la oferta. ¿Qué capacidad describe esto?",
        options: ["Escalado vertical", "Escalado horizontal", "Alta disponibilidad mediante SLA", "Previsibilidad de costos"],
        explain: "Agregar y quitar instancias, como contenedores o máquinas virtuales, de forma automática o manual, es escalado horizontal."
      }
    },
    {
      type: "multi",
      topic: "Cloud benefits",
      q: "Which two are examples of management of the cloud?",
      options: [
        "Automatically scaling resources based on need",
        "Receiving automatic alerts based on configured metrics",
        "Using a command line interface",
        "Calling management APIs",
        "Using a web portal"
      ],
      answers: [0, 1],
      explain: "Management of the cloud covers autoscaling, templates, health monitoring and alerts. The CLI, APIs and portal are management in the cloud.",
      es: {
        topic: "Ventajas de la nube",
        q: "¿Cuáles son dos ejemplos de administración de la nube?",
        options: [
          "Escalar recursos automáticamente según la necesidad",
          "Recibir alertas automáticas basadas en métricas configuradas",
          "Usar una interfaz de línea de comandos",
          "Llamar a API de administración",
          "Usar un portal web"
        ],
        explain: "La administración de la nube abarca el escalado automático, las plantillas, la supervisión del estado y las alertas. La CLI, las API y el portal son administración en la nube."
      }
    },
    {
      type: "single",
      topic: "Cloud benefits",
      q: "Which concept is defined as the ability of a system to recover from failures and continue to function?",
      options: ["High availability", "Scalability", "Reliability", "Predictability"],
      answer: 2,
      explain: "That's the definition of reliability. High availability focuses on maximum uptime; scalability on adjusting resources to demand.",
      es: {
        topic: "Ventajas de la nube",
        q: "¿Qué concepto se define como la capacidad de un sistema de recuperarse de fallas y seguir funcionando?",
        options: ["Alta disponibilidad", "Escalabilidad", "Confiabilidad", "Previsibilidad"],
        explain: "Es la definición de confiabilidad. La alta disponibilidad se centra en el máximo tiempo de actividad; la escalabilidad, en ajustar los recursos a la demanda."
      }
    },
    {
      type: "dropdown",
      topic: "Cloud benefits",
      q: "Complete the statement about scalability and cost.",
      parts: [
        "When demand drops, you can ",
        { options: ["scale out", "scale in", "scale up"], answer: 1 },
        " to reduce your costs, because the cloud uses a ",
        { options: ["capital-expense", "consumption-based", "fixed-price"], answer: 1 },
        " model."
      ],
      explain: "Scaling in removes resources when demand falls. Since the cloud is consumption-based, fewer resources means a lower bill.",
      es: {
        topic: "Ventajas de la nube",
        q: "Complete la afirmación sobre la escalabilidad y el costo.",
        parts: [
          "Cuando baja la demanda, se puede ",
          { options: ["escalar horizontalmente", "reducir horizontalmente", "escalar verticalmente"] },
          " para reducir costos, porque la nube usa un modelo ",
          { options: ["de gasto de capital", "basado en el consumo", "de precio fijo"] },
          "."
        ],
        explain: "Reducir horizontalmente quita recursos cuando baja la demanda. Como la nube se basa en el consumo, menos recursos significa una factura menor."
      }
    },
    {
      type: "yesno",
      statements: [
        { topic: "Cloud benefits", s: "Performance predictability is supported by autoscaling and load balancing.", answer: true, explain: "Autoscaling, load balancing and high availability support performance predictability." },
        { topic: "Cloud benefits", s: "Governance in the cloud requires every software patch to be applied manually.", answer: false, explain: "Depending on your operating model, patches and updates may be applied automatically." },
        { topic: "Cloud benefits", s: "Shutting down a development environment overnight can reduce unnecessary consumption.", answer: true, explain: "It's the sustainability unit's example of reducing waste while meeting team needs." }
      ],
      es: {
        statements: [
          { topic: "Ventajas de la nube", s: "La previsibilidad del rendimiento se apoya en el escalado automático y el equilibrio de carga.", explain: "El escalado automático, el equilibrio de carga y la alta disponibilidad contribuyen a la previsibilidad del rendimiento." },
          { topic: "Ventajas de la nube", s: "La gobernanza en la nube exige aplicar manualmente cada parche de software.", explain: "Según el modelo operativo, los parches y las actualizaciones pueden aplicarse automáticamente." },
          { topic: "Ventajas de la nube", s: "Apagar un entorno de desarrollo por la noche puede reducir el consumo innecesario.", explain: "Es el ejemplo de la unidad de sostenibilidad para reducir el desperdicio sin afectar al equipo." }
        ]
      }
    },
    {
      type: "single",
      topic: "Cloud service types",
      q: "A company wants a fully developed messaging application and expects patches and maintenance to be handled for it automatically. Which service type fits?",
      options: ["IaaS", "PaaS", "SaaS", "A private cloud"],
      answer: 2,
      explain: "SaaS is a fully developed application, and its patches and maintenance are handled by the provider. Messaging is a common SaaS scenario.",
      es: {
        topic: "Tipos de servicio en la nube",
        q: "Una empresa quiere una aplicación de mensajería completamente desarrollada y espera que los parches y el mantenimiento se gestionen automáticamente. ¿Qué tipo de servicio corresponde?",
        options: ["IaaS", "PaaS", "SaaS", "Una nube privada"],
        explain: "SaaS es una aplicación completamente desarrollada, y el proveedor se ocupa de sus parches y su mantenimiento. La mensajería es un escenario habitual de SaaS."
      }
    },
    {
      type: "multi",
      topic: "Cloud service types",
      q: "Which two are common PaaS scenarios?",
      options: ["Development framework", "Analytics or business intelligence", "Email and messaging", "Lift-and-shift migration", "Finance and expense tracking"],
      answers: [0, 1],
      explain: "Development frameworks and analytics or BI are the listed PaaS scenarios. Email and finance apps are SaaS; lift-and-shift is IaaS.",
      es: {
        topic: "Tipos de servicio en la nube",
        q: "¿Cuáles son dos escenarios habituales de PaaS?",
        options: ["Marco de desarrollo", "Análisis o inteligencia empresarial", "Correo electrónico y mensajería", "Migración tal cual (lift-and-shift)", "Finanzas y seguimiento de gastos"],
        explain: "Los marcos de desarrollo y el análisis o la inteligencia empresarial son los escenarios listados de PaaS. El correo y las aplicaciones de finanzas son SaaS; la migración tal cual es IaaS."
      }
    },
    {
      type: "match",
      topic: "Cloud service types",
      q: "Match each statement to the cloud service type it describes.",
      values: ["IaaS", "PaaS", "SaaS"],
      targets: [
        { t: "The customer handles network, database and storage configuration", answer: 0 },
        { t: "The provider maintains middleware and development tools", answer: 1 },
        { t: "The customer mainly manages data, identity settings and device access posture", answer: 2 }
      ],
      explain: "Network and storage configuration are yours in IaaS. PaaS providers maintain middleware and tools. In SaaS you mostly manage data, identity and device access.",
      es: {
        topic: "Tipos de servicio en la nube",
        q: "Relacione cada afirmación con el tipo de servicio en la nube que describe.",
        values: ["IaaS", "PaaS", "SaaS"],
        targets: [
          { t: "El cliente se encarga de la configuración de red, bases de datos y almacenamiento" },
          { t: "El proveedor mantiene el middleware y las herramientas de desarrollo" },
          { t: "El cliente administra principalmente los datos, la configuración de identidad y la postura de acceso de los dispositivos" }
        ],
        explain: "La configuración de red y almacenamiento es suya en IaaS. Los proveedores de PaaS mantienen el middleware y las herramientas. En SaaS usted administra sobre todo datos, identidad y acceso de dispositivos."
      }
    },
    {
      type: "single",
      topic: "Cloud service types",
      q: "In which service type is the provider responsible for the operating system while the customer remains responsible for the application code?",
      options: ["IaaS", "PaaS", "SaaS", "On-premises"],
      answer: 1,
      explain: "In PaaS the provider maintains the OS and platform while you build and run your own code. In SaaS the application itself is the provider's.",
      es: {
        topic: "Tipos de servicio en la nube",
        q: "¿En qué tipo de servicio el proveedor es responsable del sistema operativo mientras el cliente sigue siendo responsable del código de la aplicación?",
        options: ["IaaS", "PaaS", "SaaS", "Local"],
        explain: "En PaaS el proveedor mantiene el sistema operativo y la plataforma mientras usted desarrolla y ejecuta su propio código. En SaaS la aplicación misma es del proveedor."
      }
    },
    {
      type: "yesno",
      statements: [
        { topic: "Cloud service types", s: "In IaaS, the customer installs and maintains the operating system.", answer: true, explain: "OS installation, configuration and maintenance are the customer's in IaaS." },
        { topic: "Cloud service types", s: "In SaaS, the customer handles infrastructure patching.", answer: false, explain: "The provider handles infrastructure patching, application updates and availability in SaaS." },
        { topic: "Cloud service types", s: "With PaaS, you don't have to worry about licensing for operating systems.", answer: true, explain: "PaaS removes OS and database licensing and patching from your concerns." }
      ],
      es: {
        statements: [
          { topic: "Tipos de servicio en la nube", s: "En IaaS, el cliente instala y mantiene el sistema operativo.", explain: "La instalación, la configuración y el mantenimiento del sistema operativo son del cliente en IaaS." },
          { topic: "Tipos de servicio en la nube", s: "En SaaS, el cliente se encarga de los parches de la infraestructura.", explain: "En SaaS el proveedor se ocupa de los parches de la infraestructura, las actualizaciones y la disponibilidad." },
          { topic: "Tipos de servicio en la nube", s: "Con PaaS, no tiene que preocuparse por las licencias de los sistemas operativos.", explain: "PaaS quita de sus preocupaciones las licencias y los parches del sistema operativo y las bases de datos." }
        ]
      }
    },
    {
      type: "single",
      topic: "Cloud computing",
      q: "A company estimated its on-premises capacity needs too low. What is the most likely consequence?",
      options: [
        "It overspends on idle infrastructure",
        "Its applications suffer degraded performance",
        "Its cloud bill increases automatically",
        "Its data residency changes"
      ],
      answer: 1,
      explain: "Underestimating capacity leads to degraded performance; overestimating leads to paying for idle infrastructure.",
      es: {
        topic: "Informática en la nube",
        q: "Una empresa estimó demasiado baja su necesidad de capacidad local. ¿Cuál es la consecuencia más probable?",
        options: [
          "Gasta de más en infraestructura ociosa",
          "Sus aplicaciones sufren un rendimiento degradado",
          "Su factura de nube aumenta automáticamente",
          "Cambia la residencia de sus datos"
        ],
        explain: "Subestimar la capacidad lleva a un rendimiento degradado; sobrestimarla lleva a pagar infraestructura ociosa."
      }
    },
    {
      type: "single",
      topic: "Cloud computing",
      q: "Which statement correctly describes a hybrid cloud?",
      options: [
        "It uses two or more public cloud providers",
        "It's used by a single entity with resources dedicated to it",
        "It uses both public and private clouds in an interconnected environment",
        "It's built and controlled by a third party and available to anyone who wants to buy services"
      ],
      answer: 2,
      explain: "Hybrid combines public and private clouds that are interconnected. The other options describe multicloud, private cloud and public cloud.",
      es: {
        topic: "Informática en la nube",
        q: "¿Qué afirmación describe correctamente una nube híbrida?",
        options: [
          "Usa dos o más proveedores de nube pública",
          "La usa una sola entidad con recursos dedicados",
          "Usa nubes públicas y privadas en un entorno interconectado",
          "La construye y controla un tercero y está disponible para cualquiera que quiera comprar servicios"
        ],
        explain: "La nube híbrida combina nubes públicas y privadas interconectadas. Las otras opciones describen la multinube, la nube privada y la nube pública."
      }
    }
  ]
});
