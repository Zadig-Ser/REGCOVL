// Import Mongoose
import mongoose from "mongoose";
// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

// Start Import Models

import UserModel from "../models/REGCOVL_db/UserModel";
import CenterModel from "../models/REGCOVL_db/CenterModel";
import CourseModel from "../models/REGCOVL_db/CourseModel";
import DepartmentModel from "../models/REGCOVL_db/DepartmentModel";
import ExaminationModel from "../models/REGCOVL_db/ExaminationModel";
import GradeModel from "../models/REGCOVL_db/GradeModel";
import StudentModel from "../models/REGCOVL_db/StudentModel";

// End Import Models

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info("MongoDB connected at: " + properties.REGCOVL_db_dbUrl);

    // Start Init Models

		UserModel.init();
		CenterModel.init();
		CourseModel.init();
		DepartmentModel.init();
		ExaminationModel.init();
		GradeModel.init();
		StudentModel.init();
 // End Init Models
  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");
    try {
      this.dbConnection_REGCOVL_db = await mongoose.connect(
        "mongodb://" + properties.REGCOVL_db_dbUrl,
        { useNewUrlParser: true }
      );
    } catch (err) {
      Logger.error(`Failed connection to the DB: ${err.message}`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_REGCOVL_db;
  }
}

export default new Database();
