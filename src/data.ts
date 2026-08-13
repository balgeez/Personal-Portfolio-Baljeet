export const DATA = {
  personal: {
    name: "Baljeet Singh",
    role: "Data Engineer & Analyst",
    email: "bsingh21@hawk.illinoistech.edu",
    phone: "(872) 218-2441",
    linkedin: "https://www.linkedin.com/in/baljeet-singh0111/",
    location: "Chicago, IL",
    about: "Data professional specializing in building robust ETL pipelines, optimizing cloud infrastructure, and applying machine learning to solve complex analytical problems. Passionate about transforming raw data into actionable insights.",
  },
  education: [
    {
      institution: "Illinois Institute of Technology",
      location: "Chicago, IL",
      degree: "Master of Science in Data Science",
      duration: "Aug 2024 \u2013 May 2026",
    },
    {
      institution: "Pune Institute of Computer Technology",
      location: "Pune, India",
      degree: "Bachelor of Engineering, Computer Engineering",
      duration: "Aug 2020 \u2013 May 2024",
    }
  ],
  skills: [
    { category: "Languages", items: ["Python (Pandas, NumPy)", "SQL", "R", "C++"] },
    { category: "Data & Analytics", items: ["Statistics", "A/B Testing", "Data Visualization", "Matplotlib", "Tableau", "Power BI"] },
    { category: "Cloud & Infrastructure", items: ["AWS Kinesis", "AWS Lambda", "DynamoDB", "EC2", "MySQL", "PostgreSQL", "NoSQL"] },
    { category: "ML Frameworks", items: ["PyTorch", "TensorFlow", "LangChain", "NLTK", "Neural Networks"] },
    { category: "Tools", items: ["Jupyter", "VSCode", "Anaconda", "Microsoft Excel", "Git"] },
  ],
  experience: [
    {
      title: "Data Engineer Intern",
      company: "LabelMaster",
      location: "Chicago, IL",
      duration: "Jan 2026 \u2013 May 2026",
      achievements: [
        "Built Python-based ETL pipelines integrating CRM, sales, and regulatory datasets across 500+ customer families, enabling large-scale analytics on compliance exposure and sales trends.",
        "Performed year-over-year variance analysis on large datasets to identify high-risk patterns and compliance exposure across customer locations, surfacing actionable insights for leadership.",
        "Developed classification and data cleaning workflows to normalize attributes (location, hazard profile), improving downstream data integrity and CRM reliability.",
        "Used statistical analysis to identify anomalies and behavioral patterns across millions of regulatory data points."
      ]
    },
    {
      title: "Quality Data Engineer Intern",
      company: "EuropTec USA",
      location: "Chicago, IL",
      duration: "May 2025 \u2013 Aug 2025",
      achievements: [
        "Designed and optimized ETL pipelines for 500+ datasets in Python and SQL, reducing data retrieval time by 30% and cutting inconsistencies by 25%.",
        "Optimized SQL queries to generate KPI metrics, reducing manual calculations by 80% and delivering actionable business insights to stakeholders.",
        "Built and presented Power BI dashboards to visualize KPI results, improving stakeholder decision-making speed by 40%.",
        "Designed experiments to measure process improvement impact and reported findings in clear, structured documentation."
      ]
    },
    {
      title: "Data Analyst Intern",
      company: "Aashman Foundation",
      location: "Mumbai, India",
      duration: "Jan 2023 \u2013 Jun 2023",
      achievements: [
        "Analyzed data from 10+ community programs; demographic analysis increased program participation by 20% by enabling more targeted resource allocation.",
        "Transformed raw survey and community data into structured analytical reports and dashboards to monitor program outcomes and optimize outreach strategy."
      ]
    }
  ],
  projects: [
    {
      title: "Real-Time Temperature Monitoring System",
      description: "A serverless real-time data pipeline for ingesting and processing streaming IoT data with near-zero latency.",
      achievements: [
        "Designed and implemented a serverless real-time data pipeline using AWS Kinesis, Lambda, and DynamoDB.",
        "Built event-driven Lambda functions for real-time threshold-based anomaly detection; engineered a scalable DynamoDB schema supporting high-throughput writes and millisecond-level reads.",
        "Developed a Python-based IoT sensor simulator generating hundreds of events per minute across multiple simulated sensors for end-to-end pipeline validation."
      ]
    },
    {
      title: "Multimodal Data Analysis Platform using LLM",
      description: "An advanced sentiment classification pipeline and natural language-to-SQL query interface.",
      achievements: [
        "Designed a sentiment classification pipeline using GPT-4 Omni API, achieving 90%+ accuracy across 500+ text reviews by processing multimodal data (text, images, audio) with 100% API compatibility.",
        "Built a natural language-to-SQL query interface that translates user questions into structured database queries, enabling non-technical users to analyze large datasets conversationally."
      ]
    },
    {
      title: "Deep Learning Module for Self-Driving Vehicle Using the VVE Method",
      description: "An autonomous driving model utilizing CNNs and data augmentation techniques to predict steering angles.",
      achievements: [
        "Developed an autonomous driving model by preprocessing and analyzing over 10,000 images and steering angle data, utilizing Python libraries such as Pandas, NumPy, and OpenCV.",
        "Enhanced model performance by applying data augmentation techniques, including random flipping, cropping, and brightness adjustments, increasing dataset diversity by 3x.",
        "Designed and trained a convolutional neural network (CNN) using Keras with TensorFlow backend, achieving a validation accuracy of 85% on steering angle predictions."
      ]
    },
    {
      title: "Remote Work & Housing Market Analysis",
      description: "An end-to-end R data pipeline and statistical modeling project analyzing the impact of remote work on regional home prices and employee well-being.",
      achievements: [
        "Developed an R data pipeline to clean, align, and merge disparate Zillow home-value time series and national survey data, engineering features to support downstream statistical modeling.",
        "Conducted comprehensive hypothesis testing (ANOVA, logistic regression, Spearman correlation) to evaluate relationships between remote work frequency, productivity, and employee well-being.",
        "Built linear regression models and correlation heatmaps to link remote-work adoption trends with regional home-price movements from 2015 to 2023.",
        "Visualized complex panel dataset insights utilizing advanced time-series and choropleth plots."
      ]
    }
  ],
  certifications: [
    {
      name: "SQL for Data Science by UCDavis",
      issuer: "Coursera",
      date: "Feb 2025",
      link: "https://coursera.org/share/4dab479cba82a117b9898a6bc7cb5e9c"
    },
    {
      name: "Foundations: Data, Data, Everywhere",
      issuer: "Google / Coursera",
      date: "Feb 2025",
      link: "https://coursera.org/share/b6cfa85c3aab7128d66d1a73dd44aa37"
    }
  ],
  achievements: [
    {
      title: "SQL 50 Badge",
      issuer: "LeetCode",
      description: "Earned for mastering the top 50 SQL interview questions, focusing on advanced data manipulation and extraction.",
      link: "https://leetcode.com/u/9bRPneWfXb/" // Add your LeetCode profile link here
    },
    {
      title: "150+ SQL Questions Solved",
      issuer: "LeetCode & StrataScratch",
      description: "Extensive practice with complex queries, window functions, CTEs, and real-world database scenarios.",
      link: "https://platform.stratascratch.com/user/Balgeez" // Add your StrataScratch profile link here
    }
  ],
};
