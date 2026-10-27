// AZ-900 > Describe Azure architecture and services > Describe Azure storage services
Catalog.module("az-900", {
  id: "storage",
  name: "Describe Azure storage services",
  es: { name: "Descripción de los servicios de almacenamiento de Azure" },
  url: "https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/",
  quiz: {
    added: "2026-10-26",
    items: [
      {
        type: "single",
        topic: "Storage redundancy",
        q: "A company needs its storage to survive both the loss of an availability zone and a disaster affecting the whole primary region. Which redundancy option fits best?",
        options: ["LRS", "ZRS", "GRS", "GZRS"],
        answer: 3,
        explain: "GZRS copies data across three zones in the primary region and replicates it to the secondary region. GRS uses LRS in the primary, so it doesn't protect against a zone outage there.",
        es: {
          topic: "Redundancia del almacenamiento",
          q: "Una empresa necesita que su almacenamiento sobreviva tanto a la pérdida de una zona de disponibilidad como a un desastre que afecte a toda la región primaria. ¿Qué opción de redundancia es la más adecuada?",
          options: ["LRS", "ZRS", "GRS", "GZRS"],
          explain: "GZRS copia los datos en tres zonas de la región primaria y los replica en la región secundaria. GRS usa LRS en la primaria, así que no protege ante la caída de una zona allí."
        }
      },
      {
        type: "match",
        topic: "Storage services",
        q: "Match each kind of data to the blob access tier that fits it.",
        values: ["Hot", "Cool", "Cold", "Archive"],
        targets: [
          { t: "Website images accessed constantly", answer: 0 },
          { t: "Customer invoices accessed infrequently and kept at least 30 days", answer: 1 },
          { t: "Infrequently accessed data kept at least 90 days", answer: 2 },
          { t: "Long-term backups rarely accessed, kept at least 180 days", answer: 3 }
        ],
        explain: "Hot is for frequent access; cool for 30+ days of infrequent access; cold for 90+ days; archive for 180+ days with flexible latency.",
        es: {
          topic: "Servicios de almacenamiento",
          q: "Relacione cada tipo de datos con el nivel de acceso de blobs que le corresponde.",
          values: ["Frecuente", "Esporádico", "Poco frecuente", "Archivo"],
          targets: [
            { t: "Imágenes de un sitio web a las que se accede constantemente" },
            { t: "Facturas de clientes a las que se accede con poca frecuencia y se guardan al menos 30 días" },
            { t: "Datos de acceso infrecuente que se guardan al menos 90 días" },
            { t: "Copias de seguridad a largo plazo, rara vez consultadas, guardadas al menos 180 días" }
          ],
          explain: "El nivel frecuente es para accesos habituales; el esporádico, para accesos infrecuentes de 30 días o más; el poco frecuente, para 90 días o más; el de archivo, para 180 días o más con latencia flexible."
        }
      },
      {
        type: "single",
        topic: "Data migration",
        q: "A company needs to move 70 TB of data to Azure once, but its internet bandwidth is limited. What should it use?",
        options: ["AzCopy over the internet", "Azure Data Box", "Azure File Sync", "Azure Storage Explorer"],
        answer: 1,
        explain: "Data Box is a physical device shipped to you, ideal for tens of terabytes when bandwidth is limited. AzCopy and Storage Explorer transfer over the network.",
        es: {
          topic: "Migración de datos",
          q: "Una empresa necesita trasladar 70 TB de datos a Azure una sola vez, pero su ancho de banda de internet es limitado. ¿Qué debe usar?",
          options: ["AzCopy por internet", "Azure Data Box", "Azure File Sync", "Explorador de Azure Storage"],
          explain: "Data Box es un dispositivo físico que se envía al cliente, ideal para decenas de terabytes cuando el ancho de banda es limitado. AzCopy y el Explorador de Storage transfieren por la red."
        }
      },
      {
        type: "multi",
        topic: "Storage accounts",
        q: "Which two statements about storage account names are true?",
        options: [
          "They must be between 3 and 24 characters long",
          "They may contain only numbers and lowercase letters",
          "They only need to be unique within your subscription",
          "They can include hyphens",
          "They can include uppercase letters"
        ],
        answers: [0, 1],
        explain: "Names are 3 to 24 characters of lowercase letters and numbers, and must be unique across all of Azure because they form the account's endpoints.",
        es: {
          topic: "Cuentas de almacenamiento",
          q: "¿Cuáles son dos afirmaciones verdaderas sobre los nombres de las cuentas de almacenamiento?",
          options: [
            "Deben tener entre 3 y 24 caracteres",
            "Solo pueden contener números y letras minúsculas",
            "Solo deben ser únicos dentro de su suscripción",
            "Pueden incluir guiones",
            "Pueden incluir letras mayúsculas"
          ],
          explain: "Los nombres tienen de 3 a 24 caracteres en minúsculas y números, y deben ser únicos en todo Azure porque forman los puntos de conexión de la cuenta."
        }
      },
      {
        type: "single",
        topic: "File movement",
        q: "A company wants to centralize its file shares in Azure Files while keeping the performance and compatibility of its local Windows file server. What should it use?",
        options: ["AzCopy", "Azure File Sync", "Azure Data Box", "Azure Migrate"],
        answer: 1,
        explain: "Azure File Sync keeps a Windows file server bi-directionally synced with Azure Files, almost like turning it into a mini content delivery network.",
        es: {
          topic: "Movimiento de archivos",
          q: "Una empresa quiere centralizar sus recursos compartidos de archivos en Azure Files sin perder el rendimiento y la compatibilidad de su servidor de archivos Windows local. ¿Qué debe usar?",
          options: ["AzCopy", "Azure File Sync", "Azure Data Box", "Azure Migrate"],
          explain: "Azure File Sync mantiene un servidor de archivos Windows sincronizado en ambos sentidos con Azure Files, casi como convertirlo en una pequeña red de entrega de contenido."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "Storage redundancy", s: "GRS uses locally redundant storage in both the primary and the secondary region.", answer: true, explain: "GRS is LRS in the primary, replicated asynchronously to LRS in the secondary." },
          { topic: "Storage services", s: "Azure Disks provide block-level storage volumes for Azure VMs.", answer: true, explain: "Managed disks are virtualized and managed by Azure." },
          { topic: "Data migration", s: "Azure Migrate is a physical device that a carrier ships to your datacenter.", answer: false, explain: "That's Azure Data Box. Azure Migrate is a hub for assessing and migrating on-premises environments." }
        ],
        es: {
          statements: [
            { topic: "Redundancia del almacenamiento", s: "GRS usa almacenamiento con redundancia local tanto en la región primaria como en la secundaria.", explain: "GRS es LRS en la primaria, replicado de forma asíncrona a LRS en la secundaria." },
            { topic: "Servicios de almacenamiento", s: "Azure Disks proporciona volúmenes de almacenamiento a nivel de bloque para las máquinas virtuales de Azure.", explain: "Los discos administrados están virtualizados y los administra Azure." },
            { topic: "Migración de datos", s: "Azure Migrate es un dispositivo físico que un transportista lleva a su centro de datos.", explain: "Eso es Azure Data Box. Azure Migrate es un centro para evaluar y migrar entornos locales." }
          ]
        }
      },
      {
        type: "dropdown",
        topic: "Storage redundancy",
        q: "Complete the statement about reading secondary-region data.",
        parts: [
          "To read data in the secondary region before a failover, enable ",
          { options: ["LRS or ZRS", "RA-GRS or RA-GZRS", "GRS only"], answer: 1 },
          ", keeping in mind that secondary data ",
          { options: ["may not be up to date", "is always identical to the primary", "is stored in a single zone"], answer: 0 },
          " because of the recovery point objective."
        ],
        explain: "Read access to the secondary requires RA-GRS or RA-GZRS. Replication is asynchronous, so the secondary may lag behind the primary.",
        es: {
          topic: "Redundancia del almacenamiento",
          q: "Complete la afirmación sobre la lectura de datos en la región secundaria.",
          parts: [
            "Para leer datos en la región secundaria antes de una conmutación por error, habilite ",
            { options: ["LRS o ZRS", "RA-GRS o RA-GZRS", "solo GRS"] },
            ", teniendo en cuenta que los datos secundarios ",
            { options: ["pueden no estar actualizados", "siempre son idénticos a los primarios", "se guardan en una sola zona"] },
            " debido al objetivo de punto de recuperación."
          ],
          explain: "El acceso de lectura a la secundaria requiere RA-GRS o RA-GZRS. La replicación es asíncrona, así que la secundaria puede estar atrasada respecto de la primaria."
        }
      },
      {
        type: "single",
        topic: "Storage services",
        q: "Application components need to exchange millions of messages for asynchronous processing. Which storage service fits?",
        options: ["Azure Blobs", "Azure Queues", "Azure Tables", "Azure Disks"],
        answer: 1,
        explain: "Queue storage holds large numbers of messages for asynchronous processing and is often paired with Azure Functions.",
        es: {
          topic: "Servicios de almacenamiento",
          q: "Los componentes de una aplicación necesitan intercambiar millones de mensajes para procesarlos de forma asíncrona. ¿Qué servicio de almacenamiento corresponde?",
          options: ["Azure Blobs", "Azure Queues", "Azure Tables", "Azure Disks"],
          explain: "Queue Storage guarda grandes cantidades de mensajes para procesamiento asíncrono y suele combinarse con Azure Functions."
        }
      },
      {
        type: "single",
        topic: "Storage accounts",
        q: "A high-performance application needs a storage account that supports both SMB and NFS file shares. Which account type should you create?",
        options: ["Standard general-purpose v2", "Premium block blobs", "Premium file shares", "Premium page blobs"],
        answer: 2,
        explain: "Premium file shares is the account type for file shares only and supports both SMB and NFS. For NFS in Azure Files, use premium file shares.",
        es: {
          topic: "Cuentas de almacenamiento",
          q: "Una aplicación de alto rendimiento necesita una cuenta de almacenamiento que admita recursos compartidos SMB y NFS. ¿Qué tipo de cuenta debe crear?",
          options: ["Estándar de uso general v2", "Blobs en bloques prémium", "Recursos compartidos de archivos prémium", "Blobs en páginas prémium"],
          explain: "Recursos compartidos de archivos prémium es el tipo de cuenta solo para recursos compartidos y admite SMB y NFS. Para NFS en Azure Files, se usa ese tipo."
        }
      },
      {
        type: "single",
        topic: "File movement",
        q: "An administrator on macOS wants a graphical interface to upload, download and move blobs between storage accounts. What should the administrator use?",
        options: ["AzCopy", "Azure Storage Explorer", "Azure File Sync", "Azure Data Box"],
        answer: 1,
        explain: "Storage Explorer is a standalone GUI app for Windows, macOS and Linux that uses AzCopy behind the scenes.",
        es: {
          topic: "Movimiento de archivos",
          q: "Un administrador en macOS quiere una interfaz gráfica para subir, descargar y mover blobs entre cuentas de almacenamiento. ¿Qué debe usar?",
          options: ["AzCopy", "Explorador de Azure Storage", "Azure File Sync", "Azure Data Box"],
          explain: "El Explorador de Storage es una aplicación gráfica independiente para Windows, macOS y Linux que usa AzCopy por detrás."
        }
      },
      {
        type: "single",
        topic: "Storage services",
        q: "A migrated application needs a managed SMB file share that Windows, Linux and macOS clients can mount, with no servers to patch. What should you use?",
        options: ["Azure Files", "Azure Disks", "Azure Tables", "Azure Queues"],
        answer: 0,
        explain: "Azure Files offers fully managed SMB and NFS shares; SMB shares are reachable from Windows, Linux and macOS.",
        es: {
          topic: "Servicios de almacenamiento",
          q: "Una aplicación migrada necesita un recurso compartido SMB administrado que puedan montar clientes Windows, Linux y macOS, sin servidores a los que aplicar parches. ¿Qué debe usar?",
          options: ["Azure Files", "Azure Disks", "Azure Tables", "Azure Queues"],
          explain: "Azure Files ofrece recursos compartidos SMB y NFS totalmente administrados; los SMB son accesibles desde Windows, Linux y macOS."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "Storage accounts", s: "Standard general-purpose v2 accounts support all six redundancy options.", answer: true, explain: "LRS, GRS, RA-GRS, ZRS, GZRS and RA-GZRS." },
          { topic: "File movement", s: "AzCopy can be configured to move files to and from other cloud providers.", answer: true, explain: "The unit mentions this capability." },
          { topic: "Storage redundancy", s: "There is an SLA for how long it takes to replicate data to the secondary region.", answer: false, explain: "RPO is typically under 15 minutes, but there's no SLA on replication time." }
        ],
        es: {
          statements: [
            { topic: "Cuentas de almacenamiento", s: "Las cuentas Estándar de uso general v2 admiten las seis opciones de redundancia.", explain: "LRS, GRS, RA-GRS, ZRS, GZRS y RA-GZRS." },
            { topic: "Movimiento de archivos", s: "AzCopy se puede configurar para mover archivos desde y hacia otros proveedores de nube.", explain: "La unidad menciona esa capacidad." },
            { topic: "Redundancia del almacenamiento", s: "Existe un SLA sobre el tiempo que tarda la replicación de datos a la región secundaria.", explain: "El RPO suele ser inferior a 15 minutos, pero no hay SLA sobre el tiempo de replicación." }
          ]
        }
      }
    ]
  },
  units: [
    {
      id: "storage-accounts",
      name: "Describe Azure storage accounts",
      es: { name: "Descripción de las cuentas de almacenamiento de Azure" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/2-accounts",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "single",
            q: "Which of the following is a valid storage account name?",
            options: ["contosodata2026", "Contoso-Data", "cd", "contoso_data_storage_account_2026"],
            answer: 0,
            explain: "Names must be 3 to 24 characters and use only lowercase letters and numbers. The others use uppercase, hyphens or underscores, or are too short or too long.",
            es: {
              q: "¿Cuál de los siguientes es un nombre de cuenta de almacenamiento válido?",
              options: ["contosodata2026", "Contoso-Data", "cd", "contoso_data_storage_account_2026"],
              explain: "Los nombres deben tener entre 3 y 24 caracteres y usar solo letras minúsculas y números. Los demás usan mayúsculas, guiones o guiones bajos, o son demasiado cortos o largos."
            }
          },
          {
            type: "match",
            q: "Match each scenario to the storage account type recommended for it.",
            values: ["Standard general-purpose v2", "Premium block blobs", "Premium file shares", "Premium page blobs"],
            targets: [
              { t: "Most scenarios using blobs, file shares, queues and tables", answer: 0 },
              { t: "High transaction rates and consistently low latency for block blobs", answer: 1 },
              { t: "A file-shares-only account supporting both SMB and NFS", answer: 2 },
              { t: "An account for page blobs only", answer: 3 }
            ],
            explain: "General-purpose v2 is the default recommendation; the premium types target block blobs, file shares or page blobs specifically.",
            es: {
              q: "Relacione cada escenario con el tipo de cuenta de almacenamiento recomendado.",
              values: ["Estándar de uso general v2", "Blobs en bloques prémium", "Recursos compartidos de archivos prémium", "Blobs en páginas prémium"],
              targets: [
                { t: "La mayoría de los escenarios con blobs, recursos compartidos, colas y tablas" },
                { t: "Altas tasas de transacciones y latencia baja y constante para blobs en bloques" },
                { t: "Una cuenta solo de recursos compartidos de archivos que admite SMB y NFS" },
                { t: "Una cuenta solo para blobs en páginas" }
              ],
              explain: "Uso general v2 es la recomendación predeterminada; los tipos prémium apuntan específicamente a blobs en bloques, recursos compartidos de archivos o blobs en páginas."
            }
          },
          {
            type: "single",
            q: "What is the endpoint format for Queue Storage in a storage account named contoso?",
            options: [
              "https://contoso.queue.core.windows.net",
              "https://queue.contoso.core.windows.net",
              "https://contoso.blob.core.windows.net/queue",
              "https://core.windows.net/contoso/queue"
            ],
            answer: 0,
            explain: "Endpoints combine the account name and the service: <account>.blob, .dfs, .file, .queue or .table followed by core.windows.net.",
            es: {
              q: "¿Cuál es el formato del punto de conexión de Queue Storage en una cuenta de almacenamiento llamada contoso?",
              options: [
                "https://contoso.queue.core.windows.net",
                "https://queue.contoso.core.windows.net",
                "https://contoso.blob.core.windows.net/queue",
                "https://core.windows.net/contoso/queue"
              ],
              explain: "Los puntos de conexión combinan el nombre de la cuenta y el servicio: <cuenta>.blob, .dfs, .file, .queue o .table seguido de core.windows.net."
            }
          },
          {
            type: "single",
            q: "A team needs Network File System (NFS) support in Azure Files. Which storage account type should it use?",
            options: ["Standard general-purpose v2", "Premium file shares", "Premium page blobs", "Premium block blobs"],
            answer: 1,
            explain: "For NFS support in Azure Files, use the premium file shares account type.",
            es: {
              q: "Un equipo necesita compatibilidad con el sistema de archivos de red (NFS) en Azure Files. ¿Qué tipo de cuenta de almacenamiento debe usar?",
              options: ["Estándar de uso general v2", "Recursos compartidos de archivos prémium", "Blobs en páginas prémium", "Blobs en bloques prémium"],
              explain: "Para usar NFS en Azure Files, se usa el tipo de cuenta de recursos compartidos de archivos prémium."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about storage accounts.",
            parts: [
              "The storage account ",
              { options: ["type", "region", "resource group"], answer: 0 },
              " determines the available storage services and redundancy options, and every account name must be unique ",
              { options: ["within Azure", "within the subscription", "within the resource group"], answer: 0 },
              "."
            ],
            explain: "The account type drives services and redundancy. Names must be unique across Azure to provide a unique namespace and endpoints.",
            es: {
              q: "Complete la afirmación sobre las cuentas de almacenamiento.",
              parts: [
                "El ",
                { options: ["tipo", "región", "grupo de recursos"] },
                " de la cuenta de almacenamiento determina los servicios y las opciones de redundancia disponibles, y cada nombre de cuenta debe ser único ",
                { options: ["en todo Azure", "dentro de la suscripción", "dentro del grupo de recursos"] },
                "."
              ],
              explain: "El tipo de cuenta define los servicios y la redundancia. Los nombres deben ser únicos en Azure para ofrecer un espacio de nombres y puntos de conexión únicos."
            }
          },
          {
            type: "multi",
            q: "Which two redundancy options are available for a Premium block blobs account?",
            options: ["LRS", "ZRS", "GRS", "GZRS", "RA-GRS"],
            answers: [0, 1],
            explain: "Premium block blobs and premium file shares support LRS and ZRS. Geo-redundant options are available on Standard general-purpose v2.",
            es: {
              q: "¿Cuáles son dos opciones de redundancia disponibles para una cuenta de blobs en bloques prémium?",
              options: ["LRS", "ZRS", "GRS", "GZRS", "RA-GRS"],
              explain: "Los blobs en bloques prémium y los recursos compartidos prémium admiten LRS y ZRS. Las opciones geográficas están en Estándar de uso general v2."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Data in a storage account is accessible from anywhere in the world over HTTP or HTTPS.", answer: true, explain: "The account provides a unique, globally reachable namespace." },
              { s: "Storage account names can include uppercase letters.", answer: false, explain: "Only lowercase letters and numbers are allowed." },
              { s: "Data Lake Storage Gen2 uses an endpoint ending in dfs.core.windows.net.", answer: true, explain: "Blob uses .blob, Data Lake Gen2 uses .dfs." }
            ],
            es: {
              statements: [
                { s: "Los datos de una cuenta de almacenamiento son accesibles desde cualquier parte del mundo por HTTP o HTTPS.", explain: "La cuenta proporciona un espacio de nombres único y accesible globalmente." },
                { s: "Los nombres de las cuentas de almacenamiento pueden incluir mayúsculas.", explain: "Solo se permiten letras minúsculas y números." },
                { s: "Data Lake Storage Gen2 usa un punto de conexión que termina en dfs.core.windows.net.", explain: "Blob usa .blob, Data Lake Gen2 usa .dfs." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "storage-redundancy",
      name: "Describe Azure storage redundancy",
      es: { name: "Descripción de la redundancia de Azure Storage" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/3-redundancy",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "single",
            q: "You need the lowest-cost redundancy option that protects against server rack and drive failures within one datacenter. Which should you choose?",
            options: ["LRS", "ZRS", "GRS", "GZRS"],
            answer: 0,
            explain: "LRS keeps three copies in a single datacenter at the lowest cost. A datacenter-level disaster could still cause data loss.",
            es: {
              q: "Necesita la opción de redundancia de menor costo que proteja ante fallas de racks de servidores y discos dentro de un centro de datos. ¿Cuál debe elegir?",
              options: ["LRS", "ZRS", "GRS", "GZRS"],
              explain: "LRS mantiene tres copias en un solo centro de datos al menor costo. Un desastre a nivel de centro de datos igual podría causar pérdida de datos."
            }
          },
          {
            type: "match",
            q: "Match each description to the redundancy option.",
            values: ["LRS", "ZRS", "GRS", "GZRS"],
            targets: [
              { t: "Three copies within a single datacenter", answer: 0 },
              { t: "Synchronous copies across three availability zones in the primary region", answer: 1 },
              { t: "LRS in the primary region plus asynchronous replication to LRS in a secondary region", answer: 2 },
              { t: "ZRS in the primary region plus replication to LRS in a secondary region", answer: 3 }
            ],
            explain: "LRS and ZRS stay in the primary region; GRS and GZRS add a geographically distant secondary region.",
            es: {
              q: "Relacione cada descripción con la opción de redundancia.",
              values: ["LRS", "ZRS", "GRS", "GZRS"],
              targets: [
                { t: "Tres copias dentro de un solo centro de datos" },
                { t: "Copias síncronas en tres zonas de disponibilidad de la región primaria" },
                { t: "LRS en la región primaria más replicación asíncrona a LRS en una región secundaria" },
                { t: "ZRS en la región primaria más replicación a LRS en una región secundaria" }
              ],
              explain: "LRS y ZRS se quedan en la región primaria; GRS y GZRS suman una región secundaria geográficamente distante."
            }
          },
          {
            type: "single",
            q: "An application must be able to read its data from the secondary region even while the primary region is available. Which option enables this?",
            options: ["GRS", "RA-GRS", "ZRS", "LRS"],
            answer: 1,
            explain: "By default, secondary data isn't readable until failover. Read-access geo-redundant storage (RA-GRS) or RA-GZRS lets you read it beforehand.",
            es: {
              q: "Una aplicación debe poder leer sus datos desde la región secundaria incluso mientras la región primaria está disponible. ¿Qué opción lo permite?",
              options: ["GRS", "RA-GRS", "ZRS", "LRS"],
              explain: "De forma predeterminada, los datos secundarios no se pueden leer hasta la conmutación por error. El almacenamiento con redundancia geográfica con acceso de lectura (RA-GRS) o RA-GZRS permite leerlos antes."
            }
          },
          {
            type: "single",
            q: "Which redundancy option does Microsoft recommend for workloads that need maximum consistency, availability and disaster recovery resilience?",
            options: ["LRS", "ZRS", "GRS", "GZRS"],
            answer: 3,
            explain: "GZRS combines zone resilience in the primary region with geo-replication, and is Microsoft's recommendation for maximum resilience.",
            es: {
              q: "¿Qué opción de redundancia recomienda Microsoft para cargas que necesitan la máxima coherencia, disponibilidad y resiliencia ante desastres?",
              options: ["LRS", "ZRS", "GRS", "GZRS"],
              explain: "GZRS combina la resiliencia por zonas en la región primaria con la replicación geográfica, y es la recomendación de Microsoft para la máxima resiliencia."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about replication to the secondary region.",
            parts: [
              "Data is replicated to the secondary region ",
              { options: ["synchronously", "asynchronously", "manually"], answer: 1 },
              ", and Azure Storage typically has a recovery point objective (RPO) of ",
              { options: ["less than 15 minutes", "exactly 1 second", "1 hour, guaranteed by SLA"], answer: 0 },
              "."
            ],
            explain: "Asynchronous replication means a primary-region failure can lose recent writes. RPO is typically under 15 minutes, with no SLA on replication time.",
            es: {
              q: "Complete la afirmación sobre la replicación en la región secundaria.",
              parts: [
                "Los datos se replican en la región secundaria de forma ",
                { options: ["síncrona", "asíncrona", "manual"] },
                ", y Azure Storage suele tener un objetivo de punto de recuperación (RPO) de ",
                { options: ["menos de 15 minutos", "exactamente 1 segundo", "1 hora, garantizada por SLA"] },
                "."
              ],
              explain: "La replicación asíncrona implica que una falla en la región primaria puede perder las escrituras recientes. El RPO suele ser menor a 15 minutos, sin SLA sobre el tiempo de replicación."
            }
          },
          {
            type: "multi",
            q: "Which two redundancy options keep data replicated only within the primary region?",
            options: ["LRS", "ZRS", "GRS", "GZRS", "RA-GZRS"],
            answers: [0, 1],
            explain: "LRS and ZRS are the primary-region options. GRS, GZRS and their read-access variants replicate to a secondary region.",
            es: {
              q: "¿Cuáles son dos opciones de redundancia que replican los datos solo dentro de la región primaria?",
              options: ["LRS", "ZRS", "GRS", "GZRS", "RA-GZRS"],
              explain: "LRS y ZRS son las opciones de la región primaria. GRS, GZRS y sus variantes con acceso de lectura replican en una región secundaria."
            }
          },
          {
            type: "single",
            q: "A company needs high availability within a region, and its data replication must stay within one country. Which option does Microsoft recommend?",
            options: ["ZRS", "GRS", "RA-GZRS", "LRS"],
            answer: 0,
            explain: "Microsoft recommends ZRS for high availability in-region and for requirements that keep replication within a country or region.",
            es: {
              q: "Una empresa necesita alta disponibilidad dentro de una región, y la replicación de sus datos debe quedarse dentro de un país. ¿Qué opción recomienda Microsoft?",
              options: ["ZRS", "GRS", "RA-GZRS", "LRS"],
              explain: "Microsoft recomienda ZRS para alta disponibilidad dentro de la región y para requisitos que mantienen la replicación dentro de un país o región."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Data in Azure Storage is always replicated three times in the primary region.", answer: true, explain: "Both LRS and ZRS keep three copies in the primary region." },
              { s: "By default, data in the secondary region can be read without a failover.", answer: false, explain: "You need RA-GRS or RA-GZRS to read secondary data before failover." },
              { s: "With ZRS, data remains available for reads and writes if one availability zone becomes unavailable.", answer: true, explain: "Azure handles networking updates such as DNS repointing during recovery." }
            ],
            es: {
              statements: [
                { s: "Los datos de Azure Storage siempre se replican tres veces en la región primaria.", explain: "Tanto LRS como ZRS mantienen tres copias en la región primaria." },
                { s: "De forma predeterminada, los datos de la región secundaria se pueden leer sin conmutación por error.", explain: "Se necesita RA-GRS o RA-GZRS para leer los datos secundarios antes de la conmutación." },
                { s: "Con ZRS, los datos siguen disponibles para lectura y escritura si una zona de disponibilidad deja de estar disponible.", explain: "Azure se ocupa de actualizaciones de red como el redireccionamiento de DNS durante la recuperación." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "storage-services",
      name: "Describe Azure storage services",
      es: { name: "Descripción de los servicios de almacenamiento de Azure" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/4-describe-azure-storage-services",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "match",
            q: "Match each requirement to the Azure Storage service that fits it.",
            values: ["Azure Blobs", "Azure Files", "Azure Queues", "Azure Disks"],
            targets: [
              { t: "Streaming video and audio to browsers", answer: 0 },
              { t: "An SMB share mounted concurrently by on-premises and cloud servers", answer: 1 },
              { t: "Messages passed between application components for asynchronous processing", answer: 2 },
              { t: "Block-level volumes for Azure VMs", answer: 3 }
            ],
            explain: "Blobs store unstructured objects such as media; Files provides managed shares; Queues hold messages; Disks back VMs.",
            es: {
              q: "Relacione cada requisito con el servicio de Azure Storage que le corresponde.",
              values: ["Azure Blobs", "Azure Files", "Azure Queues", "Azure Disks"],
              targets: [
                { t: "Transmitir video y audio a navegadores" },
                { t: "Un recurso compartido SMB montado al mismo tiempo por servidores locales y en la nube" },
                { t: "Mensajes entre componentes de una aplicación para procesamiento asíncrono" },
                { t: "Volúmenes a nivel de bloque para máquinas virtuales de Azure" }
              ],
              explain: "Blobs guarda objetos no estructurados como multimedia; Files ofrece recursos compartidos administrados; Queues guarda mensajes; Disks respalda las máquinas virtuales."
            }
          },
          {
            type: "single",
            q: "Customer invoices are accessed infrequently and stored for at least 30 days. Which blob access tier is the best fit?",
            options: ["Hot", "Cool", "Archive", "Premium"],
            answer: 1,
            explain: "The cool tier is optimized for infrequently accessed data stored at least 30 days; invoices are the unit's example.",
            es: {
              q: "Las facturas de los clientes se consultan con poca frecuencia y se guardan al menos 30 días. ¿Qué nivel de acceso de blobs es el más adecuado?",
              options: ["Frecuente", "Esporádico", "Archivo", "Prémium"],
              explain: "El nivel esporádico está optimizado para datos de acceso infrecuente guardados al menos 30 días; las facturas son el ejemplo de la unidad."
            }
          },
          {
            type: "single",
            q: "Which blob access tier can't be set at the storage account level?",
            options: ["Hot", "Cool", "Cold", "Archive"],
            answer: 3,
            explain: "Hot, cool and cold can be set at the account level; archive can only be set at the blob level.",
            es: {
              q: "¿Qué nivel de acceso de blobs no se puede establecer a nivel de cuenta de almacenamiento?",
              options: ["Frecuente", "Esporádico", "Poco frecuente", "Archivo"],
              explain: "Los niveles frecuente, esporádico y poco frecuente se pueden establecer a nivel de cuenta; el de archivo solo a nivel de blob."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about the archive access tier.",
            parts: [
              "The archive tier has the ",
              { options: ["highest", "lowest", "same"], answer: 1 },
              " storage cost of all tiers, and the ",
              { options: ["lowest", "highest", "no"], answer: 1 },
              " rehydration latency and access cost."
            ],
            explain: "Archive trades cheap storage for slow, costly retrieval, which suits rarely accessed long-term data.",
            es: {
              q: "Complete la afirmación sobre el nivel de acceso de archivo.",
              parts: [
                "El nivel de archivo tiene el ",
                { options: ["mayor", "menor", "mismo"] },
                " costo de almacenamiento de todos los niveles, y la ",
                { options: ["menor", "mayor", "nula"] },
                " latencia de rehidratación y costo de acceso."
              ],
              explain: "El nivel de archivo cambia almacenamiento barato por una recuperación lenta y costosa, lo que sirve para datos a largo plazo que rara vez se consultan."
            }
          },
          {
            type: "single",
            q: "A team needs to store large amounts of structured, non-relational data in a NoSQL store. Which service fits?",
            options: ["Azure Tables", "Azure Disks", "Azure Queues", "Azure Files"],
            answer: 0,
            explain: "Azure Table storage is a NoSQL store for structured, non-relational data.",
            es: {
              q: "Un equipo necesita guardar grandes cantidades de datos estructurados no relacionales en un almacén NoSQL. ¿Qué servicio corresponde?",
              options: ["Azure Tables", "Azure Disks", "Azure Queues", "Azure Files"],
              explain: "Azure Table Storage es un almacén NoSQL para datos estructurados no relacionales."
            }
          },
          {
            type: "multi",
            q: "Which two are benefits of Azure Storage?",
            options: [
              "All data written to a storage account is encrypted by the service",
              "Azure handles hardware maintenance, updates and critical issues",
              "Data is only accessible from inside Azure",
              "Customers patch the storage servers themselves",
              "Storage can't scale beyond a single region"
            ],
            answers: [0, 1],
            explain: "Azure Storage is durable, secure (encrypted by default), scalable, managed and accessible globally over HTTP or HTTPS.",
            es: {
              q: "¿Cuáles son dos ventajas de Azure Storage?",
              options: [
                "Todos los datos escritos en una cuenta de almacenamiento los cifra el servicio",
                "Azure se ocupa del mantenimiento del hardware, las actualizaciones y los problemas críticos",
                "Los datos solo son accesibles desde dentro de Azure",
                "Los clientes aplican parches a los servidores de almacenamiento",
                "El almacenamiento no puede escalar más allá de una región"
              ],
              explain: "Azure Storage es duradero, seguro (cifrado por defecto), escalable, administrado y accesible globalmente por HTTP o HTTPS."
            }
          },
          {
            type: "single",
            q: "Messages placed in Azure Queue storage need to trigger background actions automatically. Which service is commonly paired with Queue storage for this?",
            options: ["Azure Functions", "Azure Data Box", "Azure DNS", "Azure Virtual Desktop"],
            answer: 0,
            explain: "Queue storage is commonly paired with Azure Functions so messages trigger background actions.",
            es: {
              q: "Los mensajes que se colocan en Azure Queue Storage deben activar acciones en segundo plano automáticamente. ¿Qué servicio suele combinarse con Queue Storage para esto?",
              options: ["Azure Functions", "Azure Data Box", "Azure DNS", "Azure Virtual Desktop"],
              explain: "Queue Storage suele combinarse con Azure Functions para que los mensajes activen acciones en segundo plano."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "NFS Azure file shares are accessible from Windows clients.", answer: false, explain: "NFS shares are accessible from Linux or macOS; SMB shares work on Windows, Linux and macOS." },
              { s: "The cool and cold tiers have lower storage costs but higher access costs than the hot tier.", answer: true, explain: "They also have lower availability SLAs." },
              { s: "Blob access tiers can be set at the blob level, during or after upload.", answer: true, explain: "All four tiers can be set per blob." }
            ],
            es: {
              statements: [
                { s: "Los recursos compartidos NFS de Azure Files son accesibles desde clientes Windows.", explain: "Los recursos NFS son accesibles desde Linux o macOS; los SMB funcionan en Windows, Linux y macOS." },
                { s: "Los niveles esporádico y poco frecuente tienen menor costo de almacenamiento pero mayor costo de acceso que el nivel frecuente.", explain: "También tienen SLA de disponibilidad más bajos." },
                { s: "Los niveles de acceso de blobs se pueden establecer a nivel de blob, durante o después de la carga.", explain: "Los cuatro niveles se pueden establecer por blob." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "data-migration",
      name: "Identify Azure data migration options",
      es: { name: "Identificación de las opciones de migración de datos de Azure" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/6-identify-azure-data-migration-options",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "single",
            q: "A company must move about 60 TB of data to Azure, and its network bandwidth is limited. Which option fits best?",
            options: ["Azure Migrate: Server Migration", "Azure Data Box", "AzCopy over the internet", "Azure File Sync"],
            answer: 1,
            explain: "Data Box is ideal for very large data sets, often tens of terabytes, when bandwidth is limited.",
            es: {
              q: "Una empresa debe trasladar unos 60 TB de datos a Azure y su ancho de banda de red es limitado. ¿Qué opción es la más adecuada?",
              options: ["Azure Migrate: Migración de servidores", "Azure Data Box", "AzCopy por internet", "Azure File Sync"],
              explain: "Data Box es ideal para conjuntos de datos muy grandes, a menudo decenas de terabytes, cuando el ancho de banda es limitado."
            }
          },
          {
            type: "single",
            q: "A company wants a single portal to assess its on-premises servers, databases and web apps and then migrate them to Azure. What should it use?",
            options: ["Azure Data Box", "Azure Migrate", "Azure Storage Explorer", "AzCopy"],
            answer: 1,
            explain: "Azure Migrate is a hub for discovery, assessment and migration, with integrated tools for servers, databases and web apps.",
            es: {
              q: "Una empresa quiere un único portal para evaluar sus servidores, bases de datos y aplicaciones web locales y luego migrarlos a Azure. ¿Qué debe usar?",
              options: ["Azure Data Box", "Azure Migrate", "Explorador de Azure Storage", "AzCopy"],
              explain: "Azure Migrate es un centro de detección, evaluación y migración, con herramientas integradas para servidores, bases de datos y aplicaciones web."
            }
          },
          {
            type: "match",
            q: "Match each description to the migration option.",
            values: ["Azure Migrate", "Azure Data Box"],
            targets: [
              { t: "Real-time migration of infrastructure, applications and data", answer: 0 },
              { t: "A rugged physical device delivered by a regional carrier", answer: 1 },
              { t: "Discovery and assessment tools in a central hub", answer: 0 },
              { t: "Exporting large data sets from Azure for regulatory needs", answer: 1 }
            ],
            explain: "Azure Migrate is the online, real-time path; Data Box is the physical, offline path for bulk import or export.",
            es: {
              q: "Relacione cada descripción con la opción de migración.",
              values: ["Azure Migrate", "Azure Data Box"],
              targets: [
                { t: "Migración en tiempo real de infraestructura, aplicaciones y datos" },
                { t: "Un dispositivo físico resistente entregado por un transportista regional" },
                { t: "Herramientas de detección y evaluación en un centro unificado" },
                { t: "Exportar grandes conjuntos de datos desde Azure por necesidades regulatorias" }
              ],
              explain: "Azure Migrate es la vía en línea y en tiempo real; Data Box es la vía física y sin conexión para importaciones o exportaciones masivas."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about Azure Data Box.",
            parts: [
              "A Data Box device has a maximum usable storage capacity of ",
              { options: ["8 terabytes", "80 terabytes", "800 terabytes"], answer: 1 },
              ", and after an import its disks are wiped in accordance with ",
              { options: ["NIST 800-88r1", "ISO 27001", "SOC 2"], answer: 0 },
              " standards."
            ],
            explain: "Data Box holds up to 80 TB usable, and disks are wiped following NIST 800-88r1 once the import is uploaded.",
            es: {
              q: "Complete la afirmación sobre Azure Data Box.",
              parts: [
                "Un dispositivo Data Box tiene una capacidad de almacenamiento utilizable máxima de ",
                { options: ["8 terabytes", "80 terabytes", "800 terabytes"] },
                ", y después de una importación sus discos se borran según los estándares ",
                { options: ["NIST 800-88r1", "ISO 27001", "SOC 2"] },
                "."
              ],
              explain: "Data Box admite hasta 80 TB utilizables, y los discos se borran según NIST 800-88r1 una vez que se cargan los datos importados."
            }
          },
          {
            type: "multi",
            q: "Which two are common Azure Data Box scenarios?",
            options: [
              "One-time bulk migration of on-premises data to Azure",
              "Periodic large uploads where online transfer is too slow",
              "Real-time replication of a production database",
              "Bi-directional synchronization of a file server",
              "Copying a single file from the command line"
            ],
            answers: [0, 1],
            explain: "Data Box handles bulk one-time migrations, periodic large uploads and large exports. Real-time sync and single-file copies use other tools.",
            es: {
              q: "¿Cuáles son dos escenarios habituales de Azure Data Box?",
              options: [
                "Una migración masiva única de datos locales a Azure",
                "Cargas grandes periódicas cuando la transferencia en línea es demasiado lenta",
                "La replicación en tiempo real de una base de datos de producción",
                "La sincronización bidireccional de un servidor de archivos",
                "Copiar un solo archivo desde la línea de comandos"
              ],
              explain: "Data Box sirve para migraciones masivas únicas, cargas grandes periódicas y exportaciones grandes. La sincronización en tiempo real y las copias de archivos sueltos usan otras herramientas."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Azure Migrate integrates with independent software vendor (ISV) offerings.", answer: true, explain: "It integrates with other Azure services and with ISV tools." },
              { s: "You order an Azure Data Box device through the Azure portal.", answer: true, explain: "The whole process is tracked end to end in the portal." },
              { s: "Azure Data Box can only import data into Azure, not export it.", answer: false, explain: "Data Box supports both import and export orders." }
            ],
            es: {
              statements: [
                { s: "Azure Migrate se integra con ofertas de proveedores de software independientes (ISV).", explain: "Se integra con otros servicios de Azure y con herramientas de ISV." },
                { s: "Un dispositivo Azure Data Box se pide a través de Azure Portal.", explain: "Todo el proceso se sigue de principio a fin en el portal." },
                { s: "Azure Data Box solo puede importar datos a Azure, no exportarlos.", explain: "Data Box admite pedidos de importación y de exportación." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "file-movement",
      name: "Identify Azure file movement options",
      es: { name: "Identificación de las opciones de movimiento de archivos de Azure" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/7-identify-azure-file-movement-options",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "match",
            q: "Match each description to the file movement tool.",
            values: ["AzCopy", "Azure Storage Explorer", "Azure File Sync"],
            targets: [
              { t: "Command-line copy and one-direction synchronization", answer: 0 },
              { t: "A graphical app for Windows, macOS and Linux", answer: 1 },
              { t: "Bi-directional sync between a Windows Server and Azure Files", answer: 2 },
              { t: "Scripted file transfers to and from other cloud providers", answer: 0 }
            ],
            explain: "AzCopy is the CLI (including multi-cloud), Storage Explorer is the GUI built on AzCopy, and File Sync keeps Windows servers and Azure Files in sync.",
            es: {
              q: "Relacione cada descripción con la herramienta de movimiento de archivos.",
              values: ["AzCopy", "Explorador de Azure Storage", "Azure File Sync"],
              targets: [
                { t: "Copia por línea de comandos y sincronización en un solo sentido" },
                { t: "Una aplicación gráfica para Windows, macOS y Linux" },
                { t: "Sincronización bidireccional entre un servidor Windows y Azure Files" },
                { t: "Transferencias de archivos con scripts desde y hacia otros proveedores de nube" }
              ],
              explain: "AzCopy es la CLI (también entre nubes), el Explorador de Storage es la interfaz gráfica basada en AzCopy, y File Sync mantiene sincronizados los servidores Windows con Azure Files."
            }
          },
          {
            type: "single",
            q: "You use AzCopy to synchronize a folder with a blob container. How does the synchronization work?",
            options: [
              "Bi-directionally, based on timestamps",
              "In one direction, from the source you designate to the destination",
              "Bi-directionally, based on file metadata",
              "Only when triggered by Azure File Sync"
            ],
            answer: 1,
            explain: "AzCopy sync is one-direction: you choose source and destination. It doesn't sync bi-directionally.",
            es: {
              q: "Usa AzCopy para sincronizar una carpeta con un contenedor de blobs. ¿Cómo funciona la sincronización?",
              options: [
                "En ambos sentidos, según las marcas de tiempo",
                "En un solo sentido, desde el origen que designe hacia el destino",
                "En ambos sentidos, según los metadatos de los archivos",
                "Solo cuando la activa Azure File Sync"
              ],
              explain: "La sincronización de AzCopy es en un solo sentido: usted elige origen y destino. No sincroniza en ambos sentidos."
            }
          },
          {
            type: "single",
            q: "A company wants frequently accessed files to stay on its local Windows server while infrequently accessed files are kept in Azure until requested. Which Azure File Sync feature provides this?",
            options: ["Cloud tiering", "One-direction sync", "Data Box import", "Alias records"],
            answer: 0,
            explain: "Cloud tiering keeps the most frequently accessed files local and leaves the rest in the cloud until someone needs them.",
            es: {
              q: "Una empresa quiere que los archivos más usados queden en su servidor Windows local mientras los poco usados se guardan en Azure hasta que se soliciten. ¿Qué característica de Azure File Sync lo permite?",
              options: ["La organización en niveles en la nube", "La sincronización en un solo sentido", "La importación con Data Box", "Los registros de alias"],
              explain: "La organización en niveles en la nube mantiene locales los archivos más usados y deja el resto en la nube hasta que alguien los necesite."
            }
          },
          {
            type: "single",
            q: "What does Azure Storage Explorer use behind the scenes to perform file and blob management tasks?",
            options: ["Azure File Sync", "AzCopy", "Azure Data Box", "Azure Migrate"],
            answer: 1,
            explain: "Storage Explorer is a GUI that uses AzCopy on the back end.",
            es: {
              q: "¿Qué usa por detrás el Explorador de Azure Storage para realizar las tareas de administración de archivos y blobs?",
              options: ["Azure File Sync", "AzCopy", "Azure Data Box", "Azure Migrate"],
              explain: "El Explorador de Storage es una interfaz gráfica que usa AzCopy internamente."
            }
          },
          {
            type: "multi",
            q: "Which two can you do with Azure File Sync?",
            options: [
              "Access data locally using protocols available on Windows Server, such as SMB, NFS and FTPS",
              "Replace a failed local server by installing Azure File Sync on a new server in the same datacenter",
              "Copy blobs between two cloud providers from the command line",
              "Ship data offline on a physical device",
              "Run it only on Linux servers"
            ],
            answers: [0, 1],
            explain: "File Sync supports local access with Windows Server protocols, many caches worldwide, easy server replacement and cloud tiering.",
            es: {
              q: "¿Cuáles son dos cosas que se pueden hacer con Azure File Sync?",
              options: [
                "Acceder a los datos localmente con los protocolos disponibles en Windows Server, como SMB, NFS y FTPS",
                "Reemplazar un servidor local que falló instalando Azure File Sync en un servidor nuevo del mismo centro de datos",
                "Copiar blobs entre dos proveedores de nube desde la línea de comandos",
                "Enviar datos sin conexión en un dispositivo físico",
                "Ejecutarlo solo en servidores Linux"
              ],
              explain: "File Sync admite el acceso local con protocolos de Windows Server, muchas cachés en todo el mundo, reemplazo sencillo de servidores y organización en niveles en la nube."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "AzCopy synchronizes files bi-directionally based on timestamps.", answer: false, explain: "AzCopy sync is one-direction only." },
              { s: "With Azure File Sync, you can have as many caches as you need across the world.", answer: true, explain: "That's one of its listed capabilities." },
              { s: "Azure Storage Explorer can move files between storage accounts.", answer: true, explain: "It can upload, download and move between accounts." }
            ],
            es: {
              statements: [
                { s: "AzCopy sincroniza archivos en ambos sentidos según las marcas de tiempo.", explain: "La sincronización de AzCopy es solo en un sentido." },
                { s: "Con Azure File Sync se pueden tener tantas cachés como se necesiten en todo el mundo.", explain: "Es una de sus capacidades listadas." },
                { s: "El Explorador de Azure Storage puede mover archivos entre cuentas de almacenamiento.", explain: "Puede subir, descargar y mover entre cuentas." }
              ]
            }
          }
        ]
      }
    }
  ]
});
