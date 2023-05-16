import { Router } from "express"
import { CreateAdminController } from "./useCases/admin/CreateAdminController"
import { CreateProfessionalController } from "./useCases/professional/CreateProfessionalController"
import { CreateScheduleController } from "./useCases/schedule/CreateScheduleController"
import { FindAllAdminController } from "./useCases/admin/FindAllAdminController"
import { FindAllProfessinalController } from "./useCases/professional/FindAllProfessionalController"
import { FindAllScheduleController } from "./useCases/schedule/FindAllScheduleController"
const createAdminController = new CreateAdminController()
const createProfessionalController = new CreateProfessionalController()
const createSheduleController = new CreateScheduleController()
const findAllAdminController = new FindAllAdminController()
const findAllProfessionalController = new FindAllProfessinalController
const findAllScheduleController = new FindAllScheduleController()

const routes = Router()

//admin
routes.post("/admins", createAdminController.handle)
routes.get("/admins", findAllAdminController.handle)

//professional
routes.post("/professional", createProfessionalController.handle)
routes.get("/professional", findAllProfessionalController.handle )

//schedule
routes.post("/schedule", createSheduleController.handle)
routes.get("/schedule/:id", findAllScheduleController.handle)


export {routes}