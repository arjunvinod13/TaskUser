const Data = require('../Schema/dataSchema')

exports.addData = async(req,res) => {
    console.log(' addDetails');

    const userId = req.payload

    

    const {name,password,DOB,number,address} = req.body

    console.log(userId,name,password,DOB,number,address);

   

    try{
        const existingData = await Data.findOne({password})
        if(existingData){
            res.status(401).json('already exist')
        }
        else{
            const newData = new Data({

                name,password,DOB,number,address,userId

            })
            await newData.save()
            res.status(200).json(newData)
        }

        
    }
    catch(err){
        res.status(404).json({message:err.message})
    }

}