// AZ-900 > Describe Azure architecture and services: learning path review (all five modules)
Catalog.pathQuiz("az-900", "architecture", {
  added: "2026-10-26",
  items: [
    {
      type: "single",
      topic: "Core architecture",
      q: "A company must keep running if one datacenter fails, without moving its data out of the region. What should it use?",
      options: ["Availability zones", "A region pair", "A management group", "A sovereign region"],
      answer: 0,
      explain: "Availability zones are physically separate datacenters within a region. A region pair would move data to another region.",
      es: {
        topic: "Arquitectura principal",
        q: "Una empresa debe seguir funcionando si falla un centro de datos, sin sacar sus datos de la región. ¿Qué debe usar?",
        options: ["Zonas de disponibilidad", "Un par de regiones", "Un grupo de administración", "Una región soberana"],
        explain: "Las zonas de disponibilidad son centros de datos físicamente separados dentro de una región. Un par de regiones llevaría los datos a otra región."
      }
    },
    {
      type: "match",
      topic: "Core architecture",
      q: "Match each description to the Azure management element.",
      values: ["Resource", "Resource group", "Subscription", "Management group"],
      targets: [
        { t: "A virtual network you create in Azure", answer: 0 },
        { t: "A container that can't be nested, where actions apply to everything inside", answer: 1 },
        { t: "A unit of billing, access and scale", answer: 2 },
        { t: "A container that organizes several subscriptions and passes down policies", answer: 3 }
      ],
      explain: "Resources live in resource groups, resource groups in subscriptions, and subscriptions can be organized under management groups.",
      es: {
        topic: "Arquitectura principal",
        q: "Relacione cada descripción con el elemento de administración de Azure.",
        values: ["Recurso", "Grupo de recursos", "Suscripción", "Grupo de administración"],
        targets: [
          { t: "Una red virtual que crea en Azure" },
          { t: "Un contenedor que no se puede anidar, donde las acciones se aplican a todo lo que contiene" },
          { t: "Una unidad de facturación, acceso y escala" },
          { t: "Un contenedor que organiza varias suscripciones y hereda directivas hacia abajo" }
        ],
        explain: "Los recursos están en grupos de recursos, los grupos de recursos en suscripciones, y las suscripciones se pueden organizar en grupos de administración."
      }
    },
    {
      type: "single",
      topic: "Compute",
      q: "An image upload should trigger a short piece of code that creates a thumbnail, and the company wants to pay only while the code runs. Which service fits?",
      options: ["Azure Functions", "Azure Virtual Machines", "Azure Kubernetes Service", "Azure Virtual Desktop"],
      answer: 0,
      explain: "Functions are event-driven and serverless; you pay for the CPU time used. VMs and AKS keep resources running.",
      es: {
        topic: "Proceso",
        q: "La carga de una imagen debe activar un fragmento de código breve que cree una miniatura, y la empresa quiere pagar solo mientras el código se ejecuta. ¿Qué servicio corresponde?",
        options: ["Azure Functions", "Azure Virtual Machines", "Azure Kubernetes Service", "Azure Virtual Desktop"],
        explain: "Functions es sin servidor y controlado por eventos; se paga por el tiempo de CPU usado. Las máquinas virtuales y AKS mantienen recursos en ejecución."
      }
    },
    {
      type: "single",
      topic: "Networking",
      q: "A bank needs a private connection from its datacenter to Azure that doesn't travel over the public internet. What should it use?",
      options: ["Azure ExpressRoute", "A site-to-site VPN", "Virtual network peering", "A point-to-site VPN"],
      answer: 0,
      explain: "ExpressRoute is a private connection through a connectivity provider. VPNs are encrypted but travel over the internet.",
      es: {
        topic: "Redes",
        q: "Un banco necesita una conexión privada desde su centro de datos hasta Azure que no pase por internet. ¿Qué debe usar?",
        options: ["Azure ExpressRoute", "Una VPN de sitio a sitio", "El emparejamiento de redes virtuales", "Una VPN de punto a sitio"],
        explain: "ExpressRoute es una conexión privada a través de un proveedor de conectividad. Las VPN están cifradas pero viajan por internet."
      }
    },
    {
      type: "dropdown",
      topic: "Storage",
      q: "Complete the statement about storage redundancy.",
      parts: [
        "To survive a zone outage in the primary region and a full regional outage, choose ",
        { options: ["GZRS", "GRS", "ZRS"], answer: 0 },
        "; to read the secondary copy before a failover, choose ",
        { options: ["RA-GZRS", "LRS", "ZRS"], answer: 0 },
        "."
      ],
      explain: "GZRS replicates across zones in the primary region and to a secondary region. Read access to the secondary requires the RA- variant.",
      es: {
        topic: "Almacenamiento",
        q: "Complete la afirmación sobre la redundancia del almacenamiento.",
        parts: [
          "Para resistir una caída de zona en la región primaria y una caída regional completa, elija ",
          { options: ["GZRS", "GRS", "ZRS"] },
          "; para leer la copia secundaria antes de una conmutación por error, elija ",
          { options: ["RA-GZRS", "LRS", "ZRS"] },
          "."
        ],
        explain: "GZRS replica entre zonas en la región primaria y hacia una región secundaria. Leer la secundaria requiere la variante RA-."
      }
    },
    {
      type: "single",
      topic: "Identity and security",
      q: "A legacy application needs domain join, Group Policy and Kerberos, but the company doesn't want to deploy or maintain domain controllers in Azure. What should it use?",
      options: ["Microsoft Entra Domain Services", "Microsoft Entra Connect", "Azure Key Vault", "Microsoft Defender for Cloud"],
      answer: 0,
      explain: "Entra Domain Services provides managed domain services; Azure handles the domain controllers. Entra Connect only synchronizes identities.",
      es: {
        topic: "Identidad y seguridad",
        q: "Una aplicación heredada necesita unión a dominio, directiva de grupo y Kerberos, pero la empresa no quiere implementar ni mantener controladores de dominio en Azure. ¿Qué debe usar?",
        options: ["Microsoft Entra Domain Services", "Microsoft Entra Connect", "Azure Key Vault", "Microsoft Defender for Cloud"],
        explain: "Entra Domain Services ofrece servicios de dominio administrados; Azure se ocupa de los controladores. Entra Connect solo sincroniza identidades."
      }
    },
    {
      type: "yesno",
      statements: [
        { topic: "Core architecture", s: "Resource groups can be nested inside other resource groups.", answer: false, explain: "Resource groups can't be nested; management groups can." },
        { topic: "Networking", s: "Traffic between peered virtual networks travels over the Microsoft backbone, even across regions.", answer: true, explain: "Peering traffic is private." },
        { topic: "Storage", s: "The archive access tier can be set at the storage account level.", answer: false, explain: "Hot, cool and cold can be set at the account level; archive only at the blob level." }
      ],
      es: {
        statements: [
          { topic: "Arquitectura principal", s: "Los grupos de recursos se pueden anidar dentro de otros grupos de recursos.", explain: "Los grupos de recursos no se pueden anidar; los grupos de administración sí." },
          { topic: "Redes", s: "El tráfico entre redes virtuales emparejadas viaja por la red troncal de Microsoft, incluso entre regiones.", explain: "El tráfico de emparejamiento es privado." },
          { topic: "Almacenamiento", s: "El nivel de acceso de archivo se puede establecer en el nivel de la cuenta de almacenamiento.", explain: "Frecuente, esporádico y poco frecuente se pueden establecer en la cuenta; archivo solo en el blob." }
        ]
      }
    },
    {
      type: "match",
      topic: "Compute",
      q: "Match each requirement to the Azure compute option.",
      values: ["Azure Virtual Machines", "Azure Container Instances", "Azure Kubernetes Service", "Azure App Service"],
      targets: [
        { t: "Full control of the operating system to run custom software", answer: 0 },
        { t: "The simplest way to run a single container without managing VMs", answer: 1 },
        { t: "Orchestrating a large fleet of containers", answer: 2 },
        { t: "Hosting a web app or API with the infrastructure managed for you", answer: 3 }
      ],
      explain: "VMs are IaaS with OS control; Container Instances is the simplest container option; AKS orchestrates containers; App Service hosts web apps and APIs.",
      es: {
        topic: "Proceso",
        q: "Relacione cada requisito con la opción de proceso de Azure.",
        values: ["Azure Virtual Machines", "Azure Container Instances", "Azure Kubernetes Service", "Azure App Service"],
        targets: [
          { t: "Control total del sistema operativo para ejecutar software personalizado" },
          { t: "La forma más simple de ejecutar un único contenedor sin administrar máquinas virtuales" },
          { t: "Orquestar una flota grande de contenedores" },
          { t: "Hospedar una aplicación web o una API con la infraestructura administrada" }
        ],
        explain: "Las máquinas virtuales son IaaS con control del sistema operativo; Container Instances es la opción de contenedores más simple; AKS orquesta contenedores; App Service hospeda aplicaciones web y API."
      }
    },
    {
      type: "single",
      topic: "Storage",
      q: "A company must move about 60 TB of data to Azure, but its internet bandwidth is limited. What should it use?",
      options: ["Azure Data Box", "AzCopy", "Azure Storage Explorer", "Azure File Sync"],
      answer: 0,
      explain: "Data Box is a physical device shipped to you, ideal for tens of terabytes with limited bandwidth. AzCopy and Storage Explorer transfer over the network.",
      es: {
        topic: "Almacenamiento",
        q: "Una empresa debe mover unos 60 TB de datos a Azure, pero su ancho de banda de internet es limitado. ¿Qué debe usar?",
        options: ["Azure Data Box", "AzCopy", "Explorador de Azure Storage", "Azure File Sync"],
        explain: "Data Box es un dispositivo físico que se envía al cliente, ideal para decenas de terabytes con poco ancho de banda. AzCopy y el Explorador de Storage transfieren por la red."
      }
    },
    {
      type: "multi",
      topic: "Identity and security",
      q: "Which two are characteristics of Azure role-based access control (RBAC)?",
      options: [
        "Permissions assigned at a parent scope are inherited by child scopes",
        "It's enforced through Azure Resource Manager",
        "It controls access inside an application's own data model",
        "It denies by default once any role is assigned",
        "It only works with individual users, not groups"
      ],
      answers: [0, 1],
      explain: "RBAC is hierarchical and enforced by Resource Manager. It works with groups, uses an allow model and doesn't control app- or data-level access.",
      es: {
        topic: "Identidad y seguridad",
        q: "¿Cuáles son dos características del control de acceso basado en roles (RBAC) de Azure?",
        options: [
          "Los permisos asignados en un ámbito primario los heredan los ámbitos secundarios",
          "Se aplica mediante Azure Resource Manager",
          "Controla el acceso dentro del modelo de datos propio de una aplicación",
          "Deniega de forma predeterminada en cuanto se asigna un rol",
          "Solo funciona con usuarios individuales, no con grupos"
        ],
        explain: "RBAC es jerárquico y lo aplica Resource Manager. Funciona con grupos, usa un modelo de permiso y no controla el acceso a nivel de aplicación o datos."
      }
    },
    {
      type: "single",
      topic: "Networking",
      q: "Which resource filters inbound and outbound traffic to Azure resources with security rules based on source, destination, port and protocol?",
      options: ["A network security group", "A route table", "A virtual network peering", "A VPN gateway"],
      answer: 0,
      explain: "NSGs contain inbound and outbound security rules. Route tables control routing, peering connects VNets and VPN gateways connect networks.",
      es: {
        topic: "Redes",
        q: "¿Qué recurso filtra el tráfico entrante y saliente de los recursos de Azure con reglas de seguridad según origen, destino, puerto y protocolo?",
        options: ["Un grupo de seguridad de red", "Una tabla de rutas", "Un emparejamiento de redes virtuales", "Una puerta de enlace VPN"],
        explain: "Los NSG contienen reglas de seguridad de entrada y salida. Las tablas de rutas controlan el enrutamiento, el emparejamiento une redes virtuales y las puertas de enlace VPN conectan redes."
      }
    },
    {
      type: "yesno",
      statements: [
        { topic: "Compute", s: "Availability sets let a group of VMs scale out automatically based on demand.", answer: false, explain: "Scale sets scale automatically; availability sets improve resiliency across fault and update domains." },
        { topic: "Core architecture", s: "Microsoft Entra ID, Azure DNS and Azure Traffic Manager are global services that don't require selecting a region.", answer: true, explain: "VMs and disks, by contrast, are deployed to a region." },
        { topic: "Identity and security", s: "Zero Trust grants access based on network location rather than authentication.", answer: false, explain: "Zero Trust requires everyone to authenticate and grants access based on authentication, not location." }
      ],
      es: {
        statements: [
          { topic: "Proceso", s: "Los conjuntos de disponibilidad permiten que un grupo de máquinas virtuales escale horizontalmente según la demanda.", explain: "Los conjuntos de escalado escalan automáticamente; los de disponibilidad mejoran la resiliencia entre dominios de error y de actualización." },
          { topic: "Arquitectura principal", s: "Microsoft Entra ID, Azure DNS y Azure Traffic Manager son servicios globales que no requieren elegir una región.", explain: "En cambio, las máquinas virtuales y los discos se implementan en una región." },
          { topic: "Identidad y seguridad", s: "La Confianza cero concede acceso según la ubicación de red y no según la autenticación.", explain: "La Confianza cero exige que todos se autentiquen y concede acceso según la autenticación, no la ubicación." }
        ]
      }
    },
    {
      type: "single",
      topic: "Storage",
      q: "Which of the following is a valid storage account name?",
      options: ["contosodata2026", "Contoso-Data", "contoso_data", "cd"],
      answer: 0,
      explain: "Names are 3 to 24 characters of lowercase letters and numbers only, unique across Azure.",
      es: {
        topic: "Almacenamiento",
        q: "¿Cuál de los siguientes es un nombre de cuenta de almacenamiento válido?",
        options: ["contosodata2026", "Contoso-Data", "contoso_data", "cd"],
        explain: "Los nombres tienen de 3 a 24 caracteres, solo letras minúsculas y números, y son únicos en todo Azure."
      }
    },
    {
      type: "dropdown",
      topic: "Networking",
      q: "Complete the statement about VPN connections.",
      parts: [
        "A remote employee's laptop connecting to an Azure virtual network uses a ",
        { options: ["point-to-site", "site-to-site", "ExpressRoute"], answer: 0 },
        " VPN, and point-to-site connections require a ",
        { options: ["route-based", "policy-based", "static"], answer: 0 },
        " VPN gateway."
      ],
      explain: "Point-to-site connects individual devices. VNet-to-VNet, point-to-site, multisite and ExpressRoute coexistence require route-based gateways.",
      es: {
        topic: "Redes",
        q: "Complete la afirmación sobre las conexiones VPN.",
        parts: [
          "La laptop de un empleado remoto que se conecta a una red virtual de Azure usa una VPN de ",
          { options: ["punto a sitio", "sitio a sitio", "ExpressRoute"] },
          ", y las conexiones de punto a sitio requieren una puerta de enlace VPN ",
          { options: ["basada en rutas", "basada en directivas", "estática"] },
          "."
        ],
        explain: "La de punto a sitio conecta dispositivos individuales. Las conexiones entre redes virtuales, de punto a sitio, multisitio y la coexistencia con ExpressRoute requieren puertas de enlace basadas en rutas."
      }
    },
    {
      type: "single",
      topic: "Identity and security",
      q: "A company wants employees to sign in once and access many apps, while keeping on-premises Active Directory identities in sync with the cloud. Which service synchronizes the identities?",
      options: ["Microsoft Entra Connect", "Microsoft Entra Domain Services", "Azure Key Vault", "Azure Arc"],
      answer: 0,
      explain: "Entra Connect synchronizes users between on-premises AD and Entra ID so there's one set of identities.",
      es: {
        topic: "Identidad y seguridad",
        q: "Una empresa quiere que los empleados inicien sesión una vez y accedan a muchas aplicaciones, manteniendo sincronizadas con la nube las identidades de su Active Directory local. ¿Qué servicio sincroniza las identidades?",
        options: ["Microsoft Entra Connect", "Microsoft Entra Domain Services", "Azure Key Vault", "Azure Arc"],
        explain: "Entra Connect sincroniza usuarios entre AD local y Entra ID para que haya un solo conjunto de identidades."
      }
    },
    {
      type: "multi",
      topic: "Core architecture",
      q: "Which two statements about region pairs are true?",
      options: [
        "Planned updates are rolled out to one region of the pair at a time",
        "Region pairs are typically at least 300 miles apart",
        "All services replicate and fail over automatically",
        "Every region is paired with one in a different geography",
        "Region pairs replace the need for availability zones"
      ],
      answers: [0, 1],
      explain: "Pairs get staggered updates and priority recovery, are usually 300+ miles apart and stay in the same geography (Brazil South is the exception). Not all services replicate automatically.",
      es: {
        topic: "Arquitectura principal",
        q: "¿Cuáles son dos afirmaciones verdaderas sobre los pares de regiones?",
        options: [
          "Las actualizaciones planificadas se aplican a una región del par por vez",
          "Los pares de regiones suelen estar separados por al menos 300 millas",
          "Todos los servicios replican y conmutan por error automáticamente",
          "Cada región está emparejada con una de otra geografía",
          "Los pares de regiones eliminan la necesidad de zonas de disponibilidad"
        ],
        explain: "Los pares reciben actualizaciones escalonadas y recuperación prioritaria, suelen estar a más de 300 millas y permanecen en la misma geografía (Brasil Sur es la excepción). No todos los servicios replican automáticamente."
      }
    },
    {
      type: "single",
      topic: "Compute",
      q: "A support team wants to deliver full Windows desktops to many users from Azure, with apps and data kept in Azure-hosted sessions instead of on local devices. Which service fits?",
      options: ["Azure Virtual Desktop", "Azure Functions", "Azure Container Apps", "Azure Data Box"],
      answer: 0,
      explain: "Azure Virtual Desktop centralizes desktop and app delivery, supports single- and multi-session and keeps data in Azure.",
      es: {
        topic: "Proceso",
        q: "Un equipo de soporte quiere ofrecer escritorios Windows completos a muchos usuarios desde Azure, con aplicaciones y datos en sesiones hospedadas en Azure en lugar de en los dispositivos locales. ¿Qué servicio corresponde?",
        options: ["Azure Virtual Desktop", "Azure Functions", "Azure Container Apps", "Azure Data Box"],
        explain: "Azure Virtual Desktop centraliza la entrega de escritorios y aplicaciones, admite sesión única y multisesión, y mantiene los datos en Azure."
      }
    },
    {
      type: "match",
      topic: "Storage",
      q: "Match each need to the Azure Storage service.",
      values: ["Blob storage", "Azure Files", "Queue storage", "Table storage"],
      targets: [
        { t: "Store videos and images as unstructured objects", answer: 0 },
        { t: "Fully managed SMB file shares mounted from Windows, Linux and macOS", answer: 1 },
        { t: "Hold messages for asynchronous processing by Azure Functions", answer: 2 },
        { t: "NoSQL store for structured, non-relational data", answer: 3 }
      ],
      explain: "Blobs store unstructured objects; Files provides managed shares; Queues hold messages; Tables store structured NoSQL data.",
      es: {
        topic: "Almacenamiento",
        q: "Relacione cada necesidad con el servicio de Azure Storage.",
        values: ["Blob Storage", "Azure Files", "Queue Storage", "Table Storage"],
        targets: [
          { t: "Guardar videos e imágenes como objetos no estructurados" },
          { t: "Recursos compartidos SMB totalmente administrados que se montan desde Windows, Linux y macOS" },
          { t: "Guardar mensajes para procesamiento asincrónico con Azure Functions" },
          { t: "Almacén NoSQL para datos estructurados no relacionales" }
        ],
        explain: "Los blobs guardan objetos no estructurados; Files ofrece recursos compartidos administrados; las colas guardan mensajes; las tablas guardan datos NoSQL estructurados."
      }
    },
    {
      type: "single",
      topic: "Identity and security",
      q: "Which Azure service manages the security posture of resources across Azure, on-premises and other clouds, with recommendations and threat protection?",
      options: ["Microsoft Defender for Cloud", "Azure Key Vault", "Microsoft Entra Connect", "Azure DNS"],
      answer: 0,
      explain: "Defender for Cloud manages security posture and extends protections to other clouds; Key Vault stores secrets, keys and certificates.",
      es: {
        topic: "Identidad y seguridad",
        q: "¿Qué servicio de Azure administra la postura de seguridad de los recursos en Azure, en el entorno local y en otras nubes, con recomendaciones y protección contra amenazas?",
        options: ["Microsoft Defender for Cloud", "Azure Key Vault", "Microsoft Entra Connect", "Azure DNS"],
        explain: "Defender for Cloud administra la postura de seguridad y extiende sus protecciones a otras nubes; Key Vault guarda secretos, claves y certificados."
      }
    },
    {
      type: "yesno",
      statements: [
        { topic: "Networking", s: "With ExpressRoute, DNS queries and certificate revocation list checks still go over the public internet.", answer: true, explain: "Those requests, plus Azure CDN requests, still use the internet." },
        { topic: "Storage", s: "Geo-redundant replication to the secondary region is synchronous, so no recent writes can be lost.", answer: false, explain: "It's asynchronous; RPO is typically under 15 minutes, with no SLA." },
        { topic: "Compute", s: "With containers, you don't manage the operating system as you do with a VM.", answer: true, explain: "Containers are lighter and quicker to create, scale and restart." }
      ],
      es: {
        statements: [
          { topic: "Redes", s: "Con ExpressRoute, las consultas DNS y las comprobaciones de listas de revocación de certificados siguen pasando por internet.", explain: "Esas solicitudes, más las de Azure CDN, siguen usando internet." },
          { topic: "Almacenamiento", s: "La replicación geográfica hacia la región secundaria es sincrónica, así que no se pueden perder escrituras recientes.", explain: "Es asincrónica; el RPO suele ser menor a 15 minutos, sin SLA." },
          { topic: "Proceso", s: "Con los contenedores, no se administra el sistema operativo como en una máquina virtual.", explain: "Los contenedores son más livianos y rápidos de crear, escalar y reiniciar." }
        ]
      }
    },
    {
      type: "single",
      topic: "Core architecture",
      q: "An administrator assigns the Reader role at a management group. Who receives it?",
      options: [
        "Every subscription, resource group and resource under that management group",
        "Only the management group object itself",
        "Only resources created after the assignment",
        "Only subscriptions in the same region"
      ],
      answer: 0,
      explain: "Permissions on a management group are inherited by everything beneath it, so you don't assign them one by one.",
      es: {
        topic: "Arquitectura principal",
        q: "Un administrador asigna el rol Lector en un grupo de administración. ¿A qué alcanza?",
        options: [
          "A todas las suscripciones, grupos de recursos y recursos de ese grupo de administración",
          "Solo al objeto del grupo de administración",
          "Solo a los recursos creados después de la asignación",
          "Solo a las suscripciones de la misma región"
        ],
        explain: "Los permisos de un grupo de administración los hereda todo lo que está debajo, así que no hace falta asignarlos uno por uno."
      }
    },
    {
      type: "dropdown",
      topic: "Compute",
      q: "Complete the statement about VM resiliency.",
      parts: [
        "In an availability set, VMs that share a power or network failure point belong to the same ",
        { options: ["fault domain", "update domain", "resource group"], answer: 0 },
        ", and VMs that can be rebooted together during planned maintenance belong to the same ",
        { options: ["update domain", "fault domain", "region pair"], answer: 0 },
        "."
      ],
      explain: "Fault domains group VMs by shared failure point; update domains group VMs rebooted together during maintenance.",
      es: {
        topic: "Proceso",
        q: "Complete la afirmación sobre la resiliencia de las máquinas virtuales.",
        parts: [
          "En un conjunto de disponibilidad, las máquinas virtuales que comparten un punto de falla de energía o red pertenecen al mismo ",
          { options: ["dominio de error", "dominio de actualización", "grupo de recursos"] },
          ", y las que se pueden reiniciar juntas durante el mantenimiento planificado pertenecen al mismo ",
          { options: ["dominio de actualización", "dominio de error", "par de regiones"] },
          "."
        ],
        explain: "Los dominios de error agrupan máquinas virtuales por punto de falla compartido; los de actualización agrupan las que se reinician juntas durante el mantenimiento."
      }
    },
    {
      type: "single",
      topic: "Identity and security",
      q: "A partner organization's users need access to a shared Teams channel through a mutual trust, without being added to your directory as guests. Which capability fits?",
      options: ["B2B direct connect", "B2B collaboration", "Microsoft Entra Domain Services", "Conditional Access"],
      answer: 0,
      explain: "B2B direct connect sets up a two-way trust with another Entra tenant and currently supports Teams shared channels; users don't appear in your directory.",
      es: {
        topic: "Identidad y seguridad",
        q: "Los usuarios de una organización asociada necesitan acceder a un canal compartido de Teams mediante una confianza mutua, sin agregarse a su directorio como invitados. ¿Qué capacidad corresponde?",
        options: ["Conexión directa B2B", "Colaboración B2B", "Microsoft Entra Domain Services", "Acceso condicional"],
        explain: "La conexión directa B2B establece una confianza bidireccional con otro inquilino de Entra y actualmente admite canales compartidos de Teams; los usuarios no aparecen en su directorio."
      }
    },
    {
      type: "single",
      topic: "Networking",
      q: "A company wants an Azure SQL resource reachable only from inside its virtual network, using a private IP address from the VNet's address space. What should it use?",
      options: ["A private endpoint", "A public endpoint", "A public load balancer", "Azure DNS alias records"],
      answer: 0,
      explain: "Private endpoints live inside a VNet with a private IP. Public endpoints have a public IP reachable from anywhere.",
      es: {
        topic: "Redes",
        q: "Una empresa quiere que un recurso de Azure SQL solo sea accesible desde su red virtual, con una IP privada del espacio de direcciones de la red. ¿Qué debe usar?",
        options: ["Un punto de conexión privado", "Un punto de conexión público", "Un equilibrador de carga público", "Registros de alias de Azure DNS"],
        explain: "Los puntos de conexión privados están dentro de una red virtual con una IP privada. Los públicos tienen una IP pública accesible desde cualquier lugar."
      }
    },
    {
      type: "single",
      topic: "Storage",
      q: "Invoices are rarely read after the first month but must stay available within milliseconds when needed. Which blob access tier is most cost-effective?",
      options: ["Cool", "Hot", "Archive", "Premium"],
      answer: 0,
      explain: "Cool suits infrequently accessed data stored at least 30 days with online access. Archive is cheaper to store but retrieval is slow.",
      es: {
        topic: "Almacenamiento",
        q: "Las facturas casi no se leen después del primer mes, pero deben estar disponibles en milisegundos cuando se necesiten. ¿Qué nivel de acceso de blobs es el más económico?",
        options: ["Esporádico", "Frecuente", "Archivo", "Prémium"],
        explain: "El nivel esporádico sirve para datos de acceso poco frecuente guardados al menos 30 días, con acceso en línea. Archivo es más barato de guardar pero la recuperación es lenta."
      }
    },
    {
      type: "multi",
      topic: "Core architecture",
      q: "Which two are required to create an Azure free account?",
      options: ["A phone number", "A credit card for identity verification", "An Enterprise Agreement", "An existing paid subscription", "A Microsoft Entra ID P2 license"],
      answers: [0, 1],
      explain: "The free account requires a phone number, a card for verification and a Microsoft or GitHub account. The student offer doesn't need a card.",
      es: {
        topic: "Arquitectura principal",
        q: "¿Cuáles son dos requisitos para crear una cuenta gratuita de Azure?",
        options: ["Un número de teléfono", "Una tarjeta de crédito para verificar la identidad", "Un Contrato Enterprise", "Una suscripción paga existente", "Una licencia de Microsoft Entra ID P2"],
        explain: "La cuenta gratuita requiere un número de teléfono, una tarjeta para verificación y una cuenta de Microsoft o GitHub. La oferta para estudiantes no necesita tarjeta."
      }
    },
    {
      type: "single",
      topic: "Networking",
      q: "A company uses ExpressRoute and wants a backup path so connectivity continues if the circuit fails. What can it add?",
      options: ["A site-to-site VPN gateway as failover", "A second resource group", "A network security group", "Azure DNS alias records"],
      answer: 0,
      explain: "A VPN gateway over the internet can serve as a secure failover path for ExpressRoute.",
      es: {
        topic: "Redes",
        q: "Una empresa usa ExpressRoute y quiere una ruta de respaldo para que la conectividad continúe si falla el circuito. ¿Qué puede agregar?",
        options: ["Una puerta de enlace VPN de sitio a sitio como conmutación por error", "Un segundo grupo de recursos", "Un grupo de seguridad de red", "Registros de alias de Azure DNS"],
        explain: "Una puerta de enlace VPN por internet puede servir como ruta segura de conmutación por error para ExpressRoute."
      }
    }
  ]
});
