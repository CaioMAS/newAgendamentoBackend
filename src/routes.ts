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
import { EnsureAuthentication } from "./middlewares/ensureAuthentication"
import { FindAdminIdController } from "./useCases/admin/FindAdminIdController"

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
const findAdminIdController = new FindAdminIdController()

const routes = Router()

//admin
routes.get("/admin/:id/", findAdminIdController.handle)
routes.post("/admins", createAdminController.handle)
routes.get("/admins", findAllAdminController.handle)


//routes authenticate
routes.post("/authenticate", authenticateadminController.handle)

//professional
routes.post("/professional", EnsureAuthentication, createProfessionalController.handle)
routes.get("/professional", findAllProfessionalController.handle )
routes.get("/professional/:id/services", findProfessionalControllerId.handle)
routes.get("/professional/:id/:date", findProfessionalIdDateController.handle)

//schedule
routes.post("/schedule", createSheduleController.handle)
routes.get("/schedule/:id", findAllScheduleController.handle)

//service
routes.post("/services", EnsureAuthentication, createServiceController.handle)


export {routes}