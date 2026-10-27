// AZ-900: Microsoft Azure Fundamentals. Paths and module order follow Microsoft Learn.
Catalog.cert({
  id: "az-900",
  code: "AZ-900",
  name: "Microsoft Azure Fundamentals",
  es: { name: "Aspectos básicos de Microsoft Azure" },
  studyGuide: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900",
  paths: [
    {
      id: "cloud-concepts",
      name: "Describe cloud concepts",
      es: { name: "Descripción de los conceptos de la nube" },
      url: "https://learn.microsoft.com/en-us/training/paths/microsoft-azure-fundamentals-describe-cloud-concepts/",
      modules: ["cloud-computing", "cloud-benefits", "service-types"]
    },
    {
      id: "architecture",
      name: "Describe Azure architecture and services",
      es: { name: "Descripción de la arquitectura y los servicios de Azure" },
      url: "https://learn.microsoft.com/en-us/training/paths/azure-fundamentals-describe-azure-architecture-services/",
      modules: ["core-architecture", "compute", "networking", "storage", "identity-security"]
    },
    {
      id: "governance",
      name: "Describe Azure management and governance",
      es: { name: "Descripción de la administración y gobernanza de Azure" },
      url: "https://learn.microsoft.com/en-us/training/paths/describe-azure-management-governance/",
      modules: []
    }
  ]
});
