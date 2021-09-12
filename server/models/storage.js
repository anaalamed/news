import mongoose from 'mongoose';

const StorageSchema = new mongoose.Schema({
    storage: {
        type: Object
    }
});

 const Storage = mongoose.model('Storage', StorageSchema);

 export default Storage;