/**
 * 
 * 
  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
 
 * DO NOT EDIT THIS FILE!! 
 * 
 *  TO CUSTOMIZE gradeModelGenerated.js PLEASE EDIT ../gradeModel.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
// Database
import Database from "../../../classes/Database_REGCOVL_db";
import mongoose, { Schema } from "mongoose";

// Logger
import Logger from "../../../classes/Logger";

const generatedModel = {
  /**
   * Init  schema
   */
  init() {
    const db = Database.getConnection();

    /**
      * grade
      */
    const gradeSchema = new mongoose.Schema({
      courseID: {
        type: "String", 
        required: true
      },
      grade: {
        type: "String", 
        required: true
      },
      status: {
        type: "String",
        enum: ["fail", "noGrade", "pass"], 
      },
      studentID: {
        type: "String", 
        required: true
      },
      // RELATIONS
      _courses: {
        type: Schema.ObjectId,
        ref: "course"
      },
      _student: {
        type: Schema.ObjectId,
        ref: "student"
      },
      
      
      // EXTERNAL RELATIONS
      /*
      */
    });

    generatedModel.setModel(db.connection.model("Grade", gradeSchema));

    return gradeSchema;
  },

  /**
   * Set Model
   */
  setModel: model => {
    generatedModel.model = model;
  },

  /**
   * Get model
   */
  getModel: () => {
    return generatedModel.model;
  },

  // Start queries
    

  // CRUD METHODS


  /**
  * gradeModel.create
  *   @description CRUD ACTION create
  *
  */
  async create(item) {
    const obj = new generatedModel.model(item);
    return await obj.save();
  },
  
  /**
  * gradeModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  async delete(id) {
    return await generatedModel.model.findByIdAndRemove(id);
  },
  
  /**
  * gradeModel.findBy_courses
  *   @description CRUD ACTION findBy_courses
  *   @param Objectid key Id of model to search for
  *
  */
  async findBy_courses(key) {
    return await generatedModel.model.find({ '_courses' : key});
  },
  
  /**
  * gradeModel.findBy_student
  *   @description CRUD ACTION findBy_student
  *   @param Objectid key Id of model to search for
  *
  */
  async findBy_student(key) {
    return await generatedModel.model.find({ '_student' : key});
  },
  
  /**
  * gradeModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  async get(id) {
    return await generatedModel.model.findOne({ _id : id });
  },
  
  /**
  * gradeModel.list
  *   @description CRUD ACTION list
  *
  */
  async list() {
    return await generatedModel.model.find();
  },
  
  /**
  * gradeModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  async update(item) { 
    return await generatedModel.model.findOneAndUpdate({ _id: item._id }, item, {'new': true});
  },
  


};

export default generatedModel;
