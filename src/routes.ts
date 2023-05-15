import { Router } from "express"
import { CreateAdminController } from "./useCases/createAdmin/CreateAdminController"
import { CreateProfessionalController } from "./useCases/createProfessional/CreateProfessionalController"
import { CreateScheduleController } from "./useCases/createSchedule/CreateScheduleController"
const createAdminController = new CreateAdminController()
const createProfessionalController = new CreateProfessionalController()
const createSheduleController = new CreateScheduleController()

const routes = Router()

//admin
routes.post("/admins", createAdminController.handle)

//professional
routes.post("/professional/:id", createProfessionalController.handle)

//schedule
routes.post("/shedule/:id", createSheduleController.handle)


export {routes}