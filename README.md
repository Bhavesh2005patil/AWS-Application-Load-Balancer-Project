# 🚀 AWS Application Load Balancer Project

## 📌 Project Overview

This project demonstrates how an **AWS Application Load Balancer (ALB)** distributes incoming traffic across multiple EC2 instances to achieve high availability, scalability, and fault tolerance.

The setup includes:

- ✅ 2 EC2 Web Servers
- ✅ Application Load Balancer
- ✅ Target Group
- ✅ Health Checks
- ✅ Automatic Traffic Distribution

---

# 🏗️ Architecture

```text
User Request
      │
      ▼
Application Load Balancer
      │
 ┌────┴────┐
 ▼         ▼
EC2-1     EC2-2
(Server1) (Server2)
```

---

# ⚙️ AWS Services Used

| Service | Purpose |
|----------|---------|
| Amazon EC2 | Host web applications |
| Application Load Balancer | Distribute traffic |
| Target Group | Manage backend servers |
| Security Groups | Control traffic access |
| Apache Web Server | Serve web content |

---

# 📸 Project Screenshots

## 🔹 Architecture Flow

![Architecture Flow](https://github.com/user-attachments/assets/a99cfff9-8e2f-4813-b7d6-b996964a927f)

**Description:**
Shows the complete architecture of the solution where the Application Load Balancer routes traffic to multiple EC2 instances.

---

## 🔹 Application Load Balancer

![ALB](https://github.com/user-attachments/assets/98c476fb-dcf7-4db4-bc9b-92999e9382df)

**Description:**
Application Load Balancer created in AWS and configured to distribute incoming HTTP traffic across multiple servers.

---

## 🔹 Target Group Configuration

![Target Group](https://github.com/user-attachments/assets/5228ce76-b45d-4410-901f-a8e0ae360d28)

**Description:**
Target Group containing both EC2 instances with health checks enabled to ensure only healthy instances receive traffic.

---

## 🔹 Server 1 Website

![Server 1](https://github.com/user-attachments/assets/a358c760-0103-43ae-a59d-1ad5390ab7e3)

**Description:**
Frontend application deployed on EC2 Instance 1.

---

## 🔹 Server 2 Website

![Server 2](https://github.com/user-attachments/assets/7fc96fc4-642e-434b-ae75-aca6a8d6999f)

**Description:**
Frontend application deployed on EC2 Instance 2.

---

# 🔄 Request Flow

1. User accesses the Application Load Balancer DNS URL.
2. ALB receives incoming requests.
3. ALB forwards traffic to healthy EC2 instances.
4. Target Group continuously performs health checks.
5. If one instance becomes unavailable, traffic is automatically routed to healthy instances.

---

# 🎯 Key Features

- High Availability
- Fault Tolerance
- Automatic Load Distribution
- Health Monitoring
- Scalability
- Zero Downtime Architecture

---

# 📈 Benefits of Using ALB

- Improves application availability.
- Distributes traffic efficiently.
- Reduces server overload.
- Supports horizontal scaling.
- Automatically removes unhealthy instances.

---

# 🧑‍💻 Developed By

**Bhavesh Patil**

Cloud & AWS Enthusiast

GitHub Profile:
https://github.com/Bhavesh2005patil

---

# ⭐ Project Status

✅ Completed Successfully

---

## 📬 Connect With Me

GitHub:
https://github.com/Bhavesh2005patil
