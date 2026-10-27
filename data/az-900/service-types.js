// AZ-900 > Describe cloud concepts > Describe cloud service types
Catalog.module("az-900", {
  id: "service-types",
  name: "Describe cloud service types",
  es: { name: "Descripción de los tipos de servicio en la nube" },
  url: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/",
  quiz: {
    added: "2026-10-26",
    items: [
      {
        type: "match",
        topic: "Cloud service types",
        q: "Match each scenario to the cloud service type it fits best.",
        values: ["IaaS", "PaaS", "SaaS"],
        targets: [
          { t: "Test and development environments replicated quickly with complete control", answer: 0 },
          { t: "Analytics or business intelligence tools provided as a service", answer: 1 },
          { t: "Email and messaging", answer: 2 },
          { t: "A development framework with built-in software components", answer: 1 }
        ],
        explain: "Testing and development with full control is an IaaS scenario. Development frameworks and analytics are PaaS scenarios. Email and messaging is a common SaaS scenario.",
        es: {
          topic: "Tipos de servicio en la nube",
          q: "Relacione cada escenario con el tipo de servicio en la nube que mejor le corresponde.",
          values: ["IaaS", "PaaS", "SaaS"],
          targets: [
            { t: "Entornos de prueba y desarrollo replicados rápidamente con control total" },
            { t: "Herramientas de análisis o inteligencia empresarial ofrecidas como servicio" },
            { t: "Correo electrónico y mensajería" },
            { t: "Un marco de desarrollo con componentes de software integrados" }
          ],
          explain: "Las pruebas y el desarrollo con control total son un escenario de IaaS. Los marcos de desarrollo y el análisis son escenarios de PaaS. El correo y la mensajería son un escenario habitual de SaaS."
        }
      },
      {
        type: "single",
        topic: "IaaS",
        q: "A company wants to run a custom application on servers whose operating system configuration it controls, while the provider takes care of physical security and internet connectivity. Which service type meets both requirements?",
        options: ["SaaS", "PaaS", "IaaS", "An on-premises datacenter"],
        answer: 2,
        explain: "IaaS leaves the OS to you and keeps hardware, connectivity and physical security with the provider. PaaS takes the OS away; on-premises leaves physical security with you.",
        es: {
          topic: "IaaS",
          q: "Una empresa quiere ejecutar una aplicación propia en servidores cuyo sistema operativo configura ella misma, mientras el proveedor se ocupa de la seguridad física y la conectividad a internet. ¿Qué tipo de servicio cumple ambos requisitos?",
          options: ["SaaS", "PaaS", "IaaS", "Un centro de datos local"],
          explain: "IaaS le deja el sistema operativo a usted y mantiene el hardware, la conectividad y la seguridad física en manos del proveedor. PaaS le quita el sistema operativo; en el entorno local la seguridad física queda a su cargo."
        }
      },
      {
        type: "single",
        topic: "PaaS",
        q: "A development team writes its own application code but doesn't want to handle licensing or patching for operating systems and databases. Which service type should it use?",
        options: ["IaaS", "PaaS", "SaaS", "A private cloud"],
        answer: 1,
        explain: "In PaaS you don't worry about OS and database licensing or patching, and you still build your own application. SaaS would give you a finished application instead.",
        es: {
          topic: "PaaS",
          q: "Un equipo de desarrollo escribe su propio código pero no quiere ocuparse de las licencias ni de los parches de sistemas operativos y bases de datos. ¿Qué tipo de servicio debe usar?",
          options: ["IaaS", "PaaS", "SaaS", "Una nube privada"],
          explain: "En PaaS no tiene que preocuparse por las licencias ni los parches del sistema operativo y las bases de datos, y sigue desarrollando su propia aplicación. SaaS le daría una aplicación terminada."
        }
      },
      {
        type: "single",
        topic: "SaaS",
        q: "The finance department needs an expense-tracking solution it can start using immediately, with the least technical expertise possible. Which service type fits?",
        options: ["IaaS", "PaaS", "SaaS", "A hybrid cloud"],
        answer: 2,
        explain: "SaaS is the easiest to get up and running and requires the least technical knowledge. Finance and expense tracking is a common SaaS scenario.",
        es: {
          topic: "SaaS",
          q: "El departamento de finanzas necesita una solución de seguimiento de gastos que pueda empezar a usar de inmediato, con el menor conocimiento técnico posible. ¿Qué tipo de servicio corresponde?",
          options: ["IaaS", "PaaS", "SaaS", "Una nube híbrida"],
          explain: "SaaS es el más fácil de poner en marcha y requiere el menor conocimiento técnico. Las finanzas y el seguimiento de gastos son un escenario habitual de SaaS."
        }
      },
      {
        type: "multi",
        topic: "PaaS",
        q: "Which two does the cloud provider maintain in PaaS, but not in IaaS?",
        options: ["Operating systems", "Middleware", "Physical security", "Internet connectivity", "Your application code"],
        answers: [0, 1],
        explain: "Physical security and connectivity are the provider's in both models. PaaS adds the OS, middleware, development tools and analytics services. Your code stays yours.",
        es: {
          topic: "PaaS",
          q: "¿Cuáles son dos elementos que el proveedor de nube mantiene en PaaS, pero no en IaaS?",
          options: ["Los sistemas operativos", "El middleware", "La seguridad física", "La conectividad a internet", "El código de su aplicación"],
          explain: "La seguridad física y la conectividad son del proveedor en ambos modelos. PaaS suma el sistema operativo, el middleware, las herramientas de desarrollo y los servicios de análisis. Su código sigue siendo suyo."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "SaaS", s: "SaaS requires the least amount of technical knowledge or expertise to fully employ.", answer: true, explain: "SaaS is the easiest model to get running and needs the least expertise." },
          { topic: "IaaS", s: "In IaaS, the cloud provider handles database and storage configuration.", answer: false, explain: "Database and storage configuration is the customer's job in IaaS." },
          { topic: "PaaS", s: "In PaaS, some networking and application security settings can be shared, depending on service configuration.", answer: true, explain: "The PaaS unit notes that some of these settings are shared depending on configuration." }
        ],
        es: {
          statements: [
            { topic: "SaaS", s: "SaaS requiere la menor cantidad de conocimiento técnico para aprovecharlo por completo.", explain: "SaaS es el modelo más fácil de poner en marcha y el que menos conocimientos exige." },
            { topic: "IaaS", s: "En IaaS, el proveedor de nube se encarga de la configuración de bases de datos y almacenamiento.", explain: "La configuración de bases de datos y almacenamiento es tarea del cliente en IaaS." },
            { topic: "PaaS", s: "En PaaS, algunas configuraciones de red y de seguridad de la aplicación pueden ser compartidas, según la configuración del servicio.", explain: "La unidad de PaaS indica que algunas de estas configuraciones son compartidas según la configuración." }
          ]
        }
      },
      {
        type: "dropdown",
        topic: "Cloud service types",
        q: "Complete the statement about cloud service types.",
        parts: [
          "The service type that places the most responsibility on the customer is ",
          { options: ["SaaS", "PaaS", "IaaS"], answer: 2 },
          ", and the one with the lowest operational overhead for customers is ",
          { options: ["IaaS", "SaaS", "PaaS"], answer: 1 },
          "."
        ],
        explain: "IaaS gives the most control and the most responsibility. SaaS has the lowest operational overhead, since the provider manages almost the whole stack.",
        es: {
          topic: "Tipos de servicio en la nube",
          q: "Complete la afirmación sobre los tipos de servicio en la nube.",
          parts: [
            "El tipo de servicio que le asigna más responsabilidad al cliente es ",
            { options: ["SaaS", "PaaS", "IaaS"] },
            ", y el que tiene la menor carga operativa para los clientes es ",
            { options: ["IaaS", "SaaS", "PaaS"] },
            "."
          ],
          explain: "IaaS da el mayor control y la mayor responsabilidad. SaaS tiene la menor carga operativa, porque el proveedor administra casi toda la pila."
        }
      },
      {
        type: "single",
        topic: "SaaS",
        q: "Your company adopts a SaaS application. Which of the following does your company still manage?",
        options: ["Identity and access settings", "Application updates", "Infrastructure patching", "Platform middleware"],
        answer: 0,
        explain: "In SaaS you mainly manage your data, identity and access settings, and device access posture. The provider handles infrastructure, platform and application maintenance.",
        es: {
          topic: "SaaS",
          q: "Su empresa adopta una aplicación SaaS. ¿Cuál de los siguientes elementos sigue administrando su empresa?",
          options: ["La configuración de identidad y acceso", "Las actualizaciones de la aplicación", "Los parches de la infraestructura", "El middleware de la plataforma"],
          explain: "En SaaS usted administra principalmente sus datos, la configuración de identidad y acceso, y la postura de acceso de los dispositivos. El proveedor se ocupa de la infraestructura, la plataforma y el mantenimiento de la aplicación."
        }
      },
      {
        type: "single",
        topic: "IaaS",
        q: "A company sets up cloud resources similar to its on-premises datacenter and then moves its workloads to them. What is this scenario called?",
        options: ["Lift-and-shift migration", "Development framework", "Analytics or business intelligence", "Productivity application"],
        answer: 0,
        explain: "Lift-and-shift migration is a common IaaS scenario: replicate the datacenter in the cloud and move workloads over.",
        es: {
          topic: "IaaS",
          q: "Una empresa configura recursos en la nube similares a su centro de datos local y luego traslada allí sus cargas de trabajo. ¿Cómo se llama este escenario?",
          options: ["Migración tal cual (lift-and-shift)", "Marco de desarrollo", "Análisis o inteligencia empresarial", "Aplicación de productividad"],
          explain: "La migración tal cual (lift-and-shift) es un escenario habitual de IaaS: replicar el centro de datos en la nube y trasladar las cargas de trabajo."
        }
      },
      {
        type: "single",
        topic: "PaaS",
        q: "Which statement best describes PaaS?",
        options: [
          "Renting hardware in a cloud datacenter, where everything you do with it is up to you",
          "A middle ground between renting datacenter space and paying for a complete, deployed solution",
          "Renting or using a fully developed application",
          "Running every layer of the stack in your own facilities"
        ],
        answer: 1,
        explain: "PaaS sits between IaaS (renting space) and SaaS (a complete solution). The first option describes IaaS and the third describes SaaS.",
        es: {
          topic: "PaaS",
          q: "¿Qué afirmación describe mejor a PaaS?",
          options: [
            "Alquilar hardware en un centro de datos en la nube, donde todo lo que haga con él depende de usted",
            "Un punto medio entre alquilar espacio en un centro de datos y pagar por una solución completa e implementada",
            "Alquilar o usar una aplicación completamente desarrollada",
            "Ejecutar todas las capas de la pila en instalaciones propias"
          ],
          explain: "PaaS está entre IaaS (alquilar espacio) y SaaS (una solución completa). La primera opción describe IaaS y la tercera, SaaS."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "IaaS", s: "IaaS is the most flexible category of cloud services.", answer: true, explain: "IaaS provides the maximum amount of control and flexibility." },
          { topic: "SaaS", s: "SaaS is the most flexible cloud service model.", answer: false, explain: "SaaS may be the least flexible model, though it's the easiest to use." },
          { topic: "PaaS", s: "PaaS development frameworks can include multitenant capability, reducing the coding developers must do.", answer: true, explain: "Scalability, high availability and multitenant capability are included in PaaS frameworks." }
        ],
        es: {
          statements: [
            { topic: "IaaS", s: "IaaS es la categoría más flexible de servicios en la nube.", explain: "IaaS ofrece la máxima cantidad de control y flexibilidad." },
            { topic: "SaaS", s: "SaaS es el modelo de servicio en la nube más flexible.", explain: "SaaS puede ser el modelo menos flexible, aunque es el más fácil de usar." },
            { topic: "PaaS", s: "Los marcos de desarrollo de PaaS pueden incluir capacidad multiinquilino, lo que reduce la cantidad de código que deben escribir los desarrolladores.", explain: "La escalabilidad, la alta disponibilidad y la capacidad multiinquilino vienen incluidas en los marcos de PaaS." }
          ]
        }
      }
    ]
  },
  units: [
    {
                id: "iaas",
                name: "Describe Infrastructure as a Service",
                es: { name: "Describir la infraestructura como servicio" },
                url: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/2-describe-infrastructure-service",
                quiz: {
                  added: "2026-10-26",
                  items: [
                    {
                      type: "single",
                      q: "A company wants to move its on-premises servers to the cloud as they are, setting up cloud resources similar to its datacenter and keeping full control of the operating systems. Which cloud service type should it use?",
                      options: ["PaaS", "IaaS", "SaaS", "Azure Arc"],
                      answer: 1,
                      explain: "Lift-and-shift with full OS control is the textbook IaaS scenario. PaaS takes the OS away from you, and Azure Arc is a management tool, not a service type.",
                      es: {
                        q: "Una empresa quiere llevar sus servidores locales a la nube tal como están, configurando recursos en la nube similares a su centro de datos y manteniendo el control total de los sistemas operativos. ¿Qué tipo de servicio en la nube debe usar?",
                        options: ["PaaS", "IaaS", "SaaS", "Azure Arc"],
                        explain: "Migrar tal cual (lift-and-shift) con control total del sistema operativo es el escenario típico de IaaS. PaaS le quita el sistema operativo, y Azure Arc es una herramienta de administración, no un tipo de servicio."
                      }
                    },
                    {
                      type: "multi",
                      q: "Your company deploys its workloads on IaaS. Which two tasks are your company's responsibility?",
                      options: [
                        "Operating system installation and maintenance",
                        "Physical security of the datacenter",
                        "Network connectivity to the internet",
                        "Network configuration",
                        "Hardware maintenance"
                      ],
                      answers: [0, 3],
                      explain: "In IaaS you own the OS, network configuration, and database and storage configuration. The provider keeps hardware, internet connectivity and physical security.",
                      es: {
                        q: "Su empresa implementa sus cargas de trabajo en IaaS. ¿Cuáles son dos tareas que son responsabilidad de su empresa?",
                        options: [
                          "La instalación y el mantenimiento del sistema operativo",
                          "La seguridad física del centro de datos",
                          "La conectividad de red a internet",
                          "La configuración de red",
                          "El mantenimiento del hardware"
                        ],
                        explain: "En IaaS, usted es responsable del sistema operativo, la configuración de red y la configuración de bases de datos y almacenamiento. El proveedor conserva el hardware, la conectividad a internet y la seguridad física."
                      }
                    },
                    {
                      type: "single",
                      q: "A development team needs to start and shut down copies of an established configuration quickly for testing, and must keep complete control over each environment. Which option meets both requirements?",
                      hint: "One option is fast but takes control away. Another keeps control but isn't fast.",
                      options: ["SaaS", "A private cloud on newly purchased hardware", "IaaS", "PaaS"],
                      answer: 2,
                      explain: "Testing and development is a listed IaaS scenario: rapid replication with complete control. PaaS is fast but limits control; buying hardware for a private cloud isn't rapid.",
                      es: {
                        q: "Un equipo de desarrollo necesita iniciar y apagar rápidamente copias de una configuración establecida para hacer pruebas, y debe mantener el control total de cada entorno. ¿Qué opción cumple ambos requisitos?",
                        hint: "Una opción es rápida pero quita control. Otra mantiene el control pero no es rápida.",
                        options: ["SaaS", "Una nube privada con hardware recién comprado", "IaaS", "PaaS"],
                        explain: "Pruebas y desarrollo es un escenario listado de IaaS: replicación rápida con control total. PaaS es rápido pero limita el control; comprar hardware para una nube privada no es rápido."
                      }
                    },
                    {
                      type: "dropdown",
                      q: "Complete the statement about Infrastructure as a Service.",
                      parts: [
                        "IaaS provides ",
                        { options: ["a moderate", "the maximum", "the minimum"], answer: 1 },
                        " amount of control over cloud resources, and gives the customer ",
                        { options: ["the smallest", "an evenly shared", "the largest"], answer: 2 },
                        " operational responsibility of the three cloud service types."
                      ],
                      explain: "IaaS is the most flexible category: maximum control comes with the largest operational responsibility.",
                      es: {
                        q: "Complete la afirmación sobre la infraestructura como servicio.",
                        parts: [
                          "IaaS ofrece ",
                          { options: ["un nivel moderado de", "el máximo", "el mínimo"] },
                          " control sobre los recursos en la nube, y le asigna al cliente ",
                          { options: ["la menor", "una repartida en partes iguales", "la mayor"] },
                          " responsabilidad operativa de los tres tipos de servicio en la nube."
                        ],
                        explain: "IaaS es la categoría más flexible: el máximo control viene con la mayor responsabilidad operativa."
                      }
                    },
                    {
                      type: "yesno",
                      statements: [
                        { s: "With IaaS, you are responsible for installing, configuring and maintaining the operating system.", answer: true, explain: "OS installation, configuration and maintenance are explicitly the customer's job in IaaS." },
                        { s: "With IaaS, the cloud provider configures the networking of your workloads.", answer: false, explain: "Network configuration is yours in IaaS. The provider only covers network connectivity to the internet." },
                        { s: "With IaaS, you are essentially renting hardware in a cloud datacenter.", answer: true, explain: "That's how the unit describes IaaS: what you do with the rented hardware is up to you." }
                      ],
                      es: {
                        statements: [
                          { s: "Con IaaS, usted es responsable de instalar, configurar y mantener el sistema operativo.", explain: "La instalación, la configuración y el mantenimiento del sistema operativo son explícitamente tareas del cliente en IaaS." },
                          { s: "Con IaaS, el proveedor de nube configura las redes de sus cargas de trabajo.", explain: "La configuración de red es suya en IaaS. El proveedor solo cubre la conectividad de red a internet." },
                          { s: "Con IaaS, básicamente está alquilando hardware en un centro de datos en la nube.", explain: "Así describe la unidad a IaaS: lo que haga con el hardware alquilado depende de usted." }
                        ]
                      }
                    }
                  ]
                }
              },
    {
      id: "paas",
      name: "Describe Platform as a Service",
      es: { name: "Describir plataforma como servicio" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/3-describe-platform-service",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "single",
            q: "A development team wants a complete development environment without the burden of maintaining the underlying development infrastructure. Which service type fits best?",
            options: ["IaaS", "PaaS", "SaaS", "An on-premises datacenter"],
            answer: 1,
            explain: "PaaS provides a complete development environment while the provider maintains the infrastructure, OS, middleware and tools. IaaS would leave the OS and tooling to the team.",
            es: {
              q: "Un equipo de desarrollo quiere un entorno de desarrollo completo sin la carga de mantener la infraestructura de desarrollo subyacente. ¿Qué tipo de servicio es el más adecuado?",
              options: ["IaaS", "PaaS", "SaaS", "Un centro de datos local"],
              explain: "PaaS ofrece un entorno de desarrollo completo mientras el proveedor mantiene la infraestructura, el sistema operativo, el middleware y las herramientas. IaaS le dejaría al equipo el sistema operativo y las herramientas."
            }
          },
          {
            type: "multi",
            q: "In a PaaS environment, which two are the cloud provider's responsibility?",
            options: ["Operating systems", "Middleware", "Your application code", "Your data", "Access controls for your users"],
            answers: [0, 1],
            explain: "The provider maintains the infrastructure, OS, middleware, development tools and analytics services. You focus on your code, data and access controls.",
            es: {
              q: "En un entorno PaaS, ¿cuáles son dos elementos que son responsabilidad del proveedor de nube?",
              options: ["Los sistemas operativos", "El middleware", "El código de su aplicación", "Sus datos", "Los controles de acceso de sus usuarios"],
              explain: "El proveedor mantiene la infraestructura, el sistema operativo, el middleware, las herramientas de desarrollo y los servicios de análisis. Usted se concentra en su código, sus datos y los controles de acceso."
            }
          },
          {
            type: "single",
            q: "A team wants tools provided as a service to analyze and mine its data, find patterns and predict outcomes, without managing servers or operating systems. Which option fits best?",
            options: ["IaaS virtual machines", "An on-premises datacenter", "PaaS analytics or business intelligence tools", "A private cloud on new hardware"],
            answer: 2,
            explain: "Analytics or business intelligence is a listed PaaS scenario: the tools come as a service and the provider manages the platform.",
            es: {
              q: "Un equipo quiere herramientas ofrecidas como servicio para analizar y explorar sus datos, encontrar patrones y predecir resultados, sin administrar servidores ni sistemas operativos. ¿Qué opción es la más adecuada?",
              options: ["Máquinas virtuales IaaS", "Un centro de datos local", "Herramientas PaaS de análisis o inteligencia empresarial", "Una nube privada con hardware nuevo"],
              explain: "El análisis o la inteligencia empresarial es un escenario listado de PaaS: las herramientas vienen como servicio y el proveedor administra la plataforma."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about PaaS.",
            parts: [
              "PaaS is a middle ground between ",
              { options: ["paying for a complete, deployed solution", "renting space in a datacenter", "buying your own hardware"], answer: 1 },
              " and ",
              { options: ["renting space in a datacenter", "paying for a complete, deployed solution", "colocating your servers"], answer: 1 },
              "."
            ],
            explain: "PaaS sits between IaaS, where you rent datacenter space, and SaaS, where you pay for a complete, deployed solution.",
            es: {
              q: "Complete la afirmación sobre PaaS.",
              parts: [
                "PaaS es un punto medio entre ",
                { options: ["pagar por una solución completa e implementada", "alquilar espacio en un centro de datos", "comprar hardware propio"] },
                " y ",
                { options: ["alquilar espacio en un centro de datos", "pagar por una solución completa e implementada", "alojar sus servidores en un tercero"] },
                "."
              ],
              explain: "PaaS está entre IaaS, donde se alquila espacio en un centro de datos, y SaaS, donde se paga por una solución completa e implementada."
            }
          },
          {
            type: "single",
            q: "In PaaS, what does the customer focus on?",
            options: [
              "Patching the operating system",
              "Maintaining middleware and runtimes",
              "Application code, data and access controls",
              "Physical security of the datacenter"
            ],
            answer: 2,
            explain: "The provider manages the platform: OS, middleware and managed runtimes. You focus on your application code, data and access controls.",
            es: {
              q: "En PaaS, ¿en qué se concentra el cliente?",
              options: [
                "En aplicar parches al sistema operativo",
                "En mantener el middleware y los entornos de ejecución",
                "En el código de la aplicación, los datos y los controles de acceso",
                "En la seguridad física del centro de datos"
              ],
              explain: "El proveedor administra la plataforma: sistema operativo, middleware y entornos de ejecución administrados. Usted se concentra en el código de la aplicación, los datos y los controles de acceso."
            }
          },
          {
            type: "single",
            q: "Which of the following is NOT something you need to worry about in a PaaS scenario?",
            options: ["Licensing and patching for operating systems and databases", "Your application code", "Your data", "Access controls for your application"],
            answer: 0,
            explain: "In PaaS you don't have to worry about licensing or patching for operating systems and databases. Code, data and access controls stay with you.",
            es: {
              q: "¿Cuál de los siguientes elementos NO debe preocuparle en un escenario PaaS?",
              options: ["Las licencias y los parches de sistemas operativos y bases de datos", "El código de su aplicación", "Sus datos", "Los controles de acceso de su aplicación"],
              explain: "En PaaS no tiene que preocuparse por las licencias ni los parches de sistemas operativos y bases de datos. El código, los datos y los controles de acceso siguen siendo suyos."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "In PaaS, the cloud provider maintains development tools and analytics services.", answer: true, explain: "Along with the OS and middleware, the provider maintains development tools and analytics services." },
              { s: "In PaaS, all networking and application security settings are always the provider's responsibility.", answer: false, explain: "Depending on service configuration, some networking and application security settings are shared." },
              { s: "PaaS development frameworks include features such as scalability and high availability, reducing the coding developers must do.", answer: true, explain: "Those cloud features come built into the framework." }
            ],
            es: {
              statements: [
                { s: "En PaaS, el proveedor de nube mantiene las herramientas de desarrollo y los servicios de análisis.", explain: "Además del sistema operativo y el middleware, el proveedor mantiene las herramientas de desarrollo y los servicios de análisis." },
                { s: "En PaaS, todas las configuraciones de red y de seguridad de la aplicación son siempre responsabilidad del proveedor.", explain: "Según la configuración del servicio, algunas configuraciones de red y de seguridad de la aplicación son compartidas." },
                { s: "Los marcos de desarrollo de PaaS incluyen funciones como la escalabilidad y la alta disponibilidad, lo que reduce el código que deben escribir los desarrolladores.", explain: "Esas funciones de la nube vienen integradas en el marco." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "saas",
      name: "Describe Software as a Service",
      es: { name: "Describir software como servicio" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/4-describe-software-service",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "single",
            q: "A small company wants email running as soon as possible, and it has very little technical expertise in-house. Which service type fits best?",
            options: ["IaaS", "PaaS", "SaaS", "A private cloud"],
            answer: 2,
            explain: "SaaS is the easiest to get up and running and needs the least technical knowledge. Email is a common SaaS example.",
            es: {
              q: "Una empresa pequeña quiere tener el correo funcionando lo antes posible y cuenta con muy poco conocimiento técnico interno. ¿Qué tipo de servicio es el más adecuado?",
              options: ["IaaS", "PaaS", "SaaS", "Una nube privada"],
              explain: "SaaS es el más fácil de poner en marcha y exige el menor conocimiento técnico. El correo es un ejemplo habitual de SaaS."
            }
          },
          {
            type: "multi",
            q: "With SaaS, which two remain the customer's responsibility?",
            options: ["Your data", "Identity and access settings", "Application updates", "Infrastructure patching", "Application availability"],
            answers: [0, 1],
            explain: "In SaaS you mainly manage your data, identity and access settings, and device access posture. Updates, patching and availability are the provider's.",
            es: {
              q: "Con SaaS, ¿cuáles son dos elementos que siguen siendo responsabilidad del cliente?",
              options: ["Sus datos", "La configuración de identidad y acceso", "Las actualizaciones de la aplicación", "Los parches de la infraestructura", "La disponibilidad de la aplicación"],
              explain: "En SaaS usted administra principalmente sus datos, la configuración de identidad y acceso, y la postura de acceso de los dispositivos. Las actualizaciones, los parches y la disponibilidad son del proveedor."
            }
          },
          {
            type: "match",
            q: "Match each description to the cloud service type it describes.",
            values: ["IaaS", "PaaS", "SaaS"],
            targets: [
              { t: "Renting hardware and managing the operating system yourself", answer: 0 },
              { t: "Building your own application on a managed platform", answer: 1 },
              { t: "Using a fully developed expense-tracking application", answer: 2 },
              { t: "Moving on-premises workloads as they are to cloud servers", answer: 0 }
            ],
            explain: "IaaS is renting hardware, including lift-and-shift. PaaS is a managed platform for your code. SaaS is a complete application you use.",
            es: {
              q: "Relacione cada descripción con el tipo de servicio en la nube que describe.",
              values: ["IaaS", "PaaS", "SaaS"],
              targets: [
                { t: "Alquilar hardware y administrar uno mismo el sistema operativo" },
                { t: "Desarrollar una aplicación propia sobre una plataforma administrada" },
                { t: "Usar una aplicación de seguimiento de gastos completamente desarrollada" },
                { t: "Trasladar cargas de trabajo locales tal como están a servidores en la nube" }
              ],
              explain: "IaaS es alquilar hardware, incluida la migración tal cual. PaaS es una plataforma administrada para su código. SaaS es una aplicación completa que se usa."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about SaaS.",
            parts: [
              "SaaS may be the ",
              { options: ["most", "least", "equally"], answer: 1 },
              " flexible cloud service model, but it's also the ",
              { options: ["hardest", "easiest", "slowest"], answer: 1 },
              " to get up and running."
            ],
            explain: "SaaS trades flexibility for ease: least flexible, easiest to start using.",
            es: {
              q: "Complete la afirmación sobre SaaS.",
              parts: [
                "SaaS puede ser el modelo de servicio en la nube ",
                { options: ["más", "menos", "igual de"] },
                " flexible, pero también es el ",
                { options: ["más difícil", "más fácil", "más lento"] },
                " de poner en marcha."
              ],
              explain: "SaaS cambia flexibilidad por facilidad: es el menos flexible y el más fácil de empezar a usar."
            }
          },
          {
            type: "single",
            q: "A team adopts a SaaS collaboration platform. What can the team focus on, now that the provider handles the rest?",
            options: [
              "Infrastructure patching",
              "Application updates and availability",
              "User onboarding, access controls and data governance",
              "Maintaining the platform's operating systems"
            ],
            answer: 2,
            explain: "With SaaS, the team focuses on onboarding, access controls and data governance, while the provider handles patching, updates and availability.",
            es: {
              q: "Un equipo adopta una plataforma de colaboración SaaS. ¿En qué puede concentrarse ahora que el proveedor se ocupa del resto?",
              options: [
                "En los parches de la infraestructura",
                "En las actualizaciones y la disponibilidad de la aplicación",
                "En la incorporación de usuarios, los controles de acceso y la gobernanza de datos",
                "En mantener los sistemas operativos de la plataforma"
              ],
              explain: "Con SaaS, el equipo se concentra en la incorporación de usuarios, los controles de acceso y la gobernanza de datos, mientras el proveedor se ocupa de parches, actualizaciones y disponibilidad."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "SaaS has the lowest operational overhead for customers.", answer: true, explain: "The provider manages almost the entire application stack." },
              { s: "With SaaS, the customer is responsible for application maintenance.", answer: false, explain: "Application maintenance is the provider's responsibility in SaaS." },
              { s: "Productivity applications are a common SaaS scenario.", answer: true, explain: "Email and messaging, productivity, and finance and expense tracking are the listed SaaS scenarios." }
            ],
            es: {
              statements: [
                { s: "SaaS tiene la menor carga operativa para los clientes.", explain: "El proveedor administra casi toda la pila de la aplicación." },
                { s: "Con SaaS, el cliente es responsable del mantenimiento de la aplicación.", explain: "El mantenimiento de la aplicación es responsabilidad del proveedor en SaaS." },
                { s: "Las aplicaciones de productividad son un escenario habitual de SaaS.", explain: "El correo y la mensajería, la productividad, y las finanzas y el seguimiento de gastos son los escenarios listados de SaaS." }
              ]
            }
          }
        ]
      }
    }
  ]
});
