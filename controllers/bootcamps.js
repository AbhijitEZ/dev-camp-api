/* 
  @desc     -> Get all bootcamps
  @access   -> Public 
*/
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Get all' });
};

/* 
  @desc     -> Get single bootcamp
  @access   -> Public
  @params   -> Id of the bootcamp 
*/
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Get ${req.params.id}` });
};

/* 
  @desc     -> Create new bootcamp
  @access   -> Private
*/
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Post Create' });
};

/* 
  @desc     -> Update bootcamp
  @access   -> Private
  @params   -> Id of the bootcamp 
*/
exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Put ${req.params.id} Update` });
};

/* 
  @desc     -> Delete bootcamp
  @access   -> Private
  @params   -> Id of the bootcamp 
*/
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete ${req.params.id} Delete One` });
};
