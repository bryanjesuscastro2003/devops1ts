import app from "./app"
import "dotenv/config"

const port = parseInt(process.env.PORT!) ||3600;

app.listen(port, () => {
    console.log("Server running on port " + port)
})
