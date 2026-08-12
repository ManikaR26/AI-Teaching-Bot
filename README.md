# 🎓 RAG-Based AI Teaching Assistant

*An intelligent Retrieval-Augmented Generation (RAG) system that transforms lecture videos into searchable learning material and generates context-aware answers to student questions.*

---

## 📌 Table of Contents

* [Overview](#overview)
* [Problem Statement](#problem-statement)
* [How It Works](#how-it-works)
* [Tools & Technologies](#tools--technologies)
* [Project Structure](#project-structure)
* [Data Processing & Preparation](#data-processing--preparation)
* [Retrieval & Generation Pipeline](#retrieval--generation-pipeline)
* [Key Features](#key-features)
* [How to Run This Project](#how-to-run-this-project)
* [Future Improvements](#future-improvements)

---

## 🚀 Overview

The **RAG-Based AI Teaching Assistant** is designed to make lengthy lecture videos easier to search and understand.

The system converts lecture audio into timestamped transcripts using **Whisper Large-v2**, divides the transcripts into context-preserving chunks, and generates semantic embeddings using **BGE-M3**.

When a student asks a question, the system compares the query with stored lecture embeddings using **cosine similarity** and retrieves the most relevant transcript segments. These segments are provided as context to **LLaMA 3.2**, enabling the model to generate responses grounded in the lecture material.

A **Streamlit** interface provides an interactive way for students to query lecture content and access relevant information.

---

## 🎯 Problem Statement

Students often spend significant time searching through long lecture recordings to find explanations of specific concepts.

This project aims to:

* Allow students to search lecture content using natural-language questions
* Convert lengthy video lectures into searchable text
* Retrieve relevant portions of lectures using semantic similarity
* Generate answers based on actual lecture content
* Preserve timestamps to help users locate relevant sections of a lecture
* Reduce the need to manually scan through complete lecture recordings
* Provide an interactive interface for exploring course material

---

## ⚙️ How It Works

```text
Lecture Videos
      ↓
Audio Processing
      ↓
Whisper Large-v2
      ↓
Timestamped Transcripts
      ↓
Text Chunking + Metadata
      ↓
BGE-M3 Embeddings
      ↓
Vector Storage
      ↓
Student Question
      ↓
Query Embedding
      ↓
Cosine Similarity Search
      ↓
Top Relevant Lecture Chunks
      ↓
RAG Prompt Construction
      ↓
LLaMA 3.2
      ↓
Context-Aware Answer
      ↓
Streamlit Interface
```

---

## 🛠️ Tools & Technologies

* **Whisper Large-v2** — Converts lecture audio into timestamped transcripts
* **BGE-M3** — Generates semantic embeddings for transcript chunks and user queries
* **Vector Database** — Stores and retrieves vector representations of lecture content
* **Cosine Similarity** — Identifies transcript chunks most relevant to a user's query
* **LLaMA 3.2** — Generates responses using the retrieved lecture context
* **Streamlit** — Provides an interactive interface for querying lecture material
* **Python** — Core development language
* **NumPy & Pandas** — Data processing and manipulation
* **Git & GitHub** — Version control and project management

---

## 📂 Project Structure

```text
RAG-BASED-AI-TEACHING-ASSISTANT/
│
├── README.md
├── .gitignore
│
├── Scripts/
│   ├── video_to_mp3.py
│   ├── listingaudios.py
│   ├── mp3_to_json.py
│   ├── preprocess_jsons.py
│   └── process_incoming.py
│
├── whisper/
│
└── requirements.txt
```

> The project structure may be updated as additional functionality is implemented.

---

## 🧹 Data Processing & Preparation

The lecture content passes through several preprocessing stages before it can be used by the RAG system.

* Extracted audio from lecture videos for speech processing
* Transcribed lecture audio using **Whisper Large-v2**
* Preserved timestamp information alongside transcript text
* Divided long transcripts into smaller chunks to improve retrieval
* Maintained metadata associated with individual lecture segments
* Generated embeddings for processed transcript chunks using **BGE-M3**
* Prepared embeddings for similarity-based retrieval

---

## 🔎 Retrieval & Generation Pipeline

### 1. Query Processing

The student's natural-language question is converted into an embedding using the same embedding model used for lecture chunks.

### 2. Semantic Retrieval

The query embedding is compared with lecture embeddings using **cosine similarity**.

The highest-ranking transcript chunks are selected as relevant context.

### 3. Context Construction

Retrieved lecture segments are combined with the original question to construct a context-enhanced prompt.

### 4. Answer Generation

The constructed prompt is passed to **LLaMA 3.2**, which generates an answer based on the retrieved lecture material.

### 5. Source Mapping

Metadata associated with the retrieved chunks can be used to connect the generated response with the corresponding lecture timestamps.

---

## ✨ Key Features

### 🎙️ Lecture Transcription

Uses **Whisper Large-v2** to convert lecture audio into structured text for further processing.

### 🧩 Context-Preserving Chunking

Breaks lengthy transcripts into smaller sections while retaining relevant metadata and surrounding context.

### 🧠 Semantic Embeddings

Uses **BGE-M3** to represent lecture chunks as numerical vectors capturing their semantic meaning.

### 🔍 Intelligent Retrieval

Uses vector search and **cosine similarity** to identify lecture segments most relevant to the student's question.

### 🤖 RAG-Based Answer Generation

Combines retrieved lecture information with **LLaMA 3.2** to generate responses grounded in course content.

### ⏱️ Timestamp Mapping

Maintains timestamps associated with transcript segments, allowing retrieved information to be traced back to its location in the lecture.

### 📊 Interactive Interface

Uses **Streamlit** to provide a simple interface for interacting with the teaching assistant.

---

## ▶️ How to Run This Project

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/rag-ai-teaching-assistant.git
cd rag-ai-teaching-assistant
```

### 2. Install Required Dependencies

```bash
pip install -r requirements.txt
```

### 3. Add Lecture Videos

Place the lecture videos in the appropriate video directory.

```text
video/
├── lecture1.mp4
├── lecture2.mp4
└── lecture3.mp4
```

### 4. Convert Videos to Audio

```bash
python Scripts/video_to_mp3.py
```

### 5. Generate Transcripts

Run the transcription pipeline to convert lecture audio into structured transcript data.

```bash
python Scripts/mp3_to_json.py
```

### 6. Preprocess Lecture Transcripts

```bash
python Scripts/preprocess_jsons.py
```

This stage prepares transcript chunks and metadata for embedding generation and retrieval.

### 7. Process User Queries

```bash
python Scripts/process_incoming.py
```

The system retrieves relevant lecture chunks and uses them as context for answer generation.

### 8. Launch the Streamlit Interface

```bash
streamlit run app.py
```

---

## 💡 Example

A student could ask:

> **"What is gradient descent and why is the learning rate important?"**

The system will:

1. Generate an embedding for the question
2. Compare it with stored lecture embeddings
3. Retrieve the most relevant transcript segments
4. Construct a prompt containing the retrieved context
5. Generate an answer using LLaMA 3.2
6. Associate the retrieved information with the relevant lecture timestamp

---

## 🔮 Future Improvements

* Support multiple subjects and lecture collections
* Add clickable YouTube timestamps to generated responses
* Introduce conversational memory for follow-up questions
* Experiment with different transcript chunk sizes and overlaps
* Add reranking to improve retrieved-context quality
* Compare multiple embedding models
* Introduce retrieval evaluation metrics
* Support PDFs, presentations, and other course resources
* Add response feedback to evaluate answer usefulness

---

## 📚 Learning Outcomes

Through this project, I explored and implemented concepts related to:

* Retrieval-Augmented Generation (RAG)
* Large Language Models
* Speech-to-text processing
* Text chunking and metadata management
* Vector embeddings
* Semantic similarity search
* Context-aware prompt construction
* AI application development
* Interactive application development with Streamlit

---

## 👩‍💻 Author

**Manika Rattan**

Computer Science Engineering
Thapar Institute of Engineering & Technology

---

⭐ *This project explores how Retrieval-Augmented Generation can make long-form educational content more accessible, searchable, and interactive.*
