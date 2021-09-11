import mongoose from 'mongoose';
const ObjectId = mongoose.Schema.ObjectId;

const StorageSchema = new mongoose.Schema({
    arr: {
        type: Array
    }
});

 const Storage = mongoose.model('Storage', StorageSchema);

 export default Storage;