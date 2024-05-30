import mongoose from "mongoose";

const mentorSchema = mongoose.Schema({
  Mentor_name: { 
    type: String, 
    required: true 
},
  students: [
    { type: mongoose.Schema.Types.ObjectId,
     ref: "Student" 
    }
]
});
const Mentor = mongoose.model("Mentor", mentorSchema);

export default Mentor;
