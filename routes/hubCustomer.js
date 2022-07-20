const express = require('express');
const { where } = require('sequelize');
const { Op } = require("sequelize");
const hubCustomer = require('../models/hubCustomer');
const router = express.Router();

// const hubCustomer = require('../models/hubCustomer')

// post or create
router.post('/hubCustomer', async (req, res) => {
    try {
        const {firstName, lastName, password, age, location, contact, item, quantity}= req.body

        const newHubCustomer = await hubCustomer.create({firstName, lastName, password, age, location, contact, item, quantity})

        res.status(201).json(newHubCustomer);
    } catch (error) {
        console.log('something is wrong', error);
    }
   
})

// get
router.get('/hubCustomer', async(req, res) => {
    try {
        const hubCustomers = await hubCustomer.findAll({attributes: ['firstName', 'lastName']});

        res.status(201).json(hubCustomers)
    } catch (error) {
        console.log('something is wrong', error);
    }
})

router.get('/hubCustomer/find', async(req, res) => {
    try {
        // const findHubcustomer = await hubCustomer.findAll({
        //     where : {
        //          [Op.or] : [{firstName: 'Rahina'} ,{ lastName: 'Yakubu'}]
        //     }
        // })

        // const findHubcustomer = await hubCustomer.findAll({
        //     where : {
        //         age: {
        //          [Op.col] : 'hubCustomer.firstName'
        //         }
        //     }
        // })

        // 
        
        const findHubcustomer = await hubCustomer.findAll({
          
              order  : [
                 ['firstName', 'DESC'] 
              ]
         
        })

        res.status(201).json(findHubcustomer)
    } catch (error) {
        console.log('something is wrong', error);
    }
})

// get by id
router.get('/hubCustomers/:id', async (req, res) => {
    try {
        const { id } = req.params

        // const oneHubCustomer = await hubCustomer.findAll(
        //     {
        //     where: {
        //         hubCustomer_id : {
        //             [Op.eq]: id
        //         }
        //     }
        // }
        // )

        const oneHubCustomer = await hubCustomer.findByPk(
        //     {
        //     where: {
        //         hubCustomer_id : {
        //             [Op.eq]: id
        //         }
        //     }
        // }
         id)

        res.status(201).json(oneHubCustomer)
    } catch (error) {
        console.log('something is wrong', error);
    }
})

// delete
router.delete('/hubCustomer/:age', async (req, res) =>{
    try {
         
        const { age } = req.params
        const delHubCustomer = await hubCustomer.destroy({
            where: {
                age: {
                    [Op.gte]: age
                }
            }
        })

        res.status(201).json(delHubCustomer)
    } catch (error) {
        
    }
})

// update
router.put ('/hubCustomer/:id', async (req, res) => {
    try {
        const { id } = req.params

        const {firstName, lastName, age, location, contact, item, quantity}= req.body

        const updatedHubCustomer = await hubCustomer.update({firstName, lastName, age, location, contact, item, quantity}, {
            where: {
                hubCustomer_id: id 
            }
        })
        res.status(201).json(updatedHubCustomer)
    } catch (error) {
        console.log("something is wrong", error);
    }
})



module.exports = router

//  || = 0r
//  && = and