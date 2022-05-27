const router = require("express").Router();
const Musee = require('../models/Musee')



// @desc get all musee
// @ /api/musees/museesList
// @ get request
router.get('/museesList' , async(req,res)=>{
try {
        const musees=await Musee.find({})
        res.status(200)
            .json({status : true , msg :"Liste de Musees" , data : musees })
}

catch(err) {
res.status(400)
    .json({msg:err})}

})

// @desc create musee
// @ /api/musees/creerMusee
// @ post request

router.post("/creerMusee" , async (req,res)=>{

    try {
        const {nom,region,images,description,adresse,collectionDescription,collectionImage} = req.body
       const existingMusee = await Musee.findOne({nom:nom})
        //vérifier si le muséé existe déja ou nn
        if (existingMusee) {
                res.status(400)
                    .json({msg : "MUSEE EXISTE DEJA !!!!!!"})
        }
        else {
            //création d'un nouveau muséé
            const musees = await Musee.create({
                nom,
                region,
                images,
                description,
                adresse,
                collectionDescription,
                collectionImage
            })
            res.status(200)
                .json({status:true , msg : "MUSEE CREE AVEC SUCCES"})
        }
                         

                 }
    catch(err) {
        console.log(err)
        res.status(400)
            .json({msg:err})}
})
// @desc update musee
// @ /api/musees/modifierMusee
// @ update request
router.put('/modifierMusee/:id',async(req,res)=>{ 
    try {
                //déstructuration de l'id de musee
        const {id} = req.params;
                //vérifier si le musee existe
        let musee = await Musee.findById(id)
        if (musee) {
          const newMusee =  await Musee.findByIdAndUpdate(id ,
                                                     { ...req.body } , { new  : true}
                                                    )
                res.status(200)
                .json({status :true , message : "MUSEE MODIFIE AVEC SUCCES" , data : newMusee})

                 }
        else {
            res.status(404).json({status : true , message : 'MUSEE INTROUVABLE'})

        }
    }
    catch(err){
        res.status(500).json({status : false , message : err})

    }

 })



// @desc delete musee
// @ /api/musees/supprimerMusee
// @ delete request

router.delete('/supprimerMusee/:id',async(req,res)=>{
    try {
        //déstructuration de l'id de musee
        const {id} = req.params;

        let musee = await Musee.findById(id)
        //vérifier si le musee existe
        if (musee) {
            //suppression
            await Musee.findByIdAndDelete(id)
                res.status(200)
                .json({status :true , message : "MUSEE SUPPRIME AVEC SUCCES"})

        }
        else {
            res.status(404)
            .json({status : true , message :"MUSEE INTROUVABLE"} )

        }

           }
    catch(err) {
        res.status(500).json({status : false , message : err})
    }

} )
    





module.exports = router 
