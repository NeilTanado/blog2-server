/*jshint esversion:6*/

const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports ={
  createUser:(req,res)=>{
    console.log(req.body);
    if(req.body.password.length > 4){
      var hash = bcrypt.hashSync(req.body.password, 10);
      var newUser = new User({
      name:req.body.name,
      email:req.body.email,
      password: hash
    });
    newUser.save()
      .then(dataUser=>{
        //karena create jadi 201
        res.status(201).json({
          message: 'berhasil add',
          dataUser
        });
      })
      .catch((err) => {
        res.status(500).json({
          message:'gagal create ada yang salah'
        });
      });
    }else{
      res.status(400).json({
        message :'gagal create ada yang salah'
      });
    }
  },

  readUser:(req,res)=>{
    User.find()
    .then(data=>{
      res.status(200).json({
        message: 'data dikirim',
        data
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: 'anda tidak ada authorized'
      });
    });
  },

  updateUser:(req,res)=>{
    User.update({
      _id:req.params.id
    },{
      $set:req.body
    })
    .then(data=>{
      res.status(200).json({
        message: 'data diupdate',
        data
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: 'anda tidak ada authorized'
      });
    });
  },

  deleteUser:(req,res)=>{
    User.findByIdAndRemove({
      _id:req.params.id
    })
    .then(data=>{
      res.status(200).json({
        message: 'data didelete',
        data
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: 'anda tidak ada authorized'
      });
    });
  },


  signin:(req,res)=>{
    console.log(req.body);
    User.findOne({email:req.body.email})
    .then(dataUserLogin=>{
      var cekPassword = bcrypt.compareSync(req.body.password, dataUserLogin.password)
      if(cekPassword===true){
        var token = jwt.sign({id:dataUserLogin.id,name:dataUserLogin.name,email:dataUserLogin.email},'secret')
        var userId = dataUserLogin.id
        res.status(200).json({
          message:'sukses login',
          token,userId
        })
      }else{
        res.status(400).json({
          message:'wrong password'
        })
      }
    })
  }

};

//5afd2233b689a10565c3a3fa
