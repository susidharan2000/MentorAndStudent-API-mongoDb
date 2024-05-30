import Mentor from "../Models/MetorSchema.js"
import Student from "../Models/StudentSchema.js";

//create Mentor 

export const createMentor = async(req,res)=>{
    try{
        /* This code snippet is a controller function in a Node.js application that is responsible for
        creating a new mentor. Here's a breakdown of what each part does: */
        const newMentor= new Mentor(req.body);
        const mentor = await newMentor.save();
        res.status(200).json({Message:"Mentor Added Successfully",mentor});
    }
    catch(error){
        console.log(error);
        res.status(500).json({Message:"Internal Server Error in Create Mentor Method"});
    }
}

// Get Mentor

export const getMentor = async(req,res)=>{
    try{
        const mentors = await Mentor.find(); //finding mentor
        res.status(200).json({Message:"Mentor List:",mentor:mentors});
    }
    catch(error){
        console.log(error);
        res.status(500).json({Message:"Internal Server Error in Get Mentor Method"});
    }
}

//Create Student
export const createStudent = async(req,res)=>{
    try{
        const newstudent= new Student(req.body);
        const student = await newstudent.save();
        res.status(200).json({Message:"Mentor Added Successfully",student});
    }
    catch(error){
        console.log(error);
        res.status(500).json({Message:"Internal Server Error in Create Mentor Method"});
    }
}

//get student
export const getStudent = async(req,res)=>{
    try{
        const students = await Student.find();
        res.status(200).json({Message:"Student List:",student:students});
    }
    catch(error){
        console.log(error);
        res.status(500).json({Message:"Internal Server Error in Get Mentor Method"});
    }
}

//Assign student to mentor
export const AssignStudentToMentor = async(req,res)=>{
    try{
        const {Mentorid,Studentid} = req.params;
        const student = await Student.findByIdAndUpdate(Studentid,{mentor: Mentorid},{new:true});
        const mentor = await Mentor.findByIdAndUpdate(
            Mentorid,
            { $addToSet: { students: Studentid } }, 
            { new: true }
        );
        res.status(200).json({Message:"Student Assignsed to mentor",student,mentor});
    }
    catch(error){
        console.log(error);
        res.status(500).json({Message:"Internal Server Error in Get Mentor Method"});
    }
}

//Assign or change mentor for particular student
export const ChangeMentortostudent = async (req, res) => {
    try {
        const { Studentid, newMentorid } = req.params;
        const student = await Student.findById(Studentid);

        if (!student) {
            return res.status(404).json({ Message: "Student not found" });
        }

        // Store the current mentor's ID as the previous mentor
        const previousMentorId = student.mentor;

        // If the student already has a mentor, remove the student from the old mentor's students array
        if (previousMentorId) {
            await Mentor.findByIdAndUpdate(
                previousMentorId,
                { $pull: { students: Studentid } },
                { new: true }
            );
        }

        // Assign the new mentor to the student
        student.mentor = newMentorid;
        // Update the previous mentor field with the ID of the current mentor
        student.previousMentor = previousMentorId;
        await student.save();

        // Add the student to the new mentor's students array
        const newMentor = await Mentor.findByIdAndUpdate(
            newMentorid,
            { $addToSet: { students: Studentid } },
            { new: true }
        );

        // If there was a previous mentor, update their list of students
        if (previousMentorId) {
            await Mentor.findByIdAndUpdate(
                previousMentorId,
                { $pull: { students: Studentid } },
                { new: true }
            );
        }

        // Send response with success message and updated student and mentor information
        res.json({
            message: "Mentor assigned or changed successfully",
            student,
            newMentor,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ Message: "Internal Server Error in Get Mentor Method" });
    }
};


// Get all Student From a Particular menmtor

export const GetAllStudentformMentor = async(req,res)=>{
    try{
        const Emp_id = req.params.mentorid;
        const mentors = await Mentor.findById({_id:Emp_id});
        res.status(200).json({Message:`Mentor: ${mentors.Mentor_name}`,students:mentors.students});
    }
    catch(error){
        console.log(error);
        res.status(500).json({Message:"Internal Server Error in Get Mentor Method"});
    }
}

//Get previous mentor of a student 

export const getPreviousMentor = async (req, res, next) => {
    try {
      const studentId = req.params.studentId;
  
      const student = await Student.findById(studentId);

  
      if (!student) {
        return res.status(404).json({ error: "Student not found." });
      }
    
  
      // Check if the student has a previous mentor
      if (!student.previousMentor) {
        return res.status(404).json({ message: "No previous mentor assigned." });
      }
  
      // Return the previous mentor
      res.json({Message:`${student.student_name}'s Previous Mentor`,previousMentor:student.previousMentor});
    } catch (error) {
      next(error);
    }
  };
  
