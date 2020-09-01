import DepartmentModelGenerated from "./generated/DepartmentModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = DepartmentModelGenerated.init();
  
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
      return await DepartmentModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...DepartmentModelGenerated,
  ...customModel
};
