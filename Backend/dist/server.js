"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const noteRoutes_1 = __importDefault(require("./routes/noteRoutes"));
// import userRouter from './routes/userRoutes';
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/tasks', noteRoutes_1.default);
// app.use('/users', userRouter)
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`App running on port: ${port}`));
