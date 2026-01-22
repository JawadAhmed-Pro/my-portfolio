import wtmpHome from '../assets/wtmp_home.png';
import wtmpReports from '../assets/wtmp_reports.png';
import wtmp1 from '../assets/wtmp_1.png';
import wtmp2 from '../assets/wtmp_2.png';
import wtmp3 from '../assets/wtmp_3.png';

import clap1 from '../assets/clap_1.png';
import clap2 from '../assets/clap_2.png';
import clap3 from '../assets/clap_3.png';
import clap4 from '../assets/clap_4.png';
import clap5 from '../assets/clap_5.png';

import geo1 from '../assets/geo_1.png';
import geo2 from '../assets/geo_2.png';
import geo3 from '../assets/geo_3.png';
import geo4 from '../assets/geo_4.png';
import geo5 from '../assets/geo_5.png';

import km1 from '../assets/km_1.png';
import km2 from '../assets/km_2.png';
import km3 from '../assets/km_3.png';

import qr1 from '../assets/qr_1.png';
import qr2 from '../assets/qr_2.png';
import qr3 from '../assets/qr_3.png';
import qr4 from '../assets/qr_4.png';

import music1 from '../assets/music_1.png';
import music2 from '../assets/music_2.png';
import music3 from '../assets/music_3.png';
import music4 from '../assets/music_4.png';
import music5 from '../assets/music_5.png';

import status1 from '../assets/status_1.png';
import status2 from '../assets/status_2.png';
import status3 from '../assets/status_3.png';
import status4 from '../assets/status_4.png';
import status5 from '../assets/status_5.png';

import pass1 from '../assets/pass_1.png';
import pass2 from '../assets/pass_2.png';
import pass3 from '../assets/pass_3.png';
import pass4 from '../assets/pass_4.png';
import pass5 from '../assets/pass_5.png';

import dash1 from '../assets/dashboard_1.png';
import dash2 from '../assets/dashboard_2.png';
import dash3 from '../assets/dashboard_3.png';

