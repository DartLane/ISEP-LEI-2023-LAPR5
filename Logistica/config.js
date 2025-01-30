import dotenv from 'dotenv';

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (!envFound) {
  // This error should crash whole process

  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  /**
   * Your favorite port
   */
  port: parseInt(process.env.PORT, 10) || 3000,

  /**
   * That long string from mlab
   */
  databaseURL: process.env.MONGODB_URI,

  /**
   * Your secret sauce
   */
  jwtSecret: process.env.JWT_SECRET,

  /**
   * Used by winston logger
   */
  logs: {
    level: process.env.LOG_LEVEL,
  },

  gestaoArmazensURL: "https://localhost:5001/api",

  secret_Key: "WqcLIR743s1198JnfFXAS",

  jwt_Audience: "EletricGO",
  jwt_Issuer: "EletricGO",


  gestaoArmazensAPIS: {
    armazens: "/Armazens",
    entregas: "/Entregas"
  },


  /**
   * API configs
   */
  api: {
    prefix: '/api',
  },

  controllers: {
    role: {
      name: "RoleController",
      path: "../controllers/roleController"
    },
    caminho: {
      name: "CaminhoController",
      path: "../controllers/caminhoController"
    },
    planoEntregas: {
      name: "PlanoEntregasController",
      path: "../controllers/planoEntregasController"
    },

    camiao: {
      name: "CamiaoController",
      path: "../controllers/camiaoController"
    }
  },

  repos: {
    role: {
      name: "RoleRepo",
      path: "../repos/roleRepo"
    },
    user: {
      name: "UserRepo",
      path: "../repos/userRepo"
    },
    caminho: {
      name: "CaminhoRepo",
      path: "../repos/caminhoRepo"
    },
    camiao: {
      name: "CamiaoRepo",
      path: "../repos/camiaoRepo"
    },
    planoEntregas: {
      name: "PlanoEntregasRepo",
      path: "../repos/planoEntregasRepo"
    },
    armazem: {
      name: "ArmazemRepo",
      path: "../repos/armazemRepo"
    }
  },

  services: {
    role: {
      name: "RoleService",
      path: "../services/roleService"
    },
    caminho: {
      name: "CaminhoService",
      path: "../services/caminhoService"
    },
    planoEntregas: {
      name: "PlanoEntregasService",
      path: "../services/planoEntregasService"
    },
    camiao: {
      name: "CamiaoService",
      path: "../services/camiaoService"
    }
  },

  requests: {
    armazens: {
      name: "ArmazemRequests",
      path: "../persistence/armazemRequests"
    }
  },

  page_limit: 3
};
