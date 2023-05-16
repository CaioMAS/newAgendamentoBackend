import { Router } from "express"
import { CreateAdminController } from "./useCases/admin/CreateAdminController"
import { CreateProfessionalController } from "./useCases/professional/CreateProfessionalController"
import { CreateScheduleController } from "./useCases/schedule/CreateScheduleController"
import { FindAllAdminController } from "./useCases/admin/FindAllAdminController"
const createAdminController = new CreateAdminController()
const createProfessionalController = new CreateProfessionalController()
const createSheduleController = new CreateScheduleController()
const findAllAdminController = new FindAllAdminController()

const routes = Router()

//admin
routes.post("/admins", createAdminController.handle)
routes.get("/admins", findAllAdminController.handle)

//professional
routes.post("/professional", createProfessionalController.handle)

//schedule
routes.post("/schedule", createSheduleController.handle)


export {routes}