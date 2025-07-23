import mongoose from "mongoose";

//databse table(collection) selecting
const taskSchema = new mongoose.Schema(
  {
    habitName: { type: String, required: true },
    hours: {
      type: Number,
      required: true,
    },
    isBadHabit: { type: Boolean, default: false },
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
export const deleteMultipleTasks = (ids) => {
  return TaskCollection.deleteMany({ _id: { $in: ids } });
};