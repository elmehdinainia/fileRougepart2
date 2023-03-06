const router = require('express').Router()
const {
  managerUser,
  addcategory,
  findcategory,
  deletcategory,
  updatecategory,
  updateuser,
  listclient,
  listlivreur,
  addimage,
  deletproduct,
  GetAllProduct,
  updateproduct,
  statistique

} = require('../../controllers/userController/managerController')

// Error Handler
const { tryCatch } = require('../../middleware/tryCatch')
const { errorHandler } = require('../../middleware/errorHandler')
const upload = require('../../outils/imageUmploder')


router.get('/manager/me', tryCatch(managerUser))
router.post('/manager/addcategory', tryCatch(addcategory))
router.get('/manager/findcategory', tryCatch(findcategory))
router.delete('/manager/deletcategory/:id', tryCatch(deletcategory))
router.put('/manager/updatecategory/:id', tryCatch(updatecategory))
router.put('/manager/updateuser/:id', tryCatch(updateuser))

router.get('/manager/listclient', tryCatch(listclient))
router.get('/manager/listlivreur', tryCatch(listlivreur))
// crud plat
router.post('/manager/implodProduct',upload.single('images'), tryCatch(addimage))
router.delete('/manager/deleteProduct/:id', tryCatch(deletproduct))
router.get('/manager/GetAllProduct', tryCatch(GetAllProduct))
router.put('/manager/updateproduct/:id',upload.single('images'), tryCatch(updateproduct))
//statistique
router.get('/manager/statistique', tryCatch(statistique))






router.use(errorHandler)

module.exports = router