export type Proposal = {
  slug: string;
  title: string;
  timeline: string;
  totalCost: string;
  phases: { name: string; cost: string; duration: string; description: string }[];
};

export const proposals: Proposal[] = [
  {
    slug: 'full-stack',
    title: 'Full-Stack Web Development Proposal',
    timeline: '6-8 Weeks',
    totalCost: '₹40,000 - ₹80,000',
    phases: [
      { name: 'Phase 1: Discovery & Design', cost: '₹10,000', duration: '1 Week', description: 'Requirements gathering, database schema design, and UI/UX wireframes.' },
      { name: 'Phase 2: Backend Development', cost: '₹20,000', duration: '2-3 Weeks', description: 'REST API development, authentication, and database setup.' },
      { name: 'Phase 3: Frontend Development', cost: '₹15,000', duration: '2 Weeks', description: 'React UI development, API integration, and responsive design.' },
      { name: 'Phase 4: Testing & Deployment', cost: '₹10,000', duration: '1 Week', description: 'E2E testing, bug fixing, and deployment to production.' }
    ]
  },
  {
    slug: 'ai-ml',
    title: 'AI & Machine Learning Proposal',
    timeline: '4-6 Weeks',
    totalCost: '₹25,000 - ₹60,000',
    phases: [
      { name: 'Phase 1: Data Audit', cost: '₹8,000', duration: '1 Week', description: 'Data collection, cleaning, and exploratory data analysis.' },
      { name: 'Phase 2: Model Development', cost: '₹20,000', duration: '2 Weeks', description: 'Training baseline models, feature engineering, and hyperparameter tuning.' },
      { name: 'Phase 3: Evaluation', cost: '₹7,000', duration: '1 Week', description: 'Model evaluation on test data, confusion matrix, and error analysis.' },
      { name: 'Phase 4: Deployment', cost: '₹10,000', duration: '1 Week', description: 'Model deployment via FastAPI and monitoring setup.' }
    ]
  },
  {
    slug: 'generative-ai',
    title: 'Generative AI (RAG Chatbot) Proposal',
    timeline: '3-5 Weeks',
    totalCost: '₹30,000 - ₹70,000',
    phases: [
      { name: 'Phase 1: Data Ingestion', cost: '₹10,000', duration: '1 Week', description: 'Document collection, chunking, and embedding generation.' },
      { name: 'Phase 2: RAG Pipeline', cost: '₹20,000', duration: '2 Weeks', description: 'Vector DB setup, retrieval logic, and LLM prompt engineering.' },
      { name: 'Phase 3: UI Development', cost: '₹10,000', duration: '1 Week', description: 'React chat interface with streaming responses.' },
      { name: 'Phase 4: Evaluation', cost: '₹5,000', duration: '3 Days', description: 'Testing answer groundedness and citation accuracy.' }
    ]
  },
  {
    slug: 'data-analytics',
    title: 'Data Analytics & BI Proposal',
    timeline: '3-5 Weeks',
    totalCost: '₹15,000 - ₹45,000',
    phases: [
      { name: 'Phase 1: KPI Definition', cost: '₹5,000', duration: '3 Days', description: 'Defining business metrics and data sources.' },
      { name: 'Phase 2: Data Pipeline', cost: '₹15,000', duration: '2 Weeks', description: 'ETL pipeline development and data warehouse setup.' },
      { name: 'Phase 3: Dashboard Build', cost: '₹15,000', duration: '1 Week', description: 'Interactive dashboards with drill-downs and filters.' },
      { name: 'Phase 4: Training', cost: '₹5,000', duration: '2 Days', description: 'Training your team to use the dashboards.' }
    ]
  },
  {
    slug: 'software-engineering',
    title: 'Software Engineering & Modernization Proposal',
    timeline: '4-6 Weeks',
    totalCost: '₹30,000 - ₹70,000',
    phases: [
      { name: 'Phase 1: Code Audit', cost: '₹10,000', duration: '1 Week', description: 'Reviewing legacy code and identifying bottlenecks.' },
      { name: 'Phase 2: Test Coverage', cost: '₹15,000', duration: '2 Weeks', description: 'Writing automated tests for critical paths.' },
      { name: 'Phase 3: Refactoring', cost: '₹25,000', duration: '2 Weeks', description: 'Incremental refactoring and modernization.' },
      { name: 'Phase 4: CI/CD Setup', cost: '₹10,000', duration: '1 Week', description: 'Setting up automated testing and deployment pipelines.' }
    ]
  },
  {
    slug: 'cloud-devops',
    title: 'Cloud Engineering & DevOps Proposal',
    timeline: '3-4 Weeks',
    totalCost: '₹20,000 - ₹50,000',
    phases: [
      { name: 'Phase 1: Infra Audit', cost: '₹5,000', duration: '3 Days', description: 'Reviewing current cloud setup and security.' },
      { name: 'Phase 2: IaC Setup', cost: '₹15,000', duration: '1 Week', description: 'Terraform scripts for reproducible environments.' },
      { name: 'Phase 3: CI/CD Pipeline', cost: '₹15,000', duration: '1 Week', description: 'Automated builds and deployments with approval gates.' },
      { name: 'Phase 4: Observability', cost: '₹10,000', duration: '1 Week', description: 'Setting up Grafana/Prometheus for monitoring.' }
    ]
  },
  {
    slug: 'crm-development',
    title: 'CRM Development Proposal',
    timeline: '5-7 Weeks',
    totalCost: '₹35,000 - ₹75,000',
    phases: [
      { name: 'Phase 1: Workflow Mapping', cost: '₹8,000', duration: '1 Week', description: 'Documenting your exact sales stages and requirements.' },
      { name: 'Phase 2: Core Build', cost: '₹25,000', duration: '2 Weeks', description: 'Building the database and API for contacts and deals.' },
      { name: 'Phase 3: UI Development', cost: '₹20,000', duration: '2 Weeks', description: 'Building the drag-and-drop pipeline dashboard.' },
      { name: 'Phase 4: Training & Go-Live', cost: '₹7,000', duration: '1 Week', description: 'Migrating your Excel data and training the sales team.' }
    ]
  },
  {
    slug: 'erp-business',
    title: 'ERP & Business Management Proposal',
    timeline: '6-8 Weeks',
    totalCost: '₹50,000 - ₹1,20,000',
    phases: [
      { name: 'Phase 1: Process Audit', cost: '₹10,000', duration: '1 Week', description: 'Mapping your procurement and inventory workflows.' },
      { name: 'Phase 2: Module Development', cost: '₹40,000', duration: '3 Weeks', description: 'Building the core inventory and order modules.' },
      { name: 'Phase 3: Data Migration', cost: '₹15,000', duration: '1 Week', description: 'Migrating legacy data into the new system.' },
      { name: 'Phase 4: Go-Live', cost: '₹10,000', duration: '1 Week', description: 'Running parallel testing and going live.' }
    ]
  },
  {
    slug: 'hrms-workforce',
    title: 'HRMS & Workforce Proposal',
    timeline: '4-6 Weeks',
    totalCost: '₹30,000 - ₹65,000',
    phases: [
      { name: 'Phase 1: Policy Review', cost: '₹5,000', duration: '3 Days', description: 'Documenting your leave and attendance policies.' },
      { name: 'Phase 2: Portal Build', cost: '₹20,000', duration: '2 Weeks', description: 'Building the employee self-service dashboard.' },
      { name: 'Phase 3: Approval Workflows', cost: '₹15,000', duration: '1 Week', description: 'Setting up automated manager approvals.' },
      { name: 'Phase 4: Rollout', cost: '₹10,000', duration: '1 Week', description: 'Onboarding employees and setting up payroll exports.' }
    ]
  },
  {
    slug: 'fintech-apps',
    title: 'FinTech Application Proposal',
    timeline: '5-7 Weeks',
    totalCost: '₹40,000 - ₹90,000',
    phases: [
      { name: 'Phase 1: Compliance Review', cost: '₹10,000', duration: '1 Week', description: 'Ensuring architecture meets security standards.' },
      { name: 'Phase 2: Integration', cost: '₹25,000', duration: '2 Weeks', description: 'Connecting to payment gateways and bank APIs.' },
      { name: 'Phase 3: Reconciliation Engine', cost: '₹20,000', duration: '2 Weeks', description: 'Building automated matching rules.' },
      { name: 'Phase 4: Audit Trail', cost: '₹10,000', duration: '1 Week', description: 'Implementing immutable logging for all transactions.' }
    ]
  },
  {
    slug: 'enterprise-ai',
    title: 'Enterprise AI (RAG) Proposal',
    timeline: '4-6 Weeks',
    totalCost: '₹35,000 - ₹80,000',
    phases: [
      { name: 'Phase 1: Data Sourcing', cost: '₹8,000', duration: '1 Week', description: 'Identifying and connecting all internal knowledge bases.' },
      { name: 'Phase 2: Vectorization', cost: '₹20,000', duration: '2 Weeks', description: 'Converting documents into searchable embeddings.' },
      { name: 'Phase 3: Chat UI', cost: '₹15,000', duration: '1 Week', description: 'Building an internal chat interface with access controls.' },
      { name: 'Phase 4: Evaluation', cost: '₹7,000', duration: '1 Week', description: 'Testing answers against real employee questions.' }
    ]
  },
  {
    slug: 'business-intelligence',
    title: 'Business Intelligence Proposal',
    timeline: '3-5 Weeks',
    totalCost: '₹20,000 - ₹50,000',
    phases: [
      { name: 'Phase 1: Metric Definition', cost: '₹5,000', duration: '3 Days', description: 'Aligning with executives on what to measure.' },
      { name: 'Phase 2: Pipeline Build', cost: '₹15,000', duration: '2 Weeks', description: 'Automating data extraction and transformation.' },
      { name: 'Phase 3: Dashboard Design', cost: '₹15,000', duration: '1 Week', description: 'Building the executive dashboard.' },
      { name: 'Phase 4: Self-Service', cost: '₹5,000', duration: '2 Days', description: 'Training teams to pull their own reports.' }
    ]
  },
  {
    slug: 'api-integration',
    title: 'API & System Integration Proposal',
    timeline: '3-5 Weeks',
    totalCost: '₹25,000 - ₹60,000',
    phases: [
      { name: 'Phase 1: API Audit', cost: '₹6,000', duration: '3 Days', description: 'Reviewing documentation of all systems involved.' },
      { name: 'Phase 2: Integration Design', cost: '₹9,000', duration: '1 Week', description: 'Designing data flow and error handling.' },
      { name: 'Phase 3: Development', cost: '₹25,000', duration: '2 Weeks', description: 'Building sync logic and webhook processors.' },
      { name: 'Phase 4: Stress Testing', cost: '₹10,000', duration: '1 Week', description: 'Testing with high volume to ensure reliability.' }
    ]
  }
];

export function getProposalBySlug(slug: string): Proposal | undefined {
  return proposals.find((p) => p.slug === slug);
}