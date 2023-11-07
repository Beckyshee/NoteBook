import { Router, Request, Response } from "express";
import { addNote, 
    appTest,
    getAllNotesController,
         getSpecificNoteController,
         deleteNoteController,
         updateNoteController, } from "../controllers/noteControllers";

const noterouter: Router  = Router()

noterouter.get('/', appTest)
noterouter.get("/", getAllNotesController)
noterouter.get('/:noteID', getSpecificNoteController)
noterouter.delete("/:noteID", deleteNoteController)
noterouter.post("/", addNote)
noterouter.put("/:noteID", updateNoteController)





export default noterouter;