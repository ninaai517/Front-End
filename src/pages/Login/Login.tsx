import React, { useEffect, useState } from 'react'
import { Grid, Paper, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

let navigate = useNavigate(); //antigo history = useHistory
    const [token, setToken] = useLocalStorage('token');

    const [UserLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha:'',
            token: ''
        })

        function updatedModel(e: ChangeEvent<HTMLInputElement>)
        {
            setUserLogin({
                ... UserLogin,
                [e.target.name]: e.target.value
            })
        }

        useEffect(()=>{
            if (token != '')
            {
                navigate('/home')
            }
        }, [token])

        async function onSubmit(e: ChangeEvent<HTMLFormElement>) 
        {
            e.preventDefault();

           try{
                await login(`/usuarios/logar`, UserLogin, setToken)
                alert('Usuário logado com sucesso!');
                
           }catch(error){
                alert('Dados do usuário inconsistentes. Erro ao logar!');

           }
        }

function Login() {
    return (
        <>
         <Grid container className='background'>
            <Grid item xs={12}>

                <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
                    <Box className="card" width={340} height="50vh" borderRadius={5}
                        marginTop={12} display="flex" justifyContent="center" alignItems="center">
                            <Box>
                                <Typography className='form-title' variant="h3" gutterBottom align="center">
                                    Login
                                </Typography>

                                <form id='form'>
                                    <Box marginY={4}>
                                        <TextField className='form-input' id="standard-basic" type="email" label="Email" required />
                                    </Box>

                                    <Box marginY={4}>
                                        <TextField className='form-input' id="standard-basic" type="password" label="Senha" required />
                                    </Box>
                    
                                    <Box>
                                        <Link to='/home' className='text-decoration'>
                                            <Button variant="contained" color="secondary" className="botao" type='submit'>
                                            Login
                                        </Button>
                                        </Link>
                                    </Box>
                                </form>
                                <Box display='flex' justifyContent='center' marginTop={2}>
                                    <Box marginRight={1} className='cadastrar'>
                                        <Typography variant='subtitle1' gutterBottom align='center'>
                                            Não tem uma conta?</Typography>
                                    </Box>
                                    <Link to='/cadastro'>
                                    <Typography variant='subtitle1' gutterBottom align='center' className='cadastrar-conta'>
                                        Cadastre-se</Typography>
                                    </Link>
                                </Box> 
                            </Box>
                        </Box>
                    </Box>

                </Grid>
            </Grid>
        </>
    )
}

export default Login