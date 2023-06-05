import { Router } from "express"
import { CreateAdminController } from "./useCases/admin/CreateAdminController"
import { CreateProfessionalController } from "./useCases/professional/CreateProfessionalController"
import { CreateScheduleController } from "./useCases/schedule/CreateScheduleController"
import { FindAllAdminController } from "./useCases/admin/FindAllAdminController"
import { FindAllProfessinalController } from "./useCases/professional/FindAllProfessionalController"
import { FindAllScheduleController } from "./useCases/schedule/FindAllScheduleController"
import { CreateServiceController } from "./useCases/service/CreateServiceController"
import { FindProfessionalControllerId } from "./useCases/professional/FindProfessionalControllerId"
import { FindProfessinalIdDateController } from "./useCases/professional/FIndProfessinalIdDateController"
import { AuthenticateAdminController } from "./useCases/authenticateAdmin/AuthenticateAdminController"

const createAdminController = new CreateAdminController()
const createProfessionalController = new CreateProfessionalController()
const createSheduleController = new CreateScheduleController()
const findAllAdminController = new FindAllAdminController()
const findAllProfessionalController = new FindAllProfessinalController
const findAllScheduleController = new FindAllScheduleController()
const createServiceController = new CreateServiceController()
const findProfessionalControllerId = new FindProfessionalControllerId()
const findProfessionalIdDateController = new FindProfessinalIdDateController()
const authenticateadminController = new AuthenticateAdminController()

const routes = Router()

//admin
routes.post("/admins", createAdminController.handle)
routes.get("/admins", findAllAdminController.handle)

//routes authenticate
routes.post("/admins/authenticate/", authenticateadminController.handle)

//professional
routes.post("/professional", createProfessionalController.handle)
routes.get("/professional",  findAllProfessionalController.handle )
routes.get("/professional/:id/services", findProfessionalControllerId.handle)
routes.get("/professional/:id/:date", findProfessionalIdDateController.handle)

//schedule
routes.post("/schedule", createSheduleController.handle)
routes.get("/schedule/:id", findAllScheduleController.handle)

//service
routes.post("/services", createServiceController.handle)


export {routes}