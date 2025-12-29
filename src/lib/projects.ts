export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  category: 'AI' | 'Cybersecurity' | 'Data' | 'Full-Stack';
  tags: string[];
  context: string;
  problem: string;
  systemDesign: string;
  tools: string[];
  outcome: string;
  insight: string;
  github?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'oceanographic-data-pipeline',
    title: 'Oceanographic Data Pipeline',
    shortDescription: 'Processed 2.8M+ sensor records with anomaly detection and automated visual dashboards.',
    category: 'Data',
    tags: ['Python', 'PostgreSQL', 'React', 'Plotly'],
    context: 'VIT Hackathon competition requiring real-time processing of marine sensor data from INCOIS oceanographic systems.',
    problem: 'Raw oceanographic data from multiple sensor arrays contained noise, gaps, and undetected anomalies. Manual analysis was too slow for actionable insights, and existing visualization tools couldn\'t handle the data volume.',
    systemDesign: 'Built a three-tier architecture: ingestion layer with data validation and cleaning, a processing core with statistical anomaly detection algorithms, and a React-based dashboard with Plotly for real-time visualization. PostgreSQL handled temporal queries efficiently with proper indexing on timestamp columns.',
    tools: ['Python', 'PostgreSQL', 'React', 'Plotly', 'Pandas', 'NumPy'],
    outcome: 'Won 1st Place at VIT Hackathon. Improved anomaly detection accuracy by 35% compared to baseline methods. The dashboard processes and visualizes 2.8M+ records with sub-second query response.',
    insight: 'The key engineering decision was implementing z-score based anomaly detection with sliding windows rather than fixed thresholds. Ocean sensor data has natural variance that static thresholds would flag as anomalies—adaptive detection respects the data\'s inherent patterns.',
    github: 'https://github.com/T4t0126',
    featured: true,
  },
  {
    slug: 'nyayavaani-legal-ai',
    title: 'NyayaVaani – Legal AI Assistant',
    shortDescription: 'Multilingual AI assistant for legal queries with 95% accuracy, deployed as PWA and WhatsApp bot.',
    category: 'AI',
    tags: ['GPT-4', 'Speech Tools', 'PWA', 'WhatsApp Bot'],
    context: 'Building accessible legal assistance for non-English speakers who face barriers accessing legal information due to language and technical literacy.',
    problem: 'Legal information in India is often only available in English and requires technical navigation skills. Many citizens, especially in rural areas, need voice-based, multilingual access to understand their rights and legal procedures.',
    systemDesign: 'Designed a modular architecture: speech-to-text for voice input, GPT-4 for legal query processing with a carefully curated prompt context for Indian law, and text-to-speech for voice output. Deployed as both a PWA for offline-capable mobile access and a WhatsApp bot for maximum reach. Privacy-first design ensures no query data is stored after response delivery.',
    tools: ['GPT-4 API', 'Web Speech API', 'WhatsApp Business API', 'Service Workers', 'React'],
    outcome: 'Achieved 95% accuracy on test queries across 5 Indian languages. Successfully deployed with zero-retention privacy architecture. The WhatsApp integration significantly improved accessibility for users with basic smartphones.',
    insight: 'The critical insight was that legal AI isn\'t about replacing lawyers—it\'s about triage. The system excels at helping users understand if they need legal help and what type, while explicitly directing complex queries to human professionals.',
    github: 'https://github.com/T4t0126',
    featured: true,
  },
  {
    slug: 'patient-behavior-analytics',
    title: 'Patient Behavior Analytics',
    shortDescription: 'ML pipeline predicting early health risks using Decision Trees with SHAP explainability.',
    category: 'AI',
    tags: ['Scikit-learn', 'PyTorch', 'SHAP', 'Healthcare ML'],
    context: 'CellStrat Dockathon project focused on predictive healthcare—identifying patients at risk before conditions escalate.',
    problem: 'Healthcare systems are reactive rather than preventive. Existing patient data contains behavioral patterns that could predict health risks, but this signal is buried in noise and requires interpretable models that clinicians can trust.',
    systemDesign: 'Built a supervised learning pipeline with feature engineering focused on behavioral indicators (visit patterns, medication adherence, lifestyle factors). Chose Decision Trees as the base model for inherent interpretability, enhanced with SHAP values for per-prediction explanations. The pipeline includes data preprocessing, cross-validation, and a simple API for integration.',
    tools: ['Scikit-learn', 'PyTorch', 'SHAP', 'Pandas', 'Matplotlib'],
    outcome: 'Validated on a 100-person dataset with strong precision on early risk identification. The SHAP integration meant every prediction came with a clear explanation of contributing factors—critical for clinical adoption.',
    insight: 'In healthcare ML, explainability isn\'t optional. Clinicians won\'t act on a black-box prediction. The combination of Decision Trees (structurally interpretable) with SHAP (mathematically rigorous explanations) bridges the gap between model performance and clinical utility.',
    github: 'https://github.com/T4t0126',
    featured: true,
  },
  {
    slug: 'stock-trend-analyzer',
    title: 'AI-Powered Stock Trend Analyzer',
    shortDescription: 'Predicted stock movement using technical indicators and sentiment features with backtesting.',
    category: 'Data',
    tags: ['Python', 'Pandas', 'Sentiment Analysis', 'Finance ML'],
    context: 'Personal project exploring the intersection of quantitative finance and natural language processing for market prediction.',
    problem: 'Traditional technical analysis uses lagging indicators. Market sentiment, derived from news and social media, provides leading information but is difficult to quantify and integrate with price-based signals.',
    systemDesign: 'Developed a two-stream architecture: one stream processes technical indicators (RSI, MACD, Bollinger Bands) from price data, while the other performs sentiment analysis on financial news. Features from both streams feed into an ensemble model. Implemented a rigorous backtesting framework with proper train/test splits that respect temporal ordering.',
    tools: ['Python', 'Pandas', 'TextBlob/VADER', 'Scikit-learn', 'yfinance'],
    outcome: 'The ensemble approach outperformed single-signal strategies in backtesting. More importantly, the project revealed the importance of proper backtesting methodology—many apparent strategies fail when tested without look-ahead bias.',
    insight: 'The most valuable lesson was about data leakage in financial ML. It\'s trivially easy to build models that appear to predict the market but actually use future information. Rigorous temporal validation is non-negotiable.',
    github: 'https://github.com/T4t0126',
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
