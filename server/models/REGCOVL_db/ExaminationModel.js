import ExaminationModelGenerated from "./generated/ExaminationModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = ExaminationModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await ExaminationModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...ExaminationModelGenerated,
  ...customModel
};
