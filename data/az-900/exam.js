// AZ-900 practice exam: 40 questions weighted by the study guide (skills measured as of July 20, 2026)
// Cloud concepts 25-30% (11), Azure architecture and services 35-40% (16), Azure management and governance 30-35% (13)
Catalog.certQuiz("az-900", {
  added: "2026-11-19",
  items: [
    // ---------- Describe cloud concepts (11) ----------
    {
      type: "single",
      topic: "Cloud concepts",
      q: "A company moves its HR app from on-premises VMs to a SaaS product. Which responsibility does the company still keep?",
      options: [
        "Managing which employees have accounts and what data they enter",
        "Patching the operating system that runs the application",
        "Maintaining the physical servers and the datacenter network",
        "Patching the application runtime"
      ],
      answer: 0,
      explain: "In every model the customer keeps responsibility for its information and data, devices, and accounts and identities.",
      es: {
        topic: "Conceptos de la nube",
        q: "Una empresa pasa su aplicación de RR. HH. de máquinas virtuales locales a un producto SaaS. ¿Qué responsabilidad sigue siendo de la empresa?",
        options: [
          "Administrar qué empleados tienen cuentas y qué datos cargan",
          "Aplicar parches al sistema operativo que ejecuta la aplicación",
          "Mantener los servidores físicos y la red del centro de datos",
          "Aplicar parches al entorno de ejecución de la aplicación"
        ],
        explain: "En todos los modelos, el cliente sigue siendo responsable de su información y sus datos, los dispositivos y las cuentas e identidades."
      }
    },
    {
      type: "single",
      topic: "Cloud concepts",
      q: "A retailer keeps its customer database in its own datacenter for regulatory reasons, but wants to add web servers in Azure during holiday peaks. Which cloud model is this?",
      options: ["Hybrid cloud", "Private cloud", "Public cloud", "Multicloud"],
      answer: 0,
      explain: "Hybrid cloud combines private (on-premises) and public cloud resources, letting the private cloud overflow into the public one.",
      es: {
        topic: "Conceptos de la nube",
        q: "Un comercio mantiene su base de clientes en su propio centro de datos por motivos normativos, pero quiere sumar servidores web en Azure durante los picos de fin de año. ¿Qué modelo de nube es este?",
        options: ["Nube híbrida", "Nube privada", "Nube pública", "Multinube"],
        explain: "La nube híbrida combina recursos privados (locales) y de nube pública, y permite que la nube privada se desborde hacia la pública."
      }
    },
    {
      type: "single",
      topic: "Cloud concepts",
      q: "A startup can't afford to buy servers up front and wants costs that follow actual usage. Which cloud characteristic addresses this?",
      options: [
        "The consumption-based model, which turns capital expense into operational expense",
        "Reserved capacity, which converts operational expense into capital expense",
        "A private cloud, which removes hardware costs",
        "Vertical scaling of existing VMs"
      ],
      answer: 0,
      explain: "With the consumption-based model there are no upfront costs; you pay for what you use as an operational expense.",
      es: {
        topic: "Conceptos de la nube",
        q: "Una startup no puede comprar servidores por adelantado y quiere costos que sigan el uso real. ¿Qué característica de la nube lo resuelve?",
        options: [
          "El modelo basado en el consumo, que convierte el gasto de capital en gasto operativo",
          "La capacidad reservada, que convierte el gasto operativo en gasto de capital",
          "Una nube privada, que elimina los costos de hardware",
          "El escalado vertical de las máquinas existentes"
        ],
        explain: "Con el modelo basado en el consumo no hay costos iniciales; se paga por lo que se usa como gasto operativo."
      }
    },
    {
      type: "match",
      topic: "Cloud concepts",
      q: "Match each scenario to the cloud service type that fits best.",
      values: ["IaaS", "PaaS", "SaaS"],
      targets: [
        { t: "Lift-and-shift a legacy app that needs a specific OS configuration", answer: 0 },
        { t: "Developers deploy code without managing the OS or middleware", answer: 1 },
        { t: "Give sales staff email and calendar without managing any infrastructure", answer: 2 },
        { t: "Run a test lab where the team installs its own software on VMs", answer: 0 }
      ],
      explain: "IaaS gives the most control, PaaS manages the platform for developers, and SaaS delivers a finished application.",
      es: {
        topic: "Conceptos de la nube",
        q: "Relacione cada escenario con el tipo de servicio en la nube más adecuado.",
        values: ["IaaS", "PaaS", "SaaS"],
        targets: [
          { t: "Migrar tal cual una aplicación heredada que necesita una configuración de sistema operativo específica" },
          { t: "Los desarrolladores implementan código sin administrar el sistema operativo ni el middleware" },
          { t: "Darle correo y calendario al equipo comercial sin administrar ninguna infraestructura" },
          { t: "Montar un laboratorio de pruebas donde el equipo instala su propio software en máquinas virtuales" }
        ],
        explain: "IaaS da el mayor control, PaaS administra la plataforma para los desarrolladores y SaaS entrega una aplicación terminada."
      }
    },
    {
      type: "single",
      topic: "Cloud concepts",
      q: "An app automatically adds VM instances when traffic spikes and removes them when traffic drops, so the company pays only for what's needed. Which benefit is this?",
      options: ["Scalability, using horizontal scaling", "High availability, using an SLA", "Predictability, using reserved capacity", "Reliability, using several regions"],
      answer: 0,
      explain: "Adding or removing instances to match demand is horizontal scaling, a form of scalability.",
      es: {
        topic: "Conceptos de la nube",
        q: "Una aplicación agrega instancias de máquinas virtuales automáticamente cuando sube el tráfico y las quita cuando baja, así la empresa paga solo lo necesario. ¿Qué beneficio es este?",
        options: ["La escalabilidad, mediante escalado horizontal", "La alta disponibilidad, mediante un SLA", "La previsibilidad, mediante capacidad reservada", "La confiabilidad, mediante varias regiones"],
        explain: "Agregar o quitar instancias según la demanda es escalado horizontal, una forma de escalabilidad."
      }
    },
    {
      type: "yesno",
      statements: [
        { topic: "Cloud concepts", s: "In IaaS, the customer is responsible for patching the guest operating system.", answer: true, explain: "IaaS leaves the OS and everything above it to the customer." },
        { topic: "Cloud concepts", s: "In PaaS, the cloud provider is responsible for the customer's user accounts.", answer: false, explain: "Accounts and identities are always the customer's responsibility." },
        { topic: "Cloud concepts", s: "Serverless compute bills based on execution rather than on a server you keep running.", answer: true, explain: "With serverless, you don't manage or pay for idle servers." }
      ],
      es: {
        statements: [
          { topic: "Conceptos de la nube", s: "En IaaS, el cliente es responsable de aplicar parches al sistema operativo invitado.", explain: "IaaS deja en manos del cliente el sistema operativo y todo lo que está por encima." },
          { topic: "Conceptos de la nube", s: "En PaaS, el proveedor de nube es responsable de las cuentas de usuario del cliente.", explain: "Las cuentas y las identidades siempre son responsabilidad del cliente." },
          { topic: "Conceptos de la nube", s: "El proceso sin servidor se factura según las ejecuciones y no por un servidor que se mantiene encendido.", explain: "Con sin servidor no se administran ni se pagan servidores ociosos." }
        ]
      }
    },
    {
      type: "single",
      topic: "Cloud concepts",
      q: "A finance team wants to know its monthly cloud bill in advance, and the ops team wants consistent performance as load changes. Which cloud benefit covers both?",
      options: ["Predictability", "Elasticity", "Manageability", "Security and governance"],
      answer: 0,
      explain: "Predictability covers both cost (forecasting spend) and performance (autoscaling, load balancing).",
      es: {
        topic: "Conceptos de la nube",
        q: "El equipo de Finanzas quiere conocer de antemano la factura mensual de la nube, y el equipo de operaciones quiere un rendimiento constante aunque cambie la carga. ¿Qué beneficio de la nube cubre ambas cosas?",
        options: ["La previsibilidad", "La elasticidad", "La capacidad de administración", "La seguridad y la gobernanza"],
        explain: "La previsibilidad abarca el costo (prever el gasto) y el rendimiento (escalado automático, equilibrio de carga)."
      }
    },
    {
      type: "dropdown",
      topic: "Cloud concepts",
      q: "Complete the statement about the cloud.",
      parts: [
        "Increasing the CPU and memory of an existing VM is ",
        { options: ["vertical scaling", "horizontal scaling", "high availability"], answer: 0 },
        ", and a solution that keeps running when one component fails is said to be ",
        { options: ["reliable", "elastic", "consumption-based"], answer: 0 },
        "."
      ],
      explain: "Vertical scaling changes the size of a resource; reliability is the ability to recover from failures and keep functioning.",
      es: {
        topic: "Conceptos de la nube",
        q: "Complete la afirmación sobre la nube.",
        parts: [
          "Aumentar la CPU y la memoria de una máquina virtual existente es ",
          { options: ["escalado vertical", "escalado horizontal", "alta disponibilidad"] },
          ", y una solución que sigue funcionando cuando falla un componente es ",
          { options: ["confiable", "elástica", "basada en el consumo"] },
          "."
        ],
        explain: "El escalado vertical cambia el tamaño de un recurso; la confiabilidad es la capacidad de recuperarse de fallas y seguir funcionando."
      }
    },
    {
      type: "single",
      topic: "Cloud concepts",
      q: "A government agency must run workloads on hardware dedicated to it, in its own facilities, with full control over every layer. Which model fits?",
      options: ["Private cloud", "Public cloud", "Hybrid cloud", "PaaS on the public cloud"],
      answer: 0,
      explain: "A private cloud is used by a single entity and gives the most control, often in its own datacenter.",
      es: {
        topic: "Conceptos de la nube",
        q: "Un organismo de gobierno debe ejecutar cargas en hardware dedicado, en sus propias instalaciones y con control total de cada capa. ¿Qué modelo corresponde?",
        options: ["Nube privada", "Nube pública", "Nube híbrida", "PaaS en la nube pública"],
        explain: "Una nube privada la usa una sola entidad y da el mayor control, muchas veces en su propio centro de datos."
      }
    },
    // ---------- Describe Azure architecture and services (16) ----------
    {
      type: "single",
      topic: "Azure architecture and services",
      q: "An app must survive the failure of an entire datacenter while staying in one Azure region, with the lowest latency between instances. What should you use?",
      options: ["Availability zones", "A region pair", "An availability set", "Geo-redundant storage"],
      answer: 0,
      explain: "Availability zones are physically separate datacenters within a region. Availability sets protect against rack failures in one datacenter; region pairs span regions.",
      es: {
        topic: "Arquitectura y servicios de Azure",
        q: "Una aplicación debe soportar la falla de un centro de datos completo sin salir de una región de Azure y con la menor latencia entre instancias. ¿Qué debe usar?",
        options: ["Zonas de disponibilidad", "Un par de regiones", "Un conjunto de disponibilidad", "Almacenamiento con redundancia geográfica"],
        explain: "Las zonas de disponibilidad son centros de datos físicamente separados dentro de una región. Los conjuntos de disponibilidad protegen contra fallas de rack en un centro de datos; los pares de regiones abarcan varias regiones."
      }
    },
    {
      type: "single",
      topic: "Azure architecture and services",
      q: "A company wants one Azure Policy assignment to apply to 40 subscriptions owned by different departments. Where should it be assigned?",
      options: ["A management group containing the subscriptions", "A resource group in each subscription", "The Microsoft Entra tenant's default directory", "Each subscription, one by one"],
      answer: 0,
      explain: "Management groups sit above subscriptions; assignments there are inherited by every subscription below.",
      es: {
        topic: "Arquitectura y servicios de Azure",
        q: "Una empresa quiere que una sola asignación de Azure Policy se aplique a 40 suscripciones de distintos departamentos. ¿Dónde debe asignarla?",
        options: ["En un grupo de administración que contenga las suscripciones", "En un grupo de recursos de cada suscripción", "En el directorio predeterminado del inquilino de Microsoft Entra", "Cada suscripción, una por una"],
        explain: "Los grupos de administración están por encima de las suscripciones; las asignaciones ahí las heredan todas las suscripciones de abajo."
      }
    },
    {
      type: "yesno",
      statements: [
        { topic: "Azure architecture and services", s: "A resource can belong to more than one resource group.", answer: false, explain: "Each resource is in exactly one resource group." },
        { topic: "Azure architecture and services", s: "Deleting a resource group deletes all the resources in it.", answer: true, explain: "That's why grouping by lifecycle is common." },
        { topic: "Azure architecture and services", s: "Resource groups can be nested inside other resource groups.", answer: false, explain: "Resource groups can't be nested." }
      ],
      es: {
        statements: [
          { topic: "Arquitectura y servicios de Azure", s: "Un recurso puede pertenecer a más de un grupo de recursos.", explain: "Cada recurso está en un único grupo de recursos." },
          { topic: "Arquitectura y servicios de Azure", s: "Eliminar un grupo de recursos elimina todos los recursos que contiene.", explain: "Por eso es habitual agruparlos según su ciclo de vida." },
          { topic: "Arquitectura y servicios de Azure", s: "Los grupos de recursos se pueden anidar dentro de otros grupos de recursos.", explain: "Los grupos de recursos no se pueden anidar." }
        ]
      }
    },
    {
      type: "single",
      topic: "Azure architecture and services",
      q: "An e-commerce site runs on identical VMs and needs them to scale out automatically with demand behind a load balancer. Which service fits?",
      options: ["Virtual Machine Scale Sets", "Availability sets", "Azure Virtual Desktop", "Azure Container Instances"],
      answer: 0,
      explain: "Scale sets manage a group of identical, load-balanced VMs that scale automatically.",
      es: {
        topic: "Arquitectura y servicios de Azure",
        q: "Un sitio de comercio electrónico corre en máquinas virtuales idénticas y necesita que escalen automáticamente con la demanda detrás de un equilibrador de carga. ¿Qué servicio corresponde?",
        options: ["Virtual Machine Scale Sets", "Conjuntos de disponibilidad", "Azure Virtual Desktop", "Azure Container Instances"],
        explain: "Los conjuntos de escalado administran un grupo de máquinas virtuales idénticas y con equilibrio de carga que escalan automáticamente."
      }
    },
    {
      type: "single",
      topic: "Azure architecture and services",
      q: "Head office needs a private, dedicated connection to Azure with predictable latency, and traffic must not cross the public internet. What should it use?",
      options: ["ExpressRoute", "A site-to-site VPN gateway", "Virtual network peering", "A point-to-site VPN"],
      answer: 0,
      explain: "ExpressRoute uses a private connection through a connectivity provider and doesn't go over the internet. VPN gateways encrypt traffic over the internet.",
      es: {
        topic: "Arquitectura y servicios de Azure",
        q: "La casa central necesita una conexión privada y dedicada a Azure con latencia predecible, y el tráfico no debe pasar por internet. ¿Qué debe usar?",
        options: ["ExpressRoute", "Una puerta de enlace VPN de sitio a sitio", "El emparejamiento de redes virtuales", "Una VPN de punto a sitio"],
        explain: "ExpressRoute usa una conexión privada mediante un proveedor de conectividad y no pasa por internet. Las puertas de enlace VPN cifran el tráfico por internet."
      }
    },
    {
      type: "match",
      topic: "Azure architecture and services",
      q: "Match each storage requirement to the access tier with the lowest cost that still meets it.",
      values: ["Hot", "Cool", "Archive"],
      targets: [
        { t: "Product images served to the website many times a day", answer: 0 },
        { t: "Monthly reports read occasionally and kept at least 30 days", answer: 1 },
        { t: "Seven-year-old records that can wait hours to be rehydrated", answer: 2 }
      ],
      explain: "Hot is for frequent access, Cool for infrequent access kept at least 30 days, and Archive for rarely accessed data with hours of rehydration latency.",
      es: {
        topic: "Arquitectura y servicios de Azure",
        q: "Relacione cada requisito de almacenamiento con el nivel de acceso más barato que lo cumple.",
        values: ["Frecuente", "Esporádico", "Archivo"],
        targets: [
          { t: "Imágenes de productos que el sitio web sirve muchas veces al día" },
          { t: "Informes mensuales que se leen de vez en cuando y se guardan al menos 30 días" },
          { t: "Registros de hace siete años que pueden esperar horas para rehidratarse" }
        ],
        explain: "Frecuente es para acceso habitual, Esporádico para acceso ocasional con al menos 30 días, y Archivo para datos que casi no se leen, con horas de latencia de rehidratación."
      }
    },
    {
      type: "single",
      topic: "Azure architecture and services",
      q: "Data must survive the loss of an entire region, and the app must read it from the secondary region even before Microsoft initiates a failover. Which redundancy option fits?",
      options: ["Read-access geo-redundant storage (RA-GRS)", "Zone-redundant storage (ZRS)", "Geo-redundant storage (GRS)", "Locally redundant storage (LRS)"],
      answer: 0,
      explain: "GRS copies data to the paired region but the secondary is readable only after failover; RA-GRS adds read access to the secondary.",
      es: {
        topic: "Arquitectura y servicios de Azure",
        q: "Los datos deben soportar la pérdida de una región completa, y la aplicación debe poder leerlos en la región secundaria aun antes de que Microsoft inicie una conmutación por error. ¿Qué opción de redundancia corresponde?",
        options: ["Almacenamiento con redundancia geográfica con acceso de lectura (RA-GRS)", "Almacenamiento con redundancia de zona (ZRS)", "Almacenamiento con redundancia geográfica (GRS)", "Almacenamiento con redundancia local (LRS)"],
        explain: "GRS copia los datos a la región emparejada, pero la secundaria se puede leer solo después de la conmutación; RA-GRS agrega lectura en la secundaria."
      }
    },
    {
      type: "single",
      topic: "Azure architecture and services",
      q: "A company must move 60 TB of archives to Azure, but its internet link would take months. What should it use?",
      options: ["Azure Data Box", "AzCopy over the internet", "Azure File Sync", "Azure Storage Explorer"],
      answer: 0,
      explain: "Data Box is a physical device for offline transfers of up to 80 TB when network transfer isn't practical.",
      es: {
        topic: "Arquitectura y servicios de Azure",
        q: "Una empresa debe mover 60 TB de archivos históricos a Azure, pero con su enlace a internet tardaría meses. ¿Qué debe usar?",
        options: ["Azure Data Box", "AzCopy por internet", "Azure File Sync", "Azure Storage Explorer"],
        explain: "Data Box es un dispositivo físico para transferencias sin conexión de hasta 80 TB cuando la red no es práctica."
      }
    },
    {
      type: "multi",
      topic: "Azure architecture and services",
      q: "Which two are passwordless authentication options in Microsoft Entra ID?",
      options: ["Windows Hello for Business", "FIDO2 security keys", "SMS one-time codes as the only factor", "Security questions", "A longer password with special characters"],
      answers: [0, 1],
      explain: "Passwordless options include Windows Hello for Business, the Microsoft Authenticator app and FIDO2 security keys.",
      es: {
        topic: "Arquitectura y servicios de Azure",
        q: "¿Cuáles son dos opciones de autenticación sin contraseña en Microsoft Entra ID?",
        options: ["Windows Hello para empresas", "Llaves de seguridad FIDO2", "Códigos de un solo uso por SMS como único factor", "Preguntas de seguridad", "Una contraseña más larga con caracteres especiales"],
        explain: "Las opciones sin contraseña incluyen Windows Hello para empresas, la aplicación Microsoft Authenticator y las llaves de seguridad FIDO2."
      }
    },
    {
      type: "single",
      topic: "Azure architecture and services",
      q: "Users signing in from outside the corporate network must complete MFA, while sign-ins from the office don't. Which feature implements this?",
      options: ["Microsoft Entra Conditional Access", "Azure role-based access control", "Microsoft Entra Domain Services", "Single sign-on with a federated identity provider"],
      answer: 0,
      explain: "Conditional Access uses signals such as location to decide whether to allow access, require MFA or block.",
      es: {
        topic: "Arquitectura y servicios de Azure",
        q: "Los usuarios que inician sesión desde fuera de la red corporativa deben completar MFA, mientras que los de la oficina no. ¿Qué característica lo implementa?",
        options: ["El acceso condicional de Microsoft Entra", "El control de acceso basado en roles de Azure", "Microsoft Entra Domain Services", "El inicio de sesión único con un proveedor de identidades federado"],
        explain: "El acceso condicional usa señales como la ubicación para decidir si permite el acceso, exige MFA o lo bloquea."
      }
    },
    {
      type: "dropdown",
      topic: "Azure architecture and services",
      q: "Complete the statement about Azure RBAC.",
      parts: [
        "A role assigned at a resource group is inherited by ",
        { options: ["the resources in that group", "the parent subscription", "other resource groups in the subscription"], answer: 0 },
        ", and RBAC follows an ",
        { options: ["allow model, where permissions add up", "deny-first model, where any deny wins", "model where only one role applies"], answer: 0 },
        "."
      ],
      explain: "Role assignments flow down the hierarchy, and Azure RBAC is an allow model: multiple assignments are additive.",
      es: {
        topic: "Arquitectura y servicios de Azure",
        q: "Complete la afirmación sobre Azure RBAC.",
        parts: [
          "Un rol asignado en un grupo de recursos lo heredan ",
          { options: ["los recursos de ese grupo", "la suscripción primaria", "otros grupos de recursos de la suscripción"] },
          ", y RBAC sigue un ",
          { options: ["modelo de permiso, donde los permisos se suman", "modelo de denegación primero, donde cualquier denegación gana", "modelo donde se aplica un solo rol"] },
          "."
        ],
        explain: "Las asignaciones de roles bajan por la jerarquía, y Azure RBAC es un modelo de permiso: varias asignaciones se suman."
      }
    },
    {
      type: "single",
      topic: "Azure architecture and services",
      q: "A web app connects to an Azure SQL database, and the security team requires that the database receive a private IP address from the app's virtual network. What should you configure?",
      options: ["A private endpoint", "A public endpoint with firewall rules", "A service tag on the NSG", "Virtual network peering"],
      answer: 0,
      explain: "A private endpoint gives the service a private IP from your virtual network; public endpoints are reachable over the internet.",
      es: {
        topic: "Arquitectura y servicios de Azure",
        q: "Una aplicación web se conecta a una base de Azure SQL, y el equipo de seguridad exige que la base reciba una IP privada de la red virtual de la aplicación. ¿Qué debe configurar?",
        options: ["Un punto de conexión privado", "Un punto de conexión público con reglas de firewall", "Una etiqueta de servicio en el NSG", "El emparejamiento de redes virtuales"],
        explain: "Un punto de conexión privado le da al servicio una IP privada de su red virtual; los públicos son accesibles por internet."
      }
    },
    {
      type: "single",
      topic: "Azure architecture and services",
      q: "Legacy apps in Azure VMs need LDAP, Kerberos and Group Policy, but the company doesn't want to deploy or patch domain controllers. What should it use?",
      options: ["Microsoft Entra Domain Services", "Microsoft Entra ID with Conditional Access", "Microsoft Entra External ID", "AD DS on Azure VMs managed by IT"],
      answer: 0,
      explain: "Entra Domain Services provides managed domain services such as domain join, Group Policy, LDAP and Kerberos without managing DCs.",
      es: {
        topic: "Arquitectura y servicios de Azure",
        q: "Unas aplicaciones heredadas en máquinas virtuales de Azure necesitan LDAP, Kerberos y directivas de grupo, pero la empresa no quiere implementar ni aplicar parches a controladores de dominio. ¿Qué debe usar?",
        options: ["Microsoft Entra Domain Services", "Microsoft Entra ID con acceso condicional", "Microsoft Entra External ID", "AD DS en máquinas virtuales de Azure administradas por TI"],
        explain: "Entra Domain Services ofrece servicios de dominio administrados, como unión a dominio, directivas de grupo, LDAP y Kerberos, sin administrar controladores."
      }
    },
    {
      type: "single",
      topic: "Azure architecture and services",
      q: "A partner company's employees need access to one of your apps using their own corporate credentials, without you creating passwords for them. Which capability fits?",
      options: ["Microsoft Entra B2B collaboration", "Microsoft Entra Domain Services", "Azure RBAC custom roles", "Microsoft Entra Connect sync"],
      answer: 0,
      explain: "B2B collaboration lets external users sign in with their own identities, appearing as guests in your directory.",
      es: {
        topic: "Arquitectura y servicios de Azure",
        q: "Los empleados de una empresa asociada necesitan acceso a una de sus aplicaciones con sus propias credenciales corporativas, sin que usted les cree contraseñas. ¿Qué capacidad corresponde?",
        options: ["La colaboración B2B de Microsoft Entra", "Microsoft Entra Domain Services", "Los roles personalizados de Azure RBAC", "La sincronización de Microsoft Entra Connect"],
        explain: "La colaboración B2B permite que usuarios externos inicien sesión con sus propias identidades y aparezcan como invitados en su directorio."
      }
    },
    // ---------- Describe Azure management and governance (13) ----------
    {
      type: "single",
      topic: "Azure management and governance",
      q: "Finance wants an email when a department's Azure spending reaches 80% of its monthly limit. What should be configured?",
      options: ["A budget with an alert in Microsoft Cost Management", "A resource lock on the department's resource groups", "An Azure Policy with a deny effect on expensive SKUs", "An Azure Advisor cost recommendation"],
      answer: 0,
      explain: "Budgets in Cost Management trigger alerts at thresholds you define.",
      es: {
        topic: "Administración y gobernanza de Azure",
        q: "Finanzas quiere un correo cuando el gasto de un departamento en Azure llegue al 80 % de su límite mensual. ¿Qué hay que configurar?",
        options: ["Un presupuesto con una alerta en Microsoft Cost Management", "Un bloqueo de recursos en los grupos de recursos del departamento", "Una directiva de Azure Policy con efecto de denegación sobre SKU caras", "Una recomendación de costo de Azure Advisor"],
        explain: "Los presupuestos de Cost Management disparan alertas en los umbrales que usted define."
      }
    },
    {
      type: "single",
      topic: "Azure management and governance",
      q: "Before migrating, a team wants to estimate the monthly cost of three VMs, a SQL database and outbound bandwidth in a specific region. Which tool should it use?",
      options: ["The Azure pricing calculator", "Cost analysis in Cost Management", "Azure Advisor", "Azure Service Health"],
      answer: 0,
      explain: "The pricing calculator estimates the cost of resources you plan to deploy; cost analysis shows actual spend.",
      es: {
        topic: "Administración y gobernanza de Azure",
        q: "Antes de migrar, un equipo quiere estimar el costo mensual de tres máquinas virtuales, una base SQL y el ancho de banda saliente en una región específica. ¿Qué herramienta debe usar?",
        options: ["La calculadora de precios de Azure", "El análisis de costos de Cost Management", "Azure Advisor", "Azure Service Health"],
        explain: "La calculadora de precios estima el costo de los recursos que planea implementar; el análisis de costos muestra el gasto real."
      }
    },
    {
      type: "yesno",
      statements: [
        { topic: "Azure management and governance", s: "Inbound data transfer into Azure datacenters is generally free, while outbound transfer is charged.", answer: true, explain: "Bandwidth is a cost factor, mostly for outbound and inter-region traffic." },
        { topic: "Azure management and governance", s: "Tags applied to a resource group are inherited automatically by the resources inside it.", answer: false, explain: "Resources don't inherit tags; Azure Policy can enforce or apply them." },
        { topic: "Azure management and governance", s: "The same VM size can cost different amounts in different Azure regions.", answer: true, explain: "Geography is a cost factor." }
      ],
      es: {
        statements: [
          { topic: "Administración y gobernanza de Azure", s: "La transferencia de datos entrante a los centros de datos de Azure en general es gratuita, mientras que la saliente se cobra.", explain: "El ancho de banda es un factor de costo, sobre todo el saliente y entre regiones." },
          { topic: "Administración y gobernanza de Azure", s: "Las etiquetas aplicadas a un grupo de recursos las heredan automáticamente los recursos que contiene.", explain: "Los recursos no heredan etiquetas; Azure Policy puede exigirlas o aplicarlas." },
          { topic: "Administración y gobernanza de Azure", s: "El mismo tamaño de máquina virtual puede costar distinto en distintas regiones de Azure.", explain: "La geografía es un factor de costo." }
        ]
      }
    },
    {
      type: "single",
      topic: "Azure management and governance",
      q: "Even subscription Owners must be prevented from accidentally deleting a production database, while still being able to change its settings. What should you apply?",
      options: ["A Delete (CanNotDelete) resource lock", "A ReadOnly resource lock", "An Azure Policy with an audit effect", "A custom RBAC role that removes delete rights"],
      answer: 0,
      explain: "A Delete lock allows reading and modifying but blocks deletion, and it applies to everyone, including Owners. ReadOnly would block changes too.",
      es: {
        topic: "Administración y gobernanza de Azure",
        q: "Hay que impedir que incluso los Propietarios de la suscripción eliminen por accidente una base de producción, sin dejar de poder cambiar su configuración. ¿Qué debe aplicar?",
        options: ["Un bloqueo de recursos Delete (CanNotDelete)", "Un bloqueo de recursos ReadOnly", "Una directiva de Azure Policy con efecto de auditoría", "Un rol RBAC personalizado que quite el permiso de eliminar"],
        explain: "Un bloqueo Delete permite leer y modificar, pero impide eliminar, y se aplica a todos, incluidos los Propietarios. ReadOnly también impediría los cambios."
      }
    },
    {
      type: "single",
      topic: "Azure management and governance",
      q: "A company must ensure new resources can only be created in two approved regions, and wants a report of existing resources in other regions. What should it use?",
      options: ["Azure Policy with an allowed locations definition", "A resource lock on each subscription", "Microsoft Purview Data Map", "Tags listing the approved regions, reviewed monthly"],
      answer: 0,
      explain: "Azure Policy can deny noncompliant deployments and evaluates existing resources for compliance.",
      es: {
        topic: "Administración y gobernanza de Azure",
        q: "Una empresa debe asegurar que los recursos nuevos solo se puedan crear en dos regiones aprobadas, y quiere un informe de los recursos existentes en otras regiones. ¿Qué debe usar?",
        options: ["Azure Policy con una definición de ubicaciones permitidas", "Un bloqueo de recursos en cada suscripción", "Microsoft Purview Data Map", "Etiquetas con las regiones aprobadas, revisadas cada mes"],
        explain: "Azure Policy puede denegar las implementaciones no conformes y evalúa el cumplimiento de los recursos existentes."
      }
    },
    {
      type: "match",
      topic: "Azure management and governance",
      q: "Match each need to the Azure tool.",
      values: ["Azure Advisor", "Azure Service Health", "Azure Monitor", "Microsoft Purview"],
      targets: [
        { t: "Recommendations to improve reliability, security, performance and cost", answer: 0 },
        { t: "Notice of planned maintenance affecting the regions you use", answer: 1 },
        { t: "Alerts when a VM's CPU stays above 90% for 10 minutes", answer: 2 },
        { t: "A unified view of data across on-premises, multicloud and SaaS for governance", answer: 3 }
      ],
      explain: "Each tool serves a different management or governance purpose.",
      es: {
        topic: "Administración y gobernanza de Azure",
        q: "Relacione cada necesidad con la herramienta de Azure.",
        values: ["Azure Advisor", "Azure Service Health", "Azure Monitor", "Microsoft Purview"],
        targets: [
          { t: "Recomendaciones para mejorar confiabilidad, seguridad, rendimiento y costo" },
          { t: "Aviso de mantenimiento planeado que afecta las regiones que usa" },
          { t: "Alertas cuando la CPU de una máquina virtual pasa el 90 % durante 10 minutos" },
          { t: "Una vista unificada de datos locales, multinube y SaaS para su gobernanza" }
        ],
        explain: "Cada herramienta cumple un propósito distinto de administración o gobernanza."
      }
    },
    {
      type: "single",
      topic: "Azure management and governance",
      q: "An admin on a locked-down laptop can't install any tools but needs to run Azure CLI and PowerShell commands against the company's subscription. What should she use?",
      options: ["Azure Cloud Shell in the browser", "Azure Arc", "ARM templates in a storage account", "The Azure mobile app"],
      answer: 0,
      explain: "Cloud Shell is browser-based, needs no local installation and supports both Bash (Azure CLI) and PowerShell.",
      es: {
        topic: "Administración y gobernanza de Azure",
        q: "Una administradora con una laptop restringida no puede instalar herramientas, pero necesita ejecutar comandos de la CLI de Azure y PowerShell contra la suscripción de la empresa. ¿Qué debe usar?",
        options: ["Azure Cloud Shell en el explorador", "Azure Arc", "Plantillas ARM en una cuenta de almacenamiento", "La aplicación móvil de Azure"],
        explain: "Cloud Shell funciona en el explorador, no requiere instalación local y admite Bash (CLI de Azure) y PowerShell."
      }
    },
    {
      type: "single",
      topic: "Azure management and governance",
      q: "A company has Linux servers in its datacenter and in AWS, and wants to apply Azure Policy and manage them from the Azure portal. What should it use?",
      options: ["Azure Arc", "Azure Migrate", "Azure Lighthouse", "Azure Site Recovery"],
      answer: 0,
      explain: "Azure Arc projects servers, Kubernetes clusters and other resources outside Azure into Azure Resource Manager for management and governance.",
      es: {
        topic: "Administración y gobernanza de Azure",
        q: "Una empresa tiene servidores Linux en su centro de datos y en AWS, y quiere aplicarles Azure Policy y administrarlos desde Azure Portal. ¿Qué debe usar?",
        options: ["Azure Arc", "Azure Migrate", "Azure Lighthouse", "Azure Site Recovery"],
        explain: "Azure Arc proyecta servidores, clústeres de Kubernetes y otros recursos fuera de Azure en Azure Resource Manager para administrarlos y gobernarlos."
      }
    },
    {
      type: "dropdown",
      topic: "Azure management and governance",
      q: "Complete the statement about infrastructure as code.",
      parts: [
        "ARM templates describe resources in ",
        { options: ["declarative JSON", "imperative PowerShell", "YAML pipelines only"], answer: 0 },
        ", and every request to create or change resources, whether from the portal, CLI or a template, goes through ",
        { options: ["Azure Resource Manager", "Azure Arc", "Azure Monitor"], answer: 0 },
        "."
      ],
      explain: "ARM templates are declarative JSON (Bicep is a simpler alternative), and Resource Manager handles every deployment request consistently.",
      es: {
        topic: "Administración y gobernanza de Azure",
        q: "Complete la afirmación sobre la infraestructura como código.",
        parts: [
          "Las plantillas ARM describen recursos en ",
          { options: ["JSON declarativo", "PowerShell imperativo", "solo canalizaciones YAML"] },
          ", y cada solicitud para crear o cambiar recursos, ya sea desde el portal, la CLI o una plantilla, pasa por ",
          { options: ["Azure Resource Manager", "Azure Arc", "Azure Monitor"] },
          "."
        ],
        explain: "Las plantillas ARM son JSON declarativo (Bicep es una alternativa más simple), y Resource Manager atiende todas las solicitudes de implementación de forma coherente."
      }
    },
    {
      type: "single",
      topic: "Azure management and governance",
      q: "Developers want to know why their web app's response time got worse after the last release, including slow dependencies and failed requests. Which service should they use?",
      options: ["Application Insights", "Azure Advisor", "Azure Service Health", "Log Analytics on the activity log"],
      answer: 0,
      explain: "Application Insights, part of Azure Monitor, tracks application performance, dependencies, failures and usage.",
      es: {
        topic: "Administración y gobernanza de Azure",
        q: "Los desarrolladores quieren saber por qué empeoró el tiempo de respuesta de su aplicación web después del último despliegue, incluidas dependencias lentas y solicitudes fallidas. ¿Qué servicio deben usar?",
        options: ["Application Insights", "Azure Advisor", "Azure Service Health", "Log Analytics sobre el registro de actividad"],
        explain: "Application Insights, parte de Azure Monitor, sigue el rendimiento, las dependencias, las fallas y el uso de las aplicaciones."
      }
    },
    {
      type: "single",
      topic: "Azure management and governance",
      q: "A VM is unreachable, and the admin wants to know whether an Azure platform problem is affecting that specific VM rather than the whole region. Which view should she check?",
      options: ["Resource Health", "Azure Status", "Azure Advisor recommendations", "Cost analysis for the VM"],
      answer: 0,
      explain: "Resource Health shows the health of your individual resources; Azure Status shows global service status.",
      es: {
        topic: "Administración y gobernanza de Azure",
        q: "Una máquina virtual no responde, y la administradora quiere saber si un problema de la plataforma Azure afecta a esa máquina en particular y no a toda la región. ¿Qué vista debe revisar?",
        options: ["Resource Health", "Azure Status", "Las recomendaciones de Azure Advisor", "El análisis de costos de la máquina"],
        explain: "Resource Health muestra el estado de sus recursos individuales; Azure Status muestra el estado global de los servicios."
      }
    }
  ]
});
