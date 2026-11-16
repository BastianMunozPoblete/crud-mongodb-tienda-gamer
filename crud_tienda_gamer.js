// CRUD en MongoDB - Tienda Gamer
// Base de datos: tienda_gamer | Colección: productos
// Ejecutar en mongosh (consola de MongoDB Compass), un comando a la vez.

use tienda_gamer

// ===== CREATE =====
db.productos.insertOne({ codigo: "P001", nombre: "PS5", categoria: "Consolas", precio: 499990, stock: 5, activo: true })

db.productos.insertMany([
  { codigo: "P002", nombre: "Nintendo Switch 2", categoria: "Consolas", precio: 449990, stock: 3, activo: true },
  { codigo: "P003", nombre: "Control Xbox", categoria: "Accesorios", precio: 59990, stock: 12, activo: true },
  { codigo: "P004", nombre: "Audífonos HyperX", categoria: "Accesorios", precio: 39990, stock: 0, activo: true },
  { codigo: "P005", nombre: "EA Sports FC 26", categoria: "Juegos", precio: 49990, stock: 20, activo: true },
  { codigo: "P006", nombre: "Mouse Logitech G203", categoria: "Accesorios", precio: 19990, stock: 8, activo: true }
])

// ===== READ =====
db.productos.find()                                    // todos los documentos
db.productos.find({ categoria: "Accesorios" })         // filtro por campo
db.productos.find({ precio: { $gt: 100000 } })         // precio mayor a 100.000
db.productos.find({}, { _id: 0, nombre: 1, precio: 1 }).sort({ precio: -1 }).limit(3)  // proyección + orden + límite

// ===== UPDATE =====
db.productos.updateOne({ codigo: "P003" }, { $set: { precio: 54990 } })
db.productos.findOne({ codigo: "P003" })               // comprobar

db.productos.updateMany({ stock: 0 }, { $set: { activo: false } })
db.productos.find({ activo: false })                   // comprobar

// ===== DELETE =====
db.productos.find({ activo: false })                   // revisar antes de borrar
db.productos.deleteMany({ activo: false })
db.productos.find({ activo: false })                   // debe salir vacío
db.productos.countDocuments()                          // quedan 5

// ===== Flujo CRUD completo con un producto =====
db.productos.insertOne({ codigo: "P007", nombre: "Volante Logitech G29", categoria: "Accesorios", precio: 249990, stock: 2, activo: true })
db.productos.findOne({ codigo: "P007" })
db.productos.updateOne({ codigo: "P007" }, { $set: { precio: 229990 } })
db.productos.findOne({ codigo: "P007" })
db.productos.deleteOne({ codigo: "P007" })
db.productos.findOne({ codigo: "P007" })               // null = eliminado
