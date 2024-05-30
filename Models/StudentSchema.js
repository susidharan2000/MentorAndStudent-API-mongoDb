import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  student_name: {
         type: String, 
        required: true 
    },
    mentor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Mentor",
      default: null
    },
    previousMentor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Mentor',
      default: null
  }
});

studentSchema.set('strictPopulate', false);

const Student = mongoose.model("Student", studentSchema);


export default Student;