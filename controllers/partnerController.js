const Partner = require('../models/partner');
exports.getAllPartners = async (req, res) => {
  try {
    const partners = await Partner.find();
    res.status(200).json(partners);
  } catch (error) {
    res.status(400).json({ message: 'Partners not found' });
  }};

exports.getOnePartner = async (req, res) => {
  try {
    const { id } = req.params;
    const partner = await Partner.findById(id);
    
    if (!partner) {
      return res.status(404).json({ message: 'Partner not found' });
    }
    
    res.status(200).json(Partner);
  } catch (error) {
    res.status(400).json({ message: 'Error retrieving the Partner' });
  }
};

exports.createPartner = async (req, res) => {
  try {
    const partner = new Partner({
      link: req.body.link,
      image: req.body.image,
    });
    await partner.save();
    res.status(201).json({ message: 'Partner saved successfully!' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }};
exports.updatePartner = async (req, res) => {
      const updatedPartner = {
      link: req.body.link,
      image: req.body.image,
      };
      Partner.updateOne({ _id: req.params.id }, updatedPartner)
        .then(() => res.status(200).json({ message: 'Partner updated successfully!' }))
        .catch(() => res.status(404).json({ message: 'Partner not found' }));
};
exports.deletePartner = async (req, res) => {
  try{
  await Partner.deleteOne({_id: req.params.id});
  res.status(201).json({ message: 'Partner deleted successfully!' });        
  }catch (error) {
    res.status(403).json({ message: 'You are not an admin' });
  }};