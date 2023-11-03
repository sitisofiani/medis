const { check } = require("express-validator");

module.exports.data = [
    check('nama_pasien').not().isEmpty().withMessage('Nama Bidang tidak boleh kosong'),
    check('alamat').not().isEmpty().withMessage('Alamat tidak boleh kosong'),
    check('umur').not().isEmpty().withMessage('Umur tidak boleh kosong'),
    check('no_hp').not().isEmpty().withMessage('no_hp tidak boleh kosong')
]

module.exports.edit_data = [
    check('nama_pasien').not().isEmpty().withMessage('Nama Bidang tidak boleh kosong'),
    check('alamat').not().isEmpty().withMessage('Alamat tidak boleh kosong'),
    check('umur').not().isEmpty().withMessage('Umur tidak boleh kosong'),
    check('no_hp').not().isEmpty().withMessage('no_hp tidak boleh kosong')
]