import taskSchema from '../models/task.js'
const taskController = {
    addTask: async (req, res) => {
        try {
            const { title, description } = req?.body
            if (title && description) {

                const newTask = new taskSchema({
                    title,
                    description
                });
                const taskResponse = await newTask.save();
                if (taskResponse._id) {
                    return res.status(200).json({ message: 'Success', taskDetails: taskResponse });
                }

            }
            return res.status(400).json({ message: 'Expected values are missing...', error: true });

        } catch (err) {
            console.log(err, 'error');
            return res.status(400).json({ message: 'Something went wrong. please try again..', error: true });
        }
    },
    allActiveTasks: async (req, res) => {
        try {

            const sortValue = parseInt(req.query.sortValue)
            console.log(req.query.item, 'item is this');
            const searchItems = await taskSchema.find({
                title: { $regex: req.query.item, $options: 'i' },
                active: true,
                userId: '66a10d52dccda4d28a9b5dfd'
            })
                .sort({ created_at: sortValue })
                .select('-__v');
            if (searchItems) {
                console.log(searchItems, 'searchItems');
                return res.status(200).json({ tasks: searchItems, message: 'success' })
            }

            return res.status(200).json({ message: 'unable fetch deails...', tasks: [] });
        } catch (err) {
            console.log(err);
            return res.status(400).json({ message: 'Something went wrong. please try again..', error: true });
        }
    },

    removeTask: async (req, res) => {
        try {
            const itemId = req.body.taskID
            if (itemId) {
                const updatedTask = await taskSchema.findOneAndUpdate(
                    { _id: itemId },
                    { active: false },
                    { new: true }
                );
                if (updatedTask) {
                    return res.status(200).json({ message: 'Task updated successfully', task: updatedTask });
                } else {
                    return res.status(200).json({ error: true, message: 'Task not found' });
                }
            }
            return res.status(200).json({ error: true, message: 'item id is missing...' });
        } catch (err) {
            console.log(err, 'error is this');
            return res.status(405).json({ error: true, message: 'Internal server error' });
        }
    }

}
export default taskController;