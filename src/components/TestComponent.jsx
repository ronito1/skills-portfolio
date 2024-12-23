import React, { useEffect } from "react";
import { supabase } from "../supabase";

const TestComponent = () => {
  useEffect(() => {
    const testCRUDOperations = async () => {
      // Test INSERT
      const { data: insertData, error: insertError } = await supabase
        .from("projects")
        .insert([
          {
            name: "Test Project",
            description: "This is a test insert",
            techUsed: "React, Node.js",
            status: "Incomplete",
            completionDate: "2024-07-11",
          },
        ]);

      if (insertError) {
        console.error("Insert Error:", insertError.message);
      } else {
        console.log("Insert Success:", insertData);
      }

      // Test SELECT
      const { data: selectData, error: selectError } = await supabase
        .from("projects")
        .select("*");

      if (selectError) {
        console.error("Select Error:", selectError.message);
      } else {
        console.log("Select Success:", selectData);
      }

      // Test UPDATE
      const { data: updateData, error: updateError } = await supabase
        .from("projects")
        .update({ status: "Completed" })
        .eq("id", 1);

      if (updateError) {
        console.error("Update Error:", updateError.message);
      } else {
        console.log("Update Success:", updateData);
      }

      // Test DELETE
      const { data: deleteData, error: deleteError } = await supabase
        .from("projects")
        .delete()
        .eq("id", 1);

      if (deleteError) {
        console.error("Delete Error:", deleteError.message);
      } else {
        console.log("Delete Success:", deleteData);
      }
    };

    testCRUDOperations();
  }, []);

  return <div>Testing CRUD operations. Check console logs.</div>;
};

export default TestComponent;
