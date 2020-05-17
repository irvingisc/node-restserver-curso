// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;

// ============================
//  Entorno
// ============================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ============================
//  Vencimiento token
// ============================
process.env.CADUCIDAD_TOKEN =60 * 60 * 24 * 30;

// ============================
//  SEED de autenticación
// ============================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';


// ============================
//  Base de datos
// ============================
let urlDB;

if ( process.env.NODE_ENV === 'dev' )
	urlDB = 'mongodb://localhost:27017/cafe';
else
	urlDB = process.env.MONGO_URI;

//Se modificó variable de conexión para que no sea visible en github

process.env.URLDB = urlDB;

// ============================
//  Google client ID
// ============================

process.env.CLIENT_ID = process.env.CLIENT_ID || '16036579921-gg7f5qe3r265qbtlvcihookhpau3dfs4.apps.googleusercontent.com';
