# Warehouse and Fleet Management System

A distributed system for managing warehouses and truck delivery routes using a microservices architecture. The system allows for warehouse management, truck fleet administration, and delivery route planning.

## Architecture

The project is built using a microservices architecture with the following components:

- **Warehouse Management Service** (.NET Core 6.0)
  - Handles warehouse-related operations
  - Built using DDD (Domain-Driven Design) principles
  - Uses Onion Architecture

- **Logistics Service** (Node.js)
  - Manages trucks and delivery planning
  - Built using a bulletproof Node.js architecture
  - Handles route optimization and delivery scheduling

- **Frontend Application** (Angular 14)
  - Single Page Application (SPA)
  - Provides user interface for both services

## Technologies

### Backend
- **Warehouse Service**
  - ASP.NET Core 6.0
  - Entity Framework Core
  - SQL Server
  - JWT Authentication

- **Logistics Service**
  - Node.js
  - Express
  - MongoDB
  - TypeScript
  - Celebrate (API validation)

### Frontend
- Angular 14
- TypeScript
- Karma (Testing)

## Features

- Warehouse Management
  - CRUD operations for warehouses
  - Location management
  - Inventory tracking

- Fleet Management
  - Truck registration and management
  - Vehicle capacity tracking
  - Fleet status monitoring

- Delivery Planning
  - Route optimization
  - Delivery scheduling
  - Load distribution
  - Simulated annealing algorithm for route optimization

## Getting Started

### Prerequisites
- Node.js v10.15.0 or higher
- .NET Core 6.0 SDK
- MongoDB
- SQL Server
- Angular CLI 14.2.9

### Installation

1. **Warehouse Management Service**
```bash
cd GestaoArmazens
dotnet restore
dotnet run
```

2. **Logistics Service**
```bash
cd Logistica
npm install
npm run start
```

3. **Frontend Application**
```bash
cd SPA/app
npm install
ng serve
```

## API Documentation

### Warehouse Service
- Base URL: `http://localhost:5000/api`
- Protected endpoints require JWT authentication

### Logistics Service
- Base URL: `http://localhost:3000/api`
- Uses celebrate for request validation
- Protected endpoints require JWT authentication

## Project Structure

```
├── GestaoArmazens/     # Warehouse Management Service (.NET)
├── Logistica/          # Logistics Service (Node.js)
├── SPA/               # Frontend Application (Angular)
└── Planeamento/       # Planning Module
```

## Authors

- **André Silva**
- **Vasco Silva**
- **Cláudia Freitas**
- **Carlos Rodrigues**
