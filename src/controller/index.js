import allItems from '../database/index.js';

const itemControllers = {
    getAllItems: (req, res) => res.status(200).json(allItems),

    getItem: (req, res) => {
        const { id } = req.params;
        const item = allItems.find(item => item?.id == id);
        if (item) {
            res.status(200).json(item);
        } else {
            res.status(404).json({
                message: 'Item not found'
            });
        }
    }

}

export default itemControllers;