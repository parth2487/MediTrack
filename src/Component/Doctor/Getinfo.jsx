import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Autocomplete from '@mui/material/Autocomplete';
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './../../utils/doctorAction.jsx';
import "./getinfo.css"
import { 
    AppBar, 
    Toolbar, 
    Typography, 
    Container, 
    TextField, 
    Button, 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow, 
    Paper, 
    Box, 
    Select, 
    MenuItem, 
    InputLabel, 
    FormControl 
} from '@mui/material';

const initialMedicines = [];


const Getinfo = () => {

    const suggestions = [];

const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [medi,setmedi]=useState()
   const [a,seta]=useState(false)
useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/user/PatientMedi/${user._id}`).then((response)=>{
      console.log("------------------------------------------")
          console.log(response.data)
            setmedi(response.data)
          seta(true)
        

    }).catch((err)=>{
      console.log("Say no")
    })
},[])






if(a==true){
medi.map((k)=>{
    suggestions.push(k.name)
})
}


      const { id } = useParams();
      console.log(id)
      console.log(" ")
    const [medicines, setMedicines] = useState(initialMedicines);
    const [currentMedicine, setCurrentMedicine] = useState({});
    const [search, setSearch] = useState('');
    const [notice, setNotice] = useState('');
    const [editIndex, setEditIndex] = useState(-1);
     const [inputValue, setInputValue] = useState('');
  const [value, setValue] = useState(null);
  const [error, setError] = useState(false);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentMedicine({ ...currentMedicine, [name]: value });
        console.log(currentMedicine)

    };




useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/user/givenMediget/${id}`).then((response)=>{
      console.log("------------------------------------------")
          console.log(response.data)
          
        setMedicines(response.data)

    }).catch((err)=>{
      console.log("Say no")
    })
},[])






    const handleAddUpdateMedicine = () => {
        if (editIndex >= 0) {
            const updatedMedicines = medicines.map((medicine, index) =>
                index === editIndex ? currentMedicine : medicine
            );
            setMedicines(updatedMedicines);
            setEditIndex(-1);
        } else {
            setMedicines([...medicines, currentMedicine]);
             axios.post(`http://127.0.0.1:8000/user/givenMedi/${id}`,currentMedicine).then((response)=>{
      console.log("------------------------------------------")
      console.log(response)
    }).catch((err)=>{
      console.log("Say no")
    })
        }
        setCurrentMedicine({});
    };

    const handleEditMedicine = (index) => {
        setCurrentMedicine(medicines[index]);
        setEditIndex(index);
    };

    const blurring=()=>{
        console.log("hiiii")
        const s={"notice":notice};
        axios.post(`http://127.0.0.1:8000/user/notice/${id}`,s).then((response)=>{
      console.log("------------------------------------------")
   
    }).catch((err)=>{
      console.log("Say no")
    })
    }

    const handleDeleteMedicine = (index) => {
        const updatedMedicines = medicines.filter((_, i) => i !== index);
        setMedicines(updatedMedicines);
    };

    const filteredMedicines = medicines.filter(medicine =>
        medicine.name.toLowerCase().includes(search.toLowerCase())
    );

  const handleInputChange2 = (event, newInputValue) => {
    setInputValue(newInputValue);
    setError(false); // Reset error when input changes
  };

  const handleChange = (event, newValue) => {
   setValue(newValue);
   console.log(newValue)
    setCurrentMedicine({ ...currentMedicine, ["name"]: newValue });
    if (!newValue) {
      setError(true);
    } else {
      setInputValue(newValue);
    }
  };
    return (
        <Container sx={{ml:11, maxHeight: 800,overflow:"auto" }} className="opop">
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">Patient Medicine Manager</Typography>
                </Toolbar>
            </AppBar>
            <Box my={4} >
                <Typography variant="h4" gutterBottom>
                    Add or Update Medicine
                </Typography>
                <Autocomplete
        freeSolo
        options={suggestions}
        inputValue={inputValue}
        onInputChange={handleInputChange2}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose a fruit"
            fullWidth
            margin="normal"
            value={currentMedicine.name || ''}
            onChange={handleInputChange}
            name="name"
            error={error}
            helperText={error ? "Please select a valid option from the list" : null}
          />
        )}
        filterOptions={(options, state) =>
          options.filter((option) =>
            option.toLowerCase().includes(state.inputValue.toLowerCase())
          )
        }
        isOptionEqualToValue={(option, value) => option.toLowerCase() === value.toLowerCase()}
      />
      {error && (
        <Typography color="error" style={{ marginTop: '1rem' }}>
          Invalid selection. Please choose from the suggestions.
        </Typography>
      )}
                <TextField
                    name="power"
                    label="Power"
                    value={currentMedicine.power || ''}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    name="age"
                    label="Patient Age"
                    type="number"
                    value={currentMedicine.age || ''}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    name="disease"
                    label="Disease"
                    value={currentMedicine.disease || ''}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    name="duration"
                    label="Duration"
                    value={currentMedicine.duration || ''}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    name="quantity"
                    label="Quantity"
                    type="number"
                    value={currentMedicine.quantity || ''}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    name="times"
                    label="Times (e.g., morning, afternoon, night)"
                    value={currentMedicine.times || ''}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    name="when"
                    label="When to Take (e.g., before lunch)"
                    value={currentMedicine.when || ''}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handleAddUpdateMedicine} 
                    fullWidth
                    style={{ marginTop: 16 }}
                >
                    {editIndex >= 0 ? 'Update Medicine' : 'Add Medicine'}
                </Button>
            </Box>
            <Box my={4} >
                <Typography variant="h4" gutterBottom>
                    Current Medicines
                </Typography>
                <TextField
                    label="Search Medicine"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Power</TableCell>
                                <TableCell>Age</TableCell>
                                <TableCell>Disease</TableCell>
                                <TableCell>Duration</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>Times</TableCell>
                                <TableCell>When</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredMedicines.map((medicine, index) => (
                                <TableRow key={index}>
                                    <TableCell>{medicine.name}</TableCell>
                                    <TableCell>{medicine.power}</TableCell>
                                    <TableCell>{medicine.age}</TableCell>
                                    <TableCell>{medicine.disease}</TableCell>
                                    <TableCell>{medicine.duration}</TableCell>
                                    <TableCell>{medicine.quantity}</TableCell>
                                    <TableCell>{medicine.times}</TableCell>
                                    <TableCell>{medicine.when}</TableCell>
                                    <TableCell>
                                        <Button 
                                            onClick={() => handleEditMedicine(index)}
                                            color="primary"
                                        >
                                            Edit
                                        </Button>
                                        <Button 
                                            onClick={() => handleDeleteMedicine(index)}
                                            color="secondary"
                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Box my={4}  >
                <Typography variant="h4" gutterBottom>
                    Notices
                </Typography>
                <TextField
                    label="Notice to Patients"
                    value={notice}
                    onChange={(e) => setNotice(e.target.value)}
                    fullWidth
                    margin="normal"
                    onBlur={blurring}
                />
            </Box>
        </Container>
    );
};

export default Getinfo;