export const projects = [
  {
    id: 'wtmp-app',
    title: 'WTMP - Who Touched My Phone',
    description: 'Advanced mobile security app with 500K+ downloads. Captures intruders utilizing Camera2 API and background services.',
    fullDescription: `
      **WTMP (Who Touched My Phone)** is a production-grade security application designed to protect user privacy. It silently monitors unauthorized access attempts and captures evidence without alerting the intruder.
      
      **Technical Highlights:**
      - **Stealth Monitoring:** Utilizes Android's \`Camera2 API\` to capture silent selfies in the background.
      - **Background Services:** Implemented robust \`WorkManager\` tasks to ensure 24/7 monitoring without battery drain.
      - **Secure Vault:** AES-256 encrypted local storage using \`Room Database\` to protect sensitive reports.
      - **Cloud Sync:** Optional Google Drive integration for secure remote backups.
    `,
    tags: ['Kotlin', 'Camera2 API', 'Room DB', 'Firebase'],
    links: { demo: '#', github: 'https://github.com/JawadAhmed-Pro' },
    imageType: 'gallery',
    images: [wtmpHome, wtmpReports, wtmp1, wtmp2, wtmp3]
  },
  {
    id: 'clap-to-find',
    title: 'Clap to Find Phone',
    description: 'AI-powered sound recognition tool to locate lost devices. Features adjustable sensitivity and low-latency audio processing.',
    fullDescription: `
      **Clap to Find Phone** solves the common problem of misplaced devices through intelligent sound recognition. It analyzes audio input in real-time to detect specific sound patterns (claps) while filtering out background noise.
      
      **Technical Highlights:**
      - **Audio Signal Processing:** Implemented Fast Fourier Transform (FFT) algorithms to distinguish claps from ambient noise.
      - **Battery Optimization:** Designed an efficient background service that pauses listening when the device is in use, reducing battery consumption by 40%.
      - **Customizable Actions:** Users can trigger Flashlight, Vibration, or a Ringtone upon detection.
      
      **Key Solution:**
      - Optimized for low-end devices, ensuring smooth performance across a wide range of Android versions.
    `,
    tags: ['Kotlin', 'Signal Processing', 'Android Services'],
    links: { demo: '#', github: 'https://github.com/JawadAhmed-Pro' },
    imageType: 'gallery',
    images: [clap1, clap2, clap3, clap4, clap5]
  },
  {
    id: 'knowledge-manager',
    title: 'Knowledge Manager Agent',
    description: 'Autonomous AI agent capable of ingesting documentation and answering complex queries using RAG architecture.',
    fullDescription: `
      **Knowledge Manager Agent** is a sophisticated AI tool designed to democratize access to internal knowledge bases. It leverages Large Language Models (LLMs) to understand context and retrieve precise information from vast datasets.
      
      **Technical Architecture:**
      - **RAG Implementation:** Uses Retrieval-Augmented Generation to ground LLM responses in user-provided data, eliminating hallucinations.
      - **Vector Database:** Integrates with \`Pinecone\` or \`ChromaDB\` for efficient semantic search and retrieval.
      - **LangChain Orchestration:** Manages complex workflows including document parsing, chunking, and context window management.
      
      **Use Case:**
      - Reduces onboarding time for new engineers by instantly answering questions about internal wikis and codebases.
    `,
    tags: ['Python', 'LangChain', 'OpenAI', 'RAG'],
    links: { demo: '#', github: 'https://github.com/JawadAhmed-Pro' },
    imageType: 'gallery',
    images: [km1, km2, km3]
  },
  {
    id: 'geo-optimizer',
    title: 'Generative Engine Optimizer',
    description: 'Strategic tool for optimizing digital content to ensure visibility and citation in Generative AI outputs (ChatGPT, Gemini).',
    fullDescription: `
      **Generative Engine Optimizer (GEO)** is a pioneering project focused on the emerging field of optimizing content for Large Language Models. It ensures that digital content is effectively discovered, understood, and cited by AI engines.
      
      **Core Concepts & Implementation:**
      - **AI Visibility Scoring:** Analyzes content structure to predict the likelihood of being cited by engines like ChatGPT and Perplexity.
      - **Structured Data Injection:** Automates the addition of semantic markers (Schema.org, JSON-LD) to make facts easily parseable by AI.
      - **Query Pattern Analysis:** Reverse-engineers common AI prompt structures to optimize content relevance and authority.
      
      **Goal:**
      - To help creators and businesses adapt to the shift from traditional Search Engines to Answer Engines.
    `,
    tags: ['Python', 'NLP', 'Semantic Web', 'AI SEO'],
    links: { demo: '#', github: 'https://github.com/JawadAhmed-Pro' },
    imageType: 'gallery',
    images: [geo1, geo2, geo3, geo4, geo5]
  },
  {
    id: 'custom-dashboard',
    title: 'Enterprise SaaS Analytics',
    description: 'Comprehensive admin dashboard with real-time analytics, user management, and financial reporting modules.',
    fullDescription: `
      **Enterprise SaaS Analytics** is a high-performance admin dashboard designed for scaling SaaS businesses. It provides a centralized view of all critical metrics, from revenue streams to user engagement.
      
      **Technical Highlights:**
      - **Modular Architecture:** Built with **React** and **Tailwind CSS**, featuring reusable components for charts, tables, and widgets.
      - **Interactive Charts:** Integrated **Chart.js** / **ApexCharts** for dynamic data visualization (Area, Bar, and Line charts).
      - **State Management:** Utilizes efficient state logic to handle real-time data updates without re-rendering the entire page.
      - **Responsive Layout:** Fully responsive sidebar navigation and grid system adapting to all screen sizes.
      
      **Features:**
      - **Financial Overview:** Track Total Revenue, Active Users, and Conversion Rates.
      - **User Management:** DataTable with sorting, filtering, and role management.
      - **Activity Timeline:** visualized project milestones and team activities.
    `,
    tags: ['React', 'Tailwind CSS', 'Chart.js', 'Stats'],
    links: { demo: '#', github: 'https://github.com/JawadAhmed-Pro' },
    imageType: 'gallery',
    images: [dash1, dash2, dash3]
  },
  {
    id: 'qr-scanner-hub',
    title: 'QR Scanner & Creator Hub',
    description: 'All-in-one utility app for generating and scanning varied QR types. Features VCard generation and history management.',
    fullDescription: `
      **QR Scanner & Creator Hub** merges functionality with a sleek user experience. It goes beyond simple scanning to become a complete toolkit for QR code management.
      
      **Key Features:**
      - **Multi-Format Support:** Generates and scans dynamic QR types including WiFi, Geo-location, SMS, and VCard.
      - **Smart Parsing:** Automatically detects code type and offers context-aware actions (e.g., "Add Contact" for VCards).
      - **History Management:** Local SQLite database to persist scan history for quick access.
      
      **UX Design:**
      - Designed with a "dark-first" Neo-morphism aesthetic to reduce eye strain and look modern.
    `,
    tags: ['Kotlin', 'ZXing', 'SQLite', 'Material UI'],
    links: { demo: '#', github: 'https://github.com/JawadAhmed-Pro' },
    imageType: 'gallery',
    images: [qr1, qr2, qr3, qr4]
  },
  {
    id: 'music-player',
    title: 'Sonic Offline Music Player',
    description: 'High-fidelity audio player with 5-band equalizer, bass boost, and seamless file management.',
    fullDescription: `
      **Sonic Offline Music Player** is built for audiophiles who prefer local libraries. It combines a robust audio engine with a fluid, gesture-driven interface.
      
      **Technical Highlights:**
      - **Audio Engine:** Custom implementation of Android's \`MediaPlayer\` API with a 5-band equalizer and Bass Boost integration.
      - **File Scanning:** Efficient recursive file scanning algorithm to index thousands of songs in seconds.
      - **Background Playback:** Foreground Service implementation ensures uninterrupted playback even when the app is killed.
      
      **Design:**
      - Complies fully with Material Design 3 guidelines, featuring dynamic color theming based on album art.
    `,
    tags: ['Kotlin', 'Audio Engine', 'Material Design 3'],
    links: { demo: '#', github: 'https://github.com/JawadAhmed-Pro' },
    imageType: 'gallery',
    images: [music1, music2, music3, music4, music5]
  },
  {
    id: 'status-saver',
    title: 'Status Saver Pro',
    description: 'Media utility tool for WhatsApp with scoped storage implementation. Saves images and videos without quality loss.',
    fullDescription: `
      **Status Saver Pro** allows users to archive ephemeral content from social media apps. It navigates complex Android storage permissions to provide a seamless saving experience.
      
      **Technical Challenges Solved:**
      - **Scoped Storage:** Implemented Android 11+ compatible storage access framework to read specific app directories securely.
      - **Cross-Compatibility:** Works with multiple variants (WhatsApp, Business, GB) by dynamically detecting installed packages.
      - **Media Handling:** Built-in video player and image viewer with zoom capabilities.
      
      **User Experience:**
      - Minimalist interface with a dedicated "Gallery" tab for offline viewing.
    `,
    tags: ['Kotlin', 'Scoped Storage', 'File I/O'],
    links: { demo: '#', github: 'https://github.com/JawadAhmed-Pro' },
    imageType: 'gallery',
    images: [status1, status2, status3, status4, status5]
  },
  {
    id: 'password-manager',
    title: 'SecurePass Vault',
    description: 'Zero-knowledge password manager with AES-256 encryption. Features biometric authentication and offline access.',
    fullDescription: `
      **SecurePass Vault** addresses the critical need for personal cybersecurity. Unlike cloud-based solutions, this app ensures that user data never leaves the device.
      
      **Security Architecture:**
      - **Encryption:** Uses **AES-256-GCM** encryption for database fields. The master key is derived using \`PBKDF2\` with a unique device salt.
      - **Biometrics:** Integrates **Android BiometricPrompt API** for secure and fast unlocking via Fingerprint or Face ID.
      - **No Internet Permission:** The app explicitly does not request internet access, guaranteeing zero data leakage.
      
      **Features:**
      - Password Strength Analyzer.
      - Secure CSV Export/Import for backups.
      - Auto-clear clipboard for sensitive fields.
    `,
    tags: ['Kotlin', 'AES-256', 'Biometrics', 'Security'],
    links: { demo: '#', github: 'https://github.com/JawadAhmed-Pro' },
    imageType: 'gallery',
    images: [pass1, pass2, pass3, pass4, pass5]
  }
];
