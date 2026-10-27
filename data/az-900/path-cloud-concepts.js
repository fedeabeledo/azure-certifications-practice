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
    },
    {
      type: "single",
      topic: "Cloud benefits",
      q: "A database server is running out of memory. The team wants to fix it without adding more servers. Which type of scaling is this?",
      options: ["Vertical scaling (scale up)", "Horizontal scaling (scale out)", "Scaling in", "Geo-replication"],
      answer: 0,
      explain: "Adding CPU or RAM to the same resource is vertical scaling. Adding instances is horizontal scaling.",
      es: {
        topic: "Ventajas de la nube",
        q: "A un servidor de bases de datos se le está acabando la memoria. El equipo quiere solucionarlo sin agregar más servidores. ¿Qué tipo de escalado es?",
        options: ["Escalado vertical (escalar verticalmente)", "Escalado horizontal (escalar horizontalmente)", "Reducir horizontalmente", "Replicación geográfica"],
        explain: "Agregar CPU o RAM al mismo recurso es escalado vertical. Agregar instancias es escalado horizontal."
      }
    },
    {
      type: "match",
      topic: "Cloud computing",
      q: "Match each scenario to the cloud model.",
      values: ["Public cloud", "Private cloud", "Hybrid cloud", "Multicloud"],
      targets: [
        { t: "No CapEx to scale and pay only for what you use, without complete control of resources", answer: 0 },
        { t: "Complete control, with you responsible for hardware maintenance and updates", answer: 1 },
        { t: "A private datacenter that surges into public cloud resources for temporary demand", answer: 2 },
        { t: "Workloads split across two different public cloud providers", answer: 3 }
      ],
      explain: "Public cloud is pay-per-use without complete control; private cloud gives control and hardware responsibility; hybrid combines both; multicloud uses several public providers.",
      es: {
        topic: "Informática en la nube",
        q: "Relacione cada escenario con el modelo de nube.",
        values: ["Nube pública", "Nube privada", "Nube híbrida", "Multinube"],
        targets: [
          { t: "Sin CapEx para escalar y pago solo por lo que usa, sin control total de los recursos" },
          { t: "Control total, con usted a cargo del mantenimiento y las actualizaciones del hardware" },
          { t: "Un centro de datos privado que se expande hacia recursos de nube pública ante una demanda temporal" },
          { t: "Cargas de trabajo repartidas entre dos proveedores de nube pública distintos" }
        ],
        explain: "La nube pública es pago por uso sin control total; la privada da control y la responsabilidad del hardware; la híbrida combina ambas; la multinube usa varios proveedores públicos."
      }
    },
    {
      type: "single",
      topic: "Cloud service types",
      q: "A company wants to move its on-premises servers to the cloud quickly, keeping the same operating systems and configurations. Which service type fits this lift-and-shift migration?",
      options: ["IaaS", "PaaS", "SaaS", "Serverless"],
      answer: 0,
      explain: "Lift-and-shift is a common IaaS scenario: replicate the datacenter in the cloud and move workloads with full OS control.",
      es: {
        topic: "Tipos de servicio en la nube",
        q: "Una empresa quiere mover rápidamente sus servidores locales a la nube, manteniendo los mismos sistemas operativos y configuraciones. ¿Qué tipo de servicio corresponde a esta migración lift-and-shift?",
        options: ["IaaS", "PaaS", "SaaS", "Sin servidor"],
        explain: "Lift-and-shift es un escenario habitual de IaaS: replicar el centro de datos en la nube y mover las cargas con control total del sistema operativo."
      }
    },
    {
      type: "yesno",
      statements: [
        { topic: "Cloud benefits", s: "Uptime guarantees in Azure depend on the service and are part of its service-level agreements.", answer: true, explain: "High availability is backed by SLAs that vary by service." },
        { topic: "Cloud service types", s: "SaaS is the most flexible cloud service type.", answer: false, explain: "IaaS is the most flexible; SaaS is the easiest to use but the least flexible." },
        { topic: "Cloud computing", s: "In a private cloud hosted by a third party, the third party becomes responsible for your hardware updates.", answer: false, explain: "In a private cloud you remain responsible for hardware maintenance and updates." }
      ],
      es: {
        statements: [
          { topic: "Ventajas de la nube", s: "Las garantías de tiempo de actividad de Azure dependen del servicio y forman parte de sus acuerdos de nivel de servicio.", explain: "La alta disponibilidad está respaldada por SLA que varían según el servicio." },
          { topic: "Tipos de servicio en la nube", s: "SaaS es el tipo de servicio en la nube más flexible.", explain: "IaaS es el más flexible; SaaS es el más fácil de usar pero el menos flexible." },
          { topic: "Informática en la nube", s: "En una nube privada hospedada por un tercero, el tercero pasa a ser responsable de las actualizaciones de su hardware.", explain: "En una nube privada usted sigue siendo responsable del mantenimiento y las actualizaciones del hardware." }
        ]
      }
    },
    {
      type: "dropdown",
      topic: "Cloud benefits",
      q: "Complete the statement about predictability.",
      parts: [
        "Autoscaling and load balancing support ",
        { options: ["performance predictability", "cost predictability", "governance"], answer: 0 },
        ", while the Azure Pricing Calculator supports ",
        { options: ["cost predictability", "high availability", "reliability"], answer: 0 },
        "."
      ],
      explain: "Performance predictability relies on autoscaling, load balancing and high availability; cost predictability relies on tracking, analytics and the Pricing Calculator.",
      es: {
        topic: "Ventajas de la nube",
        q: "Complete la afirmación sobre la previsibilidad.",
        parts: [
          "El escalado automático y el equilibrio de carga respaldan la ",
          { options: ["previsibilidad del rendimiento", "previsibilidad de los costos", "gobernanza"] },
          ", mientras que la Calculadora de precios de Azure respalda la ",
          { options: ["previsibilidad de los costos", "alta disponibilidad", "confiabilidad"] },
          "."
        ],
        explain: "La previsibilidad del rendimiento se apoya en el escalado automático, el equilibrio de carga y la alta disponibilidad; la de los costos, en el seguimiento, el análisis y la Calculadora de precios."
      }
    },
    {
      type: "single",
      topic: "Cloud computing",
      q: "A company uses a cloud SQL database service. Who is responsible for patching the database engine, and who is responsible for the data in it?",
      options: [
        "The provider patches the database; the customer owns the data",
        "The customer patches the database; the provider owns the data",
        "The customer handles both",
        "The provider handles both"
      ],
      answer: 0,
      explain: "With a managed cloud database, the provider maintains the database; data always stays the customer's responsibility.",
      es: {
        topic: "Informática en la nube",
        q: "Una empresa usa un servicio de base de datos SQL en la nube. ¿Quién es responsable de aplicar los parches del motor de base de datos y quién de los datos que contiene?",
        options: [
          "El proveedor aplica los parches de la base de datos; el cliente es dueño de los datos",
          "El cliente aplica los parches de la base de datos; el proveedor es dueño de los datos",
          "El cliente se ocupa de ambos",
          "El proveedor se ocupa de ambos"
        ],
        explain: "Con una base de datos administrada en la nube, el proveedor mantiene la base de datos; los datos siempre son responsabilidad del cliente."
      }
    },
    {
      type: "multi",
      topic: "Cloud benefits",
      q: "Which two are examples of management in the cloud, meaning ways you manage your resources?",
      options: ["The Azure portal", "PowerShell", "Autoscaling based on demand", "Monitoring resource health", "Deploying from templates"],
      answers: [0, 1],
      explain: "Management in the cloud is how you manage: a web portal, a CLI, APIs and PowerShell. Autoscaling, monitoring and templates are management of the cloud.",
      es: {
        topic: "Ventajas de la nube",
        q: "¿Cuáles son dos ejemplos de administración en la nube, es decir, formas de administrar sus recursos?",
        options: ["El portal de Azure", "PowerShell", "El escalado automático según la demanda", "La supervisión del estado de los recursos", "La implementación desde plantillas"],
        explain: "La administración en la nube es cómo se administra: un portal web, una CLI, las API y PowerShell. El escalado automático, la supervisión y las plantillas son administración de la nube."
      }
    },
    {
      type: "single",
      topic: "Cloud service types",
      q: "A team wants to build its own web application without worrying about OS licensing, patching or the development framework's infrastructure. Which service type fits?",
      options: ["PaaS", "IaaS", "SaaS", "On-premises"],
      answer: 0,
      explain: "PaaS gives a complete development environment; the provider maintains the OS, middleware and tools while you focus on your code.",
      es: {
        topic: "Tipos de servicio en la nube",
        q: "Un equipo quiere desarrollar su propia aplicación web sin ocuparse de las licencias del sistema operativo, los parches ni la infraestructura del marco de desarrollo. ¿Qué tipo de servicio corresponde?",
        options: ["PaaS", "IaaS", "SaaS", "Local"],
        explain: "PaaS ofrece un entorno de desarrollo completo; el proveedor mantiene el sistema operativo, el middleware y las herramientas, y usted se centra en su código."
      }
    },
    {
      type: "single",
      topic: "Cloud benefits",
      q: "A company wants its deployed resources to meet its standards automatically and to be alerted when resources drift out of compliance. Which cloud benefit does this describe?",
      options: ["Governance", "Scalability", "High availability", "Performance predictability"],
      answer: 0,
      explain: "Templates keep deployments within standards and cloud auditing flags noncompliant resources and suggests mitigations.",
      es: {
        topic: "Ventajas de la nube",
        q: "Una empresa quiere que sus recursos implementados cumplan sus estándares automáticamente y recibir alertas cuando un recurso deje de cumplirlos. ¿Qué ventaja de la nube describe esto?",
        options: ["La gobernanza", "La escalabilidad", "La alta disponibilidad", "La previsibilidad del rendimiento"],
        explain: "Las plantillas mantienen las implementaciones dentro de los estándares y la auditoría en la nube señala los recursos que no cumplen y sugiere cómo corregirlos."
      }
    },
    {
      type: "match",
      topic: "Cloud service types",
      q: "Match each scenario to the service type it's commonly associated with.",
      values: ["IaaS", "PaaS", "SaaS"],
      targets: [
        { t: "Testing and development with rapid replication and complete control", answer: 0 },
        { t: "Analytics or business intelligence tools delivered as a service", answer: 1 },
        { t: "Finance and expense tracking", answer: 2 },
        { t: "Email and messaging", answer: 2 }
      ],
      explain: "Testing and development is an IaaS scenario, analytics is a PaaS scenario and email, productivity and finance tracking are SaaS scenarios.",
      es: {
        topic: "Tipos de servicio en la nube",
        q: "Relacione cada escenario con el tipo de servicio al que suele asociarse.",
        values: ["IaaS", "PaaS", "SaaS"],
        targets: [
          { t: "Pruebas y desarrollo con replicación rápida y control total" },
          { t: "Herramientas de análisis o inteligencia empresarial entregadas como servicio" },
          { t: "Seguimiento de finanzas y gastos" },
          { t: "Correo electrónico y mensajería" }
        ],
        explain: "Las pruebas y el desarrollo son un escenario de IaaS, el análisis es de PaaS, y el correo, la productividad y el seguimiento de finanzas son de SaaS."
      }
    },
    {
      type: "yesno",
      statements: [
        { topic: "Cloud benefits", s: "Cloud providers are typically well suited to handle DDoS attacks.", answer: true, explain: "That makes your network more robust and secure." },
        { topic: "Cloud computing", s: "Cloud services extend beyond VMs and storage to IoT, machine learning and AI.", answer: true, explain: "Cloud computing is the delivery of computing services over the internet, including those." },
        { topic: "Cloud benefits", s: "Reliability means the ability to add resources when demand increases.", answer: false, explain: "That's scalability. Reliability is recovering from failures and continuing to function." }
      ],
      es: {
        statements: [
          { topic: "Ventajas de la nube", s: "Los proveedores de nube suelen estar bien preparados para manejar ataques DDoS.", explain: "Eso hace que su red sea más robusta y segura." },
          { topic: "Informática en la nube", s: "Los servicios en la nube van más allá de las máquinas virtuales y el almacenamiento, e incluyen IoT, aprendizaje automático e IA.", explain: "La informática en la nube es la entrega de servicios informáticos por internet, incluidos esos." },
          { topic: "Ventajas de la nube", s: "La confiabilidad es la capacidad de agregar recursos cuando aumenta la demanda.", explain: "Eso es escalabilidad. La confiabilidad es recuperarse de las fallas y seguir funcionando." }
        ]
      }
    }
  ]
});
