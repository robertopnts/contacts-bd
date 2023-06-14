import app from "./app";
import 'dotenv/config'



app.listen(process.env.PORT, () => 
  "server running on port " + process.env.PORT
)