// AZ-900 > Describe Azure architecture and services > Describe Azure networking services
Catalog.module("az-900", {
  id: "networking",
  name: "Describe Azure networking services",
  es: { name: "Descripción de los servicios de red de Azure" },
  url: "https://learn.microsoft.com/en-us/training/modules/describe-azure-networking-services/",
  quiz: {
    added: "2026-10-26",
    items: [
      {
        type: "single",
        topic: "ExpressRoute",
        q: "A bank needs high-bandwidth connectivity between its datacenter and Azure, with consistent latency, and critical traffic must never cross the public internet. What should it use?",
        options: ["A site-to-site VPN", "A point-to-site VPN", "Azure ExpressRoute", "Virtual network peering"],
        answer: 2,
        explain: "ExpressRoute is a private connection through a connectivity provider that bypasses the internet. Site-to-site VPNs are encrypted but still travel over the internet; peering connects virtual networks to each other.",
        es: {
          topic: "ExpressRoute",
          q: "Un banco necesita conectividad de gran ancho de banda entre su centro de datos y Azure, con latencia constante, y el tráfico crítico nunca debe pasar por la internet pública. ¿Qué debe usar?",
          options: ["Una VPN de sitio a sitio", "Una VPN de punto a sitio", "Azure ExpressRoute", "El emparejamiento de redes virtuales"],
          explain: "ExpressRoute es una conexión privada a través de un proveedor de conectividad que evita internet. Las VPN de sitio a sitio están cifradas pero viajan por internet; el emparejamiento conecta redes virtuales entre sí."
        }
      },
      {
        type: "match",
        topic: "Virtual networking",
        q: "Match each description to the Azure networking feature.",
        values: ["Network security group", "Network virtual appliance", "Virtual network peering", "Route table"],
        targets: [
          { t: "Allows or blocks traffic based on source and destination IP, port and protocol", answer: 0 },
          { t: "A specialized VM that runs a firewall or WAN optimization", answer: 1 },
          { t: "Connects two virtual networks privately over the Microsoft backbone", answer: 2 },
          { t: "Custom rules that control how packets are routed between subnets", answer: 3 }
        ],
        explain: "NSGs filter with security rules, NVAs perform a specific network function, peering links virtual networks, and route tables control routing.",
        es: {
          topic: "Redes virtuales",
          q: "Relacione cada descripción con la característica de red de Azure.",
          values: ["Grupo de seguridad de red", "Aplicación virtual de red", "Emparejamiento de redes virtuales", "Tabla de rutas"],
          targets: [
            { t: "Permite o bloquea tráfico según la IP de origen y destino, el puerto y el protocolo" },
            { t: "Una máquina virtual especializada que ejecuta un firewall u optimización de WAN" },
            { t: "Conecta dos redes virtuales de forma privada por la red troncal de Microsoft" },
            { t: "Reglas personalizadas que controlan cómo se enrutan los paquetes entre subredes" }
          ],
          explain: "Los NSG filtran con reglas de seguridad, las NVA cumplen una función de red específica, el emparejamiento une redes virtuales y las tablas de rutas controlan el enrutamiento."
        }
      },
      {
        type: "single",
        topic: "Azure VPN",
        q: "A company wants two tunnels from its on-premises VPN device, each to a different public IP address of the Azure VPN gateway, using BGP. Which configuration is this?",
        options: ["Active/standby", "Active/active", "Policy-based", "Point-to-site"],
        answer: 1,
        explain: "In active/active, each gateway instance gets its own public IP and you create separate tunnels to each, which requires BGP. Active/standby is the default.",
        es: {
          topic: "VPN de Azure",
          q: "Una empresa quiere dos túneles desde su dispositivo VPN local, cada uno a una dirección IP pública distinta de la puerta de enlace VPN de Azure, usando BGP. ¿Qué configuración es esta?",
          options: ["Activa/en espera", "Activa/activa", "Basada en directivas", "De punto a sitio"],
          explain: "En la configuración activa/activa, cada instancia de la puerta de enlace tiene su propia IP pública y se crean túneles separados hacia cada una, lo que requiere BGP. Activa/en espera es la predeterminada."
        }
      },
      {
        type: "multi",
        topic: "Virtual networking",
        q: "Which two options connect on-premises users or networks to an Azure virtual network through an encrypted connection over the internet?",
        options: ["Site-to-site VPN", "Point-to-site VPN", "Azure ExpressRoute", "Virtual network peering", "A private endpoint"],
        answers: [0, 1],
        explain: "Both VPN types are encrypted and use the internet. ExpressRoute is private and doesn't use the internet; peering connects virtual networks; private endpoints give a resource a private IP.",
        es: {
          topic: "Redes virtuales",
          q: "¿Cuáles son dos opciones que conectan usuarios o redes locales con una red virtual de Azure mediante una conexión cifrada por internet?",
          options: ["VPN de sitio a sitio", "VPN de punto a sitio", "Azure ExpressRoute", "Emparejamiento de redes virtuales", "Un punto de conexión privado"],
          explain: "Ambos tipos de VPN están cifrados y usan internet. ExpressRoute es privado y no usa internet; el emparejamiento conecta redes virtuales; los puntos de conexión privados le dan a un recurso una IP privada."
        }
      },
      {
        type: "single",
        topic: "Azure DNS",
        q: "A company wants to manage the DNS records for its domain using the same credentials, Azure RBAC and billing as its other Azure services. What should it use?",
        options: ["Azure DNS", "Azure ExpressRoute", "A network virtual appliance", "Virtual network peering"],
        answer: 0,
        explain: "Azure DNS hosts DNS domains on Azure infrastructure and uses the same credentials, APIs, tools and billing as other Azure services.",
        es: {
          topic: "Azure DNS",
          q: "Una empresa quiere administrar los registros DNS de su dominio con las mismas credenciales, el mismo Azure RBAC y la misma facturación que sus otros servicios de Azure. ¿Qué debe usar?",
          options: ["Azure DNS", "Azure ExpressRoute", "Una aplicación virtual de red", "El emparejamiento de redes virtuales"],
          explain: "Azure DNS hospeda dominios DNS en la infraestructura de Azure y usa las mismas credenciales, API, herramientas y facturación que los demás servicios de Azure."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "Azure VPN", s: "During an unplanned disruption, the standby VPN gateway instance takes over connections without user intervention.", answer: true, explain: "Connections are briefly interrupted, typically restored within 90 seconds for unplanned disruptions." },
          { topic: "ExpressRoute", s: "With ExpressRoute, DNS queries never use the public internet.", answer: false, explain: "DNS queries, certificate revocation list checks and Azure CDN requests still go over the public internet." },
          { topic: "Virtual networking", s: "Peered virtual networks can be in different Azure regions.", answer: true, explain: "That lets you build a global interconnected network through Azure." }
        ],
        es: {
          statements: [
            { topic: "VPN de Azure", s: "Durante una interrupción no planificada, la instancia en espera de la puerta de enlace VPN asume las conexiones sin intervención del usuario.", explain: "Las conexiones se interrumpen brevemente y suelen restablecerse en hasta 90 segundos ante interrupciones no planificadas." },
            { topic: "ExpressRoute", s: "Con ExpressRoute, las consultas DNS nunca usan la internet pública.", explain: "Las consultas DNS, las comprobaciones de listas de revocación de certificados y las solicitudes a Azure CDN siguen pasando por la internet pública." },
            { topic: "Redes virtuales", s: "Las redes virtuales emparejadas pueden estar en distintas regiones de Azure.", explain: "Eso permite crear una red global interconectada a través de Azure." }
          ]
        }
      },
      {
        type: "dropdown",
        topic: "Azure VPN",
        q: "Complete the statement about ExpressRoute failover.",
        parts: [
          "To keep connectivity if an ExpressRoute circuit has an outage, you can configure a ",
          { options: ["VPN gateway", "second network security group", "DNS alias record"], answer: 0 },
          " as a secure failover path that uses ",
          { options: ["the internet", "the same ExpressRoute circuit", "virtual network peering"], answer: 0 },
          "."
        ],
        explain: "ExpressRoute circuits have built-in resiliency but can still be affected by cable or location outages, so a VPN gateway over the internet can serve as a backup path.",
        es: {
          topic: "VPN de Azure",
          q: "Complete la afirmación sobre la conmutación por error de ExpressRoute.",
          parts: [
            "Para mantener la conectividad si un circuito de ExpressRoute sufre una interrupción, se puede configurar una ",
            { options: ["puerta de enlace VPN", "segunda regla de grupo de seguridad de red", "registro de alias de DNS"] },
            " como ruta segura de conmutación por error que usa ",
            { options: ["internet", "el mismo circuito de ExpressRoute", "el emparejamiento de redes virtuales"] },
            "."
          ],
          explain: "Los circuitos de ExpressRoute tienen resiliencia integrada pero pueden verse afectados por problemas en los cables o en la ubicación, así que una puerta de enlace VPN por internet puede servir de respaldo."
        }
      },
      {
        type: "single",
        topic: "Virtual networking",
        q: "A remote employee's laptop needs an encrypted connection to an Azure virtual network, initiated from the laptop itself. Which connection type fits?",
        options: ["Site-to-site VPN", "Point-to-site VPN", "ExpressRoute Global Reach", "Virtual network peering"],
        answer: 1,
        explain: "Point-to-site connections go from a single computer outside your environment into the network; the client initiates the encrypted VPN connection.",
        es: {
          topic: "Redes virtuales",
          q: "La laptop de un empleado remoto necesita una conexión cifrada a una red virtual de Azure, iniciada desde la propia laptop. ¿Qué tipo de conexión corresponde?",
          options: ["VPN de sitio a sitio", "VPN de punto a sitio", "ExpressRoute Global Reach", "Emparejamiento de redes virtuales"],
          explain: "Las conexiones de punto a sitio van desde un equipo fuera de su entorno hacia la red; el cliente inicia la conexión VPN cifrada."
        }
      },
      {
        type: "single",
        topic: "Azure DNS",
        q: "A DNS record must always resolve to an Azure public IP address that might change. Which Azure DNS feature handles this automatically?",
        options: ["Private DNS domains", "Alias record sets", "Anycast networking", "Resource locks"],
        answer: 1,
        explain: "An alias record set points to the Azure resource itself, so if the underlying IP changes the record updates during resolution.",
        es: {
          topic: "Azure DNS",
          q: "Un registro DNS siempre debe resolver a una dirección IP pública de Azure que podría cambiar. ¿Qué característica de Azure DNS lo resuelve automáticamente?",
          options: ["Los dominios DNS privados", "Los registros de alias", "Las redes anycast", "Los bloqueos de recursos de la zona DNS"],
          explain: "Un conjunto de registros de alias apunta al recurso de Azure, así que si cambia la IP subyacente el registro se actualiza durante la resolución."
        }
      },
      {
        type: "single",
        topic: "ExpressRoute",
        q: "Which protocol does ExpressRoute use to exchange routes dynamically between on-premises networks and Azure?",
        options: ["BGP", "DNS", "A preshared key exchanged with the gateway", "Network security group rules"],
        answer: 0,
        explain: "ExpressRoute uses BGP for dynamic routing between your network and the Microsoft cloud.",
        es: {
          topic: "ExpressRoute",
          q: "¿Qué protocolo usa ExpressRoute para intercambiar rutas dinámicamente entre las redes locales y Azure?",
          options: ["BGP", "DNS", "Una clave precompartida con la puerta de enlace", "Reglas de grupos de seguridad de red"],
          explain: "ExpressRoute usa BGP para el enrutamiento dinámico entre su red y la nube de Microsoft."
        }
      },
      {
        type: "single",
        topic: "Virtual networking",
        q: "A public website hosted in Azure must be reachable from anywhere in the world. What kind of endpoint does it need?",
        options: ["A private endpoint", "A public endpoint", "A service endpoint on the subnet", "A point-to-site connection"],
        answer: 1,
        explain: "Public endpoints have a public IP address and can be accessed from anywhere. Private endpoints have a private IP within the virtual network.",
        es: {
          topic: "Redes virtuales",
          q: "Un sitio web público hospedado en Azure debe ser accesible desde cualquier parte del mundo. ¿Qué tipo de punto de conexión necesita?",
          options: ["Un punto de conexión privado", "Un punto de conexión público", "Un punto de conexión de servicio en la subred", "Una conexión de punto a sitio"],
          explain: "Los puntos de conexión públicos tienen una IP pública y se puede acceder a ellos desde cualquier lugar. Los privados tienen una IP privada dentro de la red virtual."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "Azure DNS", s: "You can buy a domain name directly in Azure DNS.", answer: false, explain: "You buy domains through App Service domains or a third-party registrar, then host them in Azure DNS." },
          { topic: "Azure VPN", s: "Route-based VPNs are more resilient to topology changes, such as creating new subnets.", answer: true, explain: "That's why they're the preferred connection method for on-premises devices." },
          { topic: "ExpressRoute", s: "ExpressRoute can connect to Microsoft 365 services as well as Azure.", answer: true, explain: "It connects to Microsoft cloud services such as Azure and Microsoft 365." }
        ],
        es: {
          statements: [
            { topic: "Azure DNS", s: "Se puede comprar un nombre de dominio directamente en Azure DNS.", explain: "Los dominios se compran con dominios de App Service o un registrador externo, y luego se hospedan en Azure DNS." },
            { topic: "VPN de Azure", s: "Las VPN basadas en rutas son más resistentes a los cambios de topología, como la creación de subredes nuevas.", explain: "Por eso son el método de conexión preferido para los dispositivos locales." },
            { topic: "ExpressRoute", s: "ExpressRoute puede conectarse a los servicios de Microsoft 365 además de a Azure.", explain: "Conecta con servicios en la nube de Microsoft como Azure y Microsoft 365." }
          ]
        }
      }
    ]
  },
  units: [
    {
      id: "virtual-networking",
      name: "Describe Azure virtual networking",
      es: { name: "Descripción de las redes virtuales de Azure" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-azure-networking-services/2-virtual-network",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "single",
            q: "A database should be reachable only from resources inside a virtual network, using a private IP address from that network's address space. What should you use?",
            options: ["A public endpoint", "A private endpoint", "A public load balancer", "A point-to-site VPN"],
            answer: 1,
            explain: "Private endpoints exist within a virtual network and have a private IP from its address space. Public endpoints can be reached from anywhere.",
            es: {
              q: "Una base de datos solo debe ser accesible para recursos dentro de una red virtual, usando una IP privada del espacio de direcciones de esa red. ¿Qué debe usar?",
              options: ["Un punto de conexión público", "Un punto de conexión privado", "Un equilibrador de carga público", "Una VPN de punto a sitio"],
              explain: "Los puntos de conexión privados existen dentro de una red virtual y tienen una IP privada de su espacio de direcciones. Los públicos son accesibles desde cualquier lugar."
            }
          },
          {
            type: "match",
            q: "Match each description to the way of connecting on-premises resources to Azure.",
            values: ["Point-to-site VPN", "Site-to-site VPN", "Azure ExpressRoute"],
            targets: [
              { t: "A remote computer initiates an encrypted connection to the virtual network", answer: 0 },
              { t: "An on-premises VPN device links to the Azure VPN gateway over the internet", answer: 1 },
              { t: "Dedicated private connectivity that doesn't travel over the internet", answer: 2 }
            ],
            explain: "Point-to-site is per device, site-to-site links whole networks over the internet, and ExpressRoute is private with more bandwidth and security.",
            es: {
              q: "Relacione cada descripción con la forma de conectar recursos locales con Azure.",
              values: ["VPN de punto a sitio", "VPN de sitio a sitio", "Azure ExpressRoute"],
              targets: [
                { t: "Un equipo remoto inicia una conexión cifrada a la red virtual" },
                { t: "Un dispositivo VPN local se conecta a la puerta de enlace VPN de Azure por internet" },
                { t: "Conectividad privada dedicada que no viaja por internet" }
              ],
              explain: "La de punto a sitio es por dispositivo, la de sitio a sitio une redes completas por internet, y ExpressRoute es privada con más ancho de banda y seguridad."
            }
          },
          {
            type: "single",
            q: "You need rules that allow or block traffic between subnets based on source and destination IP address, port and protocol. What should you use?",
            options: ["A route table", "A network security group", "Virtual network peering", "A private DNS zone"],
            answer: 1,
            explain: "Network security groups contain inbound and outbound security rules that allow or block traffic on those factors.",
            es: {
              q: "Necesita reglas que permitan o bloqueen el tráfico entre subredes según la IP de origen y destino, el puerto y el protocolo. ¿Qué debe usar?",
              options: ["Una tabla de rutas", "Un grupo de seguridad de red", "El emparejamiento de redes virtuales", "Una zona DNS privada"],
              explain: "Los grupos de seguridad de red contienen reglas de seguridad de entrada y salida que permiten o bloquean el tráfico según esos factores."
            }
          },
          {
            type: "single",
            q: "Two virtual networks in different regions must communicate privately, without traffic entering the public internet. What should you configure?",
            options: ["A public load balancer", "Virtual network peering", "A point-to-site VPN", "Public endpoints on each resource"],
            answer: 1,
            explain: "Peering connects virtual networks directly; traffic is private and travels on the Microsoft backbone, even across regions.",
            es: {
              q: "Dos redes virtuales en distintas regiones deben comunicarse de forma privada, sin que el tráfico pase por la internet pública. ¿Qué debe configurar?",
              options: ["Un equilibrador de carga público", "El emparejamiento de redes virtuales", "Una VPN de punto a sitio", "Puntos de conexión públicos en cada recurso"],
              explain: "El emparejamiento conecta redes virtuales directamente; el tráfico es privado y viaja por la red troncal de Microsoft, incluso entre regiones."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about routing in Azure virtual networks.",
            parts: [
              "",
              { options: ["Route tables", "Network security groups", "Private endpoints"], answer: 0 },
              " let you define rules about how traffic is directed, while ",
              { options: ["BGP", "DNS", "a network virtual appliance"], answer: 0 },
              " propagates on-premises routes to Azure virtual networks through VPN gateways, Azure Route Server or ExpressRoute."
            ],
            explain: "Route tables and user-defined routes control routing between subnets; BGP propagates on-premises routes into Azure.",
            es: {
              q: "Complete la afirmación sobre el enrutamiento en las redes virtuales de Azure.",
              parts: [
                "Las ",
                { options: ["tablas de rutas", "reglas de grupos de seguridad de red", "direcciones de puntos de conexión privados"] },
                " permiten definir reglas sobre cómo se dirige el tráfico, mientras que ",
                { options: ["BGP", "DNS", "una aplicación virtual de red"] },
                " propaga las rutas locales a las redes virtuales de Azure mediante puertas de enlace VPN, Azure Route Server o ExpressRoute."
              ],
              explain: "Las tablas de rutas y las rutas definidas por el usuario controlan el enrutamiento entre subredes; BGP propaga las rutas locales hacia Azure."
            }
          },
          {
            type: "multi",
            q: "Which two options enable incoming connections from the internet to an Azure resource?",
            options: [
              "Assign it a public IP",
              "Use a public load balancer",
              "Expose it only through a private endpoint in the VNet",
              "Peer its virtual network with another virtual network",
              "Use a service endpoint"
            ],
            answers: [0, 1],
            explain: "Internet inbound access comes from a public IP or a public load balancer. Private endpoints, peering and service endpoints keep traffic private.",
            es: {
              q: "¿Cuáles son dos opciones que habilitan conexiones entrantes desde internet a un recurso de Azure?",
              options: [
                "Asignarle una IP pública",
                "Usar un equilibrador de carga público",
                "Exponerlo solo con un punto de conexión privado en la red virtual",
                "Emparejar su red virtual con otra red virtual",
                "Usar un punto de conexión de servicio"
              ],
              explain: "El acceso entrante desde internet viene de una IP pública o de un equilibrador de carga público. Los puntos de conexión privados, el emparejamiento y los puntos de conexión de servicio mantienen el tráfico privado."
            }
          },
          {
            type: "single",
            q: "A company needs a specialized VM in its virtual network that acts like a hardened appliance to run a firewall. What is this called?",
            options: ["A network virtual appliance", "A VPN gateway with firewall rules", "A network security group", "A route table with user-defined routes"],
            answer: 0,
            explain: "A network virtual appliance is a specialized VM that performs a network function such as a firewall or WAN optimization.",
            es: {
              q: "Una empresa necesita en su red virtual una máquina virtual especializada que funcione como un dispositivo reforzado para ejecutar un firewall. ¿Cómo se llama?",
              options: ["Una aplicación virtual de red", "Una puerta de enlace VPN con reglas de firewall", "Un grupo de seguridad de red", "Una tabla de rutas definidas por el usuario"],
              explain: "Una aplicación virtual de red es una máquina virtual especializada que cumple una función de red, como un firewall u optimización de WAN."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "The IP range you define for a virtual network isn't routable on the internet.", answer: true, explain: "The range only exists within the virtual network." },
              { s: "Traffic between peered virtual networks travels over the public internet.", answer: false, explain: "Peering traffic is private and stays on the Microsoft backbone." },
              { s: "Service endpoints can connect virtual networks to resource types such as Azure SQL databases and storage accounts.", answer: true, explain: "They improve security and provide optimal routing between resources." }
            ],
            es: {
              statements: [
                { s: "El rango de IP que define para una red virtual no es enrutable en internet.", explain: "El rango solo existe dentro de la red virtual." },
                { s: "El tráfico entre redes virtuales emparejadas viaja por la internet pública.", explain: "El tráfico de emparejamiento es privado y queda en la red troncal de Microsoft." },
                { s: "Los puntos de conexión de servicio pueden conectar redes virtuales con tipos de recursos como bases de datos de Azure SQL y cuentas de almacenamiento.", explain: "Mejoran la seguridad y ofrecen un enrutamiento óptimo entre recursos." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "vpn",
      name: "Describe Azure virtual private networks",
      es: { name: "Descripción de las redes privadas virtuales de Azure" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-azure-networking-services/3-virtual-private-networks",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "single",
            q: "A company needs point-to-site connections, connections between virtual networks and coexistence with an ExpressRoute gateway. Which VPN gateway type must it use?",
            options: ["Policy-based", "Route-based", "Either type, since both support all of these", "No gateway; peering covers these"],
            answer: 1,
            explain: "Route-based gateways are required for VNet-to-VNet, point-to-site, multisite and ExpressRoute coexistence, and are the preferred method for on-premises devices.",
            es: {
              q: "Una empresa necesita conexiones de punto a sitio, conexiones entre redes virtuales y coexistencia con una puerta de enlace de ExpressRoute. ¿Qué tipo de puerta de enlace VPN debe usar?",
              options: ["Basada en directivas", "Basada en rutas", "Cualquiera de los dos, porque ambos admiten todo esto", "Ninguna; el emparejamiento cubre esto"],
              explain: "Las puertas de enlace basadas en rutas son necesarias para conexiones entre redes virtuales, de punto a sitio, multisitio y para coexistir con ExpressRoute, y son el método preferido para dispositivos locales."
            }
          },
          {
            type: "match",
            q: "Match each requirement to the VPN gateway connection type.",
            values: ["Site-to-site", "Point-to-site", "Network-to-network"],
            targets: [
              { t: "Connect an on-premises datacenter to a virtual network", answer: 0 },
              { t: "Connect an individual device to a virtual network", answer: 1 },
              { t: "Connect a virtual network to another virtual network", answer: 2 }
            ],
            explain: "Site-to-site links datacenters, point-to-site links individual devices, and network-to-network links virtual networks, all encrypted in a private tunnel.",
            es: {
              q: "Relacione cada requisito con el tipo de conexión de la puerta de enlace VPN.",
              values: ["De sitio a sitio", "De punto a sitio", "De red a red"],
              targets: [
                { t: "Conectar un centro de datos local con una red virtual" },
                { t: "Conectar un dispositivo individual con una red virtual" },
                { t: "Conectar una red virtual con otra red virtual" }
              ],
              explain: "La de sitio a sitio une centros de datos, la de punto a sitio une dispositivos individuales y la de red a red une redes virtuales, todas cifradas en un túnel privado."
            }
          },
          {
            type: "single",
            q: "How are Azure VPN gateways deployed by default, even if you see only one gateway resource?",
            options: ["As a single instance with no failover", "As two instances in an active/standby configuration", "As two instances in an active/active configuration", "As one instance per availability zone"],
            answer: 1,
            explain: "By default there are two instances in active/standby; the standby takes over automatically during maintenance or disruptions.",
            es: {
              q: "¿Cómo se implementan de forma predeterminada las puertas de enlace VPN de Azure, aunque solo vea un recurso de puerta de enlace?",
              options: ["Como una sola instancia sin conmutación por error", "Como dos instancias en configuración activa/en espera", "Como dos instancias en configuración activa/activa", "Como una instancia por zona de disponibilidad"],
              explain: "De forma predeterminada hay dos instancias en configuración activa/en espera; la que está en espera asume automáticamente durante el mantenimiento o las interrupciones."
            }
          },
          {
            type: "single",
            q: "A company already uses ExpressRoute and wants a backup path in case its circuit suffers a physical outage. What does the unit recommend?",
            options: [
              "A second ExpressRoute circuit in the same location only",
              "A VPN gateway over the internet as a fallback",
              "Virtual network peering between Azure and the on-premises network",
              "A policy-based gateway with no encryption"
            ],
            answer: 1,
            explain: "A VPN gateway over the internet can serve as a secure failover path for ExpressRoute, ensuring there's always a connection.",
            es: {
              q: "Una empresa ya usa ExpressRoute y quiere una ruta de respaldo por si su circuito sufre una interrupción física. ¿Qué recomienda la unidad?",
              options: [
                "Solo un segundo circuito de ExpressRoute en la misma ubicación",
                "Una puerta de enlace VPN por internet como respaldo",
                "El emparejamiento de redes virtuales entre Azure y la red del entorno local",
                "Una puerta de enlace basada en directivas sin cifrado"
              ],
              explain: "Una puerta de enlace VPN por internet puede servir como ruta segura de conmutación por error para ExpressRoute, de modo que siempre haya conexión."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about VPN gateway types.",
            parts: [
              "Policy-based gateways specify ",
              { options: ["statically the IP addresses", "dynamically through BGP", "randomly"], answer: 0 },
              " of packets to encrypt through each tunnel, and in Azure the authentication method for both gateway types is ",
              { options: ["a preshared key", "a certificate only", "an MFA prompt"], answer: 0 },
              "."
            ],
            explain: "Policy-based gateways use static IP sets; route-based ones use IP routing. Azure uses a preshared key for authentication regardless of VPN type.",
            es: {
              q: "Complete la afirmación sobre los tipos de puerta de enlace VPN.",
              parts: [
                "Las puertas de enlace basadas en directivas especifican ",
                { options: ["de forma estática las direcciones IP", "de forma dinámica mediante BGP", "de forma aleatoria"] },
                " de los paquetes que se cifran por cada túnel, y en Azure el método de autenticación de ambos tipos es ",
                { options: ["una clave precompartida", "solo un certificado", "un aviso de MFA"] },
                "."
              ],
              explain: "Las puertas de enlace basadas en directivas usan conjuntos estáticos de IP; las basadas en rutas usan el enrutamiento IP. Azure usa una clave precompartida para autenticar sin importar el tipo de VPN."
            }
          },
          {
            type: "multi",
            q: "Which two types of connectivity require a route-based VPN gateway?",
            options: [
              "Connections between virtual networks",
              "Coexistence with an Azure ExpressRoute gateway",
              "Encryption based only on static IP lists",
              "Connectivity without any routing",
              "A single on-premises site with a static policy"
            ],
            answers: [0, 1],
            explain: "VNet-to-VNet, point-to-site, multisite and ExpressRoute coexistence all require route-based gateways.",
            es: {
              q: "¿Cuáles son dos tipos de conectividad que requieren una puerta de enlace VPN basada en rutas?",
              options: [
                "Las conexiones entre redes virtuales",
                "La coexistencia con una puerta de enlace de Azure ExpressRoute",
                "El cifrado basado solo en listas estáticas de IP",
                "La conectividad sin ningún enrutamiento",
                "Un solo sitio local con una directiva estática"
              ],
              explain: "Las conexiones entre redes virtuales, de punto a sitio, multisitio y la coexistencia con ExpressRoute requieren puertas de enlace basadas en rutas."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "You can deploy only one VPN gateway in each virtual network.", answer: true, explain: "One gateway can still connect to multiple locations." },
              { s: "In an active/active configuration, both gateway instances share the same public IP address.", answer: false, explain: "Each instance gets a unique public IP address, with separate tunnels to each." },
              { s: "Zone-redundant VPN gateways use Standard public IP addresses instead of Basic.", answer: true, explain: "They also require different gateway SKUs." }
            ],
            es: {
              statements: [
                { s: "Solo se puede implementar una puerta de enlace VPN por red virtual.", explain: "Una puerta de enlace igual puede conectarse a varias ubicaciones." },
                { s: "En una configuración activa/activa, ambas instancias de la puerta de enlace comparten la misma IP pública.", explain: "Cada instancia tiene una IP pública única, con túneles separados hacia cada una." },
                { s: "Las puertas de enlace VPN con redundancia de zona usan direcciones IP públicas Estándar en lugar de Básicas.", explain: "También requieren SKU de puerta de enlace distintas." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "expressroute",
      name: "Describe Azure ExpressRoute",
      es: { name: "Descripción de Azure ExpressRoute" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-azure-networking-services/4-expressroute",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "single",
            q: "A company has strict compliance requirements for data transfer, needs predictable latency and high throughput between its datacenter and Azure, and wants to keep critical traffic off the public internet. What should it choose?",
            options: ["A point-to-site VPN", "A site-to-site VPN", "Azure ExpressRoute", "Azure DNS private zones"],
            answer: 2,
            explain: "Those are exactly the unit's reasons to choose ExpressRoute: private, consistent connectivity with predictable performance.",
            es: {
              q: "Una empresa tiene requisitos de cumplimiento estrictos para la transferencia de datos, necesita latencia predecible y alto rendimiento entre su centro de datos y Azure, y quiere mantener el tráfico crítico fuera de la internet pública. ¿Qué debe elegir?",
              options: ["Una VPN de punto a sitio", "Una VPN de sitio a sitio", "Azure ExpressRoute", "Zonas privadas de Azure DNS"],
              explain: "Son justamente los motivos de la unidad para elegir ExpressRoute: conectividad privada y constante con rendimiento predecible."
            }
          },
          {
            type: "single",
            q: "A company has an office in Asia and a datacenter in Europe, each with its own ExpressRoute circuit. It wants them to exchange data without using the public internet. What should it enable?",
            options: ["Virtual network peering", "ExpressRoute Global Reach", "A point-to-site VPN", "An alias record set"],
            answer: 1,
            explain: "Global Reach connects ExpressRoute circuits so on-premises sites communicate over the Microsoft network instead of the internet.",
            es: {
              q: "Una empresa tiene una oficina en Asia y un centro de datos en Europa, cada uno con su propio circuito de ExpressRoute. Quiere que intercambien datos sin usar la internet pública. ¿Qué debe habilitar?",
              options: ["El emparejamiento de redes virtuales", "ExpressRoute Global Reach", "Una VPN de punto a sitio", "Un conjunto de registros de alias"],
              explain: "Global Reach conecta circuitos de ExpressRoute para que los sitios locales se comuniquen por la red de Microsoft en lugar de internet."
            }
          },
          {
            type: "multi",
            q: "Which two services can you access directly through ExpressRoute?",
            options: ["Microsoft Office 365", "Azure Storage", "Printers on another company's network", "SaaS apps hosted by other cloud providers", "Home broadband connections"],
            answers: [0, 1],
            explain: "ExpressRoute gives direct access to Office 365, Dynamics 365, Azure compute services and Azure cloud services such as Cosmos DB and Storage.",
            es: {
              q: "¿Cuáles son dos servicios a los que se puede acceder directamente mediante ExpressRoute?",
              options: ["Microsoft Office 365", "Azure Storage", "Impresoras de la red de otra empresa", "Aplicaciones SaaS hospedadas por otros proveedores de nube", "Conexiones de banda ancha hogareñas"],
              explain: "ExpressRoute da acceso directo a Office 365, Dynamics 365, servicios de proceso de Azure y servicios en la nube como Cosmos DB y Storage."
            }
          },
          {
            type: "single",
            q: "Even with an ExpressRoute connection in place, which traffic is still sent over the public internet?",
            options: [
              "All traffic to Azure Virtual Machines",
              "DNS queries and CRL checks",
              "Traffic between on-premises sites connected with Global Reach",
              "Traffic to Azure Storage accounts in the same region"
            ],
            answer: 1,
            explain: "The unit's security note: DNS queries, CRL checks and Azure Content Delivery Network requests still go over the internet.",
            es: {
              q: "Aun con una conexión de ExpressRoute, ¿qué tráfico se sigue enviando por la internet pública?",
              options: [
                "Todo el tráfico hacia Azure Virtual Machines",
                "Las consultas DNS y las comprobaciones de CRL",
                "El tráfico entre sitios locales conectados con Global Reach",
                "El tráfico hacia cuentas de Azure Storage de la misma región"
              ],
              explain: "La nota de seguridad de la unidad: las consultas DNS, las comprobaciones de listas de revocación y las solicitudes a Azure Content Delivery Network siguen pasando por internet."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about ExpressRoute.",
            parts: [
              "ExpressRoute uses ",
              { options: ["BGP", "a network security group", "DNS"], answer: 0 },
              " for dynamic routing, and each private connection established through a connectivity provider is called an ",
              { options: ["ExpressRoute circuit", "ExpressRoute peering zone", "ExpressRoute VPN tunnel"], answer: 0 },
              "."
            ],
            explain: "The private connection is an ExpressRoute circuit, and routes are exchanged dynamically with BGP.",
            es: {
              q: "Complete la afirmación sobre ExpressRoute.",
              parts: [
                "ExpressRoute usa ",
                { options: ["BGP", "un grupo de seguridad de red", "DNS"] },
                " para el enrutamiento dinámico, y cada conexión privada establecida mediante un proveedor de conectividad se llama ",
                { options: ["circuito de ExpressRoute", "zona de emparejamiento de ExpressRoute", "túnel VPN de ExpressRoute"] },
                "."
              ],
              explain: "La conexión privada es un circuito de ExpressRoute, y las rutas se intercambian dinámicamente con BGP."
            }
          },
          {
            type: "single",
            q: "How does ExpressRoute provide built-in redundancy?",
            options: [
              "Providers use redundant devices, and you can add more circuits",
              "It automatically fails over to a site-to-site VPN without configuration",
              "It replicates all traffic over the public internet",
              "It relies only on availability sets in the region where the circuit terminates"
            ],
            answer: 0,
            explain: "Providers use redundant devices in every peering location for high availability, and multiple circuits can complement that.",
            es: {
              q: "¿Cómo ofrece ExpressRoute redundancia integrada?",
              options: [
                "Los proveedores usan dispositivos redundantes y se pueden sumar circuitos",
                "Conmuta automáticamente a una VPN de sitio a sitio sin configuración",
                "Replica todo el tráfico por la internet pública",
                "Depende solo de los conjuntos de disponibilidad de la región donde termina el circuito"
              ],
              explain: "Los proveedores usan dispositivos redundantes en cada ubicación de emparejamiento para lograr alta disponibilidad, y varios circuitos pueden complementarlo."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "ExpressRoute connections don't go over the public internet.", answer: true, explain: "That's why they offer more reliability, speed, consistent latency and security." },
              { s: "Each location you connect to the Microsoft cloud has its own ExpressRoute circuit.", answer: true, explain: "Offices, datacenters and other facilities each get a circuit." },
              { s: "ExpressRoute offers less consistent latency than typical internet connections.", answer: false, explain: "Bypassing the internet gives more consistent latency." }
            ],
            es: {
              statements: [
                { s: "Las conexiones de ExpressRoute no pasan por la internet pública.", explain: "Por eso ofrecen más confiabilidad, velocidad, latencia constante y seguridad." },
                { s: "Cada ubicación que se conecta a la nube de Microsoft tiene su propio circuito de ExpressRoute.", explain: "Las oficinas, los centros de datos y otras instalaciones tienen cada uno un circuito." },
                { s: "ExpressRoute ofrece una latencia menos constante que las conexiones a internet típicas.", explain: "Evitar internet da una latencia más constante." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "dns",
      name: "Describe Azure DNS",
      es: { name: "Descripción de Azure DNS" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-azure-networking-services/5-domain-name-system",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "single",
            q: "A company wants to purchase a new domain name and then manage its records in Azure. Which statement is correct?",
            options: [
              "It can buy the domain directly in Azure DNS",
              "It buys it from a registrar, then hosts it in Azure DNS",
              "Azure DNS can't host domains bought elsewhere",
              "It registers it through its ExpressRoute provider first"
            ],
            answer: 1,
            explain: "Azure DNS doesn't sell domains. You buy one via App Service domains or a registrar and then host it in Azure DNS.",
            es: {
              q: "Una empresa quiere comprar un nombre de dominio nuevo y luego administrar sus registros en Azure. ¿Qué afirmación es correcta?",
              options: [
                "Puede comprar el dominio directamente en Azure DNS",
                "Lo compra en un registrador y luego lo hospeda en Azure DNS",
                "Azure DNS no puede hospedar dominios comprados en otro lado",
                "Primero lo registra mediante su proveedor de ExpressRoute"
              ],
              explain: "Azure DNS no vende dominios. Se compra uno con dominios de App Service o un registrador y luego se hospeda en Azure DNS."
            }
          },
          {
            type: "single",
            q: "How does Azure DNS deliver fast performance and high availability for each query?",
            options: [
              "Each query is answered by a single central server",
              "Anycast routes it to the nearest server",
              "Queries are routed through ExpressRoute to avoid internet latency",
              "Queries are cached only on the client"
            ],
            answer: 1,
            explain: "Azure DNS domains are hosted on a global network of name servers, and anycast routes each query to the closest one.",
            es: {
              q: "¿Cómo logra Azure DNS un rendimiento rápido y alta disponibilidad en cada consulta?",
              options: [
                "Cada consulta la responde un único servidor central",
                "Anycast la dirige al servidor más cercano",
                "Las consultas se enrutan por ExpressRoute para evitar la latencia de internet",
                "Las consultas solo se almacenan en caché en el cliente"
              ],
              explain: "Los dominios de Azure DNS se hospedan en una red global de servidores de nombres, y anycast dirige cada consulta al más cercano."
            }
          },
          {
            type: "single",
            q: "A DNS record must point to an Azure Traffic Manager profile and stay correct even if the underlying IP address changes. Which feature fits?",
            options: ["An alias record set", "A private DNS domain", "A resource lock", "A route table"],
            answer: 0,
            explain: "Alias record sets refer to an Azure resource such as a public IP, a Traffic Manager profile or a CDN endpoint, and update automatically if its IP changes.",
            es: {
              q: "Un registro DNS debe apuntar a un perfil de Azure Traffic Manager y seguir siendo correcto aunque cambie la dirección IP subyacente. ¿Qué característica corresponde?",
              options: ["Un registro de alias", "Un dominio DNS privado", "Un bloqueo de recursos de la zona", "Una tabla de rutas"],
              explain: "Los conjuntos de registros de alias apuntan a un recurso de Azure, como una IP pública, un perfil de Traffic Manager o un punto de conexión de CDN, y se actualizan automáticamente si cambia su IP."
            }
          },
          {
            type: "single",
            q: "A company wants to use its own custom domain names inside its private virtual networks instead of Azure-provided names. What should it use?",
            options: ["Public DNS zones only", "Private DNS domains", "ExpressRoute Global Reach", "A network virtual appliance running a DNS server"],
            answer: 1,
            explain: "Azure DNS supports private DNS domains for custom names in private virtual networks.",
            es: {
              q: "Una empresa quiere usar sus propios nombres de dominio personalizados dentro de sus redes virtuales privadas en lugar de los nombres que proporciona Azure. ¿Qué debe usar?",
              options: ["Solo zonas DNS públicas", "Dominios DNS privados", "ExpressRoute Global Reach", "Una aplicación virtual de red con un servidor DNS"],
              explain: "Azure DNS admite dominios DNS privados para usar nombres personalizados en redes virtuales privadas."
            }
          },
          {
            type: "multi",
            q: "Azure DNS is based on Azure Resource Manager. Which two Resource Manager features help protect DNS resources and records?",
            options: ["Azure role-based access control (RBAC)", "Resource locks", "Anycast networking", "Alias record sets", "ExpressRoute Global Reach"],
            answers: [0, 1],
            explain: "Azure RBAC, activity logs and resource locks protect DNS resources. Anycast is about performance; alias records about resolution.",
            es: {
              q: "Azure DNS se basa en Azure Resource Manager. ¿Cuáles son dos características de Resource Manager que ayudan a proteger los recursos y registros DNS?",
              options: ["El control de acceso basado en roles de Azure (RBAC)", "Los bloqueos de recursos", "Las redes anycast", "Los conjuntos de registros de alias", "ExpressRoute Global Reach"],
              explain: "Azure RBAC, los registros de actividad y los bloqueos de recursos protegen los recursos DNS. Anycast tiene que ver con el rendimiento; los alias, con la resolución."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about Azure DNS.",
            parts: [
              "Alias record sets can refer to Azure resources such as ",
              { options: ["an Azure Traffic Manager profile", "an on-premises printer", "a VPN tunnel"], answer: 0 },
              ", and you can manage Azure DNS with the Azure portal, Azure PowerShell or ",
              { options: ["the Azure CLI", "only phone support", "only a registrar website"], answer: 0 },
              "."
            ],
            explain: "Alias records point to resources like public IPs, Traffic Manager profiles and CDN endpoints. Azure DNS is managed with the portal, PowerShell, CLI, REST API and SDKs.",
            es: {
              q: "Complete la afirmación sobre Azure DNS.",
              parts: [
                "Los conjuntos de registros de alias pueden apuntar a recursos de Azure como ",
                { options: ["un perfil de Azure Traffic Manager", "una impresora local", "un túnel VPN"] },
                ", y Azure DNS se puede administrar con Azure Portal, Azure PowerShell o ",
                { options: ["la CLI de Azure", "solo el soporte telefónico", "solo el sitio web de un registrador"] },
                "."
              ],
              explain: "Los registros de alias apuntan a recursos como IP públicas, perfiles de Traffic Manager y puntos de conexión de CDN. Azure DNS se administra con el portal, PowerShell, la CLI, la API REST y los SDK."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Azure DNS can provide DNS for your external resources, not only for Azure services.", answer: true, explain: "It manages records for Azure services and external resources alike." },
              { s: "Applications can automate DNS management through the Azure DNS REST API and SDKs.", answer: true, explain: "That's listed under ease of use." },
              { s: "Azure DNS hosts each domain on a single name server.", answer: false, explain: "Domains are hosted on Azure's global network of DNS name servers." }
            ],
            es: {
              statements: [
                { s: "Azure DNS puede proveer DNS para sus recursos externos, no solo para los servicios de Azure.", explain: "Administra registros tanto para servicios de Azure como para recursos externos." },
                { s: "Las aplicaciones pueden automatizar la administración de DNS mediante la API REST y los SDK de Azure DNS.", explain: "Aparece entre las ventajas de facilidad de uso." },
                { s: "Azure DNS hospeda cada dominio en un único servidor de nombres.", explain: "Los dominios se hospedan en la red global de servidores de nombres DNS de Azure." }
              ]
            }
          }
        ]
      }
    }
  ]
});
