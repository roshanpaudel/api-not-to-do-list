import mongoose from "mongoose";

//databse table(collection) selecting
const taskSchema = new mongoose.Schema(
  {
    task: { type: String, required: true },
    hr: {
      type: Number,
      required: true,
      min: 1,
      max: [100, "Are you sure,its too high"],
    },
    type: { type: String, default: "entry", enum: ["entry", "bad"] },
  },
  { timestamps: true }
);
const TaskCollection = mongoose.model("Task", taskSchema);

export const insertTask = (taskObj) => {
  return TaskCollection(taskObj).save();
};
export const getTask = () => {
  return TaskCollection.find();
};
export const updateTask = (_id, rest) => {
  return TaskCollection.findByIdAndUpdate(_id, rest, {
    new: true,
  });
};
export const deleteTask = (_id) => {
  return TaskCollection.findByIdAndDelete(_id);
};
