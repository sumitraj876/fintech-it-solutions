export type SolutionDetail = {
  id: string;
  businessProblem: string;
  howItWorks: string;
  architecture: string[];
  components: string[];
  implementationPlan: string[];
  limitations: string;
};

export const solutionDetails: SolutionDetail[] = [
  {
    id: 'rag-assistant',
    businessProblem: 'Employees spend hours searching for information across disparate PDFs, wikis, and emails. Standard LLMs hallucinate because they lack internal business context.',
    howItWorks: 'We ingest your approved documents, split them into chunks, and generate vector embeddings. When a user asks a question, the system retrieves the most relevant chunks and passes them to the LLM to generate a grounded answer with source citations.',
    architecture: [
      'Document ingestion pipeline (PDF, DOCX, HTML)',
      'Text extraction and OCR processing',
      'Chunking strategy (semantic or fixed-size)',
      'Embedding generation using a specialized model',
      'Vector database (e.g., pgvector) storage',
      'Retrieval and metadata filtering',
      'LLM prompt construction with context',
      'Answer generation with citations'
    ],
    components: ['LangChain / LlamaIndex', 'PostgreSQL + pgvector', 'OpenAI API or Llama 3', 'React streaming chat UI'],
    implementationPlan: ['Data access audit', 'Ingestion pipeline build', 'Retrieval tuning (Top-K, similarity)', 'Prompt engineering & guardrails', 'UI integration'],
    limitations: 'Answer quality is strictly limited by the quality and coverage of the ingested documents.'
  },
  {
    id: 'sales-forecast',
    businessProblem: 'Manual forecasting is inaccurate. By the time historical data is analyzed, the market has shifted, leading to overstocking or stockouts.',
    howItWorks: 'We build a time-series forecasting pipeline. We analyze historical sales, identify trend and seasonality, train models (like ARIMA or XGBoost with lag features), and output forecasts with confidence intervals.',
    architecture: [
      'Historical data extraction from ERP/CRM',
      'Data cleaning and missing value imputation',
      'Time-based train/validation/test split',
      'Feature engineering (lag features, calendar effects)',
      'Model training and hyperparameter tuning',
      'Evaluation (MAE, RMSE)',
      'Automated batch inference pipeline',
      'Dashboard visualization'
    ],
    components: ['Python (pandas, scikit-learn, XGBoost)', 'Apache Airflow for scheduling', 'Recharts / PowerBI for dashboards'],
    implementationPlan: ['Define forecasting horizon', 'Data audit & cleaning', 'Baseline modeling', 'Advanced model selection', 'Dashboard integration'],
    limitations: 'Forecasting cannot predict unprecedented black-swan events or sudden market disruptions.'
  },
  {
    id: 'vision-qc',
    businessProblem: 'Manual quality inspection on production lines is slow, inconsistent, and expensive.',
    howItWorks: 'We train a Convolutional Neural Network (CNN) or Vision Transformer to classify images of products as pass or fail. We use data augmentation to handle lighting variations and deploy the model to edge devices or a cloud API.',
    architecture: [
      'Image acquisition from line cameras',
      'Annotation and defect taxonomy definition',
      'Data augmentation (rotation, brightness, noise)',
      'Model training (ResNet, YOLO for detection)',
      'Evaluation (Precision, Recall, mAP)',
      'REST API or edge deployment',
      'Human-in-the-loop review UI'
    ],
    components: ['PyTorch / TensorFlow', 'OpenCV', 'FastAPI', 'Docker'],
    implementationPlan: ['Collect baseline images', 'Annotate dataset', 'Train baseline model', 'Iterate on false positives', 'Deploy to production line'],
    limitations: 'Requires a substantial, high-quality labeled dataset of both defective and non-defective items.'
  },
  {
    id: 'saas-mvp',
    businessProblem: 'You need to validate a SaaS idea quickly without writing fragile, unscalable code.',
    howItWorks: 'We build a multi-tenant SaaS skeleton with authentication, role-based access control, subscription billing hooks, and a secure API. We use a modular architecture so features can be added without rewriting the core.',
    architecture: [
      'Frontend (React + TypeScript)',
      'Backend REST API (Node.js + Express)',
      'PostgreSQL with tenant isolation',
      'JWT-based authentication',
      'Stripe/Razorpay billing integration',
      'Role-based access control (RBAC)',
      'Audit logging',
      'CI/CD deployment pipeline'
    ],
    components: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Docker'],
    implementationPlan: ['Architecture design', 'Database schema', 'Auth & RBAC setup', 'Core feature build', 'Deployment & testing'],
    limitations: 'Multi-tenant architecture requires careful data isolation design to prevent cross-tenant data leaks.'
  },
  {
    id: 'workflow-automation',
    businessProblem: 'Manual data entry and approval routing cause bottlenecks and human errors.',
    howItWorks: 'We build an intake pipeline that reads uploaded documents (using OCR and LLMs for extraction), structures the data, and routes it to the appropriate approval workflow based on business rules.',
    architecture: [
      'Document upload portal',
      'OCR and text extraction',
      'LLM-based structured data extraction',
      'Validation and error handling',
      'Workflow routing engine',
      'Approval notification system',
      'Audit trail storage'
    ],
    components: ['React', 'Node.js', 'Tesseract OCR', 'OpenAI API'],
    implementationPlan: ['Map approval workflow', 'Design extraction schema', 'Build pipeline', 'UI integration', 'Testing'],
    limitations: 'LLM extraction may struggle with highly unstructured or handwritten documents.'
  },
  {
    id: 'cloud-hardening',
    businessProblem: 'Deployments are manual and downtime happens without warning.',
    howItWorks: 'We implement Infrastructure as Code and robust CI/CD. We set up staging and production environments, automated testing gates, and observability (logging and monitoring).',
    architecture: [
      'Terraform/Pulumi for infrastructure',
      'GitHub Actions for CI/CD',
      'Docker containers',
      'Staging and production environments',
      'Prometheus/Grafana for monitoring',
      'Sentry for error tracking',
      'Automated rollback procedures'
    ],
    components: ['Terraform', 'GitHub Actions', 'Docker', 'AWS/GCP', 'Grafana'],
    implementationPlan: ['Infrastructure audit', 'IaC implementation', 'CI/CD pipeline setup', 'Monitoring integration', 'Handover'],
    limitations: 'Requires existing cloud accounts and a clear understanding of the deployment requirements.'
  }
];

export function getSolutionDetailById(id: string): SolutionDetail | undefined {
  return solutionDetails.find((d) => d.id === id);
}