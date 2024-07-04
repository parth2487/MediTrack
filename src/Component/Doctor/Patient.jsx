import React, { useState,useEffect } from 'react';
import { BrowserRouter,Link ,Route,Routes} from "react-router-dom";
import axios from "axios"
import "./patient.css";
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
  const [formData, setFormData] = useState(user || { name: '', age: '', power: '', diseas: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    onSave(formData);
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
  const [users, setUsers] = useState(initialUsers);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCriteria, setFilterCriteria] = useState('fname');
const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
console.log(user)
  useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/user/getPatient/${user.id}`).then((response)=>{
      console.log("------------------------------------------")
          console.log(response.data)
          setUsers(response.data)
    }).catch((err)=>{
      console.log("Say no")
    })
  },[])

  const handleAddClick = () => {
    setCurrentUser(null);
    setDialogOpen(true);
  };

  const handleEditClick = (user) => {
    setCurrentUser(user);
    setDialogOpen(true);
  };

  const handleDeleteClick = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
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
 
  
    
    const value = user[filterCriteria].toString().toLowerCase();
    return value.includes(searchQuery.toLowerCase());
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
            <MenuItem value="fname">Name</MenuItem>
           
          </Select>
        </FormControl>
        <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleAddClick}>
          Add Patient
        </Button>
      </Box>
      <TableContainer component={Paper} sx={{ mt: 2, maxHeight: 600 }} className="ppp">
        <Table className="ppp" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Patient Info</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user._id}>
                <TableCell>{user.fname}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.address}</TableCell>
                <TableCell>{user.city}</TableCell>
               
                 <TableCell> <Button variant="outlined" ><Link to={`/doctor/getinfo/${user._id}`}>Get Info.</Link></Button></TableCell>
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
