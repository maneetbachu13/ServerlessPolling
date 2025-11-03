# 🗳️ Serverless Polling System using AWS

## 📘 Overview
The **Serverless Polling System** is a cloud-based web application that allows users to **create polls**, **cast votes**, and **view real-time results** — all built using **AWS Serverless Architecture**.  
By leveraging services like **AWS Lambda**, **API Gateway**, **Amazon DynamoDB**, and **Amazon S3**, this project eliminates traditional server management, ensuring **automatic scaling**, **high availability**, and **cost efficiency**.

---

## 🎯 Project Objectives
- Build a **real-time polling platform** using AWS services.  
- Implement a **fully serverless architecture** with zero manual server management.  
- Ensure **secure, scalable, and low-cost** cloud deployment.  
- Gain hands-on experience with **API integration** and **cloud database management**.

---

## 🏗️ System Architecture
The system follows a **serverless, event-driven architecture**, where all components interact through AWS managed services.

**Architecture Workflow:**
1. Users interact with a static website hosted on **Amazon S3**.
2. Requests are routed through **Amazon API Gateway**.
3. **AWS Lambda** functions process the requests:
   - Create new polls  
   - Cast votes  
   - Fetch and return live poll results
4. **Amazon DynamoDB** stores poll data (questions, options, votes).
5. **AWS CloudWatch** monitors system performance and logs.
6. Optional: **AWS Cognito** handles user authentication and access control.

---

## ☁️ AWS Services Used

| **Service** | **Purpose** |
|--------------|-------------|
| **Amazon S3** | Hosts the static website and stores assets |
| **AWS Lambda** | Executes backend logic for poll operations |
| **Amazon API Gateway** | Acts as an entry point for API requests |
| **Amazon DynamoDB** | Stores poll data and vote counts |
| **AWS CloudWatch** | Monitors performance, logs, and alerts |
| **AWS IAM** | Manages permissions and security policies |
| **AWS Cognito (optional)** | Handles user authentication and authorization |

---

## ⚙️ Implementation Details

### **Frontend**
- Developed using **HTML**, **CSS**, and **JavaScript**.  
- Hosted on **Amazon S3** as a static website.  
- Interacts with AWS backend via **API Gateway** endpoints.

### **Backend**
- Built using **AWS Lambda** functions for serverless execution.  
- Poll data stored in **Amazon DynamoDB** (NoSQL).  
- All APIs are exposed via **Amazon API Gateway** for frontend communication.  
- **AWS CloudWatch** used for real-time monitoring and debugging.

---

## 🧩 System Workflow

1. **Poll Creation**  
   - User enters a question and options → sent to API Gateway → triggers `CreatePollFunction` (Lambda).  
   - Lambda stores poll details in DynamoDB.  

2. **Voting Process**  
   - User selects an option → request sent to `VoteFunction` via API Gateway.  
   - Lambda updates vote count in DynamoDB atomically.  

3. **Result Display**  
   - `GetResultsFunction` retrieves poll data from DynamoDB.  
   - Frontend updates vote counts dynamically using the returned data.

---

## 🚀 How to Deploy on AWS

### **Option 1: Using AWS Console**
1. Create **S3 Bucket** → Upload frontend files → Enable static website hosting.  
2. Create **Lambda Functions**:
   - `CreatePollFunction`
   - `VoteFunction`
   - `GetResultsFunction`
3. Create **DynamoDB Table** (e.g., `Polls`) with `PollID` as the primary key.  
4. Set up **API Gateway** with endpoints:
   - `/create` → CreatePollFunction
   - `/vote` → VoteFunction
   - `/results` → GetResultsFunction
5. Connect frontend API URLs to the API Gateway endpoints.
6. Monitor system using **CloudWatch**.

### **Option 2: Using Serverless Framework (Optional)**
If you prefer Infrastructure as Code (IaC):
```bash
serverless deploy
