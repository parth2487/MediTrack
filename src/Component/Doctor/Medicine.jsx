import React, { useState,useEffect } from 'react';
import axios from "axios"
import "./medicine.css";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material';

import { Add as AddIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './../../utils/doctorAction.jsx';
 
const initialUsers = [];

const UserFormDialog = ({ open, onClose, onSave, user }) => {
  const dispatch = useDispatch();
  const userDoc = useSelector((state) => state.user);
  console.log(user)


  const [formData, setFormData] = useState(user || { name: '', age: '', power: '', diseas: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    onSave(formData);
    if(!user){
      console.log(formData)
      axios.post(`http://127.0.0.1:8000/user/medicine/${userDoc._id}`,formData).then((req,res)=>{

      }).catch((err)=>{
        console.log("Medicine Error")
      })
    }
    if(user){
      console.log("use is :")
      console.log(user)
       axios.post(`http://127.0.0.1:8000/user/updatemedi`,{formData,user}).then((req,res)=>{

      }).catch((err)=>{
        console.log("Medicine Error")
      })
    }
    
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{user ? 'Edit Medicine' : 'Add Medicine'}</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          name="name"
          label="Name"
          type="text"
          fullWidth
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="power"
          label="Power"
          type="number"
          fullWidth
          value={formData.power}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="age"
          label="Age"
          type="number"
          fullWidth
          value={formData.age}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="diseas"
          label="Diseas"
          type="text"
          fullWidth
          value={formData.diseas}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const Medicine = () => {
const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user)





  const [users, setUsers] = useState(initialUsers);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCriteria, setFilterCriteria] = useState('name');
  const [values,setValues]=useState(false)
  useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/user/getmedi/${user._id}`).then((response)=>{
      console.log("------------------------------------------")
          console.log(response.data)
          setUsers(response.data)
    }).catch((err)=>{
      console.log("Say no")
    })
    setValues(false);
  },[isDialogOpen,values])
  const handleAddClick = () => {
    setCurrentUser(null);
    setValues(true)
    setDialogOpen(true);
    setValues(true)
  };

  const handleEditClick = (user) => {
    setCurrentUser(user);
    setDialogOpen(true);
  };

  const handleDeleteClick = (user) => {
    axios.post(`http://127.0.0.1:8000/user/deletemedi`,user).then((req,res)=>{
      setValues(true)
      }).catch((err)=>{
        console.log("Medicine Error")
      })
    console.log("*******************")
    console.log(user)
  };

  const handleSaveUser = (user) => {
    if (currentUser) {
      setUsers((prevUsers) =>
        prevUsers.map((u) => (u.id === currentUser.id ? { ...user, id: currentUser.id } : u))
      );
    } else {
      const newUser = { ...user, id: users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1 };
      setUsers((prevUsers) => [...prevUsers, newUser]);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterCriteria(e.target.value);
  };

  const filteredUsers = users.filter((user) => {
    if(filterCriteria=="age"){
      if(searchQuery==""){
        const value = user[filterCriteria].toString().toLowerCase();
    return value.includes(searchQuery.toLowerCase());
      }
      else{
      const value =  parseInt(user[filterCriteria], 10);
      console.log(typeof value)
      return value== parseInt(searchQuery, 10)
    }
    }
      else if(filterCriteria=="power"){
      if(searchQuery==""){
        const value = user[filterCriteria].toString().toLowerCase();
    return value.includes(searchQuery.toLowerCase());
      }
    
        else{
      const value =  parseInt(user[filterCriteria], 10);
      console.log(typeof value)
      return value== parseInt(searchQuery, 10)
    }
    }
    else{
    const value = user[filterCriteria].toString().toLowerCase();
    return value.includes(searchQuery.toLowerCase());
  }
  });

  return (
    <Box sx={{ p: 8 }} className="okok">
      <Box className="search-container">
        <TextField
          className="search-bar"
          label={`Search by ${filterCriteria}`}
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <FormControl variant="outlined">
          <InputLabel id="filter-label">Filter By</InputLabel>
          <Select
            labelId="filter-label"
            value={filterCriteria}
            onChange={handleFilterChange}
            label="Filter By"
          >
            <MenuItem value="name">Name</MenuItem>
            <MenuItem value="power">Power</MenuItem>
            <MenuItem value="age">Age</MenuItem>
            <MenuItem value="diseas">Diseas</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleAddClick}>
          Add Medicine
        </Button>
      </Box>
      <TableContainer component={Paper} sx={{ mt: 2, maxHeight: 600 }} className="ppp">
        <Table className="ppp" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Power</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Diseas</TableCell>
              <TableCell>Update</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.power}</TableCell>
                <TableCell>{user.age}</TableCell>
                <TableCell>{user.diseas}</TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => handleEditClick(user)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="secondary" onClick={() => handleDeleteClick(user)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <UserFormDialog
        open={isDialogOpen}
        onClose={() => setDialogOpen(false)}
        onSave={handleSaveUser}
        user={currentUser}
      />
    </Box>
  );
};

export default Medicine;
