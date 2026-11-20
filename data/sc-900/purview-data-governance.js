// SC-900 > Introduction to Microsoft Purview and Microsoft's privacy principles > Describe the data governance solutions of Microsoft Purview
Catalog.module("sc-900", {
  id: "purview-data-governance",
  name: "Describe the data governance solutions of Microsoft Purview",
  es: { name: "Descripción de las soluciones de gobierno de datos de Microsoft Purview" },
  url: "https://learn.microsoft.com/en-us/training/modules/describe-purview-data-governance/",
  quiz: {
    added: "2026-11-19",
    items: [
      {
        type: "single",
        topic: "Unified Catalog",
        q: "Data consumers keep missing half the tables a churn model depends on, even though each table has a glossary term. What should the model's owner create so consumers get everything in one place?",
        options: ["A data product listing all the related assets", "A critical data element mapped to every table in the model", "A new collection in Data Map", "An OKR linked to the governance domain"],
        answer: 0,
        explain: "A data product groups associated assets with a description and use case, so consumers find everything they need in one place.",
        es: {
          topic: "Catálogo unificado",
          q: "Los consumidores de datos no encuentran la mitad de las tablas de las que depende un modelo de abandono, aunque cada tabla tiene un término del glosario. ¿Qué debe crear el responsable del modelo para que encuentren todo en un solo lugar?",
          options: ["Un producto de datos que enumere todos los recursos relacionados", "Un elemento de datos crítico asignado a cada tabla del modelo", "Una colección nueva en Data Map", "Un OKR vinculado al dominio de gobernanza"],
          explain: "Un producto de datos agrupa los recursos asociados con una descripción y un caso de uso, para que los consumidores encuentren todo en un lugar."
        }
      },
      {
        type: "match",
        topic: "Data governance",
        q: "Match each data role to its responsibility.",
        values: ["Data consumer", "Data owner", "Data steward", "Central data office"],
        targets: [
          { t: "Finds trusted datasets and requests access to them", answer: 0 },
          { t: "Registers assets and manages their classifications and access", answer: 1 },
          { t: "Keeps glossary consistency, discovery and lineage in good shape", answer: 2 },
          { t: "Sets governance policies and tracks overall governance health", answer: 3 }
        ],
        explain: "Federated governance spreads these responsibilities across the business.",
        es: {
          topic: "Gobernanza de datos",
          q: "Relacione cada rol de datos con su responsabilidad.",
          values: ["Consumidor de datos", "Propietario de datos", "Administrador de datos (steward)", "Oficina central de datos"],
          targets: [
            { t: "Encuentra conjuntos de datos confiables y solicita acceso" },
            { t: "Registra recursos y administra sus clasificaciones y su acceso" },
            { t: "Mantiene la coherencia del glosario, la detección y el linaje" },
            { t: "Define las directivas de gobernanza y sigue la salud general de la gobernanza" }
          ],
          explain: "La gobernanza federada reparte estas responsabilidades en todo el negocio."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "Data Map", s: "A Data Map reader role grants access to the underlying data in a scanned database.", answer: false, explain: "Data Map holds only metadata; no Data Map role gives access to the actual data." },
          { topic: "Data Map", s: "Data Map can scan sources in AWS, Google Cloud and on-premises datacenters.", answer: true, explain: "It supports multicloud and hybrid environments." },
          { topic: "Unified Catalog", s: "A data product can be managed by several governance domains at once.", answer: false, explain: "It's managed by a single domain, though discoverable across many." }
        ],
        es: {
          statements: [
            { topic: "Data Map", s: "Un rol de lector de Data Map da acceso a los datos de una base analizada.", explain: "Data Map solo guarda metadatos; ningún rol de Data Map da acceso a los datos reales." },
            { topic: "Data Map", s: "Data Map puede analizar orígenes en AWS, Google Cloud y centros de datos locales.", explain: "Admite entornos multinube e híbridos." },
            { topic: "Catálogo unificado", s: "Un producto de datos puede administrarse desde varios dominios de gobernanza a la vez.", explain: "Lo administra un solo dominio, aunque se puede descubrir desde muchos." }
          ]
        }
      },
      {
        type: "single",
        topic: "Unified Catalog",
        q: "One table stores the customer identifier as CustID and another as CID. The company wants them treated as the same thing, with one set of quality rules. What should it create?",
        options: ["A critical data element", "A governance domain", "A data product", "A custom classification rule in Data Map"],
        answer: 0,
        explain: "Critical data elements group equivalent columns into one logical container, with quality rules and access policies attached.",
        es: {
          topic: "Catálogo unificado",
          q: "Una tabla guarda el identificador de cliente como CustID y otra como CID. La empresa quiere tratarlos como lo mismo, con un único conjunto de reglas de calidad. ¿Qué debe crear?",
          options: ["Un elemento de datos crítico", "Un dominio de gobernanza", "Un producto de datos", "Una regla de clasificación personalizada en Data Map"],
          explain: "Los elementos de datos críticos agrupan columnas equivalentes en un contenedor lógico, con reglas de calidad y directivas de acceso."
        }
      },
      {
        type: "dropdown",
        topic: "Data Map",
        q: "Complete the statement about how Data Map and Unified Catalog work together.",
        parts: [
          "First, ",
          { options: ["Data Map", "Unified Catalog", "Data Quality"], answer: 0 },
          " scans sources and captures metadata; then ",
          { options: ["Unified Catalog", "Compliance Manager", "Data Lifecycle Management"], answer: 0 },
          " curates it into domains, data products and glossary terms."
        ],
        explain: "Data Map provides the raw metadata; Unified Catalog makes it meaningful, discoverable and governed.",
        es: {
          topic: "Data Map",
          q: "Complete la afirmación sobre cómo trabajan juntos Data Map y el Catálogo unificado.",
          parts: [
            "Primero, ",
            { options: ["Data Map", "el Catálogo unificado", "Data Quality"] },
            " analiza los orígenes y captura metadatos; después, ",
            { options: ["el Catálogo unificado", "el Administrador de cumplimiento", "la administración del ciclo de vida de los datos"] },
            " los organiza en dominios, productos de datos y términos del glosario."
          ],
          explain: "Data Map aporta los metadatos; el Catálogo unificado los hace comprensibles, fáciles de encontrar y gobernados."
        }
      },
      {
        type: "multi",
        topic: "Data Map",
        q: "Which two are types of metadata that Data Map captures?",
        options: ["Operational metadata, such as run statuses", "Semantic metadata, such as collections and classifications", "Encrypted copies of each table's rows", "Users' passwords for each source", "Full backups of scanned files"],
        answers: [0, 1],
        explain: "Data Map captures technical, business, semantic and operational metadata, never the data itself.",
        es: {
          topic: "Data Map",
          q: "¿Cuáles son dos tipos de metadatos que captura Data Map?",
          options: ["Metadatos operativos, como estados de ejecución", "Metadatos semánticos, como colecciones y clasificaciones", "Copias cifradas de las filas de cada tabla", "Las contraseñas de los usuarios de cada origen", "Copias de seguridad completas de los archivos analizados"],
          explain: "Data Map captura metadatos técnicos, de negocio, semánticos y operativos, nunca los datos en sí."
        }
      },
      {
        type: "single",
        topic: "Data governance",
        q: "A central data team is a bottleneck because every access request and quality fix goes through it. Which governance concept addresses this?",
        options: ["Federated governance", "Data curation", "Data understanding", "Data health"],
        answer: 0,
        explain: "Federated governance keeps central standards but spreads ownership with self-service tools, reducing bottlenecks.",
        es: {
          topic: "Gobernanza de datos",
          q: "Un equipo central de datos es un cuello de botella porque cada solicitud de acceso y cada corrección de calidad pasa por él. ¿Qué concepto de gobernanza lo resuelve?",
          options: ["La gobernanza federada", "La curación de datos", "La comprensión de los datos", "La salud de los datos"],
          explain: "La gobernanza federada mantiene estándares centrales, pero reparte la responsabilidad con herramientas de autoservicio y reduce cuellos de botella."
        }
      },
      {
        type: "single",
        topic: "Unified Catalog",
        q: "Sales and Marketing both use the term Active Customer, with different meanings. How does Unified Catalog keep both definitions?",
        options: ["Each term is created under its own governance domain", "One term is renamed as a critical data element", "Both definitions go in a single shared data product", "The term is defined as a Data Map classification"],
        answer: 0,
        explain: "Glossary terms are created under governance domains, so each part of the organization keeps its own meaning.",
        es: {
          topic: "Catálogo unificado",
          q: "Ventas y Marketing usan el término Cliente activo con significados distintos. ¿Cómo conserva el Catálogo unificado ambas definiciones?",
          options: ["Cada término se crea en su propio dominio de gobernanza", "Uno de los términos se convierte en un elemento de datos crítico", "Ambas definiciones van en un único producto de datos compartido", "El término se define como una clasificación de Data Map"],
          explain: "Los términos del glosario se crean dentro de dominios de gobernanza, así que cada parte de la organización conserva su significado."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "Unified Catalog", s: "Data Quality can suggest rules generated by AI.", answer: true, explain: "AI-generated rules analyze the data and suggest checks." },
          { topic: "Unified Catalog", s: "Unified Catalog search only works with exact asset names.", answer: false, explain: "An AI-powered copilot supports natural language search, and there's also a browse experience." },
          { topic: "Data governance", s: "Poorly governed data makes AI results less reliable.", answer: true, explain: "AI depends on trusted, high-quality data." }
        ],
        es: {
          statements: [
            { topic: "Catálogo unificado", s: "Data Quality puede sugerir reglas generadas por IA.", explain: "Las reglas generadas por IA analizan los datos y sugieren comprobaciones." },
            { topic: "Catálogo unificado", s: "La búsqueda del Catálogo unificado solo funciona con nombres exactos de recursos.", explain: "Un copiloto con IA admite búsqueda en lenguaje natural, y también hay una experiencia de exploración." },
            { topic: "Gobernanza de datos", s: "Los datos mal gobernados hacen que los resultados de la IA sean menos confiables.", explain: "La IA depende de datos confiables y de calidad." }
          ]
        }
      },
      {
        type: "single",
        topic: "Data Map",
        q: "Before training an AI model on a data lake, the team wants to know which columns contain personal or financial information. Which Data Map capability helps?",
        options: ["Automatic classification during scanning", "Operational metadata on pipeline runs", "Collections that group data sources", "Lineage between Power BI reports"],
        answer: 0,
        explain: "Classification identifies sensitive information in data assets, which helps decide what can feed AI models.",
        es: {
          topic: "Data Map",
          q: "Antes de entrenar un modelo de IA con un lago de datos, el equipo quiere saber qué columnas contienen información personal o financiera. ¿Qué capacidad de Data Map ayuda?",
          options: ["La clasificación automática durante el análisis", "Los metadatos operativos de las ejecuciones de canalizaciones", "Las colecciones que agrupan orígenes de datos", "El linaje entre informes de Power BI"],
          explain: "La clasificación identifica información confidencial en los recursos de datos, lo que ayuda a decidir qué puede alimentar los modelos de IA."
        }
      },
      {
        type: "single",
        topic: "Unified Catalog",
        q: "Leadership wants to show that the Finance data products contribute to the goal of closing the books two days faster. Which Unified Catalog feature links them?",
        options: ["OKRs (objectives and key results)", "Health actions", "Critical data elements with quality rules", "Access policies"],
        answer: 0,
        explain: "OKRs are trackable business objectives tied to governance domains and data products.",
        es: {
          topic: "Catálogo unificado",
          q: "La dirección quiere mostrar que los productos de datos de Finanzas contribuyen al objetivo de cerrar la contabilidad dos días antes. ¿Qué característica del Catálogo unificado los vincula?",
          options: ["Los OKR (objetivos y resultados clave)", "Las acciones de salud", "Los elementos de datos críticos con reglas de calidad", "Las directivas de acceso"],
          explain: "Los OKR son objetivos de negocio medibles vinculados a dominios de gobernanza y productos de datos."
        }
      },
      {
        type: "single",
        topic: "Unified Catalog",
        q: "Analysts should be able to request access to a data product and get it through an approval flow, without opening IT tickets. What enables this?",
        options: ["Unified Catalog access policies", "Data Map collections", "Glossary terms with terms of use attached", "Health controls"],
        answer: 0,
        explain: "Access policies set up self-service access requests for data products while upholding right-use standards.",
        es: {
          topic: "Catálogo unificado",
          q: "Los analistas deberían poder solicitar acceso a un producto de datos y obtenerlo con un flujo de aprobación, sin abrir tickets a TI. ¿Qué lo permite?",
          options: ["Las directivas de acceso del Catálogo unificado", "Las colecciones de Data Map", "Los términos del glosario con términos de uso asociados", "Los controles de salud"],
          explain: "Las directivas de acceso configuran solicitudes de acceso de autoservicio a productos de datos, respetando las normas de uso adecuado."
        }
      }
    ]
  },
  units: [
    {
      id: "data-governance-concepts",
      name: "Describe the concepts and benefits of data governance",
      es: { name: "Descripción de los conceptos y ventajas del gobierno de datos" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-purview-data-governance/2-describe-benefits-data-governance",
      quiz: {
        added: "2026-11-19",
        items: [
          {
            type: "match",
            q: "Match each data governance concept to its description.",
            values: ["Data curation", "Data discovery", "Data health", "Data understanding"],
            targets: [
              { t: "Organizing, annotating and publishing data so it's reusable and protected", answer: 0 },
              { t: "Making sure users can find the data they need", answer: 1 },
              { t: "Maintaining quality standards and an active data lifecycle", answer: 2 },
              { t: "Giving data quality descriptors so users know how to use it", answer: 3 }
            ],
            explain: "These concepts, with federated governance and data access, underpin Purview data governance.",
            es: {
              q: "Relacione cada concepto de gobernanza de datos con su descripción.",
              values: ["Curación de datos", "Detección de datos", "Salud de los datos", "Comprensión de los datos"],
              targets: [
                { t: "Organizar, anotar y publicar los datos para que sean reutilizables y estén protegidos" },
                { t: "Asegurar que los usuarios encuentren los datos que necesitan" },
                { t: "Mantener estándares de calidad y un ciclo de vida activo de los datos" },
                { t: "Dar descriptores de calidad para que los usuarios sepan cómo usar los datos" }
              ],
              explain: "Estos conceptos, junto con la gobernanza federada y el acceso a los datos, son la base de la gobernanza de datos de Purview."
            }
          },
          {
            type: "single",
            q: "Which data governance concept is about quickly granting the right access and enforcing the right use, balancing safety and innovation?",
            options: ["Data access", "Data curation", "Data discovery", "Federated governance"],
            answer: 0,
            explain: "Data access balances safety and innovation by providing the right access and enforcing the right use.",
            es: {
              q: "¿Qué concepto de gobernanza de datos trata de dar rápido el acceso adecuado y hacer cumplir el uso adecuado, equilibrando seguridad e innovación?",
              options: ["El acceso a los datos", "La curación de datos", "La detección de datos", "La gobernanza federada"],
              explain: "El acceso a los datos equilibra seguridad e innovación dando el acceso adecuado y haciendo cumplir el uso adecuado."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Data governance is only a defensive mechanism for security and compliance.", answer: false, explain: "It also makes data more visible and helps create business value." },
              { s: "Data stewards are responsible for glossary consistency and lineage.", answer: true, explain: "They also ensure data quality and discovery." },
              { s: "Data estate standardization is a benefit aimed at data officers and CxO stakeholders.", answer: true, explain: "It creates common controls with federated accountability." }
            ],
            es: {
              statements: [
                { s: "La gobernanza de datos es solo un mecanismo defensivo de seguridad y cumplimiento.", explain: "También hace más visibles los datos y ayuda a crear valor de negocio." },
                { s: "Los administradores de datos (stewards) se ocupan de la coherencia del glosario y del linaje.", explain: "También aseguran la calidad y la detección de los datos." },
                { s: "La estandarización del patrimonio de datos es un beneficio pensado para responsables de datos y directivos.", explain: "Crea controles comunes con responsabilidad federada." }
              ]
            }
          },
          {
            type: "single",
            q: "A data owner wants to make sure a dataset is used only by intended users for intended purposes. Which benefit of data governance is this?",
            options: ["Responsible data use", "Data value creation", "Data discovery", "Impact analysis"],
            answer: 0,
            explain: "Responsible data use is a benefit for data owners and stewards.",
            es: {
              q: "Un propietario de datos quiere asegurar que un conjunto de datos lo usen solo los usuarios previstos y para los fines previstos. ¿Qué beneficio de la gobernanza de datos es este?",
              options: ["El uso responsable de los datos", "La creación de valor a partir de los datos", "La detección de datos", "El análisis de impacto"],
              explain: "El uso responsable de los datos es un beneficio para propietarios y administradores de datos."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about data governance roles.",
            parts: [
              "The role that registers data assets and manages their classifications is the ",
              { options: ["data owner", "data consumer", "central data office"], answer: 0 },
              ", while the role that establishes governance policies across the organization is the ",
              { options: ["central data office", "data steward", "data consumer"], answer: 0 },
              "."
            ],
            explain: "Owners manage their assets; the central data office sets policies and monitors governance health.",
            es: {
              q: "Complete la afirmación sobre los roles de gobernanza de datos.",
              parts: [
                "El rol que registra recursos de datos y administra sus clasificaciones es el ",
                { options: ["propietario de datos", "consumidor de datos", "oficina central de datos"] },
                ", mientras que el que define las directivas de gobernanza para toda la organización es la ",
                { options: ["oficina central de datos", "administrador de datos (steward)", "consumidor de datos"] },
                "."
              ],
              explain: "Los propietarios administran sus recursos; la oficina central de datos define directivas y supervisa la salud de la gobernanza."
            }
          }
        ]
      }
    },
    {
      id: "data-map",
      name: "Describe Microsoft Purview Data Map",
      es: { name: "Descripción del mapa de datos de Microsoft Purview" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-purview-data-governance/3a-describe-data-map",
      quiz: {
        added: "2026-11-19",
        items: [
          {
            type: "match",
            q: "Match each example to the type of metadata Data Map captures.",
            values: ["Technical", "Business", "Semantic", "Operational"],
            targets: [
              { t: "Column names and data types of a SQL table", answer: 0 },
              { t: "A description promoted from a Power BI dataset", answer: 1 },
              { t: "The collection a source belongs to", answer: 2 },
              { t: "When a pipeline last ran and whether it succeeded", answer: 3 }
            ],
            explain: "Together these four types build a complete picture of the data estate.",
            es: {
              q: "Relacione cada ejemplo con el tipo de metadatos que captura Data Map.",
              values: ["Técnicos", "De negocio", "Semánticos", "Operativos"],
              targets: [
                { t: "Los nombres de columnas y tipos de datos de una tabla SQL" },
                { t: "Una descripción traída de un conjunto de datos de Power BI" },
                { t: "La colección a la que pertenece un origen" },
                { t: "Cuándo se ejecutó por última vez una canalización y si funcionó" }
              ],
              explain: "Juntos, estos cuatro tipos arman una imagen completa del patrimonio de datos."
            }
          },
          {
            type: "single",
            q: "A company that grew through acquisitions has data in Azure, AWS and two on-premises datacenters. Why does Data Map help its governance effort?",
            options: [
              "It gives a single, unified view of metadata regardless of where the data resides",
              "It migrates all the data into one Azure region",
              "It replaces each platform's native access controls with Purview roles that grant data access",
              "It creates a copy of every dataset in Microsoft Fabric"
            ],
            answer: 0,
            explain: "Data Map connects to sources across clouds and on-premises, avoiding fragmented governance.",
            es: {
              q: "Una empresa que creció por adquisiciones tiene datos en Azure, AWS y dos centros de datos locales. ¿Por qué Data Map ayuda a su gobernanza?",
              options: [
                "Da una vista única y unificada de los metadatos, sin importar dónde están los datos",
                "Migra todos los datos a una única región de Azure",
                "Reemplaza los controles de acceso nativos de cada plataforma por roles de Purview que dan acceso a los datos",
                "Crea una copia de cada conjunto de datos en Microsoft Fabric"
              ],
              explain: "Data Map se conecta a orígenes en distintas nubes y locales, y evita una gobernanza fragmentada."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Data Map keeps itself up to date through built-in scanning and classification.", answer: true, explain: "It works like an automated inventory." },
              { s: "Data Map classification can only use built-in patterns, not custom classifications.", answer: false, explain: "Organizations can also define custom classifications." },
              { s: "Data Map stores a copy of the scanned files so users can open them.", answer: false, explain: "All data in Data Map is metadata, not the underlying data." }
            ],
            es: {
              statements: [
                { s: "Data Map se mantiene actualizado con su análisis y clasificación integrados.", explain: "Funciona como un inventario automatizado." },
                { s: "La clasificación de Data Map solo puede usar patrones integrados, no clasificaciones personalizadas.", explain: "Las organizaciones también pueden definir clasificaciones personalizadas." },
                { s: "Data Map guarda una copia de los archivos analizados para que los usuarios puedan abrirlos.", explain: "Todo lo que hay en Data Map son metadatos, no los datos en sí." }
              ]
            }
          },
          {
            type: "single",
            q: "In a Purview rollout, which team typically works in Data Map, and which in Unified Catalog?",
            options: [
              "Technical teams connect and scan sources in Data Map; business teams and stewards curate in Unified Catalog",
              "Business teams connect and scan sources in Data Map, while IT curates glossary terms and data products in Unified Catalog",
              "Only the central data office uses both tools",
              "Data consumers configure scans in Unified Catalog"
            ],
            answer: 0,
            explain: "The separation of concerns lets technical and business teams each focus on their part.",
            es: {
              q: "En una implementación de Purview, ¿qué equipo suele trabajar en Data Map y cuál en el Catálogo unificado?",
              options: [
                "Los equipos técnicos conectan y analizan orígenes en Data Map; los de negocio y los stewards organizan en el Catálogo unificado",
                "Los equipos de negocio conectan y analizan orígenes en Data Map, mientras TI organiza términos del glosario y productos de datos en el Catálogo unificado",
                "Solo la oficina central de datos usa ambas herramientas",
                "Los consumidores de datos configuran los análisis en el Catálogo unificado"
              ],
              explain: "La separación de responsabilidades permite que cada equipo se enfoque en su parte."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about Data Map scanning.",
            parts: [
              "Scanning connects to data sources and discovers assets such as databases, tables and ",
              { options: ["reports", "user passwords", "network packets"], answer: 0 },
              ", while classification identifies ",
              { options: ["sensitive information", "the asset owner's manager", "the source's license tier"], answer: 0 },
              " within them."
            ],
            explain: "Scanning captures structure, location and relationships; classification labels sensitive content such as personal or financial data.",
            es: {
              q: "Complete la afirmación sobre el análisis de Data Map.",
              parts: [
                "El análisis se conecta a los orígenes de datos y descubre recursos como bases de datos, tablas e ",
                { options: ["informes", "contraseñas de usuarios", "paquetes de red"] },
                ", mientras que la clasificación identifica ",
                { options: ["información confidencial", "al responsable del propietario del recurso", "el nivel de licencia del origen"] },
                " dentro de ellos."
              ],
              explain: "El análisis captura estructura, ubicación y relaciones; la clasificación marca contenido confidencial, como datos personales o financieros."
            }
          }
        ]
      }
    },
    {
      id: "unified-catalog",
      name: "Describe Microsoft Purview Unified Catalog",
      es: { name: "Descripción del catálogo unificado de Microsoft Purview" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-purview-data-governance/3-describe-data-catalog",
      quiz: {
        added: "2026-11-19",
        items: [
          {
            type: "match",
            q: "Match each Unified Catalog feature to its purpose.",
            values: ["Governance domain", "Data product", "Glossary term", "Critical data element"],
            targets: [
              { t: "A business boundary like Finance for shared ownership and discovery", answer: 0 },
              { t: "A named set of assets with owners and a use case for consumers", answer: 1 },
              { t: "A business concept that carries policies and context", answer: 2 },
              { t: "A logical grouping of equivalent columns across tables", answer: 3 }
            ],
            explain: "These features organize the data estate around business concepts.",
            es: {
              q: "Relacione cada característica del Catálogo unificado con su propósito.",
              values: ["Dominio de gobernanza", "Producto de datos", "Término del glosario", "Elemento de datos crítico"],
              targets: [
                { t: "Un límite de negocio, como Finanzas, para responsabilidad y detección compartidas" },
                { t: "Un conjunto de recursos con nombre, propietarios y un caso de uso para los consumidores" },
                { t: "Un concepto de negocio que lleva directivas y contexto" },
                { t: "Una agrupación lógica de columnas equivalentes entre tablas" }
              ],
              explain: "Estas características organizan el patrimonio de datos alrededor de conceptos de negocio."
            }
          },
          {
            type: "single",
            q: "A data steward wants to see which data products have missing metadata and what to fix to make them more usable. Which feature helps?",
            options: ["Health actions", "OKRs", "Access policies", "Governance domains"],
            answer: 0,
            explain: "Health actions list steps that raise a data product's governance health score.",
            es: {
              q: "Un administrador de datos quiere ver qué productos de datos tienen metadatos incompletos y qué corregir para que sean más útiles. ¿Qué característica ayuda?",
              options: ["Las acciones de salud", "Los OKR", "Las directivas de acceso", "Los dominios de gobernanza"],
              explain: "Las acciones de salud enumeran pasos que suben la puntuación de salud de gobernanza de un producto de datos."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Glossary terms can contain policies that apply to data products they're attached to.", answer: true, explain: "They apply health goals, governance requirements and terms of use." },
              { s: "Data Quality scores are aggregated at asset, data product and governance domain levels.", answer: true, explain: "That gives end-to-end visibility within each domain." },
              { s: "Data Quality rules must be written in code.", answer: false, explain: "It uses no-code and low-code rules, including built-in and AI-generated ones." }
            ],
            es: {
              statements: [
                { s: "Los términos del glosario pueden contener directivas que se aplican a los productos de datos a los que se asocian.", explain: "Aplican metas de salud, requisitos de gobernanza y términos de uso." },
                { s: "Las puntuaciones de Data Quality se agregan a nivel de recurso, producto de datos y dominio de gobernanza.", explain: "Eso da visibilidad completa dentro de cada dominio." },
                { s: "Las reglas de Data Quality se tienen que escribir en código.", explain: "Usa reglas sin código o con poco código, incluidas las integradas y las generadas por IA." }
              ]
            }
          },
          {
            type: "single",
            q: "A new analyst doesn't know the name of any dataset but needs sales figures by region. What's the quickest way to find relevant data in Unified Catalog?",
            options: [
              "Ask the AI-powered copilot in natural language",
              "Request access to every governance domain",
              "Create a new critical data element",
              "Run a new Data Map scan and browse the results"
            ],
            answer: 0,
            explain: "The copilot lets users search in everyday language without knowing exact asset names.",
            es: {
              q: "Un analista nuevo no conoce el nombre de ningún conjunto de datos, pero necesita cifras de ventas por región. ¿Cuál es la forma más rápida de encontrar datos relevantes en el Catálogo unificado?",
              options: [
                "Preguntarle al copiloto con IA en lenguaje natural",
                "Solicitar acceso a todos los dominios de gobernanza",
                "Crear un nuevo elemento de datos crítico",
                "Ejecutar un análisis nuevo de Data Map y revisar los resultados"
              ],
              explain: "El copiloto permite buscar en lenguaje cotidiano sin conocer los nombres exactos de los recursos."
            }
          },
          {
            type: "multi",
            q: "Which two are valid ways to draw governance domain boundaries?",
            options: ["Fundamental business areas such as human resources or sales", "Organizational functions such as customer experience", "Azure regions where the data is stored", "The license tier of each user", "The file format of each asset"],
            answers: [0, 1],
            explain: "Domains can follow business areas, subject areas or organizational functions.",
            es: {
              q: "¿Cuáles son dos formas válidas de definir los límites de un dominio de gobernanza?",
              options: ["Áreas fundamentales del negocio, como recursos humanos o ventas", "Funciones de la organización, como la experiencia del cliente", "Las regiones de Azure donde se almacenan los datos", "El nivel de licencia de cada usuario", "El formato de archivo de cada recurso"],
              explain: "Los dominios pueden seguir áreas de negocio, áreas temáticas o funciones de la organización."
            }
          }
        ]
      }
    }
  ]
});
