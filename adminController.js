const data = {
    Administrator: require('../model/Administrator.json'),
    setAdministrator: function (data) { this.Administrator = data }
}

const getAllAdministrator = async (req, res) => {
    const administrator = await Administrator.find();
    if (!administrator) return res.status(204). json({ 'message' : 'No administrator found.' });
    res.json(administrator);
}

const createNewAdministrator = async (req, res) => {
    if (!req?.body?.firstname||!req?.body?.lastname){
        return res.status(400).json({'message': 'First and last names are required'});
    }
    try{
        const result = await Administrator.create({
            firstname: req.body.firstname,
        lastname: req.body.firstname,
        lastname: req.body.lastname
        });

        res.status(201).json(result);
    } catch(err){
        console.error(err);
    }
}


const updateAdministrator =async  (req, res) => {
   if (!req?.body?.id){
    return res.status(400).json({'message':'ID parameter is required'});
   }
   const administrator = await Administrator.findOne({_id:req.body.id}).exec();

    if (!Administrator) {
        return res.status(400).json({ "message": `Administrator ID ${req.body.id} not found` });
    }
    if (req.body?.firstname) Administrator.firstname = req.body.firstname;
    if (req.body?.lastname) Administrator.lastname = req.body.lastname;
   const result = await administrator.save();
    res.json(result);
}

const deleteAdministrator = async (req, res) => {
    if (!req?.body?.id) return res.status(400).json({'message': 'Employee ID required'});
    const administrator = await Administrator.findOne({_id:req.body.id}).exec();

    if (!Administrator) {
        return res.status(400).json({ "message": `Administrator ID ${req.body.id} not found` });
    }
    const result = await employee.deleteOne({_id:red.body.id});
    res.json(result);
}

const getAdministrator = async (req, res) => {
    if (!req?.body?.id)return res.status(400).json({'message': 'Employee ID required'});
   const administrator = await Administrator.findOne({_id:req.params.id}).exec();
    if (!Administrator) {
        return res.status(400).json({ "message": `Administrator ID ${req.params.id} not found` });
    }
    res.json(Administrator);
}

module.exports = {
    getAetAdministrator,
    createNewAdministrator,
    updateAdministrator,
    deleteAdministrator,
    getAdministrator
}