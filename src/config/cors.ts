import { CorsOptions } from "cors";

export const corsConfig: CorsOptions = {
  origin: function (origin, callback) {
    // Allow requests without Origin header (Postman, curl, server-to-server)
    if (!origin || origin === 'http://localhost:5173') {
      callback(null, true)
    } else {
      callback(new Error('Error de CORS'))
    }
  }
}
