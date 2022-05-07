import './signup.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        fullName: "",
        mobileNumber: "",
        email: "",
        password: ""
    });

    const [data, setData] = useState([]);
    
    const handleChange = (e) => {
        const{ name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
        console.log(e.target);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserData([...data, userData]);

        axios.post('https://bewakoof-projects.herokuapp.com/register', userData).then(() => {
            alert('SignUp Successfully');
            navigate('/Home/login');

            setUserData({
                fullName: "",
                mobileNumber: "",
                email: "",
                password: ""
            });
            
        });
    };

    useEffect(() => {
        getData();
    },[]);

    const getData = () => {
        axios.get('https://bewakoof-projects.herokuapp.com/register').then((res) => {
            setData(res.data);
            console.log(res.data);
        });
    };


    return (
        <div>
            <div className="signup_box">
                <div>
                    <h1>Sign Up</h1>
                    <p>Hi new buddy, let's get you started with the bewakoofi!</p>
                                
                    <TextField value={userData.fullName} name='fullName' onChange={handleChange} sx={{ width: '360px', height: '43px',padding: '5px 0px 0px', marginBottom: '15px'}} id="standard-basic" label="Name" variant="standard" />
                    <TextField value={userData.mobileNumber} name='mobileNumber' onChange={handleChange} sx={{ width: '360px', height: '43px',padding: '5px 0px 0px', marginBottom: '15px'}} id="standard-basic" label="Mobile" variant="standard" />
                    <TextField value={userData.email} name='email' onChange={handleChange} sx={{ width: '360px', height: '43px',padding: '5px 0px 0px', marginBottom: '15px'}} id="standard-basic" label="Email Id" variant="standard" />
                    <TextField value={userData.password} name='password' onChange={handleChange} sx={{ width: '360px', height: '43px',padding: '5px 0px 0px', marginBottom: '15px'}} id="standard-basic" type="password" label="Password" variant="standard" />
                    
                    <Button onClick={handleSubmit} sx={{ width: "360px", height: "60px", fontFamily: "montserrat-bold, sans-serif",fontSize: "20px", padding: "6px", background: "#989898", marginTop: "15px" }}>Proceed</Button>
                </div>

            </div>
        </div>
    )
}