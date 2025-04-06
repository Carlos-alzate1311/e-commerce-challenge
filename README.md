# 🛍️ J&A Variedades – eCommerce App

Este proyecto es un eCommerce llamado **J&A Variedades**, desarrollado con **React** en el frontend y **Spring Boot** en el backend. Forma parte del reto **#HagaseUnEcommeceChallenge** 🚀

---

## 📌 Contenido

- [Tecnologías](#-tecnologías)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Mockups](#-mockups)
- [Instalación del Proyecto](#-instalación-del-proyecto)
- [Autores](#-autores)
- [Estado del Proyecto](#-estado-del-proyecto)

---

## 🚀 Tecnologías

### Frontend:
- React
- Vite
- Material UI (MUI)
- Axios
- React Router DOM

### Backend:
- Spring Boot
- Java 17+
- Spring Web
- Spring Data JPA
- MySQL
- Lombok

---

## 📁 Estructura del Proyecto
 Ejemplo de estructura de producto
{
  "id": 1,
  "nombre": "Tenis Nike Air Max",
  "descripcion": "Tenis deportivos cómodos y duraderos",
  "precio": 289000,
  "stock": 10,
  "categoria": "Calzado",
  "imagen": "url-del-producto.jpg"
}


ecommerce-jav/
├── backend/         # Backend con Spring Boot
│   └── src/
├── frontend/        # Frontend con React
│   └── src/
├── resources/       # Mockups e imágenes del diseño
│   └── *.png
└── README.md
📸 Mockups
Los diseños están en la carpeta resources/ e incluyen las siguientes pantallas:

🏠 Inicio


🔧 Instalación del Proyecto
🔷 Frontend
Ir a la carpeta del frontend:


cd frontend
Instalar dependencias:


npm install
Ejecutar en modo desarrollo:


npm run dev
🔶 Backend
Crear una base de datos llamada ecommerce_db en MySQL

Configurar application.properties en backend/src/main/resources/:

properties

spring.datasource.url=jdbc:mysql://localhost:3306/ecommerce_db
spring.datasource.username=tu_usuario
spring.datasource.password=tu_contraseña
spring.jpa.hibernate.ddl-auto=update
Ejecutar la aplicación:


./mvnw spring-boot:run
👤 Autores
Carlos Alzate – Desarrollador del proyecto

Participante del reto #HagaseUnEcommeceChallenge



✅ Estado del proyecto
📌 Día 1 completado: ✔️

📌 En progreso...