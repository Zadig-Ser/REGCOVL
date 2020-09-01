import CenterModelGenerated from "./generated/CenterModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = CenterModelGenerated.init();
  
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
      return await CenterModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...CenterModelGenerated,
  ...customModel
};
