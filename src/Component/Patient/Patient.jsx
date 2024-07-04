import React, { useState } from 'react';
import { BrowserRouter,Link ,Route,Routes} from "react-router-dom";
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

const initialUsers = [
  { id: 1, name: 'John Doe', power: 200, age: 25, diseas: 'Developer' },
  { id: 2, name: 'Jane Smith', power: 400, age: 30, diseas: 'Designer' },
  { id: 3, name: 'Bob Johnson', power: 500, age: 35, diseas: 'Manager' },
];

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
  const [filterCriteria, setFilterCriteria] = useState('name');

  useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/user/getPatient/${id}`).then((response)=>{
      console.log("------------------------------------------")
          console.log(response.data)
          setUsers(response.data)
    }).catch((err)=>{
      console.log("Say no")
    })
    setValues(false);
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
          Add Patient
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
              <TableCell>Patient Info</TableCell>
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
                  <IconButton color="secondary" onClick={() => handleDeleteClick(user.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
                 <TableCell> <Button variant="outlined"><Link to="/getinfo">Get Info.</Link></Button></TableCell>
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
