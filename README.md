# 🎓 RAG-Based AI Teaching Assistant

An intelligent **Retrieval-Augmented Generation (RAG)** based teaching assistant that converts lecture videos into searchable and interactive study material, allowing students to ask questions and receive answers grounded in lecture content.

---

## 🚀 Overview

The **RAG-Based AI Teaching Assistant** helps students interact with lecture content more efficiently.

The system transcribes lecture videos using **Whisper Large-v2**, processes and divides the transcripts into meaningful chunks, and generates vector representations using **BGE-M3 embeddings**.

When a student asks a question, the system uses **vector retrieval and cosine similarity** to identify the most relevant lecture chunks. These retrieved chunks are provided as context to **LLaMA 3.2**, which generates an answer based on the lecture material.

An interactive **Streamlit** interface allows users to query the processed lecture content.

---

## 🔑 Key Features

* 🎥 **Lecture Processing** — Processes lecture videos for AI-based querying
* 🎙️ **Automatic Transcription** — Uses Whisper Large-v2 to convert lecture audio into text
* 🧩 **Transcript Chunking** — Divides transcripts into smaller chunks while preserving relevant context
* 🧠 **Semantic Embeddings** — Uses BGE-M3 to generate vector representations of lecture chunks
* 🔎 **Semantic Retrieval** — Retrieves relevant lecture content using vector search and cosine similarity
* 🤖 **RAG-Based Question Answering** — Combines retrieved lecture context with LLaMA 3.2 for answer generation
* 📊 **Interactive Interface** — Uses Streamlit to provide an accessible interface for student queries
* 📚 **Context-Grounded Responses** — Generates answers using relevant information retrieved from lecture material

---

## 🛠️ Tools & Technologies

* **Whisper Large-v2** — Lecture transcription
* **BGE-M3** — Embedding generation and chunk representation
* **Vector Database + Cosine Similarity** — Semantic retrieval of relevant lecture chunks
* **LLaMA 3.2** — Answer generation
* **Streamlit** — Interactive dashboard and user interface
* **Python** — Core application development
* **NumPy & Pandas** — Data processing and manipulation
* **Git & GitHub** — Version control and project management

---

## ⚙️ How It Works

### 1. Lecture Processing

Lecture videos are provided to the system and their audio content is prepared for transcription.

### 2. Speech-to-Text Transcription

**Whisper Large-v2** converts the lecture audio into text, producing transcript data that can be processed by the retrieval pipeline.

### 3. Transcript Chunking

The generated transcript is divided into smaller chunks so that relevant sections of a lecture can be retrieved without passing the entire transcript to the language model.

### 4. Embedding Generation

Each lecture chunk is converted into a numerical vector representation using **BGE-M3 embeddings**.

### 5. Query Processing

When a student submits a question, the query is also converted into an embedding.

### 6. Semantic Retrieval

The query embedding is compared with the stored lecture embeddings using **cosine similarity**.

The most relevant chunks are selected and retrieved.

### 7. Context Augmentation

The retrieved lecture chunks are combined with the student's original question to construct the prompt for the RAG system.

### 8. Answer Generation

**LLaMA 3.2** receives the question along with the retrieved lecture context and generates an appropriate response.

### 9. User Interaction

The complete question-answering workflow is made accessible through an interactive **Streamlit** interface.

---

## 🔄 RAG Pipeline

```text
Lecture Videos
      │
      ▼
Whisper Large-v2
      │
      ▼
Lecture Transcripts
      │
      ▼
Transcript Chunking
      │
      ▼
BGE-M3 Embeddings
      │
      ▼
Vector Database
      │
      │
Student Question
      │
      ▼
Query Embedding
      │
      ▼
Cosine Similarity
      │
      ▼
Top Relevant Lecture Chunks
      │
      ▼
RAG Prompt
      │
      ▼
LLaMA 3.2
      │
      ▼
Context-Grounded Answer
      │
      ▼
Streamlit Interface
```

---

## 📂 Project Structure

```text
RAG-Based-AI-Teaching-Assistant/
│
├── Scripts/
│   ├── transcription/
│   ├── chunking/
│   ├── embeddings/
│   └── retrieval/
│
├── whisper/
│
├── data/
│   ├── transcripts/
│   ├── chunks/
│   └── embeddings/
│
├── app.py
├── requirements.txt
├── .gitignore
└── README.md
```

> The exact project structure can be updated according to the final implementation.

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/rag-ai-teaching-assistant.git
cd rag-ai-teaching-assistant
```

### 2. Create a Virtual Environment

```bash
python -m venv venv
```

Activate it on Windows:

```bash
venv\Scripts\activate
```

Activate it on macOS/Linux:

```bash
source venv/bin/activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Run the Application

```bash
streamlit run app.py
```

---

## 💡 Example Workflow

A student can ask a question such as:

> **"What is overfitting and how can it be prevented?"**

The system:

**1.** Converts the question into an embedding
**2.** Searches the lecture embeddings
**3.** Retrieves the most relevant transcript chunks
**4.** Provides those chunks as context to LLaMA 3.2
**5.** Generates an answer grounded in the lecture material

---

## 🎯 Project Objective

The objective of this project is to make lengthy lecture content easier to access and understand by combining **speech recognition, semantic search, vector embeddings, and generative AI**.

Instead of manually searching through entire lecture videos, students can interact with the lecture material through natural-language questions and retrieve relevant information efficiently.

---

## 🔮 Future Improvements

* Support multiple courses and lecture collections
* Add lecture timestamps to generated answers
* Provide direct links to relevant portions of lecture videos
* Add conversational memory for follow-up questions
* Experiment with different chunking strategies
* Improve retrieval using reranking techniques
* Add evaluation metrics for retrieval and answer relevance
* Support additional document formats such as PDFs and presentation slides

---

## 👩‍💻 Author

**Manika Rattan**

Computer Science Engineering
Thapar Institute of Engineering & Technology
